import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { experienceData } from '../data/experience';

export default function Experience() {
  return (
    <section id="experience" className="section experience-section" aria-label="Experience & Work History">
      <div className="container">
        <SectionHeading
          tag="PRACTICE & BACKGROUND"
          title="Engineering experience."
          description="Applied development focusing on software architecture, API reliability, database schema optimization, and AI tooling."
        />

        <div className="timeline-container">
          {experienceData.map((exp, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-marker">
                <span className="timeline-dot" />
              </div>
              <div className="timeline-content card">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-role">{exp.role}</h3>
                    <p className="timeline-org">{exp.organization} &bull; <span className="timeline-type">{exp.type}</span></p>
                  </div>
                  <span className="timeline-period-badge">{exp.period}</span>
                </div>

                <p className="timeline-summary">{exp.description}</p>

                <ul className="timeline-bullets">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx}>{bullet}</li>
                  ))}
                </ul>

                <div className="timeline-tech-tags">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
