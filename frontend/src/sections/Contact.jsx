import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import SocialLinks from '../components/SocialLinks';
import { socialsData } from '../data/socials';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(socialsData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="section contact-section" aria-label="Contact Yeswanth Uggina">
      <div className="container">
        <SectionHeading
          tag="GET IN TOUCH"
          title="Let's build something reliable together."
          description="Whether you have an engineering opportunity, a backend architecture discussion, or an AI project collaboration—my inbox is open."
        />

        <div className="contact-card card">
          <div className="contact-status-strip">
            <span className="status-indicator-dot" />
            <span>{socialsData.availability}</span>
          </div>

          <div className="contact-details-grid">
            <div className="contact-method">
              <span className="method-label">Direct Email</span>
              <div className="email-copy-row">
                <a href={`mailto:${socialsData.email}`} className="email-link">
                  {socialsData.email}
                </a>
                <button
                  type="button"
                  className="copy-badge-btn"
                  onClick={handleCopyEmail}
                  aria-label="Copy email address to clipboard"
                >
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>
            </div>

            <div className="contact-method">
              <span className="method-label">Professional Networks</span>
              <SocialLinks showLabels className="contact-social-pills" />
            </div>
          </div>

          <div className="contact-action-bar">
            <Button
              href={`mailto:${socialsData.email}?subject=Inquiry%20from%20Portfolio`}
              variant="primary"
              size="lg"
            >
              Send an Email
            </Button>
            <Button
              href={socialsData.linkedin}
              variant="outline"
              size="lg"
              ariaLabel="Connect on LinkedIn"
            >
              Connect on LinkedIn
            </Button>
          </div>

          <div className="contact-footnote">
            <p className="text-muted">
              Note: Automated interactive messaging & contact API integration will be introduced in an upcoming phase.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
