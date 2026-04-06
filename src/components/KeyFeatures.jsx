import React from 'react';
import './KeyFeatures.css';
import boxImage from '../assets/boxgit.png';
import gloveImage from '../assets/nitrile_gloves.png';
import useScrollReveal from '../hooks/useScrollReveal';

const KeyFeatures = () => {
  const [ref, isVisible] = useScrollReveal();
  const features = [
    {
      id: 1,
      title: 'Medical-Grade Protection',
      description: 'Provides reliable protection against contaminants, bacteria, and hazardous materials.',
      iconColor: '#1a1a2e',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'High Puncture Resistance',
      description: 'Stronger than traditional latex gloves, offering enhanced durability.',
      iconColor: '#E31E24',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'Textured Fingertips',
      description: 'Improves grip and control in both wet and dry environments.',
      iconColor: '#E31E24',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          <path d="M5 18v-2a3 3 0 0 1 6 0v2" />
          <path d="M13 18v-2a3 3 0 0 1 6 0v2" />
          <path d="M21 13V9a5 5 0 0 0-10 0v1" />
        </svg>
      )
    },
    {
      id: 4,
      title: 'Latex-Free & Powder-Free',
      description: 'Reduces the risk of latex allergies and skin irritation.',
      iconColor: '#E31E24',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="15" y1="9" x2="9" y2="15" />
          <line x1="9" y1="9" x2="15" y2="15" />
        </svg>
      )
    },
    {
      id: 5,
      title: 'Soft & Comfortable Fit',
      description: 'Flexible nitrile material ensures comfort during prolonged use.',
      iconColor: '#7C3AED',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.42 4.58a5 5 0 0 0-7.07 0l-1.35 1.35-1.35-1.35a5 5 0 0 0-7.07 7.07l1.35 1.35 7.07 7.07 7.07-7.07 1.35-1.35a5 5 0 0 0 0-7.07z" />
        </svg>
      )
    },
    {
      id: 6,
      title: 'Ambidextrous Design',
      description: 'Convenient design suitable for both left and right hands.',
      iconColor: '#7C3AED',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
          <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
          <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
          <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
        </svg>
      )
    }
  ];

  return (
    <section ref={ref} className={`key-features-section ${isVisible ? 'in-view' : ''}`}>
      <div className="features-container">
        <h2 className="section-title ggg">KEY FEATURES</h2>

        <div className="features-main-grid">
          {/* Left Column: 4 Features */}
          <div className="features-column">
            {features.slice(0, 4).map((f, i) => (
              <div key={f.id} className="feature-card">
                <div className="feature-icon-box" style={{ backgroundColor: f.iconColor }}>
                  {f.icon}
                </div>
                <div>
                  <h3 className="feature-card-title">{f.title}</h3>
                  <p className="feature-card-description">{f.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Product Image Box */}
          <div className="image-column">
            {/* <div className="glow-circle"></div> */}
            <div className="product-image-container">
              <img
                src={boxImage}
                alt="Product Box"
                className="product-box-img"
              />

            </div>
          </div>
        </div>

        {/* Bottom Row: 2 Features */}
        <div className="bottom-features-row">
          {features.slice(4).map((f, i) => (
            <div key={f.id} className="feature-card">
              <div className="feature-icon-box" style={{ backgroundColor: f.iconColor }}>
                {f.icon}
              </div>
              <div>
                <h3 className="feature-card-title">{f.title}</h3>
                <p className="feature-card-description">{f.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
