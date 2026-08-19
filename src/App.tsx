import { useEffect, useRef, useState } from "react";
import {
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import VHSOverlay from "./components/VHSOverlay";
import SoundToggle from "./components/SoundToggle";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Education from "./pages/Education";
import Certification from "./pages/Certification";
import Contact from "./pages/Contact";

import { useSmoothScroll, getLenis } from "./lib/useSmoothScroll";
import { gsap, prefersReducedMotion } from "./lib/gsap";
import { useSound } from "./lib/sound";

export default function App() {
  useSmoothScroll();
  const location = useLocation();
  const { play } = useSound();

  // Displayed route lags behind the real URL during the transition curtain.
  const [displayLocation, setDisplayLocation] = useState(location);
  const curtainRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // No-op while we are already showing the target route.
    if (location.pathname === displayLocation.pathname) return;

    const curtain = curtainRef.current;
    const label = labelRef.current;

    if (prefersReducedMotion || !curtain) {
      setDisplayLocation(location);
      window.scrollTo(0, 0);
      return;
    }

    play("transition");
    play("navigation");

    const tl = gsap.timeline();
    tl.set(curtain, { transformOrigin: "top center", scaleY: 0 })
      .to(curtain, { scaleY: 1, duration: 0.4, ease: "power3.in" })
      .to(label, { opacity: 1, duration: 0.2 }, "-=0.15")
      .add(() => {
        setDisplayLocation(location);
        window.scrollTo(0, 0);
        getLenis()?.scrollTo(0, { immediate: true });
      })
      .to(label, { opacity: 0, duration: 0.15 }, "+=0.12")
      .set(curtain, { transformOrigin: "bottom center" })
      .to(curtain, { scaleY: 0, duration: 0.5, ease: "power3.out" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <div className="relative min-h-screen">
      <Nav />
      <VHSOverlay />

      {/* page content (rendered for the displayed, transitioning route) */}
      <Routes location={displayLocation}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/education" element={<Education />} />
        <Route path="/certification" element={<Certification />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Footer />

      {/* transition curtain */}
      <div ref={curtainRef} className="curtain" aria-hidden="true">
        <div
          ref={labelRef}
          className="font-display flex h-full items-center justify-center text-signyellow"
          style={{
            fontSize: "clamp(3rem,14vw,12rem)",
            opacity: 0,
            textShadow: "4px 4px 0 var(--color-ink)",
          }}
        >
          AHMAD
        </div>
      </div>

      {/* persistent sound control */}
      <div className="fixed bottom-4 right-4 z-55">
        <SoundToggle />
      </div>
    </div>
  );
}

