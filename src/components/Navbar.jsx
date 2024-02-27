import React from 'react';
import { useState, useEffect } from 'react';
import '../styles/layouts/_navbar.scss';
import logo from '../assets/logo.png';
import { Link } from 'react-scroll';

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
                <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
                <li><Link to='program' smooth={true} offset={-260} duration={500}>Program</Link></li>
                <li><Link to='about' smooth={true} offset={-150} duration={500}>About us</Link></li>
                <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
                <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
                <li><Link to='contact' smooth={true} offset={-260} duration={500}>Contact us</Link></li>
                <li><Link className='btn'>Contact us</Link></li>
            </ul>
        </nav>
    )
};

export default Navbar;