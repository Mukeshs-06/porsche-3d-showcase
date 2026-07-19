"use client";

import { Sparkles } from "@react-three/drei";

interface ParticlesProps {
  count?: number;
  scale?: number;
  color?: string;
  size?: number;
  speed?: number;
  opacity?: number;
}

export default function Particles({
  count = 55,
  scale = 15,
  color = "#fef08a",
  size = 2.5,
  speed = 0.4,
  opacity = 0.35,
}: ParticlesProps) {
  return (
    <Sparkles
      count={count}
      scale={scale}
      size={size}
      speed={speed}
      opacity={opacity}
      color={color}
    />
  );
}
