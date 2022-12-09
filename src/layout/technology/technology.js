import './technology.scss';
import {useTranslation} from "react-i18next";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper";
import TechnologySlide from "../../components/technology-slide/technology-slide";
import {cloudS3} from "../../constant/global";

const Technology = ({windowDimensions}) =>{
    const imageTechnology = [
        [
            {image: cloudS3 + "technology/ckksite-technology-1.png"},
            {image: cloudS3 + "technology/ckksite-technology-2.png"},
            {image: cloudS3 + "technology/ckksite-technology-3.png"},
            {image: cloudS3 + "technology/ckksite-technology-4.png"},
            {image: cloudS3 + "technology/ckksite-technology-5.png"},
            {image: cloudS3 + "technology/ckksite-technology-6.png"},
            {image: cloudS3 + "technology/ckksite-technology-7.png"},
            {image: cloudS3 + "technology/ckksite-technology-8.png"},
            {image: cloudS3 + "technology/ckksite-technology-9.png"},
            {image: cloudS3 + "technology/ckksite-technology-10.png"},
            {image: cloudS3 + "technology/ckksite-technology-11.png"},
            {image: cloudS3 + "technology/ckksite-technology-12.png"},

        ],
        [
            {image: cloudS3 + "technology/ckksite-technology-13.png"},
            {image: cloudS3 + "technology/ckksite-technology-14.png"},
            {image: cloudS3 + "technology/ckksite-technology-15.png"},
            {image: cloudS3 + "technology/ckksite-technology-16.png"},
            {image: cloudS3 + "technology/ckksite-technology-17.png"},
            {image: cloudS3 + "technology/ckksite-technology-18.png"},
            {image: cloudS3 + "technology/ckksite-technology-19.png"},
            {image: cloudS3 + "technology/ckksite-technology-20.png"},
            {image: cloudS3 + "technology/ckksite-technology-21.png"},
            {image: cloudS3 + "technology/ckksite-technology-22.png"},
            {image: cloudS3 + "technology/ckksite-technology-23.png"},
            {image: cloudS3 + "technology/ckksite-technology-24.png"},

        ],
        [
            {image: cloudS3 + "technology/ckksite-technology-25.png"},
            {image: cloudS3 + "technology/ckksite-technology-26.png"},
            {image: cloudS3 + "technology/ckksite-technology-27.png"},
            {image: cloudS3 + "technology/ckksite-technology-28.png"},
            {image: cloudS3 + "technology/ckksite-technology-29.png"},
            {image: cloudS3 + "technology/ckksite-technology-30.png"},
            {image: cloudS3 + "technology/ckksite-technology-31.png"},
            {image: cloudS3 + "technology/ckksite-technology-32.png"},
            {image: cloudS3 + "technology/ckksite-technology-33.png"},
            {image: cloudS3 + "technology/ckksite-technology-34.png"},
            {image: cloudS3 + "technology/ckksite-technology-35.png"},
            {image: cloudS3 + "technology/ckksite-technology-36.png"},
        ],
        [
            {image: cloudS3 + "technology/ckksite-technology-37.png"},
            {image: cloudS3 + "technology/ckksite-technology-38.png"},
        ]
    ]

    const imageTechnologyMobile = [
        [
            {image: cloudS3 + "technology/ckksite-technology-1.png"},
            {image: cloudS3 + "technology/ckksite-technology-2.png"},
            {image: cloudS3 + "technology/ckksite-technology-3.png"},
            {image: cloudS3 + "technology/ckksite-technology-4.png"},
            {image: cloudS3 + "technology/ckksite-technology-5.png"},
            {image: cloudS3 + "technology/ckksite-technology-6.png"},
        ],
        [
            {image: cloudS3 + "technology/ckksite-technology-7.png"},
            {image: cloudS3 + "technology/ckksite-technology-8.png"},
            {image: cloudS3 + "technology/ckksite-technology-9.png"},
            {image: cloudS3 + "technology/ckksite-technology-10.png"},
            {image: cloudS3 + "technology/ckksite-technology-11.png"},
            {image: cloudS3 + "technology/ckksite-technology-12.png"},

        ],
        [
            {image: cloudS3 + "technology/ckksite-technology-13.png"},
            {image: cloudS3 + "technology/ckksite-technology-14.png"},
            {image: cloudS3 + "technology/ckksite-technology-15.png"},
            {image: cloudS3 + "technology/ckksite-technology-16.png"},
            {image: cloudS3 + "technology/ckksite-technology-17.png"},
            {image: cloudS3 + "technology/ckksite-technology-18.png"},
        ],
        [
            {image: cloudS3 + "technology/ckksite-technology-19.png"},
            {image: cloudS3 + "technology/ckksite-technology-20.png"},
            {image: cloudS3 + "technology/ckksite-technology-21.png"},
            {image: cloudS3 + "technology/ckksite-technology-22.png"},
            {image: cloudS3 + "technology/ckksite-technology-23.png"},
            {image: cloudS3 + "technology/ckksite-technology-24.png"},
        ],
        [
            {image: cloudS3 + "technology/ckksite-technology-25.png"},
            {image: cloudS3 + "technology/ckksite-technology-26.png"},
            {image: cloudS3 + "technology/ckksite-technology-27.png"},
            {image: cloudS3 + "technology/ckksite-technology-28.png"},
            {image: cloudS3 + "technology/ckksite-technology-29.png"},
            {image: cloudS3 + "technology/ckksite-technology-30.png"},
        ],
        [
            {image: cloudS3 + "technology/ckksite-technology-31.png"},
            {image: cloudS3 + "technology/ckksite-technology-32.png"},
            {image: cloudS3 + "technology/ckksite-technology-33.png"},
            {image: cloudS3 + "technology/ckksite-technology-34.png"},
            {image: cloudS3 + "technology/ckksite-technology-35.png"},
            {image: cloudS3 + "technology/ckksite-technology-36.png"},
        ],
        [
            {image: cloudS3 + "technology/ckksite-technology-37.png"},
            {image: cloudS3 + "technology/ckksite-technology-38.png"},
        ]
    ]

    const {t} = useTranslation();

    return(
        <div id="technology">

            <div className="technology-use">
                <div className="container-child">
                    <span className="description">{t("technology.description")}</span>
                    <div className="box-slide">

                            <Swiper
                                slidesPerView={1}
                                spaceBetween={30}
                                slidesPerGroup={1}
                                autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: false,
                                    pauseOnMouseEnter: true
                                }}
                                speed={1000}
                                loop={true}
                                loopFillGroupWithBlank={true}
                                pagination={{
                                    clickable: true,
                                    dynamicBullets: true,
                                }}
                                modules={[Pagination, Navigation]}
                            >
                                {
                                    windowDimensions.width >767.5 ?
                                        imageTechnology.map((element, index)=>
                                            <SwiperSlide key={index}>
                                                <TechnologySlide images={element} />
                                            </SwiperSlide>
                                        )
                                        :
                                        imageTechnologyMobile.map((element, index)=>
                                            <SwiperSlide key={index}>
                                                <TechnologySlide images={element} />
                                            </SwiperSlide>
                                        )

                                }
                            </Swiper>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Technology;