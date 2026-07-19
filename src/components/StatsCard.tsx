"use client";

import { SpecItem } from "@/utils/constants";

interface StatsCardProps {
  items: SpecItem[];
  className?: string;
}

export default function StatsCard({ items, className = "" }: StatsCardProps) {
  return (
    <div
      className={`glass-panel rounded-2xl p-5 md:p-6 w-full backdrop-blur-2xl transition-all duration-300 hover:border-white/20 ${className}`}
    >
      <h3 className="text-[11px] uppercase tracking-[0.25em] text-zinc-400 font-medium mb-4 flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
        Performance Specs
      </h3>

      <div className="grid grid-cols-3 gap-4 text-center divide-x divide-white/10">
        {items.map((item) => (
          <div key={item.label} className="px-1">
            <p className="font-serif-luxury text-xl sm:text-2xl md:text-3xl font-bold text-white">
              {item.value}
              {item.unit && <span className="text-amber-400 text-xs sm:text-sm ml-0.5">{item.unit}</span>}
            </p>
            <p className="mt-1 text-[10px] uppercase tracking-wider text-zinc-400 font-sans">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
