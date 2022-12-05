import {useEffect, useRef, useState} from "react";
import './about-us-member.scss';
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper";
import {useTranslation} from "react-i18next";
import ContentAboutUsMember from "../content-about-us-member/content-about-us-member";
import {faAnglesRight, faAnglesLeft, faCircleXmark} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const AboutUsMember = ({setOpenPopup, slideIndex}) =>{
    const urlImage = "https://d2lonqwqrbh3kq.cloudfront.net/about-us/ckksite-about-us-team-";

    const swiperRef = useRef(null);

    const {t} = useTranslation();

    const datasSlide = [
        {
            name: 'Paul Pham',
            position: 'Product Owner',
            image: urlImage + '1.png',
            content: t("aboutUs.paulPham")
        },
        {
            name: 'Felix Nguyen',
            position: 'Executive',
            image: urlImage + '2.png',
            content: t("aboutUs.felixNguyen")
        },
        {
            name: 'Tony Quach',
            position: 'Executive',
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
            position: 'Content Advisor Leader',
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
            content: t("aboutUs.johnnyLe")
        },

        {
            name: 'GiGi Le',
            position: 'Translator',
            image: urlImage + '10.png',
            content: t("aboutUs.gigiLe")
        },
    ]

    // button slide
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    useEffect(()=>{
        swiperRef.current?.swiper.slideTo(slideIndex+1);
    },[slideIndex])

    return(
        <div className="about-us-member">
            <div className="about-us-member-slide">
                <Swiper
                    ref={swiperRef}
                    slidesPerView={1}
                    spaceBetween={40}
                    slidesPerGroup={1}
                    preventClicks={true}
                    loop={true}
                    loopFillGroupWithBlank={false}
                    pagination={{
                        clickable: true,
                        dynamicBullets: true,
                    }}
                    modules={[Pagination, Navigation]}
                    className="swiper-member-slide"
                    onInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                        swiper.navigation.init();
                        swiper.navigation.update();
                    }}
                >
                    <FontAwesomeIcon icon={faCircleXmark}
                                     onClick={()=>setOpenPopup(false)}
                                     className="icon-close-popup-member"/>

                    <div className="swiper-member">
                        {datasSlide.map((element, index) =>
                            <SwiperSlide key={index}>
                                <ContentAboutUsMember element={element}/>
                            </SwiperSlide>
                        )}
                    </div>

                    <FontAwesomeIcon ref={prevRef} icon={faAnglesLeft} className="icon-slide icon-pre" />

                    <FontAwesomeIcon ref={nextRef} icon={faAnglesRight} className="icon-slide icon-next" />
                </Swiper>
            </div>
        </div>
    )
}

export default AboutUsMember;