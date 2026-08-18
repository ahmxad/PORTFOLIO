import { BRAND } from "../data/content";

type Glow = "red" | "yellow" | "cream";
type Size = "mega" | "xl" | "lg";

const sizeMap: Record<Size, string> = {
  mega: "display-mega",
  xl: "display-xl",
  lg: "display-lg",
};
const glowMap: Record<Glow, string> = {
  red: "glow-red",
  yellow: "glow-yellow",
  cream: "glow-cream",
};

interface Props {
  text?: string;
  size?: Size;
  glow?: Glow;
  tilt?: number;
  animate?: boolean;
  as?: "h1" | "h2" | "span" | "div";
  className?: string;
  id?: string;
}

// The recurring AHMAD signature: warm illuminated-sign lettering with
// slight chromatic misregistration and a gentle analog pulse.
export default function AhmadTitle({
  text = BRAND.name,
  size = "mega",
  glow = "red",
  tilt = -2,
  animate = true,
  as = "h1",
  className = "",
  id,
}: Props) {
  const Tag = as;
  return (
    <Tag
      id={id}
      data-text={text}
      className={[
        "font-display",
        sizeMap[size],
        glowMap[glow],
        "chroma",
        "text-red select-none",
        animate ? "animate-sign-pulse" : "",
        className,
      ].join(" ")}
      style={{ transform: `rotate(${tilt}deg)`, display: "inline-block" }}
    >
      {text}
    </Tag>
  );
}
