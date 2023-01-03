import './careers.scss';
import {useTranslation} from "react-i18next";
import {Swiper, SwiperSlide} from "swiper/react";
import {EffectCoverflow, Mousewheel, Navigation, Pagination} from "swiper";
import CareersSlide from "../../components/careers-slide/careers-slide";
import {useState} from "react";
import ApplicationForm from "../../components/application-form/application-form";

const Careers = ({windowDimensions}) =>{
    const {t} = useTranslation();

    const [openPopup, setOpenPopup] = useState(false);

    const [valueSelect, setValueSelect] = useState(1);

    const jobs = [
        {
            title: t("careers.job1.title"),
            titleApply: t("careers.job1.titleApply"),
            time: t("careers.job1.time"),
            jobRequirements: (t("careers.job1.jobRequirements")),
            key: 1
        },
        {
            title: t("careers.job2.title"),
            titleApply: t("careers.job2.titleApply"),
            time: t("careers.job2.time"),
            jobRequirements: (t("careers.job2.jobRequirements")),
            key: 2
        },
        {
            title: t("careers.job3.title"),
            titleApply: t("careers.job3.titleApply"),
            time: t("careers.job3.time"),
            jobRequirements: (t("careers.job3.jobRequirements")),
            key: 3
        },
        {
            title: t("careers.job4.title"),
            titleApply: t("careers.job4.titleApply"),
            time: t("careers.job4.time"),
            jobRequirements: (t("careers.job4.jobRequirements")),
            key: 4
        }
    ]



    return(
        <div id="careers">
            <div className="container-child">
                <div className="title-box">
                    <span className="title title1">{t("careers.title1")}</span>
                    <span className="title title2">{t("careers.title2")}</span>
                </div>
                <div className="slider-box">
                    {
                        <Swiper
                            direction={"vertical"}
                            effect= {"coverflow"}
                            coverflowEffect={{
                                rotate: 0,
                                scale: .75,
                                stretch: 0,
                                depth: 100,
                                modifier: 1,
                                slideShadows: true,
                            }}

                            slidesPerView={4}
                            spaceBetween={0}
                            slidesPerGroup={1}
                            mousewheel={true}
                            centeredSlides={true}
                            // autoplay={{
                            //     delay: 6000,
                            //     disableOnInteraction: false,
                            //     pauseOnMouseEnter: true,
                            // }}
                            speed={800}

                            // loop={true}
                            pagination={{
                                clickable: true,
                                dynamicBullets: true,
                            }}
                            modules={[EffectCoverflow, Mousewheel,Pagination, Navigation]}
                        >
                            <div className="box-slide">
                                {
                                    jobs.map((element, index)=>
                                        <SwiperSlide key={index}>
                                            <CareersSlide element={element} setOpenPopup={setOpenPopup} setValueSelect={setValueSelect}/>
                                        </SwiperSlide>
                                    )
                                }

                            </div>
                        </Swiper>
                    }
                </div>
            </div>

            <ApplicationForm openPopup={openPopup} setOpenPopup={setOpenPopup} valueSelect={valueSelect} jobs={jobs} />
        </div>
    )
}

export default Careers;