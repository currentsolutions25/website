export default function WaveDivider({
  topColor,
  bottomColor,
  flip = false,
  className = "",
  variant = "soft",
}: {
  topColor: string;
  bottomColor: string;
  flip?: boolean;
  className?: string;
  variant?: "soft" | "hero";
}) {
  const height =
    variant === "hero"
      ? "h-16 sm:h-24 md:h-28"
      : "h-14 sm:h-18 md:h-24";

  return (
    <div
      className={`relative -mb-px w-full overflow-hidden ${height} ${className}`}
      aria-hidden="true"
      style={{
        background: topColor,
        transform: flip ? "scaleY(-1)" : undefined,
      }}
    >
      <svg
        className="absolute bottom-0 left-0 h-full w-full"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {variant === "hero" ? (
          <>
            <path
              d="M0,72 C220,110 420,18 700,52 C980,86 1180,110 1440,36 L1440,120 L0,120 Z"
              fill={bottomColor}
              opacity="0.35"
            />
            <path
              d="M0,88 C260,30 520,108 780,68 C1040,28 1260,16 1440,64 L1440,120 L0,120 Z"
              fill={bottomColor}
            />
          </>
        ) : (
          <>
            <path
              d="M0,64 C240,112 480,8 720,48 C960,88 1200,112 1440,40 L1440,120 L0,120 Z"
              fill={bottomColor}
              opacity="0.4"
            />
            <path
              d="M0,80 C280,20 520,110 760,70 C1000,30 1240,10 1440,72 L1440,120 L0,120 Z"
              fill={bottomColor}
            />
          </>
        )}
      </svg>
    </div>
  );
}
