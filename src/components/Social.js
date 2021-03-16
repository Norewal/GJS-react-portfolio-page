import React from 'react'
import './Social.css';

import { CgMail } from 'react-icons/cg';
import { AiOutlineBehance } from 'react-icons/ai';
import { TiSocialLinkedin, TiSocialFacebook } from 'react-icons/ti'
import { RiGithubLine } from 'react-icons/ri';

function social() {
    return (
        <>
            <div className="social">
                <a href="mailto:seres.gabriella88@gmail.com" target="_blank" rel="noopener noreferrer"><CgMail size={32} style={{color: 'whitesmoke'}} /></a>
                <a href="https://github.com/Norewal" target="_blank" rel="noopener noreferrer"><RiGithubLine size={32} style={{color: 'whitesmoke'}} /></a>
                <a href="https://www.linkedin.com/in/gabriella-j-s-4a35a5204/" target="_blank" rel="noopener noreferrer"><TiSocialLinkedin size={32} style={{color: 'whitesmoke'}} /></a>
                <a href="https://www.behance.net/gabrieljszkai" target="_blank" rel="noopener noreferrer"><AiOutlineBehance size={32} style={{color: 'whitesmoke'}} /></a>
                <a href="https://www.facebook.com/gabriella.jaszkaine.seres/" target="_blank" rel="noopener noreferrer"><TiSocialFacebook size={32} style={{color: 'whitesmoke'}} /></a>
            </div>
        </>
    )
}

export default social;
