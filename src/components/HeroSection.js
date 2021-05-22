import React from 'react';
import "./HeroSection.css";
import "aos/dist/aos.css";

function HeroSection({
    lightBg, 
    topLine, 
    lightText, 
    lightTextDesc, 
    headline, 
    bigHeadline,
    description, 
}) {
    return (
    <>
        <div className={lightBg ? "home__hero-section" : "hero__hero-section darkBg"}>
            <div className="container home__hero-container" style={{background:"url('./1.jpg')"}}>
                <div className="home__hero-text-wrapper" data-aos="fade-right">
                    <div className="top-line">{topLine}</div>
                    <h1 className={lightText ? "heading" : "heading dark"}>{headline}{bigHeadline}</h1>
                    <p className={lightTextDesc ? "home__hero-subtitle" : "home__hero-subtitle dark"}>
                        {description}
                    </p>
                </div>
            </div>
        </div>
    </>
    )
}

export default HeroSection;