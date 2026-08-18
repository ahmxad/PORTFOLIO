import { useEffect } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger, prefersReducedMotion } from "./gsap";

// Single Lenis instance for the whole app, driven by GSAP's ticker so
// ScrollTrigger and smooth scroll stay perfectly in sync. Never create
// more than one instance.
let lenis: Lenis | null = null;

export function getLenis() {
  return lenis;
}

export function useSmoothScroll() {
  useEffect(() => {
    if (prefersReducedMotion) return; // skip smoothness; native scroll only

    lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.9,
    });

    const raf = (time: number) => {
      lenis?.raf(time * 1000);
    };
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    // Keep ScrollTrigger informed of Lenis-driven scrolling.
    lenis.on("scroll", ScrollTrigger.update);

    return () => {
      gsap.ticker.remove(raf);
      lenis?.destroy();
      lenis = null;
    };
  }, []);
}
