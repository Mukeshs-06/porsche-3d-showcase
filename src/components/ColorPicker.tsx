"use client";

import { PaintColor } from "@/utils/constants";

interface ColorPickerProps {
  colors: PaintColor[];
  selectedColor: string;
  onSelectColor: (hex: string) => void;
  className?: string;
}

export default function ColorPicker({
  colors,
  selectedColor,
  onSelectColor,
  className = "",
}: ColorPickerProps) {
  const currentPaint = colors.find((c) => c.hex === selectedColor) || colors[0];

  return (
    <div
      className={`glass-panel rounded-2xl p-5 md:p-6 w-full backdrop-blur-2xl transition-all duration-300 hover:border-white/20 ${className}`}
    >
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-[11px] uppercase tracking-[0.25em] text-zinc-400 font-medium flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
          Exterior Finish
        </h3>
        <span className="text-xs font-medium text-amber-300 font-mono">
          {currentPaint.name}
        </span>
      </div>

      <div className="flex items-center gap-3">
        {colors.map((c) => (
          <button
            key={c.id}
            onClick={() => onSelectColor(c.hex)}
            title={`${c.name} (${c.category})`}
            className={`relative w-8 h-8 rounded-full transition-all duration-300 flex items-center justify-center border-2 ${
              selectedColor === c.hex
                ? "scale-110 border-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.5)]"
                : "border-white/20 hover:border-white/60 hover:scale-105"
            }`}
            style={{ backgroundColor: c.hex }}
          >
            {selectedColor === c.hex && (
              <span className="w-2 h-2 rounded-full bg-white shadow-sm" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
