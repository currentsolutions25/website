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
  Wrench,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import LighthouseMark from "@/components/LighthouseMark";
import MediaPlaceholder from "@/components/MediaPlaceholder";
import SiteShell from "@/components/SiteShell";
import WaveDivider from "@/components/WaveDivider";
import {
  colors,
  fadeUp,
  PHONE_DISPLAY,
  PHONE_HREF,
  services,
  stagger,
} from "@/lib/design";

const trustCards = [
  {
    title: "Licensed & Insured",
    description: "Fully credentialed electrical work for your peace of mind.",
    icon: ShieldCheck,
  },
  {
    title: "Family Owned & Operated",
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
  {
    title: "24/7 Emergency Service",
    description: "Prompt help when power issues cannot wait.",
    icon: Wrench,
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
  "project-1",
  "project-2",
  "project-3",
  "project-4",
  "project-5",
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
        {/* Hero */}
        <section
          id="home"
          className="hero-premium relative -mt-[5.75rem] min-h-screen overflow-hidden pt-[5.75rem] sm:-mt-[6.25rem] sm:pt-[6.25rem]"
        >
          <div className="hero-atmosphere" aria-hidden="true" />

          {/* Right — full-height lighthouse identity */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
            className="hero-image-panel pointer-events-none absolute inset-x-0 top-[5.75rem] bottom-0 z-[1] sm:top-[6.25rem] lg:inset-y-0 lg:left-auto lg:right-0 lg:w-[52%]"
          >
            <div className="hero-image-frame relative h-full min-h-[48vh] w-full overflow-hidden lg:min-h-screen">
              <Image
                src="/images/florida-lighthouse-sunrise.png"
                alt="Florida Nature Coast lighthouse at sunrise over calm Gulf water"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 52vw"
                className="hero-lighthouse-photo object-cover object-[58%_42%]"
              />
              <div className="hero-image-glow" aria-hidden="true" />
              <div className="hero-image-mist" aria-hidden="true" />
            </div>
          </motion.div>

          <div className="relative z-10 mx-auto flex min-h-[calc(100vh-5.75rem)] max-w-7xl items-center px-5 pb-28 pt-8 sm:min-h-[calc(100vh-6.25rem)] sm:px-8 sm:pb-32 sm:pt-10 lg:px-10 lg:pb-36">
            {/* Left — brand story & CTAs */}
            <div className="relative w-full max-w-xl lg:max-w-[34rem]">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center gap-3.5"
              >
                <LighthouseMark size={58} className="hero-logo-mark" />
                <div className="leading-tight">
                  <p
                    className="font-display text-[1.45rem] font-bold tracking-[0.04em] sm:text-[1.7rem]"
                    style={{ color: colors.navy }}
                  >
                    CURRENT SOLUTIONS
                  </p>
                  <p
                    className="mt-0.5 text-[0.68rem] font-semibold tracking-[0.2em] uppercase"
                    style={{ color: colors.gold }}
                  >
                    Electrical Services
                  </p>
                </div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.65,
                  delay: 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-8 text-[0.78rem] font-bold tracking-[0.28em] uppercase sm:text-[0.82rem]"
                style={{ color: colors.gold }}
              >
                Nature Coast Electrical
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.14,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="font-display mt-4 text-[clamp(2.85rem,6.4vw,4.85rem)] font-bold leading-[0.98] tracking-[-0.02em]"
                style={{ color: colors.navy }}
              >
                Powering Florida&apos;s Nature Coast
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, scaleX: 0.55 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.55, delay: 0.22 }}
                className="mt-6 h-px w-24 origin-left"
                style={{
                  background: `linear-gradient(90deg, ${colors.gold}, rgba(212,175,55,0.15))`,
                }}
              />

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.28,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-6 max-w-md text-base leading-[1.8] sm:text-lg"
                style={{ color: "rgba(11,58,102,0.74)" }}
              >
                Dependable electrical solutions for homes and businesses across
                Florida&apos;s Nature Coast — delivered with integrity, care, and
                craftsmanship you can trust.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.36,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-10 flex flex-col gap-3.5 sm:flex-row sm:items-center"
              >
                <Link
                  href="/contact"
                  className="cta-gold hero-cta-primary inline-flex items-center justify-center gap-2.5 rounded-md px-8 py-4 text-[0.82rem] font-bold tracking-[0.12em] uppercase"
                  style={{ color: colors.navy }}
                >
                  <Zap size={16} strokeWidth={2.4} fill="currentColor" />
                  Request a Quote
                </Link>
                <a
                  href={PHONE_HREF}
                  className="hero-cta-secondary inline-flex items-center justify-center gap-2.5 rounded-md border-2 bg-white/90 px-8 py-4 text-[0.82rem] font-bold tracking-[0.12em] uppercase backdrop-blur-sm"
                  style={{
                    color: colors.navy,
                    borderColor: "rgba(11,58,102,0.88)",
                  }}
                >
                  <Phone size={16} strokeWidth={2.4} />
                  Call Today
                </a>
              </motion.div>
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-0 z-20">
            <WaveDivider
              topColor="transparent"
              bottomColor={colors.softGrey}
              variant="hero"
            />
          </div>
        </section>

        {/* Trust cards */}
        <section
          aria-label="Why trust Current Solutions"
          className="relative z-10 px-5 py-14 sm:px-8 sm:py-16 lg:px-10"
          style={{ background: colors.softGrey }}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={stagger}
            className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5"
          >
            {trustCards.map((card) => {
              const Icon = card.icon;
              return (
                <motion.article
                  key={card.title}
                  variants={fadeUp}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -4 }}
                  className="trust-card px-5 py-8 text-center"
                >
                  <div
                    className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full"
                    style={{
                      background: "rgba(11,58,102,0.07)",
                      color: colors.navy,
                    }}
                  >
                    <Icon size={22} strokeWidth={1.7} />
                  </div>
                  <h3
                    className="text-[0.78rem] font-bold tracking-[0.08em] uppercase"
                    style={{ color: colors.navy }}
                  >
                    {card.title}
                  </h3>
                  <p
                    className="mt-2.5 text-sm leading-relaxed"
                    style={{ color: "rgba(11,58,102,0.62)" }}
                  >
                    {card.description}
                  </p>
                </motion.article>
              );
            })}
          </motion.div>
        </section>

        <WaveDivider topColor={colors.softGrey} bottomColor={colors.white} />

        {/* Services */}
        <section
          id="services"
          className="px-5 py-20 sm:px-8 sm:py-28 lg:px-10"
          style={{ background: colors.white }}
        >
          <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              variants={fadeUp}
              className="lg:pt-4"
            >
              <p className="section-label mb-4">Our Services</p>
              <h2
                className="font-display text-[clamp(2.2rem,4vw,3.35rem)] font-bold leading-[1.08] tracking-tight"
                style={{ color: colors.navy }}
              >
                Complete Electrical Solutions
              </h2>
              <p
                className="mt-6 max-w-md text-base leading-relaxed sm:text-lg"
                style={{ color: "rgba(11,58,102,0.68)" }}
              >
                From residential repairs to commercial upgrades and storm-ready
                generator connections, we deliver careful electrical work across
                the Nature Coast.
              </p>
              <Link
                href="/#services"
                className="mt-8 inline-flex items-center gap-2.5 rounded-md px-6 py-3.5 text-[0.78rem] font-bold tracking-[0.12em] uppercase text-white transition-transform duration-200 hover:-translate-y-0.5"
                style={{ background: colors.navy }}
              >
                View All Services
                <ArrowRight size={16} strokeWidth={2.4} />
              </Link>
              <ul className="mt-8 space-y-2.5">
                {services.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-70"
                      style={{ color: "rgba(11,58,102,0.72)" }}
                    >
                      <span
                        className="h-1 w-1 rounded-full"
                        style={{ background: colors.gold }}
                      />
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={stagger}
              className="grid gap-5 sm:grid-cols-2"
            >
              {featuredServices.map((service) => {
                const Icon = service.icon;
                return (
                  <motion.article
                    key={service.slug}
                    variants={fadeUp}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ y: -6 }}
                    className="service-media-card group overflow-hidden bg-white"
                  >
                    <Link href={`/services/${service.slug}`} className="block">
                      <div className="relative">
                        <MediaPlaceholder
                          variant={service.variant}
                          className="aspect-[16/11] w-full"
                          label={`${service.title} photography placeholder`}
                        />
                        <span
                          className="absolute -bottom-5 left-5 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-md"
                          style={{ color: colors.navy }}
                        >
                          <Icon size={20} strokeWidth={1.7} />
                        </span>
                      </div>
                      <div className="px-5 pb-6 pt-9">
                        <h3
                          className="font-display text-[1.35rem] font-bold tracking-tight"
                          style={{ color: colors.navy }}
                        >
                          {service.title}
                        </h3>
                        <p
                          className="mt-2.5 text-sm leading-relaxed"
                          style={{ color: "rgba(11,58,102,0.64)" }}
                        >
                          {service.description}
                        </p>
                      </div>
                    </Link>
                  </motion.article>
                );
              })}
            </motion.div>
          </div>
        </section>

        <WaveDivider topColor={colors.white} bottomColor={colors.white} />

        {/* About */}
        <section
          id="about"
          className="relative overflow-hidden px-5 py-20 sm:px-8 sm:py-28 lg:px-10"
          style={{ background: colors.white }}
        >
          <div
            className="pointer-events-none absolute -right-16 top-10 hidden opacity-[0.06] lg:block"
            aria-hidden="true"
          >
            <svg width="340" height="420" viewBox="0 0 200 260" fill="none">
              <path d="M100 20L130 50H70L100 20Z" fill={colors.navy} />
              <path d="M78 55H122L135 220H65L78 55Z" fill={colors.navy} />
              <rect x="92" y="220" width="16" height="28" fill={colors.navy} />
            </svg>
          </div>

          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              variants={fadeUp}
              className="relative mx-auto w-full max-w-md lg:max-w-none"
            >
              <div
                className="about-photo-frame mx-auto aspect-[4/5] w-full max-w-[420px] overflow-hidden"
              >
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
              <p className="section-label mb-4">About Us</p>
              <h2
                className="font-display text-[clamp(2.1rem,3.8vw,3.15rem)] font-bold leading-[1.1] tracking-tight"
                style={{ color: colors.navy }}
              >
                Electrical Work Done Right— With Pride in Every Detail
              </h2>
              <p
                className="mt-6 text-base leading-[1.85] sm:text-lg"
                style={{ color: "rgba(11,58,102,0.72)" }}
              >
                Current Solutions is a family-owned electrical company serving
                Florida&apos;s Nature Coast with honesty, skill, and genuine care.
                We show up on time, explain the work clearly, and treat every
                home and business with the same respect we give our own.
              </p>
              <p
                className="mt-4 text-base leading-[1.85] sm:text-lg"
                style={{ color: "rgba(11,58,102,0.72)" }}
              >
                Whether you need a simple repair, a full panel upgrade, refined
                lighting, or storm-ready generator connections — every project
                is handled with quiet professionalism and pride.
              </p>
              <p
                className="mt-6 text-base font-semibold sm:text-lg"
                style={{ color: colors.navy }}
              >
                Neighbors you can trust. Craftsmanship you can count on.
              </p>
              <Link
                href="/about"
                className="cta-gold mt-8 inline-flex items-center gap-2.5 rounded-md px-7 py-3.5 text-[0.78rem] font-bold tracking-[0.12em] uppercase transition-transform duration-200 hover:-translate-y-0.5"
                style={{ color: colors.navy }}
              >
                Learn More About Us
                <ArrowRight size={16} strokeWidth={2.4} />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Recent Projects CTA */}
        <section
          className="px-5 py-14 sm:px-8 sm:py-16 lg:px-10"
          style={{ background: colors.navyDeep }}
        >
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 lg:flex-row lg:gap-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              variants={fadeUp}
              className="shrink-0 text-center lg:max-w-[220px] lg:text-left"
            >
              <p
                className="text-[0.68rem] font-bold tracking-[0.22em] uppercase"
                style={{ color: colors.gold }}
              >
                Quality Work. Real Results.
              </p>
              <h2
                className="font-display mt-3 text-[2rem] font-bold tracking-tight text-white sm:text-[2.25rem]"
              >
                Recent Projects
              </h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
              className="grid w-full grid-cols-3 gap-3 sm:grid-cols-5 sm:gap-4"
            >
              {projectThumbs.map((thumb, index) => (
                <motion.div
                  key={thumb}
                  variants={fadeUp}
                  transition={{ duration: 0.45 }}
                  className={index > 2 ? "hidden sm:block" : undefined}
                >
                  <Link
                    href="/gallery"
                    className="block overflow-hidden rounded-md transition-transform duration-300 hover:-translate-y-1"
                  >
                    <MediaPlaceholder
                      variant={thumb}
                      className="aspect-square w-full"
                      label={`Recent project thumbnail ${index + 1}`}
                    />
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            <div className="shrink-0">
              <Link
                href="/gallery"
                className="inline-flex items-center gap-2.5 rounded-md border border-white/70 px-6 py-3.5 text-[0.78rem] font-bold tracking-[0.12em] uppercase text-white transition-all duration-200 hover:bg-white/10"
              >
                View Full Gallery
                <ArrowRight size={16} strokeWidth={2.4} />
              </Link>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section
          id="reviews"
          className="px-5 py-20 sm:px-8 sm:py-28 lg:px-10"
          style={{ background: colors.softGrey }}
        >
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.4fr_auto] lg:items-start lg:gap-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              variants={fadeUp}
            >
              <p className="section-label mb-4">What Our Clients Say</p>
              <p
                className="font-display text-[5.5rem] leading-none"
                style={{ color: colors.gold }}
                aria-hidden="true"
              >
                “
              </p>
              <h2
                className="font-display -mt-4 text-[clamp(1.9rem,3.2vw,2.65rem)] font-bold leading-[1.15] tracking-tight"
                style={{ color: colors.navy }}
              >
                Reviews from our amazing customers.
              </h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
              className="grid gap-4 sm:grid-cols-3"
            >
              {homeReviews.map((review) => (
                <motion.article
                  key={review.name}
                  variants={fadeUp}
                  transition={{ duration: 0.5 }}
                  className="review-card px-5 py-7"
                >
                  <div className="mb-4 flex gap-1" aria-label="5 star rating">
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
                    className="text-sm leading-relaxed"
                    style={{ color: "rgba(11,58,102,0.7)" }}
                  >
                    “{review.quote}”
                  </p>
                  <p
                    className="mt-5 text-sm font-semibold"
                    style={{ color: colors.gold }}
                  >
                    — {review.name}
                  </p>
                </motion.article>
              ))}
            </motion.div>

            <div className="flex items-center lg:pt-10">
              <Link
                href="/reviews"
                className="inline-flex items-center gap-2.5 rounded-md px-6 py-3.5 text-[0.78rem] font-bold tracking-[0.1em] uppercase transition-transform duration-200 hover:-translate-y-0.5"
                style={{
                  background: "#E4E8EC",
                  color: colors.navy,
                }}
              >
                View All Reviews
                <ArrowRight size={16} strokeWidth={2.4} />
              </Link>
            </div>
          </div>
        </section>

        {/* Contact CTA strip */}
        <section
          id="contact"
          className="px-5 py-16 sm:px-8 sm:py-20 lg:px-10"
          style={{ background: colors.white }}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            variants={fadeUp}
            className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 rounded-2xl px-8 py-10 sm:flex-row sm:items-center sm:px-12"
            style={{
              background: `linear-gradient(135deg, ${colors.navy} 0%, #124872 100%)`,
            }}
          >
            <div>
              <p
                className="text-[0.68rem] font-bold tracking-[0.22em] uppercase"
                style={{ color: colors.gold }}
              >
                Ready to Get Started?
              </p>
              <h2 className="font-display mt-3 text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-white">
                Request your free electrical quote today.
              </h2>
              <p
                className="mt-3 max-w-xl text-sm leading-relaxed sm:text-base"
                style={{ color: "rgba(246,241,231,0.78)" }}
              >
                Call {PHONE_DISPLAY} or send a project request — we&apos;ll
                respond with clear recommendations and honest guidance.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="cta-gold inline-flex items-center justify-center gap-2 rounded-md px-7 py-3.5 text-[0.78rem] font-bold tracking-[0.12em] uppercase text-white"
              >
                Request a Quote
              </Link>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/70 px-7 py-3.5 text-[0.78rem] font-bold tracking-[0.12em] uppercase text-white"
              >
                <Phone size={15} strokeWidth={2.4} />
                Call Now
              </a>
            </div>
          </motion.div>
        </section>
      </main>
    </SiteShell>
  );
}
