import React from 'react';
import HeroSection from '../../components/HeroSection';
import { homeObjOne } from "./Data";
import About from '../../pages/AboutPage/About';
import Portfolio from '../PortfolioPage/Portfolio';
import Contact from '../../pages/ContactPage/Contact'; 




export default function Home() {
    return (
        <div className="main" style={{backgroundColor:"whitesmoke"}}>
            <HeroSection {...homeObjOne} />  
            <About />
            <Portfolio />
            <Contact />

        </div>
    )
}
