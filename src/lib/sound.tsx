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

// Looping background music, gated by a single mute toggle so the existing
// sound on/off button controls it.
const BGM_SRC = "/audio/bg-music.mp3";

interface SoundApi {
  muted: boolean;
  toggleMuted: () => void;
}

const SoundContext = createContext<SoundApi | null>(null);

// The audio asset is optional: the build must not break if the file is
// absent. We lazily create the <audio> element and silently swallow
// load/play errors so the rest of the site works untouched.
export function SoundProvider({ children }: { children: ReactNode }) {
  // Default ON: background music greets visitors. It can only actually
  // start after the first user gesture (browser autoplay policy).
  const [muted, setMuted] = useState(false);
  const [gestured, setGestured] = useState(false);
  const bgmRef = useRef<HTMLAudioElement | null>(null);

  // Lazily create the single looping background-music element.
  const getBgm = useCallback(() => {
    if (bgmRef.current) return bgmRef.current;
    const el = new Audio(BGM_SRC);
    el.loop = true;
    el.preload = "auto";
    el.volume = 0.4;
    el.addEventListener("error", () => {
      /* file missing — ignore */
    });
    bgmRef.current = el;
    return el;
  }, []);

  const toggleMuted = useCallback(() => setMuted((m) => !m), []);

  // Track the first genuine user gesture (required for audio autoplay).
  useEffect(() => {
    const onFirst = () => setGestured(true);
    window.addEventListener("pointerdown", onFirst, { once: true });
    window.addEventListener("keydown", onFirst, { once: true });
    return () => {
      window.removeEventListener("pointerdown", onFirst);
      window.removeEventListener("keydown", onFirst);
    };
  }, []);

  // Start/stop the looping background music in lock-step with the mute
  // toggle. It begins automatically on the visitor's first gesture (browser
  // autoplay policy), and pauses when the tab is hidden.
  useEffect(() => {
    const bgm = getBgm();
    const sync = () => {
      if (muted || document.hidden || !gestured) {
        bgm.pause();
      } else {
        const p = bgm.play();
        if (p) p.catch(() => {});
      }
    };
    sync();
    const onVis = () => {
      if (document.hidden) bgm.pause();
      else if (!muted && gestured) {
        const p = bgm.play();
        if (p) p.catch(() => {});
      }
    };
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, [muted, gestured, getBgm]);

  const value = useMemo<SoundApi>(
    () => ({ muted, toggleMuted }),
    [muted, toggleMuted],
  );

  return (
    <SoundContext.Provider value={value}>{children}</SoundContext.Provider>
  );
}

export function useSound(): SoundApi {
  const ctx = useContext(SoundContext);
  if (!ctx) throw new Error("useSound must be used within <SoundProvider>");
  return ctx;
}
