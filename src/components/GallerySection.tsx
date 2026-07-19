"use client";

import { useState } from "react";
import Image from "next/image";
import { GALLERY_ITEMS } from "@/utils/constants";
import { useSoundEffect } from "@/hooks/useSoundEffect";

export default function GallerySection() {
  const { playHover, playClick } = useSoundEffect();
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <section id="design" className="relative py-28 px-6 md:px-12 lg:px-16 bg-[#050507]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-1.5 mb-3">
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-amber-300">
                DESIGN GALLERY
              </span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gradient-silver">
              AUTOMOTIVE ARTWORK
            </h2>
          </div>
          <p className="max-w-md text-sm text-zinc-400 font-light leading-relaxed">
            Every curve sculpted in the Weissach wind tunnel to minimize drag and maximize high-speed downforce.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                setActiveImage(item.image);
                playClick();
              }}
              onMouseEnter={playHover}
              className="group relative rounded-3xl overflow-hidden cursor-pointer border border-white/10 glass-panel transition-all duration-500 hover:border-amber-400/50 hover:shadow-[0_0_30px_rgba(245,158,11,0.2)]"
            >
              <div className="relative w-full h-[320px] sm:h-[400px] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  unoptimized
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              </div>

              {/* Caption Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 flex justify-between items-end">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-amber-400 font-mono">
                    {item.category}
                  </span>
                  <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-white mt-1">
                    {item.title}
                  </h3>
                </div>

                <div className="w-10 h-10 rounded-full border border-white/20 bg-black/50 backdrop-blur-md flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110 group-hover:border-amber-400">
                  ↗
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          onClick={() => setActiveImage(null)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl p-6 flex items-center justify-center cursor-zoom-out animate-in fade-in duration-300"
        >
          <div className="relative max-w-5xl w-full rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
            <Image
              src={activeImage}
              alt="Expanded View"
              width={1200}
              height={800}
              unoptimized
              className="w-full h-auto max-h-[85vh] object-contain"
            />
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 border border-white/20 text-white flex items-center justify-center text-sm"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
