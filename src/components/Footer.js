import React from 'react';
import './Footer.css';

import Social from "../components/Social";

function Footer() {
    const currentYear = new Date().getFullYear();
    
    return (
        <div className='footer-container'>
            <div className="wrapper">
                <h4>Thanks for visiting</h4>
                <small className='website-rights'> © {currentYear} GJS</small>
                <Social />
            </div>
        </div>
    );
}

export default Footer;