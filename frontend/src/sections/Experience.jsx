import React from 'react';
import SectionHeading from '../components/SectionHeading';
import ExperienceCard from '../components/ExperienceCard';
import ScrollReveal from '../components/ScrollReveal/ScrollReveal';
import { portfolioData } from '../data/portfolio';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="section experience-section" aria-label="Engineering Experience">
      <div className="container">
        <ScrollReveal direction="up" delay={0}>
          <SectionHeading
            tag="EXPERIENCE & SYSTEMS"
            title="Engineering background."
            description="Verified background in backend development, API implementation, database modeling, and machine learning pipelines."
          />
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
