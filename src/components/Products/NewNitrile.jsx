import React from 'react';
import './Nitrilecollection.css';
import examinationGlove from '../../assets/nitrile_gloves.png';
import surgicalGlove from '../../assets/boxmodel.png';
import useScrollReveal from '../../hooks/useScrollReveal';

const NewNitrile = () => {
    const [ref1, isVisible1] = useScrollReveal({ threshold: 0.1 });
    const [ref2, isVisible2] = useScrollReveal({ threshold: 0.1 });

    return (
        <section className="latex-section">

            {/* Main Red Divider - Moved outside container for full width */}
            <div className="latex-divider-main"></div>

            <div className="latex-container">
                {/* Section 2: Surgical Gloves */}
                <div ref={ref2} className="latex-product-item">
                    {/* Centered Header for Section 2 */}
                    <div className={`latex-header ${isVisible2 ? 'in-view-top' : 'reveal-fade'}`}>
                        <span className="latex-eyebrow">Nitrile</span>
                        <h2 className="latex-title">Examination Gloves</h2>
                        <p className="latex-subtitle">Sterile, Precision-Engineered Gloves for Advanced Surgical Procedures</p>
                    </div>

                    {/* Main Content Area: Key Features + Image (Reverse) */}
                    <div className={`latex-main-row alt ${isVisible2 ? 'in-view' : 'reveal-left'}`}>
                        <div className="latex-text-content">
                            <div className="latex-badge-wrapper badge-reverse ments1">
                                <div className="latex-line"></div>
                                <div className="latex-badge">Nitrile Examination Gloves</div>
                            </div>
                            <h3 className="latex-subheading format2">Key Features</h3>
                            <ul className="latex-list ments">
                                <li className="latex-list-item">Latex‑Free Protection – Safe for users with latex allergies or sensitivities</li>
                                <li className="latex-list-item">High Chemical Resistance – Shields against oils, solvents, and a wide range of chemicals</li>
                                <li className="latex-list-item">Strong & Durable – Superior puncture and tear resistance compared to latex or vinyl</li>
                                <li className="latex-list-item">Comfortable Fit – Soft, flexible material for extended wear and excellent tactile sensitivity</li>
                                <li className="latex-list-item">Powder‑Free Design – Clean handling with reduced contamination risk</li>
                                <li className="latex-list-item">Versatile Use – Ideal for medical, laboratory, food, and industrial applications</li>
                            </ul>
                        </div>

                        <div className="latex-image-box">
                            <img src={surgicalGlove} alt="Nitrile Surgical Glove" className="latex-img" />
                        </div>
                    </div>

                    {/* Applications Area: Full Width Below */}
                    <div className={`latex-apps-section ${isVisible2 ? 'in-view' : 'reveal-fade'}`}>
                        <div className="latex-badge-wrapper badge-reverse ments1">
                            <div className="latex-line"></div>
                            <div className="latex-badge">Nitrile Examination Gloves</div>
                        </div>
                        <h3 className="latex-subheading format2">Common Applications</h3>
                        <ul className="latex-list latex-apps-list">
                            <li className="latex-list-item">General and specialty surgeries</li>
                            <li className="latex-list-item">Orthopedic procedures</li>
                            <li className="latex-list-item">Emergency and trauma care</li>
                            <li className="latex-list-item">Dental and oral surgery</li>
                            <li className="latex-list-item">Minimally invasive procedures</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="latex-divider-main"></div>
        </section>
    );
};

export default NewNitrile;
