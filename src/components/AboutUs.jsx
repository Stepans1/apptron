import React from 'react';
import '../style/About.css';

import {useTranslation} from "react-i18next";
const AboutUs = () => {
    const { t } = useTranslation();
    return (

        <div id={"parMums"}  className="aboutUs">
            <h2 style={{paddingTop: "5vh" ,fontFamily:"Impact"}}>{t('aboutUsTitle')} </h2>
            <h4 style={{paddingBottom: "8vh",fontWeight:"250"}}>{t('aboutUsBody')}</h4>
        </div>

    );
};

export default AboutUs;