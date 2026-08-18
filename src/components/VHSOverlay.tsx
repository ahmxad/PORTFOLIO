// Global analog atmosphere: scanlines + subtle flicker + grain.
// Purely decorative, pointer-events:none, must never hurt readability.
export default function VHSOverlay() {
  return (
    <>
      <div className="vhs-overlay" aria-hidden="true" />
    </>
  );
}
