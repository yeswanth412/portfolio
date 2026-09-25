import React, { useRef } from 'react';
import Button from '../components/Button';
import CharacterVisual from '../components/CharacterVisual/CharacterVisual';
import useCinematicScroll from '../hooks/useCinematicScroll';
import { portfolioData } from '../data/portfolio';

/**
 * Hero Section — Phase 2D Interactive Character Experience
 * Features:
 * - Central stylized 3D human character representing Yeswanth with cursor gaze tracking
 * - Immersive centered composition with balanced, restrained typography
 * - Authoritative identity: UGGINA YESWANTH NARASAYYA NAIDU
 * - Prominent readable display name: Yeswanth Uggina
 * - Role: Python Developer
 * - Apple-inspired cinematic scroll transition into downstream portfolio content
 * - "Scroll to explore" indicator
 */
export default function Hero() {
  const heroRef = useRef(null);
  const { name, fullName, title, subtitle, github } = portfolioData.personal;

  // Connect cinematic scroll transition hook
  useCinematicScroll(heroRef);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="hero-section hero-cinematic-section"
      aria-label="Interactive Introduction"
    >
      <div className="hero-cinematic-stage">
        {/* Top Identity & Role Metadata */}
        <div className="hero-top-meta">
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
          </h1>

          <p className="hero-statement">{subtitle}</p>
        </div>

        {/* Central 3D Interactive Character */}
        <div className="hero-character-stage">
          <CharacterVisual />
        </div>

        {/* Lower Supporting Content & Actions */}
        <div className="hero-bottom-content">
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
            <Button href="#contact" variant="outline" size="lg">
              Contact
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#about"
          className="hero-scroll-indicator"
          aria-label="Scroll to About section"
          onClick={(e) => {
            e.preventDefault();
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
              aboutSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          <span className="scroll-indicator-text">Scroll to explore</span>
          <svg
            className="scroll-indicator-chevron"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </a>
      </div>
    </section>
  );
}
