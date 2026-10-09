import React from 'react';
import './BuildSection.css';
import rubberVideo from '../assets/video.mp4';
import arrowBottom from '../assets/arrow-bottom.svg';

export default function BuildSection() {
    return (
        <section className="build-section" id="build">
            <div className="build-container">
                <h2 className="build-title">
                    What Can We Help You <span className="title-orange">Build?</span>
                </h2>

                <p className="build-subtitle">
                    We work with you to design, engineer and manufacture rubber solutions that meet your exact requirements.
                </p>

                <div className="video-main">
                    <video
                        src={rubberVideo}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="video-element"
                    />
                </div>

                <div className="build-scroll-arrow"  onClick={() =>
                                document.getElementById("products")?.scrollIntoView({
                                    behavior: "smooth",
                                })}>
                    <img src={arrowBottom} alt="scroll down" className="bottom-arrow-img" />
                    <span className="scroll-writings">SCROLL DOWN</span>
                </div>
            </div>
        </section>
    );
}
