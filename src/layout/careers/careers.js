import './careers.scss';
import {useTranslation} from "react-i18next";

const Careers = ({windowDimensions}) =>{
    const images = {
        slideFrame: process.env.PUBLIC_URL + "/images/careers/ckksite-careers-slide-frame.png",
        slideButton: process.env.PUBLIC_URL + "/images/careers/ckksite-careers-slide-button.png"
    }

    const {t} = useTranslation()

    const jobs = [
        {
            title: t("careers.job1.title"),
            time: t("careers.job1.time"),
            imgFrame: process.env.PUBLIC_URL + "/images/careers/ckksite-careers-slide-frame1.png"
        },
        {
            title: t("careers.job2.title"),
            time: t("careers.job2.time"),
            imgFrame: process.env.PUBLIC_URL + "/images/careers/ckksite-careers-slide-frame.png"
        },
        {
            title: t("careers.job3.title"),
            time: t("careers.job3.time"),
            imgFrame: process.env.PUBLIC_URL + "/images/careers/ckksite-careers-slide-frame1.png"
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
                        jobs.map((element,index)=>
                            <div className="career-slides"
                                 style={{backgroundImage: `url(${element.imgFrame})`}}>
                                <span className="title">{element.title}</span>

                                <span className="title-time">{element.time}</span>

                                <button className="button-apply"
                                        style={{backgroundImage: `url(${images.slideButton})`}}>
                                    {t("careers.buttonApply")}
                                </button>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Careers;