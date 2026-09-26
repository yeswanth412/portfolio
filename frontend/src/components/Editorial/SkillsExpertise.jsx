import React from 'react';
import { portfolioData } from '../../data/portfolio';

export default function SkillsExpertise() {
  const { skills, capabilities, quote } = portfolioData;

  return (
    <section id="skills" className="w-full bg-[#F5F3EC] py-20 px-6 sm:px-12 md:px-16 border-b border-[#E7E4DC]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* COLUMN 1: Skills Categories (Editorial lines, NO fake percentages) */}
          <div className="lg:col-span-4">
            <span className="font-mono text-xs font-bold tracking-[0.2em] text-[#C86D51] uppercase block mb-1">
              03 // TECHNICAL TOOLKIT
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#141414] leading-tight mb-8">
              SKILLS &amp; <br />
              <span className="text-[#C86D51]">EXPERTISE</span>
            </h2>

            <div className="flex flex-col gap-6">
              {skills.map((group) => (
                <div key={group.category} className="flex flex-col gap-2">
                  <div className="flex justify-between items-center text-xs font-mono font-bold tracking-wider text-[#141414]">
                    <span>{group.category}</span>
                    <span className="text-[#C86D51] text-[10px]">●</span>
                  </div>
                  {/* Decorative editorial divider rule */}
                  <div className="w-full h-[1px] bg-[#E7E4DC]" />
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {group.skills.map((item) => (
                      <span
                        key={item}
                        className="font-mono text-xs text-[#55524B] bg-white border border-[#E7E4DC] px-2.5 py-1 rounded-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* COLUMN 2: Large Editorial Pull Quote */}
          <div className="lg:col-span-4 flex flex-col justify-center py-6 lg:py-12 border-y lg:border-y-0 lg:border-x border-[#E7E4DC] lg:px-8">
            <div className="text-[#C86D51] text-5xl sm:text-6xl font-serif leading-none select-none mb-4">
              “
            </div>
            <blockquote className="font-serif text-xl sm:text-2xl text-[#141414] font-semibold leading-relaxed mb-6">
              {quote}
            </blockquote>
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[#C86D51]" />
              <span className="font-mono text-xs font-bold tracking-widest uppercase text-[#8C887B]">
                YESWANTH UGGINA
              </span>
            </div>
          </div>

          {/* COLUMN 3: 4 Circular Feature Capability Badges */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <span className="font-mono text-xs font-bold tracking-[0.2em] text-[#8C887B] uppercase block">
              CORE CAPABILITIES
            </span>

            <div className="flex flex-col gap-6">
              {capabilities.map((cap) => (
                <div key={cap.id} className="flex items-start gap-4">
                  {/* Circular Terracotta Icon Badge */}
                  <div className="w-12 h-12 rounded-full bg-[#C86D51] flex-shrink-0 flex items-center justify-center text-white font-mono text-xs font-bold shadow-md">
                    {cap.id}
                  </div>
                  <div className="flex flex-col">
                    <h4 className="font-serif text-sm font-bold text-[#141414] uppercase tracking-wider mb-1">
                      {cap.title}
                    </h4>
                    <p className="font-sans text-xs sm:text-sm text-[#66645E] leading-relaxed">
                      {cap.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
