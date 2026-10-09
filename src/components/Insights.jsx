import React from 'react';
import './Insights.css';
import tire1 from '../assets/tire1.png';
import tire2 from '../assets/tire2.png';
import tire3 from '../assets/tire3.png';
import arrowIcon from '../assets/Vector.svg';

const insightsData = [
    {
        id: 1,
        image: tire1,
        title: 'Understanding Rubber Compounds: Choosing The Right Material...',
        link: '#insight-detail-1',
    },
    {
        id: 2,
        image: tire2,
        title: 'Understanding Rubber Compounds: Choosing The Right Material...',
        link: '#insight-detail-2',
    },
    {
        id: 3,
        image: tire3,
        title: 'Understanding Rubber Compounds: Choosing The Right Material...',
        link: '#insight-detail-3',
    },
];

export default function Insights() {
    return (
        <section className="insights-section" id="insights">
            <div className="insights-container">

                <div className="insights-header">
                    <div className="insights-header-left">
                        <h2 className="insights-title">
                            Industry <span className="title-orange">Insights</span>
                        </h2>
                        <p className="insights-subtitle">
                            Practical advice, material expertise and engineering knowledge to help you make informed decisions
                        </p>
                    </div>

                    <button className="view-all-insights-btn">
                        <span>VIEW ALL INSIGHTS</span>
                        <div className="insights-btn-circle">
                            <img src={arrowIcon} alt="arrow" />
                        </div>
                    </button>
                </div>

                <div className="insights-grid">
                    {insightsData.map((item) => (
                        <article key={item.id} className="insight-card-group">
                            <div className="insight-image-card">
                                <img src={item.image} alt={item.title} />
                            </div>
                            <div className="insight-content-card">
                                <h3 className="insight-card-title">{item.title}</h3>
                                <a href={item.link} className="view-detail-link">
                                    <span className="detail-text">VIEW DETAIL</span>
                                    <span className="detail-arrow">→</span>
                                </a>
                            </div>
                        </article>
                    ))}
                </div>

            </div>
        </section>
    );
}
