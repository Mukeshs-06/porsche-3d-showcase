"use client";

import { useState } from "react";
import Image from "next/image";
import { useSoundEffect } from "@/hooks/useSoundEffect";

export default function InteriorSection() {
  const { playHover } = useSoundEffect();
  const [selectedHotspot, setSelectedHotspot] = useState<"cockpit" | "seats" | "monocoque">("cockpit");

  const hotspots = {
    cockpit: {
      title: "Driver-Centric Ergonomics",
      subtitle: "Elevated Center Console & Rotary Controls",
      description: "Inspired by Carrera GT heritage, the steep center console brings touch-sensitive glass interfaces and analog rotary selectors directly into the driver's natural reach.",
      specs: ["High-resolution TFT Displays", "Burmester® High-End Surround Sound", "Ergonomic Sports Steering Wheel"],
      img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    },
    seats: {
      title: "Lightweight Bucket Seats",
      subtitle: "Carbon Fiber Reinforced Plastic (CFRP)",
      description: "Custom-molded carbon bucket seats lined with lightweight Alcantara and leather trim, shaving weight while providing unyielding lateral support during high-G cornering.",
      specs: ["Weight: 12.5 kg per Seat", "6-Point Racing Harness Ready", "Embossed Porsche Crest Headrests"],
      img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    },
    monocoque: {
      title: "Full Carbon Monocoque",
      subtitle: "Torsional Rigidity & Motorsport Safety",
      description: "The structural heart of the 918 Spyder is a full carbon-fiber-reinforced plastic (CFRP) unit delivering extreme torsional stiffness with minimal mass.",
      specs: ["40,000 Nm/degree Torsional Stiffness", "Integrated Rollbar Protection", "Carbon Front Unit Subframe"],
      img: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1200&q=80",
    },
  };

  return (
    <section id="interior" className="relative py-28 px-6 md:px-12 lg:px-16 bg-[#08080c] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-1.5 mb-3">
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-amber-300">
                COCKPIT & ARCHITECTURE
              </span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gradient-silver">
              INTERIOR CRAFTSMANSHIP
            </h2>
          </div>
          <p className="max-w-md text-sm text-zinc-400 font-light leading-relaxed">
            Where analogue racing heritage meets touch-capacitive hybrid controls. Designed exclusively around the driver.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Media Highlight */}
          <div className="lg:col-span-7 glass-panel rounded-3xl overflow-hidden relative min-h-[380px] sm:min-h-[460px] border border-white/10 group">
            <Image
              src={hotspots[selectedHotspot].img}
              alt={hotspots[selectedHotspot].title}
              fill
              unoptimized
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

            <div className="absolute bottom-8 left-8 right-8">
              <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
                {hotspots[selectedHotspot].subtitle}
              </span>
              <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white mt-1">
                {hotspots[selectedHotspot].title}
              </h3>
            </div>
          </div>

          {/* Right Selector Cards */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {(["cockpit", "seats", "monocoque"] as const).map((key) => {
              const item = hotspots[key];
              const isSelected = selectedHotspot === key;
              return (
                <button
                  key={key}
                  onClick={() => setSelectedHotspot(key)}
                  onMouseEnter={playHover}
                  suppressHydrationWarning
                  className={`glass-panel rounded-2xl p-6 text-left transition-all duration-300 border ${
                    isSelected
                      ? "border-amber-400/80 bg-white/10 shadow-[0_0_25px_rgba(245,158,11,0.2)]"
                      : "border-white/10 bg-white/[0.02] hover:border-white/30"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-serif-luxury text-lg font-bold text-white">
                      {item.title}
                    </h4>
                    <span className={`w-2 h-2 rounded-full ${isSelected ? "bg-amber-400 animate-ping" : "bg-zinc-700"}`} />
                  </div>
                  <p className="text-xs text-zinc-400 font-light leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {isSelected && (
                    <div className="pt-3 border-t border-white/10 flex flex-col gap-1.5 animate-in fade-in duration-300">
                      {item.specs.map((spec) => (
                        <span key={spec} className="text-[11px] font-mono text-amber-300">
                          • {spec}
                        </span>
                      ))}
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
