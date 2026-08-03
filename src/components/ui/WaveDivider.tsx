type WaveDividerProps = {
  className?: string;
};

/**
 * Soft coastal SVG wave — bridges the hero into the next section.
 */
export default function WaveDivider({ className }: WaveDividerProps) {
  return (
    <div
      className={className}
      aria-hidden="true"
      style={{ lineHeight: 0, marginTop: "-1px" }}
    >
      <svg
        viewBox="0 0 1440 96"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="block h-14 w-full sm:h-20 lg:h-24"
        focusable="false"
      >
        <path
          d="M0 64C180 96 360 8 540 24C720 40 900 96 1080 80C1260 64 1350 32 1440 40V96H0V64Z"
          fill="var(--warm-white)"
          opacity="0.45"
        />
        <path
          d="M0 72C200 104 380 28 560 40C740 52 920 104 1100 88C1280 72 1360 40 1440 48V96H0V72Z"
          fill="var(--warm-white)"
        />
      </svg>
    </div>
  );
}
