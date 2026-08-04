"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Clock,
  Home,
  Lightbulb,
  Phone,
  ShieldCheck,
  Users,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import LighthouseMark from "@/components/LighthouseMark";
import MediaPlaceholder from "@/components/MediaPlaceholder";
import ScaleButton from "@/components/ScaleButton";
import SiteShell from "@/components/SiteShell";
import WaveDivider from "@/components/WaveDivider";
import {
  colors,
  fadeUp,
  PHONE_DISPLAY,
  PHONE_HREF,
  stagger,
} from "@/lib/design";

const trustCards = [
  {
    title: "Licensed & Insured",
    description: "Fully credentialed electrical work for your peace of mind.",
    icon: ShieldCheck,
  },
  {
    title: "Family Owned",
    description: "Local neighbors who take pride in every connection.",
    icon: Users,
  },
  {
    title: "Quality Workmanship",
    description: "Clean, code-conscious craftsmanship that lasts.",
    icon: Zap,
  },
  {
    title: "On Time & Reliable",
    description: "Clear communication and dependable arrival windows.",
    icon: Clock,
  },
];

const featuredServices = [
  {
    slug: "residential" as const,
    title: "Residential Electrical",
    description:
      "Safe upgrades, troubleshooting, and finishing details for Nature Coast homes.",
    icon: Home,
    variant: "residential" as const,
  },
  {
    slug: "commercial" as const,
    title: "Commercial Electrical",
    description:
      "Reliable power and lighting solutions that keep local businesses running.",
    icon: Building2,
    variant: "commercial" as const,
  },
  {
    slug: "generator-connections" as const,
    title: "Generator Connections",
    description:
      "Transfer switch installation and storm-ready backup power support.",
    icon: Zap,
    variant: "generator" as const,
  },
  {
    slug: "lighting" as const,
    title: "Lighting Installation",
    description:
      "Interior and exterior lighting that elevates comfort and curb appeal.",
    icon: Lightbulb,
    variant: "lighting" as const,
  },
];

const projectThumbs = [
  { id: "project-1", label: "Panel upgrade", span: "lg:col-span-2 lg:row-span-2" },
  { id: "project-2", label: "Exterior lighting", span: "" },
  { id: "project-3", label: "Commercial fit-out", span: "" },
  { id: "project-4", label: "Generator connection", span: "lg:col-span-2" },
  { id: "project-5", label: "Residential refresh", span: "" },
] as const;

const homeReviews = [
  {
    name: "Sarah M.",
    quote:
      "Professional, on time, and incredibly thorough. Our panel upgrade looks clean and they explained every step clearly.",
  },
  {
    name: "James R.",
    quote:
      "Called for an evening outage and they responded quickly. Honest recommendations and quality workmanship throughout.",
  },
  {
    name: "Michelle T.",
    quote:
      "Beautiful exterior lighting install. The crew treated our home with respect and left everything spotless.",
  },
];

export default function HomePage() {
  return (
    <SiteShell>
      <main>
        {/* 1–3. Full-screen cinematic hero + floating trust bar */}
        <section
          id="home"
          className="hero-premium relative -mt-[5.5rem] flex min-h-[100svh] flex-col overflow-hidden pt-[5.5rem] sm:-mt-[6rem] sm:pt-[6rem]"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-none absolute inset-0 z-0"
            aria-hidden="true"
          >
            <Image
              src="/images/florida-nature-coast-soft-sunrise.png"
              alt=""
              fill
              priority
              sizes="100vw"
              className="hero-lighthouse-photo object-cover object-[78%_48%] sm:object-[74%_46%] lg:object-[70%_44%]"
            />
            <div className="hero-atmosphere" />
            <div className="hero-sky-wash" />
            <div className="hero-ocean-depth" />
            <div className="hero-text-veil" />
            <div className="hero-lighthouse-glow" />
          </motion.div>

          <div className="relative z-10 mx-auto grid w-full max-w-7xl flex-1 grid-cols-1 content-center items-center px-5 pb-8 pt-12 sm:px-8 sm:pb-10 sm:pt-16 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-10 lg:px-10 lg:pb-12 lg:pt-20">
            <div className="relative w-full max-w-xl lg:max-w-[38rem]">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              >
                <LighthouseMark size={64} className="hero-logo-mark sm:hidden" />
                <LighthouseMark
                  size={76}
                  className="hero-logo-mark hidden sm:block"
                />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-7 text-[0.74rem] font-semibold tracking-[0.28em] uppercase sm:mt-9"
                style={{ color: colors.gold }}
              >
                Electrical Services
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.85,
                  delay: 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="font-display mt-6 text-[clamp(3.2rem,8.2vw,6.1rem)] font-bold leading-[0.92] tracking-[-0.03em] sm:mt-8"
                style={{ color: colors.navy }}
              >
                Current
                <br />
                Solutions
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="font-display mt-7 max-w-[15ch] text-[clamp(1.65rem,4.2vw,2.7rem)] font-medium leading-[1.14] tracking-[-0.018em] sm:mt-9"
                style={{ color: colors.navy }}
              >
                Powering Florida&apos;s Nature Coast
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scaleX: 0.55 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.55, delay: 0.28 }}
                className="mt-7 h-px w-28 origin-left sm:mt-10"
                style={{
                  background: `linear-gradient(90deg, ${colors.gold}, rgba(212,175,55,0.12))`,
                }}
              />

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.75,
                  delay: 0.34,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-7 max-w-md text-base leading-[1.8] sm:mt-10 sm:text-lg sm:leading-[1.9]"
                style={{ color: "rgba(11,58,102,0.86)" }}
              >
                Dependable electrical solutions for homes and businesses across
                Florida&apos;s Nature Coast — delivered with integrity, care, and
                craftsmanship you can trust.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.75,
                  delay: 0.42,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-10 flex flex-col gap-3.5 sm:mt-16 sm:flex-row sm:items-center sm:gap-5"
              >
                <Link
                  href="/contact"
                  className="cta-gold hero-cta-primary inline-flex items-center justify-center gap-2.5 rounded-full px-9 py-4.5 text-[0.84rem] font-bold tracking-[0.12em] uppercase sm:px-10 sm:py-5"
                  style={{ color: colors.navy }}
                >
                  <Zap size={16} strokeWidth={2.4} fill="currentColor" />
                  Request a Quote
                </Link>
                <a
                  href={PHONE_HREF}
                  className="hero-cta-secondary inline-flex items-center justify-center gap-2.5 rounded-full px-9 py-4.5 text-[0.84rem] font-bold tracking-[0.12em] uppercase sm:px-10 sm:py-5"
                  style={{ color: colors.navy }}
                >
                  <Phone size={16} strokeWidth={2.4} />
                  Call Today
                </a>
              </motion.div>
            </div>

            {/* Right visual column — lighthouse signature scene shows through */}
            <div
              className="relative hidden min-h-[28rem] lg:block"
              aria-hidden="true"
            >
              <div className="hero-right-focus absolute inset-0" />
            </div>
          </div>

          {/* Floating trust bar — four premium cards over the bottom of the hero */}
          <div className="relative z-20 mt-auto px-5 pb-6 pt-4 sm:px-8 sm:pb-8 lg:px-10 lg:pb-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={stagger}
              aria-label="Why trust Current Solutions"
              className="mx-auto grid max-w-7xl grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-5"
            >
              {trustCards.map((card) => {
                const Icon = card.icon;
                return (
                  <motion.article
                    key={card.title}
                    variants={fadeUp}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ y: -5 }}
                    className="trust-card flex flex-col items-center px-3.5 py-5 text-center sm:px-5 sm:py-7 lg:px-6 lg:py-8"
                  >
                    <div
                      className="trust-card-icon mx-auto flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-2xl sm:h-12 sm:w-12"
                      style={{
                        background: `linear-gradient(145deg, ${colors.seaGlass}, rgba(220,239,247,0.35))`,
                        color: colors.navy,
                        boxShadow: "inset 0 0 0 1px rgba(11,58,102,0.05)",
                      }}
                      aria-hidden="true"
                    >
                      <Icon size={20} strokeWidth={1.6} className="block" />
                    </div>
                    <h3
                      className="mt-4 text-[0.65rem] font-semibold tracking-[0.08em] uppercase sm:mt-5 sm:text-[0.76rem] sm:tracking-[0.1em]"
                      style={{ color: colors.navy }}
                    >
                      {card.title}
                    </h3>
                    <p
                      className="mt-2 text-[0.78rem] leading-relaxed sm:mt-2.5 sm:text-sm"
                      style={{ color: "rgba(11,58,102,0.62)" }}
                    >
                      {card.description}
                    </p>
                  </motion.article>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* 4. Services preview */}
        <section
          id="services"
          className="px-5 py-28 sm:px-8 sm:py-36 lg:px-10"
          style={{ background: colors.white }}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            variants={fadeUp}
            className="mx-auto max-w-2xl text-center"
          >
            <p className="section-label mb-5">Our Services</p>
            <h2
              className="font-display text-[clamp(2.4rem,4.2vw,3.5rem)] font-semibold leading-[1.08] tracking-tight"
              style={{ color: colors.navy }}
            >
              Complete Electrical Solutions
            </h2>
            <p
              className="mt-7 text-base leading-relaxed sm:text-lg"
              style={{ color: "rgba(11,58,102,0.68)" }}
            >
              From residential repairs to commercial upgrades and storm-ready
              generator connections — careful electrical work across the Nature
              Coast.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            variants={stagger}
            className="mx-auto mt-20 grid max-w-7xl gap-8 sm:grid-cols-2 lg:gap-10"
          >
            {featuredServices.map((service) => {
              const Icon = service.icon;
              return (
                <motion.article
                  key={service.slug}
                  variants={fadeUp}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -8 }}
                  className="service-media-card group overflow-hidden"
                >
                  <Link href={`/services/${service.slug}`} className="block">
                    <div className="relative overflow-hidden">
                      <div className="media-zoom">
                        <MediaPlaceholder
                          variant={service.variant}
                          className="aspect-[16/10] w-full"
                          label={`${service.title} photography placeholder`}
                        />
                      </div>
                      <span
                        className="absolute bottom-5 left-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/95 shadow-md backdrop-blur-sm"
                        style={{ color: colors.navy }}
                      >
                        <Icon size={22} strokeWidth={1.5} />
                      </span>
                    </div>
                    <div className="px-7 pb-8 pt-7 sm:px-8 sm:pb-9">
                      <h3
                        className="font-display text-[1.55rem] font-semibold tracking-tight sm:text-[1.7rem]"
                        style={{ color: colors.navy }}
                      >
                        {service.title}
                      </h3>
                      <p
                        className="mt-3 max-w-md text-sm leading-relaxed sm:text-base"
                        style={{ color: "rgba(11,58,102,0.64)" }}
                      >
                        {service.description}
                      </p>
                      <p
                        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold tracking-wide"
                        style={{ color: colors.navy }}
                      >
                        Learn more
                        <ArrowRight
                          size={16}
                          strokeWidth={2.25}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </p>
                    </div>
                  </Link>
                </motion.article>
              );
            })}
          </motion.div>

          <div className="mt-16 text-center">
            <ScaleButton
              href="/#services"
              variant="secondary"
              className="px-8 py-4 text-base"
            >
              View All Services
              <ArrowRight size={18} strokeWidth={2.25} />
            </ScaleButton>
          </div>
        </section>

        <WaveDivider topColor={colors.white} bottomColor={colors.warmSand} />

        {/* 5. About preview */}
        <section
          id="about"
          className="relative overflow-hidden px-5 py-28 sm:px-8 sm:py-36 lg:px-10"
          style={{ background: colors.warmSand }}
        >
          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              variants={fadeUp}
              className="relative mx-auto w-full max-w-md lg:max-w-none"
            >
              <div className="about-photo-frame mx-auto aspect-[4/5] w-full max-w-[440px] overflow-hidden">
                <MediaPlaceholder
                  variant="about"
                  className="h-full w-full"
                  label="Electrician at electrical panel photography placeholder"
                />
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              variants={fadeUp}
            >
              <p className="section-label mb-5">About Us</p>
              <h2
                className="font-display text-[clamp(2.2rem,3.8vw,3.25rem)] font-semibold leading-[1.1] tracking-tight"
                style={{ color: colors.navy }}
              >
                Neighbors You Can Trust
              </h2>
              <p
                className="mt-8 text-base leading-[1.9] sm:text-lg"
                style={{ color: "rgba(11,58,102,0.74)" }}
              >
                Current Solutions is a family-owned electrical company serving
                Florida&apos;s Nature Coast with honesty, skill, and genuine care.
                We show up on time, explain the work clearly, and treat every
                home and business with the same respect we give our own.
              </p>
              <p
                className="mt-5 text-base leading-[1.9] sm:text-lg"
                style={{ color: "rgba(11,58,102,0.74)" }}
              >
                Whether you need a simple repair, a full panel upgrade, refined
                lighting, or storm-ready generator connections — every project
                is handled with quiet professionalism and pride.
              </p>
              <p
                className="mt-8 text-base font-semibold sm:text-lg"
                style={{ color: colors.navy }}
              >
                Neighbors you can trust. Craftsmanship you can count on.
              </p>
              <div className="mt-10">
                <ScaleButton
                  href="/about"
                  variant="gold"
                  className="px-8 py-4 text-base"
                >
                  Learn More About Us
                  <ArrowRight size={18} strokeWidth={2.25} />
                </ScaleButton>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 6. Featured projects preview */}
        <section
          className="px-5 py-28 sm:px-8 sm:py-36 lg:px-10"
          style={{ background: colors.white }}
        >
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              variants={fadeUp}
              className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end"
            >
              <div className="max-w-xl">
                <p className="section-label mb-5">Our Work</p>
                <h2
                  className="font-display text-[clamp(2.2rem,3.8vw,3.25rem)] font-semibold leading-[1.1] tracking-tight"
                  style={{ color: colors.navy }}
                >
                  Recent Projects
                </h2>
                <p
                  className="mt-6 text-base leading-relaxed sm:text-lg"
                  style={{ color: "rgba(11,58,102,0.68)" }}
                >
                  Clean installations and thoughtful finishing across Nature
                  Coast homes and businesses.
                </p>
              </div>
              <ScaleButton
                href="/gallery"
                variant="secondary"
                className="px-8 py-4 text-base"
              >
                View Full Gallery
                <ArrowRight size={18} strokeWidth={2.25} />
              </ScaleButton>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={stagger}
              className="mt-16 grid auto-rows-[180px] gap-5 sm:auto-rows-[220px] sm:grid-cols-2 lg:auto-rows-[240px] lg:grid-cols-4 lg:gap-6"
            >
              {projectThumbs.map((thumb, index) => (
                <motion.div
                  key={thumb.id}
                  variants={fadeUp}
                  transition={{ duration: 0.5 }}
                  className={thumb.span}
                >
                  <Link
                    href="/gallery"
                    className="project-gallery-card group relative block h-full w-full"
                  >
                    <MediaPlaceholder
                      variant={thumb.id}
                      className="h-full w-full"
                      label={`Recent project: ${thumb.label}`}
                    />
                    <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[rgba(7,31,58,0.6)] via-[rgba(7,31,58,0.2)] to-transparent px-5 pb-4 pt-14 text-sm font-medium tracking-wide text-white opacity-80 transition-opacity duration-300 group-hover:opacity-100">
                      {thumb.label}
                    </span>
                    <span className="sr-only">Project {index + 1}</span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <WaveDivider topColor={colors.white} bottomColor={colors.warmSand} />

        {/* 7. Customer reviews preview */}
        <section
          id="reviews"
          className="px-5 py-28 sm:px-8 sm:py-36 lg:px-10"
          style={{ background: colors.warmSand }}
        >
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              variants={fadeUp}
              className="mx-auto max-w-2xl text-center"
            >
              <p className="section-label mb-5">What Our Clients Say</p>
              <p
                className="font-display text-[5.5rem] leading-none"
                style={{ color: colors.gold }}
                aria-hidden="true"
              >
                “
              </p>
              <h2
                className="font-display -mt-6 text-[clamp(2rem,3.4vw,2.85rem)] font-semibold leading-[1.15] tracking-tight"
                style={{ color: colors.navy }}
              >
                Reviews from homeowners who trust our work.
              </h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
              className="mt-20 grid gap-8 md:grid-cols-3 md:gap-10"
            >
              {homeReviews.map((review) => (
                <motion.article
                  key={review.name}
                  variants={fadeUp}
                  transition={{ duration: 0.55 }}
                  className="review-card px-8 py-10 sm:px-9 sm:py-12"
                >
                  <div className="mb-6 flex gap-1" aria-label="5 star rating">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={i}
                        className="text-sm"
                        style={{ color: colors.gold }}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <p
                    className="font-display text-xl leading-relaxed sm:text-[1.35rem]"
                    style={{ color: "rgba(11,58,102,0.82)" }}
                  >
                    “{review.quote}”
                  </p>
                  <p
                    className="mt-8 text-sm font-semibold tracking-wide"
                    style={{ color: colors.gold }}
                  >
                    — {review.name}
                  </p>
                </motion.article>
              ))}
            </motion.div>

            <div className="mt-16 text-center">
              <ScaleButton
                href="/reviews"
                variant="secondary"
                className="px-8 py-4 text-base"
              >
                View All Reviews
                <ArrowRight size={18} strokeWidth={2.25} />
              </ScaleButton>
            </div>
          </div>
        </section>

        {/* 8. Strong call-to-action */}
        <section
          id="contact"
          className="cta-surface relative overflow-hidden px-5 py-28 sm:px-8 sm:py-36 lg:px-10"
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            variants={fadeUp}
            className="relative mx-auto max-w-3xl text-center"
          >
            <p
              className="mb-6 text-[0.68rem] font-semibold tracking-[0.28em]"
              style={{ color: "rgba(212,175,55,0.9)" }}
            >
              READY TO GET STARTED?
            </p>
            <h2 className="font-display text-[clamp(2.3rem,5vw,3.75rem)] font-semibold leading-[1.08] tracking-tight text-white">
              Request your free electrical quote today.
            </h2>
            <p
              className="mx-auto mt-8 max-w-xl text-base leading-relaxed sm:text-lg"
              style={{ color: "rgba(246,241,231,0.78)" }}
            >
              Call {PHONE_DISPLAY} or send a project request — we&apos;ll respond
              with clear recommendations and honest guidance.
            </p>
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <ScaleButton
                href="/contact"
                variant="gold"
                className="px-10 py-5 text-base"
              >
                Request a Quote
              </ScaleButton>
              <ScaleButton
                href={PHONE_HREF}
                variant="secondary"
                className="px-10 py-5 text-base"
              >
                <Phone size={16} strokeWidth={2.4} />
                Call Now
              </ScaleButton>
            </div>
          </motion.div>
        </section>
      </main>
    </SiteShell>
  );
}
