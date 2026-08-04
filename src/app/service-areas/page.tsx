"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ScaleButton from "@/components/ScaleButton";
import SiteShell from "@/components/SiteShell";
import WaveDivider from "@/components/WaveDivider";
import {
  colors,
  fadeUp,
  SERVICE_AREA_LINE,
  serviceAreas,
  stagger,
} from "@/lib/design";

export default function ServiceAreasPage() {
  return (
    <SiteShell>
      <main>
        <PageHero
          eyebrow="Where We Serve"
          title={SERVICE_AREA_LINE}
          description="Current Solutions provides residential and commercial electrical services across Hernando, Pasco, Citrus, Pinellas, and Hillsborough counties."
          actions={
            <ScaleButton href="/contact" variant="gold">
              Request a Quote
              <ArrowRight size={20} strokeWidth={2.25} />
            </ScaleButton>
          }
        />

        <WaveDivider topColor={colors.seaGlass} bottomColor={colors.warmSand} />

        <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            variants={fadeUp}
            className="mx-auto mb-16 max-w-2xl text-center"
          >
            <p className="section-label mb-5">Local Coverage</p>
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.75rem]">
              Communities we proudly serve
            </h2>
            <p
              className="mt-6 text-base leading-relaxed sm:text-lg"
              style={{ color: "rgba(11,58,102,0.68)" }}
            >
              Placeholder text is clearly labeled for replacement with
              community-specific service notes, response details, and local
              project highlights.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
            className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
          >
            {serviceAreas.map((area) => {
              const Icon = area.icon;
              return (
                <motion.article
                  key={area.slug}
                  id={area.slug}
                  variants={fadeUp}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -8 }}
                  className="premium-card group flex scroll-mt-32 flex-col p-8 sm:p-9"
                >
                  <div
                    className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-400 group-hover:scale-105"
                    style={{
                      background: `linear-gradient(145deg, ${colors.seaGlass}, rgba(220,239,247,0.35))`,
                      color: colors.navy,
                      boxShadow: "inset 0 0 0 1px rgba(11,58,102,0.05)",
                    }}
                  >
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-2xl font-semibold tracking-tight sm:text-[1.75rem]">
                    {area.name}
                  </h3>
                  <p
                    className="mt-4 flex-1 text-sm leading-relaxed sm:text-base"
                    style={{ color: "rgba(11,58,102,0.7)" }}
                  >
                    {area.description}
                  </p>
                  <ul className="mt-6 space-y-2.5">
                    {area.highlights.map((item) => (
                      <li
                        key={item}
                        className="text-sm tracking-wide"
                        style={{ color: "rgba(11,58,102,0.62)" }}
                      >
                        · {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="mt-8 inline-flex items-center gap-2 text-sm font-semibold tracking-wide transition-opacity duration-300 hover:opacity-70"
                    style={{ color: colors.navy }}
                  >
                    Request a quote in {area.name}
                    <ArrowRight
                      size={16}
                      strokeWidth={2.25}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>
                </motion.article>
              );
            })}
          </motion.div>
        </section>

        <WaveDivider topColor={colors.warmSand} bottomColor={colors.navy} />

        <section className="cta-surface relative overflow-hidden px-5 py-28 sm:px-8 sm:py-36">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            variants={fadeUp}
            className="relative mx-auto max-w-3xl text-center"
          >
            <p
              className="mb-6 text-[0.68rem] font-semibold tracking-[0.28em]"
              style={{ color: "rgba(212,175,55,0.9)" }}
            >
              DON&apos;T SEE YOUR CITY?
            </p>
            <h2
              className="font-display text-[clamp(2.25rem,5vw,3.75rem)] font-semibold leading-[1.08] tracking-tight"
              style={{ color: colors.white }}
            >
              Ask about service in your neighborhood
            </h2>
            <p
              className="mx-auto mt-8 max-w-xl text-base leading-relaxed sm:text-lg"
              style={{ color: "rgba(246,241,231,0.78)" }}
            >
              Coverage can vary by project type and schedule. Reach out with your
              location and we&apos;ll confirm availability.
            </p>
            <div className="mt-12">
              <ScaleButton href="/contact" variant="gold" className="px-12 py-5">
                Contact Current Solutions
                <ArrowRight size={20} strokeWidth={2.25} />
              </ScaleButton>
            </div>
          </motion.div>
        </section>
      </main>
    </SiteShell>
  );
}
