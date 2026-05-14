import React from 'react';
import './Global.css';
import healthcareImg from '../../assets/healthcareGB.png';
import labImg from '../../assets/LaboratoriesGB.png';
import foodImg from '../../assets/foodprocessGB.png';
import manufacturingImg from '../../assets/manufactureGB.png';
import automotiveImg from '../../assets/AutomotiveGB.png';
import cleaningImg from '../../assets/cleaningGB.png';
import gloabalearth from '../../assets/gloabalearth.png';
import futureproductc from '../../assets/globalreachimg.png';
import useScrollReveal from '../../hooks/useScrollReveal';

const Global = () => {
  const [globalRef, globalVisible] = useScrollReveal();
  const [sectorsTitleRef, sectorsTitleVisible] = useScrollReveal();
  const [sectorsGridRef, sectorsGridVisible] = useScrollReveal();
  const [midTextRef, midTextVisible] = useScrollReveal();
  const [redLineRef, redLineVisible] = useScrollReveal();
  const [topRedLineRef, topRedLineVisible] = useScrollReveal();
  const [whyTitleRef, whyTitleVisible] = useScrollReveal();
  const [whyListRef, whyListVisible] = useScrollReveal();
  const [bottomTextRef, bottomTextVisible] = useScrollReveal();

  const sectors = [
    {
      title: "Healthcare",
      image: healthcareImg,
      description: "Hospitals, clinics, and medical professionals for patient care and examinations",
      isLarge: false
    },
    {
      title: "Laboratories",
      image: labImg,
      description: "Research labs, testing facilities, and pharmaceutical environments.",
      isLarge: false
    },
    {
      title: "Food Processing",
      image: foodImg,
      description: "Ensuring hygiene and contamination-free food handling",
      isLarge: true
    },
    {
      title: "Manufacturing",
      image: manufacturingImg,
      description: "Protection for workers in industrial and production environments",
      isLarge: true
    },
    {
      title: "Automotive",
      image: automotiveImg,
      description: "Safe handling of tools, oils, and mechanical components",
      isLarge: false
    },
    {
      title: "Cleaning & Hygiene",
      image: cleaningImg,
      description: "Janitorial services, sanitation teams, and facility management",
      isLarge: false
    }
  ];

  const whyPoints = [
    "World's largest production capacity",
    "Advanced manufacturing technology",
    "Compliance with global standards (FDA, CE, ISO, EN)",
    "Strong supply chain reliability",
    "Competitive pricing with premium quality"
  ];

  return (
    <div className="global-page">
      {/* Global Reach Section */}
      <section ref={globalRef} className={`cp-global-section ${globalVisible ? 'in-view' : ''}`}>
          <div className="cp-container">
              <h2 className="cp-section-title cp-section-title--with-icons">
                  Global Reach
                  {/* <span className="cp-title-icons"><img src={futureproductc} alt="" /></span> */}
              </h2>

              <div className="cp-global__map-container">
                  <img src={gloabalearth} alt="Global Reach Map" className="cp-global__map-image" />
              </div>
          </div>
      </section>

      <div ref={topRedLineRef} className={`red-line ${topRedLineVisible ? 'in-view' : ''}`}></div>

      <div className="container">
        {/* Most Common Sectors Section */}
        <section className="sectors-section">
          <h2 ref={sectorsTitleRef} className={`section-title ${sectorsTitleVisible ? 'in-view' : ''}`}>
            <span className="text-red">Most</span> <br />
            <span className="text-black">Common Sectors:</span>
          </h2>

          <div ref={sectorsGridRef} className={`sectors-grid ${sectorsGridVisible ? 'in-view' : ''}`}>
            {sectors.map((sector, index) => (
              <div 
                key={index} 
                className={`sector-card ${sector.isLarge ? 'sector-card-large' : ''}`}
              >
                <div className="sector-icon">
                  <img src={sector.image} alt={sector.title} />
                </div>
                <h3 className="sector-title">{sector.title}</h3>
                <p className="sector-desc">{sector.description}</p>
              </div>
            ))}
          </div>

          <div ref={midTextRef} className={`mid-text ${midTextVisible ? 'in-view' : ''}`}>
            <p>
              Asian countries supply over 70% of the world's nitrile glove demand, 
              making their products globally recognized and accepted.
            </p>
          </div>
        </section>
      </div>

      <div ref={redLineRef} className={`red-line ${redLineVisible ? 'in-view' : ''}`}></div>

      <div className="container">

        {/* Why section */}
        <section className="why-section">
            <h2 ref={whyTitleRef} className={`why-title ${whyTitleVisible ? 'in-view' : ''}`}>
              <span className="text-red">Why</span> <br />
              <span className="text-black">Asian Nitrile Gloves Dominate Global Markets?</span>
            </h2>

            <ul ref={whyListRef} className={`why-list ${whyListVisible ? 'in-view' : ''}`}>
              {whyPoints.map((point, index) => (
                <li key={index} className="why-item">
                  <span className="bullet">•</span>
                  {point}
                </li>
              ))}
            </ul>

            <div ref={bottomTextRef} className={`bottom-text ${bottomTextVisible ? 'in-view' : ''}`}>
              <p>
                Singapore, Malaysia, Thailand and Vietnam collectively supply over 70% of the world's nitrile glove demand.
              </p>
            </div>
        </section>
      </div>
    </div>
  );
};

export default Global;
