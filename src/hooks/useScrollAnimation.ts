"use client";

import { useEffect, RefObject } from "react";
import gsap from "gsap";

export function useScrollAnimation(targetRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = targetRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.fromTo(
              entry.target,
              { y: 40, opacity: 0 },
              { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
            );
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [targetRef]);
}
