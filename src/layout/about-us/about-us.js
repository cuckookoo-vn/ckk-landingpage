import './about-us.scss';
import {Navigation, Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import {useTranslation} from "react-i18next";
import {useEffect,useRef, useState} from "react";
import DevelopmentTeamMember from "../../components/development-team-member/development-team-member";

const AboutUs = ({windowDimensions}) =>{
    const urlImage = "https://ckksite.s3.ap-northeast-2.amazonaws.com/about-us/ckksite-about-us-team-";

    const memberTeam = [
        {
            name: 'Paul Pham',
            position: 'Product Owner',
            image: urlImage + '1.png',
        },
        {
            name: 'Felix Nguyen',
            position: 'Executive',
            image: urlImage + '2.png',
        },
        {
            name: 'Tony Quach',
            position: 'Executive',
            image: urlImage + '3.png',
        },
        {
            name: 'Mr.Kan',
            position: 'AI Leader',
            image: urlImage + '4.png',
        },
        {
            name: 'Henry Ho',
            position: 'Solution Architect',
            image: urlImage + '5.png',
        },
        {
            name: 'Julie Tran',
            position: 'Content Advisor Leader',
            image: urlImage + '6.png',
        },
        {
            name: 'Joy Le',
            position: 'Artist Manager',
            image: urlImage + '7.png',
        },
        {
            name: 'Leon Nguyen',
            position: 'Senior Artist',
            image: urlImage + '8.png',
        },
        {
            name: 'Johnny Le',
            position: 'Developer Leader',
            image: urlImage + '9.png',
        },

        {
            name: 'GiGi Le',
            position: 'Translator',
            image: urlImage + '10.png',
        },
    ];

    // check width set data slide
    const checkWidthWindowSetSlideData = () =>{
        let slideDataTemp = {
            slidesPerView: 4,
            spaceBetween: 30,
            slidesPerGroup: 4,
        };

        if(windowDimensions.width > 1399.5){
            slideDataTemp.slidesPerView = 4;
            slideDataTemp.spaceBetween = 30;
            slideDataTemp.slidesPerGroup = 4;
        }else if(windowDimensions.width > 991.5){
            slideDataTemp.slidesPerView = 3;
            slideDataTemp.spaceBetween = 15;
            slideDataTemp.slidesPerGroup = 3;
        }else{
            slideDataTemp.slidesPerView = 2;
            slideDataTemp.spaceBetween = 15;
            slideDataTemp.slidesPerGroup = 2;
        }
        return slideDataTemp;
    };

    const [slideData, setSlideData] = useState(checkWidthWindowSetSlideData)

    useEffect(()=>{
        setSlideData(checkWidthWindowSetSlideData)
    },[windowDimensions.width])

    // translation
    const {t} = useTranslation();

    // button slide
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return(
        <div id="about-us">
            <div className="container-child">
                <div className="core-team">
                    <span className="title-main">{t("aboutUs.cuckookooTeam.titleMain")}</span>
                    <div className="box-slide">
                        <Swiper
                            slidesPerView={slideData.slidesPerView}
                            spaceBetween={slideData.spaceBetween}
                            slidesPerGroup={slideData.slidesPerGroup}
                            // autoplay={{
                            //     delay: 6000,
                            //     disableOnInteraction: false,
                            //     pauseOnMouseEnter: true
                            // }}
                            preventClicks={true}
                            loop={true}
                            loopFillGroupWithBlank={false}
                            pagination={{
                                clickable: true,
                                dynamicBullets: true,
                            }}
                            modules={[Pagination, Navigation]}
                            className="mySwiper"
                            onInit={(swiper) => {
                                swiper.params.navigation.prevEl = prevRef.current;
                                swiper.params.navigation.nextEl = nextRef.current;
                                swiper.navigation.init();
                                swiper.navigation.update();
                            }}
                        >
                            <div className="box-member">
                                {memberTeam.map((element, index) =>
                                    <SwiperSlide  key={index}>
                                        <DevelopmentTeamMember
                                            image={element.image}
                                            name={element.name}
                                            position={element.position}
                                        />
                                    </SwiperSlide>
                                )}
                            </div>

                            {/*<div ref={prevRef}*/}
                            {/*     data-aos="fade-right"*/}
                            {/*     className="icon-slide icon-next hidden-mobile">*/}
                            {/*    <img className="icon-next" src={images.pre} alt="pre"/>*/}
                            {/*</div>*/}

                            {/*<div ref={nextRef}*/}
                            {/*     data-aos="fade-left"*/}
                            {/*     className="icon-slide icon-pre hidden-mobile">*/}
                            {/*    <img src={images.next} alt="next"/>*/}
                            {/*</div>*/}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;