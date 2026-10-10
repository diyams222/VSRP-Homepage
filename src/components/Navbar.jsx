import React, { useState } from 'react';
import './Navbar.css';
import logo from "../assets/vsrp-logo.svg";
import arrowIcon from "../assets/Vector.svg";
import caretDown from "../assets/CaretDown.svg";

export default function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="navbar">

            <a href="#" className="logo-box" aria-label="VSRP Home">
                <img src={logo} alt="VSRP Logo" className='logo-img' />
                <div className="logo-text">
                    <span className="logo-title">VSRP</span>
                    <span className="logo-subtitle">Engineered Rubber</span>
                </div>
            </a>

            <button
                className={`hamburger-btn ${isMenuOpen ? 'open' : ''}`}
                onClick={() => setIsMenuOpen(prev => !prev)}
                aria-label="Toggle navigation"
                aria-expanded={isMenuOpen}
                type="button"
            >
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
            </button>

            <div className={`nav-right ${isMenuOpen ? 'nav-open' : ''}`}>
                <div className="nav-links">
                    <a href="#about">ABOUT</a>
                    <a href="#industries" className="nav-dropdown-link">
                        <span>INDUSTRIES</span>
                        <img src={caretDown} alt="" className="nav-caret-icon" />
                    </a>
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
