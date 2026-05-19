import React from 'react';
import './ContactPage.css';
import useScrollReveal from '../../hooks/useScrollReveal';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaYoutube, FaWhatsapp, FaLinkedinIn } from 'react-icons/fa';
import commImg from '../../assets/contactus2.png';
import mapImg from '../../assets/gloabalearth.png';

const ContactPage = () => {
    const [headerRef, headerVisible] = useScrollReveal();

    return (
        <div className="ct-main-container">
            {/* SVG Clip Path for Curved Banner */}
            <svg width="0" height="0" style={{ position: 'absolute' }}>
                <defs>
                    <clipPath id="banner-clip" clipPathUnits="objectBoundingBox">
                        <path d="M 0 0 L 1 0 L 1 0.85 Q 0.5 0.7 0 0.85 Z" />
                    </clipPath>
                </defs>
            </svg>

            {/* Top Banner Section with Background Image */}
            <div className="ct-top-banner" style={{ backgroundImage: `url(${commImg})` }}>
                <div className="ct-banner-overlay"></div>
                <div className="ct-banner-content">
                    <div ref={headerRef} className={`ct-header-flex ${headerVisible ? 'in-view' : ''}`}>
                        <div className="ct-header-left">
                            {/* <span className="ct-get-started">Get Started</span> */}
                            <h1 className="ct-main-heading">
                                Get in touch with us. <br />
                                We are here to assist you. Together, <br />
                                We will make the world safer
                            </h1>
                        </div>

                        {/* Circular Social Buttons on the Right Side (Absolutely Positioned) */}
                        <div className="ct-social-sidebar">
                            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="ct-social-btn ct-youtube" aria-label="YouTube">
                                <FaYoutube />
                            </a>
                            <a href="https://wa.me/6562977677" target="_blank" rel="noreferrer" className="ct-social-btn ct-whatsapp" aria-label="WhatsApp">
                                <FaWhatsapp />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="ct-social-btn ct-linkedin" aria-label="LinkedIn">
                                <FaLinkedinIn />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Content Area */}
            <div className="ct-bottom-section">
                <div className="ct-container">

                    {/* Floating Info Card */}
                    <div className="ct-card-wrapper">
                        <div className="ct-info-card">
                            {/* Watermark World Map Background */}
                            <div className="ct-card-watermark" style={{ backgroundImage: `url(${mapImg})` }}></div>

                            <div className="ct-card-body">
                                <h2 className="ct-card-title">
                                    <span className="ct-title-blue">R3</span> <span className="ct-title-red">Global Pte.Ltd</span>
                                </h2>

                                <div className="ct-pin-icon-wrapper">
                                    <FaMapMarkerAlt className="ct-pin-icon" />
                                </div>

                                <p className="ct-address-text">
                                    400 Orchard Road , #05-24 Orchard Towers,
                                    <br />
                                    Singapore -238875
                                </p>

                                <div className="ct-card-divider"></div>

                                <div className="ct-contact-details-row">
                                    <div className="ct-detail-col">
                                        <FaPhoneAlt className="ct-detail-icon" />
                                        <a href="tel:+6562977677" className="ct-detail-link">+65-62977677</a>
                                    </div>
                                    <div className="ct-vertical-line"></div>
                                    <div className="ct-detail-col">
                                        <FaEnvelope className="ct-detail-icon" />
                                        <a href="mailto:r3globalsg@gmail.com" className="ct-detail-link">care@r3global.com.sg</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ContactPage;
