import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';
import useScrollReveal from '../hooks/useScrollReveal';
import earthImg from '../assets/earth.svg';

const HeroSection = () => {
  const [ref, isVisible] = useScrollReveal();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 20; // Max 10px shift
      const y = (clientY / innerHeight - 0.5) * 20;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // 3D Tilt calculation
  const tiltStyle = {
    transform: `perspective(1000px) rotateX(${-mousePos.y * 0.5}deg) rotateY(${mousePos.x * 0.5}deg) translateZ(0)`
  };

  const bgStyle = {
    transform: `scale(1.1) translate(${mousePos.x * -0.2}px, ${mousePos.y * -0.2}px)`
  };

  return (
    <section ref={ref} className={`hero-section ${isVisible ? 'in-view' : ''}`}>
      <div className="hero-background-wrapper" style={bgStyle}>
        <div className="hero-background-image"></div>
        <div className="hero-background-overlay"></div>
      </div>
      
      <div className="hero-container" style={tiltStyle}>
        <div className="hero-content">
          <div className="hero-badge-reveal">
            <span className="hero-tagline glass-effect">PROTECTION YOU CAN TRUST</span>
          </div>
          
          <h1 className="hero-main-title 3d-text">
            <span className="title-word">R3 </span>
            <span className="title-word highlighted">
              Gl<span className="animated-globe-o">
                <img src={earthImg} alt="Earth" className="globe-image-spin" />
              </span>bal
            </span>
          </h1>

          <div className="hero-divider"></div>

          <p className="hero-description">
            R3 Med is a healthcare-focused organization that provides advanced medical, regenerative, and 
            wellness services aimed at improving overall health, aesthetics, and patient outcomes.
          </p>

          <div className="hero-actions">
            <Link to="/about" className="hero-btn btn-filled">
              Get Started
              <svg className="btn-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
            <Link to="/product/nitrile" className="hero-btn btn-outline">
              Our Products
            </Link>
          </div>
        </div>
      </div>


      <div className="hero-scroll-down">
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
        <span className="scroll-text">Explore More</span>
      </div>
    </section>
  );
};

export default HeroSection;
