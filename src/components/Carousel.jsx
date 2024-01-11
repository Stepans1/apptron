import React, {useContext, useEffect, useRef} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../images/Без названия (1).jpg';
import image2 from '../images/Без названия (2).jpg';
import image3 from '../images/images222.jpg';
import image4 from '../images/maxresdefault.jpg';
import '../style/MainBody.css';
import Card from "./Card";


const Carousel = () => {


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,


        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
        ],
    };


    return (
        <div id={"start"} className="container">
        <Slider  {...settings}>
            <div >
                <img className='image' src={image1}  alt="Логотип" />
            </div>
            <div>
                <img  className='image' src={image2} alt="Логотип" />
            </div>
            <div>
                <img className='image' src={image4} alt="Логотип" />
            </div>

        </Slider>
            <div className="objects-below-slider">
            <Card img={image1}/>
            <Card img={image2}/>
            <Card img={image4}/>
            <Card img={image3}/>
            </div>


        </div>
    );
};

export default Carousel;