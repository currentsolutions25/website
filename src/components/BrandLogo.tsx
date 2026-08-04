import Image from "next/image";
import { SITE_NAME } from "@/lib/design";

type BrandLogoProps = {
  /** Overall logo mark height in pixels */
  height?: number;
  className?: string;
  /** Show the full company name beside the logo mark */
  showName?: boolean;
  /** Scale the logo artwork inside the black container (container size unchanged) */
  imageScale?: number;
};

/**
 * Current Solutions brand lockup (static).
 */
export default function BrandLogo({
  height = 52,
  className = "",
  showName = false,
  imageScale = 1,
}: BrandLogoProps) {
  const width = Math.round(height * 2.45);

  return (
    <span className={`inline-flex items-center gap-2.5 sm:gap-3 ${className}`}>
      <span
        className="brand-logo relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-xl shadow-[0_8px_20px_-12px_rgba(0,0,0,0.55)]"
        style={{ height, width }}
      >
        <Image
          src="/images/current-solutions-logo.png"
          alt={showName ? "" : SITE_NAME}
          width={width}
          height={height}
          className="h-full w-full object-contain"
          style={
            imageScale !== 1
              ? { transform: `scale(${imageScale})`, transformOrigin: "center" }
              : undefined
          }
          priority
        />
      </span>

      {showName && (
        <span className="flex min-w-0 flex-col justify-center leading-[1.15]">
          <span
            className="font-display text-[1.05rem] font-bold tracking-[-0.02em] sm:text-[1.15rem]"
            style={{ color: "var(--navy)" }}
          >
            Current Solutions
          </span>
          <span
            className="mt-0.5 text-[0.68rem] font-semibold tracking-[0.04em] sm:text-[0.76rem]"
            style={{ color: "rgba(11, 58, 102, 0.78)" }}
          >
            Electrical Services
          </span>
        </span>
      )}
    </span>
  );
}
