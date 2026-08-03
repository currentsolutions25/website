"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  Building2,
  HeartHandshake,
  MessageCircleHeart,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const features = [
  {
    title: "Family Owned & Operated",
    description:
      "A local family business built on personal care, integrity, and lasting relationships across the Nature Coast.",
    icon: HeartHandshake,
  },
  {
    title: "Licensed & Insured",
    description:
      "Fully licensed and insured for your peace of mind—on every residential and commercial project.",
    icon: ShieldCheck,
  },
  {
    title: "Honest Communication",
    description:
      "Clear expectations, straightforward guidance, and respectful updates from start to finish.",
    icon: MessageCircleHeart,
  },
  {
    title: "Quality Workmanship",
    description:
      "Thoughtful, precise electrical work crafted to last—never rushed, never cut corners.",
    icon: Sparkles,
  },
  {
    title: "Residential & Commercial",
    description:
      "Trusted electrical solutions for homes and businesses throughout Florida's Nature Coast.",
    icon: Building2,
  },
] as const;

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function WhyChoose() {
  return (
    <section
      id="why-choose"
      className="relative bg-warm-white py-24 sm:py-28 lg:py-32"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs font-medium tracking-[0.28em] text-gold-deep uppercase">
            Our Promise
          </p>
          <h2 className="mt-4 font-display text-4xl font-medium text-navy sm:text-5xl">
            Why Choose Current Solutions
          </h2>
          <p className="mt-5 text-base leading-relaxed text-foreground-muted sm:text-lg">
            Calm, dependable electrical service rooted in family values and
            Nature Coast pride.
          </p>
        </motion.div>

        <motion.ul
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isLastCentered = index === features.length - 1;

            return (
              <motion.li
                key={feature.title}
                variants={item}
                className={`group border border-navy/8 bg-white/60 p-8 shadow-[0_1px_0_rgba(11,31,58,0.04)] backdrop-blur-sm transition-colors duration-300 hover:border-gold/35 ${
                  isLastCentered ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="flex h-11 w-11 items-center justify-center border border-gold/30 bg-warm-white text-navy transition-colors duration-300 group-hover:border-gold group-hover:text-gold-deep">
                  <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-medium text-navy">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground-muted sm:text-[0.95rem]">
                  {feature.description}
                </p>
              </motion.li>
            );
          })}
        </motion.ul>

        <motion.div
          className="mt-16 flex flex-col items-center justify-center gap-3 text-center sm:flex-row sm:gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-flex items-center gap-2 text-sm tracking-wide text-foreground-muted">
            <BadgeCheck
              className="h-4 w-4 text-gold-deep"
              strokeWidth={1.5}
              aria-hidden="true"
            />
            Licensed & Insured
          </span>
          <span className="hidden h-1 w-1 rounded-full bg-gold/50 sm:block" />
          <span className="text-sm tracking-wide text-foreground-muted">
            Serving Florida&apos;s Nature Coast
          </span>
        </motion.div>
      </div>
    </section>
  );
}
