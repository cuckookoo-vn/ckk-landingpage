import './footer.scss';
import {useTranslation} from "react-i18next";


const Footer = ({windowDimensions}) =>{

    const {t} = useTranslation()

    return(
        <div id="footer">
            <div className="container-child">
                <div className="contract">
                    <div className="box-local">
                        <iframe
                            className="map"
                            src={t("lang")}
                            allowFullScreen="" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>

                        <div className="title-address-box">
                            <span className="title-address">{t("footer.titleAddress")}:</span>
                            <span className="title">{t("footer.address")}</span>
                        </div>
                    </div>

                    <div className="contract-title-box">
                        <span className="title-footer">
                            {t('footer.contactUs')}:
                        </span>
                        <span className="email-footer">
                            {t("footer.email")}: paul.pham@cuckookoo.vn
                        </span>
                        <span className="phone">
                            {t("footer.phoneNumber")}: 0336 111 248
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;