import React from 'react';
import './VideoSection.css';
import shapeVideo from '../assets/video.mp4';
import arrowIcon from '../assets/Vector.svg';

export default function VideoSection() {
    return (
        <section className="video-section" id="products">
            <video
                src={shapeVideo}
                autoPlay
                loop
                muted
                playsInline
                className="video-bg-video"
            />

            <div className="shape-overlay"></div>

            <div className="shape-content">
                <h2 className="shape-title">
                    Whatever You Need in<br />
                    Rubber, We Can <span className="title-orange">Shape It.</span>
                </h2>

                <button className="see-product-category-btn">
                    <span className="shape-btn-text">SEE PRODUCT CATEGORIES</span>
                    <span className="shape-arrow-circle">
                        <img src={arrowIcon} alt="arrow" className="shape-arrow arrow-1" />
                        <img src={arrowIcon} alt="arrow" className="shape-arrow arrow-2" />
                    </span>
                </button>
            </div>
        </section>
    );
}
