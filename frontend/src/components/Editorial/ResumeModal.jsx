import React, { useState, useEffect } from 'react';
import yeswanthPortrait from '../../assets/portrait/yeswanth-latest-studio-portrait.png';
import { portfolioData } from '../../data/portfolio';

export default function ResumeModal({ isOpen, onClose }) {
  const [viewMode, setViewMode] = useState('interactive'); // 'interactive' | 'document'
  const { personal, skills, education, experience, certifications, projects } = portfolioData;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Yeswanth Uggina Resume"
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] bg-[#F5F3EC] text-[#141414] rounded-sm shadow-2xl border border-[#D8D4C8] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#D8D4C8] bg-[#EFECE3]">
          <div className="flex items-center gap-3">
            <span className="text-[#C86D51] font-bold">✳︎</span>
            <span className="font-mono text-xs font-bold tracking-widest uppercase text-[#141414]">
              CURRICULUM VITAE // YESWANTH UGGINA
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            {/* View Mode Switcher */}
            <div className="inline-flex rounded-full bg-white p-0.5 border border-[#D8D4C8]">
              <button
                type="button"
                onClick={() => setViewMode('interactive')}
                className={`px-3 py-1 rounded-full font-mono text-[10px] font-bold uppercase transition-all ${
                  viewMode === 'interactive'
                    ? 'bg-[#141414] text-white shadow-sm'
                    : 'text-[#66645E] hover:text-[#141414]'
                }`}
              >
                INTERACTIVE
              </button>
              <button
                type="button"
                onClick={() => setViewMode('document')}
                className={`px-3 py-1 rounded-full font-mono text-[10px] font-bold uppercase transition-all ${
                  viewMode === 'document'
                    ? 'bg-[#141414] text-white shadow-sm'
                    : 'text-[#66645E] hover:text-[#141414]'
                }`}
              >
                ORIGINAL PDF
              </button>
            </div>

            {/* Direct PDF Download Button */}
            <a
              href="/Yeswanth_Uggina_Resume.pdf"
              download="Yeswanth_Uggina_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#C86D51] hover:bg-[#B85D3E] text-white font-mono text-xs font-bold tracking-wider uppercase transition-colors shadow-sm"
              title="Download official PDF resume"
            >
              <span>PDF</span>
              <span>↓</span>
            </a>

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white hover:bg-[#141414] text-[#141414] hover:text-white border border-[#D8D4C8] flex items-center justify-center font-mono text-xs font-bold transition-colors cursor-pointer"
              aria-label="Close resume preview"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-8 bg-white">
          {viewMode === 'document' ? (
            /* Document Scan View */
            <div className="flex flex-col items-center">
              <div className="border border-[#D8D4C8] shadow-md max-w-2xl bg-white p-2">
                <img
                  src="/Yeswanth_Uggina_Resume.pdf.png"
                  alt="Yeswanth Uggina Official Resume Document"
                  className="w-full h-auto"
                />
              </div>
              <div className="mt-4">
                <a
                  href="/Yeswanth_Uggina_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-xs font-bold text-[#C86D51] hover:underline uppercase"
                >
                  <span>Open PDF in full browser window</span>
                  <span>↗</span>
                </a>
              </div>
            </div>
          ) : (
            /* Rich Editorial Resume View with User's Photo */
            <div className="max-w-3xl mx-auto space-y-8">
              {/* Header with Photo & Identity */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 border-b border-[#E7E4DC] pb-8">
                {/* Photo in Blazer */}
                <div className="w-28 h-36 sm:w-32 sm:h-40 flex-shrink-0 bg-[#F5F3EC] rounded-sm border border-[#E7E4DC] overflow-hidden p-1 shadow-sm">
                  <img
                    src={yeswanthPortrait}
                    alt="Yeswanth Uggina"
                    className="w-full h-full object-cover rounded-sm"
                  />
                </div>

                <div className="flex-1 text-center sm:text-left">
                  <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#141414] tracking-tight">
                    {personal.fullName}
                  </h2>
                  <p className="font-mono text-xs sm:text-sm font-bold tracking-widest text-[#C86D51] uppercase mt-1">
                    {personal.title}
                  </p>

                  <div className="mt-3 flex flex-wrap justify-center sm:justify-start gap-y-1 gap-x-4 font-mono text-xs text-[#55524B]">
                    <span>📍 {personal.location}</span>
                    <span>📞 {personal.phone || '+91-6304397552'}</span>
                    <a href={`mailto:${personal.email}`} className="text-[#C86D51] hover:underline">
                      ✉️ {personal.email}
                    </a>
                  </div>

                  <div className="mt-2 flex flex-wrap justify-center sm:justify-start gap-4 font-mono text-xs">
                    <a
                      href={personal.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#141414] hover:text-[#C86D51] font-bold"
                    >
                      GitHub Profile ↗
                    </a>
                    <a
                      href={personal.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#141414] hover:text-[#C86D51] font-bold"
                    >
                      LinkedIn Profile ↗
                    </a>
                  </div>
                </div>
              </div>

              {/* Professional Summary */}
              <div>
                <h3 className="font-mono text-xs font-bold tracking-[0.2em] text-[#C86D51] uppercase mb-2">
                  PROFESSIONAL SUMMARY
                </h3>
                <p className="font-sans text-sm text-[#3E3C36] leading-relaxed">
                  {personal.bio}
                </p>
              </div>

              {/* Technical Skills */}
              <div>
                <h3 className="font-mono text-xs font-bold tracking-[0.2em] text-[#C86D51] uppercase mb-3">
                  TECHNICAL SKILLS
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {skills.map((grp) => (
                    <div key={grp.category} className="p-3 bg-[#F5F3EC] border border-[#E7E4DC] rounded-sm">
                      <span className="font-mono font-bold text-[#141414] uppercase block mb-1">
                        {grp.category}:
                      </span>
                      <span className="font-sans text-[#55524B]">
                        {grp.skills.join(', ')}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Featured Resume Projects */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-mono text-xs font-bold tracking-[0.2em] text-[#C86D51] uppercase">
                    FEATURED PROJECTS // ACTIVE GITHUB SHOWCASE
                  </h3>
                  <span className="font-mono text-[10px] text-[#8C887B] uppercase">
                    SEE ORIGINAL PDF TAB FOR HISTORICAL RESUME LIST
                  </span>
                </div>
                <div className="space-y-4">
                  {projects.map((proj) => (
                    <div key={proj.id} className="p-4 border border-[#E7E4DC] rounded-sm">
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                        <h4 className="font-serif text-base font-bold text-[#141414]">
                          {proj.title} <span className="font-mono text-xs text-[#8C887B]">({proj.category})</span>
                        </h4>
                        <a
                          href={proj.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-xs text-[#C86D51] font-bold hover:underline"
                        >
                          Source Code ↗
                        </a>
                      </div>
                      <p className="font-sans text-xs sm:text-sm text-[#4A4740] leading-relaxed mb-2">
                        {proj.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {proj.technologies?.map((tech) => (
                          <span
                            key={tech}
                            className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-[#F5F3EC] border border-[#E7E4DC] text-[#141414]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Internship Experience */}
              {experience && experience.length > 0 && (
                <div>
                  <h3 className="font-mono text-xs font-bold tracking-[0.2em] text-[#C86D51] uppercase mb-3">
                    INTERNSHIP EXPERIENCE
                  </h3>
                  {experience.map((exp, idx) => (
                    <div key={idx} className="p-4 border border-[#E7E4DC] rounded-sm">
                      <div className="flex justify-between items-baseline mb-1">
                        <h4 className="font-serif text-base font-bold text-[#141414]">{exp.role}</h4>
                        <span className="font-mono text-xs text-[#8C887B]">{exp.period}</span>
                      </div>
                      <p className="font-sans text-xs font-semibold text-[#C86D51] mb-2">{exp.organization}</p>
                      <p className="font-sans text-xs text-[#4A4740] leading-relaxed mb-2">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {exp.technologies.map((t) => (
                          <span key={t} className="font-mono text-[10px] px-2 py-0.5 bg-[#F5F3EC] border border-[#E7E4DC] text-[#141414]">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Education */}
              <div>
                <h3 className="font-mono text-xs font-bold tracking-[0.2em] text-[#C86D51] uppercase mb-3">
                  EDUCATION
                </h3>
                <div className="space-y-3">
                  {education.map((item, idx) => (
                    <div key={idx} className="p-3 bg-[#F5F3EC] border border-[#E7E4DC] rounded-sm flex justify-between items-center">
                      <div>
                        <h4 className="font-serif text-sm font-bold text-[#141414]">{item.degree}</h4>
                        <p className="font-sans text-xs text-[#55524B]">{item.institution} — {item.location}</p>
                      </div>
                      <span className="font-mono text-xs font-bold text-[#C86D51] flex-shrink-0">
                        {item.period}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              {certifications && (
                <div>
                  <h3 className="font-mono text-xs font-bold tracking-[0.2em] text-[#C86D51] uppercase mb-2">
                    CERTIFICATIONS
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    {certifications.map((c, idx) => (
                      <div key={idx} className="p-3 border border-[#E7E4DC] rounded-sm">
                        <span className="font-serif font-bold text-[#141414] block mb-0.5">
                          • {c.name}
                        </span>
                        <span className="font-mono text-[10.5px] text-[#C86D51]">
                          {c.issuer}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Bottom Action Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-[#D8D4C8] bg-[#EFECE3] text-xs font-mono text-[#8C887B]">
          <span>UGGINA YESWANTH NARASAYYA NAIDU</span>
          <div className="flex items-center gap-4">
            <a
              href="/Yeswanth_Uggina_Resume.pdf"
              download="Yeswanth_Uggina_Resume.pdf"
              className="text-[#141414] hover:text-[#C86D51] font-bold"
            >
              DOWNLOAD PDF ↓
            </a>
            <button
              type="button"
              onClick={onClose}
              className="text-[#C86D51] hover:underline font-bold"
            >
              CLOSE ✕
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
