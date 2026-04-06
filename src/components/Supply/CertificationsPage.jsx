import React from 'react';
import './CertificationsPage.css';
import supplybg from '../../assets/supplybg.png';
import supplyfutureproduct from '../../assets/supplyfutureproduct.png';
import gloabalearth from '../../assets/gloabalearth.png';
import futureproductb from '../../assets/futureproductb.png';
import futureproductc from '../../assets/globalreachimg.png';
import useScrollReveal from '../../hooks/useScrollReveal';
import useCountUp from '../../hooks/useCountUp';

const QualityStat = ({ target, label, isVisible }) => {
    const count = useCountUp(target, 2000, isVisible);
    return (
        <div className="cp-stat-item">
            <span className="cp-stat-number">{count}</span>
            <span className="cp-stat-label">{label}</span>
        </div>
    );
};

const CertificationsPage = () => {
    const [heroRef, heroVisible] = useScrollReveal();
    const [certRef, certVisible] = useScrollReveal();
    const [globalRef, globalVisible] = useScrollReveal();
    const [commitmentRef, commitmentVisible] = useScrollReveal();
    const [futureRef, futureVisible] = useScrollReveal();
    
    const [activeSlide, setActiveSlide] = React.useState(0);
    const [touchStart, setTouchStart] = React.useState(null);
    const [touchEnd, setTouchEnd] = React.useState(null);

    // Minimum swipe distance (in px)
    const minSwipeDistance = 50;

    const onTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe && activeSlide < products.length - 1) {
            setActiveSlide(prev => prev + 1);
        }
        if (isRightSwipe && activeSlide > 0) {
            setActiveSlide(prev => prev - 1);
        }
    };

    const products = [
        { id: 1, title: "Surgical and Procedure Gloves", description: "High-quality surgical gloves with maximum protection." },
        { id: 2, title: "Specialized Medical Gloves", description: "Gloves designed for specific medical procedures." },
        { id: 3, title: "Advanced Barrier Protection", description: "Providing superior barrier against contaminants." },
        { id: 4, title: "Next-Gen Synthetic Gloves", description: "Innovation in synthetic material for better sensitivity." },
        { id: 5, title: "Surgical and Procedure Gloves", description: "Apply what you've learned with interactive exercises and quizzes that reinforce financial concepts through real-world scenarios." },
        { id: 6, title: "Eco-Friendly Alternatives", description: "Biodegradable solutions for a sustainable future." },
        { id: 7, title: "Precision High-Grip Gloves", description: "Enhanced grip for delicate laboratory tasks." },
    ];

    return (
        <div className="cp-main-container">
            {/* Hero Section */}
            <section ref={heroRef} className={`cp-hero-section ${heroVisible ? 'in-view' : ''}`} style={{ backgroundImage: `url(${supplybg})` }}>
                <div className="cp-hero__overlay">
                    <h1 className="cp-hero__title">Certifications &<br />Quality Standards</h1>
                </div>
            </section>

            {/* Certifications & Quality Standards Section */}
            <section ref={certRef} className={`cp-cert-section ${certVisible ? 'in-view' : ''}`}>
                <div className="cp-container">
                    <h2 className="cp-section-title">Committed to Safety. Driven by Compliance.</h2>
                    <p className="cp-section-intro">
                        At R3 Global, quality is not an afterthought — it is the foundation of every product we deliver. 
                        Our R3 Med gloves are manufactured in ISOCertified facilities and undergo rigorous testing 
                        to meet international medical and industrial standards.
                    </p>
                    
                    <div className="cp-cert-grid">
                        <div className="cp-cert-column">
                            <h3 className="cp-cert__sub-title cp-cert__sub-title--teal">Quality & Compliance</h3>
                            <ul className="cp-cert__list">
                                <li><span>»</span> ISO Certified – Compliant with ISO 13485 & ISO 9001 standards</li>
                                <li><span>»</span> Medical-Grade Production – Meets global medical requirements</li>
                                <li><span>»</span> Strict Quality Control – Monitored from raw materials to packaging</li>
                                <li><span>»</span> Global Compliance – Meets ASTM, EN 455 & EN 374 standards</li>
                            </ul>
                        </div>
                        
                        <div className="cp-cert__divider"></div>
                        
                        <div className="cp-cert-column down0">
                            <h3 className="cp-cert__sub-title cp-cert__sub-title--gold fingers">Testing Parameters</h3>
                            <ul className="cp-cert__list">
                                <li><span>»</span> Tensile Strength – Durable, flexible, and tear-resistant</li>
                                <li><span>»</span> AQL Testing – Ensures minimal pinholes and strong protection</li>
                                <li><span>»</span> Chemical & Viral Tests – Validates safety against contaminants</li>
                                <li><span>»</span> Size & Thickness Check – Consistent fit and sensitivity</li>
                                <li><span>»</span> Skin Safety – Safe for prolonged use</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Commitment Section */}
            <section ref={commitmentRef} className={`cp-commitment-section ${commitmentVisible ? 'in-view' : ''}`}>
                {/* <div className="cp-commitment-connector"></div> */}
                <div className="cp-commitment-box">
                    <div className="cp-container">
                        <h2 className="cp-commitment-title">Our Commitment</h2>
                        <p className="cp-commitment-text">
                            We work only with trusted, audited factories and maintain full oversight of production to ensure every R3 Med product reflects our promise of reliability, integrity, and global trust.
                        </p>
                    </div>
                </div>
            </section>



            {/* Future Products Section */}
            <section ref={futureRef} className={`cp-future-section ${futureVisible ? 'in-view' : ''}`}>
                <div className="cp-container">
                    <h2 className="cp-section-title">Future Products</h2>

                    <div 
                        className="cp-future__carousel-wrapper"
                        onTouchStart={onTouchStart}
                        onTouchMove={onTouchMove}
                        onTouchEnd={onTouchEnd}
                    >
                        <div 
                            className="cp-future__carousel-content" 
                            style={{ transform: `translateX(-${activeSlide * 100}%)` }}
                        >
                            {products.map((product, index) => (
                                <div className="cp-future__card" key={product.id}>
                                    <div className="cp-future__image-side">
                                        <img src={supplyfutureproduct} alt="Surgical Professional" />
                                    </div>
                                    <div className="cp-future__content-side">
                                        <div className="cp-future__icon-wrapper">
                                            <img src={futureproductb} alt="Future Product Icon" className="cp-future__img-icon" />
                                        </div>
                                        <h3 className="cp-future__card-title">{product.title}</h3>
                                        <p className="cp-future__card-text">{product.description}</p>
                                        <button className="cp-future__btn">Explore this <span>→</span></button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="cp-future__pagination">
                        <button className="cp-nav-arrow" onClick={() => setActiveSlide(prev => Math.max(0, prev - 1))}>‹</button>
                        <div className="cp-dots-container">
                            {products.map((_, index) => (
                                <span 
                                    key={index} 
                                    className={`cp-dot ${activeSlide === index ? 'cp-dot--active' : ''}`}
                                    onClick={() => setActiveSlide(index)}
                                ></span>
                            ))}
                        </div>
                        <button className="cp-nav-arrow" onClick={() => setActiveSlide(prev => Math.min(products.length - 1, prev + 1))}>›</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CertificationsPage;
