"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function YShape() {
  const groupRef = useRef();
  const matRef = useRef();

  // Build "Y" from 3 box geometries
  const parts = useMemo(() => {
    const thickness = 0.45;
    const depth = 0.5;
    return [
      // Left arm (angled)
      {
        args: [thickness, 1.6, depth],
        position: [-0.55, 0.6, 0],
        rotation: [0, 0, 0.35],
      },
      // Right arm (angled)
      {
        args: [thickness, 1.6, depth],
        position: [0.55, 0.6, 0],
        rotation: [0, 0, -0.35],
      },
      // Vertical stem
      {
        args: [thickness, 1.6, depth],
        position: [0, -0.7, 0],
        rotation: [0, 0, 0],
      },
    ];
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y =
        Math.sin(state.clock.elapsedTime * 0.6) * 0.4;
      groupRef.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.4) * 0.1;
    }
    if (matRef.current) {
      matRef.current.emissiveIntensity =
        0.4 + Math.sin(state.clock.elapsedTime * 2.5) * 0.2;
    }
  });

  return (
    <Float speed={1.8} rotationIntensity={0.15} floatIntensity={1}>
      <group ref={groupRef} scale={1.3}>
        {parts.map((part, i) => (
          <mesh key={i} position={part.position} rotation={part.rotation}>
            <boxGeometry args={part.args} />
            <meshStandardMaterial
              ref={i === 0 ? matRef : undefined}
              color="#f59e0b"
              emissive="#f97316"
              emissiveIntensity={0.4}
              roughness={0.1}
              metalness={0.95}
            />
          </mesh>
        ))}

        {/* Glow ring around Y */}
        <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
          <torusGeometry args={[2.2, 0.02, 16, 64]} />
          <meshStandardMaterial
            color="#fbbf24"
            emissive="#fbbf24"
            emissiveIntensity={0.8}
            transparent
            opacity={0.4}
          />
        </mesh>
      </group>
    </Float>
  );
}

function Particles() {
  const ref = useRef();
  const count = 50;

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 2 + Math.random() * 3;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#fbbf24"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

const Letter3D = () => {
  return (
    <div className="w-[130px] h-[130px] xl:w-[170px] xl:h-[170px]">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} color="#fbbf24" />
        <pointLight position={[-4, -3, 4]} intensity={0.6} color="#f97316" />
        <pointLight position={[0, 3, 2]} intensity={0.4} color="#ffffff" />
        <YShape />
        <Particles />
      </Canvas>
    </div>
  );
};

export default Letter3D;
