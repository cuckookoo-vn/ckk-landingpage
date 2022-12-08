import './metalish.scss';
import {useTranslation} from "react-i18next";
import {cloudS3} from "../../constant/global";

const Metalish = ({windowDimensions}) =>{
    const images = {
        logoMetalish: cloudS3 + "home/ckksite-metalish-logo.png",
        room1Metalish: cloudS3 + "home/ckksite-metalish-room1.png",
        room2Metalish: cloudS3 + "home/ckksite-metalish-room2.png",
        room3Metalish: cloudS3 + "home/ckksite-metalish-room3.png"
    }

    const {t} = useTranslation();

    return(
        <div id="metalish">
            <div className="container-child metalish">
                    <div className="title-box">
                        {
                            windowDimensions.width >767.5 ?
                                null
                                :
                                <span className="title-main">{t("metalish.titleMain")}</span>
                        }

                        <img src={images.logoMetalish}
                             alt="logo-metalish"/>

                        <div className="content-title">
                            <span className="title">
                                {t("metalish.title")}
                            </span>

                            <a href="/#" className="learn-more">
                                {t("metalish.learnMore")}
                            </a>
                        </div>
                    </div>

                    <div className="image-box">
                        <img className="metalish-room1"
                             src={images.room1Metalish}
                             alt="metalish-room1" />

                        <img className="metalish-room2"
                             src={images.room2Metalish}
                             alt="metalish-room2" />

                        <img className="metalish-room3"
                             src={images.room3Metalish}
                             alt="metalish-room3" />
                    </div>
                </div>
        </div>
    )
}

export default Metalish;