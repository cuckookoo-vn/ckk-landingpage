import './about-us.scss';
import {Navigation, Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import {useTranslation} from "react-i18next";
import {useState} from "react";
import DevelopmentTeamMember from "../../components/development-team-member/development-team-member";
import AboutUsMember from "../../components/about-us-member/about-us-member";
import {cloudS3} from "../../constant/global";

const AboutUs = ({windowDimensions}) =>{
    const urlImage = cloudS3 + "about-us/ckksite-about-us-team-";


    const {t} = useTranslation();

    const [openPopup, setOpenPopup] = useState(false);

    const [slideIndex, setSlideIndex] = useState(0);

    const memberTeam = [
        {
            name: 'Paul Pham',
            position: 'Chairman - CEO - Founder Cuckookoo',
            image: urlImage + '1.png',
            content: t("aboutUs.paulPham")
        },
        {
            name: 'Felix Nguyen',
            position: 'CEO Chainos Global',
            image: urlImage + '2.png',
            content: t("aboutUs.felixNguyen")
        },
        {
            name: 'Tony Quach',
            position: 'Chairman Chainos Global',
            image: urlImage + '3.png',
            content: t("aboutUs.tonyQuach")
        },
        {
            name: 'Mr.Kan',
            position: 'AI Leader',
            image: urlImage + '4.png',
            content: t("aboutUs.kanPham")
        },
        {
            name: 'Henry Ho',
            position: 'Solution Architect',
            image: urlImage + '5.png',
            content: t("aboutUs.henryHo")
        },
        {
            name: 'Julie Tran',
            position: 'Business Analyst Leader',
            image: urlImage + '6.png',
            content: t("aboutUs.julieTran")
        },
        {
            name: 'Joy Le',
            position: 'Artist Manager',
            image: urlImage + '7.png',
            content: t("aboutUs.joyLe")
        },
        {
            name: 'Leon Nguyen',
            position: 'Senior Artist',
            image: urlImage + '8.png',
            content: t("aboutUs.leonNguyen")
        },
        {
            name: 'Johnny Le',
            position: 'Developer Leader',
            image: urlImage + '9.png',
            content: t("aboutUs.JohnnyLe")
        },

        {
            name: 'GiGi Le',
            position: 'Translator',
            image: urlImage + '10.png',
            content: t("aboutUs.gigiLe")
        },
    ];

    return(
        <>
            <div id="about-us">
                <div className="container-child">
                    <div className="core-team">
                        <span className="title-main">{t("aboutUs.cuckookooTeam.titleMain")}</span>
                        <span className="description">{t("aboutUs.cuckookooTeam.description")}</span>
                        <div className="box-slide">
                            <Swiper
                                breakpoints={{
                                    0: {
                                        slidesPerView: 1,
                                        spaceBetween: 15,
                                        slidesPerGroup: 1,
                                    },
                                    600: {
                                        slidesPerView: 2,
                                        spaceBetween: 15,
                                        slidesPerGroup: 1,
                                    },
                                    900: {
                                        slidesPerView: 3,
                                        spaceBetween: 15,
                                        slidesPerGroup: 1,
                                    },
                                    1399.5: {
                                        slidesPerView: 4,
                                        spaceBetween: 30,
                                        slidesPerGroup: 1,
                                    }
                                }}
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

            <AboutUsMember openPopup={openPopup} setOpenPopup={setOpenPopup} slideIndex={slideIndex} datasSlide={memberTeam}/>
        </>
    )
}

export default AboutUs;