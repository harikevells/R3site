import React from 'react';
import './LatexPart.css';
import useScrollReveal from '../../../hooks/useScrollReveal';
import handshadow from '../../../assets/handshadow.png';

const SectionCard = ({ badge, title, subheading, introText, bullets, paragraph, isVisible, refElement, delayClass }) => {
    return (
        <div ref={refElement} className={`latex-card-container ${isVisible ? 'lp-in-view' : 'lp-reveal'} ${delayClass}`}>
            {/* Header Part - Pink Background */}
            <div className="latex-card-header-wrapper">
                <div className="latex-card-header">
                    <span className="latex-card-badge">{badge}</span>
                    <h2 className="latex-card-title">{title}</h2>
                </div>
            </div>
            
            {/* Content Part - White Background */}
            <div className="latex-card-content-wrapper">
                <div className="latex-card-content-box">
                    {subheading && <h3 className="latex-card-subheading">{subheading}</h3>}

                    {introText && <p className="latex-card-paragraph" style={{ marginBottom: '15px', fontWeight: '800' }}>{introText}</p>}
                    
                    {bullets && bullets.length > 0 && (
                        <ul className="latex-card-list">
                            {bullets.map((bullet, idx) => (
                                <li key={idx} className="latex-card-list-item">{bullet}</li>
                            ))}
                        </ul>
                    )}
                    
                    {paragraph && <p className="latex-card-paragraph">{paragraph}</p>}
                </div>
            </div>
        </div>
    );
};

const DarkBanner = ({ heading, items, isVisible, refElement }) => {
    return (
        <div ref={refElement} className={`latex-dark-banner ${isVisible ? 'lp-in-view' : 'lp-reveal'}`}>
            <img src={handshadow} alt="Background Highlight" className="latex-banner-bg-img" />
            <div className="latex-banner-content">
                <h2 className="latex-banner-heading">{heading}</h2>
                {items && (
                    <div className="latex-banner-list">
                        {items.map((item, idx) => (
                            <div key={idx} className="latex-banner-item">{item}</div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

const LatexPart = () => {
    const [cardRef1, isVisible1] = useScrollReveal();
    const [cardRef2, isVisible2] = useScrollReveal();
    const [cardRef3, isVisible3] = useScrollReveal();
    const [bannerRef, isVisibleBanner] = useScrollReveal();

    const sections = [
        {
            badge: "Latex",
            title: "Protection Against Bacteria & Viruses",
            subheading: "Barrier Performance",
            bullets: [
                "Effective against bacteria, fungi, and many viruses",
                "Supports infection-control protocols in hospitals and laboratories",
                "Meets international medical-glove standards (ASTM, EN, ISO) when certified",
                "Low AQL levels ensure minimal pinholes and high barrier integrity"
            ],
            paragraph: "Latex's natural elasticity helps maintain a tight seal around the hand, reducing the risk of fluid penetration during clinical procedures.",
            ref: cardRef1,
            visible: isVisible1,
            delay: "lp-delay-1"
        },
        {
            badge: "Latex",
            title: "Use in the Food Industry",
            introText: "Latex gloves are also used in food-handling environments, provided they are:",
            bullets: [
                "Food-safe certified",
                "Powder-free to avoid contamination",
                "Used in compliance with hygiene protocol"
            ],
            paragraph: "They offer excellent grip and comfort for long shifts in food processing, catering, and packaging.",
            ref: cardRef2,
            visible: isVisible2,
            delay: "lp-delay-2"
        },
        {
            badge: "Latex",
            title: "Latex Allergy Consideration",
            bullets: [
                "Some individuals may experience allergic reactions to natural rubber latex proteins. For such users, nitrile gloves are recommended as a safe alternative."
            ],
            ref: cardRef3,
            visible: isVisible3,
            delay: "lp-delay-1"
        }
    ];

    const bannerData = {
        heading: "Why Latex Gloves Remain a Preferred Choice",
        items: [
            "Natural comfort and flexibility",
            "High tactile sensitivity",
            "Strong barrier protection",
            "Reliable performance in medical and surgical environments"
        ]
    };

    return (
        <section className="latex-part-container">
            {sections.map((sec, index) => (
                <SectionCard
                    key={index}
                    badge={sec.badge}
                    title={sec.title}
                    subheading={sec.subheading}
                    introText={sec.introText}
                    bullets={sec.bullets}
                    paragraph={sec.paragraph}
                    isVisible={sec.visible}
                    refElement={sec.ref}
                    delayClass={sec.delay}
                />
            ))}
            
            <DarkBanner
                heading={bannerData.heading}
                items={bannerData.items}
                isVisible={isVisibleBanner}
                refElement={bannerRef}
            />
        </section>
    );
};

export default LatexPart;
