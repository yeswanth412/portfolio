import React from 'react';
import { portfolioData } from '../data/portfolio';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { name, title, github, linkedin } = portfolioData.personal;

  return (
    <footer className="footer-wrap" aria-label="Site Footer">
      <div className="container footer-container">
        <div className="footer-info">
          <p className="footer-name">{name}</p>
          <p className="footer-title">{title}</p>
        </div>

        <div className="footer-links">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
              aria-label="GitHub Profile"
            >
              GitHub
            </a>
          )}
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
              aria-label="LinkedIn Profile"
            >
              LinkedIn
            </a>
          )}
        </div>

        <div className="footer-copyright">
          <p>&copy; {currentYear} {name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
