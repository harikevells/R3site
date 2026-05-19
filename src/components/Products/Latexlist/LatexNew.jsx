import React from 'react';
import './LatexNew.css';
import examGlove from '../../../assets/boxmodel1.png';
import surgicalGlove from '../../../assets/boxmodel1.png';
import useScrollReveal from '../../../hooks/useScrollReveal';

const LatexNew = () => {
    const [ref1, isVisible1] = useScrollReveal({ threshold: 0.1 });
    const [ref2, isVisible2] = useScrollReveal({ threshold: 0.1 });

    return (
        <section className="latex-section">
            <div className="latex-container">

                {/* Section 1: Examination Gloves */}
                <div ref={ref1} className="latex-product-item">
                    {/* Centered Header for Section 1 */}
                    <div className={`latex-header ${isVisible1 ? 'in-view-top' : 'reveal-fade'}`}>
                        <span className="latex-eyebrow">Latex</span>
                        <h2 className="latex-title">Examination Gloves</h2>
                        <p className="latex-subtitle">Flexible, Sensitive, and Ideal for Routine Clinical Use</p>
                    </div>

                    {/* Main Content Area: Key Features + Image */}
                    <div className={`latex-main-row ${isVisible1 ? 'in-view' : 'reveal-right'}`}>
                        <div className="latex-text-content">
                            <div className="latex-badge-wrapper">
                                <div className="latex-badge">Latex Examination Gloves</div>
                                <div className="latex-line"></div>
                            </div>
                            <h3 className="latex-subheading">Key Features</h3>
                            <ul className="latex-list">
                                <li className="latex-list-item">Natural Elasticity – Snug, second-skin fit for maximum sensitivity</li>
                                <li className="latex-list-item">High Protection – Guards against bacteria and fluids</li>
                                <li className="latex-list-item">Strong & Flexible – Excellent stretch and tear resistance</li>
                                <li className="latex-list-item">Powder Options – Available in powdered & powder-free (reduced allergy risk)</li>
                                <li className="latex-list-item">Cost-Effective – Ideal for high-volume medical use</li>
                            </ul>
                        </div>

                        <div className="latex-image-box">
                            <img src={examGlove} alt="Latex Examination Glove" className="latex-img" />
                        </div>
                    </div>

                    {/* Applications Area: Full Width Below */}
                    <div className={`latex-apps-section ${isVisible1 ? 'in-view' : 'reveal-fade'}`}>
                        <div className="latex-badge-wrapper">
                            <div className="latex-badge">Latex Examination Gloves</div>
                            <div className="latex-line"></div>
                        </div>
                        <h3 className="latex-subheading">Common Applications</h3>
                        <ul className="latex-list latex-apps-list">
                            <li className="latex-list-item">Medical examinations</li>
                            <li className="latex-list-item">Nursing procedures</li>
                            <li className="latex-list-item">Laboratory sample handling</li>
                            <li className="latex-list-item">Non-sterile clinic and cleanroom</li>
                            <li className="latex-list-item">Dental diagnostics</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Main Red Divider - Moved outside container for full width */}
            {/* <div className="latex-divider-main"></div> */}

            {/* <div className="latex-container">
            
                <div ref={ref2} className="latex-product-item">
    
                    <div className={`latex-header ${isVisible2 ? 'in-view-top' : 'reveal-fade'}`}>
                        <span className="latex-eyebrow">Latex</span>
                        <h2 className="latex-title">Examination Gloves</h2>
                        <p className="latex-subtitle">Sterile, High-Precision Gloves for Critical Procedures</p>
                    </div>

                
                    <div className={`latex-main-row alt ${isVisible2 ? 'in-view' : 'reveal-left'}`}>
                        <div className="latex-text-content">
                            <div className="latex-badge-wrapper badge-reverse ments1">
                                <div className="latex-line"></div>
                                <div className="latex-badge">Latex Examination Gloves</div>
                            </div>
                            <h3 className="latex-subheading format2">Key Features</h3>
                            <ul className="latex-list ments">
                                <li className="latex-list-item">Sterile & Individually Packed – Ensures maximum hygiene</li>
                                <li className="latex-list-item">Anatomic Fit – Reduces fatigue in long procedures</li>
                                <li className="latex-list-item">High Sensitivity – Precise tactile feedback for surgeons</li>
                                <li className="latex-list-item">Strong & Durable – Tear and puncture resistant</li>
                                <li className="latex-list-item">Enhanced Grip – Micro-textured for better control</li>
                            </ul>
                        </div>

                        <div className="latex-image-box">
                            <img src={surgicalGlove} alt="Latex Surgical Glove" className="latex-img" />
                        </div>
                    </div>

            
                    <div className={`latex-apps-section ${isVisible2 ? 'in-view' : 'reveal-fade'}`}>
                        <div className="latex-badge-wrapper badge-reverse ments1">
                            <div className="latex-line"></div>
                            <div className="latex-badge">Latex Examination Gloves</div>
                        </div>
                        <h3 className="latex-subheading format2">Common Applications</h3>
                        <ul className="latex-list latex-apps-list">
                            <li className="latex-list-item">General surgery</li>
                            <li className="latex-list-item">Orthopaedic procedures</li>
                            <li className="latex-list-item">Obstetrics & gynaecology</li>
                            <li className="latex-list-item">Cardiovascular & specialty surgeries</li>
                            <li className="latex-list-item">High-precision medical intervention</li>
                        </ul>
                    </div>
                </div>
            </div> */}

        </section>
    );
};

export default LatexNew;
