export default function WaveDivider({
  topColor,
  bottomColor,
  flip = false,
  className = "",
}: {
  topColor: string;
  bottomColor: string;
  flip?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`relative -mb-px h-16 w-full overflow-hidden sm:h-20 md:h-28 ${className}`}
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
        <path
          d="M0,64 C240,112 480,8 720,48 C960,88 1200,112 1440,40 L1440,120 L0,120 Z"
          fill={bottomColor}
          opacity="0.4"
        />
        <path
          d="M0,80 C280,20 520,110 760,70 C1000,30 1240,10 1440,72 L1440,120 L0,120 Z"
          fill={bottomColor}
        />
      </svg>
    </div>
  );
}
