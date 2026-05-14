import React from 'react';
import './Nitrilecollection.css';
import useScrollReveal from '../../hooks/useScrollReveal';

const HandIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.5 11c-.83 0-1.5.67-1.5 1.5V15l-3-1.5L10 11.5V5.5c0-.83-.67-1.5-1.5-1.5S7 4.67 7 5.5v10.74l-3.44-.72c-.41-.08-.83.07-1.1.39l-.65.66 4.97 4.97c.29.29.69.46 1.11.46h8.11c.78 0 1.45-.56 1.58-1.33l1.11-6.66c.14-.82-.43-1.57-1.25-1.57h-.44zM12 2C10.9 2 10 2.9 10 4v3.26c.32-.16.67-.26 1.05-.26.83 0 1.5.67 1.5 1.5v-3.5c0-.55.45-1 1-1s1 .45 1 1v4h1V4c0-1.1-.9-2-2-2z" />
    </svg>
);

const Nitrilecollection = () => {
    const [headerRef, headerVisible] = useScrollReveal({ threshold: 0.1 });
    const [infographicRef, infographicVisible] = useScrollReveal({ threshold: 0.1 });

    const features = [
        {
            id: 1,
            title: 'LATEX-FREE SAFETY',
            description: 'Nitrile gloves are latex-free, eliminating Type I allergy risks and making them ideal for clinical and food-safe environments.',
            position: 'top-right',
            color: '#FF1493' // Pink
        },
        {
            id: 2,
            title: 'COMFORT FOR LONG WEAR',
            description: 'Nitrile gloves are soft, flexible, and ergonomic, reducing fatigue and improving precision.',
            position: 'bottom-right',
            color: '#9D4DFF' // Purple
        },
        {
            id: 3,
            title: 'CHEMICAL & SOLVENT RESISTANCE',
            description: 'Nitrile resists oils, solvents, and chemicals, making it ideal for labs, manufacturing, and cleaning.',
            position: 'bottom-left',
            color: '#4D7CFF' // Blue
        },
        {
            id: 4,
            title: 'HIGH PUNCTURE & TEAR RESISTANCE',
            description: 'Nitrile provides superior strength and puncture resistance, ensuring reliable performance for demanding tasks and long use.',
            position: 'top-left',
            color: '#FF9D4D' // Orange
        }
    ];

    return (
        <section className="nitrile-collection-wrapper">
            <div className="nitrile-container">
                <div 
                    ref={headerRef} 
                    className={`nitrile-header nitrile-reveal ${headerVisible ? 'reveal-active' : ''}`}
                >
                    <p className="nitrile-eyebrow">Why Nitrile?</p>
                    <h2 className="nitrile-main-title">The Premium Standard in Protection</h2>
                </div>

                <div 
                    ref={infographicRef}
                    className={`nitrile-infographic-container nitrile-reveal ${infographicVisible ? 'reveal-active' : ''}`}
                >
                    {/* Feature Text Blocks */}
                    {features.map((feature, index) => (
                        <div key={feature.id} className={`feature-block feature-${feature.id} ${feature.position}`} style={{ '--feature-color': feature.color, '--index': index }}>
                            <div className="feature-text">
                                <h3 className="feature-title">{feature.title}</h3>
                                <p className="feature-description">{feature.description}</p>
                            </div>
                            <div className="connector-svg-wrapper">
                                <svg className="connector-svg" viewBox="0 0 400 200" fill="none" preserveAspectRatio="none">
                                    <path 
                                        className="connector-path" 
                                        d={feature.position === 'top-right' ? "M400 100 H250 L180 180" : 
                                           feature.position === 'bottom-right' ? "M400 100 H250 L180 20" : 
                                           feature.position === 'bottom-left' ? "M0 100 H150 L220 20" : 
                                           "M0 100 H150 L220 180"} 
                                        stroke={feature.color} 
                                        strokeWidth="2" 
                                        strokeLinecap="round"
                                    />
                                    <circle className="line-dot" cx={feature.position.includes('right') ? 400 : 0} cy="100" r="4" fill={feature.color} />
                                </svg>
                                <div className="icon-circle" style={{ backgroundColor: feature.color }}>
                                    <HandIcon />
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Central Diamond Infographic */}
                    <div className="central-infographic">
                        <div className="diamond-grid">
                            <div className="diamond-item d1">
                                <span>2</span>
                            </div>
                            <div className="diamond-item d2">
                                <span>3</span>
                            </div>
                            <div className="diamond-item d3">
                                <span>4</span>
                            </div>
                            <div className="diamond-item d4">
                                <span>1</span>
                            </div>
                            <div className="diamond-center">
                                <span>Nitrile</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Nitrilecollection;
