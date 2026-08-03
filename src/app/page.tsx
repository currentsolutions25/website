"use client";

import { useState } from "react";
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
} from "lucide-react";

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
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="min-h-screen bg-[#F3F8FA] text-[#0A2E3D] antialiased">
      {/* Sticky Navigation */}
      <header className="sticky top-0 z-50 border-b border-[#0B4F6C]/10 bg-[#F3F8FA]/90 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <a
            href="#home"
            className="text-lg font-semibold tracking-tight text-[#0B4F6C] sm:text-xl"
          >
            Current Solutions
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-[#1F4A5A]/80 transition-colors hover:text-[#0B4F6C]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-2xl bg-[#0B4F6C] px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-[#0B4F6C]/25 transition hover:bg-[#093F56]"
            >
              Request a Quote
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="rounded-xl p-2 text-[#0B4F6C] md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {menuOpen && (
          <div className="border-t border-[#0B4F6C]/10 bg-[#F3F8FA] px-5 py-4 md:hidden">
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block py-2 text-base font-medium text-[#1F4A5A]"
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
                  className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#0B4F6C] px-5 py-3 text-sm font-semibold text-white"
                >
                  Request a Quote
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>

      <main>
        {/* Hero */}
        <section
          id="home"
          className="relative min-h-[calc(100vh-4.5rem)] overflow-hidden"
        >
          <div
            aria-hidden
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "linear-gradient(115deg, rgba(8,40,54,0.82) 0%, rgba(11,79,108,0.62) 48%, rgba(127,184,168,0.42) 100%), url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=80')",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#F3F8FA] to-transparent"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 top-24 h-72 w-72 rounded-full bg-[#A8D5C5]/25 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -left-16 bottom-28 h-64 w-64 rounded-full bg-[#5BA4C4]/20 blur-3xl"
          />

          <div className="relative mx-auto flex min-h-[calc(100vh-4.5rem)] max-w-6xl flex-col justify-center px-5 py-20 sm:px-8">
            <motion.div
              initial={prefersReducedMotion ? false : "hidden"}
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: prefersReducedMotion ? 0 : 0.12 },
                },
              }}
              className="max-w-3xl"
            >
              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.55, ease: "easeOut" }}
                className="mb-5 text-3xl font-semibold tracking-tight text-[#A8D5C5] sm:text-4xl"
              >
                Current Solutions
              </motion.p>
              <motion.h1
                variants={fadeUp}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-4xl font-semibold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl"
              >
                Reliable Electrical Solutions for Florida Homes &amp; Businesses
              </motion.h1>
              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="mt-6 max-w-xl text-base leading-relaxed text-[#E7F4F1] sm:text-lg"
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
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#A8D5C5] px-6 py-3.5 text-sm font-semibold text-[#0A2E3D] shadow-lg shadow-[#0A2E3D]/20 transition hover:bg-[#B9E0D2]"
                >
                  Request a Quote
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/40 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
                >
                  <Phone className="h-4 w-4" />
                  Call Now
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Feature Cards / Services */}
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
              <h2 className="text-3xl font-semibold tracking-tight text-[#0B4F6C] sm:text-4xl">
                Electrical services built for Florida living
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#1F4A5A]/75 sm:text-lg">
                From everyday repairs to full system upgrades, we keep homes and
                businesses running safely along the Nature Coast.
              </p>
            </motion.div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                      delay: prefersReducedMotion ? 0 : index * 0.06,
                    }}
                    className="rounded-3xl border border-[#0B4F6C]/8 bg-white p-7 shadow-[0_12px_40px_rgba(11,79,108,0.08)] transition hover:-translate-y-1 hover:shadow-[0_18px_48px_rgba(11,79,108,0.12)]"
                  >
                    <div className="mb-5 inline-flex rounded-2xl bg-[#E8F5F1] p-3 text-[#0B4F6C]">
                      <Icon className="h-6 w-6" strokeWidth={1.75} />
                    </div>
                    <h3 className="text-xl font-semibold tracking-tight text-[#0A2E3D]">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#1F4A5A]/75 sm:text-base">
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
            className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(168,213,197,0.35),_transparent_40%),linear-gradient(180deg,#EAF4F7_0%,#F3F8FA_100%)]"
          />
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={prefersReducedMotion ? false : "hidden"}
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ duration: 0.55, ease: "easeOut" }}
            >
              <h2 className="text-3xl font-semibold tracking-tight text-[#0B4F6C] sm:text-4xl">
                Family-owned. Florida-focused.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#1F4A5A]/80 sm:text-lg">
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
                    className="flex items-start gap-3 text-sm text-[#0A2E3D] sm:text-base"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#3F8F7A]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative min-h-[320px] overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#0B4F6C] via-[#1B7A8C] to-[#7FB8A8] p-8 shadow-[0_20px_60px_rgba(11,79,108,0.2)] sm:min-h-[380px] sm:p-10"
            >
              <div
                aria-hidden
                className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl"
              />
              <div
                aria-hidden
                className="absolute -bottom-12 left-8 h-44 w-44 rounded-full bg-[#A8D5C5]/30 blur-2xl"
              />
              <div className="relative flex h-full flex-col justify-end">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D7F0E8]">
                  Our Promise
                </p>
                <p className="mt-4 max-w-md text-2xl font-semibold leading-snug text-white sm:text-3xl">
                  Dependable power, honest craftsmanship, and neighbors you can
                  count on.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="px-5 py-24 sm:px-8">
          <motion.div
            initial={prefersReducedMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            variants={fadeUp}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-[#0B4F6C] px-8 py-14 text-center shadow-[0_24px_60px_rgba(11,79,108,0.22)] sm:px-14"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Ready for reliable electrical service?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#D7EAF1] sm:text-lg">
              Tell us about your project or call today. We’ll help you get the
              safe, lasting electrical solution your home or business needs.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#A8D5C5] px-6 py-3.5 text-sm font-semibold text-[#0A2E3D] transition hover:bg-[#B9E0D2]"
              >
                Request a Quote
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                <Phone className="h-4 w-4" />
                {PHONE_DISPLAY}
              </a>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#0B4F6C]/10 bg-white px-5 py-12 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-lg font-semibold tracking-tight text-[#0B4F6C]">
              Current Solutions Electrical Services
            </p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-[#1F4A5A]/70">
              Licensed electrical service for Florida homes and businesses.
            </p>
          </div>
          <div className="space-y-3 text-sm text-[#1F4A5A]/85">
            <a
              href={PHONE_HREF}
              className="flex items-center gap-2 transition hover:text-[#0B4F6C]"
            >
              <Phone className="h-4 w-4 text-[#3F8F7A]" />
              {PHONE_DISPLAY}
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-2 transition hover:text-[#0B4F6C]"
            >
              <Mail className="h-4 w-4 text-[#3F8F7A]" />
              {EMAIL}
            </a>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-6xl border-t border-[#0B4F6C]/8 pt-6">
          <p className="text-sm text-[#1F4A5A]/60">
            © {new Date().getFullYear()} Current Solutions Electrical Services.
            All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
