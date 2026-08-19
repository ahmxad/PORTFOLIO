import { useState, type SyntheticEvent } from "react";
import Page from "../components/Page";
import { CONTACT } from "../data/content";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <Page title="Contact" className="bg-red text-cream" pad="pt-28 pb-20">
      <div className="mx-auto max-w-5xl px-5">
        {/* broadcast banner */}
        <div data-anim className="flex flex-wrap items-end justify-between gap-3 border-b-4 border-ink pb-3">
          <h1 className="font-display text-6xl uppercase leading-none text-cream glow-cream sm:text-8xl">
            {CONTACT.phrase}
          </h1>
          <span className="stamp stamp-yellow">REACH THE DESK</span>
        </div>

        <p data-anim className="mt-5 max-w-2xl font-body text-base leading-relaxed text-cream/90">
          {CONTACT.sub}
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {/* channels */}
          <div data-anim className="border-4 border-ink bg-ink p-6 shadow-[8px_8px_0_var(--color-ink)]">
            <h2 className="font-head text-sm tracking-[0.2em] text-signyellow">
              CHANNELS
            </h2>
            <ul className="mt-4 space-y-3">
              {CONTACT.channels.map((c) => {
                const href = c.href ?? undefined;
                return (
                <li
                  key={c.label}
                  className="flex items-center justify-between border-b border-ink-soft pb-2"
                >
                  <span className="font-head text-xs tracking-[0.2em] text-cream">
                    {c.label}
                  </span>
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-type text-xs text-signyellow underline-offset-2 hover:underline"
                    >
                      {c.value}
                    </a>
                  ) : (
                    <span className="font-type text-xs text-signyellow">
                      {c.value}
                    </span>
                  )}
                </li>
                );
              })}
            </ul>
            <p className="mt-5 font-type text-[10px] tracking-[0.15em] text-warmgray">
              ★ My replies are fast, trust me
            </p>
          </div>

          {/* form (demo, no backend) */}
          <div data-anim className="border-4 border-ink bg-cream p-6 text-ink shadow-[8px_8px_0_var(--color-ink)]">
            <h2 className="font-head text-sm tracking-[0.2em] text-red">
              SEND A TRANSMISSION
            </h2>
            {sent ? (
              <div className="mt-6 border-2 border-ink bg-signyellow p-4">
                <p className="font-head text-sm tracking-[0.1em] text-ink">
                  ▣ Thanks for trying to contact
                </p>
                <p className="mt-2 font-body text-sm text-ink-2">
                  Sorry this form doesn't work. It's just a frontend website. I haven't attached any backend yet. Hosting is expensive gng.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="mt-4 space-y-4">
                <label className="block">
                  <span className="font-head text-xs tracking-[0.15em] text-ink">
                    NAME
                  </span>
                  <input
                    required
                    type="text"
                    name="name"
                    className="mt-1 w-full border-2 border-ink bg-paper px-3 py-2 font-body text-ink outline-none focus:border-red"
                  />
                </label>
                <label className="block">
                  <span className="font-head text-xs tracking-[0.15em] text-ink">
                    EMAIL
                  </span>
                  <input
                    required
                    type="email"
                    name="email"
                    className="mt-1 w-full border-2 border-ink bg-paper px-3 py-2 font-body text-ink outline-none focus:border-red"
                  />
                </label>
                <label className="block">
                  <span className="font-head text-xs tracking-[0.15em] text-ink">
                    MESSAGE
                  </span>
                  <textarea
                    required
                    name="message"
                    rows={3}
                    className="mt-1 w-full border-2 border-ink bg-paper px-3 py-2 font-body text-ink outline-none focus:border-red"
                  />
                </label>
                <button
                  type="submit"
                  className="btn-retro w-full bg-red px-4 py-3 text-sm text-cream"
                >
                  TRANSMIT →
                </button>
                <p className="font-type text-[10px] tracking-[0.15em] text-warmgray">
                  DEMO FORM · NO DATA IS SENT OR STORED
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </Page>
  );
}
