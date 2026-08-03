import { colors } from "@/lib/design";

export default function LighthouseMark({
  size = 44,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="24" cy="24" r="24" fill={colors.navy} />
      <path
        d="M24 8L30 14H18L24 8Z"
        fill={colors.gold}
      />
      <rect x="20" y="14" width="8" height="4" fill="#F4F6F8" />
      <path d="M19 18H29L31.5 38H16.5L19 18Z" fill="#F8FAFC" />
      <path d="M19.8 24H28.2L28.7 28H19.3L19.8 24Z" fill={colors.navy} />
      <path d="M20.4 32H27.6L28.1 36H19.9L20.4 32Z" fill={colors.navy} />
      <rect x="22.5" y="38" width="3" height="5" fill={colors.gold} />
      <path
        d="M10 22L18 20"
        stroke={colors.gold}
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.85"
      />
      <path
        d="M30 20L38 22"
        stroke={colors.gold}
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.85"
      />
    </svg>
  );
}
