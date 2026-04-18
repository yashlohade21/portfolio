"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function AnimatedSphere() {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.15;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={1.5}>
      <mesh ref={meshRef} scale={2.2}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial
          color="#f59e0b"
          emissive="#f97316"
          emissiveIntensity={0.15}
          roughness={0.2}
          metalness={0.8}
          distort={0.3}
          speed={2}
          wireframe
        />
      </mesh>
    </Float>
  );
}

function OrbitingRings() {
  const ring1Ref = useRef();
  const ring2Ref = useRef();
  const ring3Ref = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = t * 0.3;
      ring1Ref.current.rotation.z = t * 0.1;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y = t * 0.25;
      ring2Ref.current.rotation.x = Math.PI / 3;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.z = t * 0.2;
      ring3Ref.current.rotation.x = Math.PI / 2.5;
    }
  });

  return (
    <>
      <mesh ref={ring1Ref}>
        <torusGeometry args={[3, 0.015, 16, 100]} />
        <meshStandardMaterial color="#fbbf24" emissive="#fbbf24" emissiveIntensity={0.5} transparent opacity={0.6} />
      </mesh>
      <mesh ref={ring2Ref}>
        <torusGeometry args={[3.5, 0.01, 16, 100]} />
        <meshStandardMaterial color="#f97316" emissive="#f97316" emissiveIntensity={0.4} transparent opacity={0.4} />
      </mesh>
      <mesh ref={ring3Ref}>
        <torusGeometry args={[4, 0.008, 16, 100]} />
        <meshStandardMaterial color="#fbbf24" emissive="#fbbf24" emissiveIntensity={0.3} transparent opacity={0.25} />
      </mesh>
    </>
  );
}

function FloatingParticles() {
  const particlesRef = useRef();
  const count = 80;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = 2.5 + Math.random() * 3;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = radius * Math.cos(phi);
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      particlesRef.current.rotation.x = state.clock.elapsedTime * 0.03;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#fbbf24"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

const Scene3D = () => {
  return (
    <div className="w-[300px] h-[300px] xl:w-[500px] xl:h-[500px]">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.8} color="#fbbf24" />
        <pointLight position={[-10, -10, -5]} intensity={0.4} color="#f97316" />
        <AnimatedSphere />
        <OrbitingRings />
        <FloatingParticles />
      </Canvas>
    </div>
  );
};

export default Scene3D;
