"use client";

import { Center, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface CarProps {
  color?: string;
  caliperColor?: string;
  highBeams?: boolean;
}

export default function Car({
  color = "#d1d5db",
  caliperColor = "#84cc16",
  highBeams = true,
}: CarProps) {
  const { scene } = useGLTF("/models/car.glb");
  const carGroupRef = useRef<THREE.Group>(null);

  useEffect(() => {
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = true;
        child.receiveShadow = true;

        if (child.material) {
          if (child.material instanceof THREE.MeshStandardMaterial) {
            child.material.envMapIntensity = 2.4;

            const matName = child.material.name.toLowerCase();
            const meshName = child.name.toLowerCase();

            // Headlights & DRL Emissive Glow
            if (
              matName.includes("headlight") ||
              matName.includes("light") ||
              matName.includes("glass_light") ||
              meshName.includes("headlight") ||
              meshName.includes("lamp")
            ) {
              child.material.emissive = new THREE.Color(highBeams ? "#ffffff" : "#38bdf8");
              child.material.emissiveIntensity = highBeams ? 3.5 : 1.2;
            }

            // Caliper Color customization
            if (
              matName.includes("caliper") ||
              matName.includes("brake") ||
              meshName.includes("caliper")
            ) {
              child.material.color.set(caliperColor);
            }

            // Body Paint customization
            if (
              matName.includes("paint") ||
              matName.includes("body") ||
              matName.includes("car") ||
              matName.includes("color") ||
              meshName.includes("body") ||
              meshName.includes("paint")
            ) {
              child.material.color.set(color);
              child.material.metalness = 0.88;
              child.material.roughness = 0.12;
            }
          }
        }
      }
    });
  }, [scene, color, caliperColor, highBeams]);

  // Gentle levitation animation
  useFrame((state) => {
    if (carGroupRef.current) {
      const t = state.clock.getElapsedTime();
      carGroupRef.current.position.y = Math.sin(t * 1.5) * 0.015 - 1.5;
    }
  });

  return (
    <Center>
      <group ref={carGroupRef} position={[0, -1.5, 0]}>
        <primitive
          object={scene}
          scale={1.28}
          rotation={[0, Math.PI / 5.2, 0]}
        />

        {/* High-Beam Laser Projector Beams */}
        {highBeams && (
          <>
            <spotLight
              position={[-0.75, 0.45, 1.8]}
              target-position={[-0.75, 0, 10]}
              angle={0.45}
              penumbra={0.5}
              intensity={highBeams ? 25 : 5}
              color="#e0f2fe"
              castShadow
            />
            <spotLight
              position={[0.75, 0.45, 1.8]}
              target-position={[0.75, 0, 10]}
              angle={0.45}
              penumbra={0.5}
              intensity={highBeams ? 25 : 5}
              color="#e0f2fe"
              castShadow
            />

            {/* Glowing Floor Beam Puddles */}
            <pointLight position={[-0.75, 0.1, 3]} intensity={4} color="#38bdf8" />
            <pointLight position={[0.75, 0.1, 3]} intensity={4} color="#38bdf8" />
          </>
        )}
      </group>
    </Center>
  );
}

useGLTF.preload("/models/car.glb");
