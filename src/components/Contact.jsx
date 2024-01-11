import React, {useState} from 'react';
import '../style/Contact.css';
import {Link} from "react-scroll";
import {useTranslation} from "react-i18next";
const Contact = () => {
    const { t } = useTranslation();
    const [letter,setLetter]=useState({name:'',surname:'',title:'',email:'',body:''});
    return (

        <div id="sazinaties" className="contact">
            <div className="left-column">
                <h3 style={{ paddingTop: "5vh" }}>{t('contactTitle')} </h3>
                <div className="info">
                    <big>SIA "APPTRON"</big><br/>
                    <big>{t('regNumber')}</big><br/>
                    <big>{t('bank')}</big><br/>
                    <big>SWIFT</big><br/>
                    <big>{t('bankAccount')}</big><br/>
                    <h1 style={{ fontFamily: "Impact" }}>{t('contacts')}</h1><br/>
                    <big>{t('phone')}</big><br/>
                    <big >{t('email')}</big>
                </div>
            </div>

            <div className="right-column">
                <h3>{t('contactFormTitle')}</h3><br/>
                <input onChange={e => setLetter({...letter, name: e.target.value})} className={"oval-input"} placeholder={t('formName')} type="text" id="fname" name="fname"></input>
                <input onChange={e => setLetter({...letter, email: e.target.value})} className={"oval-input"} placeholder={t('formEmail')} type="email" id="fname" name="fname"></input>
                <input onChange={e => setLetter({...letter, title: e.target.value})} className={"oval-input"} placeholder={t('emailTitle')} type="text" id="fname" name="fname"></input>
                <div>
                    <textarea onChange={e => setLetter({...letter, body: e.target.value})} className={"textarea"} placeholder={t('emailBody')} rows="10" cols="10" name="text" ></textarea>
                </div>
                <div className="sendButtons">
                <button><h3>{t('sendBtn')}</h3></button>
                </div>
            </div>

        </div>

    );
};

export default Contact;