import React from 'react';
import './CompanyOverview.css';
import diamond from '../assets/Icon.png';
import useScrollReveal from '../hooks/useScrollReveal';

const CompanyOverview = () => {
  const [ref, isVisible] = useScrollReveal();
  return (
    <section ref={ref} className={`company-overview section-padding ${isVisible ? 'in-view' : ''}`}>
      <div className="container center-content">
        <div className="overview-header">
          <img src={diamond} alt="Diamond" className="diamond-icon" />
          <h2>Company Overview</h2>
        </div>
        
        <div className="overview-text">
          <p>
            R3 GLOBAL PTE LTD is a leading Singapore-based manufacturer and distributor of high-quality nitrile and latex examination gloves. We are dedicated to providing superior protective solutions for healthcare, industrial, and laboratory environments worldwide. Our commitment to excellence is reflected in every product we manufacture, ensuring the highest level of safety and reliability for our partners.
          </p>
          <p>
            With state-of-the-art production facilities and a robust supply chain, we support global healthcare systems and industrial sectors with consistent, high-standard medical consumables. Our journey began with a vision to redefine glove protection, and today, R3 Global stands as a trusted name in the medical supply industry, known for our innovation and uncompromising quality standards.
          </p>
        </div>

        <button className="btn-read-more">READ MORE</button>
      </div>
    </section>
  );
};

export default CompanyOverview;
