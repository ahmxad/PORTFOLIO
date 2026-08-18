import Page from "../components/Page";
import { PROJECTS_PLACEHOLDER } from "../data/content";

// Slots are drawn from the developer's real practice areas — these are
// where case files will be filed, not invented projects.
const SLOTS = [
  { n: "001", area: "FULL-STACK" },
  { n: "002", area: "FRONTEND" },
  { n: "003", area: "BACKEND / API" },
  { n: "004", area: "SECURITY" },
  { n: "005", area: "DATABASE" },
  { n: "006", area: "TOOLING" },
];

function Redacted({ w }: { w: string }) {
  return (
    <span
      className="inline-block h-3 bg-beige/80 align-middle"
      style={{ width: w, filter: "contrast(0.9)" }}
    />
  );
}

export default function Projects() {
  return (
    <Page title="Ahmad — Projects" className="bg-ink text-cream" pad="pt-28 pb-20">
      <div className="mx-auto max-w-6xl px-5">
        <div data-anim className="flex flex-wrap items-end justify-between gap-3 border-b-4 border-red pb-3">
          <h1 className="font-display text-5xl uppercase leading-none text-red glow-cream sm:text-7xl">
            {PROJECTS_PLACEHOLDER.heading}
          </h1>
          <span className="stamp stamp-yellow">{PROJECTS_PLACEHOLDER.status}</span>
        </div>

        <p data-anim className="mt-5 max-w-2xl font-body text-base leading-relaxed text-beige">
          {PROJECTS_PLACEHOLDER.note} Below is the filing cabinet — six slots
          mapped to real areas of practice. Each opens the moment there is
          shipped, verifiable work to put inside.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SLOTS.map((s) => (
            <article
              key={s.n}
              data-anim
              className="group relative border-2 border-ink-soft bg-ink-soft p-0 transition-transform hover:-translate-y-1"
            >
              {/* folder tab */}
              <div className="flex items-center justify-between bg-red px-3 py-1 font-type text-[11px] tracking-[0.2em] text-cream">
                <span>CASE FILE {s.n}</span>
                <span className="text-signyellow">{s.area}</span>
              </div>

              <div className="grain relative p-5">
                {/* redacted body */}
                <div className="space-y-2">
                  <Redacted w="80%" />
                  <Redacted w="95%" />
                  <Redacted w="60%" />
                </div>
                <div className="my-4 rule-yellow" />
                <div className="flex items-center justify-between">
                  <span className="stamp">CLASSIFIED</span>
                  <span className="font-type text-[10px] tracking-[0.2em] text-signyellow">
                    DETAILS PENDING
                  </span>
                </div>
                <p className="mt-4 font-body text-xs leading-relaxed text-warmgray">
                  Problem · Solution · Outcome logged here once the build ships.
                </p>
              </div>

              {/* tape */}
              <span className="tape absolute -top-2 right-6 h-0 w-0" aria-hidden />
            </article>
          ))}
        </div>

        <p data-anim className="mt-10 font-type text-xs tracking-[0.2em] text-warmgray">
          ★ NO CASES FABRICATED · EVERY FILE WILL BE REAL
        </p>
      </div>
    </Page>
  );
}
