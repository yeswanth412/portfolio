import React from 'react';
import { portfolioData } from '../../data/portfolio';

export default function AboutEducation() {
  const { about, education, experience, certifications } = portfolioData;

  return (
    <section id="about" className="w-full bg-[#F5F3EC] py-20 px-6 sm:px-12 md:px-16 border-b border-[#E7E4DC]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* LEFT: Section Header */}
          <div className="lg:col-span-4">
            <span className="font-mono text-xs font-bold tracking-[0.2em] text-[#C86D51] uppercase block mb-1">
              01 // BACKGROUND
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#141414] leading-tight">
              ABOUT &amp; <br />
              <span className="text-[#C86D51]">EDUCATION</span>
            </h2>
          </div>

          {/* RIGHT: About Details, Experience, Education & Certifications */}
          <div className="lg:col-span-8 flex flex-col gap-10">
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#141414] leading-snug mb-4">
                {about.heading}
              </h3>
              <div className="flex flex-col gap-4 text-sm sm:text-base text-[#4A4740] leading-relaxed">
                {about.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>

            {/* Practical Internship */}
            {experience && experience.length > 0 && (
              <div className="pt-6 border-t border-[#E7E4DC]">
                <span className="font-mono text-[11px] font-bold tracking-widest text-[#8C887B] uppercase block mb-3">
                  INTERNSHIP EXPERIENCE
                </span>
                {experience.map((exp, idx) => (
                  <div key={idx} className="bg-white border border-[#E7E4DC] p-6 rounded-sm flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                    <div>
                      <h4 className="font-serif text-lg font-bold text-[#141414]">{exp.role}</h4>
                      <p className="font-sans text-sm text-[#C86D51] font-semibold">{exp.organization}</p>
                      <p className="font-sans text-xs sm:text-sm text-[#55524B] mt-2 leading-relaxed">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {exp.technologies.map((t) => (
                          <span key={t} className="px-2 py-0.5 rounded-full bg-[#F5F3EC] border border-[#E7E4DC] font-mono text-[10px] text-[#141414]">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="sm:text-right flex-shrink-0">
                      <span className="font-mono text-xs text-[#8C887B] font-semibold block">
                        {exp.period}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Academic Education */}
            <div id="education" className="pt-6 border-t border-[#E7E4DC]">
              <span className="font-mono text-[11px] font-bold tracking-widest text-[#8C887B] uppercase block mb-3">
                EDUCATION CREDENTIALS
              </span>

              <div className="flex flex-col gap-4">
                {education.map((item, idx) => (
                  <div key={idx} className="bg-white border border-[#E7E4DC] p-6 rounded-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h4 className="font-serif text-base sm:text-lg font-bold text-[#141414]">{item.degree}</h4>
                      <p className="font-sans text-sm text-[#C86D51] font-medium">{item.institution}</p>
                      <p className="font-mono text-xs text-[#8C887B] mt-1">{item.location}</p>
                    </div>
                    <div className="sm:text-right flex-shrink-0">
                      <span className="inline-block px-3 py-1 rounded-full bg-[#F5F3EC] border border-[#E7E4DC] font-mono text-[11px] font-bold text-[#141414] tracking-wider uppercase">
                        {item.period}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            {certifications && (
              <div className="pt-6 border-t border-[#E7E4DC]">
                <span className="font-mono text-[11px] font-bold tracking-widest text-[#8C887B] uppercase block mb-3">
                  VERIFIED CERTIFICATIONS
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {certifications.map((cert, idx) => (
                    <div key={idx} className="bg-white border border-[#E7E4DC] p-4 rounded-sm flex flex-col justify-between">
                      <h5 className="font-serif text-sm font-bold text-[#141414] mb-1">
                        {cert.name}
                      </h5>
                      <span className="font-mono text-[11px] text-[#C86D51]">
                        {cert.issuer}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
