import { Link } from "react-router-dom";
import Page from "../components/Page";
import AhmadTitle from "../components/AhmadTitle";
import { ABOUT } from "../data/content";

export default function About() {
  return (
    <Page title="Ahmad — About" className="bg-paper text-ink" pad="pt-28 pb-20">
      <div className="mx-auto max-w-6xl px-5">
        {/* file header */}
        <div data-anim className="flex flex-wrap items-end justify-between gap-3 border-b-4 border-ink pb-3">
          <span className="stamp">PERSONNEL FILE</span>
          <span className="font-type text-xs tracking-[0.25em] text-warmgray">
            DOSSIER NO. 002 · CONFIDENTIAL BUT FRIENDLY
          </span>
        </div>

        <div className="mt-8 grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
          {/* portrait panel */}
          <div data-anim className="relative">
            <div className="relative border-4 border-ink bg-ink p-4 shadow-[8px_8px_0_var(--color-red)]">
              <div className="grain halftone flex aspect-[4/5] items-center justify-center bg-ink">
                <AhmadTitle
                  as="div"
                  text="A"
                  size="xl"
                  glow="red"
                  tilt={-3}
                  animate
                  className="text-red"
                />
              </div>
              <div className="mt-3 flex items-center justify-between font-type text-[11px] tracking-[0.2em] text-signyellow">
                <span>SUBJECT</span>
                <span>AHMAD</span>
              </div>
            </div>
            <p className="mt-3 text-center font-head text-xs tracking-[0.2em] text-warmgray">
              FILE PHOTO — STYLIZED
            </p>
          </div>

          {/* profile copy */}
          <div>
            <h1 data-anim className="font-display text-5xl uppercase leading-none text-ink">
              {ABOUT.name}
            </h1>
            <p data-anim className="mt-2 font-head text-lg tracking-[0.08em] text-red">
              {ABOUT.role}
            </p>

            <p data-anim className="mt-5 font-body text-lg leading-relaxed text-ink-2">
              {ABOUT.intro}
            </p>

            <div className="rule-red my-6" />

            <div className="space-y-4">
              {ABOUT.paragraphs.map((p, i) => (
                <p
                  key={i}
                  data-anim
                  className="font-body text-base leading-relaxed text-ink-2"
                >
                  {p}
                </p>
              ))}
            </div>

            <div data-anim className="mt-8 border-2 border-ink bg-signyellow p-4">
              <h2 className="font-head text-sm tracking-[0.2em] text-ink">
                DEPARTMENTS OF INTEREST
              </h2>
              <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {ABOUT.interests.map((it) => (
                  <li key={it} className="flex items-start gap-2 font-body text-sm text-ink">
                    <span className="mt-1 inline-block h-2 w-2 shrink-0 bg-red" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div data-anim className="mt-10 flex flex-wrap gap-4">
          <Link
            to="/projects"
            className="btn-retro bg-red px-6 py-3 text-sm text-cream"
          >
            SEE THE WORK →
          </Link>
          <Link
            to="/contact"
            className="btn-retro bg-ink px-6 py-3 text-sm text-cream"
          >
            REACH OUT →
          </Link>
        </div>
      </div>
    </Page>
  );
}
