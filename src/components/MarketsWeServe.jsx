import React from 'react';
import './Market.css';
import useScrollReveal from '../hooks/useScrollReveal';

const MarketsWeServe = () => {
  const [ref, isVisible] = useScrollReveal();
  const row1 = [
    { name: 'ASIA', bg: '#061E4C' },
    { name: 'MIDDLE EAST', bg: '#E31E24' },
    { name: 'EUROPE', bg: '#061E4C' }
  ];
  
  const row2 = [
    { name: 'AFRICA', bg: '#E31E24' },
    { name: 'AMERICA', bg: '#061E4C' }
  ];

  return (
    <section ref={ref} className={`markets-section ${isVisible ? 'in-view' : ''}`}>
      {/* Blue Left Border wrapper */}
      <div className="markets-border-wrapper">
        <div className="markets-container">
          {/* Text Content */}
          <div className="markets-text-content">
            <div className="markets-subheading">MARKETS WE SERVE</div>
            <h2 className="markets-main-heading">
              R3 MED PRODUCTS AND SERVICES ACROSS <br />
              MULTIPLE REGIONS:
            </h2>
          </div>

          {/* Pill Buttons Rows */}
          <div className="markets-button-section">
            <div className="markets-buttons-row">
              {row1.map((btn, index) => (
                <div key={index} className="pill-button" style={{ backgroundColor: btn.bg }}>
                  {btn.name}
                </div>
              ))}
            </div>
            <div className="markets-buttons-row">
              {row2.map((btn, index) => (
                <div key={index} className="pill-button" style={{ backgroundColor: btn.bg }}>
                  {btn.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketsWeServe;
