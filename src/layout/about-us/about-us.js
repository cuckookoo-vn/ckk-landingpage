import './about-us.scss';
import {Navigation, Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import {useTranslation} from "react-i18next";
import {useEffect, useRef, useState} from "react";
import DevelopmentTeamMember from "../../components/development-team-member/development-team-member";
import AboutUsMember from "../../components/about-us-member/about-us-member";

const AboutUs = ({windowDimensions}) =>{
    const urlImage = "https://d2lonqwqrbh3kq.cloudfront.net/about-us/ckksite-about-us-team-";

    const [openPopup, setOpenPopup] = useState(false);

    const [slideIndex, setSlideIndex] = useState(0);

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
            slideDataTemp.slidesPerGroup = 1;
        }else if(windowDimensions.width > 900){
            slideDataTemp.slidesPerView = 3;
            slideDataTemp.spaceBetween = 15;
            slideDataTemp.slidesPerGroup = 1;
        }else if(windowDimensions.width > 600){
            slideDataTemp.slidesPerView = 2;
            slideDataTemp.spaceBetween = 15;
            slideDataTemp.slidesPerGroup = 1;
        }
        else{
            slideDataTemp.slidesPerView = 1;
            slideDataTemp.spaceBetween = 15;
            slideDataTemp.slidesPerGroup = 1;
        }
        return slideDataTemp;
    };

    const [slideData, setSlideData] = useState(checkWidthWindowSetSlideData);

    useEffect(()=>{
        setSlideData(checkWidthWindowSetSlideData)
    },[windowDimensions.width])

    // translation
    const {t} = useTranslation();

    return(
        <>
            <div id="about-us">
                <div className="container-child">
                    <div className="core-team">
                        <span className="title-main">{t("aboutUs.cuckookooTeam.titleMain")}</span>
                        <span className="description">{t("aboutUs.cuckookooTeam.description")}</span>
                        <div className="box-slide">
                            <Swiper
                                slidesPerView={slideData.slidesPerView}
                                spaceBetween={slideData.spaceBetween}
                                slidesPerGroup={slideData.slidesPerGroup}
                                autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: false,
                                    pauseOnMouseEnter: true
                                }}
                                speed={1000}
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
                                                setOpenPopup={setOpenPopup}
                                                setSlideIndex={setSlideIndex}
                                                index={index}
                                            />
                                        </SwiperSlide>
                                    )}
                                </div>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
            {
                openPopup && <AboutUsMember setOpenPopup={setOpenPopup} slideIndex={slideIndex}/>
            }

        </>
    )
}

export default AboutUs;