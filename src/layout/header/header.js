import './header.scss';

// translation
import i18next from "i18next";
import {useTranslation} from "react-i18next";
import {useState} from "react";

const Header = ({windowDimensions}) =>{
    // list images
    const images = {
        logoCuckookoo: "https://ckksite.s3.ap-northeast-2.amazonaws.com/header/ckksite-logo-header.png",
        logoChevronDown: "https://ckksite.s3.ap-northeast-2.amazonaws.com/header/ckksite-icon-chevron-down.png",
        logoMagnifyingGlass: "https://ckksite.s3.ap-northeast-2.amazonaws.com/header/ckksite-magnifying-glass.png",
        flagEng: "https://ckksite.s3.ap-northeast-2.amazonaws.com/header/ckksite-flag-eng.png",
        flagKo: "https://ckksite.s3.ap-northeast-2.amazonaws.com/header/ckksite-flag-ko.png",
        flagJa: "https://ckksite.s3.ap-northeast-2.amazonaws.com/header/ckksite-flag-ja.png",
        iconClosePopup: "https://ckksite.s3.ap-northeast-2.amazonaws.com/header/ckksite-icon-close-popup.png"
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

        if(windowDimensions.width < 991.5){
            clickStatusMenuMobile()

            setStatusLangMobile(!statusMenuMobile);

            hiddenLangMobile()

            let headerBox = document.getElementById("header-box");
            let headerMenuMobile = document.getElementById("header-menu-mobile");


            setTimeout(()=>{
                headerMenuMobile.classList.remove("open");
                headerBox.style.display = "flex";
            },450)

            setTimeout(()=>{
                headerBox.classList.remove("close");
            },500)
        }else {
            let statusTemp = !statusLang;
            setStatusLang(statusTemp);

            if(statusTemp){
                setLangTrue();
            }else {
                setLangFalse();
            }
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

    const [statusLangMobile, setStatusLangMobile] = useState(false);


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

        setTimeout(()=>{
            menuMobileContent.style.display = "none";
            menuMobileSearch.style.display = "none";
        }, 1000)

    }

    const showLangMobile = () =>{
        let boxLang = document.getElementById("menu-lang-mobile");
        let LangEN = document.getElementById("langEN-mobile");
        let LangKO = document.getElementById("langKO-mobile");
        let LangJA = document.getElementById("langJA-mobile");
        let headerLang = document.getElementById("header-box-lang");

        setTimeout(()=>{
            boxLang.style.display = "block";
        },750)


        setTimeout(()=>{
            boxLang.classList.add("open");
        },750)

        setTimeout(()=>{
            LangEN.classList.add("open");
        },800)

        setTimeout(()=>{
            LangKO.classList.add("open");
            headerLang.style.display = "block";
        },850)

        setTimeout(()=>{
            LangJA.classList.add("open");
            headerLang.classList.add("open");
        },900)
    }

    const hiddenLangMobile = () =>{
        let boxLang = document.getElementById("menu-lang-mobile");
        let LangEN = document.getElementById("langEN-mobile");
        let LangKO = document.getElementById("langKO-mobile");
        let LangJA = document.getElementById("langJA-mobile");
        let headerLang = document.getElementById("header-box-lang");

        headerLang.classList.remove("open");
        setTimeout(()=>{
            LangEN.classList.remove("open");
        },100)

        setTimeout(()=>{
            LangKO.classList.remove("open");
        },50)

        setTimeout(()=>{
            LangJA.classList.remove("open");
        },0)

        setTimeout(()=>{
            boxLang.classList.remove("open");
            headerLang.style.display = "none";
        },550)

        setTimeout(()=>{
            boxLang.style.display = "none";
        },650)

    }

    const animationMenuMobile = (statusMenu) =>{
        let headerMenuMobile = document.getElementById("header-menu-mobile");
        let headerBox = document.getElementById("header-box");


        if(statusMenu === "open"){
            headerMenuMobile.classList.add("open");
            showMenuMobile()

        }else if(statusMenu === "close"){
            hiddenMenuMobile()
            setTimeout(()=>{
                headerMenuMobile.classList.remove("open");
            },450)

        }else if(statusMenu === "showLang"){
            hiddenMenuMobile()
            headerBox.classList.add("close")
            setTimeout(()=>{
                headerBox.style.display = "none";
            },1000)
        }else {
            setTimeout(()=>{
                headerBox.style.display = "flex";
            },500)

            setTimeout(()=>{
                headerBox.classList.remove("close");
            },600)

            setTimeout(()=>{
                showMenuMobile();
            },1000)

        }

    }

    const clickStatusMenuMobile = () =>{
        let statusTeam = !statusMenuMobile
        setStatusMenuMobile(statusTeam);
        if(statusTeam){
            animationMenuMobile("open")
        }else {
            animationMenuMobile("close")
        }
    }

    const clickLangMobile = () =>{
        let tempStatus = !statusLangMobile;
        setStatusLangMobile(tempStatus);

        if(tempStatus){
            animationMenuMobile("showLang");
            showLangMobile()
        }else {
            hiddenLangMobile()
            animationMenuMobile("hiddenLang");
        }
    }

    return(
        <div id="header">
            <div className="container">
                {
                    windowDimensions.width > 991.5 ?
                        <div className="header-box" id="header-box">
                            <a className="logo-header" href="/#">
                                <img src={images.logoCuckookoo} alt="logo-header"/>
                            </a>

                            <div className="box-menu">
                                <a className="link"
                                   href="#products">
                                    {t("header.menu.products")}
                                </a>

                                <a className="link"
                                   href="#technology">
                                    {t("header.menu.technology")}
                                </a>

                                <a className="link"
                                   href="#partners">
                                    {t("header.menu.partners")}
                                </a>

                                <a className="link"
                                   href="#about-us">
                                    {t("header.menu.aboutUs")}
                                </a>

                                <a className="link"
                                   href="#careers">
                                    {t("header.menu.careers")}
                                </a>

                                <a className="link"
                                   href="#support">
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
                                             onClick={() => clickStatusLang("ja")}>
                                            <img src={images.flagJa}
                                                 alt="flag-eng"/>
                                            <span className="flag-title">
                                        {t("header.language.japanese")}
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
                        <>
                            <div className="header-box" id="header-box">
                                <a className="logo-header" href="/#">
                                    <img src={images.logoCuckookoo} alt="logo-header"/>
                                </a>
                                <div className="box-menu"
                                     onClick={() => clickStatusMenuMobile()}>
                                    <div className={"icon-menu-mobile" + (statusMenuMobile ? " open" : "")}>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                            </div>

                            <div className="header-box-lang" id="header-box-lang">
                                <div className="box-menu-lang" onClick={()=>clickLangMobile()}>
                                    <img className="icon-right-mobile"
                                         src={images.logoChevronDown}
                                         alt="logo-chevron-down"/>
                                    Language
                                </div>
                            </div>
                        </>
                }
            </div>

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
                                           placeholder="search..."/>

                                    <img className="icon-close-popup"
                                         onClick={()=>setPopupSearch(false)}
                                         src={images.iconClosePopup}
                                         alt="icon-close-popup"/>
                                </div>
                            </div>

                            <div className="content-box-popup">
                                <div className="suggestions-box">
                                    <button>Metaverse</button>
                                    <button>English</button>
                                    <button>3D advertising</button>
                                    <button>Traveling</button>
                                    <button>AI</button>
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
                                       placeholder="search..."/>
                            </div>

                            <div className="menu-mobile-content" id="menu-mobile-content">
                                <a className="link-mobile"
                                   onClick={() => clickStatusMenuMobile()}
                                   href="#products">
                                    {t("header.menu.products")}
                                </a>

                                <a className="link-mobile"
                                   onClick={() => clickStatusMenuMobile()}
                                   href="#technology">
                                    {t("header.menu.technology")}
                                </a>

                                <a className="link-mobile"
                                   onClick={() => clickStatusMenuMobile()}
                                   href="#partners">
                                    {t("header.menu.partners")}
                                </a>

                                <a className="link-mobile"
                                   onClick={() => clickStatusMenuMobile()}
                                   href="#about-us">
                                    {t("header.menu.aboutUs")}
                                </a>

                                <a className="link-mobile"
                                   onClick={() => clickStatusMenuMobile()}
                                   href="#careers">
                                    {t("header.menu.careers")}
                                </a>

                                <a className="link-mobile"
                                   onClick={() => clickStatusMenuMobile()}
                                   href="#support">
                                    {t("header.menu.support")}
                                </a>

                                <div className="link-mobile button-lang-mobile"
                                     onClick={()=>clickLangMobile()}>
                                    <span className="title-lang-mobile">
                                        {t("header.menu.lang")}
                                    </span>

                                    <img className="icon-left-mobile"
                                         src={images.logoChevronDown}
                                         alt="logo-chevron-down"/>
                                </div>
                            </div>

                            <div className="menu-lang-mobile"
                                 id="menu-lang-mobile">
                                <div className="lang-mobile"
                                     id="langEN-mobile"
                                     onClick={()=>clickStatusLang("en")}>
                                    <img src={images.flagEng}
                                         alt="flag-eng"/>

                                    <span className="flag-title-mobile">
                                        {t("header.language.english")}
                                    </span>
                                </div>

                                <div className="lang-mobile"
                                     id="langKO-mobile"
                                     onClick={()=>clickStatusLang("ko")}>
                                    <img src={images.flagKo}
                                         alt="flag-eng"/>

                                    <span className="flag-title-mobile">
                                        {t("header.language.korean")}
                                    </span>
                                </div>

                                <div className="lang-mobile"
                                     id="langJA-mobile"
                                     onClick={()=>clickStatusLang("ja")}>
                                    <img src={images.flagJa}
                                         alt="flag-eng"/>

                                    <span className="flag-title-mobile">
                                        {t("header.language.japanese")}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}

export default Header;