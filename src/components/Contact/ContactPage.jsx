import React from 'react';
import './ContactPage.css';
import useScrollReveal from '../../hooks/useScrollReveal';
import { FaYoutube, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

const ContactPage = () => {
    const [headerRef, headerVisible] = useScrollReveal();
    const [formRef, formVisible] = useScrollReveal();

    return (
        <div className="ct-main-container">
            <div className="ct-container">
                <div ref={headerRef} className={`ct-header-flex ${headerVisible ? 'in-view' : ''}`}>
                    <div className="ct-header-left">
                        <span className="ct-get-started">Get Started</span>
                        <h1 className="ct-main-heading">
                            Get in touch with us.<br /> We'rehere to assist you.<br />Togethor,we will make the world safer
                        </h1>
                    </div>
                    <div className="ct-social-sidebar">
                        <a href="#" target="_blank" rel="noreferrer" className="ct-social-btn" aria-label="YouTube">
                            <FaYoutube />
                        </a>
                        <a href="#" target="_blank" rel="noreferrer" className="ct-social-btn" aria-label="LinkedIn">
                            <FaLinkedinIn />
                        </a>
                        <a href="#" target="_blank" rel="noreferrer" className="ct-social-btn" aria-label="WhatsApp">
                            <FaWhatsapp />
                        </a>
                    </div>
                </div>

                <form ref={formRef} className={`ct-contact-form ${formVisible ? 'in-view' : ''}`}>
                    <div className="ct-form-row">
                        <div className="ct-input-group">
                            <label className="ct-field-label">Your Name</label>
                            <input type="text" className="ct-input-field" placeholder="" />
                        </div>
                        <div className="ct-input-group">
                            <label className="ct-field-label">Email Address</label>
                            <input type="email" className="ct-input-field" placeholder="" />
                        </div>
                        <div className="ct-input-group">
                            <label className="ct-field-label">Phone Number (optional)</label>
                            <input type="tel" className="ct-input-field" placeholder="" />
                        </div>
                    </div>
                    <div className="ct-input-group ct-full-width">
                        <label className="ct-field-label">Message (including product type, quantity / requirements and delivery expectations)</label>
                        <textarea className="ct-input-field ct-textarea" placeholder=""></textarea>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactPage;
