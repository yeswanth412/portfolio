import React from 'react';
import SectionHeading from '../components/SectionHeading';
import SkillGroup from '../components/SkillGroup';
import { skillsData } from '../data/skills';

export default function Skills() {
  return (
    <section id="skills" className="section skills-section" aria-label="Technical Skills">
      <div className="container">
        <SectionHeading
          tag="TECHNICAL SKILLS"
          title="Core stack & technical capabilities."
          description="Technologies and frameworks applied across production-oriented projects, data models, and automated services."
        />

        <div className="skills-grid">
          {skillsData.map((group) => (
            <SkillGroup
              key={group.category}
              category={group.category}
              description={group.description}
              skills={group.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
