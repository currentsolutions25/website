"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  Building2,
  HeartHandshake,
  MapPin,
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
    title: "Quality Workmanship",
    description:
      "Thoughtful, precise electrical work crafted to last—never rushed, never cut corners.",
    icon: Sparkles,
  },
  {
    title: "Honest Communication",
    description:
      "Clear expectations, straightforward guidance, and respectful updates from start to finish.",
    icon: MessageCircleHeart,
  },
  {
    title: "Residential & Commercial",
    description:
      "Trusted electrical solutions for homes and businesses throughout Florida's Nature Coast.",
    icon: Building2,
  },
  {
    title: "Proudly Serving Florida's Nature Coast",
    description:
      "Rooted in the communities we serve—calm, reliable service from neighbors you can trust.",
    icon: MapPin,
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
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function WhyChoose() {
  return (
    <section
      id="about"
      className="relative bg-warm-white py-28 sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs font-medium tracking-[0.28em] text-gold-deep uppercase">
            Our Promise
          </p>
          <h2 className="mt-5 font-display text-4xl font-medium tracking-tight text-navy sm:text-5xl lg:text-[3.35rem]">
            Why Choose Current Solutions
          </h2>
          <p className="mt-6 text-base leading-relaxed text-foreground-muted sm:text-lg">
            Calm, dependable electrical service rooted in family values and
            Nature Coast pride.
          </p>
        </motion.div>

        <motion.ul
          className="mt-20 grid gap-8 sm:grid-cols-2 lg:mt-24 lg:grid-cols-3 lg:gap-10"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
        >
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <motion.li
                key={feature.title}
                variants={item}
                className="group rounded-2xl border border-navy/[0.06] bg-white/70 p-9 shadow-[0_12px_40px_rgba(11,31,58,0.06)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-gold/30 hover:shadow-[0_18px_48px_rgba(11,31,58,0.1)] sm:p-10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold/25 bg-warm-white text-navy transition-colors duration-300 group-hover:border-gold/50 group-hover:text-gold-deep">
                  <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
                </div>
                <h3 className="mt-7 font-display text-[1.65rem] leading-snug font-medium text-navy">
                  {feature.title}
                </h3>
                <p className="mt-4 text-[0.95rem] leading-relaxed text-foreground-muted">
                  {feature.description}
                </p>
              </motion.li>
            );
          })}
        </motion.ul>

        <motion.div
          className="mt-20 flex flex-col items-center justify-center gap-3 text-center sm:flex-row sm:gap-6"
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
