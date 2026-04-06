import React from 'react';
import './VideoSection.css';
import medicalBg from '../assets/medical_bg.png';
import nitrileGloves from '../assets/nitrile_gloves.png';
import useScrollReveal from '../hooks/useScrollReveal';

const VideoSection = () => {
  const [ref, isVisible] = useScrollReveal();
  return (
    <section 
      ref={ref}
      className={`video-section ${isVisible ? 'in-view' : ''}`} 
      style={{ backgroundImage: `url(${medicalBg})` }}
    >
      <div className="section-gradient-overlay"></div>
      
      <div className="container video-content">
        <div className="product-card-wrapper">
          <div className="product-card">
            <div className="red-accent-line"></div>
            <div className="card-image-container">
              <img src={nitrileGloves} alt="Nitrile Gloves" className="product-image" />
              <button className="play-button-overlay" aria-label="Play video">
                <div className="play-circle">
                  <span className="play-icon-triangle">▶</span>
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="video-headline">
          <h1>HIGH-QUALITY NITRILE<br />EXAM GLOVES</h1>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
