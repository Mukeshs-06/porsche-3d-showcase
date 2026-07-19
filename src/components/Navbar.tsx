"use client";

import { useState, useEffect } from "react";
import Button from "./Button";
import { useSoundEffect } from "@/hooks/useSoundEffect";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { playHover, playClick } = useSoundEffect();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Overview", href: "#overview" },
    { name: "Performance", href: "#performance" },
    { name: "Interior", href: "#interior" },
    { name: "Specs", href: "#specs" },
    { name: "Configurator", href: "#configurator" },
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLElement>, href: string) => {
    playClick();
    if (href.startsWith("#")) {
      const targetEl = document.querySelector(href);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: "smooth" });
        setMobileMenuOpen(false);
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-40 transition-all duration-500 py-4 md:py-6 px-4 md:px-8">
      <div
        className={`mx-auto max-w-7xl flex items-center justify-between rounded-full border transition-all duration-500 px-6 md:px-8 py-3.5 ${
          isScrolled
            ? "border-white/15 bg-black/70 backdrop-blur-2xl shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
            : "border-white/10 bg-white/[0.03] backdrop-blur-xl shadow-[0_8px_25px_rgba(0,0,0,0.4)]"
        }`}
      >
        {/* Brand Logo */}
        <a
          href="#overview"
          onClick={(e) => handleSmoothScroll(e, "#overview")}
          onMouseEnter={playHover}
          className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-full"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-500 to-amber-300 flex items-center justify-center text-black font-serif-luxury font-bold text-sm shadow-[0_0_15px_rgba(245,158,11,0.4)] transition-transform duration-300 group-hover:scale-110">
            P
          </div>
          <span className="font-serif-luxury text-xl md:text-2xl font-bold tracking-[0.25em] text-white transition-opacity group-hover:opacity-90">
            PORSCHE
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              onMouseEnter={playHover}
              className="relative text-xs uppercase tracking-[0.2em] text-zinc-300 hover:text-white transition-colors duration-300 group py-1 focus-visible:outline-none focus-visible:text-amber-300"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gradient-to-r from-amber-400 to-white transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Desktop Right CTA Button linking to Configurator */}
        <div className="hidden md:flex items-center gap-4">
          <Button
            variant="outline"
            href="#configurator"
            onClick={(e) => handleSmoothScroll(e, "#configurator")}
            onMouseEnter={playHover}
            className="!px-5 !py-2.5 !text-xs"
          >
            Configure
          </Button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => {
            setMobileMenuOpen(!mobileMenuOpen);
            playClick();
          }}
          onMouseEnter={playHover}
          className="md:hidden flex flex-col justify-center items-center w-9 h-9 rounded-full bg-white/5 border border-white/10 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
          aria-label="Toggle Navigation Menu"
        >
          <div className="w-4 h-0.5 bg-white mb-1 transition-transform" />
          <div className="w-4 h-0.5 bg-white mb-1 transition-transform" />
          <div className="w-4 h-0.5 bg-white transition-transform" />
        </button>
      </div>

      {/* Mobile Menu Overlay Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-4 top-20 z-50 rounded-2xl border border-white/15 bg-black/90 backdrop-blur-2xl p-6 shadow-2xl flex flex-col gap-5 animate-in fade-in slide-in-from-top-4 duration-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              className="text-sm font-medium uppercase tracking-widest text-zinc-200 hover:text-amber-400 py-2 border-b border-white/5"
            >
              {link.name}
            </a>
          ))}
          <Button
            variant="primary"
            href="#configurator"
            className="w-full mt-2 !py-3 !text-xs"
            onClick={(e) => handleSmoothScroll(e, "#configurator")}
          >
            Configure 918 Spyder
          </Button>
        </div>
      )}
    </nav>
  );
}