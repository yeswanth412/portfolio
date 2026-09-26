import React from 'react';
import './About.css';
import ScrollReveal from '../components/ScrollReveal/ScrollReveal';

/**
 * About Section — Phase 3 Editorial Design & Implementation
 * Follows the visual reference system established by the Home page:
 * - Warm studio ivory canvas (#f3f2ee)
 * - Heavy editorial typography and restrained red accents
 * - Two-column layout: Narrative & Education (Left) | Engineering Profile (Right)
 * - Factual, non-inflated context using central portfolioData
 */
export default function About() {
  return (
    <section id="about" className="about-editorial-section" aria-label="About Yeswanth Uggina">
      {/* Background Subtle Architectural Calibration Grid */}
      <div className="about-tech-backdrop" aria-hidden="true">
        <svg className="about-backdrop-svg" viewBox="0 0 1600 800" fill="none">
          <circle cx="1350" cy="400" r="300" stroke="rgba(225, 29, 72, 0.08)" strokeWidth="1" strokeDasharray="4 6" />
          <circle cx="1350" cy="400" r="180" stroke="rgba(9, 9, 11, 0.03)" strokeWidth="1" />
          <line x1="120" y1="200" x2="1480" y2="200" stroke="rgba(9, 9, 11, 0.04)" strokeWidth="1" strokeDasharray="2 8" />
          <line x1="120" y1="600" x2="1480" y2="600" stroke="rgba(9, 9, 11, 0.04)" strokeWidth="1" strokeDasharray="2 8" />
          <line x1="500" y1="50" x2="500" y2="750" stroke="rgba(9, 9, 11, 0.03)" strokeWidth="1" />
          <circle cx="500" cy="200" r="2.5" fill="#e11d48" />
          <circle cx="500" cy="600" r="2.5" fill="#e11d48" />
        </svg>
      </div>

      <div className="about-container">
        {/* Top Kicker Bar */}
        <ScrollReveal direction="up" delay={0}>
          <div className="about-top-kicker">
            <div className="about-kicker-left">
              <span className="about-red-dot">●</span>
              <span>ABOUT</span>
            </div>
            <div className="about-kicker-right">
              <span className="about-kicker-cross">+</span>
              <span>LAT 17.72° N · LONG 83.30° E</span>
              <span>//</span>
              <span>PROFILE.02</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Two-Column Editorial Grid */}
        <div className="about-editorial-grid">
          {/* LEFT COLUMN: Main Heading, Introduction Narrative & Education */}
          <ScrollReveal direction="up" delay={60} className="about-col-left">
            <h2 className="about-main-heading">
              <span className="about-heading-line">A DEVELOPER WHO BUILDS</span>
              <span className="about-heading-line about-heading-accent">WITH PYTHON</span>
            </h2>

            <p className="about-lead-intro">
              "I build practical applications, APIs, and AI-oriented solutions with Python."
            </p>

            <p className="about-body-text">
              With a solid foundation in Computer Science and Engineering from Gayatri Vidya Parishad College of Engineering, I specialize in architecting reliable backend services, designing scalable REST APIs, and modeling relational databases with Python, FastAPI, and PostgreSQL.
            </p>

            <p className="about-body-text">
              My engineering approach prioritizes robust request validation, maintainable database schemas, clean business logic, and predictable system behavior. I also explore applied Artificial Intelligence—integrating machine learning pipelines, LLM capabilities, and Retrieval-Augmented Generation (RAG) concepts into production-oriented applications.
            </p>

            {/* Compact Factual Education Block */}
            <div className="about-edu-card">
              <div className="about-edu-tag">
                <span className="about-edu-bullet">■</span>
                <span>EDUCATION // ACADEMIC FOUNDATION</span>
              </div>
              <h3 className="about-edu-degree">B.Tech — Computer Science & Engineering</h3>
              <p className="about-edu-institution">Gayatri Vidya Parishad College of Engineering</p>
              <p className="about-edu-location">Visakhapatnam, Andhra Pradesh</p>
            </div>
          </ScrollReveal>

          {/* RIGHT COLUMN: Engineering Profile Specification Panel */}
          <ScrollReveal direction="up" delay={120} className="about-col-right">
            <div className="eng-profile-panel" role="region" aria-label="Engineering Profile Specifications">
              <div className="eng-profile-header">
                <div className="eng-profile-kicker">
                  <span className="eng-profile-dot">●</span>
                  <span>ENGINEERING PROFILE</span>
                </div>
                <span className="eng-profile-spec-id">SPEC // 01</span>
              </div>

              <div className="eng-profile-specs">
                <div className="eng-spec-row">
                  <span className="eng-spec-num">01</span>
                  <span className="eng-spec-name">PYTHON</span>
                  <span className="eng-spec-role">Core Systems & Logic</span>
                </div>

                <div className="eng-spec-row">
                  <span className="eng-spec-num">02</span>
                  <span className="eng-spec-name">FASTAPI</span>
                  <span className="eng-spec-role">High-Performance REST APIs</span>
                </div>

                <div className="eng-spec-row">
                  <span className="eng-spec-num">03</span>
                  <span className="eng-spec-name">SQL / DATABASES</span>
                  <span className="eng-spec-role">Relational Modeling & Queries</span>
                </div>

                <div className="eng-spec-row">
                  <span className="eng-spec-num">04</span>
                  <span className="eng-spec-name">POSTGRESQL</span>
                  <span className="eng-spec-role">Primary Relational Engine</span>
                </div>

                <div className="eng-spec-row">
                  <span className="eng-spec-num">05</span>
                  <span className="eng-spec-name">REST APIs</span>
                  <span className="eng-spec-role">Modular Routing & Schemas</span>
                </div>

                <div className="eng-spec-row">
                  <span className="eng-spec-num">06</span>
                  <span className="eng-spec-name">AI / ML</span>
                  <span className="eng-spec-role">Applied ML Workflows</span>
                </div>

                <div className="eng-spec-row">
                  <span className="eng-spec-num">07</span>
                  <span className="eng-spec-name">LLM / RAG</span>
                  <span className="eng-spec-role">Context Retrieval & GenAI</span>
                </div>
              </div>

              <div className="eng-profile-footer" aria-hidden="true">
                <span className="eng-footer-cross">+</span>
                <span className="eng-footer-line" />
                <span className="eng-footer-meta">FASTAPI · SQL · AI</span>
                <span className="eng-footer-cross">+</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
