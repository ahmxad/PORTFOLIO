import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register plugins once at module load.
gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };

// Honour reduced-motion globally so choreography degrades gracefully.
export const prefersReducedMotion =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;
