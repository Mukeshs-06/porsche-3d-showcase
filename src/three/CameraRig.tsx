"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";

export type CameraPreset = "front" | "side" | "top" | "rear";

interface CameraRigProps {
  preset?: CameraPreset;
}

const PRESET_CONFIGS: Record<CameraPreset, { pos: [number, number, number]; target: [number, number, number] }> = {
  front: { pos: [2.0, 1.4, 6.8], target: [0.4, -0.6, 0] },
  side: { pos: [6.5, 1.1, 0.5], target: [0, -0.6, 0] },
  top: { pos: [0.1, 7.8, 0.1], target: [0, -0.6, 0] },
  rear: { pos: [-3.2, 1.5, -5.8], target: [0, -0.4, 0] },
};

export default function CameraRig({ preset = "front" }: CameraRigProps) {
  const { camera } = useThree();
  const isLoadedRef = useRef(false);
  const lookTargetRef = useRef(new THREE.Vector3(0.4, -0.6, 0));
  const activePosRef = useRef({ x: 2.0, y: 1.4, z: 6.8 });

  // Initial Intro Fly-In
  useEffect(() => {
    camera.position.set(4.5, 5, 13);
    camera.lookAt(lookTargetRef.current);

    const initialConfig = PRESET_CONFIGS.front;

    gsap.to(camera.position, {
      x: initialConfig.pos[0],
      y: initialConfig.pos[1],
      z: initialConfig.pos[2],
      duration: 2.4,
      ease: "power3.inOut",
      onUpdate: () => {
        camera.lookAt(lookTargetRef.current);
      },
      onComplete: () => {
        isLoadedRef.current = true;
      },
    });
  }, [camera]);

  // Animate camera on preset changes
  useEffect(() => {
    if (!isLoadedRef.current) return;

    const config = PRESET_CONFIGS[preset] || PRESET_CONFIGS.front;

    gsap.to(activePosRef.current, {
      x: config.pos[0],
      y: config.pos[1],
      z: config.pos[2],
      duration: 1.6,
      ease: "power3.inOut",
    });

    gsap.to(lookTargetRef.current, {
      x: config.target[0],
      y: config.target[1],
      z: config.target[2],
      duration: 1.6,
      ease: "power3.inOut",
    });
  }, [preset]);

  // Frame update for smooth mouse parallax using state.camera
  useFrame((state) => {
    if (!isLoadedRef.current) return;

    const { x, y } = state.pointer;
    const targetX = activePosRef.current.x + x * 0.8;
    const targetY = activePosRef.current.y + y * 0.4;
    const targetZ = activePosRef.current.z;

    const cam = state.camera;
    cam.position.x = THREE.MathUtils.lerp(cam.position.x, targetX, 0.04);
    cam.position.y = THREE.MathUtils.lerp(cam.position.y, targetY, 0.04);
    cam.position.z = THREE.MathUtils.lerp(cam.position.z, targetZ, 0.04);

    cam.lookAt(lookTargetRef.current);
  });

  return null;
}
