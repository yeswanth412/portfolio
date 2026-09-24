import React from 'react';
import SectionHeading from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal/ScrollReveal';
import { portfolioData } from '../data/portfolio';

export default function About() {
  const { fullName, title } = portfolioData.personal;
  const { heading, paragraphs } = portfolioData.about;

  return (
    <section id="about" className="section about-section" aria-label="About Yeswanth Uggina">
      <div className="container">
        <ScrollReveal direction="up" delay={0}>
          <SectionHeading
            tag="ABOUT"
            title="Backend architecture & software engineering."
            description="A focused developer background centered on Python, clean API design, and practical AI applications."
          />
        </ScrollReveal>

        <ScrollReveal direction="up" delay={120}>
          <div className="about-layout-grid">
            {/* Authoritative Engineering Profile Card */}
            <div className="about-profile-card card">
              <div className="profile-card-badge">
                <span className="profile-dot" />
                <span>ENGINEERING IDENTITY</span>
              </div>
              <h3 className="profile-full-name">{fullName}</h3>
              <p className="profile-role">{title}</p>
              
              <div className="profile-meta-list">
                <div className="profile-meta-item">
                  <span className="meta-label">FOCUS</span>
                  <span className="meta-value">Backend Systems, REST APIs, Applied AI</span>
                </div>
                <div className="profile-meta-item">
                  <span className="meta-label">CORE STACK</span>
                  <span className="meta-value">Python, FastAPI, PostgreSQL, SQLAlchemy</span>
                </div>
                <div className="profile-meta-item">
                  <span className="meta-label">EDUCATION</span>
                  <span className="meta-value">B.Tech CSE, Gayatri Vidya Parishad College of Engineering</span>
                </div>
                <div className="profile-meta-item">
                  <span className="meta-label">LOCATION</span>
                  <span className="meta-value">India</span>
                </div>
              </div>
            </div>

            {/* Narrative & Engineering Pillars */}
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
        </ScrollReveal>
      </div>
    </section>
  );
}
