import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
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
    <section id="contact" className="section contact-section" aria-label="Contact Yeswanth Uggina">
      <div className="container">
        <ScrollReveal direction="up" delay={0}>
          <SectionHeading
            tag="CONTACT"
            title="Get in touch."
            description="Interested in discussing a backend engineering role, an API project, or an AI application? Reach out directly or send a message below."
          />
        </ScrollReveal>

        <div className="contact-grid">
          {/* Contact Direct Info */}
          <ScrollReveal direction="up" delay={80}>
            <div className="contact-info-col card">
              <h3 className="contact-col-title">Direct Contact</h3>
              <p className="contact-col-subtext">
                I am open to discussions regarding backend systems, API development, and software engineering opportunities.
              </p>

              <div className="contact-info-item">
                <span className="contact-label">Email</span>
                <div className="contact-email-row">
                  <a href={`mailto:${email}`} className="contact-value-link">
                    {email}
                  </a>
                  <button
                    type="button"
                    className="copy-btn"
                    onClick={handleCopyEmail}
                    aria-label="Copy email address"
                  >
                    {copied ? 'Copied' : 'Copy'}
                  </button>
                </div>
              </div>

              <div className="contact-info-item">
                <span className="contact-label">Location</span>
                <p className="contact-value-text">{location}</p>
              </div>

              <div className="contact-info-item">
                <span className="contact-label">Availability</span>
                <p className="contact-value-text text-accent">{availability}</p>
              </div>

              <div className="contact-info-item">
                <span className="contact-label">Profiles</span>
                <SocialLinks showLabels className="contact-socials-list" />
              </div>
            </div>
          </ScrollReveal>

          {/* Frontend Contact Form UI */}
          <ScrollReveal direction="up" delay={140}>
            <div className="contact-form-col card">
              <h3 className="contact-col-title">Send a Message</h3>

              {formSubmitted ? (
                <div className="form-success-banner" role="status">
                  <div className="success-icon">&#10003;</div>
                  <h4 className="success-title">Message Received (UI Preview)</h4>
                  <p className="success-message">
                    Thank you, <strong>{formData.name}</strong>. The backend contact API will be integrated in Phase 3. In the meantime, please feel free to email directly at{' '}
                    <a href={`mailto:${email}`} className="text-accent">
                      {email}
                    </a>.
                  </p>
                  <button
                    type="button"
                    className="btn btn-outline btn-sm mt-3"
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', message: '' });
                    }}
                  >
                    Reset Form
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form" noValidate>
                  <div className="form-group">
                    <label htmlFor="contact-name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                      required
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-message" className="form-label">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Briefly describe your inquiry, project scope, or opportunity..."
                      rows={5}
                      required
                      className="form-textarea"
                    />
                  </div>

                  <button type="submit" className="btn btn-primary btn-md submit-btn">
                    Submit
                  </button>

                  <p className="form-footnote text-muted">
                    Phase 1 note: This form is currently frontend-only. Backend database submission will be enabled in Phase 3.
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
