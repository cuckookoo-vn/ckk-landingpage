import './header.scss';
import i18next from "i18next";
import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";
import {cloudS3} from "../../constant/global";

const Header = ({windowDimensions}) =>{
    // list images
    const images = {
        logoCuckookoo: cloudS3 + "header/ckksite-logo-header.png",
        logoChevronDown: cloudS3 + "header/ckksite-icon-chevron-down.png",
        logoMagnifyingGlass: cloudS3 + "header/ckksite-magnifying-glass.png",
        flagEng: cloudS3 + "header/ckksite-flag-eng.png",
        flagKo: cloudS3 + "header/ckksite-flag-ko.png",
        flagVn: cloudS3 + "header/ckksite-flag-vn.jpg",
        iconClosePopup: cloudS3 + "header/ckksite-icon-close-popup.png",
        iconCloseWhite: cloudS3 + "header/ckksite-header-close-white.png",
        bgPopupButtonHeader: cloudS3 + "header/ckksite-header-botton-popup.png",
    }

    // translation
    const {t} = useTranslation();

    // menu pc
    const[statusLang, setStatusLang] = useState(false);
    const [statusLangButton, setStatusLangButton] = useState(true);

    const setLangTrue = () =>{
        setStatusLangButton(false);
        let dropLang = document.getElementById("drop-lang");
        let LangEN = document.getElementById("langEN");
        let LangKO = document.getElementById("langKO");
        let LangJA = document.getElementById("langJA");

        dropLang.classList.add("open");
        setTimeout(()=>{
            LangEN.classList.add("open");
        },0)
        setTimeout(()=>{
            LangKO.classList.add("open");
        },200)
        setTimeout(()=>{
            LangJA.classList.add("open");
        },400)

        setTimeout(()=>{
            setStatusLangButton(true)
        },1000)

    }

    const setLangFalse = () =>{
        setStatusLangButton(false);
        let dropLang = document.getElementById("drop-lang");
        let LangEN = document.getElementById("langEN");
        let LangKO = document.getElementById("langKO");
        let LangJA = document.getElementById("langJA");

        setTimeout(()=>{
            LangJA.classList.remove("open");
        },0)
        setTimeout(()=>{
            LangKO.classList.remove("open");

        },200)
        setTimeout(()=>{
            LangEN.classList.remove("open");
        },400)
        setTimeout(()=>{
            dropLang.classList.remove("open");
            setStatusLangButton(true)
        },1000)
    }

    const clickStatusLang = (lang) =>{
        i18next.changeLanguage(lang);

        let statusTemp = !statusLang;
        setStatusLang(statusTemp);

        if(statusTemp){
            setLangTrue();
        }else {
            setLangFalse();
        }
    }

    window.onclick = (event) => {
        if (
            statusLang &&
            !event.target.matches('.button-lang') &&
            !event.target.matches('.title-lang') &&
            !event.target.matches('.icon-down')
        ){
            if(statusLangButton){
                setStatusLang(false);
                setLangFalse();
            }
        }

    }

    // popup search
    const setPopupSearch = (status) => {
        let header = document.getElementById("header-box");
        let popup = document.getElementById("search-popup-box");
        let boxPopup = document.getElementById("search-popup");
        let popupHeaderOverlay = document.getElementById("popup-header-overlay");

        if(status){
            header.classList.add("open-popup");
            setTimeout(()=>{
                boxPopup.classList.add("open");
            }, 600)
            setTimeout(()=>{
                popup.classList.add("open");
                popupHeaderOverlay.classList.add("open");
            }, 610)
        }else {
            popup.classList.remove("open");
            popupHeaderOverlay.classList.remove("open");
            setTimeout(()=>{
                boxPopup.classList.remove("open");
                header.classList.remove("open-popup");
            }, 600)

        }
    }

    // menu mobile
    const [statusMenuMobile, setStatusMenuMobile] = useState(false);

    const showMenuMobile = () =>{
        let headerMenuMobile = document.getElementById("header-menu-mobile");
        let arrayLink = headerMenuMobile.getElementsByClassName("link-mobile");
        let menuMobileContent = document.getElementById("menu-mobile-content");
        let menuMobileSearch = document.getElementById("search-mobile-box");

        menuMobileContent.style.display = "block";
        menuMobileSearch.style.display = "flex";

        setTimeout(()=>{
            for (let i = 0; i < arrayLink.length; i++) {
                setTimeout(()=>{
                    arrayLink[i].classList.add("open");
                },i*50);
            }
            menuMobileContent.classList.add("open");
            menuMobileSearch.classList.add("open");
        },50);

    }

    const hiddenMenuMobile = () =>{
        let headerMenuMobile = document.getElementById("header-menu-mobile");
        let arrayLink = headerMenuMobile.getElementsByClassName("link-mobile");
        let menuMobileContent = document.getElementById("menu-mobile-content");
        let menuMobileSearch = document.getElementById("search-mobile-box");

        setTimeout(()=>{
            for (let i = 0; i < arrayLink.length; i++) {
                setTimeout(()=>{
                    arrayLink[i].classList.remove("open");
                },i*50);
            }
            menuMobileContent.classList.remove("open");
            menuMobileSearch.classList.remove("open");
        },50);

    }

    const animationMenuMobile = (statusMenu) =>{
        let headerMenuMobile = document.getElementById("header-menu-mobile");

        if(statusMenu === "open"){
            headerMenuMobile.classList.add("open");
            showMenuMobile()

        }else{
            hiddenMenuMobile()
            setTimeout(()=>{
                headerMenuMobile.classList.remove("open");
            },450)

        }

    }


    // scroll active
    const [listOffsetTop, setListOffsetTop] = useState([]);
    const listClassSection = ["products","technology","partners","about-us","careers",
        "support"];

    const listClass = ["menu-products","menu-technology","menu-partners","menu-about-us","menu-careers",
        "menu-support"];

    const scrollCLick = (className) =>{
        let getId = document.getElementById(className);
        if(getId){
            window.scrollTo(0, getId.offsetTop);
        }
    }

    const removeActive = () =>{
        listClass.forEach((element)=>{
            let getClass = document.getElementsByClassName(element)[0];
            if(getClass.classList.contains("active")){
                getClass.classList.remove("active");
            }
        })
    }

    const clickStatusMenuMobile = (id) =>{
        let statusTeam = !statusMenuMobile
        setStatusMenuMobile(statusTeam);
        if(statusTeam){
            animationMenuMobile("open")
        }else {
            animationMenuMobile("close")
        }

        scrollCLick(id)
    }

    useEffect(() => {
        let listClassElement = [];
        listClassSection.forEach((element)=>{
            listClassElement.push(document.getElementById(element))
        });
        setListOffsetTop(listClassElement);

        const scrollSetActive = () =>{
            listOffsetTop.forEach((element, index)=>{
                let getClassItem = document.getElementsByClassName(listClass[index])[0];
                if(window.pageYOffset + 10 > element.offsetTop){
                    if(!getClassItem.classList.contains("active")){
                        removeActive()
                        getClassItem.classList.add("active");
                        return;
                    }
                }
            })
        }

        scrollSetActive();

        const onScroll = () =>{
            scrollSetActive();
        }

        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, [document.getElementById('products')]);


    return(
        <div id="header">
            {
                windowDimensions.width > 991.5 ?
                    <div className="header-box" id="header-box">
                        <a className="logo-header" href="/#">
                            <img src={images.logoCuckookoo} alt="logo-header"/>
                        </a>

                        <div className="box-menu">
                            <a className="link menu-products"
                               onClick={()=>scrollCLick("products")}>
                                {t("header.menu.products")}
                            </a>

                            <a className="link menu-technology"
                               onClick={()=>scrollCLick("technology")}>
                                {t("header.menu.technology")}
                            </a>

                            <a className="link menu-partners"
                               onClick={()=>scrollCLick("partners")}>
                                {t("header.menu.partners")}
                            </a>

                            <a className="link menu-about-us"
                               onClick={()=>scrollCLick("about-us")}>
                                {t("header.menu.aboutUs")}
                            </a>

                            <a className="link menu-careers"
                               onClick={()=>scrollCLick("careers")}>
                                {t("header.menu.careers")}
                            </a>

                            <a className="link menu-support"
                               onClick={()=>scrollCLick("support")}>
                                {t("header.menu.support")}
                            </a>

                            <div className={"button-lang" + (statusLangButton ? "" : " close")}
                                 onClick={() => clickStatusLang()}>
                                <span className="title-lang">
                                    {t("header.menu.lang")}
                                </span>

                                <img className={"icon-down" + (statusLang ? " open" : "")}
                                     src={images.logoChevronDown}
                                     alt="logo-chevron-down"/>

                                <div className="drop-lang" id="drop-lang">
                                    <div className="lang"
                                         id="langEN"
                                         onClick={() => clickStatusLang("en")}>
                                        <img src={images.flagEng}
                                             alt="flag-eng"/>
                                        <span className="flag-title">
                                    {t("header.language.english")}
                                </span>
                                    </div>

                                    <div className="lang"
                                         id="langKO"
                                         onClick={() => clickStatusLang("ko")}>
                                        <img src={images.flagKo}
                                             alt="flag-eng"/>
                                        <span className="flag-title">
                                    {t("header.language.korean")}
                                </span>
                                    </div>

                                    <div className="lang"
                                         id="langJA"
                                         onClick={() => clickStatusLang("vn")}>
                                        <img src={images.flagVn}
                                             alt="flag-eng"/>
                                        <span className="flag-title">
                                    {t("header.language.vietnam")}
                                </span>
                                    </div>
                                </div>
                            </div>

                            <img className="icon-search"
                                 onClick={() => setPopupSearch(true)}
                                 src={images.logoMagnifyingGlass}
                                 alt="logo-chevron-down"/>

                        </div>

                    </div>
                    :
                    <div className="header-frame">
                        <div className="header-box" id="header-box">
                            <a className="logo-header" href="/#">
                                <img src={images.logoCuckookoo} alt="logo-header"/>
                            </a>
                            <div className="box-menu">

                                <div className={"button-lang" + (statusLangButton ? "" : " close")}
                                     onClick={() => clickStatusLang()}>
                                <span className="title-lang">
                                    {t("header.menu.lang")}
                                </span>

                                    <img className={"icon-down" + (statusLang ? " open" : "")}
                                         src={images.logoChevronDown}
                                         alt="logo-chevron-down"/>

                                    <div className="drop-lang" id="drop-lang">
                                        <div className="lang"
                                             id="langEN"
                                             onClick={() => clickStatusLang("en")}>
                                            <img src={images.flagEng}
                                                 alt="flag-eng"/>
                                            <span className="flag-title">
                                    {t("header.language.english")}
                                </span>
                                        </div>

                                        <div className="lang"
                                             id="langKO"
                                             onClick={() => clickStatusLang("ko")}>
                                            <img src={images.flagKo}
                                                 alt="flag-eng"/>
                                            <span className="flag-title">
                                    {t("header.language.korean")}
                                </span>
                                        </div>

                                        <div className="lang"
                                             id="langJA"
                                             onClick={() => clickStatusLang("vn")}>
                                            <img src={images.flagVn}
                                                 alt="flag-eng"/>
                                            <span className="flag-title">
                                    {t("header.language.vietnam")}
                                </span>
                                        </div>
                                    </div>
                                </div>

                                <div onClick={() => clickStatusMenuMobile()} className={"icon-menu-mobile" + (statusMenuMobile ? " open" : "")}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </div>
            }

            {
                windowDimensions.width > 991.5 ?
                    <div className="search-popup"
                         id="search-popup">
                        <div className="search-popup-box"
                             id="search-popup-box">
                            <div className="search-box-popup">
                                <div className="input-box-popup">
                                    <img className="icon-search-popup"
                                         src={images.logoMagnifyingGlass}
                                         alt="logo-chevron-down"/>

                                    <input className="input-search-popup"
                                           placeholder={t("header.formSearch.placeholder")}/>

                                    <img className="icon-close-popup"
                                         onClick={()=>setPopupSearch(false)}
                                         src={images.iconCloseWhite}
                                         alt="icon-close-popup"/>
                                </div>
                            </div>

                            <div className="content-box-popup">
                                <div className="suggestions-box">
                                    <button style={{backgroundImage:`url(${images.bgPopupButtonHeader})`}}>
                                        {t("header.formSearch.buttons.button1")}
                                    </button>

                                    <button style={{backgroundImage:`url(${images.bgPopupButtonHeader})`}}>
                                        {t("header.formSearch.buttons.button2")}
                                    </button>

                                    <button style={{backgroundImage:`url(${images.bgPopupButtonHeader})`}}>
                                        {t("header.formSearch.buttons.button3")}
                                    </button>

                                    <button style={{backgroundImage:`url(${images.bgPopupButtonHeader})`}}>
                                        {t("header.formSearch.buttons.button4")}
                                    </button>

                                    <button style={{backgroundImage:`url(${images.bgPopupButtonHeader})`}}>
                                        {t("header.formSearch.buttons.button5")}
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="popup-header-overlay"
                             id="popup-header-overlay"
                             onClick={()=>setPopupSearch(false)}></div>
                    </div>
                    :
                    <div className="header-menu-mobile"
                         id="header-menu-mobile">
                        <div className="menu-mobile-box"
                             id="menu-mobile-box">
                            <div className="search-mobile-box"
                                 id="search-mobile-box">
                                <img className="icon-search-mobile"
                                     src={images.logoMagnifyingGlass}
                                     alt="logo-chevron-down"/>

                                <input className="input-search-mobile"
                                       placeholder={t("header.formSearch.placeholder")}/>
                            </div>

                            <div className="menu-mobile-content" id="menu-mobile-content">
                                <a className="link-mobile menu-products"
                                   onClick={() => clickStatusMenuMobile("products")}>
                                    {t("header.menu.products")}
                                </a>

                                <a className="link-mobile menu-technology"
                                   onClick={() => clickStatusMenuMobile("technology")}>
                                    {t("header.menu.technology")}
                                </a>

                                <a className="link-mobile menu-partners"
                                   onClick={() => clickStatusMenuMobile("partners")}>
                                    {t("header.menu.partners")}
                                </a>

                                <a className="link-mobile menu-about-us"
                                   onClick={() => clickStatusMenuMobile("about-us")}>
                                    {t("header.menu.aboutUs")}
                                </a>

                                <a className="link-mobile menu-careers"
                                   onClick={() => clickStatusMenuMobile("careers")}>
                                    {t("header.menu.careers")}
                                </a>

                                <a className="link-mobile menu-support"
                                   onClick={() => clickStatusMenuMobile("support")}>
                                    {t("header.menu.support")}
                                </a>
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}

export default Header;