"use client";

import { useState } from "react";
import { Syne, Source_Sans_3 } from "next/font/google";
import { motion, useReducedMotion } from "framer-motion";
import {
  Home,
  Building2,
  Zap,
  PanelTop,
  Lightbulb,
  Siren,
  Phone,
  Mail,
  Menu,
  X,
  ArrowRight,
  CheckCircle2,
  MapPin,
} from "lucide-react";

const display = Syne({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

const body = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

const PHONE_DISPLAY = "(352) 555-0148";
const PHONE_HREF = "tel:+13525550148";
const EMAIL = "info@currentsolutionsfl.com";

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
      "Safe, code-compliant wiring, outlets, and upgrades for Florida homes.",
    icon: Home,
  },
  {
    title: "Commercial Electrical",
    description:
      "Reliable electrical systems that keep your business powered and productive.",
    icon: Building2,
  },
  {
    title: "Generator Hookups",
    description:
      "Professional generator installation and transfer switch connections.",
    icon: Zap,
  },
  {
    title: "Panel Upgrades",
    description:
      "Modern panel replacements built for today’s electrical demands.",
    icon: PanelTop,
  },
  {
    title: "Lighting",
    description:
      "Interior, exterior, and specialty lighting designed for comfort and security.",
    icon: Lightbulb,
  },
  {
    title: "Emergency Service",
    description:
      "Prompt response when power problems can’t wait until tomorrow.",
    icon: Siren,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      className={`${display.variable} ${body.variable} min-h-screen bg-[#EAF4F2] text-[#12343F] antialiased`}
      style={{ fontFamily: "var(--font-body), ui-sans-serif, sans-serif" }}
    >
      {/* Sticky Navigation */}
      <header className="sticky top-0 z-50 border-b border-[#1B5F6B]/12 bg-[#EAF4F2]/92 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <a
            href="#home"
            className="text-lg font-semibold tracking-tight text-[#1B5F6B] sm:text-xl"
            style={{ fontFamily: "var(--font-display), ui-sans-serif, sans-serif" }}
          >
            Current Solutions
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-[#234E58]/80 transition-colors hover:text-[#1B5F6B]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-[#1B5F6B] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#154C56]"
            >
              Request a Quote
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="rounded-lg p-2 text-[#1B5F6B] md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {menuOpen && (
          <div className="border-t border-[#1B5F6B]/12 bg-[#EAF4F2] px-5 py-4 md:hidden">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block py-2.5 text-base font-medium text-[#234E58]"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#1B5F6B] px-5 py-3 text-sm font-semibold text-white"
                >
                  Request a Quote
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>

      <main>
        {/* Hero — full-bleed Nature Coast visual */}
        <section
          id="home"
          className="relative min-h-[calc(100vh-4.5rem)] overflow-hidden"
        >
          <div
            aria-hidden
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "linear-gradient(118deg, rgba(10,45,52,0.88) 0%, rgba(27,95,107,0.68) 45%, rgba(74,140,130,0.45) 100%), url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=80')",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#EAF4F2] to-transparent"
          />

          <div className="relative mx-auto flex min-h-[calc(100vh-4.5rem)] max-w-6xl flex-col justify-center px-5 py-20 sm:px-8">
            <motion.div
              initial={prefersReducedMotion ? false : "hidden"}
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: prefersReducedMotion ? 0 : 0.12,
                  },
                },
              }}
              className="max-w-3xl"
            >
              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.55, ease: "easeOut" }}
                className="mb-5 text-3xl font-semibold tracking-tight text-[#9FD4C4] sm:text-4xl md:text-5xl"
                style={{
                  fontFamily: "var(--font-display), ui-sans-serif, sans-serif",
                }}
              >
                Current Solutions
              </motion.p>
              <motion.h1
                variants={fadeUp}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-3xl font-semibold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-[3.35rem]"
                style={{
                  fontFamily: "var(--font-display), ui-sans-serif, sans-serif",
                }}
              >
                Reliable Electrical Solutions for Florida Homes &amp; Businesses
              </motion.h1>
              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="mt-6 max-w-xl text-base leading-relaxed text-[#E4F2EE] sm:text-lg"
              >
                Licensed, dependable electrical service for the Nature Coast —
                honest workmanship, clear communication, and power you can trust.
              </motion.p>
              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
              >
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#9FD4C4] px-6 py-3.5 text-sm font-semibold text-[#0F2F35] transition hover:bg-[#B0DEC9]"
                >
                  Request a Quote
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/35 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
                >
                  <Phone className="h-4 w-4" />
                  Call Now
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="relative px-5 py-24 sm:px-8">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial={prefersReducedMotion ? false : "hidden"}
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="mx-auto max-w-2xl text-center"
            >
              <h2
                className="text-3xl font-semibold tracking-tight text-[#1B5F6B] sm:text-4xl"
                style={{
                  fontFamily: "var(--font-display), ui-sans-serif, sans-serif",
                }}
              >
                Electrical services built for Florida living
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#234E58]/75 sm:text-lg">
                From everyday repairs to full system upgrades, we keep homes and
                businesses running safely along the Nature Coast.
              </p>
            </motion.div>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.article
                    key={service.title}
                    initial={prefersReducedMotion ? false : "hidden"}
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeUp}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                      delay: prefersReducedMotion ? 0 : index * 0.05,
                    }}
                    className="rounded-2xl border border-[#1B5F6B]/10 bg-white p-7 transition hover:border-[#1B5F6B]/25 hover:bg-[#F7FBFA]"
                  >
                    <div className="mb-5 inline-flex rounded-xl bg-[#D8EFE8] p-3 text-[#1B5F6B]">
                      <Icon className="h-6 w-6" strokeWidth={1.75} />
                    </div>
                    <h3
                      className="text-xl font-semibold tracking-tight text-[#12343F]"
                      style={{
                        fontFamily:
                          "var(--font-display), ui-sans-serif, sans-serif",
                      }}
                    >
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#234E58]/75 sm:text-base">
                      {service.description}
                    </p>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          className="relative overflow-hidden px-5 py-24 sm:px-8"
        >
          <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(160deg,#D5EBE4_0%,#EAF4F2_48%,#DCEEF3_100%)]"
          />
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={prefersReducedMotion ? false : "hidden"}
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ duration: 0.55, ease: "easeOut" }}
            >
              <h2
                className="text-3xl font-semibold tracking-tight text-[#1B5F6B] sm:text-4xl"
                style={{
                  fontFamily: "var(--font-display), ui-sans-serif, sans-serif",
                }}
              >
                Family-owned. Florida-focused.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#234E58]/80 sm:text-lg">
                Current Solutions Electrical Services is a family-owned
                electrical company serving Florida with honest workmanship and
                dependable service. We treat every home and business like our
                own — carefully, clearly, and with pride in a job done right.
              </p>
              <ul className="mt-8 space-y-3">
                {[
                  "Licensed & insured electrical professionals",
                  "Transparent estimates and respectful service",
                  "Proudly serving the Nature Coast community",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-[#12343F] sm:text-base"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#3F8F7A]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={
                prefersReducedMotion ? false : { opacity: 0, y: 20 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative min-h-[300px] overflow-hidden rounded-2xl bg-gradient-to-br from-[#1B5F6B] via-[#2A7A7A] to-[#7FB8A8] p-8 sm:min-h-[360px] sm:p-10"
            >
              <div className="relative flex h-full min-h-[240px] flex-col justify-end sm:min-h-[300px]">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D7F0E8]">
                  Our Promise
                </p>
                <p
                  className="mt-4 max-w-md text-2xl font-semibold leading-snug text-white sm:text-3xl"
                  style={{
                    fontFamily:
                      "var(--font-display), ui-sans-serif, sans-serif",
                  }}
                >
                  Dependable power, honest craftsmanship, and neighbors you can
                  count on.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Call to action */}
        <section id="contact" className="px-5 py-24 sm:px-8">
          <motion.div
            initial={prefersReducedMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            variants={fadeUp}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="mx-auto max-w-6xl overflow-hidden rounded-2xl bg-[#1B5F6B] px-8 py-14 text-center sm:px-14"
          >
            <h2
              className="text-3xl font-semibold tracking-tight text-white sm:text-4xl"
              style={{
                fontFamily: "var(--font-display), ui-sans-serif, sans-serif",
              }}
            >
              Ready for reliable electrical service?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#D7EAF1] sm:text-lg">
              Tell us about your project or call today. We’ll help you get the
              safe, lasting electrical solution your home or business needs.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#9FD4C4] px-6 py-3.5 text-sm font-semibold text-[#0F2F35] transition hover:bg-[#B0DEC9]"
              >
                Request a Quote
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                <Phone className="h-4 w-4" />
                {PHONE_DISPLAY}
              </a>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#1B5F6B]/12 bg-white px-5 py-12 sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <p
              className="text-lg font-semibold tracking-tight text-[#1B5F6B]"
              style={{
                fontFamily: "var(--font-display), ui-sans-serif, sans-serif",
              }}
            >
              Current Solutions Electrical Services
            </p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-[#234E58]/70">
              Family-owned electrical service for Florida homes and businesses
              along the Nature Coast.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#1B5F6B]">
              Explore
            </p>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[#234E58]/80 transition hover:text-[#1B5F6B]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3 text-sm text-[#234E58]/85">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#1B5F6B]">
              Contact
            </p>
            <a
              href={PHONE_HREF}
              className="flex items-center gap-2 transition hover:text-[#1B5F6B]"
            >
              <Phone className="h-4 w-4 text-[#3F8F7A]" />
              {PHONE_DISPLAY}
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-2 transition hover:text-[#1B5F6B]"
            >
              <Mail className="h-4 w-4 text-[#3F8F7A]" />
              {EMAIL}
            </a>
            <p className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#3F8F7A]" />
              <span>Serving Florida’s Nature Coast</span>
            </p>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-6xl border-t border-[#1B5F6B]/10 pt-6">
          <p className="text-sm text-[#234E58]/55">
            © {new Date().getFullYear()} Current Solutions Electrical Services.
            All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
