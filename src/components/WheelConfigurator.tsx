"use client";

import { useSoundEffect } from "@/hooks/useSoundEffect";

export interface WheelOption {
  id: string;
  name: string;
  material: string;
  weightDelta: string;
  price: number;
}

export const WHEEL_OPTIONS: WheelOption[] = [
  { id: "weissach-magnesium", name: "918 Spyder Weissach Magnesium", material: "Forged Magnesium", weightDelta: "-14.9 kg", price: 32500 },
  { id: "standard-forged", name: "918 Spyder Standard Forged Alloy", material: "Forged Aluminum", weightDelta: "Standard", price: 0 },
  { id: "black-weissach", name: "Gloss Black Forged Magnesium", material: "Forged Magnesium", weightDelta: "-14.9 kg", price: 34000 },
];

interface WheelConfiguratorProps {
  selectedWheel: WheelOption;
  onSelectWheel: (wheel: WheelOption) => void;
}

export default function WheelConfigurator({
  selectedWheel,
  onSelectWheel,
}: WheelConfiguratorProps) {
  const { playHover, playClick } = useSoundEffect();

  return (
    <div className="glass-panel rounded-3xl p-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-serif-luxury text-xl font-bold text-white">
          3. Wheel Rim Specifications
        </h3>
        <span className="text-xs font-mono text-amber-300 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full">
          {selectedWheel.name}
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {WHEEL_OPTIONS.map((wheel) => (
          <button
            key={wheel.id}
            onClick={() => {
              onSelectWheel(wheel);
              playClick();
            }}
            onMouseEnter={playHover}
            suppressHydrationWarning
            className={`flex flex-col justify-between p-4 rounded-xl border text-left transition-all duration-300 ${
              selectedWheel.id === wheel.id
                ? "border-amber-400 bg-white/10 shadow-[0_0_20px_rgba(245,158,11,0.2)]"
                : "border-white/10 bg-white/[0.02] hover:border-white/30"
            }`}
          >
            <div>
              <p className="text-xs font-bold text-white">{wheel.name}</p>
              <p className="text-[10px] text-zinc-400 mt-0.5">{wheel.material}</p>
            </div>

            <div className="mt-4 pt-2 border-t border-white/10 flex justify-between items-center text-[10px] font-mono">
              <span className="text-amber-400 font-semibold">{wheel.weightDelta}</span>
              <span className="text-zinc-300">
                {wheel.price > 0 ? `+$${wheel.price.toLocaleString()}` : "Included"}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
