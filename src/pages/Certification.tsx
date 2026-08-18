import Page from "../components/Page";
import { CERTIFICATION } from "../data/content";

export default function Certification() {
  return (
    <Page
      title="Ahmad — Certification"
      className="bg-ink text-cream"
      pad="pt-28 pb-20"
    >
      <div className="mx-auto max-w-4xl px-5">
        <div data-anim className="flex flex-wrap items-end justify-between gap-3 border-b-4 border-red pb-3">
          <h1 className="font-display text-6xl uppercase leading-none text-signyellow glow-red sm:text-8xl">
            Certified
          </h1>
          <span className="stamp">OFFICIAL FILE</span>
        </div>

        {/* certificate */}
        <article
          data-anim
          className="relative mt-10 overflow-hidden border-4 border-signyellow bg-ink-soft p-8 sm:p-12"
        >
          <div className="grain absolute inset-0" aria-hidden />
          <div
            aria-hidden
            className="absolute -right-10 -top-10 h-40 w-40 rounded-full border-4 border-red/60"
          />
          <div
            aria-hidden
            className="absolute -right-6 -top-6 h-32 w-32 rounded-full border-4 border-signyellow/60"
          />

          <p className="relative font-type text-xs tracking-[0.3em] text-signyellow">
            THIS CERTIFIES THAT
          </p>
          <h2 className="relative mt-2 font-display text-5xl uppercase leading-none text-cream glow-cream sm:text-6xl">
            Ahmad
          </h2>

          <div className="relative mt-6 max-w-xl border-l-4 border-red pl-4">
            <h3 className="font-display text-3xl uppercase leading-none text-red glow-cream">
              {CERTIFICATION.title}
            </h3>
            <p className="mt-2 font-head text-sm tracking-[0.16em] text-signyellow">
              {CERTIFICATION.sponsor}
            </p>
          </div>

          <p className="relative mt-6 max-w-2xl font-body text-sm leading-relaxed text-beige">
            {CERTIFICATION.note}
          </p>

          {/* signature line */}
          <div className="relative mt-8 flex flex-wrap items-end gap-10">
            <div>
              <div className="h-px w-40 bg-cream/60" />
              <span className="font-type text-[10px] tracking-[0.2em] text-warmgray">
                CANDIDATE
              </span>
            </div>
            <div>
              <div className="font-script text-3xl text-signyellow">NAVTTC</div>
              <span className="font-type text-[10px] tracking-[0.2em] text-warmgray">
                SPONSOR SEAL
              </span>
            </div>
          </div>
        </article>

        <p
          data-anim
          className="mt-8 font-type text-xs tracking-[0.2em] text-warmgray"
        >
          ★ ONE CREDENTIAL · STATED ACCURATELY · NO EMBELLISHMENT
        </p>
      </div>
    </Page>
  );
}
