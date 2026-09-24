import React from 'react';
import SocialLinks from '../components/SocialLinks';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-wrap" aria-label="Site Footer">
      <div className="container footer-container">
        <div className="footer-brand-col">
          <div className="footer-name">Yeswanth Uggina</div>
          <div className="footer-tagline">Python Backend Developer | AI</div>
          <p className="footer-subtext text-muted">
            Building robust backend services, scalable data models, and applied AI agents.
          </p>
        </div>

        <div className="footer-links-col">
          <div className="footer-col-title">Navigation</div>
          <ul className="footer-nav-list">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-social-col">
          <div className="footer-col-title">Connect</div>
          <SocialLinks showLabels className="footer-socials" />
          <button
            type="button"
            className="back-to-top-btn"
            onClick={handleScrollTop}
            aria-label="Scroll back to top of the page"
          >
            <span>&uarr; Back to top</span>
          </button>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <div className="container footer-bottom-container">
          <p className="footer-copyright">
            &copy; {currentYear} Yeswanth Uggina. All rights reserved.
          </p>
          <span className="footer-phase-badge">Phase 1 Portfolio MVP</span>
        </div>
      </div>
    </footer>
  );
}
