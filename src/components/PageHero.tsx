"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { colors } from "@/lib/design";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  actions?: ReactNode;
};

export default function PageHero({
  eyebrow,
  title,
  description,
  actions,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pt-16 sm:pt-20">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background: `
            radial-gradient(ellipse 55% 60% at 92% 8%, rgba(212,175,55,0.14) 0%, transparent 55%),
            radial-gradient(ellipse 50% 55% at 8% 90%, rgba(220,239,247,0.55) 0%, transparent 50%),
            linear-gradient(165deg, ${colors.white} 0%, ${colors.warmSand} 48%, ${colors.seaGlass} 100%)
          `,
        }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(212,175,55,0.35), transparent)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-5 pb-20 pt-10 sm:px-8 sm:pb-24 sm:pt-14">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="section-label"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="font-display mt-6 max-w-3xl text-[clamp(2.75rem,6vw,4.75rem)] font-semibold leading-[1.02] tracking-[-0.02em]"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          className="mt-7 max-w-2xl text-base leading-[1.8] sm:text-lg"
          style={{ color: "rgba(11,58,102,0.72)" }}
        >
          {description}
        </motion.p>
        {actions ? (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.24,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            {actions}
          </motion.div>
        ) : null}
      </div>
    </section>
  );
}
