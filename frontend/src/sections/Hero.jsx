import React from 'react';
import Button from '../components/Button';
import InteractiveHeroVisual from '../components/InteractiveHeroVisual/InteractiveHeroVisual';
import { portfolioData } from '../data/portfolio';

export default function Hero() {
  const { name, fullName, title, subtitle, github } = portfolioData.personal;

  return (
    <section id="hero" className="hero-section" aria-label="Introduction">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge-wrap">
            <span className="badge-pill">
              <span className="badge-status-dot" />
              {title}
            </span>
            <span className="hero-identity-tag" title="Authoritative Full Name">
              {fullName}
            </span>
          </div>

          <h1 className="hero-title">
            <span className="hero-name">{name}</span>
            <span className="hero-role">{title}</span>
          </h1>

          <p className="hero-statement">{subtitle}</p>

          <p className="hero-description">
            Focused on robust API engineering with <strong className="text-highlight">Python</strong> and{' '}
            <strong className="text-highlight">FastAPI</strong>, relational data modeling with{' '}
            <strong className="text-highlight">PostgreSQL</strong> and <strong className="text-highlight">SQLAlchemy</strong>,
            and building practical <strong className="text-highlight">AI-powered applications</strong>.
          </p>

          <div className="hero-actions">
            <Button href="#projects" variant="primary" size="lg">
              View Projects
            </Button>
            <Button
              href={github}
              variant="outline"
              size="lg"
              ariaLabel="View Yeswanth's GitHub Profile"
            >
              GitHub
            </Button>
          </div>
        </div>

        {/* Dedicated container reserved for Phase 2 interactive visual */}
        <div className="hero-visual-wrapper">
          <InteractiveHeroVisual />
        </div>
      </div>
    </section>
  );
}
