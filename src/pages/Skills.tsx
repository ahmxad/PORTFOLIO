import Page from "../components/Page";
import { SKILL_GROUPS, type SkillGroup } from "../data/content";
import { useSound } from "../lib/sound";

function Department({ group, index }: { group: SkillGroup; index: number }) {
  const { play } = useSound();
  const flip = index % 2 === 1;
  return (
    <section
      data-anim
      className={`grid gap-6 border-t-4 border-ink py-8 md:grid-cols-[0.8fr_1.2fr] ${
        flip ? "md:[direction:rtl]" : ""
      }`}
    >
      <div className={flip ? "md:[direction:ltr]" : ""}>
        <div className="font-display text-6xl leading-none text-red glow-cream">
          {String(index + 1).padStart(2, "0")}
        </div>
        <h2 className="mt-2 font-display text-3xl uppercase leading-none text-ink">
          {group.title}
        </h2>
        <p className="mt-2 font-body text-sm italic text-warmgray">{group.blurb}</p>
      </div>

      <div className={flip ? "md:[direction:ltr]" : ""}>
        <ul className="flex flex-wrap gap-2">
          {group.items.map((item) => (
            <li key={item}>
              <span
                onMouseEnter={() => play("hover")}
                className="inline-block cursor-default border-2 border-ink bg-ink px-3 py-2 font-head text-sm tracking-[0.08em] text-cream transition-colors hover:bg-red hover:text-cream"
              >
                {item}
              </span>
            </li>
          ))}
        </ul>

        {group.sub?.map((s) => (
          <div key={s.label} className="mt-5 border-l-4 border-red pl-4">
            <h3 className="font-head text-xs tracking-[0.25em] text-red">
              {s.label}
            </h3>
            <ul className="mt-2 flex flex-wrap gap-2">
              {s.items.map((it) => (
                <li key={it}>
                  <span className="inline-block border-2 border-ink bg-signyellow px-3 py-1 font-head text-xs tracking-[0.06em] text-ink">
                    {it}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Skills() {
  return (
    <Page title="Ahmad — Skills" className="bg-cream text-ink" pad="pt-28 pb-20">
      <div className="mx-auto max-w-6xl px-5">
        <div data-anim className="flex flex-wrap items-end justify-between gap-3 border-b-4 border-ink pb-3">
          <h1 className="font-display text-5xl uppercase leading-none text-ink sm:text-7xl">
            Areas of
            <span className="text-red"> Practice</span>
          </h1>
          <span className="stamp">THE TOOLBOX</span>
        </div>

        <p data-anim className="mt-5 max-w-2xl font-body text-base leading-relaxed text-ink-2">
          No percentages. No fake “expert” bars. Just the tools, grouped by the
          work they do — exactly as they sit in the actual stack.
        </p>

        <div className="mt-6">
          {SKILL_GROUPS.map((g, i) => (
            <Department key={g.id} group={g} index={i} />
          ))}
        </div>
      </div>
    </Page>
  );
}
