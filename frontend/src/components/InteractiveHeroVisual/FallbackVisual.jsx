import React from 'react';

/**
 * FallbackVisual Component
 * Renders an accessible 2D SVG architecture network if WebGL is unavailable
 * or if the user prefers reduced motion.
 */
export default function FallbackVisual({ nodes, activeNodeId, onSelectNode }) {
  return (
    <svg
      className="fallback-visual-svg"
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Backend Architecture System Network"
    >
      {/* Background orbital rings */}
      <circle cx="200" cy="200" r="145" stroke="rgba(56, 189, 248, 0.12)" strokeWidth="1" strokeDasharray="4 6" />
      <circle cx="200" cy="200" r="95" stroke="rgba(56, 189, 248, 0.16)" strokeWidth="1" />

      {/* Network Connections */}
      <line x1="200" y1="200" x2="200" y2="70" stroke="rgba(56, 189, 248, 0.35)" strokeWidth="1.5" />
      <line x1="200" y1="200" x2="310" y2="140" stroke="rgba(56, 189, 248, 0.35)" strokeWidth="1.5" />
      <line x1="200" y1="200" x2="90" y2="140" stroke="rgba(56, 189, 248, 0.35)" strokeWidth="1.5" />
      <line x1="200" y1="200" x2="110" y2="300" stroke="rgba(56, 189, 248, 0.3)" strokeWidth="1.5" />
      <line x1="200" y1="200" x2="290" y2="300" stroke="rgba(56, 189, 248, 0.3)" strokeWidth="1.5" />

      {/* Cross mesh connections */}
      <line x1="200" y1="70" x2="310" y2="140" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1" />
      <line x1="200" y1="70" x2="90" y2="140" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1" />
      <line x1="90" y1="140" x2="110" y2="300" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1" />
      <line x1="310" y1="140" x2="290" y2="300" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1" />
      <line x1="110" y1="300" x2="290" y2="300" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1" />

      {/* Central Kernel */}
      <g
        className={`fallback-node ${activeNodeId === 'core' ? 'active' : ''}`}
        onClick={() => onSelectNode(nodes.find((n) => n.id === 'core'))}
      >
        <circle cx="200" cy="200" r="28" fill="#080e1a" stroke="rgba(56, 189, 248, 0.5)" strokeWidth="2" />
        <circle cx="200" cy="200" r="14" fill="#38bdf8" opacity="0.9" />
        <text x="200" y="204" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="700" fontFamily="monospace">CORE</text>
      </g>

      {/* Node: Python (Top) */}
      <g
        className={`fallback-node ${activeNodeId === 'python' ? 'active' : ''}`}
        onClick={() => onSelectNode(nodes.find((n) => n.id === 'python'))}
      >
        <circle cx="200" cy="70" r="20" fill="#0a1222" stroke="rgba(56, 189, 248, 0.4)" strokeWidth="1.5" />
        <circle cx="200" cy="70" r="7" fill="#38bdf8" />
        <text x="200" y="40" textAnchor="middle" fill="#e2e8f0" fontSize="11" fontWeight="600" fontFamily="monospace">PYTHON</text>
      </g>

      {/* Node: FastAPI (Upper Right) */}
      <g
        className={`fallback-node ${activeNodeId === 'fastapi' ? 'active' : ''}`}
        onClick={() => onSelectNode(nodes.find((n) => n.id === 'fastapi'))}
      >
        <circle cx="310" cy="140" r="20" fill="#0a1222" stroke="rgba(45, 212, 191, 0.4)" strokeWidth="1.5" />
        <circle cx="310" cy="140" r="7" fill="#2dd4bf" />
        <text x="310" y="174" textAnchor="middle" fill="#e2e8f0" fontSize="11" fontWeight="600" fontFamily="monospace">FASTAPI</text>
      </g>

      {/* Node: PostgreSQL (Upper Left) */}
      <g
        className={`fallback-node ${activeNodeId === 'postgres' ? 'active' : ''}`}
        onClick={() => onSelectNode(nodes.find((n) => n.id === 'postgres'))}
      >
        <circle cx="90" cy="140" r="20" fill="#0a1222" stroke="rgba(56, 189, 248, 0.4)" strokeWidth="1.5" />
        <circle cx="90" cy="140" r="7" fill="#38bdf8" />
        <text x="90" y="174" textAnchor="middle" fill="#e2e8f0" fontSize="11" fontWeight="600" fontFamily="monospace">POSTGRESQL</text>
      </g>

      {/* Node: REST APIs (Lower Left) */}
      <g
        className={`fallback-node ${activeNodeId === 'rest' ? 'active' : ''}`}
        onClick={() => onSelectNode(nodes.find((n) => n.id === 'rest'))}
      >
        <circle cx="110" cy="300" r="18" fill="#0a1222" stroke="rgba(2, 132, 199, 0.4)" strokeWidth="1.5" />
        <circle cx="110" cy="300" r="6" fill="#0284c7" />
        <text x="110" y="332" textAnchor="middle" fill="#cbd5e1" fontSize="10" fontWeight="600" fontFamily="monospace">REST APIS</text>
      </g>

      {/* Node: AI / RAG (Lower Right) */}
      <g
        className={`fallback-node ${activeNodeId === 'ai' ? 'active' : ''}`}
        onClick={() => onSelectNode(nodes.find((n) => n.id === 'ai'))}
      >
        <circle cx="290" cy="300" r="18" fill="#0a1222" stroke="rgba(129, 140, 248, 0.4)" strokeWidth="1.5" />
        <circle cx="290" cy="300" r="6" fill="#818cf8" />
        <text x="290" y="332" textAnchor="middle" fill="#cbd5e1" fontSize="10" fontWeight="600" fontFamily="monospace">AI / RAG</text>
      </g>
    </svg>
  );
}
