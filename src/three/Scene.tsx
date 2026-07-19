"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, ContactShadows } from "@react-three/drei";
import { Suspense } from "react";

import Car from "./Car";
import Floor from "./Floor";
import Lights from "./Lights";
import CameraRig, { CameraPreset } from "./CameraRig";
import Environment from "./Environment";
import Particles from "./Particles";

interface SceneProps {
  carColor?: string;
  caliperColor?: string;
  cameraPreset?: CameraPreset;
  highBeams?: boolean;
}

export default function Scene({
  carColor = "#d1d5db",
  caliperColor = "#84cc16",
  cameraPreset = "front",
  highBeams = true,
}: SceneProps) {
  return (
    <div className="absolute inset-0 z-0 bg-[#050507]">
      <Canvas
        shadows
        camera={{
          position: [2.0, 1.4, 6.8],
          fov: 36,
        }}
        gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}
      >
        <color attach="background" args={["#050507"]} />

        <Environment preset="studio" intensity={2.5} />
        <Lights />
        <Particles count={55} color="#fef08a" />

        <Suspense fallback={null}>
          <Car color={carColor} caliperColor={caliperColor} highBeams={highBeams} />
        </Suspense>

        <Floor />

        {/* Ground Contact Shadows */}
        <ContactShadows
          position={[0, -1.49, 0]}
          opacity={0.85}
          blur={2.2}
          scale={14}
          far={5}
          color="#000000"
        />

        <CameraRig preset={cameraPreset} />

        <OrbitControls
          autoRotate={false}
          enableDamping
          dampingFactor={0.05}
          enablePan={false}
          minDistance={4.5}
          maxDistance={11}
          maxPolarAngle={Math.PI / 2 - 0.02}
          minPolarAngle={Math.PI / 6}
          target={[0, -0.6, 0]}
        />
      </Canvas>
    </div>
  );
}
