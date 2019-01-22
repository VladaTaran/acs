import React from 'react';
import Carousel from 'nuka-carousel';
import firstTestimonials from '../img/testimonials_1.jpg';
import secondTestimonials from '../img/testimonials_2.jpg';
import thirdTestimonials from '../img/testimonials_3.jpg';
 
export default class extends React.Component {
  render() {
    return (
      <Carousel>
        <img 
            src={firstTestimonials}
            alt="testimonials-img"
         />
        <img 
            src={secondTestimonials}
            alt="testimonials-img"
        />
        <img 
            src={thirdTestimonials}
            alt="testimonials-img"
        />
      </Carousel>
    );
  }
};