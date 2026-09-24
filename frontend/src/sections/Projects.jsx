import React from 'react';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import ScrollReveal from '../components/ScrollReveal/ScrollReveal';
import { portfolioData } from '../data/portfolio';

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="section projects-section" aria-label="Featured Projects">
      <div className="container">
        <ScrollReveal direction="up" delay={0}>
          <SectionHeading
            tag="PROJECTS"
            title="Featured engineering projects."
            description="Verified applications and backend services engineered around real-world requirements, database persistence, and API design."
          />
        </ScrollReveal>

        <div className="projects-grid">
          {projects.map((project, idx) => (
            <ScrollReveal
              key={project.id}
              direction="up"
              delay={idx * 80}
            >
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
