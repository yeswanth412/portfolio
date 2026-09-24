import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import SkillGroup from '../components/SkillGroup';
import ScrollReveal from '../components/ScrollReveal/ScrollReveal';
import { portfolioData } from '../data/portfolio';

export default function Skills() {
  const { skills } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState('Backend');

  return (
    <section id="skills" className="section skills-section" aria-label="Technical Skills">
      <div className="container">
        <ScrollReveal direction="up" delay={0}>
          <SectionHeading
            tag="SKILLS & ARCHITECTURE"
            title="Technical capabilities & relationships."
            description="Organized technical domains reflecting backend development, relational persistence, applied AI, and engineering tooling."
          />
        </ScrollReveal>

        <div className="skills-grid">
          {skills.map((group, idx) => (
            <ScrollReveal
              key={group.category}
              direction="up"
              delay={idx * 75}
            >
              <SkillGroup
                category={group.category}
                skills={group.skills}
                isSelected={selectedCategory === group.category}
                onSelect={() => setSelectedCategory(group.category)}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
