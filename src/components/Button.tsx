"use client";

import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  icon?: React.ReactNode;
  href?: string;
}

export default function Button({
  children,
  variant = "primary",
  icon,
  href,
  className = "",
  onClick,
  ...props
}: ButtonProps) {
  const baseStyles =
    "relative inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-medium tracking-wider uppercase transition-all duration-300 rounded-full overflow-hidden group cursor-pointer active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400";

  const variants = {
    primary:
      "bg-gradient-to-r from-white via-zinc-100 to-zinc-300 text-black shadow-[0_0_25px_rgba(255,255,255,0.25)] hover:shadow-[0_0_35px_rgba(255,255,255,0.45)] hover:scale-[1.02]",
    secondary:
      "bg-zinc-900/80 text-white border border-white/15 backdrop-blur-md hover:bg-zinc-800 hover:border-white/30 hover:scale-[1.02]",
    outline:
      "bg-transparent text-white border border-white/20 hover:border-amber-400/80 hover:text-amber-300 hover:shadow-[0_0_20px_rgba(245,158,11,0.2)]",
  };

  const content = (
    <>
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
      <span className="relative z-10 font-sans tracking-[0.15em] font-semibold">
        {children}
      </span>
      {icon ? (
        <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
          {icon}
        </span>
      ) : (
        <svg
          className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>}
        suppressHydrationWarning
        className={`${baseStyles} ${variants[variant]} ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      suppressHydrationWarning
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {content}
    </button>
  );
}