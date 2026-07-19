"use client";

import { useProgress } from "@react-three/drei";
import { useEffect, useState } from "react";

export default function Loader() {
  const { progress, active } = useProgress();
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (!active && progress === 100) {
      const timeout = setTimeout(() => {
        setHidden(true);
      }, 800);
      return () => clearTimeout(timeout);
    }
  }, [active, progress]);

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050507] transition-opacity duration-700 ${
        progress === 100 && !active ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="relative flex flex-col items-center max-w-sm w-full px-6">
        {/* Porsche Brand Crest */}
        <div className="mb-6 flex items-center justify-center w-16 h-16 rounded-full border border-amber-500/30 bg-amber-500/5 shadow-[0_0_30px_rgba(245,158,11,0.15)]">
          <span className="font-serif-luxury text-amber-400 font-bold text-xl tracking-widest">
            P
          </span>
        </div>

        {/* Brand Name */}
        <h2 className="font-serif-luxury text-2xl md:text-3xl font-light tracking-[0.35em] text-white uppercase mb-2">
          P O R S C H E
        </h2>
        <p className="text-xs uppercase tracking-[0.25em] text-zinc-400 mb-8">
          Interactive 918 Experience
        </p>

        {/* Progress Bar */}
        <div className="w-full bg-zinc-900/80 rounded-full h-1 p-0.5 overflow-hidden border border-white/10 relative">
          <div
            className="h-full bg-gradient-to-r from-amber-500 via-amber-300 to-white rounded-full transition-all duration-300 ease-out shadow-[0_0_12px_rgba(245,158,11,0.8)]"
            style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
          />
        </div>

        {/* Progress Info */}
        <div className="mt-4 flex justify-between w-full text-xs font-mono text-zinc-400">
          <span>LOADING SHOWROOM</span>
          <span className="text-amber-400 font-semibold">{Math.round(progress)}%</span>
        </div>
      </div>
    </div>
  );
}
