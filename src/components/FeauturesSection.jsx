import React from "react";
import './FeauturesSection.css';
import icon1 from "../assets/icon1.svg";
import icon2 from "../assets/icon2.svg";
import icon3 from "../assets/icon3.svg";

export default function FeauturesSection() {
    return (
        <section className="feautures-section" id="features">
            <div className="feautures-main">

                <div className="feauture-title">
                    <h2>
                        More Than A <br />
                        <span className="title-orange">Rubber Company.</span>
                    </h2>
                    <p>
                        We're engineers, problem-solvers and manufacturing partners, helping businesses turn unique requirements into reliable, high-performance rubber solutions.
                    </p>
                </div>

                <div className="feauture-containers">

                    <div className="feauture-card">
                        <div className="icon-circle">
                            <img src={icon1} alt="We Engineer Solutions" />
                        </div>
                        <div className="card-divider"></div>
                        <h3>We Engineer Solutions.</h3>
                        <p>Custom products designed around your exact requirements.</p>
                    </div>

                    <div className="feauture-card">
                        <div className="icon-circle">
                            <img src={icon2} alt="We Know Rubber" />
                        </div>
                        <div className="card-divider"></div>
                        <h3>We Know Rubber.</h3>
                        <p>Material expertise backed by 20+ years of industry experience.</p>
                    </div>

                    <div className="feauture-card">
                        <div className="icon-circle">
                            <img src={icon3} alt="We Deliver Confidence" />
                        </div>
                        <div className="card-divider"></div>
                        <h3>We Deliver Confidence.</h3>
                        <p>Quality, traceability and reliability at every stage.</p>
                    </div>
                </div>

            </div>
        </section>
    );
}
