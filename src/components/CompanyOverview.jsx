import React from 'react';
import './CompanyOverview.css';
import diamond from '../assets/Icon.png';
import useScrollReveal from '../hooks/useScrollReveal';

const CompanyOverview = () => {
  const [ref, isVisible] = useScrollReveal();
  
  // Local SVG Diamond Icon to prevent missing asset errors
  const DiamondIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="diamond-icon-svg">
      <path d="M12 2L2 12l10 10 10-10L12 2z" />
    </svg>
  );

  return (
    <section ref={ref} className={`company-overview section-padding ${isVisible ? 'in-view' : ''}`}>
      <div className="container center-content">
        <div className="overview-header">
          <img src={diamond} alt="Diamond" className="diamond-icon" />
          <h2>Company Overview</h2>
        </div>
        
        <div className="overview-text">
          <p>
            R3 Med delivers high-quality nitrile examination gloves engineered for healthcare, laboratory, industrial, and hygiene-critical environments. 
            Combining Singapore-based reliability with global manufacturing capabilities, we provide consistent protection trusted by healthcare 
            professionals and hygiene-focused industries worldwide.
          </p>
          <p>
            Our gloves are designed to offer the perfect balance of safety, comfort, and durability, ensuring dependable protection during demanding 
            procedures and everyday hygiene tasks.
          </p>
        </div>

        <button className="btn-read-more">Read More</button>
      </div>
    </section>
  );
};

export default CompanyOverview;
