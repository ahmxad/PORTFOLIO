import { Link } from "react-router-dom";
import { NAV_ITEMS, BRAND } from "../data/content";

const TICKER = [
  "NOW AIRING — THE AHMAD PORTFOLIO",
  "FULL-STACK WEB DEVELOPMENT",
  "MERN · RAILS · REST",
  "CERTIFIED ETHICAL HACKING (CEH)",
  "BUILT BY HAND, NOT BY TEMPLATE",
  "RED / YELLOW / BLACK — ALWAYS",
];

export default function Footer() {
  return (
    <footer className="relative z-10 border-t-4 border-ink bg-ink text-cream">
      {/* broadcast ticker */}
      <div className="overflow-hidden border-b-2 border-ink-soft bg-red">
        <div className="ticker-track font-type text-xs tracking-[0.25em] py-2 text-cream">
          {[...TICKER, ...TICKER].map((t, i) => (
            <span key={i} className="px-6">
              ★ {t}
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-10 md:flex-row md:items-start md:justify-between">
        <div>
          <div className="font-display text-4xl leading-none text-red glow-cream">
            AHMAD
          </div>
          <p className="mt-3 max-w-xs font-body text-sm text-beige">
            A developer portfolio with the energy of a vintage television
            advertisement. Original work, honestly presented.
          </p>
        </div>

        <nav aria-label="Footer" className="grid grid-cols-2 gap-x-10 gap-y-2">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="font-head text-sm tracking-[0.12em] text-cream hover:text-signyellow"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="font-type text-xs leading-relaxed text-warmgray">
          <div className="text-signyellow">{BRAND.contactPhrase}</div>
          <div className="mt-1">CH.07 · RETRO BROADCAST</div>
          <div>© {new Date().getFullYear()} AHMAD</div>
        </div>
      </div>
    </footer>
  );
}
