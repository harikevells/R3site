import React from 'react';
import './CertificationsPage.css';
import supplybg from '../../assets/supplybg.png';
import useScrollReveal from '../../hooks/useScrollReveal';
import useCountUp from '../../hooks/useCountUp';

const QualityStat = ({ target, label, isVisible }) => {
    const count = useCountUp(target, 2000, isVisible);
    return (
        <div className="cp-stat-item">
            <span className="cp-stat-number">{count}</span>
            <span className="cp-stat-label">{label}</span>
        </div>
    );
};

const CertificationsPage = () => {
    const [heroRef, heroVisible] = useScrollReveal();
    const [certRef, certVisible] = useScrollReveal();
    const [commitmentRef, commitmentVisible] = useScrollReveal();
    
    return (
        <div className="cp-main-container">
            {/* Hero Section */}
            <section ref={heroRef} className={`cp-hero-section ${heroVisible ? 'in-view' : ''}`} style={{ backgroundImage: `url(${supplybg})` }}>
                <div className="cp-hero__overlay">
                    <h1 className="cp-hero__title">Certifications &<br />Quality Standards</h1>
                </div>
            </section>

            {/* Certifications & Quality Standards Section */}
            <section ref={certRef} className={`cp-cert-section ${certVisible ? 'in-view' : ''}`}>
                <div className="cp-container">
                    <h2 className="cp-section-title">Committed to Safety. Driven by Compliance.</h2>
                    <p className="cp-section-intro">
                        At R3 Med, quality is not an afterthought — it is the foundation of every product we deliver. 
                        Our R3 Med gloves are manufactured in ISO-certified facilities and undergo rigorous testing 
                        to meet international medical and industrial standards.
                    </p>
                    
                    <div className="cp-cert-grid">
                        <div className="cp-cert-column">
                            <h3 className="cp-cert__sub-title cp-cert__sub-title--teal">Quality & Compliance</h3>
                            <ul className="cp-cert__list">
                                <li><span>»</span> ISO Certified – Compliant with ISO 13485 & ISO 9001 standards</li>
                                <li><span>»</span> Medical-Grade Production – Meets global medical requirements</li>
                                <li><span>»</span> Strict Quality Control – Monitored from raw materials to packaging</li>
                                <li><span>»</span> Global Compliance – Meets ASTM, EN 455 & EN 374 standards</li>
                            </ul>
                        </div>
                        
                        <div className="cp-cert__divider"></div>
                        
                        <div className="cp-cert-column down0">
                            <h3 className="cp-cert__sub-title cp-cert__sub-title--gold fingers">Testing Parameters</h3>
                            <ul className="cp-cert__list">
                                <li><span>»</span> Tensile Strength – Durable, flexible, and tear-resistant</li>
                                <li><span>»</span> AQL Testing – Ensures minimal pinholes and strong protection</li>
                                <li><span>»</span> Chemical & Viral Tests – Validates safety against contaminants</li>
                                <li><span>»</span> Size & Thickness Check – Consistent fit and sensitivity</li>
                                <li><span>»</span> Skin Safety – Safe for prolonged use</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Commitment Section */}
            <section ref={commitmentRef} className={`cp-commitment-section ${commitmentVisible ? 'in-view' : ''}`}>
                <div className="cp-commitment-box">
                    <div className="cp-container">
                        <h2 className="cp-commitment-title">Our Commitment</h2>
                        <p className="cp-commitment-text">
                            We work only with trusted, audited factories and maintain full oversight of production to ensure every R3 Med product reflects our promise of reliability, integrity, and global trust.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CertificationsPage;
