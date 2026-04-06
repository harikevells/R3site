import React from 'react';
import glovesImage from '../assets/commonapplication.png';
import './Common.css';
import useScrollReveal from '../hooks/useScrollReveal';

const CommonApplications = () => {
  const [ref, isVisible] = useScrollReveal();
  const applications = [
    'HEALTHCARE',
    'DENTAL CARE',
    'LABORATORIES',
    'INDUSTRIAL & MANUFACTURING',
    'FOOD & HYGIENE'
  ];

  return (
    <section ref={ref} className={`common-apps-section ${isVisible ? 'in-view' : ''}`}>
      <div className="common-apps-grid">
        {/* Left Column: Image + Pattern */}
        <div className="image-col">
          <div className="hex-pattern"></div>
          <img 
            src={glovesImage} 
            alt="Gloved Hands" 
            className="common-apps-img" 
          />
        </div>

        {/* Right Column: Heading + List */}
        <div className="text-col">
          <h2 className="common-apps-heading">
            COMMON<br />APPLICATIONS
          </h2>
          <ul className="apps-list">
            {applications.map((item, index) => (
              <li key={index} className="apps-list-item">
                <span className="apps-bullet">■</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CommonApplications;
