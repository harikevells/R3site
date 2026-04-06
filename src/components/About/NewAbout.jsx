import React from 'react';
import './NewAbout.css';
import useScrollReveal from '../../hooks/useScrollReveal';

const NewAbout = () => {
    const [ref, isVisible] = useScrollReveal();

    return (
        <section 
            ref={ref} 
            className={`new-about-section ${isVisible ? 'in-view' : 'out-view'}`}
        >
            <div className="na-container">
                <div className="na-card">
                    <p className="na-text na-top-text">
                        Our R3 Med brand reflects our commitment to safe, reliable, and internationally compliant protection.
                    </p>
                    <p className="na-text na-bottom-text">
                        We are driven by longterm partnerships, transparent processes, and a promise to deliver products you can trust.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default NewAbout;
