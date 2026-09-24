import React from 'react';
import Button from '../components/Button';
import SocialLinks from '../components/SocialLinks';
import InteractiveHeroVisual from './InteractiveHeroVisual';
import { socialsData } from '../data/socials';

export default function Hero({ onOpenResume }) {
  return (
    <section id="hero" className="hero-section" aria-label="Introduction">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge-wrap">
            <span className="badge-pill">
              <span className="badge-status-dot" />
              Python Backend & AI Systems
            </span>
          </div>

          <h1 className="hero-title">
            <span className="hero-name">YESWANTH UGGINA</span>
            <span className="hero-role">Python Backend Developer</span>
          </h1>

          <p className="hero-statement">
            Building backend systems and AI-powered applications.
          </p>

          <p className="hero-description">
            Focused on robust API engineering with <strong className="text-highlight">Python</strong> and{' '}
            <strong className="text-highlight">FastAPI</strong>, relational data modeling in{' '}
            <strong className="text-highlight">PostgreSQL</strong>, scalable <strong className="text-highlight">REST APIs</strong>,
            and practical <strong className="text-highlight">AI</strong> integration.
          </p>

          <div className="hero-actions">
            <Button href="#projects" variant="primary" size="lg">
              View Projects
            </Button>
            <Button
              href={socialsData.github}
              variant="outline"
              size="lg"
              ariaLabel="View Yeswanth's GitHub Profile"
            >
              GitHub
            </Button>
            <Button
              onClick={onOpenResume}
              variant="text"
              size="lg"
              className="hero-resume-link"
            >
              Resume &rarr;
            </Button>
          </div>

          <div className="hero-social-strip">
            <span className="strip-label">Connect:</span>
            <SocialLinks />
          </div>
        </div>

        {/* Dedicated container for interactive visual (Phase 1 placeholder, Phase 2 WebGL/Three.js mount) */}
        <div className="hero-visual-wrapper">
          <InteractiveHeroVisual />
        </div>
      </div>
    </section>
  );
}
