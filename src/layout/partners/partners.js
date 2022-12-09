import './partners.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Navigation, Pagination } from 'swiper';
import ReviewItem from '../../components/review-item/review-item';
import { useTranslation } from 'react-i18next';
import {cloudS3} from "../../constant/global";

const Partners = ({ windowDimensions }) => {
  const ourPatners = [
    {
      image: cloudS3 + "about-us/ckksite-about-us-chainos.png",
    },
    {
      image: cloudS3 + "about-us/ckksite-about-us-chainos.png",
    },
    {
      image: cloudS3 + "about-us/ckksite-about-us-chainos.png",
    },
    {
      image: cloudS3 + "about-us/ckksite-about-us-chainos.png",
    },
    {
      image: cloudS3 + "about-us/ckksite-about-us-chainos.png",
    },
  ];

  const { t } = useTranslation();

  const review = [
    [
      {
        name: t("partners.review.item1.name"),
        countStar: 4,
        position: t("partners.review.item1.position"),
        content: t("partners.review.item1.content"),
        image: cloudS3 + 'about-us/ckksite-about-review1.png',
      },
      {
        name: t("partners.review.item2.name"),
        countStar: 5,
        position: t("partners.review.item2.position"),
        content: t("partners.review.item2.content"),
        image: cloudS3 + 'about-us/ckksite-about-review2.png',
      },
    ],
    [
      {
        name: t("partners.review.item1.name"),
        countStar: 4,
        position: t("partners.review.item1.position"),
        content: t("partners.review.item1.content"),
        image: cloudS3 + 'about-us/ckksite-about-review1.png',
      },
      {
        name: t("partners.review.item2.name"),
        countStar: 5,
        position: t("partners.review.item2.position"),
        content: t("partners.review.item2.content"),
        image: cloudS3 + 'about-us/ckksite-about-review2.png',
      },
    ],
    [
      {
        name: t("partners.review.item1.name"),
        countStar: 4,
        position: t("partners.review.item1.position"),
        content: t("partners.review.item1.content"),
        image: cloudS3 + 'about-us/ckksite-about-review1.png',
      },
      {
        name: t("partners.review.item2.name"),
        countStar: 5,
        position: t("partners.review.item2.position"),
        content: t("partners.review.item2.content"),
        image: cloudS3 + 'about-us/ckksite-about-review2.png',
      },
    ],
  ];

  const reviewMobile = [
    {
      name: t("partners.review.item1.name"),
      countStar: 4,
      position: t("partners.review.item1.position"),
      content: t("partners.review.item1.content"),
      image: cloudS3 + 'about-us/ckksite-about-review1.png',
    },
    {
      name: t("partners.review.item2.name"),
      countStar: 5,
      position: t("partners.review.item2.position"),
      content: t("partners.review.item2.content"),
      image: cloudS3 + 'about-us/ckksite-about-review2.png',
    },
    {
      name: t("partners.review.item1.name"),
      countStar: 4,
      position: t("partners.review.item1.position"),
      content: t("partners.review.item1.content"),
      image: cloudS3 + 'about-us/ckksite-about-review1.png',
    },
    {
      name: t("partners.review.item2.name"),
      countStar: 5,
      position: t("partners.review.item2.position"),
      content: t("partners.review.item2.content"),
      image: cloudS3 + 'about-us/ckksite-about-review2.png',
    },
    {
      name: t("partners.review.item1.name"),
      countStar: 4,
      position: t("partners.review.item1.position"),
      content: t("partners.review.item1.content"),
      image: cloudS3 + 'about-us/ckksite-about-review1.png',
    },
    {
      name: t("partners.review.item2.name"),
      countStar: 5,
      position: t("partners.review.item2.position"),
      content: t("partners.review.item2.content"),
      image: cloudS3 + 'about-us/ckksite-about-review2.png',
    },

  ];

  return (
    <div id='partners'>
      <div className='container-child'>
        <div className='our-partners'>
          {windowDimensions.width > 767.5 ? (
            <>
              <span className='title-main1'>
                {t('partners.ourPartners.titleMain1')}
              </span>
              <span className='title-main2'>
                {t('partners.ourPartners.titleMain2')}
              </span>
            </>
          ) : (
            <span className='title-main'>
              {t('partners.ourPartners.titleMain1')}{' '}
              {t('partners.ourPartners.titleMain2')}
            </span>
          )}

          <div className='box-slide'>
            {windowDimensions.width > 767.5 ? (
              <>
                <div className='overlay-left'></div>

                <Swiper
                  breakpoints={{
                    0: {
                      slidesPerView: 2,
                      spaceBetween: 0,
                      slidesPerGroup: 2,
                    },
                    767.5: {
                      slidesPerView: 3,
                      spaceBetween: 0,
                      slidesPerGroup: 1,
                    },
                    900: {
                      slidesPerView: 4,
                      spaceBetween: 0,
                      slidesPerGroup: 1,
                    },
                    1150: {
                      slidesPerView: 5,
                      spaceBetween: 0,
                      slidesPerGroup: 1,
                    }
                  }}
                  autoplay={{
                    delay: 1,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: false,
                  }}
                  speed={8000}
                  freeMode={true}
                  loop={true}
                  pagination={{
                    clickable: true,
                    dynamicBullets: true,
                  }}
                  modules={[Pagination, Navigation]}
                  className='slide-partners'
                >
                  {ourPatners.map((element, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={element.image}
                        key={index}
                        alt={'image' + index}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>

                <div className='overlay-right'></div>
              </>
            ) : (
              <Swiper
                slidesPerView={windowDimensions.width > 389.5 ? 2 : 1}
                spaceBetween={50}
                slidesPerGroup={1}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: false,
                }}
                speed={500}
                freeMode={true}
                loop={true}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                }}
                modules={[Pagination, Navigation]}
                className='slide-partners'
              >
                {ourPatners.map((element, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={element.image}
                      key={index}
                      alt={'image' + index}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>
        </div>
      </div>

      <div className='container-child'>
        <div className='review'>
          <span className='title-main'>{t('partners.review.titleMain')}</span>
          <Swiper
            direction={
              windowDimensions.width > 767.5 ? 'vertical' : 'horizontal'
            }
            slidesPerView={1}
            spaceBetween={30}
            slidesPerGroup={1}
            mousewheel={true}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={1800}
            loop={true}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            modules={[Mousewheel, Pagination, Navigation]}
          >
            <div className='box-slide'>
              {windowDimensions.width > 991.5
                ? review.map((element, index) => (
                    <SwiperSlide key={index}>
                      <ReviewItem element={element[0]} />
                      {element[1] ? <ReviewItem element={element[1]} /> : null}
                    </SwiperSlide>
                  ))
                : reviewMobile.map((element, index) => (
                    <SwiperSlide key={index}>
                      <ReviewItem element={element} />
                    </SwiperSlide>
                  ))}
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Partners;
