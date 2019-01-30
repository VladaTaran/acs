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
            <Fade top>
                <h1 className="home__background-title">
                    Aesthetic Consilium <br/>
                    School
                </h1>
            </Fade>
        </div>
        <div className="home__about">
            <h2 className="ac-title">Aesthetic Consilium School<br/>
            East-European School of Aesthetic Medicine</h2>
            <p className="home__about-article"> is one of the best school for doctors who work in the aesthetic
                medicine fields, we are recognized by the world community and our graduates are the most highly
                paid in the market of aesthetic services. In addition after the training we provide 24/7 support to
                our students, help in solving complex clinical cases and interesting aesthetic tasks. We have invited the world known trainers, doctors with fundamental ideas in anti-age medicine
                who will share with you all the knowledge and "secrets" during 10 days. You will learn the latest
                anti-age and aesthetic correction in practice, with your own hands. Leading international experts in the field of cosmetology regularly share their professional 
                knowledge, practical experience, and the nuances of the profession through personalized training. 
                Aesthetic Consilium School regularly conducts workshops in all major areas of esthetic medicine 
                for a different initial level of training. Each workshop is an unbiased personal expert opinion, 
                it is a knowledge base gained over years of experience.
            </p>
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
                <span>book course till Fabruary 15 for early bird price</span>
                <OfferButton />
            </div>
        </div>
        <div className="home__text">
            <p className="home__text-article">
                <span className = 'home__text-color'>80%</span> of students return to our advanced training courses.<br/>
                <span className = 'home__text-color'>50%</span> of our students successfully work in the field of cosmetology. <br/>
                <span className = 'home__text-color'>20%</span> opened their cosmetology rooms.<br/>
                <span className = 'home__text-color'>5%</span> opened their clinics.<br/>
            </p>
            <p className="home__text-article"> 
                We have already graduated <span className = 'home__text-color'>500</span> students.<br/>
                The school has <span className = 'home__text-color'>100</span> speakers 20% of them are European Experts.<br/>
                Every year we find new advanced speakers for you.<br/>
                Aesthetic Consilium School is <span className = 'home__text-color'>Your</span> way to success.
            </p>
        </div>
        <Footer />
    </div>
);

export default Home;