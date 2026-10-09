import React from 'react';
import './Navbar.css';

import logo from "../assets/vsrp-logo.svg";
import arrowIcon from "../assets/Vector.svg";

export default function Navbar() {
    return (
        <header className="navbar">

            <a href="#" className="logo-box" aria-label="VSRP Home">
                <img src={logo} alt="VSRP Logo" className='logo-img' />
                <div className="logo-text">
                    <span className="logo-title">VSRP</span>
                    <span className="logo-subtitle">Engineered Rubber</span>
                </div>
            </a>

            <div className='nav-right'>
                <div className="nav-links">
                    <a href="#about">ABOUT</a>
                    <a href="#industries">INDUSTRIES</a>
                    <a href="#products">PRODUCTS</a>
                    <a href="#projects">PROJECTS</a>
                    <a href="#insights">INSIGHTS</a>
                </div>

                <button className="contact-btn">
                    <span>CONTACT</span>
                    <span className="arrow-circle">
                        <img src={arrowIcon} alt="arrow" className="arrow-img arrow-1" />
                        <img src={arrowIcon} alt="arrow" className="arrow-img arrow-2" />
                    </span>
                </button>
            </div>

        </header>
    );
}
