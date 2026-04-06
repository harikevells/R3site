import React from 'react';
import './About.css';
import abouthands from '../../assets/abouthands.png';
import MainAbout from './MainAbout';
import NewAbout from './NewAbout';
import AboutValue from './AboutValue';
import useScrollReveal from '../../hooks/useScrollReveal';

const About = () => {
  const [ref, isVisible] = useScrollReveal();
  const testimonials = [
    {
      id: 1,
      name: "Amula",
      stars: 3,
      image: "https://i.pravatar.cc/150?u=amula"
    },
    {
      id: 2,
      name: "User",
      stars: 5,
      image: "https://i.pravatar.cc/150?u=user"
    }
  ];

  return (
    <>
      <div ref={ref} className={`about-page ${isVisible ? 'in-view' : ''}`}>
        <div className="about-hero">
          <div className="about-hero-content">
            <h1 className="about-main-heading">
              <span className="text-red">Reliability</span><br /> Integrity. Global Trust.
            </h1>

            <p className="about-description">
              R3 Global Pte Ltd is a Singapore-based medical manufacturing company specializing in high-quality nitrile examination gloves for healthcare, laboratory, industrial, and hygiene applications.
            </p>

            <div className="testimonial-container">
              {testimonials.map((t, index) => (
                <div key={t.id} className={`testimonial-card card-${index + 1}`}>
                  <div className="testimonial-avatar">
                    <img src={t.image} alt={t.name} />
                  </div>
                  <div className="testimonial-info">
                    <span className="testimonial-name">{t.name}</span>
                    <div className="testimonial-stars">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={`star ${i < t.stars ? 'filled' : ''}`}>★</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-hero-image-box">
            <img src={abouthands} alt="Reliable Protection" className="about-hero-img" />
          </div>
        </div>

        {/* New AboutStats Section */}

      </div>

      <MainAbout />
      {/* <AboutValue /> */}
      <NewAbout />
    </>
  );
};

export default About;
