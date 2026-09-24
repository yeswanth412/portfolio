import React from 'react';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import { portfolioData } from '../data/portfolio';

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="section projects-section" aria-label="Featured Projects">
      <div className="container">
        <SectionHeading
          tag="PROJECTS"
          title="Featured engineering projects."
          description="Verified applications and backend services engineered around real-world requirements, database persistence, and API design."
        />

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
