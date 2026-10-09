import React, { useState } from 'react';
import './FaqSection.css';
import plusIcon from '../assets/plussymbol.svg';
import arrowIcon from '../assets/Vector.svg';
import shadowLeft from '../assets/shadow-left.png';

const faqData = [
    {
        id: 1,
        question: "What type of rubber should I use?",
        answer: "At VSRP, we know rubber. Across any application, our experts are well equipped to advise on the best make and material for your rubber products. If you need reliable performance, we can show you exactly how to get it. All you need to do is give us a call."
    },
    {
        id: 2,
        question: "What is the hardness scale for rubber?",
        answer: "Rubber hardness is typically measured on the Shore A durometer scale, ranging from soft and flexible (like rubber bands) to rigid and impact-resistant. We help select the optimal hardness rating for your operating conditions."
    },
    {
        id: 3,
        question: "What are minimum order quantities?",
        answer: "We support both custom prototype runs and high-volume commercial production. Our flexible manufacturing setup allows us to accommodate custom order volumes tailored to your schedule."
    },
    {
        id: 4,
        question: "How can I get a quote?",
        answer: "Getting a quote is simple—send us your specifications, technical drawings, or sample requirements through our contact form or give our team a direct call for a rapid consultation."
    },
    {
        id: 5,
        question: "Which materials types do VSRP offer?",
        answer: "We manufacture products across a wide spectrum of compounds including EPDM, Nitrile (NBR), Neoprene (CR), Silicone, Viton (FKM), Natural Rubber, and high-performance bespoke formulations."
    },
    {
        id: 6,
        question: "Can VSRP source products & materials?",
        answer: "Yes, alongside our in-house engineering and manufacturing facilities, we leverage an established global supply network to source specialty polymers, tools, and custom raw materials."
    }
];

export default function FaqSection() {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <section className="faq-section" id="faq">
            <div className="faq-container">

                <div className="faq-left-side">
                    <h2 className="faq-title">
                        Frequently Asked <br />
                        <span className="title-orange">Questions</span>
                    </h2>

                    <p className="faq-subtitle">
                        We've heard it all. Here's everything you need to know before working with us.
                    </p>

                    <button className="faq-ask-btn" type="button">
                        <span className="faq-btn-text">ASK A QUESTION</span>
                        <span className="faq-arrow-circle">
                            <img src={arrowIcon} alt="arrow" className="faq-arrow-icon" />
                        </span>
                    </button>
                </div>


                <div className="faq-right-col">
                    <div className="faq-accordion-list">
                        {faqData.map((item, index) => {
                            const isOpen = openIndex === index;
                            return (
                                <div
                                    key={item.id}
                                    className={`faq-item ${isOpen ? 'faq-item-open' : ''}`}
                                >
                                    <button
                                        className="faq-question-btn"
                                        onClick={() => toggleFaq(index)}
                                        aria-expanded={isOpen}
                                        type="button"
                                    >
                                        <span className="faq-question-text">{item.question}</span>
                                        <span className="faq-toggle-circle">
                                            {isOpen ? (
                                                <span className="faq-minus-icon" aria-hidden="true" />
                                            ) : (
                                                <img
                                                    src={plusIcon}
                                                    alt="expand"
                                                    className="faq-plus-icon"
                                                    aria-hidden="true"
                                                />
                                            )}
                                        </span>
                                    </button>

                                    {isOpen && (
                                        <div className="faq-answer-wrapper">
                                            <p className="faq-answer-text">{item.answer}</p>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            <img
                src={shadowLeft}
                alt="decorative graphic"
                className="faq-bg-graphic"
                aria-hidden="true"
            />
        </section>
    );
}
