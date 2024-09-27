import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faPinterest, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faRss } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer>
            <div className="social-media">
                <a href="#" className="social-icon"><FontAwesomeIcon icon={faFacebookF} /></a>
                <a href="#" className="social-icon"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="#" className="social-icon"><FontAwesomeIcon icon={faPinterest} /></a>
                <a href="#" className="social-icon"><FontAwesomeIcon icon={faYoutube} /></a>
                <a href="#" className="social-icon"><FontAwesomeIcon icon={faEnvelope} /></a>
                <a href="#" className="social-icon"><FontAwesomeIcon icon={faRss} /></a>
            </div>
            <hr className='hr' />
            <div className="footer-content">
                <p>© The World Travel Guy 2024</p>
                <p><a href="#">Affiliate Disclosures</a> • <a href="#">Privacy Policy</a> • <a href="#">Terms Of Use</a></p>
                <p>Some links on this blog may lead to products or services that I recommend. If you make a purchase through these links, I may earn a small commission at no additional cost to you. This helps support the blog, and I appreciate your support!</p>
            </div>
        </footer>
    );
}

export default Footer;
