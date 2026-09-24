import React from 'react';
import SectionHeading from '../components/SectionHeading';
import SkillGroup from '../components/SkillGroup';
import { portfolioData } from '../data/portfolio';

export default function Skills() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="section skills-section" aria-label="Technical Skills">
      <div className="container">
        <SectionHeading
          tag="SKILLS"
          title="Technical skills & tooling."
          description="A concrete breakdown of programming languages, frameworks, persistence engines, and development tools."
        />

        <div className="skills-grid">
          {skills.map((group) => (
            <SkillGroup
              key={group.category}
              category={group.category}
              skills={group.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
