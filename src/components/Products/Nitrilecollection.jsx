import React from 'react';
import './Nitrilecollection.css';
import leftBg from '../../assets/leftNitists.svg';
import rightBg from '../../assets/rightNitists.svg';
import useScrollReveal from '../../hooks/useScrollReveal';

const NitrileFeature = ({ feature, index }) => {
    const [ref, isVisible] = useScrollReveal({ threshold: 0.2 });
    
    return (
        <div 
            ref={ref}
            className={`nitrile-feature-item ${feature.alignment} nitrile-reveal ${isVisible ? 'reveal-active' : ''}`}
            style={{ '--index': index }}
        >
            <div className="item-layout-row">
                <div className="nitrile-content-block">
                    <h3 className="nitrile-feature-title">{feature.title}</h3>
                    <div className="nitrile-feature-banner">
                        <img 
                            src={feature.bg} 
                            alt="" 
                            className="nitrile-banner-bg-img" 
                        />
                        <div className="nitrile-banner-content">
                            <span className="nitrile-number">{feature.number}</span>
                            <div className="nitrile-banner-text-content">
                                <p className="nitrile-description">{feature.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Nitrilecollection = () => {
    const features = [
        {
            number: '01',
            title: 'Latex-Free Safety',
            description: 'Nitrile gloves are latex-free, eliminating Type I allergy risks and making them ideal for clinical and food-safe environments.',
            alignment: 'left',
            bg: leftBg
        },
        {
            number: '02',
            title: 'High Puncture & Tear Resistance',
            description: 'Nitrile provides superior strength and puncture resistance, ensuring reliable performance for demanding tasks and long use.',
            alignment: 'right',
            bg: rightBg
        },
        {
            number: '03',
            title: 'Chemical & Solvent Resistance',
            description: 'Nitrile resists oils, solvents, and chemicals, making it ideal for labs, manufacturing, and cleaning.',
            alignment: 'left',
            bg: leftBg
        },
        {
            number: '04',
            title: 'Comfort for Long Wear',
            description: 'Nitrile gloves are soft, flexible, and ergonomic, reducing fatigue and improving precision.',
            alignment: 'right',
            bg: rightBg
        }
    ];

    return (
        <section className="nitrile-collection-wrapper" id="nitrile-infographic">
            <div className="nitrile-container">
                <div className="nitrile-header">
                    <p className="nitrile-eyebrow">Why Nitrile?</p>
                    <h2 className="nitrile-main-title">The Premium Standard in Protection</h2>
                </div>

                <div className="nitrile-features-list">
                    {features.map((feature, index) => (
                        <NitrileFeature key={index} feature={feature} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Nitrilecollection;
