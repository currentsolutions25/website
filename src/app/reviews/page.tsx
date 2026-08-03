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
    name: "[Customer Name]",
    location: "[City, FL]",
    service: "Panel Upgrade",
    quote:
      "[Placeholder review] Share a real customer comment here about communication, craftsmanship, and the finished result.",
  },
  {
    name: "[Customer Name]",
    location: "[City, FL]",
    service: "Commercial Electrical",
    quote:
      "[Placeholder review] Replace this text with feedback from a local business about reliability and minimal disruption.",
  },
  {
    name: "[Customer Name]",
    location: "[City, FL]",
    service: "Lighting Installation",
    quote:
      "[Placeholder review] Add a genuine lighting project review describing punctuality, cleanliness, and the finished look.",
  },
  {
    name: "[Customer Name]",
    location: "[City, FL]",
    service: "Generator Connection",
    quote:
      "[Placeholder review] Insert real storm-ready / backup power feedback once customer permission is available.",
  },
  {
    name: "[Customer Name]",
    location: "[City, FL]",
    service: "Emergency Service",
    quote:
      "[Placeholder review] Replace with an authentic emergency-response experience from a Nature Coast customer.",
  },
  {
    name: "[Customer Name]",
    location: "[City, FL]",
    service: "Residential Electrical",
    quote:
      "[Placeholder review] Use a verified homeowner review highlighting honesty, quality, and local family-owned service.",
  },
];

const reviewStats = [
  {
    label: "Overall Rating",
    value: "—.—",
    note: "[Replace with live rating]",
  },
  {
    label: "Total Reviews",
    value: "—",
    note: "[Replace with review count]",
  },
  {
    label: "5-Star Share",
    value: "—%",
    note: "[Replace with percentage]",
  },
  {
    label: "Response Rate",
    value: "—%",
    note: "[Replace with response rate]",
  },
];

export default function ReviewsPage() {
  return (
    <SiteShell>
      <main>
        <PageHero
          eyebrow="Customer Reviews"
          title="What Neighbors Are Saying"
          description="A premium review layout ready for verified customer feedback. All review text below is clearly marked as placeholder content for later replacement."
        />

        <WaveDivider topColor={colors.seaGlass} bottomColor={colors.warmSand} />

        {/* Overall rating + stats */}
        <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            variants={fadeUp}
            className="premium-card overflow-hidden"
          >
            <div className="grid lg:grid-cols-[1fr_1.2fr]">
              <div
                className="flex flex-col items-center justify-center px-8 py-12 text-center sm:px-12"
                style={{
                  background: `
                    radial-gradient(ellipse 70% 60% at 50% 0%, rgba(212,175,55,0.18) 0%, transparent 55%),
                    linear-gradient(165deg, ${colors.navy} 0%, #114f7a 100%)
                  `,
                }}
              >
                <p
                  className="text-[0.68rem] font-semibold tracking-[0.28em]"
                  style={{ color: "rgba(212,175,55,0.9)" }}
                >
                  OVERALL RATING
                </p>
                <p
                  className="font-display mt-4 text-7xl font-semibold tracking-tight"
                  style={{ color: colors.white }}
                >
                  —.—
                </p>
                <div className="mt-4 flex gap-1" aria-label="Placeholder star rating">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      size={22}
                      fill="rgba(212,175,55,0.35)"
                      color={colors.champagne}
                    />
                  ))}
                </div>
                <p
                  className="mt-5 text-sm"
                  style={{ color: "rgba(246,241,231,0.7)" }}
                >
                  [Replace with live Google / review platform rating]
                </p>
              </div>

              <div className="grid gap-px sm:grid-cols-2" style={{ background: "rgba(11,58,102,0.06)" }}>
                {reviewStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col justify-center px-8 py-10"
                    style={{ background: colors.white }}
                  >
                    <p
                      className="text-xs font-semibold tracking-[0.16em] uppercase"
                      style={{ color: "rgba(11,58,102,0.5)" }}
                    >
                      {stat.label}
                    </p>
                    <p className="font-display mt-3 text-4xl font-semibold tracking-tight">
                      {stat.value}
                    </p>
                    <p
                      className="mt-2 text-xs"
                      style={{ color: "rgba(11,58,102,0.45)" }}
                    >
                      {stat.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="mx-auto mt-14 max-w-2xl text-center"
          >
            <p
              className="inline-flex rounded-2xl px-4 py-2 text-xs font-semibold tracking-[0.18em] uppercase"
              style={{
                background: "rgba(212,175,55,0.14)",
                color: colors.navy,
              }}
            >
              Placeholder Reviews
            </p>
            <p
              className="mt-5 text-base leading-relaxed"
              style={{ color: "rgba(11,58,102,0.68)" }}
            >
              The review cards below are layout placeholders only. Do not treat
              them as real customer testimonials.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
            className="mt-12 grid gap-7 md:grid-cols-2"
          >
            {testimonials.map((item) => (
              <motion.article
                key={`${item.service}-${item.quote.slice(0, 24)}`}
                variants={fadeUp}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8 }}
                className="premium-card relative p-8 sm:p-10"
              >
                <div className="mb-5 flex items-center justify-between gap-3">
                  <Quote
                    size={28}
                    strokeWidth={1.4}
                    style={{ color: colors.champagne }}
                  />
                  <span
                    className="rounded-xl px-3 py-1.5 text-[0.65rem] font-semibold tracking-[0.14em] uppercase"
                    style={{
                      background: "rgba(212,175,55,0.14)",
                      color: colors.navy,
                    }}
                  >
                    Placeholder
                  </span>
                </div>
                <div className="mb-5 flex gap-1" aria-label="Placeholder 5 star rating">
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
                <div
                  className="mt-8 border-t pt-6"
                  style={{ borderColor: "rgba(11,58,102,0.08)" }}
                >
                  <p className="font-display text-xl font-semibold tracking-tight">
                    {item.name}
                  </p>
                  <p
                    className="mt-1 text-sm tracking-wide"
                    style={{ color: "rgba(11,58,102,0.6)" }}
                  >
                    {item.location} · {item.service}
                  </p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </section>

        {/* Google Reviews placeholder */}
        <section
          className="border-y px-5 py-20 sm:px-8 sm:py-28"
          style={{
            background: `linear-gradient(180deg, rgba(220,239,247,0.4) 0%, ${colors.warmSand} 100%)`,
            borderColor: "rgba(11,58,102,0.06)",
          }}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            variants={fadeUp}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="section-label mb-5">Google Reviews</p>
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Google Business reviews placeholder
            </h2>
            <p
              className="mx-auto mt-6 max-w-xl text-base leading-relaxed"
              style={{ color: "rgba(11,58,102,0.68)" }}
            >
              [Replace this section with a Google Reviews embed, badge, or link
              once the Google Business Profile is connected.]
            </p>
            <div
              className="premium-card mx-auto mt-10 flex min-h-[180px] max-w-xl items-center justify-center px-8 py-12"
            >
              <div>
                <div className="mx-auto mb-4 flex justify-center gap-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      size={20}
                      fill="rgba(212,175,55,0.35)"
                      color={colors.champagne}
                    />
                  ))}
                </div>
                <p className="font-display text-2xl font-semibold tracking-tight">
                  Google Reviews Widget
                </p>
                <p
                  className="mt-3 text-sm"
                  style={{ color: "rgba(11,58,102,0.55)" }}
                >
                  Placeholder for live Google review feed
                </p>
              </div>
            </div>
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
            <p
              className="mx-auto mt-8 max-w-xl text-base leading-relaxed sm:text-lg"
              style={{ color: "rgba(246,241,231,0.78)" }}
            >
              Request a free quote and discover why Nature Coast neighbors trust
              Current Solutions for careful, family-owned electrical work.
            </p>
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
