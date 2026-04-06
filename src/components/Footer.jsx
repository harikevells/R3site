import React from 'react';
import './Footer.css';
import logo from '../assets/logo.svg';
import {
  FaLinkedinIn,
  FaFacebookMessenger,
  FaTwitter,
  FaInfinity,
  FaYoutube,
  FaWhatsapp,
  FaGlobe,
  FaPhoneAlt
} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';

const Footer = () => {
  const [ref, isVisible] = useScrollReveal();
  return (
    <footer ref={ref} className={`footer ${isVisible ? 'in-view' : ''}`}>
      <div className="footer-container">

        {/* Top Header Section */}
        <div className="footer-header">
          <div className="footer-logo-box">
            <img src={logo} alt="R3 Global Logo" className="footer-logo" />
          </div>
          <div className="footer-contact-box">
            <h3>Contact</h3>
            <div className="contact-details">
              <div className="contact-item">
                <FaPhoneAlt className="contact-icon" />
                <span>+123 456 7890</span>
              </div>
              <div className="contact-item">
                <MdEmail className="contact-icon" />
                <span>care@r3global.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social and Brand Section */}
        <div className="footer-social-row">
          <div className="footer-divider"></div>
          <div className="social-icons">
            <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="#" aria-label="Messenger"><FaFacebookMessenger /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="Infinity"><FaInfinity /></a>
            <a href="#" aria-label="YouTube"><FaYoutube /></a>
            <a href="#" aria-label="WhatsApp"><FaWhatsapp /></a>
            <a href="#" aria-label="Globe"><FaGlobe /></a>
          </div>
          <div className="footer-divider"></div>
        </div>

        <div className="footer-brand-section">
          <h2 className="brand-name">R3 Global Pte.Ltd</h2>
          <p className="copyright">Copyright @R3 Global. All Rights Reserved.</p>
        </div>

        {/* Navigation Section */}
        <div className="footer-nav-grid">
          <div className="nav-column">
            <h3><Link to="/about">About Us</Link></h3>
          </div>
          <div className="nav-column">
            <h3><Link to="/product/nitrile">Products</Link></h3>
          </div>
          <div className="nav-column">
            <h3><Link to="/global">Global</Link></h3>
          </div>
          <div className="nav-column">
            <h3><Link to="/certifications">Certification</Link></h3>
          </div>
          <div className="nav-column">
            <h3><Link to="/contact">Contact us</Link></h3>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
