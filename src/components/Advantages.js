import React from 'react';

const Advantages = (props) => (
        <div className="advantages">
            <img 
                className="advantages-img" 
                src={props.img}
                alt="advantages-img"
            >
            </img>
            <p className="advantages-title">{props.text}</p>
        </div>
);

Advantages.defaultProps = {
    img: 'https://aesthetic-consilium.com/img/favicon/apple-touch-icon-180x180.png',
    text: 'Our advantages'
};

export default Advantages;