import React from 'react';
import ScrollReveal from '../components/ScrollReveal/ScrollReveal';
import { portfolioData } from '../data/portfolio';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="section education-editorial-section" aria-label="Education Background">
      <div className="container">
        <ScrollReveal direction="up" delay={0}>
          <div className="editorial-section-header">
            <span className="editorial-section-tag">05 / EDUCATION</span>
            <h2 className="editorial-section-title">Academic background.</h2>
            <div className="editorial-header-divider" />
          </div>
        </ScrollReveal>

        <div className="education-grid">
          {education.map((item, idx) => (
            <ScrollReveal
              key={idx}
              direction="up"
              delay={idx * 80}
            >
              <div className="education-card card">
                <div className="edu-icon-wrap">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                </div>

                <div className="edu-details">
                  <h3 className="edu-degree">{item.degree}</h3>
                  <p className="edu-institution">{item.institution}</p>
                  {item.field && <p className="edu-field">{item.field}</p>}
                  {item.location && <p className="edu-location text-muted">{item.location}</p>}
                  {item.details && <p className="edu-description">{item.details}</p>}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
