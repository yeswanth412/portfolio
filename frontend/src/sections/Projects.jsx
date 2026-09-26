import React, { useState } from 'react';
import ProjectModal from '../components/ProjectModal';
import ScrollReveal from '../components/ScrollReveal/ScrollReveal';
import { portfolioData } from '../data/portfolio';

export default function Projects() {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="section projects-editorial-section" aria-label="Featured Projects">
      <div className="container">
        {/* Editorial Section Header */}
        <ScrollReveal direction="up" delay={0}>
          <div className="editorial-section-header">
            <span className="editorial-section-tag">03 / FEATURED PROJECTS</span>
            <h2 className="editorial-section-title">Verified systems & engineering works.</h2>
            <div className="editorial-header-divider" />
          </div>
        </ScrollReveal>

        {/* Editorial Structured Projects List */}
        <div className="projects-editorial-list">
          {projects.map((project, idx) => (
            <ScrollReveal
              key={project.id}
              direction="up"
              delay={idx * 70}
            >
              <article className="project-editorial-entry">
                <div className="project-editorial-meta-row">
                  <div className="project-index-badge">
                    <span className="index-num">0{idx + 1}</span>
                    <span className="index-slash">/</span>
                    <span className="project-editorial-cat">{project.category || 'SYSTEMS ARCHITECTURE'}</span>
                  </div>
                  <span className="project-featured-tag">VERIFIED</span>
                </div>

                <div className="project-editorial-main">
                  <div className="project-editorial-info">
                    <h3 className="project-editorial-title">
                      <button
                        type="button"
                        className="project-title-btn"
                        onClick={() => setSelectedProject(project)}
                        aria-label={`Open details for ${project.title}`}
                      >
                        <span className="project-title-text">{project.title}</span>
                        <span className="project-title-arrow" aria-hidden="true">↗</span>
                      </button>
                    </h3>

                    <p className="project-editorial-desc">{project.description}</p>

                    {project.technologies && project.technologies.length > 0 && (
                      <div className="project-editorial-techs">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="editorial-tech-tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="project-editorial-actions">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="editorial-action-btn primary"
                      aria-label={`View architecture details for ${project.title}`}
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="16" x2="12" y2="12" />
                        <line x1="12" y1="8" x2="12.01" y2="8" />
                      </svg>
                      <span>DETAILS</span>
                    </button>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="editorial-action-btn outline"
                        aria-label={`View ${project.title} source code on GitHub`}
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                          <path d="M9 18c-4.51 2-5-2-7-2" />
                        </svg>
                        <span>CODE</span>
                      </a>
                    )}

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="editorial-action-btn outline"
                        aria-label={`View live demo of ${project.title}`}
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                        <span>DEMO</span>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {/* Accessible Detail Modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}
