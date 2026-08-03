/** Decorative image stand-ins for gallery/service/about visuals until real photos are provided. */

type Variant =
  | "residential"
  | "commercial"
  | "generator"
  | "lighting"
  | "about"
  | "project-1"
  | "project-2"
  | "project-3"
  | "project-4"
  | "project-5";

const palettes: Record<
  Variant,
  { a: string; b: string; c: string; accent: string }
> = {
  residential: {
    a: "#1A4A72",
    b: "#DCEFF7",
    c: "#F4F6F8",
    accent: "#D4AF37",
  },
  commercial: {
    a: "#0B3A66",
    b: "#2A6A96",
    c: "#E8EEF3",
    accent: "#C9A227",
  },
  generator: {
    a: "#072844",
    b: "#145A82",
    c: "#D4AF37",
    accent: "#F4F6F8",
  },
  lighting: {
    a: "#0B3A66",
    b: "#E8C96A",
    c: "#F8F4E8",
    accent: "#FFFFFF",
  },
  about: {
    a: "#0B3A66",
    b: "#1E5078",
    c: "#D4AF37",
    accent: "#F4F6F8",
  },
  "project-1": {
    a: "#123F66",
    b: "#E8D48A",
    c: "#F4F6F8",
    accent: "#FFFFFF",
  },
  "project-2": {
    a: "#0B3A66",
    b: "#2C6B93",
    c: "#DCEFF7",
    accent: "#D4AF37",
  },
  "project-3": {
    a: "#071F3A",
    b: "#C9A227",
    c: "#F4F6F8",
    accent: "#FFFFFF",
  },
  "project-4": {
    a: "#145A82",
    b: "#F4F6F8",
    c: "#D4AF37",
    accent: "#0B3A66",
  },
  "project-5": {
    a: "#0B3A66",
    b: "#8BB4CC",
    c: "#F8F4E8",
    accent: "#D4AF37",
  },
};

export default function MediaPlaceholder({
  variant,
  className = "",
  label,
}: {
  variant: Variant;
  className?: string;
  label?: string;
}) {
  const p = palettes[variant];

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      role="img"
      aria-label={label ?? "Project photography placeholder"}
      style={{
        background: `linear-gradient(145deg, ${p.a} 0%, ${p.b} 55%, ${p.c} 100%)`,
      }}
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.45), transparent 40%), radial-gradient(circle at 80% 70%, rgba(212,175,55,0.35), transparent 45%)",
        }}
      />
      {variant === "about" ? (
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 400 480"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <rect width="400" height="480" fill={p.a} />
          <ellipse cx="200" cy="430" rx="160" ry="40" fill="#061828" opacity="0.35" />
          <rect x="120" y="170" width="160" height="220" rx="8" fill="#132F4A" />
          <rect x="140" y="190" width="120" height="160" rx="4" fill="#0A243C" />
          {[0, 1, 2, 3, 4, 5].map((row) =>
            [0, 1, 2].map((col) => (
              <rect
                key={`${row}-${col}`}
                x={152 + col * 28}
                y={205 + row * 22}
                width="18"
                height="12"
                rx="1"
                fill={row % 2 === 0 ? p.c : "#2A6A96"}
                opacity="0.9"
              />
            )),
          )}
          <circle cx="200" cy="120" r="42" fill="#F0D2A0" />
          <path
            d="M150 200 C150 160 250 160 250 200 L245 340 C245 360 155 360 155 340 Z"
            fill={p.a}
          />
          <path
            d="M160 210 C160 185 240 185 240 210 L236 300 C236 318 164 318 164 300 Z"
            fill="#123F66"
          />
          <text
            x="200"
            y="255"
            textAnchor="middle"
            fill={p.c}
            fontSize="11"
            fontFamily="Arial, sans-serif"
            letterSpacing="1"
          >
            CURRENT
          </text>
          <rect x="245" y="250" width="55" height="18" rx="3" fill={p.c} opacity="0.85" />
          <rect x="255" y="268" width="36" height="70" rx="4" fill="#F0D2A0" />
        </svg>
      ) : (
        <svg
          className="absolute inset-0 h-full w-full opacity-80"
          viewBox="0 0 400 260"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <rect width="400" height="260" fill="transparent" />
          <path
            d="M0 180 C80 140 140 200 220 160 C300 120 340 170 400 140 L400 260 L0 260 Z"
            fill={p.accent}
            opacity="0.18"
          />
          <rect
            x="40"
            y="40"
            width="140"
            height="90"
            rx="6"
            fill={p.accent}
            opacity="0.2"
          />
          <rect
            x="210"
            y="70"
            width="150"
            height="110"
            rx="6"
            fill="#FFFFFF"
            opacity="0.14"
          />
          <circle cx="320" cy="50" r="28" fill={p.accent} opacity="0.35" />
          <path
            d="M60 120 L90 80 L120 120"
            stroke={p.accent}
            strokeWidth="3"
            fill="none"
            opacity="0.55"
          />
        </svg>
      )}
    </div>
  );
}
