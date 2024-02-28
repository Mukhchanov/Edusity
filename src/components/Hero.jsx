import React from 'react';
import '../styles/layouts/_hero.scss';
import dark_arrow from '../assets/images/dark-arrow.png';

function Hero() {
    return (
        <div className='container hero'>
            <div className="hero__text">
                <h1>We Ensure better education for better world!</h1>
                <p>Our cutting edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education</p>
                <button className='btn'>Explore more <img src={dark_arrow} /></button>
            </div>
        </div>
    )
};

export default Hero;