"use client";

import { Environment as DreiEnvironment } from "@react-three/drei";

interface EnvironmentProps {
  preset?: "studio" | "city" | "night" | "park";
  intensity?: number;
}

export default function Environment({
  preset = "studio",
  intensity = 2.5,
}: EnvironmentProps) {
  return (
    <DreiEnvironment preset={preset} environmentIntensity={intensity} />
  );
}
