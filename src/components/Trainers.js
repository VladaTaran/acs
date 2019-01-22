import React from 'react';
import Trainer from './Trainer';
import trainers from '../trainers.json';
import uuid from 'uuid';

const Trainers = () => (
    <div className="home__about">
        <h4 className="courses-title">Our Trainers</h4>
        <span className="home__about-article">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat.
        </span>
        <div className="trainer-container">
           
            {trainers.map(trainer => (
                <Trainer 
                    key = {trainer.id+uuid()}
                    trainer = {trainer}   
                />
            ))}
        </div>
    </div>
);

export default Trainers;