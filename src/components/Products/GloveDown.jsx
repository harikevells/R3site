import React, { useState, useEffect } from 'react';
import logo from '../../assets/medlogo.png';
import gloveBg from '../../assets/NitriseGlove1.png'; // Hand with glove
import handShadow from '../../assets/handshadow.png'; // Shadow
// Assets for cards
import img1 from '../../assets/image1.png';
import img2 from '../../assets/image2.png';
import img3 from '../../assets/image3.png';
import './GloveDown.css';

const NitrileGlovesSection = () => {
    const [isAnimated, setIsAnimated] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsAnimated(true), 100);
        return () => clearTimeout(timer);
    }, []);

    const cards = [
        {
            title: "Healthcare & Clinical",
            subtitle: "Hospitals, clinics, and emergency care. Dental and surgical procedures. Diagnostic and research laboratories.",
            image: img1
        },
        {
            title: "Food & Hygiene",
            subtitle: "Food processing plants. Catering and hospitality. Packaging and quality control.",
            image: img2
        },
        {
            title: "Industrial & Technical",
            subtitle: "Manufacturing and assembly. Automotive and mechanical work. Metalworking and cleaning services.",
            image: img3
        }
    ];

    return (
        <div className="nitrile-gloves-wrapper">
            {/* Section 1 */}
            <section
                className="section-one"
            >
                <div className="bg-overlay"></div>

                <div className={`section-header ${isAnimated ? 'animated' : ''}`}>
                    <p className="header-subtitle">Where <br />Nitrile Gloves Are Used</p>
                    {/* <h2 className="section-title"></h2> */}
                </div>

                <div className="custom-card-container">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className={`custom-card ${isAnimated ? 'animated' : ''}`}
                            style={{ animationDelay: `${index * 200}ms` }}
                        >
                            {/* <div className="card-wing-bg"></div> */}
                            <div className="card-image-badge">
                                <img src={card.image} alt={card.title} />
                            </div>
                            <div className="card-inner-white">
                                <h3 className="card-title-redesign">{card.title}</h3>
                                <p className="card-subtitle-redesign">{card.subtitle}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>


            {/* Section 2 */}
            <section className="section-two" style={{ backgroundImage: `url(${handShadow})` }}>
                <div className="section-two-overlay"> </div>
                <div className="advantage-content">
                    <div className="div"><img src={logo} alt="" /></div>
                    <h2 className="advantage-title">The R3 Med Advantage</h2>
                    <p className="advantage-description">
                        Our nitrile gloves are designed to deliver premium protection, clinical reliability, and comfort that professionals trust.
                        Whether used in a medical facility, a laboratory, or a food-processing environment, they provide consistent performance backed by international standards.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default NitrileGlovesSection;
