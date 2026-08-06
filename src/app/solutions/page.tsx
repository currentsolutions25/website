"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ScaleButton from "@/components/ScaleButton";
import SiteShell from "@/components/SiteShell";
import WaveDivider from "@/components/WaveDivider";
import {
  colors,
  fadeUp,
  PHONE_DISPLAY,
  PHONE_HREF,
  PHONES,
  solutions,
  stagger,
  whyChooseSolutions,
} from "@/lib/design";

const featuredImageAlts: Record<string, [string, string, string]> = {
  residential: [
    "Electrician installing pendant lighting in a bright Florida home",
    "Recessed lighting installation in a modern living room",
    "Premium coastal open-concept home with cove and pendant lighting",
  ],
  commercial: [
    "Electrician working on commercial office wiring near glass partitions",
    "Pendant lighting installation in a contemporary restaurant",
    "Premium retail space lighting and electrical build-out",
  ],
  lighting: [
    "Coastal home pathway and landscape lighting at sunset",
    "Modern home exterior architectural and landscape lighting at dusk",
    "Layered living room lighting with cove, chandelier, and shelf accents",
  ],
  "electrical-repair": [
    "Electrician diagnosing a breaker panel with a digital multimeter",
    "Technician testing a wall-mounted electrical component during a repair",
    "Electrician repairing a low wall electrical unit with tools nearby",
  ],
  "panel-upgrades": [
    "Electrician upgrading a modern electrical panel with tools nearby",
    "Electrician inspecting a breaker panel with a digital tablet",
    "Clean, professionally wired modern electrical breaker panel",
  ],
  "ev-charging": [
    "Wall-mounted home EV charger beside an open garage with an electric vehicle",
    "Electrician installing a residential EV charging station while a car charges",
    "Technician mounting an EV charger on a brick home exterior",
  ],
  "backup-power": [
    "Standby backup generator installed beside a modern luxury home at sunset",
    "Residential backup power setup with generators and transfer equipment",
    "Whole-home standby generator on a concrete pad with clean conduit work",
  ],
};

export default function SolutionsPage() {
  const featuredSolutions = solutions.filter(
    (s) => s.images && s.images.length >= 3,
  );
  const otherSolutions = solutions.filter(
    (s) => !s.images || s.images.length < 3,
  );

  return (
    <SiteShell>
      <main>
        <PageHero
          eyebrow="Our Solutions"
          title="Electrical Solutions You Can Count On"
          description="From everyday repairs to whole-home upgrades, Current Solutions delivers careful, code-conscious electrical work with the same calm, premium care we bring to every project along Florida’s Nature Coast."
          actions={
            <ScaleButton href="/contact" variant="gold">
              Request a Quote
              <ArrowRight size={20} strokeWidth={2.25} />
            </ScaleButton>
          }
        />

        <WaveDivider topColor={colors.seaGlass} bottomColor={colors.warmSand} />

        {/* Solution cards */}
        <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32 lg:px-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            variants={fadeUp}
            className="mx-auto mb-16 max-w-2xl text-center sm:mb-20"
          >
            <p className="section-label mb-5">What We Offer</p>
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.75rem]">
              Thoughtful solutions for every project
            </h2>
            <p
              className="mt-6 text-base leading-relaxed sm:text-lg"
              style={{ color: "rgba(11,58,102,0.68)" }}
            >
              Elegant, dependable electrical work — presented clearly, delivered
              with care.
            </p>
          </motion.div>

          {/* Featured photo solutions */}
          <div className="mb-8 space-y-8 sm:mb-10 sm:space-y-10">
            {featuredSolutions.map((solution, index) => {
              const Icon = solution.icon;
              const alts = featuredImageAlts[solution.slug] ?? [
                solution.title,
                solution.title,
                solution.title,
              ];
              const reverse = index % 2 === 1;

              return (
                <motion.article
                  key={solution.slug}
                  id={solution.slug}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  variants={fadeUp}
                  className="premium-card group scroll-mt-32 overflow-hidden"
                >
                  <div
                    className={`grid gap-0 lg:grid-cols-[1.15fr_0.85fr] ${
                      reverse ? "lg:[&>*:first-child]:order-2" : ""
                    }`}
                  >
                    <div className="grid grid-cols-2 gap-2 p-3 sm:gap-3 sm:p-4 lg:p-5">
                      <div className="relative col-span-2 aspect-[16/10] overflow-hidden rounded-2xl sm:aspect-[16/9]">
                        <Image
                          src={solution.images![0]}
                          alt={alts[0]}
                          fill
                          sizes="(max-width: 1024px) 100vw, 55vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                          priority={index === 0}
                        />
                      </div>
                      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                        <Image
                          src={solution.images![1]}
                          alt={alts[1]}
                          fill
                          sizes="(max-width: 1024px) 50vw, 28vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        />
                      </div>
                      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                        <Image
                          src={solution.images![2]}
                          alt={alts[2]}
                          fill
                          sizes="(max-width: 1024px) 50vw, 28vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        />
                      </div>
                    </div>

                    <div
                      className={`flex flex-col justify-center px-8 py-10 sm:px-10 sm:py-12 ${
                        reverse ? "lg:pl-12 lg:pr-10" : "lg:pr-12"
                      }`}
                    >
                      <div
                        className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl"
                        style={{
                          background: `linear-gradient(145deg, ${colors.seaGlass}, rgba(220,239,247,0.35))`,
                          color: colors.navy,
                          boxShadow: "inset 0 0 0 1px rgba(11,58,102,0.05)",
                        }}
                      >
                        <Icon size={24} strokeWidth={1.5} />
                      </div>
                      <h3 className="font-display text-[1.85rem] font-semibold tracking-tight sm:text-[2.15rem]">
                        {solution.title}
                      </h3>
                      <p
                        className="mt-5 text-base leading-relaxed sm:text-lg"
                        style={{ color: "rgba(11,58,102,0.72)" }}
                      >
                        {solution.description}
                      </p>
                      <Link
                        href="/contact"
                        className="mt-8 inline-flex items-center gap-2 text-sm font-semibold tracking-wide transition-opacity duration-300 hover:opacity-70"
                        style={{ color: colors.navy }}
                      >
                        Request a quote
                        <ArrowRight
                          size={16}
                          strokeWidth={2.25}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </Link>
                      <div
                        className="mt-6 h-[2px] w-12"
                        style={{ background: colors.gold }}
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.08 }}
            variants={stagger}
            className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-8"
          >
            {otherSolutions.map((solution) => {
              const Icon = solution.icon;
              return (
                <motion.article
                  key={solution.slug}
                  id={solution.slug}
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
                  <h3 className="font-display text-[1.45rem] font-semibold tracking-tight sm:text-[1.55rem]">
                    {solution.title}
                  </h3>
                  <p
                    className="mt-4 flex-1 text-sm leading-relaxed sm:text-[0.95rem]"
                    style={{ color: "rgba(11,58,102,0.7)" }}
                  >
                    {solution.description}
                  </p>
                  <Link
                    href="/contact"
                    className="mt-8 inline-flex items-center gap-2 text-sm font-semibold tracking-wide transition-opacity duration-300 hover:opacity-70"
                    style={{ color: colors.navy }}
                  >
                    Request a quote
                    <ArrowRight
                      size={16}
                      strokeWidth={2.25}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>
                  <div
                    className="mt-6 h-[2px] w-10 transition-all duration-400 group-hover:w-16"
                    style={{ background: colors.gold }}
                    aria-hidden="true"
                  />
                </motion.article>
              );
            })}
          </motion.div>
        </section>

        <WaveDivider topColor={colors.warmSand} bottomColor={colors.white} />

        {/* Why Choose */}
        <section
          className="px-5 py-24 sm:px-8 sm:py-32 lg:px-10"
          style={{ background: colors.white }}
        >
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              variants={fadeUp}
              className="mx-auto mb-16 max-w-2xl text-center sm:mb-20"
            >
              <p className="section-label mb-5">Our Promise</p>
              <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.75rem]">
                Why Choose Current Solutions
              </h2>
              <p
                className="mt-6 text-base leading-relaxed sm:text-lg"
                style={{ color: "rgba(11,58,102,0.68)" }}
              >
                The quiet confidence of family-owned craftsmanship — honest,
                careful, and built to last.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={stagger}
              className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-6"
            >
              {whyChooseSolutions.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.article
                    key={item.title}
                    variants={fadeUp}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ y: -4 }}
                    className="trust-card flex items-start gap-4 px-6 py-6 sm:px-7 sm:py-7"
                  >
                    <div
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                      style={{
                        background: `linear-gradient(145deg, ${colors.seaGlass}, rgba(220,239,247,0.35))`,
                        color: colors.navy,
                      }}
                      aria-hidden="true"
                    >
                      <Icon size={20} strokeWidth={1.6} />
                    </div>
                    <div className="min-w-0 pt-1">
                      <h3
                        className="text-[0.98rem] font-bold tracking-tight"
                        style={{ color: colors.navy }}
                      >
                        {item.title}
                      </h3>
                      <div
                        className="mt-3 h-[2px] w-8"
                        style={{ background: colors.gold }}
                        aria-hidden="true"
                      />
                    </div>
                  </motion.article>
                );
              })}
            </motion.div>
          </div>
        </section>

        <WaveDivider topColor={colors.white} bottomColor={colors.navy} />

        {/* Closing CTA */}
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
              LET&apos;S BEGIN
            </p>
            <h2
              className="font-display text-[clamp(2.25rem,5vw,3.75rem)] font-semibold leading-[1.08] tracking-tight"
              style={{ color: colors.white }}
            >
              Ready for electrical solutions you can trust?
            </h2>
            <p
              className="mx-auto mt-8 max-w-xl text-base leading-relaxed sm:text-lg"
              style={{ color: "rgba(246,241,231,0.78)" }}
            >
              Request a free quote or call us today — we&apos;ll respond with
              clear guidance and the careful attention your home or business
              deserves.
            </p>
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
              <ScaleButton href="/contact" variant="gold" className="px-12 py-5">
                Request a Quote
                <ArrowRight size={20} strokeWidth={2.25} />
              </ScaleButton>
              <ScaleButton
                href={PHONE_HREF}
                variant="secondary"
                className="px-10 py-5"
              >
                <Phone size={18} strokeWidth={2.25} />
                Call {PHONE_DISPLAY}
              </ScaleButton>
            </div>
            <div className="mt-8 flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-6">
              {PHONES.map((phone) => (
                <a
                  key={phone.display}
                  href={phone.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide transition-opacity hover:opacity-80"
                  style={{ color: "rgba(246,241,231,0.85)" }}
                >
                  <Phone size={14} strokeWidth={2.2} />
                  {phone.display}
                </a>
              ))}
            </div>
          </motion.div>
        </section>
      </main>
    </SiteShell>
  );
}
