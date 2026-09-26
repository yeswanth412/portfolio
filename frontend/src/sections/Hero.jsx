import React, { useRef, useEffect } from 'react';
import './Hero.css';
import InteractiveCursorVideo from '../components/InteractiveCursorVideo/InteractiveCursorVideo';
import CursorReactiveEnvironment from '../components/CursorReactiveEnvironment/CursorReactiveEnvironment';
import { portfolioData } from '../data/portfolio';

/**
 * Hero Section — Dribbble (Dymas Alfin) Editorial Style
 * Features full-width authoritative typography, cursor-reactive AI video, and particle background.
 */
export default function Hero() {
  const { github, linkedin, email, resumeUrl } = portfolioData.personal;
  const pointerCoordsRef = useRef({ x: 0, y: 0, normX: 0.5, normY: 0.5 });

  useEffect(() => {
    const handleMove = (e) => {
      pointerCoordsRef.current = {
        x: e.clientX,
        y: e.clientY,
        normX: e.clientX / window.innerWidth,
        normY: e.clientY / window.innerHeight,
      };
    };
    window.addEventListener('mousemove', handleMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToContact = (e) => {
    e.preventDefault();
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="dymas-hero-stage" aria-label="Yeswanth Uggina — Introduction">
      {/* Background Technical Grid & Particle Field */}
      <div className="dymas-hero-bg-lines" aria-hidden="true">
        <CursorReactiveEnvironment pointerCoordsRef={pointerCoordsRef} />
        <div className="dymas-bg-line horizontal" />
        <div className="dymas-bg-line vertical" />
      </div>

      <div className="dymas-hero-container">
        {/* Top Status & Role Bar */}
        <div className="dymas-hero-topbar">
          <div className="dymas-status-pill">
            <span className="dymas-status-dot" />
            <span className="dymas-status-text">AVAILABLE FOR ROLES // VISAKHAPATNAM & REMOTE</span>
          </div>

          <div className="dymas-meta-tag">
            <span>PYTHON DEVELOPER & SYSTEMS ARCHITECT</span>
          </div>
        </div>

        {/* Master Editorial Headline */}
        <div className="dymas-headline-wrap">
          <div className="dymas-kicker-row">
            <span className="dymas-kicker-name">YESWANTH UGGINA</span>
            <span className="dymas-kicker-sep">/</span>
            <span className="dymas-kicker-role">PORTFOLIO 2024</span>
          </div>

          <h1 className="dymas-master-headline">
            <span className="dymas-head-line-1">ARCHITECTING SCALABLE</span>
            <span className="dymas-head-line-2">
              BACKENDS <span className="dymas-head-amp">&</span> APPLIED AI.
            </span>
          </h1>
        </div>

        {/* Main Content Split: Narrative & Actions on Left, Framed Portrait on Right */}
        <div className="dymas-hero-body-grid">
          {/* Left Column: Narrative, Actions, and Metrics */}
          <div className="dymas-hero-narrative-col">
            <p className="dymas-bio-lead">
              I build resilient backend microservices, high-throughput database systems, and
              production-ready AI/RAG workflows using Python, FastAPI, and SQL. Dedicated to clean
              software architecture, low-latency execution, and measurable business impact.
            </p>

            {/* Action Buttons Row */}
            <div className="dymas-cta-group">
              <a
                href="#projects"
                onClick={handleScrollToProjects}
                className="dymas-btn-primary"
                aria-label="View Selected Projects"
              >
                <span>EXPLORE WORK</span>
                <span className="dymas-btn-arrow">→</span>
              </a>

              <a
                href={resumeUrl || '#contact'}
                className="dymas-btn-secondary"
                aria-label="Download Resume"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                </svg>
                <span>RESUME</span>
              </a>

              <a
                href="#contact"
                onClick={handleScrollToContact}
                className="dymas-btn-ghost"
                aria-label="Contact Yeswanth"
              >
                <span>LET’S TALK</span>
                <span className="dymas-btn-arrow">↗</span>
              </a>
            </div>

            {/* Metrics Bar */}
            <div className="dymas-metrics-strip">
              <div className="dymas-metric-tile">
                <span className="dymas-metric-num">01</span>
                <div className="dymas-metric-info">
                  <span className="dymas-metric-title">FASTAPI & PYTHON</span>
                  <span className="dymas-metric-sub">Distributed Microservices</span>
                </div>
              </div>

              <div className="dymas-metric-tile">
                <span className="dymas-metric-num">02</span>
                <div className="dymas-metric-info">
                  <span className="dymas-metric-title">SQL & DATABASES</span>
                  <span className="dymas-metric-sub">PostgreSQL & MongoDB</span>
                </div>
              </div>

              <div className="dymas-metric-tile">
                <span className="dymas-metric-num">03</span>
                <div className="dymas-metric-info">
                  <span className="dymas-metric-title">APPLIED AI & RAG</span>
                  <span className="dymas-metric-sub">Vector Search & LLMs</span>
                </div>
              </div>

              <div className="dymas-metric-tile">
                <span className="dymas-metric-num">04</span>
                <div className="dymas-metric-info">
                  <span className="dymas-metric-title">GVPCE COLLEGE</span>
                  <span className="dymas-metric-sub">B.Tech Computer Science</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Cursor-Reactive AI Video Portrait */}
          <div className="dymas-hero-portrait-col">
            <InteractiveCursorVideo />
          </div>
        </div>

        {/* Hero Bottom Social & Scroll Strip */}
        <div className="dymas-hero-bottom-strip">
          <div className="dymas-social-row">
            {github && (
              <a href={github} target="_blank" rel="noopener noreferrer" className="dymas-social-link">
                <span>GITHUB</span>
                <span className="dymas-link-arrow">↗</span>
              </a>
            )}
            <span className="dymas-social-dot">/</span>
            {linkedin && (
              <a href={linkedin} target="_blank" rel="noopener noreferrer" className="dymas-social-link">
                <span>LINKEDIN</span>
                <span className="dymas-link-arrow">↗</span>
              </a>
            )}
            <span className="dymas-social-dot">/</span>
            <a href={`mailto:${email}`} className="dymas-social-link">
              <span>{email}</span>
              <span className="dymas-link-arrow">↗</span>
            </a>
          </div>

          <div className="dymas-scroll-indicator" onClick={handleScrollToProjects} role="button" tabIndex={0}>
            <span>SCROLL TO EXPLORE</span>
            <span className="dymas-scroll-arrow">↓</span>
          </div>
        </div>
      </div>
    </section>
  );
}
