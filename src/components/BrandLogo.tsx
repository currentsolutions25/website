import Image from "next/image";
import { SITE_NAME } from "@/lib/design";

type BrandLogoProps = {
  /** Overall logo mark height in pixels */
  height?: number;
  className?: string;
  /** Show the full company name beside the logo mark */
  showName?: boolean;
};

/**
 * Current Solutions brand lockup (static).
 */
export default function BrandLogo({
  height = 52,
  className = "",
  showName = false,
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
          priority
        />
      </span>

      {showName && (
        <span className="flex min-w-0 flex-col justify-center leading-[1.15]">
          <span
            className="font-display text-[0.95rem] font-bold tracking-[-0.02em] sm:text-[1.05rem]"
            style={{ color: "var(--navy)" }}
          >
            Current Solutions
          </span>
          <span
            className="mt-0.5 text-[0.62rem] font-semibold tracking-[0.04em] sm:text-[0.7rem]"
            style={{ color: "rgba(11, 58, 102, 0.78)" }}
          >
            Electrical Services
          </span>
        </span>
      )}
    </span>
  );
}
