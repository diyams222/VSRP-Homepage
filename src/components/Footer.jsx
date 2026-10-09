import React from 'react';
import './Footer.css';

import vsrpLogo from '../assets/vsrp-logo.svg';
import instaIcon from '../assets/insta.svg';
import fbIcon from '../assets/fb.svg';
import linIcon from '../assets/lin.svg';
import twiterIcon from '../assets/twiter.svg';
import isoBadge from '../assets/Badge.svg';

export default function Footer() {
    return (
        <footer className="footer-section">
            <div className="footer-bg-watermark" aria-hidden="true">
                <svg
                    viewBox="0 -100 1440 1100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="footer-watermark-svg"
                    preserveAspectRatio="none"
                >
                    <path d="M-400 1000 L-400 -100 L381 -100 L-260 1000 Z" fill="rgba(255, 255, 255, 0.015)" />
                    <path d="M-260 1000 L381 -100 L521 -100 L-120 1000 Z" fill="rgba(255, 255, 255, 0.024)" />
                    <path d="M-120 1000 L521 -100 L641 -100 L1 1000 Z" fill="rgba(255, 83, 42, 0.038)" />
                    <path d="M65 1000 L705 -100 L825 -100 L185 1000 Z" fill="rgba(255, 255, 255, 0.018)" />
                </svg>
            </div>

            <div className="footer-container">
                <div className="footer-main-grid">

                    <div className="footer-col-brand">
                        <div className="footer-logo-wrap">
                            <a href="#" className="footer-logo-link" aria-label="VSRP Home">
                                <div className="footer-logo-lockup">
                                    <img src={vsrpLogo} alt="VSRP" className="footer-logo-icon" />
                                    <div className="footer-logo-text">
                                        <span className="footer-logo-title">VSRP</span>
                                        <span className="footer-logo-subtitle">Engineered Rubber</span>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <p className="footer-brand-desc">
                            For over 20 years, VSRP has delivered engineered rubber solutions built around the unique requirements of Australian businesses.
                        </p>

                        <div className="footer-social-links">
                            <div className="social-icon-box" aria-label="Instagram">
                                <img src={instaIcon} alt="Instagram" />
                            </div>
                            <div className="social-icon-box" aria-label="Facebook">
                                <img src={fbIcon} alt="Facebook" />
                            </div>
                            <div className="social-icon-box" aria-label="LinkedIn">
                                <img src={linIcon} alt="LinkedIn" />
                            </div>
                            <div className="social-icon-box" aria-label="X">
                                <img src={twiterIcon} alt="Twitter / X" />
                            </div>
                        </div>

                        <div className="footer-accreditation">
                            <img src={isoBadge} alt="ISO 9001 Certified System" className="footer-iso-badge" />
                            <span className="footer-iso-text">ISO9001:2015 Accredited</span>
                        </div>
                    </div>

                    <div className="footer-right-content">
                        <div className="footer-nav-columns">
                            <div className="footer-nav-block">
                                <h4 className="footer-heading">COMPANY</h4>
                                <ul className="footer-nav-list">
                                    <li><a href="#about">About</a></li>
                                    <li><a href="#projects">Case Studies</a></li>
                                    <li><a href="#insights">Blogs</a></li>
                                    <li><a href="#contact">Contact</a></li>
                                </ul>
                            </div>

                            <div className="footer-nav-block footer-col-industries">
                                <h4 className="footer-heading">INDUSTRIES</h4>
                                <ul className="footer-nav-list">
                                    <li><a href="#industries">Agriculture &amp; Irrigation</a></li>
                                    <li><a href="#industries">Plumbing</a></li>
                                    <li><a href="#industries">Civil Engineering and Construction</a></li>
                                    <li><a href="#industries">Mining</a></li>
                                    <li><a href="#industries">Defence</a></li>
                                    <li><a href="#industries">Architectural Industry</a></li>
                                    <li><a href="#industries">Road Transport</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="footer-divider-dotted" />

                        <div className="footer-info-row">
                            <div className="footer-nav-block footer-contact-block">
                                <h4 className="footer-heading">CONTACT</h4>
                                <p className="footer-contact-phone">
                                    <a href="tel:1800787777">1800 787 777</a>, <a href="tel:+61288349958">+61 (2) 8834 9958</a>
                                </p>
                                <p className="footer-contact-email">
                                    <a href="mailto:enquiries@vsrp.com.au">enquiries@vsrp.com.au</a>
                                </p>
                            </div>

                            <div className="footer-nav-block footer-location-block">
                                <h4 className="footer-heading">LOCATION</h4>
                                <address className="footer-address">
                                    Unit 3, 10 Banksia Place,<br />
                                    South Windsor NSW 2756
                                </address>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="footer-bottom-bar">
                    <div className="footer-bottom-left">
                        <span>COPYRIGHT &copy; 2026 VSRP</span>
                    </div>

                    <div className="footer-bottom-center">
                        <span>SITE BY ACODEZ</span>
                    </div>

                    <div className="footer-bottom-right">
                        <a href="#privacy">PRIVACY POLICY</a>
                        <span className="footer-bottom-sep">|</span>
                        <span>ALL RIGHTS RESERVED</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
