import {useEffect, useRef, useState} from "react";
import './about-us-member.scss';
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper";
import ContentAboutUsMember from "../content-about-us-member/content-about-us-member";
import {faAnglesRight, faAnglesLeft, faCircleXmark} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const AboutUsMember = ({setOpenPopup, slideIndex, datasSlide}) =>{

    const swiperRef = useRef(null);

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