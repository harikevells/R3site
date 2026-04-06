import React from 'react';
import './MainAbout.css';
import useScrollReveal from '../../hooks/useScrollReveal';
import useCountUp from '../../hooks/useCountUp';

const stats = [
  { number: '1000+', label: 'Sales\nfor gloves' },
  { number: '250+', label: 'On going\nCountries' },
  { number: '500+', label: 'Happy\nClients' },
  { number: 'Many', label: 'Products' },
];

const StatBox = ({ stat, isVisible }) => {
  const count = useCountUp(stat.number, 2000, isVisible);
  return (
    <div className="stat-box">
      <span className="stat-box__number">{count}</span>
      <p className="stat-box__label">{stat.label}</p>
    </div>
  );
};

const MainAbout = () => {
  const [ref, isVisible] = useScrollReveal();
  return (
    <section ref={ref} className={`about-stats ${isVisible ? 'in-view' : ''}`}>
      <div className="about-stats__inner">
        <div className="about-stats__left">
          <h2 className="about-stats__heading">ABOUT US</h2>
          <p className="about-stats__para">
         R3 Global is a Singaporebased medical device manufacturer partnering with trusted factories
across Asia to produce highquality gloves and healthcare products. We oversee every stage of
production to ensure consistent quality, regulatory compliance, and dependable supply for our
global clients.
          </p>
          {/* <p className="about-stats__para">
            Driven by innovation and a commitment to safety, R3 Global is
            expanding its product portfolio to include a broader range of
            medical consumables, strengthening our role as a dependable
            partner in the global healthcare ecosystem.
          </p> */}
        </div>

        <div className="about-stats__divider"></div>

        <div className="about-stats__right">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <StatBox key={index} stat={stat} isVisible={isVisible} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainAbout;


