"use client";

import { useFrame } from "@react-three/fiber";
import { Sphere, Box, Points, PointMaterial, MeshDistortMaterial } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

export function HeroScene({ mode }: { mode: "hardware" | "software" }) {
  const isHardware = mode === "hardware";
  const coreRef = useRef<THREE.Mesh>(null);
  const particlesRef = useRef<THREE.Points>(null);

  // Generate particles based on mode
  const particlesCount = 800;
  const positions = useMemo(() => {
    const pos = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return pos;
  }, []);

  useFrame((_state, delta) => {
    // Cap delta to prevent hitching when tab loses/regains focus
    const d = Math.min(delta, 0.05);
    if (coreRef.current) {
      coreRef.current.rotation.y += d * 0.2;
      coreRef.current.rotation.x += d * 0.1;
    }
    if (particlesRef.current) {
      if (isHardware) {
        particlesRef.current.rotation.y -= d * 0.05;
      } else {
        particlesRef.current.rotation.y += d * 0.15;
        particlesRef.current.rotation.x += d * 0.05;
      }
    }
  });

  return (
    <>
      {/* Lighting transitions depending on mode */}
      <ambientLight intensity={isHardware ? 0.3 : 0.1} />
      <directionalLight position={[10, 10, 5]} intensity={isHardware ? 1.5 : 0.5} color={isHardware ? "#ffffff" : "#00f3ff"} />
      <pointLight position={[-10, -10, -5]} intensity={isHardware ? 0.5 : 2} color={isHardware ? "#475569" : "#00f3ff"} />
      
      {/* The Central Core */}
      <Sphere ref={coreRef} args={[2, 64, 64]} position={[0, 0, 0]}>
        {isHardware ? (
          <meshStandardMaterial 
             color="#94a3b8" 
             metalness={0.9} 
             roughness={0.1} 
             wireframe={false} 
          />
        ) : (
          <MeshDistortMaterial 
             color="#00f3ff" 
             attach="material" 
             distort={0.4} 
             speed={2} 
             wireframe={true} 
          />
        )}
      </Sphere>

      {/* Orbiting Elements for Hardware */}
      {isHardware && (
        <group>
            {[...Array(5)].map((_, i) => (
                <Box key={i} args={[0.5, 0.5, 0.5]} position={[Math.sin(i) * 4, Math.cos(i) * 4, 0]}>
                    <meshStandardMaterial color="#cbd5e1" metalness={0.8} roughness={0.2} />
                </Box>
            ))}
            <mesh rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[4, 0.05, 16, 100]} />
                <meshStandardMaterial color="#475569" metalness={1} roughness={0} />
            </mesh>
        </group>
      )}

      {/* Particles environment */}
      <Points ref={particlesRef} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial 
          transparent 
          color={isHardware ? "#cbd5e1" : "#00f3ff"} 
          size={isHardware ? 0.05 : 0.02} 
          sizeAttenuation={true} 
          depthWrite={false} 
        />
      </Points>
    </>
  );
}
