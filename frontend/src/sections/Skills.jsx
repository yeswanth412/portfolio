import React from 'react';
import ScrollReveal from '../components/ScrollReveal/ScrollReveal';
import { portfolioData } from '../data/portfolio';

export default function Skills() {
  const { skills } = portfolioData;

  // Flatten skills into a clean list with their category for editorial 2-column layout
  const flatSkills = [];
  skills.forEach((group) => {
    group.skills.forEach((skill) => {
      flatSkills.push({
        name: skill,
        category: group.category,
      });
    });
  });

  // Split into 2 balanced columns
  const half = Math.ceil(flatSkills.length / 2);
  const col1 = flatSkills.slice(0, half);
  const col2 = flatSkills.slice(half);

  return (
    <section id="skills" className="section skills-editorial-section" aria-label="Technical Skills">
      <div className="container">
        {/* Editorial Section Header */}
        <ScrollReveal direction="up" delay={0}>
          <div className="editorial-section-header">
            <span className="editorial-section-tag">02 / TECHNICAL SKILLS</span>
            <h2 className="editorial-section-title">Core capabilities & technologies.</h2>
            <div className="editorial-header-divider" />
          </div>
        </ScrollReveal>

        {/* Clean Two-Column Editorial List */}
        <div className="skills-editorial-columns">
          {/* Column 1 */}
          <div className="skills-editorial-column">
            {col1.map((item, idx) => (
              <ScrollReveal key={item.name} direction="up" delay={idx * 30}>
                <div className="skill-editorial-row">
                  <div className="skill-row-left">
                    <span className="skill-editorial-bullet" aria-hidden="true" />
                    <span className="skill-editorial-name">{item.name}</span>
                  </div>
                  <span className="skill-editorial-category">{item.category}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Column 2 */}
          <div className="skills-editorial-column">
            {col2.map((item, idx) => (
              <ScrollReveal key={item.name} direction="up" delay={idx * 30}>
                <div className="skill-editorial-row">
                  <div className="skill-row-left">
                    <span className="skill-editorial-bullet" aria-hidden="true" />
                    <span className="skill-editorial-name">{item.name}</span>
                  </div>
                  <span className="skill-editorial-category">{item.category}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
