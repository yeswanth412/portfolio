import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import ArchitectureScene from './ArchitectureScene';
import FallbackVisual from './FallbackVisual';

export default function ThreeVisual({
  nodes,
  displayedNode,
  setHoveredNode,
  setActiveNode,
  prefersReducedMotion,
}) {
  return (
    <Suspense
      fallback={
        <FallbackVisual
          nodes={nodes}
          activeNodeId={displayedNode.id}
          onSelectNode={setActiveNode}
        />
      }
    >
      <Canvas
        camera={{ position: [0, 0, 6.8], fov: 46 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ArchitectureScene
          nodes={nodes}
          activeNodeId={displayedNode.id}
          onHoverNode={setHoveredNode}
          onLeaveNode={() => setHoveredNode(null)}
          onSelectNode={setActiveNode}
          reducedMotion={prefersReducedMotion}
        />
      </Canvas>
    </Suspense>
  );
}
