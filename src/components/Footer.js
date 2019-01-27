import React from 'react'; 
import FacebookIcon from '../img/facebook-logo-button.png';
import InstagramIcon from '../img/instagram-logo-button.png';
import WhatsappIcon from '../img/whatsapp-logo-button.png';

const Footer = () => (
    <footer className="footer">
        <div className="footer__title">
            &copy; Aesthetic Consilium Group since 2015 
        </div>
        <div className="footer__sc">
            <a href="https://www.facebook.com/AestheticConsiliumSchool/">
                <img className="footer__sc-icon" alt="facebook" src = { FacebookIcon } />
            </a>
            <a href="https://www.instagram.com/aesthetic_consilium_school/">
                <img className="footer__sc-icon" alt="instagram" src = { InstagramIcon } />
            </a>
            <a href="https://wa.me/380992636883">
                <img className="footer__sc-icon" alt="whatsapp" src = { WhatsappIcon } />
            </a>
        </div>
        <div className="footer__phone">
            +38099 26 36 883<br/>
            +38063 63 55 495
        </div>
    </footer>
);

export default Footer;