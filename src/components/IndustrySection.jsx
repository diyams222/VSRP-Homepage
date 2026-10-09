import React, { useState } from 'react';
import './IndustrySection.css';
import industryImage from '../assets/industryimage.png';
import industryBlack from '../assets/industryblack.png';
import jcbIcon from '../assets/jcb-icon.svg';
import arrowIcon from '../assets/Vector.svg';

const industries = [
  {
    name: 'Civil',
    top: 'Transport & Infrastructure',
    bottom: 'Mining',
  },
  {
    name: 'Mining',
    top: 'Agriculture & Irrigation',
    bottom: 'Defence',
  },
  {
    name: 'Agriculture',
    top: 'Mining',
    bottom: 'Building',
  },
  {
    name: 'Building',
    top: 'Agriculture',
    bottom: 'Transport & Infrastructure',
  },
  {
    name: 'Transport & Infrastructure',
    top: 'Building',
    bottom: 'Civil',
  },
];

export default function IndustrySection() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isChanging, setIsChanging] = useState(false);

  const current = industries[activeIndex];

  const handleNext = () => {
    if (isChanging) return;
    setIsChanging(true);
    setActiveIndex((prev) => (prev + 1) % industries.length);
    setTimeout(() => setIsChanging(false), 800);
  };

  const handlePrev = () => {
    if (isChanging) return;
    setIsChanging(true);
    setActiveIndex((prev) => (prev === 0 ? industries.length - 1 : prev - 1));
    setTimeout(() => setIsChanging(false), 700);
  };

  return (
    <section className="industry-section">
      <div className="industry-main">

        <div className="industry-title">
          <h2>
            Rubber Solutions Built For <span className="title-orange">Industry.</span>
          </h2>
          <p>
            From infrastructure and mining to agriculture and transport, we help businesses solve
            complex challenges with engineered rubber solutions.
          </p>
        </div>


        <div className="industry-cards">

          <div className="industry-card-left">
            <span className="card-tag">OUR INDUSTRIES</span>

            <div className="industry-names">
              <span
                className="name-dimmed"
                onMouseEnter={handlePrev}
                onClick={handlePrev}
              >
                {current.top}
              </span>

              <h3
                key={activeIndex}
                className="name-active"
                onMouseEnter={handleNext}
                onClick={handleNext}
              >
                {current.name}
              </h3>

              <span
                className="name-dimmed"
                onMouseEnter={handleNext}
                onClick={handleNext}
              >
                {current.bottom}
              </span>
            </div>

            <div className="industry-tabs">
              <div className="tab-line">
                <div
                  className="tab-indicator"
                  style={{ left: `${activeIndex * 20}%` }}
                />
              </div>

              <div className="tab-buttons">
                {industries.map((item, index) => (
                  <button
                    key={index}
                    className={`tab-btn ${activeIndex === index ? 'active' : ''}`}
                    onClick={() => setActiveIndex(index)}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          </div>


          <div className="industry-card-right">
            <img src={industryImage} alt="Industry" className="card-img-default" />
            <img src={industryBlack} alt="Industry Black and White" className="card-img-hover" />

            <div className="jcb-icon">
              <img src={jcbIcon} alt="JCB Icon" />
            </div>


            <button className="capabilities-btn">
              <span>SEE OUR CAPABILITIES</span>
              <div className="white-arrow">
                <img src={arrowIcon} alt="arrow" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
