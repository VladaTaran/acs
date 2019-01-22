import React from 'react';
import Fade from 'react-reveal/Fade';
import Advantages from './Advantages';
import GroupIcon from '../img/group_icon_1.png';
import PracticeIcon from '../img/practice_icon_1.png';
import TrainersIcon from '../img/trainers_icon_1.png';
import SupportIcon from '../img/support_icon_1.png';
import OfferButton from './OfferButton';
import Footer from './Footer';

const Home = () => (
    <div className="home">
        <div className="home__background">
            <Fade top />
        </div>
        <div className="home__about">
            <h2 className="ac-title">Aesthetic Consilium School<br/>
            East-European School of Aesthetic Medicine</h2>
            <p className="home__about-article"> is one of the best school for doctors who work in the aesthetic
                medicine fields, we are recognized by the world community and our graduates are the most highly
                paid in the market of aesthetic services. In addition after the training we provide 24/7 support to
                our students, help in solving complex clinical cases and interesting aesthetic tasks. We have invited the world known trainers, doctors with fundamental ideas in anti-age medicine
                who will share with you all the knowledge and "secrets" during 10 days. You will learn the latest
                anti-age and aesthetic correction in practice, with your own hands. Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className="home__icons">
            <Advantages 
                text = "Small, comfortable groups (not more than 10 students)"
                img = { GroupIcon }
            />
            <Advantages
                text = "Focus on the practice"
                img = { PracticeIcon }
            />
            <Advantages 
                text ="International trainers"
                img = { TrainersIcon }
            />
            <Advantages 
                text = "24/7 support"
                img = { SupportIcon }
            />
        </div>
        <div className="offer">
            <div className="offer-background hm-pg">
                <span>Limited Time Offer:</span>
                <span>booked cours till Fabruary 15 for early bird price</span>
                <OfferButton />
            </div>
        </div>
        <div className="home__text">
            <p className="home__text-article">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className="home__text-article">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
        <Footer />
    </div>
);

export default Home;