import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { portfolioData } from '../data/portfolio';

export default function About() {
  const { heading, paragraphs } = portfolioData.about;

  return (
    <section id="about" className="section about-section" aria-label="About Yeswanth Uggina">
      <div className="container">
        <SectionHeading
          tag="ABOUT"
          title="Backend architecture & software engineering."
          description="A focused developer background centered on Python, clean API design, and practical AI applications."
        />

        <div className="about-content-card card">
          <h3 className="about-inner-heading">{heading}</h3>
          <div className="about-text-body">
            {paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          <div className="about-highlights-grid">
            <div className="about-pill">
              <span className="pill-dot" />
              <span>Modular API Architecture</span>
            </div>
            <div className="about-pill">
              <span className="pill-dot" />
              <span>Strict Schema Validation</span>
            </div>
            <div className="about-pill">
              <span className="pill-dot" />
              <span>Relational Schema Modeling</span>
            </div>
            <div className="about-pill">
              <span className="pill-dot" />
              <span>Applied LLM & RAG Integration</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
