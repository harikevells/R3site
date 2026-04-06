import React, { useState, useEffect, useRef } from 'react';
import './AboutValue.css';
import useScrollReveal from '../../hooks/useScrollReveal';

const values = [
    {
        id: '01',
        title: 'Quality First',
        description: 'Every product is engineered to meet strict international quality standards.',
        link: '#'
    },
    {
        id: '02',
        title: 'Clinical Trust',
        description: 'Our gloves are designed for healthcare professionals who require consistent protection.',
        link: '#'
    },
    {
        id: '03',
        title: 'Innovation Driven',
        description: 'We continuously develop future-ready solutions for modern healthcare needs.',
        link: '#'
    },
    {
        id: '04',
        title: 'Global Mindset',
        description: 'Serving diverse markets with localized support and global expertise.',
        link: '#'
    }
];

const AboutValue = () => {
    const [ref, isVisible] = useScrollReveal();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsPerView, setCardsPerView] = useState(3);
    const containerRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1200) {
                setCardsPerView(3);
            } else if (window.innerWidth >= 768) {
                setCardsPerView(2);
            } else {
                setCardsPerView(1);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const totalSlides = Math.ceil(values.length / cardsPerView);
    const maxIndex = values.length - cardsPerView;

    const handleNext = () => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    };

    const showControls = values.length > 3 || (window.innerWidth < 1200 && values.length > cardsPerView);

    return (
        <section ref={ref} className={`about-value ${isVisible ? 'in-view' : ''}`}>
            <div className="about-value__container">
                <div className="about-value__header">
                    <div className="about-value__title-group">
                        <span className="about-value__label">ABOUT US</span>
                        <h2 className="about-value__heading">Our Values</h2>
                    </div>

                    {showControls && (
                        <div className="about-value__controls">
                            <button className="control-btn prev" onClick={handlePrev} aria-label="Previous">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M15 18l-6-6 6-6" />
                                </svg>
                            </button>
                            <button className="control-btn next" onClick={handleNext} aria-label="Next">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M9 18l6-6-6-6" />
                                </svg>
                            </button>
                        </div>
                    )}
                </div>

                <div className="about-value__carousel-wrapper" ref={containerRef}>
                    <div
                        className="about-value__track"
                        style={{
                            transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
                        }}
                    >
                        {values.map((value) => (
                            <div
                                className="about-value__slide"
                                key={value.id}
                                style={{ flex: `0 0 ${100 / cardsPerView}%` }}
                            >
                                <div className="value-card">
                                    <div className="value-card__badge">{value.id}</div>
                                    <h3 className="value-card__title">{value.title}</h3>
                                    <p className="value-card__desc">{value.description}</p>
                                    <a href={value.link} className="value-card__link">
                                        Learn more <span>→</span>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutValue;

