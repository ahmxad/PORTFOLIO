import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { AUDIO_FILES } from "../data/content";

type SoundName = keyof typeof AUDIO_FILES;

interface SoundApi {
  play: (name: SoundName) => void;
  muted: boolean;
  toggleMuted: () => void;
  /** Whether at least one audio file has been proven to exist. */
  available: boolean;
}

const SoundContext = createContext<SoundApi | null>(null);

// Audio assets are optional. The build must NOT break if the /audio
// files are absent. We lazily create <audio> elements and silently
// swallow load/play errors so the rest of the site works untouched.
export function SoundProvider({ children }: { children: ReactNode }) {
  // Default to muted (opt-in) so we never surprise visitors with autoplay.
  const [muted, setMuted] = useState(true);
  const [available, setAvailable] = useState(false);
  const cache = useRef<Map<SoundName, HTMLAudioElement>>(new Map());

  const getEl = useCallback((name: SoundName) => {
    const existing = cache.current.get(name);
    if (existing) return existing;
    const el = new Audio(AUDIO_FILES[name]);
    el.preload = "auto";
    el.volume = 0.5;
    el.addEventListener(
      "canplaythrough",
      () => setAvailable(true),
      { once: true },
    );
    el.addEventListener("error", () => {
      /* file missing — ignore */
    });
    cache.current.set(name, el);
    return el;
  }, []);

  const play = useCallback(
    (name: SoundName) => {
      if (muted) return;
      // Respect browser autoplay policy: only play after a user gesture.
      if (typeof window !== "undefined" && !windowHasGesture()) return;
      try {
        const el = getEl(name);
        el.currentTime = 0;
        const p = el.play();
        if (p) p.catch(() => {});
      } catch {
        /* no-op */
      }
    },
    [muted, getEl],
  );

  const toggleMuted = useCallback(() => setMuted((m) => !m), []);

  useEffect(() => {
    const onFirst = () => setGesture(true);
    window.addEventListener("pointerdown", onFirst, { once: true });
    window.addEventListener("keydown", onFirst, { once: true });
    return () => {
      window.removeEventListener("pointerdown", onFirst);
      window.removeEventListener("keydown", onFirst);
    };
  }, []);

  const value = useMemo<SoundApi>(
    () => ({ play, muted, toggleMuted, available }),
    [play, muted, toggleMuted, available],
  );

  return (
    <SoundContext.Provider value={value}>{children}</SoundContext.Provider>
  );
}

// Track the first genuine user gesture (required for audio autoplay).
let gestured = false;
function setGesture(v: boolean) {
  gestured = v;
}
function windowHasGesture() {
  return gestured;
}

export function useSound(): SoundApi {
  const ctx = useContext(SoundContext);
  if (!ctx) throw new Error("useSound must be used within <SoundProvider>");
  return ctx;
}
