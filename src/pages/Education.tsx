import Page from "../components/Page";
import { EDUCATION } from "../data/content";

export default function Education() {
  return (
    <Page
      title="Ahmad — Education"
      className="bg-paper text-ink"
      pad="pt-28 pb-20"
    >
      <div className="mx-auto max-w-4xl px-5">
        <div data-anim className="flex flex-wrap items-end justify-between gap-3 border-b-4 border-ink pb-3">
          <h1 className="font-display text-5xl uppercase leading-none text-ink sm:text-7xl">
            Academic Record
          </h1>
          <span className="stamp">VERIFIED · ON FILE</span>
        </div>

        <p data-anim className="mt-5 max-w-2xl font-body text-base leading-relaxed text-ink-2">
          The paper trail. Dates and institutions exactly as recorded — nothing
          added, nothing rounded up.
        </p>

        <ol className="relative mt-10 border-l-4 border-red pl-8">
          {EDUCATION.map((rec, i) => (
            <li key={rec.institution} data-anim className="relative mb-12 last:mb-0">
              {/* node */}
              <span className="absolute -left-[42px] top-1 flex h-7 w-7 items-center justify-center border-2 border-ink bg-signyellow font-type text-xs text-ink">
                {i + 1}
              </span>

              <article className="border-2 border-ink bg-cream p-5 shadow-[6px_6px_0_var(--color-red)]">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <h2 className="font-display text-2xl uppercase leading-none text-ink">
                    {rec.credential}
                  </h2>
                  <span className="stamp stamp-yellow">FILE {String(i + 1).padStart(2, "0")}</span>
                </div>

                <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1 font-head text-sm tracking-[0.08em] text-ink-2">
                  <span>{rec.institution}</span>
                  <span className="text-red">{rec.location}</span>
                  <span className="font-type text-warmgray">{rec.date}</span>
                </div>

                {rec.note && (
                  <p className="mt-3 font-type text-xs tracking-[0.1em] text-warmgray">
                    {rec.note}
                  </p>
                )}
              </article>
            </li>
          ))}
        </ol>
      </div>
    </Page>
  );
}
