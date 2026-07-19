"use client";

import { useState, useRef } from "react";
import Scene from "@/three/Scene";
import Loader from "@/three/Loader";
import Button from "./Button";
import StatsCard from "./StatsCard";
import ColorPicker from "./ColorPicker";
import { PAINT_COLORS, PERFORMANCE_STATS } from "@/utils/constants";
import { useSoundEffect } from "@/hooks/useSoundEffect";
import { useHeroAnimation } from "@/hooks/useHeroAnimation";
import { CameraPreset } from "@/three/CameraRig";

export default function Hero() {
  const [selectedColor, setSelectedColor] = useState(PAINT_COLORS[0].hex);
  const [cameraPreset, setCameraPreset] = useState<CameraPreset>("front");
  const [highBeams, setHighBeams] = useState(true);

  const { soundEnabled, toggleSound, playHover, playClick } = useSoundEffect();

  const heroRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const cameraBarRef = useRef<HTMLDivElement>(null);
  const hudRef = useRef<HTMLDivElement>(null);

  // Encapsulated GSAP Animation Hook
  useHeroAnimation({
    containerRef: heroRef,
    badgeRef,
    titleRef,
    subtitleRef,
    textRef,
    ctaRef,
    cameraBarRef,
    hudRef,
  });

  const cameraPresets: { id: CameraPreset; label: string; icon: string }[] = [
    { id: "front", label: "3/4 View", icon: "📐" },
    { id: "side", label: "Side Profile", icon: "🏎️" },
    { id: "top", label: "Top Aero", icon: "🚁" },
    { id: "rear", label: "Rear Wing", icon: "🏁" },
  ];

  return (
    <section id="overview" ref={heroRef} className="relative min-h-screen w-full overflow-hidden bg-[#050507]">
      {/* Preloader */}
      <Loader />

      {/* 3D Scene Layer */}
      <Scene carColor={selectedColor} cameraPreset={cameraPreset} highBeams={highBeams} />

      {/* Vignette Overlay */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-radial-vignette opacity-75" />

      {/* Fixed Audio Toggle Button */}
      <button
        onClick={toggleSound}
        onMouseEnter={playHover}
        suppressHydrationWarning
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full border border-white/15 bg-black/70 px-4 py-2.5 backdrop-blur-2xl text-xs font-mono text-zinc-300 hover:text-white hover:border-amber-400/60 transition-all duration-300 shadow-2xl"
        title="Toggle Audio Feedback"
      >
        <span className={`w-2 h-2 rounded-full ${soundEnabled ? "bg-amber-400 animate-ping" : "bg-zinc-600"}`} />
        <span>AUDIO {soundEnabled ? "ON" : "OFF"}</span>
      </button>

      {/* Hero Layout Container (Asymmetric 2-Column Split for Zero Overlap) */}
      <div className="relative z-20 flex min-h-screen flex-col justify-between px-6 pt-28 pb-10 md:px-12 md:pt-36 lg:px-16 max-w-7xl mx-auto pointer-events-none">
        
        {/* Upper Asymmetric Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full">
          {/* Left Column: Typography & Camera Controls (Safe from 3D car) */}
          <div className="lg:col-span-6 flex flex-col items-start text-left pointer-events-auto">
            {/* Badge */}
            <div ref={badgeRef} className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-1.5 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-amber-300">
                PORSCHE 918 SPYDER • HYPERCAR
              </span>
            </div>

            {/* Title */}
            <h1
              ref={titleRef}
              className="font-serif-luxury text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-none text-gradient-silver"
            >
              PORSCHE 918
            </h1>

            {/* Subtitle */}
            <h2
              ref={subtitleRef}
              className="mt-2 font-sans-luxury text-lg sm:text-xl md:text-2xl font-light tracking-[0.2em] text-zinc-300 uppercase"
            >
              FUTURE OF PERFORMANCE
            </h2>

            {/* Paragraph */}
            <p
              ref={textRef}
              className="mt-4 max-w-md text-xs sm:text-sm text-zinc-400 font-light leading-relaxed tracking-wide"
            >
              887 horsepower of hybrid precision. Engineered to shatter lap records and set the benchmark for high-speed luxury.
            </p>

            {/* Action Buttons */}
            <div ref={ctaRef} className="mt-6 flex flex-wrap items-center gap-3">
              <Button
                variant="primary"
                href="#performance"
                onMouseEnter={playHover}
                className="!px-6 !py-3 !text-xs"
              >
                Explore Model
              </Button>
              <Button
                variant="secondary"
                href="#configurator"
                onMouseEnter={playHover}
                className="!px-6 !py-3 !text-xs"
              >
                Configure
              </Button>
            </div>

            {/* Interactive 3D Camera Angles & High Beams Control Bar */}
            <div ref={cameraBarRef} className="mt-8 flex flex-col gap-3 w-full max-w-md">
              <span className="text-[10px] uppercase tracking-[0.25em] text-zinc-400 font-mono">
                CAMERA ANGLE PRESETS & LIGHTS
              </span>

              <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-xl">
                {cameraPresets.map((preset) => (
                  <button
                    key={preset.id}
                    onClick={() => {
                      setCameraPreset(preset.id);
                      playClick();
                    }}
                    onMouseEnter={playHover}
                    suppressHydrationWarning
                    className={`flex-1 py-2 px-3 rounded-xl text-[11px] font-medium transition-all duration-300 flex items-center justify-center gap-1.5 ${
                      cameraPreset === preset.id
                        ? "bg-amber-400 text-black font-semibold shadow-[0_0_15px_rgba(245,158,11,0.4)]"
                        : "text-zinc-300 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <span>{preset.icon}</span>
                    <span>{preset.label}</span>
                  </button>
                ))}

                {/* Laser Headlight Toggle */}
                <button
                  onClick={() => {
                    setHighBeams(!highBeams);
                    playClick();
                  }}
                  onMouseEnter={playHover}
                  suppressHydrationWarning
                  title="Toggle High Beam Laser Lights"
                  className={`py-2 px-3 rounded-xl text-[11px] font-mono transition-all duration-300 border ${
                    highBeams
                      ? "bg-amber-500/20 border-amber-400/80 text-amber-300 shadow-[0_0_12px_rgba(245,158,11,0.3)]"
                      : "bg-white/5 border-white/10 text-zinc-400 hover:text-white"
                  }`}
                >
                  💡 LIGHTS {highBeams ? "ON" : "OFF"}
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Open Space reserved for 3D Car */}
          <div className="hidden lg:block lg:col-span-6 h-full min-h-[300px]" />
        </div>

        {/* Bottom Floating Spec & Color HUDs */}
        <div
          ref={hudRef}
          className="mt-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-end w-full pt-8 pointer-events-auto"
        >
          <StatsCard items={PERFORMANCE_STATS.slice(0, 3)} />
          <ColorPicker
            colors={PAINT_COLORS}
            selectedColor={selectedColor}
            onSelectColor={(hex) => {
              setSelectedColor(hex);
              playClick();
            }}
            className="md:justify-self-end"
          />
        </div>
      </div>
    </section>
  );
}