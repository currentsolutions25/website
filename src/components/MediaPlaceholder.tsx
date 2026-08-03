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

export default function MediaPlaceholder({
  variant,
  className = "",
  label,
}: {
  variant: Variant;
  className?: string;
  label?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      role="img"
      aria-label={label ?? "Project photography placeholder"}
    >
      {variant === "about" ? <AboutScene /> : <Scene variant={variant} />}
    </div>
  );
}

function Scene({ variant }: { variant: Exclude<Variant, "about"> }) {
  const scenes: Record<
    Exclude<Variant, "about">,
    { sky: string; mid: string; accent: string; title: string }
  > = {
    residential: {
      sky: "#8EB6D0",
      mid: "#F2E6C8",
      accent: "#D4AF37",
      title: "home",
    },
    commercial: {
      sky: "#6A9AB8",
      mid: "#E8EEF3",
      accent: "#C9A227",
      title: "building",
    },
    generator: {
      sky: "#0B3A66",
      mid: "#145A82",
      accent: "#D4AF37",
      title: "generator",
    },
    lighting: {
      sky: "#1A3F66",
      mid: "#F0D28A",
      accent: "#FFF6D0",
      title: "lighting",
    },
    "project-1": {
      sky: "#123F66",
      mid: "#E8D48A",
      accent: "#FFFFFF",
      title: "p1",
    },
    "project-2": {
      sky: "#0B3A66",
      mid: "#2C6B93",
      accent: "#D4AF37",
      title: "p2",
    },
    "project-3": {
      sky: "#071F3A",
      mid: "#C9A227",
      accent: "#FFFFFF",
      title: "p3",
    },
    "project-4": {
      sky: "#145A82",
      mid: "#F4F6F8",
      accent: "#D4AF37",
      title: "p4",
    },
    "project-5": {
      sky: "#0B3A66",
      mid: "#8BB4CC",
      accent: "#D4AF37",
      title: "p5",
    },
  };

  const s = scenes[variant];

  return (
    <svg
      className="h-full w-full"
      viewBox="0 0 400 260"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`g-${variant}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={s.sky} />
          <stop offset="55%" stopColor={s.mid} />
          <stop offset="100%" stopColor={s.accent} stopOpacity="0.55" />
        </linearGradient>
        <radialGradient id={`glow-${variant}`} cx="70%" cy="30%" r="45%">
          <stop offset="0%" stopColor="#FFF6D0" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="260" fill={`url(#g-${variant})`} />
      <ellipse cx="300" cy="70" rx="110" ry="80" fill={`url(#glow-${variant})`} />

      {variant === "residential" && (
        <>
          <rect x="70" y="110" width="160" height="100" fill="#F8FAFC" opacity="0.92" />
          <path d="M60 110 L150 55 L240 110 Z" fill="#0B3A66" />
          <rect x="130" y="150" width="36" height="60" fill="#072844" />
          <rect x="90" y="130" width="28" height="24" fill="#DCEFF7" />
          <rect x="180" y="130" width="28" height="24" fill="#DCEFF7" />
          <rect x="250" y="150" width="90" height="60" fill="#123F66" opacity="0.85" />
        </>
      )}

      {variant === "commercial" && (
        <>
          <rect x="60" y="70" width="70" height="150" fill="#F4F6F8" opacity="0.9" />
          <rect x="145" y="45" width="90" height="175" fill="#FFFFFF" opacity="0.88" />
          <rect x="250" y="90" width="80" height="130" fill="#E8EEF3" opacity="0.9" />
          {[0, 1, 2, 3, 4].map((row) =>
            [0, 1].map((col) => (
              <rect
                key={`c-${row}-${col}`}
                x={160 + col * 28}
                y={70 + row * 28}
                width="18"
                height="16"
                fill="#0B3A66"
                opacity="0.35"
              />
            )),
          )}
        </>
      )}

      {(variant === "generator" || variant === "project-2") && (
        <>
          <rect x="90" y="120" width="220" height="90" rx="8" fill="#0A243C" />
          <rect x="110" y="140" width="70" height="50" rx="4" fill="#145A82" />
          <rect x="200" y="140" width="90" height="50" rx="4" fill="#1E5078" />
          <circle cx="300" cy="100" r="22" fill={s.accent} opacity="0.75" />
        </>
      )}

      {(variant === "lighting" || variant === "project-1") && (
        <>
          <rect x="40" y="40" width="320" height="180" fill="#0B3A66" opacity="0.35" />
          <circle cx="100" cy="80" r="18" fill="#FFF6D0" opacity="0.9" />
          <circle cx="200" cy="70" r="26" fill="#FFE9A8" opacity="0.85" />
          <circle cx="300" cy="90" r="16" fill="#FFF6D0" opacity="0.8" />
          <path
            d="M60 200 C140 150 220 210 340 160"
            stroke="#D4AF37"
            strokeWidth="3"
            fill="none"
            opacity="0.55"
          />
        </>
      )}

      {(variant === "project-3" ||
        variant === "project-4" ||
        variant === "project-5") && (
        <>
          <rect x="50" y="60" width="300" height="150" rx="6" fill="#FFFFFF" opacity="0.12" />
          <rect x="80" y="90" width="100" height="90" rx="4" fill="#FFFFFF" opacity="0.2" />
          <rect x="210" y="100" width="110" height="80" rx="4" fill={s.accent} opacity="0.35" />
          <circle cx="320" cy="70" r="24" fill={s.accent} opacity="0.45" />
        </>
      )}
    </svg>
  );
}

function AboutScene() {
  return (
    <svg
      className="h-full w-full"
      viewBox="0 0 400 480"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="aboutBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#124872" />
          <stop offset="55%" stopColor="#0B3A66" />
          <stop offset="100%" stopColor="#071F3A" />
        </linearGradient>
        <linearGradient id="panelFace" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1A4A72" />
          <stop offset="100%" stopColor="#0A243C" />
        </linearGradient>
      </defs>
      <rect width="400" height="480" fill="url(#aboutBg)" />
      <ellipse cx="200" cy="430" rx="170" ry="42" fill="#041525" opacity="0.45" />

      {/* Panel */}
      <rect x="95" y="150" width="210" height="250" rx="10" fill="#132F4A" />
      <rect x="115" y="170" width="170" height="210" rx="6" fill="url(#panelFace)" />
      {[0, 1, 2, 3, 4, 5, 6].map((row) =>
        [0, 1, 2].map((col) => (
          <g key={`br-${row}-${col}`}>
            <rect
              x={132 + col * 42}
              y={188 + row * 26}
              width="28"
              height="16"
              rx="2"
              fill={row % 2 === col % 2 ? "#D4AF37" : "#2A6A96"}
              opacity="0.9"
            />
          </g>
        )),
      )}

      {/* Electrician */}
      <circle cx="200" cy="118" r="38" fill="#E8C49A" />
      <path
        d="M145 190 C145 155 255 155 255 190 L248 330 C248 352 152 352 152 330 Z"
        fill="#0B3A66"
      />
      <path
        d="M158 205 C158 180 242 180 242 205 L238 285 C238 302 162 302 162 285 Z"
        fill="#123F66"
      />
      <text
        x="200"
        y="250"
        textAnchor="middle"
        fill="#D4AF37"
        fontSize="11"
        fontFamily="Montserrat, Arial, sans-serif"
        letterSpacing="1.5"
        fontWeight="700"
      >
        CURRENT
      </text>
      <rect x="248" y="235" width="58" height="16" rx="3" fill="#D4AF37" opacity="0.9" />
      <rect x="258" y="250" width="34" height="78" rx="5" fill="#E8C49A" />
      <rect x="110" y="235" width="40" height="16" rx="3" fill="#2A6A96" />
      <rect x="118" y="250" width="28" height="70" rx="5" fill="#E8C49A" />
    </svg>
  );
}
