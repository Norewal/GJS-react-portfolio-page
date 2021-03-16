import React from 'react';
import './Contact.css';

import { CgMail } from 'react-icons/cg';
import { AiOutlineBehance } from 'react-icons/ai';
import { TiSocialLinkedin, TiSocialFacebook } from 'react-icons/ti'
import { RiGithubLine } from 'react-icons/ri';
import { Button } from '../../components/Button';

import Social from "../../components/Social";
import Form from "../../components/Form";

import Aos from "aos";
import "aos/dist/aos.css";

function Contact() {
    return (
        <>
            <div id="contact">
                <div className="contact-container">
                    <h1 className="section-title">Contact me</h1>
                    <div className="line-container">
                        <div className="line"></div>
                    </div>
                    <h3 className="subtitle" data-aos="zoom-in-right">get in touch</h3>
                    
                    <div className="first-part">
                        <p>If you would like to get in touch, talk to me about a project collaboration or just say hi,</p>
                        <p>fill the form below or open one of my social network pages.</p> 
                                                
                        <p>Thank you!</p>
                        
                        
                        {/*<ul className="social-icons">
                            <li><CgMail size={32} style={{color: '#f5f5f5'}} /><a href="mailto:seres.gabriella88@gmail.com" target="_blank" rel="noopener noreferrer"></a></li>
                            <li><RiGithubLine size={32} style={{color: '#f5f5f5'}} /><a href="https://github.com/Norewal" target="_blank" rel="noopener noreferrer"></a></li>
                            <li><TiSocialLinkedin size={32} style={{color: '#f5f5f5'}} /><a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"></a></li>
                            <li><AiOutlineBehance size={32} style={{color: '#f5f5f5'}} /><a href="https://www.behance.net/gabrieljszkai" target="_blank" rel="noopener noreferrer"></a></li>
                            <li><TiSocialFacebook size={32} style={{color: '#f5f5f5'}} /><a href="https://www.facebook.com/gabriella.jaszkaine.seres/" target="_blank" rel="noopener noreferrer"></a></li>*/}

                            {/* <li><AiOutlineCodepen size={32} style={{color: '#8AADA5'}} /><a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">freecodecamp.com/</a></li>
                            <li><FaFreeCodeCamp size={32} style={{color: '#8AADA5'}} /><a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">freecodecamp.com/</a></li> */}
                         {/*</ul> */}
                    </div>  
                    {/*<div className="form">
                        <h3>Send a message</h3>
                        <input type="text" placeholder="Enter your name" />
                        <input type="" />
                        <Button type="submit" email="seres.gabriella88@gmail.com" />
                        <Button buttonSize="btn--wide" buttonColor="primary">Send it</Button>
                    </div> */}
                    <Social />
                    <Form />
                </div>
            </div>
        </>
    )
}

export default Contact;