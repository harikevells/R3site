import React from 'react';
import './ProductsSection.css';
import handsImg from '../assets/hands.png';
import { FiArrowRight } from 'react-icons/fi';
import useScrollReveal from '../hooks/useScrollReveal';

const ProductsSection = () => {
  const [ref, isVisible] = useScrollReveal();
  return (
    <section ref={ref} className={`products-redesign-section ${isVisible ? 'in-view' : ''}`}>
      <div className="products-container">
        <h2 className="products-main-title">PRODUCTS</h2>

        <div className="products-grid">
          {/* Left Text Block */}
          <div className="product-text-block left-block">
            <h3 className="product-sub-title">Nitrile Examination Gloves</h3>
            <p className="product-body-text">
              R3 Med nitrile examination gloves are engineered to
              deliver superior barrier protection, durability, and comfort
              for professionals working in healthcare, laboratories, and
              hygiene-critical industries.
            </p>
            <p className="product-body-text">
              Designed using advanced nitrile formulation, our gloves
              provide strong resistance against chemicals, punctures, and
              contaminants while maintaining excellent tactile sensitivity.
            </p>
          </div>

          {/* Center Image Block */}
          <div className="product-image-block">
            <img src={handsImg} alt="Nitrile Gloves" className="center-glove-image" />
          </div>

          {/* Right Text Block */}
          <div className="product-text-block right-block">
            <h3 className="product-sub-title">Latex Gloves</h3>
            <p className="product-body-text">
              Latex gloves, made from natural rubber, are valued for
              their excellent elasticity, comfort, and high tactile
              sensitivity. They provide a close fit that allows users to
              perform delicate tasks with precision.
            </p>
            <p className="product-body-text">
              Latex gloves are commonly used in medical procedures, dental practices,
              and other environments where comfort and flexibility are
              important.
            </p>
          </div>

          {/* SVG Pointer Lines Layer (Desktop Only) */}
          <svg
            className="products-pointer-svg"
            viewBox="0 0 1200 800"
            preserveAspectRatio="none"
          >
            {/* Left wave curve: Text -> Glove */}
            <path
              className="arrow-line-path"
              d="M 380 280 C 430 280 420 360 480 400"
            />
            {/* Left Icon Node */}
            <foreignObject x="360" y="260" width="40" height="40">
              <div className="product-icon-container">

                <FiArrowRight className="product-arrow-icon right-arrow" />
              </div>
            </foreignObject>

            {/* Right wave curve: Glove -> Text */}
            <path
              className="arrow-line-path"
              d="M 720 320 C 780 320 780 420 830 460"
            />
            {/* Right Icon Node */}
            <foreignObject x="810" y="440" width="40" height="40">
              <div className="product-icon-container">
                <FiArrowRight className="product-arrow-icon left-arrow" />
              </div>
            </foreignObject>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
