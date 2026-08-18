import { useSound } from "../lib/sound";

// Retro sound on/off control. Respects autoplay restrictions via the
// sound system; shows whether audio assets are present.
export default function SoundToggle() {
  const { muted, toggleMuted, available, play } = useSound();

  return (
    <button
      type="button"
      onClick={() => {
        toggleMuted();
        if (muted) play("click");
      }}
      onMouseEnter={() => play("hover")}
      aria-pressed={!muted}
      aria-label={muted ? "Enable sound" : "Mute sound"}
      className="btn-retro flex items-center gap-2 bg-ink text-cream px-3 py-2 text-xs font-head"
      style={{ boxShadow: "3px 3px 0 var(--color-red)" }}
    >
      <span
        aria-hidden
        className="inline-block h-3 w-3 rounded-full border-2 border-ink"
        style={{ background: muted ? "var(--color-warmgray)" : "var(--color-signyellow)" }}
      />
      {muted ? "SOUND OFF" : available ? "SOUND ON" : "SOUND ·"}
    </button>
  );
}
