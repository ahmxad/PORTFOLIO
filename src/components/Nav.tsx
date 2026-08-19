import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { NAV_ITEMS, BRAND } from "../data/content";

function NavItemButton({
  to,
  label,
  onClick,
}: {
  to: string;
  label: string;
  onClick?: () => void;
}) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        [
          "group relative px-3 py-2 font-head text-sm tracking-[0.16em] transition-colors",
          isActive
            ? "text-ink bg-signyellow"
            : "text-cream hover:text-ink hover:bg-signyellow",
        ].join(" ")
      }
    >
      {({ isActive }) => (
        <span className="relative inline-block">
          {label}
          <span
            className={[
              "absolute -bottom-1 left-0 h-[3px] bg-red transition-all duration-200",
              isActive ? "w-full" : "w-0 group-hover:w-full",
            ].join(" ")}
          />
        </span>
      )}
    </NavLink>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* top broadcast bar */}
      <div className="flex items-center justify-between border-b-2 border-ink bg-ink px-4 py-2">
        <Link
          to="/"
          className="flex items-baseline gap-2 select-none"
          aria-label="Ahmad — home"
        >
          <span className="font-display text-2xl leading-none text-red glow-cream">
            AHMAD
          </span>
          <span className="font-type text-[10px] tracking-widest text-signyellow hidden sm:inline">
            CH.07 · ON AIR
          </span>
        </Link>

        {/* desktop menu */}
        <nav
          aria-label="Primary"
          className="hidden lg:flex items-center gap-0 border-2 border-ink bg-ink-soft"
        >
          {NAV_ITEMS.map((item) => (
            <NavItemButton key={item.to} to={item.to} label={item.label} />
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="hidden sm:inline-block btn-retro bg-red px-3 py-2 text-xs text-cream"
          >
            {BRAND.contactPhrase}
          </Link>
          <button
            type="button"
            className="lg:hidden btn-retro bg-signyellow px-3 py-2 text-ink text-sm"
            aria-expanded={open}
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? "CLOSE" : "MENU"}
          </button>
        </div>
      </div>

      {/* mobile drawer */}
      {open && (
        <div className="lg:hidden border-b-2 border-ink bg-ink">
          <nav aria-label="Mobile" className="flex flex-col">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  [
                    "border-b border-ink-soft px-4 py-3 font-head text-base tracking-[0.14em]",
                    isActive ? "bg-signyellow text-ink" : "text-cream",
                  ].join(" ")
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="bg-red px-4 py-3 font-head text-base tracking-[0.14em] text-cream"
            >
              {BRAND.contactPhrase}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
