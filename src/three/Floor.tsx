"use client";

import { MeshReflectorMaterial } from "@react-three/drei";

export default function Floor() {
  return (
    <group position={[0, -1.6, 0]}>
      {/* Polished Concrete Showroom Floor with Glossy Mirror Reflection */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[60, 60]} />
        <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={1024}
          mirror={0.7}
          mixBlur={0.9}
          mixStrength={2.8}
          roughness={0.2}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#08080a"
          metalness={0.7}
        />
      </mesh>

      {/* Subtle Studio Spotlight Glow ring on floor under car */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.005, 0]}>
        <ringGeometry args={[1.5, 3.2, 64]} />
        <meshBasicMaterial
          color="#f59e0b"
          transparent
          opacity={0.07}
          side={2}
        />
      </mesh>
    </group>
  );
}
