import React from "react";
import "./ProcessSection.css";
import graphImage from "../assets/graph.png";
import arrowBottom from "../assets/arrow-bottom.svg";

export default function ProcessSection() {
    return (
        <section className="process-section">

            <div className="process-main">

                <h2>From Concept to Delivery,
                    <br />
                    We Make it <span>Happen</span>
                </h2>

                <p>
                    A proven process built around collaboration, precision and a
                    <br />
                    commitment to quality at every step.
                </p>


            </div>


            <div className="process-content">


                <div className="process-steps">

                    <div className="process-step active">
                        <div className="step-number">01</div>

                        <div className="step-content">
                            <h3>Tell Us What You Need</h3>
                            <p>Send us a drawing, sample or specification.</p>
                        </div>
                    </div>

                    <div className="process-step">
                        <div className="step-number">02</div>

                        <div className="step-content">
                            <h3>We'll Engineer The Solution</h3>
                            <p>
                                Materials, tooling and manufacturing
                                <br />
                                approach.
                            </p>
                        </div>
                    </div>

                    <div className="process-step">
                        <div className="step-number">03</div>

                        <div className="step-content">
                            <h3>We'll Make It</h3>
                            <p>
                                Materials, tooling and manufacturing
                                <br />
                                approach.
                            </p>
                        </div>
                    </div>

                    <div className="process-step">
                        <div className="step-number">04</div>

                        <div className="step-content">
                            <h3>We'll Deliver It</h3>
                            <p>
                                Materials, tooling and manufacturing
                                <br />
                                approach.
                            </p>
                        </div>
                    </div>

                </div>

                <div className="process-image">
                    <img src={graphImage} alt="Engineering and manufacturing process" />
                </div>
            </div>

            <div className="process-scroll-arrow">
                <img src={arrowBottom} alt="scroll down" className="bottom-arrow-img" />
                <span className="scroll-writings">SCROLL DOWN</span>
            </div>
        </section>
    )
}