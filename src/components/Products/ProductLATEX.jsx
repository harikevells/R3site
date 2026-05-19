import React from 'react';
import './ProductNitrile.css';
import nethands from '../../assets/latexhands.png';
import netcenterbg from '../../assets/wire2.png';
import useScrollReveal from '../../hooks/useScrollReveal';
import LatexNew from './Latexlist/LatexNew';
import LatexPart from './Latexlist/LatexPart';

const ProductLATEX = () => {
    const [ref, isVisible] = useScrollReveal();
    return (
        <div ref={ref} className={`pn-main-container ${isVisible ? 'in-view' : ''}`}>

            <section className="pn-hero-section">
                {/* <div className="pn-hero__bg-text">LATEX</div> */}
                <div className="pn-hero__image-container">
                    <img src={netcenterbg} alt="Latex Gloves" className="pn-hero__image mrf" />
                </div>
            </section>

            <section className="pn-info-section">
                <h1 className="pn-info__title">Examination Gloves</h1>
                <p className="pn-info__description">
Latex gloves have long been the gold standard in medical environments due to their exceptional elasticity, tactile sensitivity, and natural comfort. Made from high-quality natural rubber latex, these gloves provide a reliable barrier against contaminants while supporting precision-based tasks in healthcare and laboratory settings.         </p>
            </section>

            {/* <section className="pn-features-section">
                <div className="pn-features__container">
                    <div className="pn-features__content pn-features__content--left">
                        <h2 className="pn-features__title mrp">Features of Latex</h2>
                        <ul className="pn-features__list crp">
                            <li>Very flexible and stretchy</li>
                            <li>Comfortable fit for hands</li>
                            <li>Good tactile sensitivity</li>
                            <li>Strong barrier protection</li>
                        </ul>
                    </div>

                    <div className="pn-features__center">
                        <img src={nethands} alt="Pointing Hands" className="pn-features__center-image" />
                    </div>

                    <div className="pn-features__content pn-features__content--right">
                        <h2 className="pn-features__title fotyu">Where Gloves Are Used</h2>
                        <ul className="pn-features__list sats">
                            <li>Hospitals and clinics</li>
                            <li>Dental treatments</li>
                            <li>laboratories</li>
                            <li>Cleaning and hygiene work</li>
                        </ul>
                    </div>
                </div>
            </section> */}
            <LatexNew />
            <LatexPart />
        </div>
    );
};

export default ProductLATEX;
