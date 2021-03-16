import React from 'react';
import './Footer.css';

import Social from "../../components/Social";

function Footer() {
    return (
        <div className='footer-container'>
            <div className="wrapper">
               {/* <h4>Thanks for visiting</h4> */}
                <small className='website-rights'> © 2021 GJS</small>
                <Social />
            </div>
        </div>
    );
}

export default Footer;