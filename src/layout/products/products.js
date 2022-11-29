import './products.scss';
import {useTranslation} from "react-i18next";

const Products = ({windowDimensions}) =>{
    const images = {
        metalish: "https://d2lonqwqrbh3kq.cloudfront.net/products/ckksite-products-metalish.png",
        artw: "https://d2lonqwqrbh3kq.cloudfront.net/products/ckksite-products-artw.png",
        alqq: "https://d2lonqwqrbh3kq.cloudfront.net/technology/ckksite-technology-alqq.png",
        ame: "https://d2lonqwqrbh3kq.cloudfront.net/technology/ckksite-technology-ame.png",
        bc: "https://d2lonqwqrbh3kq.cloudfront.net/technology/ckksite-technology-bc.png",
        health: "https://d2lonqwqrbh3kq.cloudfront.net/technology/ckksite-technology-health.png",
        net: "https://d2lonqwqrbh3kq.cloudfront.net/technology/ckksite-technology-net.png",
        lap: "https://d2lonqwqrbh3kq.cloudfront.net/technology/ckksite-technology-lap.png",
    }

    const {t} = useTranslation();

    return(
        <div className="products" id="products">
            <div className="container">
                <div className="container-child">
                    <div className="products-box">
                        <div className="frame-box left">
                            <img src={images.artw} alt="artw-image"/>

                            <span className="title-main">{t("products.artw.titleMain")}</span>

                            <span className="description">{t("products.artw.description")}</span>

                            <a href="#" className="learn-more">{t("products.artw.learnMore")}</a>
                        </div>
                    </div>

                    <div className="products-box">
                        <div className="frame-box right">
                            <img src={images.metalish} alt="artw-image"/>

                            <span className="title-main">{t("products.metalish.titleMain")}</span>

                            <span className="description">{t("products.metalish.description")}</span>

                            <a href="#" className="learn-more">{t("products.metalish.learnMore")}</a>
                        </div>
                    </div>
                </div>
            </div>

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
        </div>
    )
}

export default Products;