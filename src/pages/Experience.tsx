import Page from "../components/Page";
import { EXPERIENCE_PLACEHOLDER } from "../data/content";

export default function Experience() {
  return (
    <Page title="Ahmad — Experience" className="bg-ink text-cream" pad="pt-28 pb-20">
      <div className="mx-auto max-w-4xl px-5">
        <div data-anim className="flex flex-wrap items-end justify-between gap-3 border-b-4 border-signyellow pb-3">
          <h1 className="font-display text-5xl uppercase leading-none text-cream sm:text-7xl">
            {EXPERIENCE_PLACEHOLDER.heading}
          </h1>
          <span className="stamp stamp-yellow">{EXPERIENCE_PLACEHOLDER.status}</span>
        </div>

        {/* empty ledger */}
        <div
          data-anim
          className="mt-10 relative border-4 border-ink-soft bg-ink-soft p-8 shadow-[10px_10px_0_var(--color-signyellow)]"
        >
          <div className="grain absolute inset-0" aria-hidden />
          <p className="relative font-body text-lg leading-relaxed text-beige">
            {EXPERIENCE_PLACEHOLDER.body}
          </p>

          {/* ruled, empty lines — a ledger waiting for entries */}
          <div className="relative mt-8 space-y-5">
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex items-center gap-4">
                <span className="font-type text-xs tracking-[0.2em] text-warmgray">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="h-px flex-1 bg-warmgray/40" />
                <span className="font-type text-[10px] tracking-[0.2em] text-warmgray">
                  PENDING
                </span>
              </div>
            ))}
          </div>
        </div>

        <p
          data-anim
          className="mt-8 font-type text-xs tracking-[0.2em] text-signyellow"
        >
          ★ HONESTY NOTICE · NO ROLES INVENTED · THIS PAGE UPDATES WITH REAL WORK
        </p>
      </div>
    </Page>
  );
}
