import React, { useEffect } from 'react';
import "./About.css";
import Typical from 'react-typical';

import Aos from "aos";
import "aos/dist/aos.css";


function About() {
    
    return (
        <>
            <div id="about">
                <div className="about-container-first">
                    <div className="about-title">
                        <h1 className="section-title">About me</h1>
                        <div className="line"></div>
                        <h3 className="subtitle" data-aos="zoom-in-right">who I am</h3>
                    </div>
                    
                    <div className="about-container">
                        <div className="first-container">
                            <div className="left-column">
                                <img src="../images/profile-pic2.png"  alt="profile-pic"></img>
                            </div>
                            <div className="right-column">
                                <p className="about-text">I am a self-taught front-end developer with an interest in UI/UX design and back-end development. Currently located in Eindhoven, The Netherlands. </p>
                                <br></br>
                                <p className="about-text">I design and build websites from scratch. I focus on crafting clean & user-friendly experiences. I am pursuing the opportunity to begin my career in this field. </p>
                                <br></br>
                                <p className="about-text">I really enjoy learning new skills daily, solving problems, making things pretty and easy to use and have passion for web development.</p>
                                <br></br>
                                <p style={{position: "absolute"}}> If I am not on my computer, I like{" "} 
                                    <Typical
                                        loop={Infinity}
                                        steps={['playing board games', 1000, 'running', 1000, 'baking', 1000,'spending time with my family', 1000,' spending time with my friends', 1000,]}
                                        wrapper="b"
                                            
                                    />
                                </p>
                                    {/*<p className="about-text">If I am not on my computer, I like playing board games, running, baking and spending time with my family and friends.</p>*/}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="second-container">
                    <h3 className="subtitle second" data-aos="zoom-in-right">Bring your ideas to the internet</h3>
                    <div className="skills">

                        <div className="skills-box designer">
                            <h1 className="skills-name">Designer</h1>
                            <div className="skills-text">
                                <p className="skills-description">who has passion for designing modern, beautiful, clean design patterns, thoughtful interactions.</p>
                                <div className="skills-icons">
                                    <img src="../images/icons/wireframing.png" className="icon1" alt="wireframing"></img>
                                    <img src="../images/icons/design.png" className="icon2" alt="design"></img>
                                </div>
                            </div>
                        </div>

                        <div className="skills-box coder">
                            <h1 className="skills-name">Coder</h1>
                            <div className="skills-text">
                                <p className="skills-description">who focuses on writing clean, efficient code, and enjoys bringing ideas to life in the browser.</p>
                                <div className="skills-icons">
                                    <img src="../images/icons/frontend.png" className="icon3" alt="frontend"></img>
                                    <img src="../images/icons/backend.png" className="icon4" alt="backend"></img>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h3 className="technical-title">Technical skills</h3>

                    <div className="skills-container">
                        <div className="technical-skills-box designing">
                            <div className="skills-wrapper">
                                <ul>
                                    <li>Prototyping</li>
                                    <li>Wireframing</li>
                                    <li>UI / UX</li>
                                    
                                </ul>
                            </div>
                            <div className="skills-wrapper">
                                <ul>
                                    <li>Adobe XD</li>
                                    <li>Figma</li> 
                                    <li>Webflow</li>  
                                </ul>   
                            </div>
                        </div>

                        <div className="technical-skills-box coding">
                            <div className="skills-wrapper">
                                <ul>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>Javascript</li> 
                                </ul>   
                            </div>
                            <div className="skills-wrapper">
                                <ul>
                                    <li>Bootstrap</li>
                                    <li>React</li> 
                                    <li>Node.js</li>  
                                </ul>   
                            </div>
                            <div className="skills-wrapper">
                                <ul>
                                    <li>Git & Github</li>
                                    <li>Postman</li> 
                                    <li>MongoDB</li>  
                                </ul>   
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;