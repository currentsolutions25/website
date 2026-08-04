import Image from "next/image";

type BrandLogoProps = {
  /** Overall logo height in pixels */
  height?: number;
  className?: string;
};

/**
 * Current Solutions brand lockup (static).
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
        className="h-full w-full object-contain"
        priority
      />
    </span>
  );
}
