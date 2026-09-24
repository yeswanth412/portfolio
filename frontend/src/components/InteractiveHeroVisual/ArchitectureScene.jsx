import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * 3D Interactive Architecture Scene
 * Central Node (Backend Core) + Connected Tech Nodes (Python, FastAPI, PostgreSQL, REST APIs, AI/RAG)
 */
export default function ArchitectureScene({
  nodes,
  activeNodeId,
  onHoverNode,
  onLeaveNode,
  onSelectNode,
  reducedMotion = false,
}) {
  const groupRef = useRef();
  const ringRef = useRef();
  const linesRef = useRef();

  // Color mapping
  const colors = useMemo(() => ({
    cyan: new THREE.Color('#38bdf8'),
    teal: new THREE.Color('#2dd4bf'),
    blue: new THREE.Color('#0284c7'),
    indigo: new THREE.Color('#818cf8'),
    dark: new THREE.Color('#0b1324'),
    white: new THREE.Color('#ffffff'),
  }), []);

  // Connection line coordinates between nodes
  const linePositions = useMemo(() => {
    const coords = [];
    const corePos = [0, 0, 0];

    // Connect core to all satellites
    nodes.forEach((node) => {
      coords.push(...corePos, ...node.position);
    });

    // Cross-connections to form a cohesive network
    const nodeMap = Object.fromEntries(nodes.map((n) => [n.id, n.position]));
    if (nodeMap.python && nodeMap.fastapi) coords.push(...nodeMap.python, ...nodeMap.fastapi);
    if (nodeMap.python && nodeMap.postgres) coords.push(...nodeMap.python, ...nodeMap.postgres);
    if (nodeMap.postgres && nodeMap.rest) coords.push(...nodeMap.postgres, ...nodeMap.rest);
    if (nodeMap.fastapi && nodeMap.ai) coords.push(...nodeMap.fastapi, ...nodeMap.ai);
    if (nodeMap.rest && nodeMap.ai) coords.push(...nodeMap.rest, ...nodeMap.ai);

    return new Float32Array(coords);
  }, [nodes]);

  // Subtle ambient floating dust particles (40 particles, ultra-lightweight)
  const particles = useMemo(() => {
    const count = 40;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 6;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 6;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 4;
    }
    return positions;
  }, []);

  // Animation frame loop
  useFrame((state) => {
    if (!groupRef.current || reducedMotion) return;

    const t = state.clock.getElapsedTime();
    const targetX = state.pointer.x * 0.45;
    const targetY = -state.pointer.y * 0.35;

    // Smooth cursor responsive tilt with lerp
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetX, 0.04);
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetY, 0.04);

    // Subtle breathing / idle floating
    groupRef.current.position.y = Math.sin(t * 0.8) * 0.08;

    // Slow orbital ring rotation
    if (ringRef.current) {
      ringRef.current.rotation.z = t * 0.15;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Ambient Lighting */}
      <ambientLight intensity={0.7} />
      <pointLight position={[5, 6, 6]} intensity={1.5} color="#ffffff" />
      <pointLight position={[-5, -4, -2]} intensity={0.8} color="#38bdf8" />

      {/* Network Connection Lines */}
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={linePositions.length / 3}
            array={linePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#38bdf8"
          transparent
          opacity={0.3}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>

      {/* Subtle Dust Particles */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particles.length / 3}
            array={particles}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.035}
          color="#38bdf8"
          transparent
          opacity={0.4}
        />
      </points>

      {/* Central Node: Backend Core */}
      <group position={[0, 0, 0]}>
        {/* Core Sphere */}
        <mesh
          onPointerOver={(e) => {
            e.stopPropagation();
            document.body.style.cursor = 'pointer';
            onHoverNode({ id: 'core', label: 'Backend Core', description: 'Core application engine & architecture' });
          }}
          onPointerOut={() => {
            document.body.style.cursor = 'auto';
            onLeaveNode();
          }}
          onClick={(e) => {
            e.stopPropagation();
            onSelectNode({ id: 'core', label: 'Backend Core', description: 'Core application engine & architecture' });
          }}
        >
          <sphereGeometry args={[0.42, 32, 32]} />
          <meshStandardMaterial
            color={activeNodeId === 'core' ? colors.cyan : '#0ea5e9'}
            emissive={colors.cyan}
            emissiveIntensity={activeNodeId === 'core' ? 0.6 : 0.25}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>

        {/* Orbital Wireframe Ring */}
        <mesh ref={ringRef} rotation={[Math.PI / 3, 0, 0]}>
          <ringGeometry args={[0.62, 0.64, 48]} />
          <meshBasicMaterial color="#38bdf8" transparent opacity={0.35} side={THREE.DoubleSide} />
        </mesh>
      </group>

      {/* Connected Satellites */}
      {nodes.map((node) => {
        const isActive = activeNodeId === node.id;
        const baseColor =
          node.id === 'fastapi'
            ? colors.teal
            : node.id === 'ai'
            ? colors.indigo
            : node.id === 'rest'
            ? colors.blue
            : colors.cyan;

        return (
          <group key={node.id} position={node.position}>
            {/* Satellite Node Sphere */}
            <mesh
              scale={isActive ? 1.25 : 1}
              onPointerOver={(e) => {
                e.stopPropagation();
                document.body.style.cursor = 'pointer';
                onHoverNode(node);
              }}
              onPointerOut={() => {
                document.body.style.cursor = 'auto';
                onLeaveNode();
              }}
              onClick={(e) => {
                e.stopPropagation();
                onSelectNode(node);
              }}
            >
              <sphereGeometry args={[node.radius || 0.28, 28, 28]} />
              <meshStandardMaterial
                color={isActive ? colors.white : baseColor}
                emissive={baseColor}
                emissiveIntensity={isActive ? 0.75 : 0.3}
                roughness={0.3}
                metalness={0.7}
              />
            </mesh>

            {/* Orbiting halo ring around each active/hovered node */}
            {isActive && (
              <mesh>
                <ringGeometry args={[0.38, 0.41, 32]} />
                <meshBasicMaterial color="#ffffff" transparent opacity={0.6} side={THREE.DoubleSide} />
              </mesh>
            )}
          </group>
        );
      })}
    </group>
  );
}
