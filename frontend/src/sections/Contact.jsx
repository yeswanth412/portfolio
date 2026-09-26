import React, { useState } from 'react';
import SocialLinks from '../components/SocialLinks';
import ScrollReveal from '../components/ScrollReveal/ScrollReveal';
import { portfolioData } from '../data/portfolio';

export default function Contact() {
  const { email, location, availability } = portfolioData.personal;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="section contact-editorial-section" aria-label="Contact Yeswanth Uggina">
      <div className="container">
        {/* Editorial Section Header */}
        <ScrollReveal direction="up" delay={0}>
          <div className="editorial-section-header">
            <span className="editorial-section-tag">06 / GET IN TOUCH</span>
            <h2 className="editorial-section-title">CONTACT</h2>
            <div className="editorial-header-divider" />
          </div>
        </ScrollReveal>

        <div className="contact-editorial-grid">
          {/* Direct Editorial Info */}
          <ScrollReveal direction="up" delay={80} className="contact-editorial-info-col">
            <div className="contact-editorial-panel">
              <h3 className="contact-editorial-heading">Direct Inquiry</h3>
              <p className="contact-editorial-lead">
                I am open to discussions regarding Python backend engineering, RESTful architecture, relational database design, and applied AI systems.
              </p>

              <div className="contact-editorial-entry">
                <span className="contact-spec-label">EMAIL</span>
                <div className="contact-email-inline">
                  <a href={`mailto:${email}`} className="contact-editorial-email">
                    {email}
                  </a>
                  <button
                    type="button"
                    className="editorial-copy-btn"
                    onClick={handleCopyEmail}
                    aria-label="Copy email address to clipboard"
                  >
                    {copied ? 'COPIED' : 'COPY'}
                  </button>
                </div>
              </div>

              <div className="contact-editorial-entry">
                <span className="contact-spec-label">LOCATION</span>
                <p className="contact-spec-val">{location}</p>
              </div>

              <div className="contact-editorial-entry">
                <span className="contact-spec-label">AVAILABILITY</span>
                <p className="contact-spec-val text-accent">{availability}</p>
              </div>

              <div className="contact-editorial-entry">
                <span className="contact-spec-label">PROFILES</span>
                <SocialLinks showLabels className="contact-socials-editorial" />
              </div>
            </div>
          </ScrollReveal>

          {/* Minimal Form */}
          <ScrollReveal direction="up" delay={140} className="contact-editorial-form-col">
            <div className="contact-form-editorial-panel">
              <h3 className="contact-editorial-heading">Send a Message</h3>

              {formSubmitted ? (
                <div className="editorial-form-success" role="status">
                  <div className="editorial-success-icon">&#10003;</div>
                  <h4 className="editorial-success-title">Message Received (UI Preview)</h4>
                  <p className="editorial-success-msg">
                    Thank you, <strong>{formData.name}</strong>. The backend database contact endpoint will be integrated in Phase 3. In the meantime, please feel free to email directly at{' '}
                    <a href={`mailto:${email}`} className="text-accent">
                      {email}
                    </a>.
                  </p>
                  <button
                    type="button"
                    className="editorial-action-btn outline mt-3"
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', message: '' });
                    }}
                  >
                    RESET FORM
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-editorial-form" noValidate>
                  <div className="editorial-form-field">
                    <label htmlFor="contact-name" className="editorial-field-label">
                      NAME
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      required
                      className="editorial-input"
                    />
                  </div>

                  <div className="editorial-form-field">
                    <label htmlFor="contact-email" className="editorial-field-label">
                      EMAIL
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@domain.com"
                      required
                      className="editorial-input"
                    />
                  </div>

                  <div className="editorial-form-field">
                    <label htmlFor="contact-message" className="editorial-field-label">
                      MESSAGE
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Briefly describe your project scope or engineering inquiry..."
                      rows={4}
                      required
                      className="editorial-textarea"
                    />
                  </div>

                  <button type="submit" className="editorial-action-btn primary submit-editorial-btn">
                    <span>SEND MESSAGE</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </button>

                  <p className="editorial-form-footnote">
                    Note: Frontend UI preview. Contact API submission will be activated in Phase 3.
                  </p>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
