import './products.scss';
import { useTranslation } from 'react-i18next';
import { useEffect, useRef, useState } from 'react';
import { Mousewheel, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const Products = ({ windowDimensions }) => {
  const images = {
    metalish:
      'https://d2lonqwqrbh3kq.cloudfront.net/products/ckksite-products-metalish.png',
    artw: 'https://d2lonqwqrbh3kq.cloudfront.net/products/ckksite-products-artw.png',
    alqq: 'https://d2lonqwqrbh3kq.cloudfront.net/technology/ckksite-technology-alqq.png',
    ame: 'https://d2lonqwqrbh3kq.cloudfront.net/technology/ckksite-technology-ame.png',
    bc: 'https://d2lonqwqrbh3kq.cloudfront.net/technology/ckksite-technology-bc.png',
    health:
      'https://d2lonqwqrbh3kq.cloudfront.net/technology/ckksite-technology-health.png',
    net: 'https://d2lonqwqrbh3kq.cloudfront.net/technology/ckksite-technology-net.png',
    lap: 'https://d2lonqwqrbh3kq.cloudfront.net/technology/ckksite-technology-lap.png',
    iconClose:
      process.env.PUBLIC_URL + '/images/header/ckksite-header-close-white.png',
  };

  const { t } = useTranslation();

  const [isViewTech, setIsViewTech] = useState(false);

  const [activeTech, setActiveTech] = useState('');
  const [techContent, setTechContent] = useState('');

  const technologies = [
    {
      id: 'bc',
      title: `${t('technology.bc.title')}`,
      alt: 'bc',
      src: images.bc,
      content: 'Blockchain development',
    },
    {
      id: 'alqq',
      title: `${t('technology.alqq.title')}`,
      alt: 'alqq',
      src: images.alqq,
      content: 'Products in AI field',
    },
    {
      id: 'health',
      title: `${t('technology.health.title')}`,
      alt: 'health',
      src: images.health,
      content: 'Products in health',
    },
    {
      id: 'ame',
      title: `${t('technology.ame.title')}`,
      alt: 'ame',
      src: images.ame,
      content: 'Games development',
    },
    {
      id: 'net',
      title: `${t('technology.net.title')}`,
      alt: 'net',
      src: images.net,
      content: 'Network development',
    },
  ];

  const swiperRef = useRef(null);

  const handleOpenInfo = (id, index) => {
    setIsViewTech(true);
    setActiveTech(index);

    technologies.map((element, index) => {
      if (element.id === id) {
        setTechContent(element.content);
      }
    });
  };

  const handleCloseInfo = () => {
    setIsViewTech(false);
    setTechContent('');
  };

      // check width set data slide
      const checkWidthWindowSetSlideData = () =>{
        let slideDataTemp = {
            slidesPerView: 5,
            spaceBetween: 1,
            slidesPerGroup: 1,
        };

        if(windowDimensions.width > 1399.5){
            slideDataTemp.slidesPerView = 5;
            slideDataTemp.spaceBetween = 1;
            slideDataTemp.slidesPerGroup = 1;
        }else if(windowDimensions.width > 900){
            slideDataTemp.slidesPerView = 5;
            slideDataTemp.spaceBetween = 30;
            slideDataTemp.slidesPerGroup = 1;
        }else if(windowDimensions.width > 600){
            slideDataTemp.slidesPerView = 5;
            slideDataTemp.spaceBetween = 30;
            slideDataTemp.slidesPerGroup = 1;
        }
        else{
            slideDataTemp.slidesPerView = 5;
            slideDataTemp.spaceBetween = 30;
            slideDataTemp.slidesPerGroup = 1;
        }
        return slideDataTemp;
    };

    const [slideData, setSlideData] = useState(checkWidthWindowSetSlideData);

    useEffect(()=>{
        setSlideData(checkWidthWindowSetSlideData)
    },[windowDimensions.width])

  return (
    <div className='products' id='products'>
      <div className='container-child'>
        <div className='products-box'>
          <div className='frame-box left'>
            <img src={images.artw} alt='artw-image' />

            <span className='title-main'>{t('products.artw.titleMain')}</span>

            <span className='description'>
              {t('products.artw.description')}
            </span>

            <a href='#' className='learn-more'>
              {t('products.artw.learnMore')}
            </a>
          </div>
        </div>

        <div className='products-box'>
          <div className='frame-box right'>
            <img src={images.metalish} alt='artw-image' />

            <span className='title-main'>
              {t('products.metalish.titleMain')}
            </span>

            <span className='description'>
              {t('products.metalish.description')}
            </span>

            <a href='#' className='learn-more'>
              {t('products.metalish.learnMore')}
            </a>
          </div>
        </div>
      </div>

      {isViewTech ? (
        <div className='technology-left'>
          <div className='container-child'>
            {/* Technology img */}
            <div className='technology-img'>
              <Swiper
                ref={swiperRef}
                slidesPerView={5}
                spaceBetween={1}
                autoplay={false}
                preventClicks={true}
                slideToClickedSlide={true}
                roundLengths={true}
                loop={true}
                centeredSlides={true}
                direction='vertical'
                loopFillGroupWithBlank={false}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                }}
                modules={[Pagination, Navigation]}
                className='mySwiper'
                onInit={(swiper) => {
                  swiper.navigation.init();
                  swiper.navigation.update();
                }}
                initialSlide={activeTech}
              >
                {technologies.map((element, index) => (
                  <SwiperSlide key={index}>
                    <div className='technology-box'>
                      <div id='technology-item' className='technology-item'>
                        <img
                          id={element.id}
                          src={element.src}
                          alt={element.alt}
                          className='img'
                          onClick={() => handleOpenInfo(element.id, index)}
                        />
                        {/* <span className='technology-title'>
                          {element.title}
                        </span> */}
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            {/* Technology img */}

            {/* Technology content */}
            <div className='technology-content'>
              <div
                className='close-btn'
                style={{ backgroundImage: `url(${images.iconClose})` }}
                onClick={handleCloseInfo}
              ></div>
              <br />
              <br />
              <br />
              <span>{techContent}</span>
            </div>
            {/* Technology content */}
          </div>
        </div>
      ) : (
        <div className='technology'>
          <div className='container-child'>
            <div className='technology-box top'>
              <div className='technology-item'>
                <img
                  id='bc'
                  src={images.bc}
                  alt='bc'
                  className='img'
                  onClick={() => handleOpenInfo('bc', 0)}
                />

                <span className='technology-title'>
                  {t('technology.bc.title')}
                </span>
              </div>
            </div>

            <div className='technology-box middle'>
              <div className='technology-item middle-1'>
                <img
                  id='health'
                  src={images.health}
                  alt='health'
                  className='img'
                  onClick={() => handleOpenInfo('health', 2)}
                />

                <span className='technology-title'>
                  {t('technology.health.title')}
                </span>
              </div>

              <div className='technology-item'>
                <img
                  id='alqq'
                  src={images.alqq}
                  alt='alqq'
                  className='img'
                  onClick={() => handleOpenInfo('alqq', 1)}
                />

                <span className='technology-title'>
                  {t('technology.alqq.title')}
                </span>
              </div>
            </div>
            
            <div className='technology-box bottom'>
              <div className='technology-item'>
                <img
                  id='ame'
                  src={images.ame}
                  alt='ame'
                  className='img'
                  onClick={() => handleOpenInfo('ame', 3)}
                />

                <span className='technology-title'>
                  {t('technology.ame.title')}
                </span>
              </div>

              <div className='technology-item'>
                <img
                  id='net'
                  src={images.net}
                  alt='net'
                  className='img'
                  onClick={() => handleOpenInfo('net', 4)}
                />

                <span className='technology-title'>
                  {t('technology.net.title')}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
