import React from 'react';
import ExperienceCard from '../components/ExperienceCard';
import ScrollReveal from '../components/ScrollReveal/ScrollReveal';
import { portfolioData } from '../data/portfolio';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="section experience-editorial-section" aria-label="Engineering Experience">
      <div className="container">
        <ScrollReveal direction="up" delay={0}>
          <div className="editorial-section-header">
            <span className="editorial-section-tag">04 / EXPERIENCE</span>
            <h2 className="editorial-section-title">Professional engineering background.</h2>
            <div className="editorial-header-divider" />
          </div>
        </ScrollReveal>

        <div className="timeline-wrapper">
          <div className="timeline-spine" aria-hidden="true" />
          
          <div className="timeline-entries">
            {experience.map((item, idx) => (
              <div key={idx} className="timeline-entry">
                <div className="timeline-marker" aria-hidden="true">
                  <span className="timeline-node-dot" />
                </div>
                <ScrollReveal
                  direction="up"
                  delay={idx * 120}
                  className="timeline-card-wrapper"
                >
                  <ExperienceCard experience={item} />
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
