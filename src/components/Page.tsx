import { useLayoutEffect, useRef, type ReactNode } from "react";
import { gsap, prefersReducedMotion } from "../lib/gsap";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

interface Props {
  title: string;
  children: ReactNode;
  /** Background utility classes for the page shell. */
  className?: string;
  /** Extra padding to clear the fixed nav (default adds top space). */
  pad?: string;
}

// Wraps every route: sets the SEO title and runs a small, choreographed
// entrance for any element marked with [data-anim]. Elements are hidden
// synchronously in useLayoutEffect (no flash) then revealed.
export default function Page({
  title,
  children,
  className = "",
  pad = "pt-28 pb-24",
}: Props) {
  useDocumentTitle(title);
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const root = ref.current;
    if (!root) return;
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>("[data-anim]");
      if (prefersReducedMotion || items.length === 0) {
        gsap.set(items, { opacity: 1, y: 0 });
        return;
      }
      gsap.set(items, { opacity: 0, y: 26 });
      gsap.to(items, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.07,
        delay: 0.12,
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <main ref={ref} className={`relative z-10 min-h-screen ${pad} ${className}`}>
      {children}
    </main>
  );
}
