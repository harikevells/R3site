import React from 'react';
import './OurNitrile.css';
import barrierImage from '../../assets/ournitistlright.svg';
import foodImage from '../../assets/ournitistleft.svg';
import useScrollReveal from '../../hooks/useScrollReveal';

const OurNitrile = () => {
    const [ref1, isVisible1] = useScrollReveal({ threshold: 0.15 });
    const [ref2, isVisible2] = useScrollReveal({ threshold: 0.15 });

    return (
        <section className="our-nitrile-wrapper">
            <div className="our-nitrile-container">
                
                {/* Section 1 - Barrier Protection */}
                <div 
                    ref={ref1} 
                    className={`our-nitrile-section section-1 our-nitrile-reveal ${isVisible1 ? 'reveal-active' : ''}`}
                >
                    <div className="our-nitrile-content-col">
                        <div className="our-nitrile-label-group">
                            <span className="our-nitrile-red-label">BACTERIAL & VIRAL PROTECTION</span>
                            <span className="our-nitrile-red-line"></span>
                        </div>
                        
                        <h2 className="our-nitrile-main-heading">
                            Our nitrile examination gloves are manufactured to meet stringent international standards for barrier protection:
                        </h2>
                        
                        <ul className="our-nitrile-bullet-list">
                            <li>Effective against bacteria, fungi, and viruses</li>
                            <li>Tested for ASTM D6319 / EN 455 / ISO 11193 requirements</li>
                            <li>Low AQL (Acceptable Quality Level) for pinholes, ensuring high barrier integrity</li>
                            <li>Suitable for handling bloodborne pathogens, bodily fluids, and infectious materials</li>
                        </ul>
                        
                        <p className="our-nitrile-subheading-bold">
                            This level of protection makes nitrile gloves the trusted choice in:
                        </p>
                        
                        <ul className="our-nitrile-bullet-list spacing-top">
                            <li>Hospitals and clinics</li>
                            <li>Diagnostic laboratories</li>
                            <li>Dental and surgical environments</li>
                            <li>Pharmaceutical and biotech facilities</li>
                        </ul>
                    </div>
                    
                    <div className="our-nitrile-image-col">
                        <div className="our-nitrile-image-container">
                            <img className='sing' src={barrierImage} alt="Nitrile Barrier Protection " />
                        </div>
                    </div>
                </div>

                {/* Section 2 - Food Handling */}
                <div 
                    ref={ref2} 
                    className={`our-nitrile-section section-2 our-nitrile-reveal ${isVisible2 ? 'reveal-active' : ''}`}
                >
                    <div className="our-nitrile-image-col">
                        <div className="our-nitrile-image-container">
                            <img src={foodImage} alt="Nitrile Food Handling" />
                        </div>
                    </div>

                    <div className="our-nitrile-content-col align-right">
                        <div className="our-nitrile-label-group label-right">
                            <span className="our-nitrile-red-line line-before"></span>
                            <span className="our-nitrile-red-label">BACTERIAL & VIRAL PROTECTION</span>
                        </div>
                        
                        <h2 className="our-nitrile-main-heading mands">
                            Safe for Food Handling & Processing
                        </h2>
                        
                        <p className="our-nitrile-subheading-red mands">Hygiene You Can Trust</p>
                        
                        <p className="our-nitrile-subheading-bold thin-margin mands">
                            Nitrile gloves are widely accepted in the global food industry because they:
                        </p>
                        
                        <ul className="our-nitrile-bullet-list mands">
                            <li>Are non-reactive and safe for direct food contact</li>
                            <li>Resist oils and fats commonly found in food processing</li>
                            <li>Maintain integrity during long shifts</li>
                            <li>Prevent cross-contamination in high-hygiene zones</li>
                        </ul>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default OurNitrile;
