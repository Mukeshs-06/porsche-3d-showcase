"use client";

import Button from "./Button";
import { useSoundEffect } from "@/hooks/useSoundEffect";

export default function Footer() {
  const { playHover } = useSoundEffect();

  return (
    <footer className="relative bg-[#030305] border-t border-white/10 pt-20 pb-12 px-6 md:px-12 lg:px-16 text-zinc-400">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Column 1: Brand Info & Educational Disclaimer */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-amber-500 to-amber-300 flex items-center justify-center text-black font-serif-luxury font-bold text-base shadow-[0_0_20px_rgba(245,158,11,0.4)]">
                  P
                </div>
                <span className="font-serif-luxury text-2xl font-bold tracking-[0.25em] text-white">
                  PORSCHE
                </span>
              </div>
              <p className="text-xs text-zinc-400 max-w-sm font-light leading-relaxed mb-4">
                Experience the legend of the Porsche 918 Spyder in an interactive WebGL showroom environment.
              </p>
              <div className="p-3 rounded-xl border border-white/10 bg-white/[0.02] text-[11px] text-zinc-400 leading-normal max-w-sm mb-6">
                <strong className="text-amber-300 font-mono">EDUCATIONAL DISCLAIMER:</strong> Non-commercial fan concept portfolio project. Not affiliated with, endorsed by, or sponsored by Dr. Ing. h.c. F. Porsche AG.
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono text-amber-300">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span>STUTTGART - ZUFFENHAUSEN, GERMANY</span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="font-serif-luxury text-sm font-bold text-white uppercase tracking-widest mb-4">
              Explore 918
            </h4>
            <ul className="flex flex-col gap-3 text-xs font-light">
              <li>
                <a href="#overview" onMouseEnter={playHover} className="hover:text-amber-300 transition-colors focus-visible:outline-none focus-visible:text-amber-300">
                  Overview & Heritage
                </a>
              </li>
              <li>
                <a href="#performance" onMouseEnter={playHover} className="hover:text-amber-300 transition-colors focus-visible:outline-none focus-visible:text-amber-300">
                  Powertrain Architecture
                </a>
              </li>
              <li>
                <a href="#specs" onMouseEnter={playHover} className="hover:text-amber-300 transition-colors focus-visible:outline-none focus-visible:text-amber-300">
                  Technical Specifications
                </a>
              </li>
              <li>
                <a href="#configurator" onMouseEnter={playHover} className="hover:text-amber-300 transition-colors focus-visible:outline-none focus-visible:text-amber-300">
                  Exclusive Manufaktur
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Newsletter */}
          <div className="md:col-span-4">
            <h4 className="font-serif-luxury text-sm font-bold text-white uppercase tracking-widest mb-4">
              Porsche Newsroom
            </h4>
            <p className="text-xs text-zinc-400 font-light mb-4">
              Subscribe for exclusive hypercar allocations and track insights.
            </p>

            <form onSubmit={(e) => e.preventDefault()} suppressHydrationWarning className="flex gap-2">
              <input
                type="email"
                placeholder="Enter email address"
                aria-label="Email Address for Newsletter"
                suppressHydrationWarning
                className="w-full bg-white/5 border border-white/10 rounded-full px-4 py-3 text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-amber-400/80 transition-colors"
              />
              <Button variant="primary" type="submit" className="!px-5 !py-3 !text-[11px] shrink-0">
                Join
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-zinc-400 gap-4">
          <p>© {new Date().getFullYear()} Educational Portfolio Showcase. All trademarks belong to their respective owners.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Legal Notice</a>
            <a href="#" className="hover:text-white transition">Cookie Preferences</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
