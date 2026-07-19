"use client";

import { useSoundEffect } from "@/hooks/useSoundEffect";

export default function SpecsSection() {
  const { playHover } = useSoundEffect();

  const specsCategories = [
    {
      category: "Engine & Transmission",
      specs: [
        { name: "Displacement", value: "4,593 cc" },
        { name: "Max Engine Speed", value: "9,150 rpm" },
        { name: "Transmission", value: "7-speed PDK dual-clutch" },
        { name: "Valvetrain", value: "4 valves per cylinder" },
      ],
    },
    {
      category: "Dimensions & Chassis",
      specs: [
        { name: "Curb Weight", value: "1,674 kg (Weissach: 1,634 kg)" },
        { name: "Wheelbase", value: "2,730 mm" },
        { name: "Length / Width", value: "4,643 mm / 1,940 mm" },
        { name: "Brake System", value: "PCCB Ceramic Composite" },
      ],
    },
    {
      category: "Aerodynamics & Efficiency",
      specs: [
        { name: "Active Aerodynamics", value: "3-stage PAA System" },
        { name: "Drag Coefficient", value: "0.36 Cd (Race Mode)" },
        { name: "CO2 Emissions", value: "72 g/km (Combined)" },
        { name: "Fuel Tank Capacity", value: "70 Liters" },
      ],
    },
  ];

  return (
    <section id="specs" className="relative py-28 px-6 md:px-12 lg:px-16 bg-[#050507]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-1.5 mb-3">
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-amber-300">
              TECHNICAL DATA
            </span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gradient-silver mb-4">
            SPECIFICATIONS & DATA
          </h2>
          <p className="text-sm text-zinc-400 font-light leading-relaxed">
            Every millimeter engineered with zero compromise. Explore the complete technical specification matrix of the Porsche 918 Spyder.
          </p>
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specsCategories.map((cat) => (
            <div
              key={cat.category}
              onMouseEnter={playHover}
              className="glass-panel rounded-3xl p-8 transition-all duration-300 hover:border-amber-500/40 flex flex-col justify-between"
            >
              <div>
                <h3 className="font-serif-luxury text-xl font-bold text-white mb-6 pb-4 border-b border-white/10 flex items-center justify-between">
                  <span>{cat.category}</span>
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                </h3>

                <div className="flex flex-col gap-4">
                  {cat.specs.map((item) => (
                    <div key={item.name} className="flex justify-between items-center text-xs py-1 border-b border-white/5">
                      <span className="text-zinc-400 uppercase tracking-wider">{item.name}</span>
                      <span className="font-mono font-medium text-white text-right">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 text-[11px] text-amber-300 font-mono flex items-center gap-2">
                <span>PORSCHE APPROVED SPEC</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
