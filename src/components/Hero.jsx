import React from "react";
import "./Hero.css";
import Navbar from "./Navbar";
import heroBg from "../assets/hero-bg.png";
import arrowIcon from "../assets/Vector.svg";
import whatsappIcon from "../assets/Group 16.svg";
import arrowBottom from "../assets/arrow-bottom.svg";

export default function Hero() {
    return (
        <section className="hero-section">

            <img src={heroBg} alt="background-image" className="hero-bg-img" />
            <div className="hero-overlay"></div>

            <div className="hero-inner">
                <Navbar />

                <div className="hero-top">
                    <h1 className="main-title">
                        Custom Rubber
                        <br />
                        <span className="title-solutions">Solutions<span className="dot">.</span></span>
                    </h1>
                </div>

                <div className="bottom-content">
                    <div className="bottom-left">
                        <p className="description">
                            For more than 20 years, we’ve helped Australian
                            <br />
                            businesses solve problems with engineered rubber
                            <br />
                            solutions. From design and tooling to manufacturing
                            <br />
                            and delivery, we make what you need, when you need it.
                        </p>

                        <div className="scroll-down">
                            <img src={arrowBottom} alt="scroll down" className="bottom-arrow-img" />
                            <span className="scroll-writings">SCROLL DOWN</span>
                        </div>
                    </div>

                    <div className="bottom-right">
                        <h2 className="second-title">
                            Engineered To
                            <br />
                            Perform<span className="dot">.</span>
                        </h2>

                        <div className="actions">
                            <button className="project-btn">
                                <span>DISCUSS YOUR PROJECT</span>
                                <span className="project-arrow-circle">
                                    <img src={arrowIcon} alt="arrow" className="btn-arrow arrow-1" />
                                    <img src={arrowIcon} alt="arrow" className="btn-arrow arrow-2" />
                                </span>
                            </button>

                            <a href="#work" className="work-link">
                                <span className="work-text-wrapper">
                                    <span className="work-text text-1">SEE WHAT WE DO</span>
                                    <span className="work-text text-2">SEE WHAT WE DO</span>
                                </span>
                                <span className="work-arrow-wrap">
                                    <img src={arrowIcon} alt="arrow" className="work-arrow arrow-1" />
                                    <img src={arrowIcon} alt="arrow" className="work-arrow arrow-2" />
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

           
        </section>
    );
}
