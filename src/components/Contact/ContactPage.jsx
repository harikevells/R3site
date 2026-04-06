import React from 'react';
import './ContactPage.css';
import useScrollReveal from '../../hooks/useScrollReveal';

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
                            Get in touch with us. We're<br />here to assist you.
                        </h1>
                    </div>
                    <div className="ct-social-sidebar">
                        <a href="https://facebook.com" target="_blank" rel="noreferrer" className="ct-social-btn">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="ct-social-btn">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer" className="ct-social-btn">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
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
                        <label className="ct-field-label">Message</label>
                        <textarea className="ct-input-field ct-textarea" placeholder=""></textarea>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactPage;
