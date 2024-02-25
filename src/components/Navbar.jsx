import React from 'react';
import { useState, useEffect } from 'react';
import '../styles/layouts/_navbar.scss';
import logo from '../assets/logo.png';

function Navbar() {

    const [sticky, setSticky] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        })
    }, []);

    return (
        <nav className={`container navbar ${sticky ? 'dark-nav' : ''}`}>
            <img src={logo} className='navbar__logo' alt="" />
            <ul className='navbar__list'>
                <li>Home</li>
                <li>Program</li>
                <li>About us</li>
                <li>Campus</li>
                <li>Testimonials</li>
                <li><button className='btn'>Contact us</button></li>
            </ul>
        </nav>
    )
};

export default Navbar;