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
  // Default ON: background music greets visitors. It begins playing muted
  // immediately on load (browsers permit muted autoplay) and becomes
  // audible on the first user gesture (browser autoplay policy).
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
    // Start muted: browsers allow muted autoplay, so the track can begin
    // playing on load and be unmuted the moment the visitor interacts.
    el.muted = true;
    el.addEventListener("error", () => {
      /* file missing — ignore */
    });
    bgmRef.current = el;
    return el;
  }, []);

  const toggleMuted = useCallback(() => setMuted((m) => !m), []);

  // Reflect the user's preference + gesture state onto the element. The
  // element is "audible" only when sound is on AND a gesture has happened
  // (browser autoplay policy). Before that it stays muted but still plays,
  // so the track is live from the moment the page opens.
  const apply = useCallback(() => {
    const bgm = getBgm();
    const audible = !muted && gestured;
    bgm.muted = !audible;
    if (audible) {
      const p = bgm.play();
      if (p) p.catch(() => {});
    }
  }, [muted, gestured, getBgm]);

  // Begin playback immediately on mount — muted, which browsers permit. This
  // is the "plays on open" half: the audio is already running (silently)
  // from load. If even muted autoplay is rejected, the first gesture below
  // will start it instead.
  useEffect(() => {
    const bgm = getBgm();
    const p = bgm.play();
    if (p) p.catch(() => {});
  }, [getBgm]);

  // Track the first genuine user gesture. We unmute + (re)start *inside the
  // gesture handler* so the browser's user-activation window is honored —
  // that's what lets the music become audible the instant the visitor
  // interacts, with no buffering delay.
  useEffect(() => {
    const onFirst = () => {
      setGestured(true);
      const bgm = getBgm();
      bgm.muted = muted; // unmute now if sound is on
      const p = bgm.play();
      if (p) p.catch(() => {});
    };
    window.addEventListener("pointerdown", onFirst, { once: true });
    window.addEventListener("keydown", onFirst, { once: true });
    return () => {
      window.removeEventListener("pointerdown", onFirst);
      window.removeEventListener("keydown", onFirst);
    };
  }, [getBgm]);

  // Keep mute + playback in sync with the toggle and gesture state.
  useEffect(() => {
    apply();
  }, [apply]);

  // If the audio couldn't start the instant it was requested (still
  // buffering the 5 MB file), retry as soon as it can play.
  useEffect(() => {
    const bgm = getBgm();
    const onCanPlay = () => apply();
    bgm.addEventListener("canplay", onCanPlay);
    return () => bgm.removeEventListener("canplay", onCanPlay);
  }, [apply]);

  // Pause when the tab is hidden; resume (if sound is on) when it returns.
  useEffect(() => {
    const onVis = () => {
      const bgm = getBgm();
      if (document.hidden) bgm.pause();
      else apply();
    };
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, [apply]);

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
