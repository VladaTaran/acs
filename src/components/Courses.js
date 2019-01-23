import React from 'react';
import TextAnimation from './TextAnimation';
import CourseList from './CourseList';
import Trainers from './Trainers';
import OfferButton from './OfferButton';
import Testimonials from './Testimonials';
import Footer from './Footer';

const Courses = (props) => (
    <div className="home">
        <TextAnimation/>
        <div className="courses">
            <h2 className="courses-title">Programm of course</h2>
            <CourseList />
        </div>
        <Trainers />
        <div className="offer">
            <div className="offer-background crs-pg">
                <span>Limited Time Offer:</span>
                <span>booked cours till Fabruary 15 for early bird price</span>
                <OfferButton />
            </div>
        </div>
        <div className="carousel">
            <Testimonials />
        </div>     
        <Footer /> 
    </div>
);


export default Courses;