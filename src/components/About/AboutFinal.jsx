import React from 'react';
import './AboutFinal.css';
import centerImage from '../../assets/AboutFinalcenterimage.png';
import useScrollReveal from '../../hooks/useScrollReveal';

const AboutFinal = () => {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.2 });

  return (
    <section ref={sectionRef} className={`about-final ${isVisible ? 'is-visible' : ''}`}>
      <div className="about-final__container">
        
        {/* Left Content - Vision */}
        <div className="about-final__content vision">
          <h2 className="about-final__title">Our vision</h2>
          <p className="about-final__description">
            R3 Global nitrile examination gloves are engineered to deliver superior barrier protection, 
            durability, and comfort for professionals working in healthcare, laboratories, and 
            hygiene-critical industries.
          </p>
          <p className="about-final__description">
            Designed using advanced nitrile formulation, our gloves provide strong resistance against 
            chemicals, punctures, and contaminants while maintaining excellent tactile sensitivity.
          </p>
        </div>

        {/* Center Section - Target & Arrows */}
        <div className="about-final__center">
          <div className="about-final__target-wrapper">
            <img src={centerImage} alt="Target" className="about-final__target-img" />
            
            {/* Arrows */}
            <div className="about-final__arrows">
              {/* Left Arrow */}
              <svg className="arrow arrow--left" viewBox="0 0 60 200">
                <defs>
                  <linearGradient id="sideArrowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#A7C7E7" />
                    <stop offset="100%" stopColor="transparent" />
                  </linearGradient>
                </defs>
                <path d="M15 200 L45 200 L45 50 L60 50 L30 0 L0 50 L15 50 Z" fill="url(#sideArrowGradient)" />
              </svg>
              
              {/* Center Main Arrow */}
              <svg className="arrow arrow--center" viewBox="0 0 80 280">
                <defs>
                  <linearGradient id="mainArrowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#0047AB" />
                    <stop offset="100%" stopColor="transparent" />
                  </linearGradient>
                </defs>
                <path d="M20 280 L60 280 L60 70 L80 70 L40 0 L0 70 L20 70 Z" fill="url(#mainArrowGradient)" />
              </svg>
              
              {/* Right Arrow */}
              <svg className="arrow arrow--right" viewBox="0 0 60 200">
                <path d="M15 200 L45 200 L45 50 L60 50 L30 0 L0 50 L15 50 Z" fill="url(#sideArrowGradient)" />
              </svg>
            </div>
          </div>

          {/* Decorative Paths with 'V' Icons */}
          <div className="about-final__decor">
            {/* Path 1 - Vision to Target */}
            <svg className="decor-path decor-path--vision" viewBox="0 0 300 200">
              <path d="M10 50 Q 50 150, 150 100 T 290 80" fill="none" stroke="#FF3131" strokeWidth="2" strokeDasharray="6,6" />
              <g className="v-icon v-icon--1">
                <circle cx="80" cy="115" r="15" fill="#FF3131" />
                <path d="M72 110 L80 120 L88 110" stroke="white" strokeWidth="3" fill="none" />
              </g>
            </svg>

            {/* Path 2 - Target to Mission */}
            <svg className="decor-path decor-path--mission" viewBox="0 0 300 200">
              <path d="M10 120 Q 150 50, 200 150 T 290 100" fill="none" stroke="#FF3131" strokeWidth="2" strokeDasharray="6,6" />
              <g className="v-icon v-icon--2">
                <circle cx="220" cy="125" r="15" fill="#FF3131" />
                <path d="M212 120 L220 130 L228 120" stroke="white" strokeWidth="3" fill="none" />
              </g>
            </svg>
          </div>

        </div>

        {/* Right Content - Mission */}
        <div className="about-final__content mission">
          <h2 className="about-final__title">Our Mision</h2>
          <p className="about-final__description">
            Latex gloves, made from natural rubber, are valued for their excellent elasticity, 
            comfort, and high tactile sensitivity. They provide a close fit that allows users 
            to perform delicate tasks with precision.
          </p>
          <p className="about-final__description">
            Latex gloves are commonly used in medical procedures, dental practices, and other 
            environments where comfort and flexibility are important.
          </p>
        </div>

      </div>
    </section>
  );
};

export default AboutFinal;
