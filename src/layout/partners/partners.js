import './partners.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Navigation, Pagination } from 'swiper';
import ReviewItem from '../../components/review-item/review-item';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

const Partners = ({ windowDimensions }) => {
  const ourPatners = [
    {
      image:
        'https://d2lonqwqrbh3kq.cloudfront.net/about-us/ckksite-about-us-chainos.png',
    },
    {
      image:
        'https://d2lonqwqrbh3kq.cloudfront.net/about-us/ckksite-about-us-chainos.png',
    },
    {
      image:
        'https://d2lonqwqrbh3kq.cloudfront.net/about-us/ckksite-about-us-chainos.png',
    },
    {
      image:
        'https://d2lonqwqrbh3kq.cloudfront.net/about-us/ckksite-about-us-chainos.png',
    },
    {
      image:
        'https://d2lonqwqrbh3kq.cloudfront.net/about-us/ckksite-about-us-chainos.png',
    },
  ];

  const review = [
    [
      {
        name: 'Mr.Tony',
        countStar: 4,
        position: '(CEO of Chainos globle)',
        content: 'Review content',
        image:
          'https://d2lonqwqrbh3kq.cloudfront.net/about-us/ckksite-about-review1.png',
      },
      {
        name: 'Mr.Lee',
        countStar: 5,
        position: '(PM from Ludena Protocol)',
        content: 'Review content',
        image:
          'https://d2lonqwqrbh3kq.cloudfront.net/about-us/ckksite-about-review2.png',
      },
    ],
    [
      {
        name: 'Mr.Tony',
        countStar: 4,
        position: '(CEO of Chainos globle)',
        content: 'Review content',
        image:
          'https://d2lonqwqrbh3kq.cloudfront.net/about-us/ckksite-about-review1.png',
      },
      {
        name: 'Mr.Lee',
        countStar: 5,
        position: '(PM from Ludena Protocol)',
        content: 'Review content',
        image:
          'https://d2lonqwqrbh3kq.cloudfront.net/about-us/ckksite-about-review2.png',
      },
    ],
    [
      {
        name: 'Mr.Tony',
        countStar: 4,
        position: '(CEO of Chainos globle)',
        content: 'Review content',
        image:
          'https://d2lonqwqrbh3kq.cloudfront.net/about-us/ckksite-about-review1.png',
      },
      {
        name: 'Mr.Lee',
        countStar: 5,
        position: '(PM from Ludena Protocol)',
        content: 'Review content',
        image:
          'https://d2lonqwqrbh3kq.cloudfront.net/about-us/ckksite-about-review2.png',
      },
    ],
  ];

  const reviewMobile = [
    {
      name: 'Mr.Tony',
      countStar: 4,
      position: '(CEO of Chainos globle)',
      content: 'Review content',
      image:
        'https://d2lonqwqrbh3kq.cloudfront.net/about-us/ckksite-about-review1.png',
    },
    {
      name: 'Mr.Lee',
      countStar: 5,
      position: '(PM from Ludena Protocol)',
      content: 'Review content',
      image:
        'https://d2lonqwqrbh3kq.cloudfront.net/about-us/ckksite-about-review2.png',
    },

    {
      name: 'Mr.Tony',
      countStar: 4,
      position: '(CEO of Chainos globle)',
      content: 'Review content',
      image:
        'https://d2lonqwqrbh3kq.cloudfront.net/about-us/ckksite-about-review1.png',
    },
    {
      name: 'Mr.Lee',
      countStar: 5,
      position: '(PM from Ludena Protocol)',
      content: 'Review content',
      image:
        'https://d2lonqwqrbh3kq.cloudfront.net/about-us/ckksite-about-review2.png',
    },
    {
      name: 'Mr.Tony',
      countStar: 4,
      position: '(CEO of Chainos globle)',
      content: 'Review content',
      image:
        'https://d2lonqwqrbh3kq.cloudfront.net/about-us/ckksite-about-review1.png',
    },
    {
      name: 'Mr.Lee',
      countStar: 5,
      position: '(PM from Ludena Protocol)',
      content: 'Review content',
      image:
        'https://d2lonqwqrbh3kq.cloudfront.net/about-us/ckksite-about-review2.png',
    },
  ];

  // check width set data slide
  const checkWidthWindowSetSlideData = () => {
    let slideDataTemp = {
      slidesPerView: 5,
      spaceBetween: 30,
      slidesPerGroup: 1,
      speed: 8000,
    };

    if (windowDimensions.width > 1150) {
      slideDataTemp.slidesPerView = 5;
      slideDataTemp.spaceBetween = 0;
      slideDataTemp.slidesPerGroup = 1;
    } else if (windowDimensions.width > 900) {
      slideDataTemp.slidesPerView = 4;
      slideDataTemp.spaceBetween = 0;
      slideDataTemp.slidesPerGroup = 1;
    } else if (windowDimensions.width > 768) {
      slideDataTemp.slidesPerView = 3;
      slideDataTemp.spaceBetween = 0;
      slideDataTemp.slidesPerGroup = 1;
    } else {
      slideDataTemp.slidesPerView = 2;
      slideDataTemp.spaceBetween = 0;
      slideDataTemp.slidesPerGroup = 2;
    }
    return slideDataTemp;
  };

  const [slideData, setSlideData] = useState(checkWidthWindowSetSlideData);

  useEffect(() => {
    setSlideData(checkWidthWindowSetSlideData);
  }, [windowDimensions.width]);

  const { t } = useTranslation();

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
                  slidesPerView={slideData.slidesPerView}
                  spaceBetween={slideData.spaceBetween}
                  slidesPerGroup={slideData.slidesPerGroup}
                  autoplay={{
                    delay: 1,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: false,
                  }}
                  speed={slideData.speed}
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
