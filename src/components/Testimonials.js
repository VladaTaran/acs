import React from "react";
import Slider from "react-slick";

import firstTestimonials from '../img/testimonials_1.jpg';
import secondTestimonials from '../img/testimonials_2.jpg';
import thirdTestimonials from '../img/testimonials_3.jpg';

class Testimonials extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div>
          <img 
              src={firstTestimonials}
              alt="testimonials-img"
           />
        </div>
        <div>
          <img 
            src={secondTestimonials}
            alt="testimonials-img"
          />
        </div>
        <div>
        <img 
            src={thirdTestimonials}
            alt="testimonials-img"
        />
        </div>
      </Slider>
    );
  }
}

export default Testimonials;