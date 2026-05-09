import React from 'react';
import './ProductNitrile.css';
import nethands from '../../assets/nethands.png';
import netcenterbg from '../../assets/netcenterbg.png';
import useScrollReveal from '../../hooks/useScrollReveal';
import Nitrilecollection from './Nitrilecollection';
import GloveDown from './GloveDown';
import OurNitrile from './OurNitrile';
import MedicalGrade from './MedicalGrade';
import NewNitrile from './NewNitrile';

const ProductNitrile = () => {
    const [ref, isVisible] = useScrollReveal();
    return (
        <div ref={ref} className={`pn-main-container ${isVisible ? 'in-view' : ''}`}>

            <section className="pn-hero-section">
                {/* <div className="pn-hero__bg-text">NITRILE</div> */}
                <div className="pn-hero__image-container">
                    <img src={netcenterbg} alt="Nitrile Gloves" className="pn-hero__image" />
                </div>
            </section>

            <section className="pn-info-section">
                <h1 className="pn-info__title">Examination Gloves</h1>
                <p className="pn-info__description">
                    At R3 Global, we believe protective gloves are more than consumables — they are a frontline barrier safeguarding healthcare workers, laboratory professionals, and food-industry teams. Our nitrile gloves are engineered from high-grade nitrile butadiene rubber (NBR), delivering exceptional durability, chemical resistance, and comfort without the allergy risks associated with latex.
                </p>
            </section>

            <NewNitrile />

            {/* <section className="pn-features-section">
                <div className="pn-features__container">
                    <div className="pn-features__content pn-features__content--left">
                        <h2 className="pn-features__title mrp">Features of Nitrile</h2>
                        <ul className="pn-features__list crp">
                            <li>Latex-free (reduces allergy risk)</li>
                            <li>High puncture resistance</li>
                            <li>Strong chemical resistance</li>
                            <li>Flexible and comfortable to wear</li>
                            <li>Suitable for long-time use</li>
                        </ul>
                    </div>

                    <div className="pn-features__center">
                        <img src={nethands} alt="Pointing Hands" className="pn-features__center-image" />
                    </div>

                    <div className="pn-features__content pn-features__content--right">
                        <h2 className="pn-features__title fotyu">Where Gloves Are Used</h2>
                        <ul className="pn-features__list sats">
                            <li>Hospitals and clinics</li>
                            <li>Dental centers</li>
                            <li>Laboratories</li>
                            <li>Food handling industries</li>
                            <li>Manufacturing environments</li>
                        </ul>
                    </div>
                </div>
            </section> */}

            <Nitrilecollection />
            <OurNitrile />
            <MedicalGrade />
            <GloveDown />
        </div>
    );
};

export default ProductNitrile;
