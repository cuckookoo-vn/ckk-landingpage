import './technology.scss';
import {useTranslation} from "react-i18next";

const Technology = ({windowDimensions}) =>{
    const images = {
        alqq: "https://ckksite.s3.ap-northeast-2.amazonaws.com/technology/ckksite-technology-alqq.png",
        ame: "https://ckksite.s3.ap-northeast-2.amazonaws.com/technology/ckksite-technology-ame.png",
        bc: "https://ckksite.s3.ap-northeast-2.amazonaws.com/technology/ckksite-technology-bc.png",
        health: "https://ckksite.s3.ap-northeast-2.amazonaws.com/technology/ckksite-technology-health.png",
        net: "https://ckksite.s3.ap-northeast-2.amazonaws.com/technology/ckksite-technology-net.png",
        lap: "https://ckksite.s3.ap-northeast-2.amazonaws.com/technology/ckksite-technology-lap.png",
    }

    const {t} = useTranslation();

    return(
        <div id="technology">
            <div className="technology">
                <div className="container">
                    <div className="container-child">
                        <div className="technology-box top">
                            <div className="technology-item">
                                <img src={images.health} alt="health"/>

                                <span className="technology-title">
                                    {t("technology.health.title")}
                                </span>
                            </div>

                            <div className="technology-item">
                                <img src={images.alqq} alt="alqq"/>

                                <span className="technology-title">
                                    {t("technology.alqq.title")}
                                </span>
                            </div>
                        </div>

                        <div className="technology-box center">
                            <div className="technology-item">
                                <img src={images.bc} alt="bc"/>

                                <span className="technology-title">
                                    {t("technology.bc.title")}
                                </span>
                            </div>
                        </div>

                        <div className="technology-box bottom">
                            <div className="technology-item">
                                <img src={images.ame} alt="ame"/>

                                <span className="technology-title">
                                    {t("technology.ame.title")}
                                </span>
                            </div>

                            <div className="technology-item">
                                <img src={images.net} alt="net"/>

                                <span className="technology-title">
                                    {t("technology.alqq.title")}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="technology-use">
                <div className="overlay-top"></div>

                <div className="container">
                    <div className="container-child">
                        <div className="box-image">
                            <div className="top-title">
                                <span className="title1">{t("technology.technologyUse.title1")}</span>

                                <span className="title2">{t("technology.technologyUse.title2")}</span>

                                <span className="title3">{t("technology.technologyUse.title3")}</span>
                            </div>

                            <img src={images.lap} alt="lap"/>

                            <div className="bottom-title">
                                <span className="title4">{t("technology.technologyUse.title4")}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="overlay-bottom"></div>
            </div>
        </div>
    )
}

export default Technology;