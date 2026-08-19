import { Link } from "react-router-dom";
import Page from "../components/Page";
import { INTERESTS } from "../data/content";
import { useSound } from "../lib/sound";

/* ------------------------------------------------
   Per-interest decorative motif (CSS-drawn, no images,
   no copyrighted art). Visual logic only — content
   lives in content.ts.
   ------------------------------------------------ */
function Motif({ id }: { id: string }) {
  switch (id) {
    case "chess":
      return (
        <div className="flex items-center gap-4">
          <div
            className="h-14 w-14 shrink-0 border-2 border-current"
            style={{
              backgroundImage:
                "repeating-conic-gradient(currentColor 0% 25%, transparent 0% 50%)",
              backgroundSize: "1.4rem 1.4rem",
            }}
          />
          <div className="font-type text-[11px] leading-relaxed opacity-80">
            <div>1. e4 &nbsp;c5</div>
            <div>2. Nf3 d6</div>
          </div>
        </div>
      );

    case "ctf":
      return (
        <div className="font-type text-[11px] leading-relaxed">
          <div className="mb-1 border-b-2 border-current pb-1 opacity-70">
            terminal — lab
          </div>
          <div>
            <span className="text-signyellow">$</span> solve --challenge
          </div>
          <div className="opacity-80">flag{"{"}capture_the_flag{"}"}</div>
          <div className="text-signyellow">› access granted</div>
        </div>
      );

    case "cricket":
      return (
        <div className="font-type text-[11px] leading-5">
          <div className="flex justify-between border-b-2 border-current">
            <span>OVERS</span>
            <span>50.0</span>
          </div>
          <div className="flex justify-between border-b-2 border-current">
            <span>RUNS</span>
            <span>274/6</span>
          </div>
          <div className="flex justify-between">
            <span>WKTS</span>
            <span>6</span>
          </div>
        </div>
      );

    case "football":
      return (
        <div className="flex items-center gap-4">
          <div className="relative h-12 w-12 shrink-0 rounded-full border-2 border-current">
            <div className="absolute inset-0 m-auto h-1.5 w-1.5 rounded-full bg-current" />
            <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-current" />
            <div className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-current" />
          </div>
          <div className="font-type text-[11px] leading-relaxed">
            <div>HOME 2 — 1 AWAY</div>
            <div className="opacity-80">90+4′ · FULL TIME</div>
          </div>
        </div>
      );

    case "traveling":
      return (
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-dashed border-current text-center font-type text-[8px] leading-tight">
            PASS
            <br />
            PORT
          </div>
          <div className="font-type text-[11px] leading-relaxed">
            <div className="opacity-70">ROUTE ⟶ ??</div>
            <div>STAMPS · COLLECTED</div>
          </div>
        </div>
      );

    case "geography":
      return (
        <div className="flex items-center gap-4">
          <div
            className="relative h-14 w-14 shrink-0 rounded-full border-2 border-current"
            style={{ opacity: 0.5 }}
          >
            <div className="absolute inset-1.5 rounded-full border border-current" />
            <div className="absolute inset-3 rounded-full border border-current" />
          </div>
          <div className="font-type text-[11px] leading-relaxed">
            <div>GRID 1:1</div>
            <div className="opacity-70">ATLAS · MAPS</div>
          </div>
        </div>
      );

    case "flags":
      return (
        <div>
          <div className="flex h-7 w-full border-2 border-current">
            <span className="flex-1 bg-red" />
            <span className="flex-1 bg-signyellow" />
            <span className="flex-1 bg-ink" />
          </div>
          <div className="mt-1 font-type text-[9px] opacity-70">
            ATLAS INDEX · 195
          </div>
        </div>
      );

    case "reading":
      return (
        <div className="font-type text-[11px] leading-relaxed">
          <div className="space-y-1 opacity-70">
            <div className="h-1.5 w-full bg-current" />
            <div className="h-1.5 w-5/6 bg-current" />
            <div className="h-1.5 w-full bg-current" />
            <div className="h-1.5 w-2/3 bg-current" />
          </div>
          <div className="mt-2">p. 042 · dog-eared</div>
        </div>
      );

    case "movies":
      return (
        <div>
          <div className="border-2 border-current p-2">
            {/* film-strip sprocket holes */}
            <div
              className="mb-2 h-2 w-full opacity-70"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(90deg, currentColor 0 6px, transparent 6px 14px)",
              }}
            />
            <div className="flex items-center gap-3">
              {/* play triangle */}
              <div
                className="h-4 w-4 shrink-0 bg-current"
                style={{ clipPath: "polygon(0 0, 0 100%, 100% 50%)" }}
              />
              <div>
                <div className="font-display text-2xl uppercase leading-none">
                  Cinema
                </div>
                <div className="font-type text-[9px] tracking-[0.2em] opacity-70">
                  FEATURE PRESENTATION
                </div>
              </div>
            </div>
            <div
              className="mt-2 h-2 w-full opacity-70"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(90deg, currentColor 0 6px, transparent 6px 14px)",
              }}
            />
          </div>
          <div className="mt-1 font-type text-[9px] tracking-[0.2em] opacity-70">
            00:00:00:00 · REEL
          </div>
        </div>
      );

    case "anime":
      return (
        <div>
          {/* manga page: panels with one speed-line "action" panel */}
          <div className="grid grid-cols-2 gap-1 border-2 border-current p-1">
            <div className="aspect-4/5 border border-current" />
            <div className="relative aspect-4/5 overflow-hidden border border-current">
              <div
                className="absolute inset-0 opacity-70"
                style={{
                  background:
                    "repeating-conic-gradient(from 0deg, currentColor 0deg 3deg, transparent 3deg 9deg)",
                }}
              />
              <div className="absolute inset-0 grid place-items-center">
                <span className="font-display text-lg leading-none">★</span>
              </div>
            </div>
            <div className="aspect-4/5 border border-current" />
            <div className="aspect-4/5 border border-current" />
          </div>
          <div className="mt-2 flex items-end justify-between">
            <span className="font-display text-2xl uppercase leading-none">
              Vol. ??
            </span>
            <span className="-rotate-6 font-head text-xs tracking-[0.2em] opacity-80">
              ACTION
            </span>
          </div>
        </div>
      );

    // technology card removed (no longer in INTERESTS)

    case "politics":
      return (
        <div>
          <div className="font-display text-2xl uppercase leading-none">
            THE DAILY
          </div>
          <div className="mt-1 columns-2 gap-2 border-t-2 border-current pt-1 font-type text-[9px] leading-tight opacity-80">
            <span>Editorial · World · Local</span>
            <span>Edition 07</span>
          </div>
        </div>
      );

    default:
      return null;
  }
}

/* Editorial surface / span / title treatment per interest. */
const SURFACE: Record<string, string> = {
  chess: "bg-ink text-cream",
  ctf: "bg-ink text-cream",
  cricket: "bg-signyellow text-ink",
  football: "bg-red text-cream",
  traveling: "bg-paper text-ink",
  geography: "bg-cream text-ink",
  flags: "bg-ink text-cream",
  reading: "bg-cream text-ink",
  movies: "bg-ink text-cream",
  anime: "bg-red text-cream",
  politics: "bg-paper text-ink",
};

const STAMP: Record<string, string> = {
  football: "stamp-yellow",
  anime: "stamp-yellow",
};

const SPAN: Record<string, string> = {
  lg: "md:col-span-6",
  md: "md:col-span-4",
  sm: "md:col-span-3",
};

const TITLE: Record<string, string> = {
  lg: "text-5xl md:text-6xl",
  md: "text-4xl",
  sm: "text-2xl md:text-3xl",
};

export default function More() {
  const { play } = useSound();

  return (
    <Page title="More" className="bg-cream text-ink" pad="pt-28 pb-20">
      <div className="mx-auto max-w-6xl px-5">
        {/* file header */}
        <div
          data-anim
          className="flex flex-wrap items-end justify-between gap-3 border-b-4 border-ink pb-3"
        >
          <span className="stamp">OFF THE CLOCK</span>
          <span className="font-type text-xs tracking-[0.25em] text-warmgray">
            DOSSIER NO. 007 · BROADCAST SPECIAL
          </span>
        </div>

        <h1
          data-anim
          className="mt-5 font-display text-6xl uppercase leading-none text-ink sm:text-8xl"
        >
          MORE
        </h1>
        <div
          data-anim
          className="mt-2 font-head text-base tracking-[0.25em] text-red sm:text-lg"
        >
          BEYOND THE CODE
        </div>
        <p
          data-anim
          className="mt-4 max-w-2xl font-body text-base leading-relaxed text-ink-2"
        >
          Some of the things which I like or do on daily basis.
        </p>

        {/* editorial mosaic — varied sizes, not an icon grid */}
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-12 md:gap-5">
          {INTERESTS.map((it, i) => {
            const surface = SURFACE[it.id] ?? "bg-paper text-ink";
            const stampCls = STAMP[it.id] ?? "stamp";
            const span = SPAN[it.size];
            const titleCls = TITLE[it.size];
            return (
              <article
                key={it.id}
                data-anim
                onMouseEnter={() => play("hover")}
                className={`group relative flex flex-col justify-between border-4 border-ink p-4 shadow-[8px_8px_0_var(--color-ink)] transition-all duration-150 hover:-translate-y-1 hover:shadow-[12px_12px_0_var(--color-ink)] ${surface} ${span}`}
              >
                <div className="flex items-start justify-between gap-2">
                  <span className={`${stampCls} max-w-[65%]`}>
                    {it.category}
                  </span>
                  <span className="font-type text-[10px] tracking-widest opacity-60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="my-4">
                  <Motif id={it.id} />
                </div>

                <div>
                  <h2
                    className={`font-display uppercase leading-none ${titleCls}`}
                  >
                    {it.title}
                  </h2>
                  {it.tagline && (
                    <p className="mt-2 font-body text-sm leading-snug opacity-80">
                      {it.tagline}
                    </p>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        {/* closing CTA — flows into the existing global footer */}
        <div data-anim className="mt-12 border-t-4 border-ink pt-8">
          <p className="font-body text-base text-ink-2">
            Like what you see off the clock? The desk is still open for work.
          </p>
          <Link
            to="/contact"
            onMouseEnter={() => play("hover")}
            onMouseDown={() => play("click")}
            className="btn-retro mt-4 inline-block bg-ink px-6 py-3 text-sm text-cream"
          >
            REACH OUT &rarr;
          </Link>
        </div>
      </div>
    </Page>
  );
}



