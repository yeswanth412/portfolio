import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * Stylized 3D Developer Character
 * Built using high-performance Three.js primitives and PBR materials.
 * Represents Yeswanth — Python Developer.
 * Features:
 * - Natural head/neck/chest gaze tracking towards mouse cursor with easing damping
 * - Organic idle breathing (chest rise/fall and micro head bob)
 * - Stylized tech developer aesthetic: dark hoodie/jacket, cyan status accents, glasses, styled hair
 * - Full reduced-motion and touch device awareness
 */
export default function CharacterScene({ reducedMotion = false }) {
  const rootRef = useRef();
  const chestGroup = useRef();
  const neckGroup = useRef();
  const headGroup = useRef();
  const eyesGroup = useRef();
  const leftEyeRef = useRef();
  const rightEyeRef = useRef();
  const glassesRef = useRef();

  // Materials with clean PBR values matching the dark engineering palette
  const materials = useMemo(() => {
    return {
      skin: new THREE.MeshStandardMaterial({
        color: '#d49b6a', // Natural warm tone
        roughness: 0.55,
        metalness: 0.05,
      }),
      hair: new THREE.MeshStandardMaterial({
        color: '#1a1f2c', // Deep dark slate
        roughness: 0.75,
        metalness: 0.1,
      }),
      hoodie: new THREE.MeshStandardMaterial({
        color: '#0f172a', // Deep obsidian/navy tech hoodie
        roughness: 0.85,
        metalness: 0.12,
      }),
      hoodieAccent: new THREE.MeshStandardMaterial({
        color: '#1e293b', // Dark slate contrast panels
        roughness: 0.6,
        metalness: 0.2,
      }),
      cyanAccent: new THREE.MeshStandardMaterial({
        color: '#38bdf8', // Cyber cyan accent matching portfolio
        emissive: '#0284c7',
        emissiveIntensity: 0.45,
        roughness: 0.3,
        metalness: 0.5,
      }),
      glassesFrame: new THREE.MeshStandardMaterial({
        color: '#090d16',
        roughness: 0.3,
        metalness: 0.8,
      }),
      glassesLens: new THREE.MeshPhysicalMaterial({
        color: '#38bdf8',
        transparent: true,
        opacity: 0.22,
        roughness: 0.1,
        transmission: 0.85,
        ior: 1.5,
      }),
      eyeWhite: new THREE.MeshStandardMaterial({
        color: '#f8fafc',
        roughness: 0.2,
      }),
      iris: new THREE.MeshStandardMaterial({
        color: '#1e293b', // Deep brown/charcoal iris
        roughness: 0.3,
      }),
      pupil: new THREE.MeshBasicMaterial({
        color: '#030712',
      }),
      headphoneBand: new THREE.MeshStandardMaterial({
        color: '#0f172a',
        roughness: 0.4,
        metalness: 0.7,
      }),
      headphoneCup: new THREE.MeshStandardMaterial({
        color: '#1e293b',
        roughness: 0.3,
        metalness: 0.6,
      }),
    };
  }, []);

  // Frame loop for cursor tracking & breathing interpolation
  useFrame((state, delta) => {
    if (!headGroup.current || !chestGroup.current) return;

    const time = state.clock.elapsedTime;
    const clampedDelta = Math.min(delta, 0.1);

    // Natural idle breathing cycle
    const breath = Math.sin(time * 1.6) * 0.018;
    const microBob = Math.sin(time * 0.8) * 0.008;

    chestGroup.current.position.y = -0.55 + breath * 0.6;
    chestGroup.current.scale.set(1 + breath * 0.3, 1 + breath * 0.5, 1 + breath * 0.3);

    if (reducedMotion) {
      // Stable, centered orientation under reduced-motion preference
      headGroup.current.rotation.set(0, 0, 0);
      if (neckGroup.current) neckGroup.current.rotation.set(0, 0, 0);
      return;
    }

    // Cursor tracking: pointer coordinates are normalized in [-1, 1]
    const { pointer } = state;
    const hasPointer = Math.abs(pointer.x) > 0.0001 || Math.abs(pointer.y) > 0.0001;

    // Target rotations for head look direction
    let targetHeadY = 0;
    let targetHeadX = 0;

    if (hasPointer) {
      // Look toward cursor: horizontal pointer affects Y rotation, vertical affects X
      targetHeadY = THREE.MathUtils.clamp(-pointer.x * 0.48, -0.42, 0.42);
      targetHeadX = THREE.MathUtils.clamp(-pointer.y * 0.32, -0.28, 0.28);
    } else {
      // Gentle ambient scanning when pointer is not active
      targetHeadY = Math.sin(time * 0.6) * 0.12;
      targetHeadX = Math.cos(time * 0.8) * 0.05;
    }

    // Smooth interpolated head rotation with damping
    headGroup.current.rotation.y = THREE.MathUtils.damp(
      headGroup.current.rotation.y,
      targetHeadY,
      4.2,
      clampedDelta
    );
    headGroup.current.rotation.x = THREE.MathUtils.damp(
      headGroup.current.rotation.x,
      targetHeadX,
      4.0,
      clampedDelta
    );
    // Subtle head tilt with turn
    headGroup.current.rotation.z = THREE.MathUtils.damp(
      headGroup.current.rotation.z,
      -targetHeadY * 0.15,
      3.5,
      clampedDelta
    );

    // Neck follows head rotation partially
    if (neckGroup.current) {
      neckGroup.current.rotation.y = headGroup.current.rotation.y * 0.35;
      neckGroup.current.rotation.x = headGroup.current.rotation.x * 0.25;
    }

    // Upper chest turns slightly in sympathy
    chestGroup.current.rotation.y = THREE.MathUtils.damp(
      chestGroup.current.rotation.y,
      targetHeadY * 0.18,
      2.8,
      clampedDelta
    );

    // Eyes have micro gaze offset
    if (leftEyeRef.current && rightEyeRef.current) {
      const eyeTargetX = THREE.MathUtils.clamp(targetHeadY * 0.22, -0.05, 0.05);
      const eyeTargetY = THREE.MathUtils.clamp(-targetHeadX * 0.18, -0.04, 0.04);
      leftEyeRef.current.position.x = -0.16 + eyeTargetX;
      leftEyeRef.current.position.y = 0.08 + eyeTargetY;
      rightEyeRef.current.position.x = 0.16 + eyeTargetX;
      rightEyeRef.current.position.y = 0.08 + eyeTargetY;
    }
  });

  return (
    <group ref={rootRef} position={[0, -0.15, 0]} scale={[1.18, 1.18, 1.18]}>
      {/* ========================================================
          CHEST & SHOULDERS (TECH HOODIE / JACKET)
          ======================================================== */}
      <group ref={chestGroup} position={[0, -0.55, 0]}>
        {/* Main Torso */}
        <mesh position={[0, -0.4, 0]} material={materials.hoodie}>
          <cylinderGeometry args={[0.62, 0.54, 0.95, 32]} />
        </mesh>

        {/* Hoodie Collar / Neckline Wrap */}
        <mesh position={[0, 0.06, 0.02]} rotation={[0.1, 0, 0]} material={materials.hoodieAccent}>
          <torusGeometry args={[0.34, 0.12, 16, 32]} />
        </mesh>

        {/* Tech Zipper / Center Seam Accent */}
        <mesh position={[0, -0.38, 0.58]} material={materials.cyanAccent}>
          <boxGeometry args={[0.025, 0.82, 0.02]} />
        </mesh>

        {/* Shoulders Left & Right */}
        <mesh position={[-0.72, -0.18, -0.02]} rotation={[0, 0, 0.35]} material={materials.hoodie}>
          <sphereGeometry args={[0.32, 24, 24]} />
        </mesh>
        <mesh position={[0.72, -0.18, -0.02]} rotation={[0, 0, -0.35]} material={materials.hoodie}>
          <sphereGeometry args={[0.32, 24, 24]} />
        </mesh>

        {/* Upper Arms */}
        <mesh position={[-0.82, -0.55, -0.02]} rotation={[0, 0, 0.18]} material={materials.hoodie}>
          <cylinderGeometry args={[0.22, 0.2, 0.65, 24]} />
        </mesh>
        <mesh position={[0.82, -0.55, -0.02]} rotation={[0, 0, -0.18]} material={materials.hoodie}>
          <cylinderGeometry args={[0.22, 0.2, 0.65, 24]} />
        </mesh>

        {/* Tech badge detail on chest */}
        <mesh position={[-0.32, -0.18, 0.56]} rotation={[0, 0.2, 0]} material={materials.cyanAccent}>
          <boxGeometry args={[0.12, 0.04, 0.02]} />
        </mesh>
      </group>

      {/* ========================================================
          NECK GROUP
          ======================================================== */}
      <group ref={neckGroup} position={[0, -0.42, 0]}>
        <mesh position={[0, 0.22, -0.02]} material={materials.skin}>
          <cylinderGeometry args={[0.18, 0.22, 0.35, 24]} />
        </mesh>
      </group>

      {/* ========================================================
          HEAD GROUP (HEAD, HAIR, FACE, EYES, GLASSES, HEADSET)
          ======================================================== */}
      <group ref={headGroup} position={[0, 0.12, 0]}>
        {/* Cranium / Head Mesh */}
        <mesh position={[0, 0.04, 0]} material={materials.skin}>
          <sphereGeometry args={[0.42, 32, 32]} />
        </mesh>

        {/* Jaw & Chin Shape */}
        <mesh position={[0, -0.15, 0.12]} rotation={[0.25, 0, 0]} material={materials.skin}>
          <coneGeometry args={[0.32, 0.42, 32]} />
        </mesh>

        {/* Ears */}
        <mesh position={[-0.43, 0.02, -0.02]} rotation={[0, -0.2, 0]} material={materials.skin}>
          <capsuleGeometry args={[0.07, 0.1, 16, 16]} />
        </mesh>
        <mesh position={[0.43, 0.02, -0.02]} rotation={[0, 0.2, 0]} material={materials.skin}>
          <capsuleGeometry args={[0.07, 0.1, 16, 16]} />
        </mesh>

        {/* ========================
            STYLIZED HAIR
            ======================== */}
        {/* Hair Base Volume */}
        <mesh position={[0, 0.18, -0.06]} material={materials.hair}>
          <sphereGeometry args={[0.44, 28, 28]} />
        </mesh>

        {/* Modern Styled Top / Quiff */}
        <mesh position={[0, 0.45, 0.08]} rotation={[-0.2, 0, 0]} material={materials.hair}>
          <boxGeometry args={[0.62, 0.18, 0.58]} />
        </mesh>

        {/* Hair Fringe / Front Texture */}
        <mesh position={[0, 0.4, 0.28]} rotation={[-0.35, 0, 0]} material={materials.hair}>
          <coneGeometry args={[0.28, 0.22, 16]} />
        </mesh>

        {/* Hair Sides / Fade definition */}
        <mesh position={[-0.38, 0.15, -0.04]} rotation={[0, 0, 0.2]} material={materials.hair}>
          <boxGeometry args={[0.16, 0.35, 0.48]} />
        </mesh>
        <mesh position={[0.38, 0.15, -0.04]} rotation={[0, 0, -0.2]} material={materials.hair}>
          <boxGeometry args={[0.16, 0.35, 0.48]} />
        </mesh>

        {/* ========================
            EYES & GAZE
            ======================== */}
        <group ref={eyesGroup} position={[0, 0.02, 0.38]}>
          {/* Eyebrows */}
          <mesh position={[-0.16, 0.18, 0.01]} rotation={[0, 0, 0.08]} material={materials.hair}>
            <boxGeometry args={[0.18, 0.035, 0.03]} />
          </mesh>
          <mesh position={[0.16, 0.18, 0.01]} rotation={[0, 0, -0.08]} material={materials.hair}>
            <boxGeometry args={[0.18, 0.035, 0.03]} />
          </mesh>

          {/* Left Eye */}
          <group ref={leftEyeRef} position={[-0.16, 0.08, 0]}>
            <mesh material={materials.eyeWhite}>
              <sphereGeometry args={[0.072, 20, 20]} />
            </mesh>
            <mesh position={[0, 0, 0.05]} material={materials.iris}>
              <circleGeometry args={[0.038, 20]} />
            </mesh>
            <mesh position={[0, 0, 0.058]} material={materials.pupil}>
              <circleGeometry args={[0.022, 20]} />
            </mesh>
            {/* Catchlight */}
            <mesh position={[0.015, 0.015, 0.062]} material={materials.eyeWhite}>
              <circleGeometry args={[0.007, 12]} />
            </mesh>
          </group>

          {/* Right Eye */}
          <group ref={rightEyeRef} position={[0.16, 0.08, 0]}>
            <mesh material={materials.eyeWhite}>
              <sphereGeometry args={[0.072, 20, 20]} />
            </mesh>
            <mesh position={[0, 0, 0.05]} material={materials.iris}>
              <circleGeometry args={[0.038, 20]} />
            </mesh>
            <mesh position={[0, 0, 0.058]} material={materials.pupil}>
              <circleGeometry args={[0.022, 20]} />
            </mesh>
            {/* Catchlight */}
            <mesh position={[0.015, 0.015, 0.062]} material={materials.eyeWhite}>
              <circleGeometry args={[0.007, 12]} />
            </mesh>
          </group>

          {/* Nose Bridge */}
          <mesh position={[0, 0.02, 0.04]} rotation={[0.2, 0, 0]} material={materials.skin}>
            <coneGeometry args={[0.048, 0.16, 16]} />
          </mesh>

          {/* Mouth (subtle, focused developer expression) */}
          <mesh position={[0, -0.16, -0.01]} material={materials.hair}>
            <boxGeometry args={[0.14, 0.02, 0.02]} />
          </mesh>
        </group>

        {/* ========================
            SLEEK DEVELOPER GLASSES
            ======================== */}
        <group ref={glassesRef} position={[0, 0.1, 0.44]}>
          {/* Left Frame */}
          <mesh position={[-0.17, 0, 0]} material={materials.glassesFrame}>
            <torusGeometry args={[0.098, 0.014, 16, 24]} />
          </mesh>
          {/* Left Lens */}
          <mesh position={[-0.17, 0, 0]} material={materials.glassesLens}>
            <circleGeometry args={[0.092, 24]} />
          </mesh>

          {/* Right Frame */}
          <mesh position={[0.17, 0, 0]} material={materials.glassesFrame}>
            <torusGeometry args={[0.098, 0.014, 16, 24]} />
          </mesh>
          {/* Right Lens */}
          <mesh position={[0.17, 0, 0]} material={materials.glassesLens}>
            <circleGeometry args={[0.092, 24]} />
          </mesh>

          {/* Bridge */}
          <mesh position={[0, 0.03, 0]} material={materials.glassesFrame}>
            <boxGeometry args={[0.09, 0.016, 0.015]} />
          </mesh>

          {/* Temples (Glasses Arms) */}
          <mesh position={[-0.28, 0.01, -0.22]} rotation={[0, 0.1, 0]} material={materials.glassesFrame}>
            <boxGeometry args={[0.012, 0.014, 0.42]} />
          </mesh>
          <mesh position={[0.28, 0.01, -0.22]} rotation={[0, -0.1, 0]} material={materials.glassesFrame}>
            <boxGeometry args={[0.012, 0.014, 0.42]} />
          </mesh>
        </group>

        {/* ========================
            DEVELOPER HEADSET / EARPIECE
            ======================== */}
        {/* Headband spanning top */}
        <mesh position={[0, 0.22, -0.04]} rotation={[0.1, 0, 0]} material={materials.headphoneBand}>
          <torusGeometry args={[0.48, 0.024, 16, 32, Math.PI]} />
        </mesh>
        {/* Left Ear Cup */}
        <mesh position={[-0.45, 0.02, -0.02]} rotation={[0, 0, 0.1]} material={materials.headphoneCup}>
          <cylinderGeometry args={[0.12, 0.12, 0.07, 24]} />
        </mesh>
        {/* Right Ear Cup */}
        <mesh position={[0.45, 0.02, -0.02]} rotation={[0, 0, -0.1]} material={materials.headphoneCup}>
          <cylinderGeometry args={[0.12, 0.12, 0.07, 24]} />
        </mesh>
        {/* Glowing cyan LED status on ear cup */}
        <mesh position={[0.48, 0.02, -0.02]} material={materials.cyanAccent}>
          <sphereGeometry args={[0.022, 16, 16]} />
        </mesh>
      </group>
    </group>
  );
}
