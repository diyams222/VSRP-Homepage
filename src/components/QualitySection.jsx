import React from 'react';
import './QualitySection.css';
import manImg from '../assets/man.png';
import arrowIcon from '../assets/Vector.svg';

export default function QualitySection() {
    return (
        <section className="quality-section" id="quality">
            <div className="quality-bg-wrapper">
                <img
                    src={manImg}
                    alt="VSRP Rubber Engineering Specialist"
                    className="quality-bg-img"
                />
                <div className="quality-overlay" />
            </div>

            <div className="quality-container">
                <div className="quality-left">
                    <h2 className="quality-title">
                        VSRP are<br />
                        furthering quality<br />
                        in <span className="title-orange">our industries</span>.
                    </h2>
                </div>

                <div className="quality-right">
                    <p className="quality-description">
                        Across private, commercial and civil projects, our rubber products are custom-engineered to be reliable and cost-effective. We support the specific needs of specialised providers, plugging the gaps in their projects so they can continue to deliver at the highest level.
                    </p>

                    <button className="quality-contact-btn">
                        <span className="contact-btn-text">CONTACT US</span>
                        <span className="contact-arrow-circle">
                            <img src={arrowIcon} alt="arrow" className="contact-arrow arrow-1" />
                            <img src={arrowIcon} alt="arrow" className="contact-arrow arrow-2" />
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
}
