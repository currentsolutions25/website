"use client";

import { motion } from "framer-motion";
import { ArrowRight, Quote, Star } from "lucide-react";
import PageHero from "@/components/PageHero";
import ScaleButton from "@/components/ScaleButton";
import SiteShell from "@/components/SiteShell";
import WaveDivider from "@/components/WaveDivider";
import { colors, fadeUp, stagger } from "@/lib/design";

const testimonials = [
  {
    name: "Sample Homeowner",
    location: "Nature Coast, FL",
    service: "Panel Upgrade",
    quote:
      "“Sample review content: Current Solutions explained our options clearly and completed the panel upgrade with care and professionalism.”",
  },
  {
    name: "Sample Business Owner",
    location: "Nature Coast, FL",
    service: "Commercial Electrical",
    quote:
      "“Sample review content: Communication was excellent, the crew was respectful of our space, and the work helped keep our business running smoothly.”",
  },
  {
    name: "Sample Customer",
    location: "Nature Coast, FL",
    service: "Lighting Installation",
    quote:
      "“Sample review content: Our new lighting transformed the look of the home. The team was punctual, tidy, and easy to work with.”",
  },
  {
    name: "Sample Homeowner",
    location: "Nature Coast, FL",
    service: "Generator Connection",
    quote:
      "“Sample review content: We feel more prepared for storm season. The generator connection was handled carefully and thoroughly explained.”",
  },
  {
    name: "Sample Customer",
    location: "Nature Coast, FL",
    service: "Emergency Service",
    quote:
      "“Sample review content: When we had an urgent electrical issue, they responded quickly and helped us feel confident about the next steps.”",
  },
  {
    name: "Sample Homeowner",
    location: "Nature Coast, FL",
    service: "Residential Electrical",
    quote:
      "“Sample review content: Honest recommendations, quality craftsmanship, and a family-owned team that truly cares about local homeowners.”",
  },
];

export default function ReviewsPage() {
  return (
    <SiteShell>
      <main>
        <PageHero
          eyebrow="Customer Reviews"
          title="What Neighbors Are Saying"
          description="These elegant testimonials are clearly marked as sample content and will be replaced with real customer feedback as reviews are collected."
        />

        <WaveDivider topColor={colors.seaGlass} bottomColor={colors.warmSand} />

        <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="mx-auto mb-12 max-w-2xl text-center"
          >
            <p
              className="inline-flex rounded-2xl px-4 py-2 text-xs font-semibold tracking-[0.18em] uppercase"
              style={{
                background: "rgba(212,175,55,0.14)",
                color: colors.navy,
              }}
            >
              Sample Content
            </p>
            <p
              className="mt-5 text-base leading-relaxed"
              style={{ color: "rgba(11,58,102,0.68)" }}
            >
              Placeholder testimonials for layout and design. Real reviews will
              be added as they become available.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
            className="grid gap-7 md:grid-cols-2"
          >
            {testimonials.map((item) => (
              <motion.article
                key={`${item.name}-${item.service}`}
                variants={fadeUp}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8 }}
                className="premium-card relative p-8 sm:p-10"
              >
                <Quote
                  size={28}
                  strokeWidth={1.4}
                  className="mb-6"
                  style={{ color: colors.champagne }}
                />
                <div className="mb-5 flex gap-1" aria-label="5 star sample rating">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      size={16}
                      fill={colors.champagne}
                      color={colors.champagne}
                    />
                  ))}
                </div>
                <p
                  className="text-base leading-[1.85] sm:text-lg"
                  style={{ color: "rgba(11,58,102,0.78)" }}
                >
                  {item.quote}
                </p>
                <div className="mt-8 border-t pt-6" style={{ borderColor: "rgba(11,58,102,0.08)" }}>
                  <p className="font-display text-xl font-semibold tracking-tight">
                    {item.name}
                  </p>
                  <p
                    className="mt-1 text-sm tracking-wide"
                    style={{ color: "rgba(11,58,102,0.6)" }}
                  >
                    {item.location} · {item.service}
                  </p>
                  <p
                    className="mt-3 text-xs font-semibold tracking-[0.16em] uppercase"
                    style={{ color: "rgba(212,175,55,0.95)" }}
                  >
                    Sample Review
                  </p>
                </div>
              </motion.article>
            ))}
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
              EXPERIENCE THE DIFFERENCE
            </p>
            <h2
              className="font-display text-[clamp(2.25rem,5vw,3.75rem)] font-semibold leading-[1.08] tracking-tight"
              style={{ color: colors.white }}
            >
              Ready for dependable electrical service?
            </h2>
            <div className="mt-12">
              <ScaleButton href="/contact" variant="gold" className="px-12 py-5">
                Request a Quote
                <ArrowRight size={20} strokeWidth={2.25} />
              </ScaleButton>
            </div>
          </motion.div>
        </section>
      </main>
    </SiteShell>
  );
}
