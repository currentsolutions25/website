"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import ScaleButton from "@/components/ScaleButton";
import {
  colors,
  fadeUp,
  serviceAreas,
  stagger,
} from "@/lib/design";

type ServiceAreasSectionProps = {
  /** Optional id for in-page linking */
  id?: string;
  showCta?: boolean;
};

export default function ServiceAreasSection({
  id = "service-areas",
  showCta = true,
}: ServiceAreasSectionProps) {
  return (
    <section
      id={id}
      className="mx-auto max-w-6xl px-5 py-32 sm:px-8 sm:py-40"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        variants={fadeUp}
        className="mx-auto max-w-2xl text-center"
      >
        <p className="section-label mb-5">Where We Work</p>
        <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl lg:text-[3.5rem]">
          Proudly Serving Florida&apos;s Nature Coast
        </h2>
        <p
          className="mt-7 text-base leading-relaxed sm:text-lg"
          style={{ color: "rgba(11,58,102,0.68)" }}
        >
          Professional electrical service across the communities we call home.
          Local details below are clearly marked placeholders for live business
          information.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.08 }}
        variants={stagger}
        className="mt-24 grid gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 lg:gap-6"
      >
        {serviceAreas.map((area) => {
          const Icon = area.icon;
          return (
            <motion.article
              key={area.slug}
              variants={fadeUp}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8 }}
              className="premium-card group flex flex-col p-7 sm:p-8"
            >
              <div
                className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-400 group-hover:scale-105"
                style={{
                  background: `linear-gradient(145deg, ${colors.seaGlass}, rgba(220,239,247,0.35))`,
                  color: colors.navy,
                  boxShadow: "inset 0 0 0 1px rgba(11,58,102,0.05)",
                }}
              >
                <Icon size={22} strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-[1.45rem] font-semibold tracking-tight sm:text-[1.55rem]">
                {area.name}
              </h3>
              <p
                className="mt-3 flex-1 text-sm leading-relaxed"
                style={{ color: "rgba(11,58,102,0.66)" }}
              >
                {area.cardDescription}
              </p>
              <Link
                href={`/service-areas#${area.slug}`}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold tracking-wide transition-opacity duration-300 hover:opacity-70"
                style={{ color: colors.navy }}
              >
                Learn more
                <ArrowRight
                  size={15}
                  strokeWidth={2.25}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </motion.article>
          );
        })}
      </motion.div>

      {showCta ? (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          variants={fadeUp}
          className="mt-16 flex justify-center"
        >
          <ScaleButton href="/service-areas" variant="secondary" className="px-8 py-4 text-base">
            View All Service Areas
            <ArrowRight size={18} strokeWidth={2.25} />
          </ScaleButton>
        </motion.div>
      ) : null}
    </section>
  );
}
