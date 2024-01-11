import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from "../images/Без названия (1).jpg";
import image2 from "../images/Без названия (2).jpg";
import image4 from "../images/maxresdefault.jpg";
import PartnerCard from "./PartnerCard";
const Partners = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };
    return (
        <div id={"partners"} className="partner">
        <Slider {...settings}>

            <PartnerCard img={image4} link={"https://translate.google.com/?hl=ru&tab=TT"}/>
            <PartnerCard img={image4} link={"https://translate.google.com/?hl=ru&tab=TT"}/>
            <PartnerCard img={image4} link={"https://translate.google.com/?hl=ru&tab=TT"}/>
            <PartnerCard img={image4} link={"https://translate.google.com/?hl=ru&tab=TT"}/>
            <PartnerCard img={image4} link={"https://translate.google.com/?hl=ru&tab=TT"}/>

        </Slider>
        </div>
    );
};

export default Partners;