import React from 'react';
import SectionHeading from '../components/SectionHeading';
import ExperienceCard from '../components/ExperienceCard';
import { portfolioData } from '../data/portfolio';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="section experience-section" aria-label="Engineering Experience">
      <div className="container">
        <SectionHeading
          tag="EXPERIENCE"
          title="Engineering background."
          description="Verified background in backend development, API implementation, database modeling, and machine learning pipelines."
        />

        <div className="experience-list">
          {experience.map((item, idx) => (
            <ExperienceCard key={idx} experience={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
