import './products.scss';
import {useTranslation} from "react-i18next";

const Products = ({windowDimensions}) =>{
    const images = {
        metalish: "https://ckksite.s3.ap-northeast-2.amazonaws.com/products/ckksite-products-metalish.png",
        artw: "https://ckksite.s3.ap-northeast-2.amazonaws.com/products/ckksite-products-artw.png"
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
        </div>
    )
}

export default Products;