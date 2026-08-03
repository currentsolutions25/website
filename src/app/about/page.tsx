"use client";

import { motion } from "framer-motion";
import { ArrowRight, HeartHandshake, Home, MapPin, Users } from "lucide-react";
import PageHero from "@/components/PageHero";
import ScaleButton from "@/components/ScaleButton";
import SiteShell from "@/components/SiteShell";
import WaveDivider from "@/components/WaveDivider";
import { colors, fadeUp, stagger } from "@/lib/design";

const values = [
  {
    title: "Family First",
    description:
      "As a family-owned contractor, we treat every project with personal care and accountability.",
    icon: Users,
  },
  {
    title: "Local Roots",
    description:
      "We live and work along Florida's Nature Coast, and we care about serving our neighbors well.",
    icon: MapPin,
  },
  {
    title: "Honest Craft",
    description:
      "Clear recommendations, careful workmanship, and communication you can count on from start to finish.",
    icon: HeartHandshake,
  },
  {
    title: "Home-Ready Care",
    description:
      "Whether the job is small or complex, we show up prepared, respectful, and focused on doing it right.",
    icon: Home,
  },
];

export default function AboutPage() {
  return (
    <SiteShell>
      <main>
        <PageHero
          eyebrow="Our Story"
          title="A Family-Owned Electrical Contractor for Florida's Nature Coast"
          description="Current Solutions is built on dependable service, honest workmanship, and the kind of care you’d expect from neighbors who take pride in every job."
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
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            variants={fadeUp}
            className="mx-auto max-w-3xl"
          >
            <p className="section-label mb-5">Who We Are</p>
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.75rem]">
              Built on trust, craftsmanship, and community
            </h2>
            <div
              className="mt-10 space-y-6 text-base leading-[1.9] sm:text-lg"
              style={{ color: "rgba(11,58,102,0.74)" }}
            >
              <p>
                Current Solutions Electrical Services is a family-owned
                electrical contractor proudly serving Florida&apos;s Nature
                Coast. We started with a simple goal: provide homeowners and
                local businesses with reliable electrical work they can trust—
                without the runaround.
              </p>
              <p>
                From residential repairs and panel upgrades to commercial
                support and storm-season preparedness, our work is guided by
                careful planning, clear communication, and quality
                craftsmanship. We believe good electrical service should feel
                straightforward: show up when expected, explain the options, and
                complete the job with pride.
              </p>
              <p>
                Living and working in this coastal community means we understand
                the unique needs of Florida homes and businesses—humidity,
                storms, older service equipment, and the everyday importance of
                dependable power. That local perspective shapes how we approach
                every project.
              </p>
              <p>
                Whether you need help with a small repair or a larger upgrade,
                we treat your property with the same respect we&apos;d give our
                own. That&apos;s the Current Solutions way.
              </p>
            </div>
          </motion.div>
        </section>

        <section
          className="py-24 sm:py-32"
          style={{
            background: `linear-gradient(180deg, rgba(220,239,247,0.45) 0%, ${colors.warmSand} 100%)`,
          }}
        >
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              variants={fadeUp}
              className="mx-auto max-w-2xl text-center"
            >
              <p className="section-label mb-5">What Guides Us</p>
              <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.75rem]">
                Values that show up in the work
              </h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={stagger}
              className="mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-4"
            >
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <motion.article
                    key={value.title}
                    variants={fadeUp}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ y: -8 }}
                    className="premium-card px-7 py-9 text-center"
                  >
                    <div
                      className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl"
                      style={{
                        background: colors.navy,
                        color: colors.champagne,
                      }}
                    >
                      <Icon size={22} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-display text-xl font-semibold tracking-tight">
                      {value.title}
                    </h3>
                    <p
                      className="mt-4 text-sm leading-relaxed"
                      style={{ color: "rgba(11,58,102,0.66)" }}
                    >
                      {value.description}
                    </p>
                  </motion.article>
                );
              })}
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
              LET&apos;S WORK TOGETHER
            </p>
            <h2
              className="font-display text-[clamp(2.25rem,5vw,3.75rem)] font-semibold leading-[1.08] tracking-tight"
              style={{ color: colors.white }}
            >
              Ready to power your next project?
            </h2>
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
