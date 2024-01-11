import React from 'react';
import '../style/MainBody.css';
import image1 from "../images/Без названия (1).jpg";
const Card = (props) => {
    return (

         <div className="item">
            <div className="image-container">
                <img  src={props.img} alt="" />
            </div>
            <div className="text-container">
                <p><h3>Title</h3></p>
                <h4 style={{fontWeight:"250"}}>aaadddddddddddddddddddddddddddddddddddddddddddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxффффффффффффффффффффффффффффффффффффффффффффффффффффффффффффффффффффффффффффффффффффффффффффффффффффффф</h4>
            </div>
         </div>
    );
};

export default Card;