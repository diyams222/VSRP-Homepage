import React from 'react';
import './AboutSection.css';
import arrowIcon from '../assets/Vector.svg';
import shadowRight from '../assets/shadow-right.png';

export default function AboutSection() {
    return (
        <section className="about-section" id="about">

            <div className="about-container">


                <div className="about-left-col">
                    <h2 className="about-main-title">
                        Wherever Precision Is <br/>Needed, <span className="title-orange">VSRP Delivers.</span>
                    </h2>

                    <div className="stats-grid">

                        <div className="stats-row">
                            <div className="stat-card">
                                <div className="stat-number">
                                    20<span className="stat-plus">+</span>
                                </div>
                                <p className="stat-label">Years of experience</p>
                            </div>

                            <div className="stat-card">
                                <div className="stat-number">
                                    122K<span className="stat-plus">+</span>
                                </div>
                                <p className="stat-label">Ventilation tube joins</p>
                            </div>
                        </div>

                        <div className="stats-divider"></div>

                        <div className="stats-row">
                            <div className="stat-card">
                                <div className="stat-number">
                                    5M<span className="stat-plus">+</span>
                                </div>
                                <p className="stat-label">Rubber seals supplied</p>
                            </div>

                            <div className="stat-card">
                                <div className="stat-number">
                                    450K<span className="stat-plus">+</span>
                                </div>
                                <p className="stat-label">Traffic light seals</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="about-right-col">
                    <h3 className="about-sub-title">
                        We're engineers, manufacturers <br/>and problem-solvers.
                    </h3>

                    <div className="about-paragraphs">
                        <p>
                            Whether you need a custom seal, a specialised extrusion, a bonded rubber component or a completely new product, we'll work with you to find the right solution.
                        </p>
                        <p>
                            We've been doing it for more than two decades, helping businesses across Australia keep projects moving.
                        </p>
                    </div>

                    <button className="about-btn">
                        <span>ABOUT VSRP</span>
                        <span className="about-arrow-circle">
                            <img src={arrowIcon} alt="arrow" className="about-arrow arrow-1" />
                            <img src={arrowIcon} alt="arrow" className="about-arrow arrow-2" />
                        </span>
                    </button>
                </div>

            </div>

            <img src={shadowRight} alt="decorative pattern" className="about-bg-graphic" />

        </section>
    );
}
