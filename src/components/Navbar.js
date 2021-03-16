import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdFingerprint } from 'react-icons/md';
import { FaBars, FaTimes } from 'react-icons/fa';
/*import { Button } from './Button'; */
import "./Navbar.css";
import { IconContext } from "react-icons/lib";

function Navbar() {
     // States
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

  //function
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener("resize", showButton);
    return (
        <>
        <IconContext.Provider value={{ color: "#fff"}}>
            <div className="navbar">
                <div className="navbar-container container">
                    <div className="logo-container">
                        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                            {/*<MdFingerprint className="navbar-icon" />*/}
                            {/*<img src="../images/Union-1.svg" alt="profile-pic" style={{width:"40px", marginRight:"10px"}}></img>*/}
                            <img src="../images/logo/logo.png" alt="profile-pic" style={{width:"50px", marginRight:"10px"}}></img>
                        </Link>
                        <Link to="/" className="navbar-text" onClick={closeMobileMenu}>
                            <span>Gabriella</span>JS
                        </Link>
                    </div>
                    <div className="menu-icon" onClick={ handleClick } >
                        { click ? <FaTimes /> : <FaBars /> }
                    </div>

                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/portfolio" className="nav-links" onClick={closeMobileMenu}>
                                Portfolio
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
                                Contact
                            </Link>
                        </li>                        
                    </ul>
                </div>
            </div>
            </IconContext.Provider>
        </>
    )
}

export default Navbar;
