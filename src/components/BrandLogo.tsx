import Image from "next/image";

type BrandLogoProps = {
  /** Overall logo height in pixels */
  height?: number;
  className?: string;
};

/**
 * Current Solutions brand lockup with animated lightning energy.
 */
export default function BrandLogo({ height = 52, className = "" }: BrandLogoProps) {
  const width = Math.round(height * 2.45);

  return (
    <span
      className={`brand-logo relative inline-flex items-center justify-center overflow-hidden rounded-xl shadow-[0_8px_20px_-12px_rgba(0,0,0,0.55)] ${className}`}
      style={{ height, width }}
    >
      <Image
        src="/images/current-solutions-logo.png"
        alt="Current Solutions Electrical Services"
        width={width}
        height={height}
        className="relative z-[1] h-full w-full object-contain"
        priority
      />

      {/* Moving / crackling lightning energy */}
      <span className="brand-lightning-layer" aria-hidden="true">
        {/* Soft pulse over the gold bolt "C" */}
        <span className="brand-bolt-glow" />

        {/* Traveling spark along the top blue cable */}
        <span className="brand-arc-runner" />

        {/* Crackling burst at the top spark */}
        <svg
          viewBox="0 0 240 100"
          className="brand-burst-svg pointer-events-none absolute inset-0 h-full w-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter id="sparkGlow" x="-80%" y="-80%" width="260%" height="260%">
              <feGaussianBlur stdDeviation="1.6" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <g className="brand-burst" transform="translate(122 18)" filter="url(#sparkGlow)">
            <circle className="brand-burst-core" cx="0" cy="0" r="3.5" fill="#FFFFFF" />
            <path
              className="brand-burst-rays"
              d="M0-11V-6M0 6V11M-11 0H-6M6 0H11M-8-8L-5-5M5 5L8 8M8-8L5-5M-5 5L-8 8"
              stroke="#9FD9FF"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
            <path
              className="brand-burst-jag"
              d="M2-4L8-10M-1 3L-9 9M4 2L11 5"
              stroke="#EAF6FF"
              strokeWidth="1.3"
              strokeLinecap="round"
            />
          </g>
        </svg>
      </span>
    </span>
  );
}
