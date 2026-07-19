"use client";

import { useState } from "react";
import Button from "./Button";
import WheelConfigurator, { WHEEL_OPTIONS, WheelOption } from "./WheelConfigurator";
import { PAINT_COLORS, CALIPER_COLORS } from "@/utils/constants";
import { useSoundEffect } from "@/hooks/useSoundEffect";
import { formatCurrency } from "@/utils/helpers";

export default function ConfiguratorSection() {
  const { playHover, playClick } = useSoundEffect();
  const [selectedPaint, setSelectedPaint] = useState(PAINT_COLORS[0]);
  const [selectedCaliper, setSelectedCaliper] = useState(CALIPER_COLORS[0]);
  const [selectedWheel, setSelectedWheel] = useState<WheelOption>(WHEEL_OPTIONS[0]);
  const [weissachPackage, setWeissachPackage] = useState(true);

  // Price calculations
  const basePrice = 845000;
  const weissachPrice = weissachPackage ? 84000 : 0;
  const paintPrice = selectedPaint.category === "Special" ? 12500 : 0;
  const wheelPrice = selectedWheel.price;
  const totalPrice = basePrice + weissachPrice + paintPrice + wheelPrice;

  return (
    <section id="configurator" className="relative py-28 px-6 md:px-12 lg:px-16 bg-[#08080c] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-1.5 mb-3">
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-amber-300">
                PORSCHE EXCLUSIVE MANUFAKTUR
              </span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gradient-silver">
              BUILD YOUR SPYDER
            </h2>
          </div>
          <p className="max-w-md text-sm text-zinc-400 font-light leading-relaxed">
            Personalize your hypercar finish, braking package, wheel specification, and lightweight performance options.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Configurator Control Panel */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            {/* 1. Paint Selection */}
            <div className="glass-panel rounded-3xl p-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-serif-luxury text-xl font-bold text-white">
                  1. Exterior Paint Color
                </h3>
                <span className="text-xs font-mono text-amber-300 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full">
                  {selectedPaint.name}
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {PAINT_COLORS.map((paint) => (
                  <button
                    key={paint.id}
                    onClick={() => {
                      setSelectedPaint(paint);
                      playClick();
                    }}
                    onMouseEnter={playHover}
                    suppressHydrationWarning
                    className={`flex items-center gap-3 p-3 rounded-xl border transition-all duration-300 ${
                      selectedPaint.id === paint.id
                        ? "border-amber-400 bg-white/10 shadow-[0_0_20px_rgba(245,158,11,0.2)]"
                        : "border-white/10 bg-white/[0.02] hover:border-white/30"
                    }`}
                  >
                    <span
                      className="w-6 h-6 rounded-full border border-white/20 shrink-0"
                      style={{ backgroundColor: paint.hex }}
                    />
                    <div className="text-left overflow-hidden">
                      <p className="text-xs font-medium text-white truncate">{paint.name}</p>
                      <p className="text-[10px] text-zinc-400">{paint.category}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Brake Calipers */}
            <div className="glass-panel rounded-3xl p-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-serif-luxury text-xl font-bold text-white">
                  2. Brake Caliper Finish
                </h3>
                <span className="text-xs font-mono text-amber-300 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full">
                  {selectedCaliper.name}
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {CALIPER_COLORS.map((caliper) => (
                  <button
                    key={caliper.id}
                    onClick={() => {
                      setSelectedCaliper(caliper);
                      playClick();
                    }}
                    onMouseEnter={playHover}
                    suppressHydrationWarning
                    className={`flex items-center gap-2.5 p-3 rounded-xl border transition-all duration-300 ${
                      selectedCaliper.id === caliper.id
                        ? "border-amber-400 bg-white/10 shadow-[0_0_20px_rgba(245,158,11,0.2)]"
                        : "border-white/10 bg-white/[0.02] hover:border-white/30"
                    }`}
                  >
                    <span
                      className="w-5 h-5 rounded-full border border-white/20 shrink-0"
                      style={{ backgroundColor: caliper.hex }}
                    />
                    <span className="text-xs font-medium text-white truncate">{caliper.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Wheel Configurator Extension */}
            <WheelConfigurator
              selectedWheel={selectedWheel}
              onSelectWheel={setSelectedWheel}
            />

            {/* 4. Weissach Package Toggle */}
            <div className="glass-panel rounded-3xl p-8 flex items-center justify-between gap-4">
              <div>
                <h3 className="font-serif-luxury text-xl font-bold text-white mb-1">
                  Weissach Lightweight Package
                </h3>
                <p className="text-xs text-zinc-400">
                  Magnesium wheels, extended carbon fiber aero, and 40kg weight reduction.
                </p>
              </div>

              <button
                onClick={() => {
                  setWeissachPackage(!weissachPackage);
                  playClick();
                }}
                onMouseEnter={playHover}
                suppressHydrationWarning
                className={`w-14 h-8 rounded-full transition-colors duration-300 p-1 relative flex items-center ${
                  weissachPackage ? "bg-amber-400" : "bg-zinc-800 border border-white/10"
                }`}
              >
                <div
                  className={`w-6 h-6 rounded-full bg-black transition-transform duration-300 shadow-md ${
                    weissachPackage ? "translate-x-6 bg-black" : "translate-x-0 bg-white"
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Right Summary Drawer & Price Output */}
          <div className="lg:col-span-5 glass-panel rounded-3xl p-8 sticky top-28">
            <h3 className="font-serif-luxury text-2xl font-bold text-white mb-6 pb-4 border-b border-white/10 flex items-center justify-between">
              <span>CONFIG SUMMARY</span>
              <span className="text-xs font-mono font-normal text-amber-400">PORSCHE ID: 918-SPY</span>
            </h3>

            <div className="flex flex-col gap-4 text-xs">
              <div className="flex justify-between py-2 border-b border-white/5">
                <span className="text-zinc-400 uppercase">Base 918 Spyder MSRP</span>
                <span className="font-mono text-white font-semibold">{formatCurrency(basePrice)}</span>
              </div>

              <div className="flex justify-between py-2 border-b border-white/5">
                <span className="text-zinc-400 uppercase">Exterior ({selectedPaint.name})</span>
                <span className="font-mono text-white font-semibold">
                  {paintPrice > 0 ? `+${formatCurrency(paintPrice)}` : "Included"}
                </span>
              </div>

              <div className="flex justify-between py-2 border-b border-white/5">
                <span className="text-zinc-400 uppercase">Brake Calipers ({selectedCaliper.name})</span>
                <span className="font-mono text-white font-semibold">Included</span>
              </div>

              <div className="flex justify-between py-2 border-b border-white/5">
                <span className="text-zinc-400 uppercase">Wheel Rims ({selectedWheel.name})</span>
                <span className="font-mono text-white font-semibold">
                  {wheelPrice > 0 ? `+${formatCurrency(wheelPrice)}` : "Included"}
                </span>
              </div>

              <div className="flex justify-between py-2 border-b border-white/5">
                <span className="text-zinc-400 uppercase">Weissach Package</span>
                <span className="font-mono text-white font-semibold">
                  {weissachPackage ? `+${formatCurrency(weissachPrice)}` : "Not Selected"}
                </span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex justify-between items-baseline">
              <span className="text-xs uppercase tracking-widest text-zinc-400">Total Price</span>
              <span className="font-serif-luxury text-3xl font-bold text-amber-300 font-mono">
                {formatCurrency(totalPrice)}
              </span>
            </div>

            <Button variant="primary" className="w-full mt-6 !py-4 !text-xs">
              Request Allocation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
