import React, { useState, useEffect, useMemo, Suspense } from 'react';
import FallbackVisual from './FallbackVisual';
import './InteractiveHeroVisual.css';

// Lazy-load Three.js & React Three Fiber so initial page load remains lightning-fast
const ThreeVisual = React.lazy(() => import('./ThreeVisual'));

/**
 * Checks if the current environment supports WebGL
 */
function isWebGLAvailable() {
  try {
    const canvas = document.createElement('canvas');
    return Boolean(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl') || canvas.getContext('webgl2'))
    );
  } catch {
    return false;
  }
}

export default function InteractiveHeroVisual() {
  const [hasWebGL, setHasWebGL] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [activeNode, setActiveNode] = useState(null);
  const [hoveredNode, setHoveredNode] = useState(null);

  // Technical Architecture Nodes definition
  const nodes = useMemo(() => [
    {
      id: 'python',
      label: 'Python',
      description: 'Backend language',
      position: [0, 2.1, 0.2],
      radius: 0.3,
    },
    {
      id: 'fastapi',
      label: 'FastAPI',
      description: 'REST APIs & backend services',
      position: [2.15, 0.75, -0.2],
      radius: 0.28,
    },
    {
      id: 'postgres',
      label: 'PostgreSQL',
      description: 'Relational database',
      position: [-2.15, 0.75, -0.2],
      radius: 0.28,
    },
    {
      id: 'rest',
      label: 'REST APIs',
      description: 'API architecture & integration',
      position: [-1.3, -1.8, 0.25],
      radius: 0.25,
    },
    {
      id: 'ai',
      label: 'AI / RAG',
      description: 'AI-powered applications',
      position: [1.3, -1.8, 0.25],
      radius: 0.26,
    },
  ], []);

  // Default active node when none is hovered
  const displayedNode = hoveredNode || activeNode || {
    id: 'core',
    label: 'Backend Architecture',
    description: 'Interactive system core — hover or tap nodes to inspect',
  };

  useEffect(() => {
    // 1. Detect WebGL capability
    setHasWebGL(isWebGLAvailable());

    // 2. Detect prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleMotionChange = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleMotionChange);

    return () => mediaQuery.removeEventListener('change', handleMotionChange);
  }, []);

  return (
    <div
      id="hero-visual-mount"
      className="hero-visual-system"
      aria-label="Interactive 3D Backend Architecture System"
    >
      <div className="visual-canvas-container">
        {hasWebGL && !prefersReducedMotion ? (
          <Suspense
            fallback={
              <FallbackVisual
                nodes={nodes}
                activeNodeId={displayedNode.id}
                onSelectNode={setActiveNode}
              />
            }
          >
            <ThreeVisual
              nodes={nodes}
              displayedNode={displayedNode}
              setHoveredNode={setHoveredNode}
              setActiveNode={setActiveNode}
              prefersReducedMotion={prefersReducedMotion}
            />
          </Suspense>
        ) : (
          <FallbackVisual
            nodes={nodes}
            activeNodeId={displayedNode.id}
            onSelectNode={setActiveNode}
          />
        )}

        {/* Floating Contextual Information Panel */}
        <div
          className={`visual-context-panel ${hoveredNode || activeNode ? 'active' : ''}`}
          role="status"
          aria-live="polite"
        >
          <div className="context-meta">
            <div className="context-name-row">
              <span className="context-dot" />
              <span className="context-title">{displayedNode.label}</span>
            </div>
            <p className="context-description">{displayedNode.description}</p>
          </div>
          <span className="context-hint">Hover / Tap Node</span>
        </div>

        {prefersReducedMotion && (
          <span className="reduced-motion-indicator">Reduced Motion Mode</span>
        )}
      </div>

      {/* Accessible Keyboard & Touch Navigation Strip */}
      <nav
        className="visual-keyboard-strip"
        aria-label="Inspect individual architecture technologies"
      >
        <button
          type="button"
          className={`visual-node-btn ${displayedNode.id === 'core' ? 'selected' : ''}`}
          onClick={() => setActiveNode({ id: 'core', label: 'Backend Core', description: 'Core application engine & architecture' })}
          onFocus={() => setActiveNode({ id: 'core', label: 'Backend Core', description: 'Core application engine & architecture' })}
        >
          Core
        </button>
        {nodes.map((node) => {
          const isSelected = displayedNode.id === node.id;
          return (
            <button
              key={node.id}
              type="button"
              className={`visual-node-btn ${isSelected ? 'selected' : ''}`}
              onClick={() => setActiveNode(node)}
              onFocus={() => setActiveNode(node)}
              aria-label={`Inspect ${node.label}: ${node.description}`}
            >
              {node.label}
            </button>
          );
        })}
      </nav>
    </div>
  );
}
