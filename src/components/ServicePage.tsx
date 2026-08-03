"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import ScaleButton from "@/components/ScaleButton";
import SiteShell from "@/components/SiteShell";
import WaveDivider from "@/components/WaveDivider";
import {
  colors,
  fadeUp,
  PHONE_DISPLAY,
  PHONE_HREF,
  services,
  type ServiceSlug,
  stagger,
} from "@/lib/design";

export default function ServicePage({ slug }: { slug: ServiceSlug }) {
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  return (
    <SiteShell>
      <main>
        <PageHero
          eyebrow={service.heroEyebrow}
          title={service.heroTitle}
          description={service.heroDescription}
          actions={
            <>
              <ScaleButton href="/contact" variant="gold">
                Request a Quote
                <ArrowRight size={20} strokeWidth={2.25} />
              </ScaleButton>
              <ScaleButton href={PHONE_HREF} variant="secondary">
                Call {PHONE_DISPLAY}
              </ScaleButton>
            </>
          }
        />

        <WaveDivider topColor={colors.seaGlass} bottomColor={colors.warmSand} />

        <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
          <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              variants={fadeUp}
            >
              <p className="section-label mb-5">Overview</p>
              <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                Professional {service.title.toLowerCase()} for the Nature Coast
              </h2>
              <p
                className="mt-7 text-base leading-[1.85] sm:text-lg"
                style={{ color: "rgba(11,58,102,0.72)" }}
              >
                {service.description} At Current Solutions, we take a careful,
                family-owned approach to every job—listening first, explaining
                clearly, and completing the work with the same care we&apos;d
                expect in our own home or business.
              </p>
              <p
                className="mt-5 text-base leading-[1.85] sm:text-lg"
                style={{ color: "rgba(11,58,102,0.72)" }}
              >
                Whether you&apos;re planning an upgrade or need dependable help
                with a current issue, we&apos;re here to provide practical
                guidance and quality craftsmanship throughout Florida&apos;s
                Nature Coast.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={stagger}
              className="premium-card p-8 sm:p-10"
            >
              <div
                className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl"
                style={{
                  background: `linear-gradient(145deg, ${colors.seaGlass}, rgba(220,239,247,0.35))`,
                  color: colors.navy,
                }}
              >
                <Icon size={28} strokeWidth={1.45} />
              </div>
              <h3 className="font-display text-2xl font-semibold tracking-tight">
                What this service can include
              </h3>
              <ul className="mt-7 space-y-4">
                {service.highlights.map((item) => (
                  <motion.li
                    key={item}
                    variants={fadeUp}
                    className="flex items-start gap-3 text-base leading-relaxed"
                    style={{ color: "rgba(11,58,102,0.74)" }}
                  >
                    <span
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                      style={{
                        background: "rgba(212,175,55,0.18)",
                        color: colors.champagne,
                      }}
                    >
                      <Check size={12} strokeWidth={2.75} />
                    </span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
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
              READY TO TALK
            </p>
            <h2
              className="font-display text-[clamp(2.25rem,5vw,3.75rem)] font-semibold leading-[1.08] tracking-tight"
              style={{ color: colors.white }}
            >
              Let&apos;s discuss your {service.shortTitle.toLowerCase()} project
            </h2>
            <p
              className="mx-auto mt-8 max-w-xl text-base leading-relaxed sm:text-lg"
              style={{ color: "rgba(246,241,231,0.78)" }}
            >
              Reach out for a free quote. We&apos;ll help you understand your
              options and recommend a clear path forward.
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
