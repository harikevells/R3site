import React from 'react';
import './HeroSection.css';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';
import airbnb from '../assets/Airbnb.png';
import tiket from '../assets/tiket.com.png';
import traveloka from '../assets/Traveloka.png';
import tripadvisor from '../assets/Tripadvisor.png';
import booking from '../assets/Booking.png';

import useScrollReveal from '../hooks/useScrollReveal';

const HeroSection = () => {
  const [ref, isVisible] = useScrollReveal();
  const logos = [
    { name: 'Airbnb', img: airbnb },
    { name: 'tiket.com', img: tiket },
    { name: 'Traveloka', img: traveloka },
    { name: 'Tripadvisor', img: tripadvisor },
    { name: 'Booking', img: booking },
  ];

  return (
    <section ref={ref} className={`hero-section ${isVisible ? 'in-view' : ''}`}>
      <div className="hero-container-fluid">
        <div className="hero-left">
          <div className="gloves-badge">
            <span className="badge-text">GLOVES</span>
            <div className="badge-icon">
              <span className="icon-inner"></span>
            </div>
          </div>

          <div className="hero-title-wrapper">
            <h1 className="hero-title first-line">
              <span>R3 GLOBAL</span>
              <span className="red-slash">/</span>
              <div className="nitrile-latex-box">
                <span className="label-text">NITRILE</span>
                <span className="label-text">LATEX</span>
              </div>
            </h1>
            <h1 className="hero-title second-line fof12">Serving the World</h1>
          </div>

          <button className="btn-get-started">Get Started</button>
        </div>

        <div className="hero-right">
          <div className="collage-wrapper">
            {/* Decorative Elements */}
            <div className="decorative-line line-1"></div>
            <div className="decorative-line line-2"></div>
            <div className="arrow red-arrow-1">➤</div>
            <div className="arrow yellow-arrow-1">➤</div>
            <div className="arrow red-arrow-2">➤</div>
            <div className="blue-dot"></div>

            <div className="image-collage">
              <div className="collage-column">
                <div className="collage-img-box small-box">
                  <img src={image1} alt="Gloves Process" />
                </div>
                <div className="collage-img-box large-box">
                  <img src={image3} alt="Gloves Manufacturing" />
                </div>
              </div>
              <div className="collage-column shift-down">
                <div className="collage-img-box large-box">
                  <img src={image2} alt="Glove Inspection" />
                </div>
                <div className="collage-img-box small-box border-glow">
                  <img src={image4} alt="Glove Usage" />
                </div>
              </div>
            </div>

            {/* Review Cards */}
            <div className="review-card review-1">
              <div className="user-avatar">
                <img src="https://i.pravatar.cc/150?u=amula" alt="Amula" />
              </div>
              <div className="review-info">
                <p className="user-name">Amula</p>
                <div className="stars">★★★☆☆</div>
              </div>
            </div>

            <div className="review-card review-2">
              <div className="user-avatar">
                <img src="https://i.pravatar.cc/150?u=dikta" alt="Dikta Anmol" />
              </div>
              <div className="review-info">
                <p className="user-name">Dikta Anmol</p>
                <div className="stars">★★★★☆</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="logo-strip">
        <div className="logo-strip-inner">
          {logos.concat(logos).concat(logos).map((logo, index) => (
            <div key={index} className="logo-item">
              <img src={logo.img} alt={logo.name} className="strip-logo-img" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
