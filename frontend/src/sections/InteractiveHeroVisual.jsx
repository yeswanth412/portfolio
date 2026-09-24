import React, { useState } from 'react';

/**
 * InteractiveHeroVisual Component (Phase 1 Placeholder)
 *
 * Designed as a standalone modular container.
 * In Phase 2, this component will be upgraded to an interactive WebGL / Three.js
 * experience without needing to restructure the Hero layout or its parent elements.
 */
export default function InteractiveHeroVisual() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setMousePos({ x, y });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePos({ x: 0, y: 0 });
  };

  const transformStyle = {
    transform: isHovered
      ? `perspective(800px) rotateY(${mousePos.x * 10}deg) rotateX(${-mousePos.y * 10}deg) translateZ(10px)`
      : 'perspective(800px) rotateY(0deg) rotateX(0deg) translateZ(0px)',
    transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
  };

  return (
    <div
      id="hero-visual-mount"
      className="interactive-hero-visual-container"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-label="Interactive Architecture Visual Placeholder"
    >
      <div className="visual-stage" style={transformStyle}>
        {/* Glow backdrop layer */}
        <div className="visual-glow-backdrop" />

        {/* Dynamic Architectural Circuit & Core Node Graphic */}
        <svg
          className="visual-svg"
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Concentric orbital rings */}
          <circle cx="200" cy="200" r="150" stroke="rgba(56, 189, 248, 0.12)" strokeWidth="1" strokeDasharray="4 6" />
          <circle cx="200" cy="200" r="105" stroke="rgba(56, 189, 248, 0.18)" strokeWidth="1" />
          <circle cx="200" cy="200" r="60" stroke="rgba(56, 189, 248, 0.3)" strokeWidth="1.5" />

          {/* Connection vectors between backend & AI nodes */}
          <line x1="200" y1="200" x2="110" y2="120" stroke="rgba(56, 189, 248, 0.4)" strokeWidth="1.5" />
          <line x1="200" y1="200" x2="290" y2="120" stroke="rgba(56, 189, 248, 0.4)" strokeWidth="1.5" />
          <line x1="200" y1="200" x2="95" y2="260" stroke="rgba(56, 189, 248, 0.4)" strokeWidth="1.5" />
          <line x1="200" y1="200" x2="305" y2="260" stroke="rgba(56, 189, 248, 0.4)" strokeWidth="1.5" />
          <line x1="200" y1="200" x2="200" y2="330" stroke="rgba(56, 189, 248, 0.3)" strokeWidth="1.5" strokeDasharray="2 4" />

          {/* Core Central Kernel (FastAPI / Python Engine) */}
          <circle cx="200" cy="200" r="26" fill="#0c1322" stroke="#38bdf8" strokeWidth="2" />
          <circle cx="200" cy="200" r="12" fill="#38bdf8" opacity="0.85" />

          {/* Node 1: Python Core */}
          <g className="node-group">
            <circle cx="110" cy="120" r="16" fill="#0c1322" stroke="#38bdf8" strokeWidth="1.5" />
            <circle cx="110" cy="120" r="6" fill="#38bdf8" />
            <text x="110" y="92" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="monospace">PYTHON</text>
          </g>

          {/* Node 2: FastAPI & REST */}
          <g className="node-group">
            <circle cx="290" cy="120" r="16" fill="#0c1322" stroke="#38bdf8" strokeWidth="1.5" />
            <circle cx="290" cy="120" r="6" fill="#2dd4bf" />
            <text x="290" y="92" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="monospace">FASTAPI</text>
          </g>

          {/* Node 3: PostgreSQL & SQL */}
          <g className="node-group">
            <circle cx="95" cy="260" r="16" fill="#0c1322" stroke="#38bdf8" strokeWidth="1.5" />
            <circle cx="95" cy="260" r="6" fill="#38bdf8" />
            <text x="95" y="294" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="monospace">POSTGRESQL</text>
          </g>

          {/* Node 4: AI & RAG */}
          <g className="node-group">
            <circle cx="305" cy="260" r="16" fill="#0c1322" stroke="#38bdf8" strokeWidth="1.5" />
            <circle cx="305" cy="260" r="6" fill="#818cf8" />
            <text x="305" y="294" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="monospace">AI / RAG</text>
          </g>

          {/* Node 5: APIs */}
          <g className="node-group">
            <circle cx="200" cy="330" r="12" fill="#0c1322" stroke="#38bdf8" strokeWidth="1" />
            <circle cx="200" cy="330" r="4" fill="#38bdf8" />
            <text x="200" y="358" textAnchor="middle" fill="#64748b" fontSize="10" fontFamily="monospace">REST APIS</text>
          </g>
        </svg>

        {/* Phase tag badge */}
        <div className="visual-indicator-badge">
          <span className="indicator-pulse" />
          <span>Interactive Architecture Node</span>
        </div>
      </div>
    </div>
  );
}
