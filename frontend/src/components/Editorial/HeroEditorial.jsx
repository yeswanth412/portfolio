import React, { useState, useEffect } from 'react';
import yeswanthPortrait from '../../assets/portrait/yeswanth-latest-studio-portrait.png';
import { portfolioData } from '../../data/portfolio';

export default function HeroEditorial({ onOpenResume }) {
  const [cursorPos, setCursorPos] = useState({ normX: 0.5, normY: 0.5 });
  const { personal } = portfolioData;

  // Subtle mouse tracking for gentle editorial perspective movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      const normX = e.clientX / window.innerWidth;
      const normY = e.clientY / window.innerHeight;
      setCursorPos({ normX, normY });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Subtle, refined tilt values (gentle editorial motion)
  const tiltY = (cursorPos.normX - 0.5) * 8;
  const tiltX = -(cursorPos.normY - 0.5) * 6;

  return (
    <section className="relative w-full min-h-screen bg-[#F5F3EC] text-[#141414] overflow-hidden pt-6 pb-0 px-6 sm:px-12 md:px-16 border-b border-[#E7E4DC] flex flex-col justify-between">
      {/* 1. TOP HEADER & MINIMAL EDITORIAL NAVIGATION */}
      <header className="w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center py-4 border-b border-[#E7E4DC]/80 gap-4">
        {/* Left: Brand Mark & Title */}
        <div className="flex items-center gap-2">
          <span className="text-[#C86D51] text-lg font-bold">✳︎</span>
          <span className="font-mono text-xs font-bold tracking-widest uppercase text-[#141414]">
            PYTHON DEVELOPER
          </span>
        </div>

        {/* Center: Minimal Editorial Nav */}
        <nav className="flex items-center gap-6 sm:gap-8 font-mono text-xs font-bold tracking-widest uppercase text-[#55524B]">
          <a href="#about" className="hover:text-[#C86D51] transition-colors">ABOUT</a>
          <a href="#skills" className="hover:text-[#C86D51] transition-colors">SKILLS</a>
          <a href="#projects" className="hover:text-[#C86D51] transition-colors">PROJECTS</a>
          <a href="#built" className="hover:text-[#C86D51] transition-colors">CAPABILITIES</a>
          <a href="#contact" className="hover:text-[#C86D51] transition-colors">CONTACT</a>
        </nav>

        {/* Right: Availability Link */}
        <a
          href="#contact"
          className="group inline-flex items-center gap-2 font-mono text-xs font-bold tracking-widest uppercase text-[#141414] hover:text-[#C86D51] transition-colors"
        >
          <span>AVAILABLE FOR OPPORTUNITIES</span>
          <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
        </a>
      </header>

      {/* 2. SIDE VERTICAL TECHNICAL LABELS (Desktop) */}
      <div className="hidden xl:block absolute left-8 top-1/2 -translate-y-1/2 -rotate-90 origin-left text-[11px] font-mono tracking-[0.24em] text-[#8C887B] uppercase select-none pointer-events-none">
        PYTHON DEVELOPER — REST APIS — SQL &amp; DATA
      </div>
      <div className="hidden xl:block absolute right-8 top-1/2 -translate-y-1/2 rotate-90 origin-right text-[11px] font-mono tracking-[0.24em] text-[#8C887B] uppercase select-none pointer-events-none">
        MACHINE LEARNING — CLEAN CODE — PRACTICAL APIS
      </div>

      {/* 3. MAIN HERO STAGE */}
      <div className="w-full max-w-7xl mx-auto relative mt-4 md:mt-6 flex-1 flex flex-col justify-end">
        {/* Giant "YESWANTH" Backdrop Title */}
        <div className="w-full text-center select-none pointer-events-none relative z-0">
          <h1 className="font-display text-[clamp(2.25rem,10vw,4.5rem)] md:text-[clamp(4.5rem,8.5vw,6.5rem)] lg:text-[clamp(6.5rem,10vw,9.5rem)] xl:text-[clamp(10rem,12.5vw,13.5rem)] 2xl:text-[clamp(12rem,14vw,14rem)] leading-[0.88] tracking-[-0.02em] text-[#141414] uppercase">
            YESWANTH
          </h1>
        </div>

        {/* Hero Editorial Split Content */}
        <div className="relative mt-4 sm:mt-6 md:mt-0 lg:mt-[-2.5rem] xl:mt-[-4.5rem] 2xl:mt-[-6.5rem] grid grid-cols-1 md:grid-cols-12 items-end gap-8">
          {/* LEFT COLUMN: Identity Block */}
          <div className="md:col-span-5 relative z-10 flex flex-col justify-end pt-2 md:pt-4 lg:pt-6 xl:pt-8 pb-8 sm:pb-12 md:pb-16">
            <span className="font-mono text-xs sm:text-sm font-bold tracking-[0.2em] text-[#66645E] uppercase mb-2">
              HELLO, I&apos;M
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-[2.6rem] lg:text-5xl xl:text-6xl font-black tracking-tight text-[#141414] leading-[1.02] mb-3 break-words">
              YESWANTH <br />
              UGGINA
            </h2>

            <p className="font-mono text-xs sm:text-sm font-bold tracking-[0.18em] text-[#C86D51] uppercase mb-4">
              PYTHON DEVELOPER
            </p>

            <p className="font-sans text-sm sm:text-base text-[#55524B] leading-relaxed max-w-md mb-6 font-normal">
              {personal.bio}
            </p>

            {/* Hand-Drawn Signature */}
            <div className="font-signature text-3xl sm:text-4xl text-[#141414] mb-8 select-none">
              Yeswanth Uggina
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#C86D51] hover:bg-[#B85D3E] text-white font-mono text-xs font-bold tracking-wider uppercase shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
              >
                <span>VIEW PROJECTS</span>
                <span>→</span>
              </a>

              <button
                type="button"
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-[#141414] text-[#141414] hover:text-white border border-[#E7E4DC] font-mono text-xs font-bold tracking-wider uppercase shadow-sm transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>RESUME</span>
              </button>
            </div>
          </div>

          {/* RIGHT / CENTER COLUMN: Terracotta Sun Circle, Rotating Badge & Real Portrait */}
          <div className="md:col-span-7 relative flex justify-center items-end self-end">
            {/* Terracotta Sun Circle Graphic */}
            <div
              className="absolute bottom-0 w-[240px] h-[240px] sm:w-[340px] sm:h-[340px] lg:w-[420px] lg:h-[420px] rounded-full bg-[#C86D51] z-0 shadow-lg"
              style={{
                transform: `translate(${(cursorPos.normX - 0.5) * -10}px, ${(cursorPos.normY - 0.5) * -8}px)`,
                transition: 'transform 0.25s ease-out',
              }}
            />

            {/* Rotating Circular Badge Stamp */}
            <div
              className="absolute right-2 sm:right-6 lg:right-8 top-4 sm:top-10 lg:top-14 z-20 w-24 h-24 sm:w-32 sm:h-32 lg:w-36 lg:h-36 pointer-events-none select-none"
              style={{
                transform: `translate(${(cursorPos.normX - 0.5) * 12}px, ${(cursorPos.normY - 0.5) * 10}px)`,
                transition: 'transform 0.3s ease-out',
              }}
            >
              <svg className="w-full h-full animate-spin-badge" viewBox="0 0 160 160">
                <path
                  id="badgePath"
                  d="M 80, 80 m -60, 0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
                  fill="none"
                />
                <text className="text-[10px] font-mono font-bold uppercase tracking-[0.22em] fill-[#141414]">
                  <textPath href="#badgePath" startOffset="0%">
                    ● AVAILABLE FOR OPPORTUNITIES · OPEN FOR NEW PROJECTS ·
                  </textPath>
                </text>
              </svg>
            </div>

            {/* Real Yeswanth Portrait with subtle 3D tilt resting flush against bottom page line */}
            <div
              className="relative z-10 w-full max-w-[320px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[500px] flex justify-center items-end leading-none"
              style={{
                transform: `perspective(1000px) rotateY(${tiltY.toFixed(2)}deg) rotateX(${tiltX.toFixed(2)}deg)`,
                transition: 'transform 0.18s cubic-bezier(0.16, 1, 0.3, 1)',
                willChange: 'transform',
              }}
            >
              <img
                src={yeswanthPortrait}
                alt="Yeswanth Uggina — Python Developer"
                className="w-full h-auto max-h-[480px] sm:max-h-[560px] lg:max-h-[640px] object-contain drop-shadow-2xl select-none pointer-events-none block -mb-[1px]"
                draggable={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
