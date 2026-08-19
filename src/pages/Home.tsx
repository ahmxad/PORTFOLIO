import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap, prefersReducedMotion } from "../lib/gsap";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { BRAND, NAV_ITEMS } from "../data/content";
import AhmadTitle from "../components/AhmadTitle";
import ThreeBackground from "../components/ThreeBackground";

const QUICK = [
  { label: "Enter Site", to: "/about", kind: "red" as const },
  { label: "Contact", to: "/contact", kind: "outline" as const },
];

export default function Home() {
  useDocumentTitle("Ahmad — Home");
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = root.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      const title = el.querySelector<HTMLElement>("[data-title]");
      const chroma = el.querySelector<HTMLElement>("[data-chroma]");
      const tag = el.querySelector<HTMLElement>("[data-tag]");
      const bars = el.querySelectorAll<HTMLElement>("[data-bar]");
      const items = el.querySelectorAll<HTMLElement>("[data-stagger]");
      const stamp = el.querySelector<HTMLElement>("[data-stamp]");

      if (prefersReducedMotion) {
        gsap.set(
          [title, tag, chroma, stamp, ...Array.from(items), ...Array.from(bars)],
          { opacity: 1, y: 0, scale: 1 },
        );
        return;
      }

      const tl = gsap.timeline({ delay: 0.15 });
      tl.fromTo(
        bars,
        { scaleX: 0, transformOrigin: "left" },
        { scaleX: 1, duration: 0.5, stagger: 0.06, ease: "power2.out" },
      )
        .fromTo(
          title,
          { opacity: 0, scale: 0.86, y: 30, filter: "blur(8px)" },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.9,
            ease: "power4.out",
          },
        )
        .fromTo(
          chroma,
          { opacity: 0, x: -24 },
          { opacity: 1, x: 0, duration: 0.6, ease: "power3.out" },
          "-=0.5",
        )
        .fromTo(
          tag,
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.5 },
          "-=0.3",
        )
        .fromTo(
          items,
          { opacity: 0, y: 22 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: "power3.out" },
          "-=0.2",
        )
        .fromTo(
          stamp,
          { opacity: 0, rotate: -14, scale: 1.3 },
          { opacity: 1, rotate: -8, scale: 1, duration: 0.4 },
          "-=0.3",
        );

    }, el);
    return () => ctx.revert();
  }, []);

  return (
      <main
        ref={root}
        className="relative z-10 flex min-h-screen flex-col overflow-hidden bg-ink"
      >
        {/* grain + three background */}
        <div className="grain absolute inset-0 z-0" aria-hidden="true" />
        <ThreeBackground />

        {/* test-pattern bars (retro broadcast) */}
        <div className="relative z-10 flex h-2 w-full" aria-hidden="true">
          {["var(--color-red)", "var(--color-signyellow)", "var(--color-cream)", "var(--color-ink-soft)"].map(
            (c, i) => (
              <span
                key={i}
                data-bar
                className="h-full flex-1"
                style={{ background: c, opacity: 0.9 }}
              />
            ),
          )}
        </div>

        {/* top broadcast label */}
        <div
          data-stagger
          className="relative z-10 mx-auto mt-6 flex w-full max-w-5xl items-center justify-between px-5 font-type text-[11px] tracking-[0.3em] text-signyellow"
        >
          <span>CH.07 · RETRO BROADCAST</span>
          <span className="text-cream">A SPECIAL PRESENTATION</span>
        </div>

        {/* HERO */}
        <section className="relative z-10 flex flex-1 flex-col items-center justify-center px-5 py-10 text-center">
          <div className="relative" data-title>
            <AhmadTitle size="mega" glow="red" tilt={-2} animate className="leading-none" />
            {/* misregistered ghost behind, for imperfect edge behavior */}
            <span
              data-chroma
              aria-hidden
              className="font-display display-mega absolute left-0 top-0 -z-10 select-none"
              style={{ color: "var(--color-gold)", opacity: 0.3, transform: "translate(6px,6px) rotate(-2deg)" }}
            >
              {BRAND.name}
            </span>
          </div>

          <p
            data-tag
            className="mt-4 font-type text-sm tracking-[0.35em] text-signyellow sm:text-base"
          >
            {BRAND.tagline}
          </p>

          <div
            data-stagger
            className="mt-3 max-w-xl font-body text-sm text-beige sm:text-base"
          >
            Full-stack web developer. Computer Science undergraduate. CEH-certified. QuickBooks Bookkeeper
          </div>

          <div
            data-stagger
            className="mt-9 flex flex-wrap items-center justify-center gap-4"
          >
            {QUICK.map((q) => (
              <Link
                key={q.to}
                to={q.to}
                className={[
                  "btn-retro px-6 py-3 text-sm",
                  q.kind === "red"
                    ? "bg-red text-cream"
                    : "bg-transparent text-cream",
                ].join(" ")}
              >
                {q.label} →
              </Link>
            ))}
          </div>
        </section>

        {/* rotated stamp */}
        <div className="pointer-events-none relative z-10 mb-8 flex justify-center">
          <span
            data-stamp
            className="stamp border-2 border-ink bg-red px-4 py-2 font-head text-cream"
            style={{ transform: "rotate(-8deg)" }}
          >
            FILE NO. 001 · ORIGINAL
          </span>
        </div>

        {/* full channel menu strip */}
        <nav
          data-stagger
          aria-label="All sections"
          className="relative z-10 flex flex-wrap items-center justify-center gap-2 border-t-2 border-ink-soft bg-ink-soft px-4 py-4"
        >
          {NAV_ITEMS.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="font-head text-xs tracking-[0.14em] text-cream hover:text-signyellow"
            >
              {n.label}
              {n.to !== "/" ? "" : " ·"}
            </Link>
          ))}
        </nav>
      </main>
    );
}

