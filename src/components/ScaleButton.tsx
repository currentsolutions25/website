"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { colors } from "@/lib/design";

type ScaleButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "gold";
  className?: string;
};

const base =
  "inline-flex items-center justify-center gap-2.5 rounded-2xl px-10 py-5 text-lg font-semibold tracking-wide transition-[box-shadow,background-color,color] duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

const variants: Record<"primary" | "secondary" | "gold", CSSProperties> = {
  primary: {
    background: colors.navy,
    color: colors.white,
    boxShadow: "0 18px 44px -14px rgba(11,58,102,0.55)",
  },
  secondary: {
    background: "rgba(255,255,255,0.58)",
    color: colors.navy,
    boxShadow: "inset 0 0 0 1.5px rgba(11,58,102,0.22)",
    backdropFilter: "blur(10px)",
  },
  gold: {
    background: `linear-gradient(165deg, #E4C65A 0%, ${colors.champagne} 48%, #C9A227 100%)`,
    color: colors.navy,
    boxShadow:
      "0 18px 44px -12px rgba(212,175,55,0.55), inset 0 1px 0 rgba(255,255,255,0.35)",
  },
};

const MotionLink = motion.create(Link);

export default function ScaleButton({
  children,
  href,
  variant = "primary",
  className = "",
}: ScaleButtonProps) {
  const motionProps = {
    whileHover: { scale: 1.035, y: -2 },
    whileTap: { scale: 0.98 },
    transition: { type: "spring" as const, stiffness: 420, damping: 28 },
    className: `${base} ${className}`,
    style: variants[variant],
  };

  const isInternal = href.startsWith("/") || href.startsWith("#");

  if (isInternal) {
    return (
      <MotionLink href={href} {...motionProps}>
        {children}
      </MotionLink>
    );
  }

  return (
    <motion.a href={href} {...motionProps}>
      {children}
    </motion.a>
  );
}
