"use client";

import { Environment } from "@react-three/drei";

export default function Lights() {
  return (
    <>
      {/* High Intensity Studio HDR Environment (Ensures bright, glossy metallic reflections) */}
      <Environment preset="studio" environmentIntensity={2.5} />

      {/* Ambient Base Light */}
      <ambientLight intensity={0.8} />

      {/* Primary Front Spotlight on Hood & Porsche Crest */}
      <spotLight
        position={[0, 12, 7]}
        angle={0.5}
        penumbra={0.9}
        intensity={35}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.0001}
        color="#ffffff"
      />

      {/* Direct Top Fill Light (Ensures roof and hood are brilliant, never dark) */}
      <directionalLight
        position={[0, 10, 2]}
        intensity={5}
        color="#ffffff"
      />

      {/* Golden Metallic Rim Light (Right contour) */}
      <directionalLight
        position={[-9, 7, -3]}
        intensity={6}
        color="#fef08a"
      />

      {/* Ice Blue Back Rim Light (Left contour) */}
      <directionalLight
        position={[9, 6, -5]}
        intensity={5}
        color="#bae6fd"
      />

      {/* Low Front Fill for Tires & Grille */}
      <pointLight position={[0, 0.5, 5]} intensity={8} color="#ffffff" />
    </>
  );
}
