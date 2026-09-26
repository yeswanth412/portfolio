import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolio';
import ProjectModal from '../ProjectModal';

export default function SelectedProjects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const { projects, personal } = portfolioData;

  return (
    <section id="projects" className="w-full bg-[#F5F3EC] py-20 px-6 sm:px-12 md:px-16 border-b border-[#E7E4DC]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="font-mono text-xs font-bold tracking-[0.2em] text-[#C86D51] uppercase block mb-1">
              02 // SHOWCASE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#141414] leading-tight">
              SELECTED <span className="text-[#C86D51]">PROJECTS</span>
            </h2>
          </div>

          <p className="font-sans text-sm sm:text-base text-[#66645E] max-w-md leading-relaxed">
            A curated selection of projects focused on backend systems, applications, databases, and practical problem-solving.
          </p>

          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 font-mono text-xs font-bold tracking-widest uppercase text-[#141414] hover:text-[#C86D51] transition-colors self-start md:self-end"
          >
            <span>VIEW ALL PROJECTS</span>
            <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
          </a>
        </div>

        {/* 4-Card Horizontal Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <article
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer flex flex-col bg-white border border-[#E7E4DC] rounded-sm p-4 hover:border-[#C86D51] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Project Card Editorial Visual */}
              <div className="w-full h-56 bg-[#202022] rounded-sm overflow-hidden relative mb-4 flex flex-col justify-between p-5 border border-[#303034]">
                <div className="flex justify-between items-center text-[10px] font-mono text-[#D4D4D8]">
                  <span className="tracking-widest uppercase text-[#C86D51] font-bold">PROJECT // {project.number}</span>
                  <span className="px-2 py-0.5 rounded-full bg-white/10 text-white font-mono text-[9px] tracking-wider">VERIFIED</span>
                </div>

                <div className="text-white z-10">
                  <span className="font-mono text-[11px] text-[#C86D51] font-bold block mb-1 tracking-wider uppercase">
                    {project.category}
                  </span>
                  <h4 className="font-serif text-lg font-bold leading-tight group-hover:text-[#C86D51] transition-colors">
                    {project.title}
                  </h4>
                </div>

                <div className="flex flex-wrap gap-1.5 z-10">
                  {project.technologies?.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-[9.5px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-[#E4E4E7]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Subtle background number watermark */}
                <div className="absolute right-2 bottom-1 text-7xl font-display text-white/5 pointer-events-none select-none font-bold">
                  {project.number}
                </div>
              </div>

              {/* Card Meta Footer */}
              <div className="flex items-start gap-3 mt-1">
                <span className="font-serif text-2xl font-bold text-[#C86D51]">
                  {project.number}
                </span>
                <div className="flex flex-col">
                  <h3 className="font-serif text-base font-bold text-[#141414] group-hover:text-[#C86D51] transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <span className="font-mono text-xs text-[#8C887B]">
                    {project.category}
                  </span>
                  <p className="font-sans text-xs text-[#55524B] mt-2 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
