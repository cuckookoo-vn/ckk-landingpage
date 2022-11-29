import './technology.scss';
import {useTranslation} from "react-i18next";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper";

const Technology = ({windowDimensions}) =>{
    const images = {
        alqq: "https://d2lonqwqrbh3kq.cloudfront.net/technology/ckksite-technology-alqq.png",
        ame: "https://d2lonqwqrbh3kq.cloudfront.net/technology/ckksite-technology-ame.png",
        bc: "https://d2lonqwqrbh3kq.cloudfront.net/technology/ckksite-technology-bc.png",
        health: "https://d2lonqwqrbh3kq.cloudfront.net/technology/ckksite-technology-health.png",
        net: "https://d2lonqwqrbh3kq.cloudfront.net/technology/ckksite-technology-net.png",
        lap: "https://d2lonqwqrbh3kq.cloudfront.net/technology/ckksite-technology-lap.png",
    }

    const imageTechnology = [
        {image: process.env.PUBLIC_URL + '/images/technology/ckksite-technology-ai.png'},
        {image: process.env.PUBLIC_URL + '/images/technology/ckksite-technology-html.png'},
        {image: process.env.PUBLIC_URL + '/images/technology/ckksite-technology-java.png'},
        {image: process.env.PUBLIC_URL + '/images/technology/ckksite-technology-my-sql.png'},
        {image: process.env.PUBLIC_URL + '/images/technology/ckksite-technology-unity.png'},
    ]

    const {t} = useTranslation();

    return(
        <div id="technology">

            <div className="technology-use">
                <div className="overlay-top"></div>

                <img src={images.lap} alt="lap" className="lap"/>

                <div className="container-child">
                    <div className="box-image">
                        <div className="top-title">
                            <span className="title1">{t("technology.technologyUse.title1")}</span>

                            <span className="title2">{t("technology.technologyUse.title2")}</span>

                            <span className="title3">{t("technology.technologyUse.title3")}</span>
                        </div>
                        <div className="box-slide">
                            <Swiper
                                slidesPerView={3}
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
                                {imageTechnology.map((element, index)=>
                                    <SwiperSlide key={index}>
                                        <img src={element.image} alt="technology" />
                                    </SwiperSlide>
                                )}
                            </Swiper>
                        </div>

                        <div className="bottom-title">
                            <span className="title4">{t("technology.technologyUse.title4")}</span>
                        </div>
                    </div>
                </div>

                <div className="overlay-bottom"></div>
            </div>
        </div>
    )
}

export default Technology;