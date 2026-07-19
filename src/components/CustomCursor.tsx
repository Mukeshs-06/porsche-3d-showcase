"use client";

import { useEffect, useState } from "react";
import { useMousePosition } from "@/hooks/useMousePosition";

export default function CustomCursor() {
  const { x, y } = useMousePosition();
  const [isHovered, setIsHovered] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains("interactive")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mouseover", handleMouseOver);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  if (!mounted || (x === 0 && y === 0)) return null;

  return (
    <div className="hidden lg:block pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Inner Precision Dot */}
      <div
        className="fixed w-2 h-2 rounded-full bg-amber-400 -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 shadow-[0_0_8px_rgba(245,158,11,0.8)]"
        style={{ left: `${x}px`, top: `${y}px` }}
      />

      {/* Smooth Outer Luxury Ring */}
      <div
        className={`fixed rounded-full border border-amber-400/50 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out ${
          isHovered
            ? "w-14 h-14 bg-amber-400/10 border-amber-300 shadow-[0_0_25px_rgba(245,158,11,0.3)] scale-110"
            : "w-8 h-8 bg-transparent scale-100"
        }`}
        style={{ left: `${x}px`, top: `${y}px` }}
      />
    </div>
  );
}
