"use client";

import { useEffect, RefObject } from "react";
import gsap from "gsap";

interface HeroAnimationRefs {
  containerRef: RefObject<HTMLDivElement | null>;
  badgeRef: RefObject<HTMLDivElement | null>;
  titleRef: RefObject<HTMLHeadingElement | null>;
  subtitleRef: RefObject<HTMLHeadingElement | null>;
  textRef: RefObject<HTMLParagraphElement | null>;
  ctaRef: RefObject<HTMLDivElement | null>;
  cameraBarRef: RefObject<HTMLDivElement | null>;
  hudRef: RefObject<HTMLDivElement | null>;
}

export function useHeroAnimation({
  containerRef,
  badgeRef,
  titleRef,
  subtitleRef,
  textRef,
  ctaRef,
  cameraBarRef,
  hudRef,
}: HeroAnimationRefs) {
  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1.2 } });

      if (badgeRef.current) {
        tl.fromTo(badgeRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, delay: 0.4 });
      }
      if (titleRef.current) {
        tl.fromTo(titleRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1 }, "-=0.8");
      }
      if (subtitleRef.current) {
        tl.fromTo(subtitleRef.current, { y: 25, opacity: 0 }, { y: 0, opacity: 1 }, "-=0.8");
      }
      if (textRef.current) {
        tl.fromTo(textRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1 }, "-=0.8");
      }
      if (ctaRef.current) {
        tl.fromTo(ctaRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1 }, "-=0.8");
      }
      if (cameraBarRef.current) {
        tl.fromTo(cameraBarRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1 }, "-=0.8");
      }
      if (hudRef.current) {
        tl.fromTo(hudRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1 }, "-=0.6");
      }
    }, containerRef);

    return () => ctx.revert();
  }, [containerRef, badgeRef, titleRef, subtitleRef, textRef, ctaRef, cameraBarRef, hudRef]);
}
