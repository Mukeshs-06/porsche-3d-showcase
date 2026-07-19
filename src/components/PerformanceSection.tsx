"use client";

import { useState } from "react";
import { PERFORMANCE_STATS } from "@/utils/constants";
import { useSoundEffect } from "@/hooks/useSoundEffect";

export default function PerformanceSection() {
  const { playHover } = useSoundEffect();
  const [activeTab, setActiveTab] = useState<"engine" | "hybrid" | "lap">("engine");

  const tabDetails = {
    engine: {
      title: "4.6L V8 Naturally Aspirated Engine",
      output: "608 HP @ 8,700 RPM",
      description: "Derived from the RS Spyder LMP2 racing car, this high-revving engine delivers breathtaking acoustic symphony and pure mechanical power up to 9,150 RPM.",
      highlights: ["Titanium Connecting Rods", "Dry Sump Lubrication", "Top-Pipe Exhaust Placement"],
    },
    hybrid: {
      title: "Dual Synchronous Electric Motors",
      output: "286 HP Electric Drive",
      description: "Independent front and rear electric motors provide instantaneous torque vectoring and all-wheel drive stability for explosive corner exit acceleration.",
      highlights: ["Liquid-Cooled 6.8 kWh Battery", "Regenerative Braking System", "E-Power Pure Electric Mode"],
    },
    lap: {
      title: "Nürburgring Nordschleife Benchmark",
      output: "6:57 Minutes Record",
      description: "The first street-legal production car to break the sub-7-minute barrier on the legendary Nürburgring Nordschleife circuit.",
      highlights: ["Weissach Aerodynamic Package", "Magnesium Lightweight Wheels", "Carbon Aeroblades"],
    },
  };

  return (
    <section id="performance" className="relative py-28 px-6 md:px-12 lg:px-16 bg-[#08080c] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-1.5 mb-3">
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-amber-300">
                HYBRID POWERTRAIN
              </span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gradient-silver">
              UNRIVALED PERFORMANCE
            </h2>
          </div>
          <p className="max-w-md text-sm text-zinc-400 font-light leading-relaxed">
            Combining race-bred combustion engineering with dual electric motor propulsion to redefine hypercar benchmarks.
          </p>
        </div>

        {/* Speedometer Gauge & Interactive Powertrain Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Speedometer Gauge Box */}
          <div className="lg:col-span-5 glass-panel rounded-3xl p-8 relative flex flex-col items-center justify-center min-h-[380px] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 via-transparent to-transparent pointer-events-none" />

            {/* Gauge Dial SVG */}
            <div className="relative w-64 h-64 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  className="stroke-zinc-800 fill-none"
                  strokeWidth="6"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  className="stroke-amber-400 fill-none transition-all duration-1000 ease-out drop-shadow-[0_0_12px_rgba(245,158,11,0.6)]"
                  strokeWidth="6"
                  strokeDasharray="264"
                  strokeDashoffset="35"
                  strokeLinecap="round"
                />
              </svg>

              <div className="absolute text-center flex flex-col items-center">
                <span className="text-xs uppercase tracking-[0.25em] text-zinc-400">
                  TOP SPEED
                </span>
                <span className="font-serif-luxury text-5xl font-extrabold text-white my-1">
                  345
                </span>
                <span className="text-xs font-mono text-amber-400 font-semibold tracking-wider">
                  KM / H
                </span>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between w-full pt-4 border-t border-white/10 text-xs text-zinc-400">
              <span>0 - 100 KM/H: <strong className="text-white font-mono">2.6s</strong></span>
              <span>TOTAL POWER: <strong className="text-amber-400 font-mono">887 HP</strong></span>
            </div>
          </div>

          {/* Powertrain Detail Tabs & Cards */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex items-center gap-3 p-1.5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl">
              {(["engine", "hybrid", "lap"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  onMouseEnter={playHover}
                  className={`flex-1 py-3 px-4 rounded-xl text-xs uppercase tracking-[0.15em] font-semibold transition-all duration-300 ${
                    activeTab === tab
                      ? "bg-amber-500 text-black shadow-[0_0_20px_rgba(245,158,11,0.4)]"
                      : "text-zinc-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {tab === "engine" ? "V8 Engine" : tab === "hybrid" ? "Hybrid Motors" : "Track Lap"}
                </button>
              ))}
            </div>

            <div className="glass-panel rounded-3xl p-8 transition-all duration-500 min-h-[260px] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-serif-luxury text-2xl font-bold text-white">
                    {tabDetails[activeTab].title}
                  </h3>
                  <span className="text-xs font-mono font-bold text-amber-300 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full">
                    {tabDetails[activeTab].output}
                  </span>
                </div>
                <p className="text-sm text-zinc-300 leading-relaxed font-light mb-6">
                  {tabDetails[activeTab].description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2.5 pt-4 border-t border-white/10">
                {tabDetails[activeTab].highlights.map((item) => (
                  <span
                    key={item}
                    className="text-xs font-sans text-zinc-300 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg"
                  >
                    ✓ {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {PERFORMANCE_STATS.slice(2).map((stat) => (
            <div
              key={stat.label}
              className="glass-panel rounded-2xl p-6 transition-all duration-300 hover:border-amber-500/30 group"
            >
              <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 mb-2">
                {stat.label}
              </p>
              <p className="font-serif-luxury text-3xl font-extrabold text-white group-hover:text-amber-300 transition-colors">
                {stat.value}
                {stat.unit && <span className="text-sm text-amber-400 font-sans ml-1">{stat.unit}</span>}
              </p>
              <p className="mt-2 text-xs text-zinc-400 font-light">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
