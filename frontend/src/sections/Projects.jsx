import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import ScrollReveal from '../components/ScrollReveal/ScrollReveal';
import { portfolioData } from '../data/portfolio';

export default function Projects() {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState(null);

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
              <ProjectCard
                project={project}
                onOpenDetails={(p) => setSelectedProject(p)}
              />
            </ScrollReveal>
          ))}
        </div>

        {/* Lightweight Project Architecture Detail Modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}
