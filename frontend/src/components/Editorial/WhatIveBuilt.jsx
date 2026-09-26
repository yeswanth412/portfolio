import React from 'react';
import { portfolioData } from '../../data/portfolio';

export default function WhatIveBuilt() {
  const { whatIveBuilt } = portfolioData;

  return (
    <section id="built" className="w-full bg-[#F5F3EC] py-20 px-6 sm:px-12 md:px-16 border-b border-[#E7E4DC]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="font-mono text-xs font-bold tracking-[0.2em] text-[#C86D51] uppercase block mb-1">
              04 // ENGINEERING FOCUS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#141414] leading-tight">
              WHAT I&apos;VE <span className="text-[#C86D51]">BUILT</span>
            </h2>
          </div>

          <p className="font-sans text-sm sm:text-base text-[#66645E] max-w-md leading-relaxed">
            Projects and systems that reflect my focus on practical software engineering and continuous learning.
          </p>
        </div>

        {/* 3 Capability Cards Grid (Preserving the 3-card editorial rhythm) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {whatIveBuilt.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-[#E7E4DC] p-8 rounded-sm flex flex-col justify-between hover:border-[#C86D51] hover:shadow-lg transition-all duration-300"
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="font-serif text-2xl font-bold text-[#C86D51]">
                    {item.id}
                  </span>
                  <span className="font-mono text-[10px] font-bold tracking-widest text-[#8C887B] uppercase">
                    PRACTICAL FOCUS
                  </span>
                </div>
                <h3 className="font-serif text-xl font-bold text-[#141414] mb-3">
                  {item.title}
                </h3>
                <p className="font-sans text-sm text-[#4A4740] leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E7E4DC]/80 flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-[#C86D51] tracking-wider uppercase">
                  ACTIVE EXPERTISE
                </span>
                <span className="text-[#141414] font-mono text-xs">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
