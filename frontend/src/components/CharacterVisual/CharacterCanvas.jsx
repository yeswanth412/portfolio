import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import CharacterScene from './CharacterScene';

function CanvasFallback() {
  return (
    <div className="character-canvas-fallback" aria-hidden="true">
      <div className="character-silhouette-glow" />
    </div>
  );
}

/**
 * CharacterCanvas Component
 * Manages the WebGL context, camera configuration, and studio lighting setup
 * for the 3D developer character.
 */
export default function CharacterCanvas({ prefersReducedMotion = false }) {
  return (
    <Suspense fallback={<CanvasFallback />}>
      <Canvas
        camera={{ position: [0, 0.08, 3.3], fov: 36 }}
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        className="character-three-canvas"
      >
        {/* Soft Ambient Fill */}
        <ambientLight intensity={0.85} color="#1e293b" />

        {/* Studio Key Light (Front-Right Top) */}
        <directionalLight
          position={[3.2, 4.5, 3.0]}
          intensity={1.8}
          color="#f8fafc"
        />

        {/* Cyan Rim / Edge Light (Back-Left) — Matches portfolio cyber cyan identity */}
        <directionalLight
          position={[-3.5, 2.5, -2.5]}
          intensity={3.2}
          color="#38bdf8"
        />

        {/* Subtle Top-Back Hair Highlight */}
        <directionalLight
          position={[0, 4.0, -2.0]}
          intensity={1.2}
          color="#93c5fd"
        />

        {/* Warm Low Fill Light (Front-Bottom) */}
        <pointLight
          position={[0, -2.2, 2.5]}
          intensity={0.4}
          color="#f59e0b"
        />

        {/* Subtle Chest/Collar Cyan Point Light */}
        <pointLight
          position={[0, -0.2, 1.6]}
          intensity={0.65}
          color="#38bdf8"
          distance={3}
        />

        {/* 3D Character Scene */}
        <CharacterScene reducedMotion={prefersReducedMotion} />
      </Canvas>
    </Suspense>
  );
}
