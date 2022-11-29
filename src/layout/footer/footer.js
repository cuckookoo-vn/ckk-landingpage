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
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.6873595234088!2d106.66678431524116!3d10.835220361067488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529a9e817e8db%3A0xc5f7b6893d7a3ec6!2zODIgxJAuIFPhu5EgNiwgUGjGsOG7nW5nIDEwLCBHw7IgVuG6pXAsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1667975602005!5m2!1svi!2s"
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
                            {t("footer.email")}: aroundtheworld@cuckookoo.vn
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