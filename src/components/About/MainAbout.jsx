import React from 'react';
import './MainAbout.css';
import useScrollReveal from '../../hooks/useScrollReveal';
import rightImage from '../../assets/AboutUsrightimage.png';

const MainAbout = () => {
  const [ref, isVisible] = useScrollReveal();
  
  return (
    <section ref={ref} className={`about-stats ${isVisible ? 'in-view' : ''}`}>
      <div className="about-stats__inner">
        <div className="about-stats__left">
          <h2 className="about-stats__heading">ABOUT US</h2>
          <p className="about-stats__para">
            R3 Global is a Singapore based medical device manufacturer
            partnering with trusted factories
            across Asia to produce highquality gloves and healthcare
            products. We oversee every stage of
            production to ensure consistent quality, regulatory compliance,
            and dependable supply for our
            global clients.
          </p>
        </div>

        <div className="about-stats__divider"></div>

        <div className="about-stats__right">
          <div className="about-stats__image-container">
            <img src={rightImage} alt="About Us" className="about-stats__right-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainAbout;
