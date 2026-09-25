import React, { useState, useEffect, lazy, Suspense } from 'react';
import './CharacterVisual.css';

// Lazy-load the Three.js Canvas to optimize initial page bundle load
const CharacterCanvas = lazy(() => import('./CharacterCanvas'));

function isWebGLAvailable() {
  try {
    const canvas = document.createElement('canvas');
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch {
    return false;
  }
}

/**
 * Fallback static illustration for environments without WebGL
 */
function CharacterStaticFallback() {
  return (
    <div className="character-static-fallback" aria-label="Stylized developer visual representation">
      <div className="fallback-glow-disc" />
      <svg
        viewBox="0 0 200 240"
        className="fallback-character-svg"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Subtle Cyber Glow Ring */}
        <circle cx="100" cy="110" r="85" stroke="rgba(56, 189, 248, 0.25)" strokeWidth="1.5" strokeDasharray="4 6" />
        {/* Shoulders / Torso */}
        <path d="M40 230 C40 180, 65 160, 100 160 C135 160, 160 180, 160 230 Z" fill="#0f172a" stroke="rgba(56, 189, 248, 0.3)" strokeWidth="2" />
        <path d="M100 160 L100 230" stroke="#38bdf8" strokeWidth="2" />
        {/* Neck */}
        <rect x="88" y="130" width="24" height="34" rx="4" fill="#d49b6a" />
        {/* Head */}
        <ellipse cx="100" cy="95" rx="38" ry="46" fill="#d49b6a" />
        {/* Hair */}
        <path d="M62 85 C62 55, 78 45, 100 45 C122 45, 138 55, 138 85 C138 65, 126 55, 100 55 C74 55, 62 68, 62 85 Z" fill="#1a1f2c" />
        {/* Glasses */}
        <rect x="74" y="86" width="22" height="15" rx="3" stroke="#38bdf8" strokeWidth="2" fill="rgba(56, 189, 248, 0.15)" />
        <rect x="104" y="86" width="22" height="15" rx="3" stroke="#38bdf8" strokeWidth="2" fill="rgba(56, 189, 248, 0.15)" />
        <line x1="96" y1="93" x2="104" y2="93" stroke="#38bdf8" strokeWidth="2" />
        {/* Headphone Accent */}
        <circle cx="61" cy="98" r="8" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
        <circle cx="139" cy="98" r="8" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
      </svg>
    </div>
  );
}

/**
 * CharacterVisual Component
 * Renders the central 3D interactive stylized character representing the developer.
 * Includes WebGL feature detection and graceful fallback.
 */
export default function CharacterVisual() {
  const [webGLSupported, setWebGLSupported] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    setWebGLSupported(isWebGLAvailable());

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <div
      className="character-visual-container"
      role="img"
      aria-label="Interactive 3D representation of developer Yeswanth Uggina looking toward your cursor"
    >
      {/* Background ambient lighting aura */}
      <div className="character-ambient-glow" aria-hidden="true" />
      <div className="character-ring-motif" aria-hidden="true" />

      {webGLSupported ? (
        <Suspense fallback={<CharacterStaticFallback />}>
          <CharacterCanvas prefersReducedMotion={prefersReducedMotion} />
        </Suspense>
      ) : (
        <CharacterStaticFallback />
      )}
    </div>
  );
}
