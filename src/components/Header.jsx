import React, {createContext, useContext, useRef} from 'react';
import image from "../images/apptron-logo-186x178.png";
import '../style/Header.css';
import start from './Carousel';
import { Link, animateScroll as scroll } from "react-scroll";
import { useTranslation } from 'react-i18next';
import i18n from "i18next";
import languageSetings from '../util/i18n';
const Header = () => {

    const { t } = useTranslation();


// Чтобы изменить язык на латышский


// Чтобы изменить язык на английский


    function setLV() {
        languageSetings.changeLanguage('lv');
    }

    function setEn() {
        languageSetings.changeLanguage('en');
    }

    return (
        <div>
            <header className="sticky-header">
                <div className="header-content">
                    <div className="logo">

                        <img src={image} alt="Логотип" />
                    </div>
                    <div className="buttons">

                        <button><h3><Link activeClass="active" to="start" spy={true} smooth={true} offset={-window.innerHeight / 2} duration={500}>{t('homeBtn')}</Link></h3></button>
                        <button><h3><Link activeClass="active" to="parMums" spy={true} smooth={true} offset={-window.innerHeight / 2} duration={500}>{t('aboutBtn')}</Link></h3></button>
                        <button><h3><Link activeClass="active" to="partners" spy={true} smooth={true} offset={-window.innerHeight / 2} duration={500}>{t('partnerBtn')}</Link></h3></button>
                        <button><h3><Link activeClass="active" to="sazinaties" spy={true} smooth={true} offset={-70} duration={500}>{t('contactBtn')}</Link> </h3></button>
                        <button onClick={setLV}>LV</button>
                        <button onClick={setEn}>EN</button>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;