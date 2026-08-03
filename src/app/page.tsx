"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Users,
  ShieldCheck,
  Clock,
  BadgeCheck,
  ArrowRight,
  HeartHandshake,
  MapPin,
} from "lucide-react";
import Link from "next/link";
import CoastalIllustration from "@/components/CoastalIllustration";
import ScaleButton from "@/components/ScaleButton";
import ServiceAreasSection from "@/components/ServiceAreasSection";
import SiteShell from "@/components/SiteShell";
import WaveDivider from "@/components/WaveDivider";
import {
  colors,
  fadeUp,
  PHONE_HREF,
  services,
  SITE_SHORT_NAME,
  stagger,
} from "@/lib/design";

const trustBar = [
  {
    title: "Family Owned & Operated",
    icon: HeartHandshake,
  },
  {
    title: "Licensed & Insured",
    icon: ShieldCheck,
  },
  {
    title: "Residential & Commercial",
    icon: Building2,
  },
  {
    title: "Proudly Serving Florida's Nature Coast",
    icon: MapPin,
  },
];

const features = [
  {
    title: "Family Owned",
    description:
      "A local family business that treats every project with personal care and pride.",
    icon: Users,
  },
  {
    title: "Licensed & Insured",
    description:
      "Fully licensed and insured for your peace of mind on every job.",
    icon: ShieldCheck,
  },
  {
    title: "Reliable Service",
    description:
      "Clear communication, on-time arrival, and work done right the first time.",
    icon: Clock,
  },
  {
    title: "Quality Workmanship",
    description:
      "Honest craftsmanship and meticulous attention to detail in every connection.",
    icon: BadgeCheck,
  },
];

export default function HomePage() {
  return (
    <SiteShell>
      <main>
        {/* Hero — cinematic full-bleed coastal scene; left copy, artwork right */}
        <section
          id="home"
          className="relative min-h-[100vh] overflow-hidden pt-28"
        >
          <CoastalIllustration />
          <div className="hero-readability-veil" aria-hidden="true" />

          <div className="relative z-10 mx-auto flex min-h-[100vh] max-w-6xl items-center px-5 py-32 sm:px-8 sm:py-40 lg:py-44">
            <div className="max-w-xl lg:max-w-2xl">
              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-[clamp(2.85rem,6.8vw,5.25rem)] font-semibold leading-[0.95] tracking-[-0.02em]"
                style={{ color: colors.navy }}
              >
                {SITE_SHORT_NAME}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.85,
                  delay: 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="font-display mt-6 text-[clamp(1.75rem,3.8vw,2.65rem)] font-medium leading-[1.15] tracking-[-0.015em]"
                style={{ color: colors.navy }}
              >
                Powering Florida&apos;s Nature Coast
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.18,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-8 max-w-md text-base leading-[1.75] sm:text-lg"
                style={{ color: "rgba(11,58,102,0.72)" }}
              >
                Family-owned electrical professionals delivering honest
                workmanship and calm, dependable service.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.75,
                  delay: 0.28,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center"
              >
                <ScaleButton href="/contact" variant="gold">
                  Request a Free Quote
                  <ArrowRight size={20} strokeWidth={2.25} />
                </ScaleButton>
                <ScaleButton href={PHONE_HREF} variant="secondary">
                  Call Now
                </ScaleButton>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Trust Bar */}
        <section
          aria-label="Trust and credentials"
          className="relative z-10 -mt-8 px-5 sm:-mt-12 sm:px-8"
          style={{ background: colors.warmSand }}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
            className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6"
          >
            {trustBar.map((item) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.title}
                  variants={fadeUp}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -5 }}
                  className="trust-card flex items-center gap-4 px-5 py-7 sm:px-6 sm:py-8"
                >
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                    style={{
                      background: `linear-gradient(145deg, ${colors.seaGlass}, rgba(220,239,247,0.35))`,
                      color: colors.navy,
                      boxShadow: "inset 0 0 0 1px rgba(11,58,102,0.05)",
                    }}
                  >
                    <Icon size={22} strokeWidth={1.5} />
                  </div>
                  <p className="font-display text-lg font-semibold leading-snug tracking-tight sm:text-[1.2rem]">
                    {item.title}
                  </p>
                </motion.article>
              );
            })}
          </motion.div>
        </section>

        <WaveDivider topColor={colors.warmSand} bottomColor={colors.warmSand} />

        {/* Services */}
        <section
          id="services"
          className="mx-auto max-w-6xl px-5 py-32 sm:px-8 sm:py-40"
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            variants={fadeUp}
            className="mx-auto max-w-2xl text-center"
          >
            <p className="section-label mb-5">What We Do</p>
            <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl lg:text-[3.5rem]">
              Our Services
            </h2>
            <p
              className="mt-7 text-base leading-relaxed sm:text-lg"
              style={{ color: "rgba(11,58,102,0.68)" }}
            >
              Comprehensive electrical solutions tailored for homes and
              businesses across Florida&apos;s Nature Coast.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            variants={stagger}
            className="mt-24 grid gap-9 sm:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <motion.article
                  key={service.slug}
                  variants={fadeUp}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -8 }}
                  className="premium-card group"
                >
                  <Link
                    href={`/services/${service.slug}`}
                    className="block p-9 sm:p-11"
                  >
                    <div
                      className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl transition-transform duration-500 group-hover:scale-105"
                      style={{
                        background: `linear-gradient(145deg, ${colors.seaGlass}, rgba(220,239,247,0.35))`,
                        color: colors.navy,
                        boxShadow: "inset 0 0 0 1px rgba(11,58,102,0.05)",
                      }}
                    >
                      <Icon size={28} strokeWidth={1.45} />
                    </div>
                    <h3 className="font-display text-[1.65rem] font-semibold tracking-tight sm:text-[1.75rem]">
                      {service.title}
                    </h3>
                    <p
                      className="mt-5 text-base leading-relaxed"
                      style={{ color: "rgba(11,58,102,0.66)" }}
                    >
                      {service.description}
                    </p>
                    <p
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold tracking-wide"
                      style={{ color: colors.navy }}
                    >
                      Learn more
                      <ArrowRight
                        size={16}
                        strokeWidth={2.25}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </p>
                  </Link>
                </motion.article>
              );
            })}
          </motion.div>
        </section>

        <WaveDivider
          topColor={colors.warmSand}
          bottomColor="rgba(220,239,247,0.5)"
        />

        {/* Why Choose Us */}
        <section
          className="py-32 sm:py-40"
          style={{
            background: `linear-gradient(180deg, rgba(220,239,247,0.5) 0%, ${colors.warmSand} 100%)`,
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
              <p className="section-label mb-5">Our Promise</p>
              <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl lg:text-[3.5rem]">
                Why Homeowners Choose Current Solutions
              </h2>
              <p
                className="mt-7 text-base leading-relaxed sm:text-lg"
                style={{ color: "rgba(11,58,102,0.68)" }}
              >
                Trusted local professionals who show up with integrity,
                skill, and respect for your home.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.12 }}
              variants={stagger}
              className="mt-24 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7"
            >
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <motion.article
                    key={feature.title}
                    variants={fadeUp}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ y: -8 }}
                    className="premium-card px-7 py-10 text-center sm:px-8 sm:py-11"
                  >
                    <div
                      className="mx-auto mb-7 flex h-14 w-14 items-center justify-center rounded-2xl"
                      style={{
                        background: colors.navy,
                        color: colors.champagne,
                        boxShadow: "0 12px 28px -14px rgba(11,58,102,0.5)",
                      }}
                    >
                      <Icon size={24} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-display text-[1.35rem] font-semibold tracking-tight sm:text-[1.45rem]">
                      {feature.title}
                    </h3>
                    <p
                      className="mt-4 text-[0.9375rem] leading-relaxed"
                      style={{ color: "rgba(11,58,102,0.66)" }}
                    >
                      {feature.description}
                    </p>
                  </motion.article>
                );
              })}
            </motion.div>
          </div>
        </section>

        <WaveDivider topColor={colors.warmSand} bottomColor="#FFFFFF" />

        {/* About — emotional connection */}
        <section
          id="about"
          className="px-5 py-32 sm:px-8 sm:py-40"
          style={{ background: colors.white }}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            variants={fadeUp}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="section-label mb-5">About Us</p>
            <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl lg:text-[3.5rem]">
              Neighbors You Can Trust
            </h2>
            <p
              className="mt-12 text-base leading-[1.9] sm:text-lg"
              style={{ color: "rgba(11,58,102,0.74)" }}
            >
              Current Solutions is a family-owned electrical company serving
              Florida&apos;s Nature Coast with honesty and care. We are the
              electricians who show up on time, explain the work clearly, and
              treat your home with the same respect we give our own. Whether
              it&apos;s a simple repair, a full panel upgrade, or keeping your
              business running smoothly — every project is handled with quiet
              professionalism and pride.
            </p>
            <div className="mt-12">
              <ScaleButton
                href="/about"
                variant="secondary"
                className="px-8 py-4 text-base"
              >
                Read Our Story
                <ArrowRight size={18} strokeWidth={2.25} />
              </ScaleButton>
            </div>
          </motion.div>
        </section>

        <WaveDivider
          topColor={colors.white}
          bottomColor="rgba(220,239,247,0.35)"
        />

        {/* Service Areas */}
        <div
          style={{
            background: `linear-gradient(180deg, rgba(220,239,247,0.35) 0%, ${colors.warmSand} 100%)`,
          }}
        >
          <ServiceAreasSection />
        </div>

        <WaveDivider topColor={colors.warmSand} bottomColor={colors.navy} />

        {/* CTA */}
        <section
          id="contact"
          className="cta-surface relative overflow-hidden px-5 py-36 sm:px-8 sm:py-44"
        >
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-px opacity-40"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(212,175,55,0.7), transparent)",
            }}
          />

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
              LET&apos;S GET STARTED
            </p>
            <h2
              className="font-display text-[clamp(2.5rem,6vw,4.25rem)] font-semibold leading-[1.05] tracking-tight"
              style={{ color: colors.white }}
            >
              Ready for Your Next Electrical Project?
            </h2>
            <p
              className="mx-auto mt-9 max-w-xl text-base leading-relaxed sm:text-lg"
              style={{ color: "rgba(246,241,231,0.78)" }}
            >
              Tell us about your project and we&apos;ll provide a free,
              no-obligation quote with clear recommendations.
            </p>
            <div className="mt-16">
              <ScaleButton
                href="/contact"
                variant="gold"
                className="px-14 py-6 text-lg sm:text-xl"
              >
                Request Your Free Quote
                <ArrowRight size={22} strokeWidth={2.25} />
              </ScaleButton>
            </div>
          </motion.div>
        </section>
      </main>
    </SiteShell>
  );
}
