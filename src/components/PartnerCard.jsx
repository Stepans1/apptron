import React from 'react';


const PartnerCard = (props) => {
    function redirectToPartner() {
        window.location.href = props.link;

    }

    return (
        <div>
            <img onClick={redirectToPartner} className='partner-img' src={props.img} alt="" />
        </div>
    );
};

export default PartnerCard;