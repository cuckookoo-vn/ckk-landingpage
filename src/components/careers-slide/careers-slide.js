import './careers-slide.scss';
import {useTranslation} from "react-i18next";
const images = {
    slideFrame: process.env.PUBLIC_URL + "/images/careers/ckksite-careers-slide-frame.png",
    slideButton: process.env.PUBLIC_URL + "/images/careers/ckksite-careers-slide-button.png"
}

const CareersSlide = ({element, setOpenPopup, setValueSelect}) =>{
    const {t} = useTranslation();

    const openPopup = (key) =>{
        setValueSelect(key);
        setOpenPopup(true);
    }

    return(
        <div className="career-slides"
             style={{backgroundImage: `url(${element.imgFrame})`}}>
            <span className="title">{element.title}</span>

            <span className="title-time">{element.time}</span>

            <button className="button-apply"
                    onClick={()=>openPopup(element.key)}
                    style={{backgroundImage: `url(${images.slideButton})`}}>
                {t("careers.buttonApply")}
            </button>
        </div>
    )
}

export default CareersSlide;