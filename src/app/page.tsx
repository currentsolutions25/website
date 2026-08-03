"use client";

import { motion } from "framer-motion";
import {
  Home,
  Building2,
  PanelTop,
  Lightbulb,
  Zap,
  Siren,
  Users,
  ShieldCheck,
  Clock,
  BadgeCheck,
  Phone,
  Mail,
  Menu,
  X,
} from "lucide-react";
import { useState, type ReactNode } from "react";

const colors = {
  navy: "#0B3558",
  warmWhite: "#FAF8F5",
  seaGlass: "#C8E6E8",
  gold: "#D4AF37",
};

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    title: "Residential Electrical",
    description:
      "Safe, code-compliant wiring and upgrades for Florida homes along the Nature Coast.",
    icon: Home,
  },
  {
    title: "Commercial Electrical",
    description:
      "Reliable electrical systems that keep your business powered and productive.",
    icon: Building2,
  },
  {
    title: "Panel Upgrades",
    description:
      "Modern service panels built for today’s demand and tomorrow’s growth.",
    icon: PanelTop,
  },
  {
    title: "Lighting Installation",
    description:
      "Interior and exterior lighting that elevates comfort, safety, and curb appeal.",
    icon: Lightbulb,
  },
  {
    title: "Generator Connections",
    description:
      "Professional generator transfer switch installation for storm-ready backup power.",
    icon: Zap,
  },
  {
    title: "Emergency Service",
    description:
      "Prompt response when you need electrical help most—day or night.",
    icon: Siren,
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

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function LighthouseIllustration() {
  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-3xl shadow-[0_24px_60px_-20px_rgba(11,53,88,0.35)]"
      aria-hidden="true"
    >
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(165deg, ${colors.navy} 0%, #134a73 42%, ${colors.seaGlass} 72%, ${colors.warmWhite} 100%)`,
        }}
      />
      <div
        className="absolute -right-10 top-8 h-40 w-40 rounded-full opacity-40 blur-2xl"
        style={{ background: colors.gold }}
      />
      <div
        className="absolute -left-8 bottom-16 h-36 w-36 rounded-full opacity-50 blur-2xl"
        style={{ background: colors.seaGlass }}
      />
      <div
        className="absolute left-1/2 top-[18%] h-3 w-28 -translate-x-1/2 rounded-full opacity-70"
        style={{ background: colors.gold }}
      />
      <div
        className="absolute left-1/2 top-[22%] h-44 w-16 -translate-x-1/2 rounded-t-md"
        style={{
          background: `linear-gradient(180deg, ${colors.warmWhite} 0%, #e8e4de 100%)`,
          boxShadow: "inset 0 0 0 1px rgba(11,53,88,0.08)",
        }}
      >
        <div
          className="absolute inset-x-2 top-6 h-8 rounded-sm"
          style={{ background: colors.navy, opacity: 0.85 }}
        />
        <div
          className="absolute inset-x-3 top-16 h-5 rounded-sm"
          style={{ background: colors.seaGlass }}
        />
        <div
          className="absolute inset-x-0 top-1/2 h-px"
          style={{ background: "rgba(11,53,88,0.15)" }}
        />
        <div
          className="absolute inset-x-0 top-[70%] h-px"
          style={{ background: "rgba(11,53,88,0.15)" }}
        />
      </div>
      <div
        className="absolute left-1/2 top-[14%] h-8 w-20 -translate-x-1/2 rounded-t-lg"
        style={{ background: colors.navy }}
      />
      <div
        className="absolute left-1/2 top-[12%] h-3 w-24 -translate-x-1/2 rounded-full"
        style={{ background: colors.gold }}
      />
      <div
        className="absolute left-[58%] top-[16%] h-1 w-24 origin-left rotate-12 rounded-full opacity-80"
        style={{
          background: `linear-gradient(90deg, ${colors.gold}, transparent)`,
        }}
      />
      <div
        className="absolute left-[58%] top-[18%] h-1 w-20 origin-left rotate-[-8deg] rounded-full opacity-50"
        style={{
          background: `linear-gradient(90deg, ${colors.gold}, transparent)`,
        }}
      />
      <div
        className="absolute bottom-[18%] left-1/2 h-16 w-36 -translate-x-1/2 rounded-t-[40%]"
        style={{
          background: `linear-gradient(180deg, #1a4f78 0%, ${colors.navy} 100%)`,
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-[22%]"
        style={{
          background: `linear-gradient(180deg, transparent 0%, rgba(200,230,232,0.55) 35%, ${colors.seaGlass} 100%)`,
        }}
      />
      <div
        className="absolute bottom-[12%] -left-4 h-20 w-[55%] rounded-[100%] opacity-60"
        style={{ background: "rgba(250,248,245,0.35)" }}
      />
      <div
        className="absolute bottom-[8%] right-[-6%] h-24 w-[50%] rounded-[100%] opacity-50"
        style={{ background: "rgba(250,248,245,0.28)" }}
      />
      <div
        className="absolute bottom-6 left-[18%] h-2 w-16 rounded-full opacity-40"
        style={{ background: colors.navy }}
      />
      <div
        className="absolute bottom-10 right-[22%] h-2 w-12 rounded-full opacity-30"
        style={{ background: colors.navy }}
      />
    </div>
  );
}

function ScaleButton({
  children,
  href,
  variant = "primary",
  className = "",
}: {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "gold";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-7 py-3.5 text-sm font-semibold tracking-wide transition-shadow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

  const variants = {
    primary: {
      background: colors.navy,
      color: colors.warmWhite,
      boxShadow: "0 10px 28px -12px rgba(11,53,88,0.55)",
    },
    secondary: {
      background: "transparent",
      color: colors.navy,
      boxShadow: "inset 0 0 0 1.5px rgba(11,53,88,0.28)",
    },
    gold: {
      background: colors.gold,
      color: colors.navy,
      boxShadow: "0 14px 36px -14px rgba(212,175,55,0.65)",
    },
  } as const;

  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.98 }}
      className={`${base} ${className}`}
      style={variants[variant]}
    >
      {children}
    </motion.a>
  );
}

export default function HomePage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div
      className="min-h-screen overflow-x-hidden antialiased"
      style={{ background: colors.warmWhite, color: colors.navy }}
    >
      {/* SECTION 1 — Sticky Navigation */}
      <header
        className="sticky top-0 z-50 border-b backdrop-blur-md"
        style={{
          background: "rgba(250,248,245,0.9)",
          borderColor: "rgba(11,53,88,0.08)",
        }}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <a href="#home" className="shrink-0">
            <span
              className="text-xl font-semibold tracking-tight sm:text-2xl"
              style={{ color: colors.navy }}
            >
              Current Solutions
            </span>
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium tracking-wide transition-opacity hover:opacity-70"
                  style={{ color: colors.navy }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <ScaleButton href="#contact" variant="primary">
              Request a Quote
            </ScaleButton>
          </div>

          <button
            type="button"
            className="rounded-xl p-2 md:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((v) => !v)}
            style={{ color: colors.navy }}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {mobileOpen && (
          <div
            className="border-t px-5 py-4 md:hidden"
            style={{ borderColor: "rgba(11,53,88,0.08)" }}
          >
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block py-2 text-sm font-medium"
                    style={{ color: colors.navy }}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <ScaleButton
                  href="#contact"
                  variant="primary"
                  className="w-full"
                >
                  Request a Quote
                </ScaleButton>
              </li>
            </ul>
          </div>
        )}
      </header>

      <main>
        {/* SECTION 2 — Hero */}
        <section
          id="home"
          className="relative overflow-hidden"
          style={{
            background: `linear-gradient(160deg, ${colors.warmWhite} 0%, rgba(200,230,232,0.45) 48%, ${colors.warmWhite} 100%)`,
          }}
        >
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-28">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              variants={fadeUp}
            >
              <p
                className="mb-4 text-sm font-semibold uppercase tracking-[0.22em]"
                style={{ color: colors.gold }}
              >
                Current Solutions
              </p>
              <h1
                className="text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl lg:text-[3.35rem]"
                style={{ color: colors.navy }}
              >
                Reliable Electrical Solutions
                <br />
                for Florida Homes &amp; Businesses
              </h1>
              <p
                className="mt-6 max-w-xl text-base leading-relaxed sm:text-lg"
                style={{ color: "rgba(11,53,88,0.78)" }}
              >
                Family-owned and operated, Current Solutions provides dependable
                residential and commercial electrical services with honest
                workmanship, quality craftsmanship, and exceptional customer
                care.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <ScaleButton href="#contact" variant="gold">
                  Request a Free Quote
                </ScaleButton>
                <ScaleButton href="tel:+10000000000" variant="secondary">
                  Call Now
                </ScaleButton>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            >
              <LighthouseIllustration />
            </motion.div>
          </div>
        </section>

        {/* SECTION 3 — Services */}
        <section id="services" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            variants={fadeUp}
            className="mx-auto max-w-2xl text-center"
          >
            <h2
              className="text-3xl font-semibold tracking-tight sm:text-4xl"
              style={{ color: colors.navy }}
            >
              Our Services
            </h2>
            <p
              className="mt-4 text-base leading-relaxed"
              style={{ color: "rgba(11,53,88,0.72)" }}
            >
              Comprehensive electrical solutions tailored for homes and
              businesses across Florida&apos;s Nature Coast.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.article
                  key={service.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  variants={fadeUp}
                  whileHover={{ y: -8 }}
                  className="rounded-3xl p-7 shadow-[0_12px_40px_-18px_rgba(11,53,88,0.22)]"
                  style={{
                    background: `linear-gradient(165deg, #ffffff 0%, ${colors.warmWhite} 100%)`,
                    border: "1px solid rgba(11,53,88,0.06)",
                  }}
                >
                  <div
                    className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl"
                    style={{
                      background: `linear-gradient(145deg, ${colors.seaGlass}, rgba(200,230,232,0.35))`,
                      color: colors.navy,
                    }}
                  >
                    <Icon size={22} strokeWidth={1.75} />
                  </div>
                  <h3
                    className="text-lg font-semibold tracking-tight"
                    style={{ color: colors.navy }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="mt-2 text-sm leading-relaxed"
                    style={{ color: "rgba(11,53,88,0.7)" }}
                  >
                    {service.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </section>

        {/* SECTION 4 — Why Choose Us */}
        <section
          className="py-20 sm:py-24"
          style={{
            background: `linear-gradient(180deg, rgba(200,230,232,0.35) 0%, ${colors.warmWhite} 100%)`,
          }}
        >
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
              variants={fadeUp}
              className="mx-auto max-w-2xl text-center"
            >
              <h2
                className="text-3xl font-semibold tracking-tight sm:text-4xl"
                style={{ color: colors.navy }}
              >
                Why Homeowners Choose Current Solutions
              </h2>
            </motion.div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.article
                    key={feature.title}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: index * 0.07 }}
                    variants={fadeUp}
                    whileHover={{ y: -8 }}
                    className="rounded-3xl p-6 text-center shadow-[0_12px_36px_-18px_rgba(11,53,88,0.2)]"
                    style={{
                      background: "#ffffff",
                      border: "1px solid rgba(11,53,88,0.06)",
                    }}
                  >
                    <div
                      className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl"
                      style={{
                        background: colors.navy,
                        color: colors.gold,
                      }}
                    >
                      <Icon size={22} strokeWidth={1.75} />
                    </div>
                    <h3
                      className="text-base font-semibold"
                      style={{ color: colors.navy }}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className="mt-2 text-sm leading-relaxed"
                      style={{ color: "rgba(11,53,88,0.7)" }}
                    >
                      {feature.description}
                    </p>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 5 — About */}
        <section id="about" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7 }}
            variants={fadeUp}
            className="mx-auto max-w-3xl text-center"
          >
            <h2
              className="text-3xl font-semibold tracking-tight sm:text-4xl"
              style={{ color: colors.navy }}
            >
              Powering Florida Homes with Pride
            </h2>
            <p
              className="mt-6 text-base leading-relaxed sm:text-lg"
              style={{ color: "rgba(11,53,88,0.78)" }}
            >
              Current Solutions is a trusted family-owned electrical company
              serving Florida&apos;s Nature Coast. We believe great electrical
              work starts with honesty, careful craftsmanship, and dependable
              service you can count on—whether it&apos;s a simple repair, a
              full panel upgrade, or keeping your business running smoothly.
              Every project is handled with the same care we&apos;d give our
              own home.
            </p>
          </motion.div>
        </section>

        {/* SECTION 6 — CTA */}
        <section
          id="contact"
          className="px-5 py-20 sm:px-8 sm:py-24"
          style={{
            background: `linear-gradient(145deg, ${colors.navy} 0%, #0e4570 55%, #145a82 100%)`,
          }}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.65 }}
            variants={fadeUp}
            className="mx-auto max-w-3xl text-center"
          >
            <h2
              className="text-3xl font-semibold tracking-tight sm:text-4xl"
              style={{ color: colors.warmWhite }}
            >
              Ready for Your Next Electrical Project?
            </h2>
            <p
              className="mx-auto mt-4 max-w-xl text-base leading-relaxed"
              style={{ color: "rgba(250,248,245,0.78)" }}
            >
              Tell us about your project and we&apos;ll provide a free,
              no-obligation quote with clear recommendations.
            </p>
            <div className="mt-10">
              <ScaleButton
                href="mailto:info@currentsolutions.example"
                variant="gold"
                className="px-10 py-4 text-base"
              >
                Request Your Free Quote
              </ScaleButton>
            </div>
          </motion.div>
        </section>
      </main>

      {/* SECTION 7 — Footer */}
      <footer
        className="border-t"
        style={{
          background: colors.warmWhite,
          borderColor: "rgba(11,53,88,0.08)",
        }}
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p
              className="text-lg font-semibold tracking-tight"
              style={{ color: colors.navy }}
            >
              Current Solutions Electrical Services
            </p>
            <p
              className="mt-2 text-sm"
              style={{ color: "rgba(11,53,88,0.7)" }}
            >
              Family Owned &amp; Operated
            </p>
            <p
              className="mt-1 text-sm"
              style={{ color: "rgba(11,53,88,0.7)" }}
            >
              Serving Florida&apos;s Nature Coast
            </p>
          </div>

          <div className="flex flex-col gap-3 text-sm">
            <a
              href="tel:+10000000000"
              className="inline-flex items-center gap-2 transition-opacity hover:opacity-70"
              style={{ color: colors.navy }}
            >
              <Phone size={16} />
              (000) 000-0000
            </a>
            <a
              href="mailto:info@currentsolutions.example"
              className="inline-flex items-center gap-2 transition-opacity hover:opacity-70"
              style={{ color: colors.navy }}
            >
              <Mail size={16} />
              info@currentsolutions.example
            </a>
          </div>
        </div>
        <div
          className="border-t py-5 text-center text-xs"
          style={{
            borderColor: "rgba(11,53,88,0.08)",
            color: "rgba(11,53,88,0.5)",
          }}
        >
          © {new Date().getFullYear()} Current Solutions Electrical Services.
          All rights reserved.
        </div>
      </footer>
    </div>
  );
}
