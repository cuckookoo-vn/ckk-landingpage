import './partners.scss';
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper";
import ReviewItem from "../../components/review-item/review-item";
import {useTranslation} from "react-i18next";

const Partners = ({windowDimensions}) =>{
    const ourPatners = [
        {
            image: "https://d2lonqwqrbh3kq.cloudfront.net/about-us/ckksite-about-us-chainos.png",
        },
        {
            image: "https://d2lonqwqrbh3kq.cloudfront.net/about-us/ckksite-about-us-chainos.png",
        },
        {
            image: "https://d2lonqwqrbh3kq.cloudfront.net/about-us/ckksite-about-us-chainos.png",
        },
        {
            image: "https://d2lonqwqrbh3kq.cloudfront.net/about-us/ckksite-about-us-chainos.png",
        },
        {
            image: "https://d2lonqwqrbh3kq.cloudfront.net/about-us/ckksite-about-us-chainos.png",
        },
    ]

    const review = [
        {
            name: "Mr.Tony",
            countStar: 4,
            position: "(CEO of Chainos globle)",
            content: "Review content",
            image: "https://d2lonqwqrbh3kq.cloudfront.net/about-us/ckksite-about-review1.png"
        },
        {
            name: "Mr.Lee",
            countStar: 5,
            position: "(PM from Ludena Protocol)",
            content: "Review content",
            image: "https://d2lonqwqrbh3kq.cloudfront.net/about-us/ckksite-about-review2.png"
        },
        {
            name: "Mr.Tony",
            countStar: 4,
            position: "(CEO of Chainos globle)",
            content: "Review content",
            image: "https://d2lonqwqrbh3kq.cloudfront.net/about-us/ckksite-about-review1.png"
        },
        {
            name: "Mr.Lee",
            countStar: 5,
            position: "(PM from Ludena Protocol)",
            content: "Review content",
            image: "https://d2lonqwqrbh3kq.cloudfront.net/about-us/ckksite-about-review2.png"
        }
    ]

    const {t} = useTranslation();

    return(
        <div id="partners">
            <div className="container-child">
                <div className="our-partners">
                    <span className="title-main">{t("aboutUs.ourPartners.titleMain")}</span>
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
                        slidesPerGroup={1}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true
                        }}
                        loop={true}
                        loopFillGroupWithBlank={true}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                        }}
                        modules={[Pagination, Navigation]}
                    >
                        <div className="box-slide">
                            {ourPatners.map((element, index)=>
                                <SwiperSlide key={index}>
                                    <img src={element.image} key={index} alt={"image" + index}/>
                                </SwiperSlide>
                            )}
                        </div>
                    </Swiper>
                </div>
            </div>

            <div className="container-child">
                <div className="review">
                    <span className="title-main">{t("aboutUs.review.titleMain")}</span>
                    <Swiper
                        slidesPerView={2}
                        spaceBetween={30}
                        slidesPerGroup={1}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true
                        }}
                        loop={true}
                        loopFillGroupWithBlank={true}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                        }}
                        modules={[Pagination, Navigation]}
                    >
                        <div className="box-slide">
                            {review.map((element, index)=>
                                <SwiperSlide key={index}>
                                    <ReviewItem element={element} />
                                </SwiperSlide>
                            )}
                        </div>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Partners;