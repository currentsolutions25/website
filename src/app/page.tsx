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
  navy: "#0B3A66",
  seaGlass: "#DCEFF7",
  warmSand: "#F6F1E7",
  gold: "#D4AF37",
  white: "#FFFFFF",
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
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0 },
};

function WaveDivider({
  topColor,
  bottomColor,
  flip = false,
}: {
  topColor: string;
  bottomColor: string;
  flip?: boolean;
}) {
  return (
    <div
      className="relative -mb-px h-16 w-full overflow-hidden sm:h-20 md:h-24"
      aria-hidden="true"
      style={{ background: topColor, transform: flip ? "scaleY(-1)" : undefined }}
    >
      <svg
        className="absolute bottom-0 left-0 h-full w-full"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,64 C240,112 480,8 720,48 C960,88 1200,112 1440,40 L1440,120 L0,120 Z"
          fill={bottomColor}
          opacity="0.45"
        />
        <path
          d="M0,80 C280,20 520,110 760,70 C1000,30 1240,10 1440,72 L1440,120 L0,120 Z"
          fill={bottomColor}
        />
      </svg>
    </div>
  );
}

function CoastalLighthouseScene() {
  return (
    <div className="relative h-full w-full min-h-[420px] sm:min-h-[520px]" aria-hidden="true">
      <svg
        viewBox="0 0 560 560"
        className="h-full w-full object-cover"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
      >
        <defs>
          <linearGradient id="sky" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F8E7C8" />
            <stop offset="28%" stopColor="#F2C98A" />
            <stop offset="55%" stopColor="#9BC7E0" />
            <stop offset="78%" stopColor="#5FA3C8" />
            <stop offset="100%" stopColor="#2E6F9B" />
          </linearGradient>
          <linearGradient id="ocean" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#4A8FB5" />
            <stop offset="45%" stopColor="#2F6F96" />
            <stop offset="100%" stopColor="#0B3A66" />
          </linearGradient>
          <linearGradient id="sand" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F6F1E7" />
            <stop offset="100%" stopColor="#E8DCC4" />
          </linearGradient>
          <linearGradient id="tower" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F8F4EC" />
            <stop offset="45%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#E6DFD2" />
          </linearGradient>
          <linearGradient id="beam" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="sunGlow" cx="72%" cy="28%" r="28%">
            <stop offset="0%" stopColor="#FFE8A3" stopOpacity="0.95" />
            <stop offset="45%" stopColor="#F2C46A" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#F2C46A" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Sky */}
        <rect width="560" height="560" fill="url(#sky)" />
        <circle cx="400" cy="150" r="150" fill="url(#sunGlow)" />
        <circle cx="400" cy="155" r="34" fill="#FFF1C2" />
        <circle cx="400" cy="155" r="24" fill="#FFE08A" />

        {/* Soft clouds */}
        <ellipse cx="120" cy="120" rx="54" ry="18" fill="#FFFFFF" opacity="0.35" />
        <ellipse cx="150" cy="112" rx="34" ry="14" fill="#FFFFFF" opacity="0.28" />
        <ellipse cx="250" cy="90" rx="42" ry="14" fill="#FFFFFF" opacity="0.22" />

        {/* Distant hills / shoreline */}
        <path
          d="M0 340 C80 310 140 330 210 318 C280 306 330 280 400 295 C470 310 510 300 560 285 L560 380 L0 380 Z"
          fill="#3E7FA3"
          opacity="0.55"
        />

        {/* Ocean */}
        <rect y="360" width="560" height="200" fill="url(#ocean)" />
        <path
          d="M0 390 C70 375 140 410 210 395 C280 380 350 365 420 385 C490 405 530 390 560 380 L560 420 L0 420 Z"
          fill="#DCEFF7"
          opacity="0.22"
        />
        <path
          d="M0 420 C90 405 160 440 250 425 C340 410 410 400 480 420 C520 430 545 425 560 418 L560 450 L0 450 Z"
          fill="#FFFFFF"
          opacity="0.12"
        />

        {/* Sand spit */}
        <path
          d="M220 430 C280 410 340 415 400 435 C450 450 500 455 560 448 L560 560 L180 560 C190 500 200 455 220 430 Z"
          fill="url(#sand)"
        />
        <ellipse cx="310" cy="500" rx="70" ry="16" fill="#D4AF37" opacity="0.12" />

        {/* Rocks */}
        <ellipse cx="255" cy="470" rx="28" ry="14" fill="#0B3A66" opacity="0.35" />
        <ellipse cx="290" cy="478" rx="18" ry="10" fill="#0B3A66" opacity="0.28" />
        <ellipse cx="360" cy="465" rx="22" ry="11" fill="#0B3A66" opacity="0.3" />

        {/* Lighthouse base / island mound */}
        <ellipse cx="330" cy="445" rx="78" ry="28" fill="#0B3A66" opacity="0.25" />
        <path
          d="M265 440 C290 415 370 415 395 440 C380 455 280 455 265 440 Z"
          fill="#1A4F78"
        />

        {/* Light beams */}
        <polygon points="340,175 560,140 560,210" fill="url(#beam)" opacity="0.55" />
        <polygon points="340,180 540,175 540,230" fill="url(#beam)" opacity="0.28" />

        {/* Tower body */}
        <path
          d="M302 430 L312 210 L358 210 L368 430 Z"
          fill="url(#tower)"
        />
        {/* Red bands */}
        <path d="M308 270 L360 270 L362 295 L306 295 Z" fill="#B94A3E" />
        <path d="M305 340 L363 340 L365 365 L303 365 Z" fill="#B94A3E" />

        {/* Subtle tower edges */}
        <path
          d="M312 210 L302 430"
          stroke="#0B3A66"
          strokeOpacity="0.12"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M358 210 L368 430"
          stroke="#0B3A66"
          strokeOpacity="0.1"
          strokeWidth="2"
          fill="none"
        />

        {/* Windows */}
        <rect x="326" y="235" width="18" height="22" rx="2" fill="#0B3A66" opacity="0.85" />
        <rect x="326" y="310" width="18" height="18" rx="2" fill="#DCEFF7" opacity="0.9" />
        <rect x="326" y="380" width="18" height="18" rx="2" fill="#0B3A66" opacity="0.75" />

        {/* Gallery / lantern room */}
        <rect x="300" y="188" width="70" height="10" rx="2" fill="#0B3A66" />
        <rect x="308" y="158" width="54" height="32" rx="4" fill="#F6F1E7" />
        <rect x="316" y="164" width="14" height="20" rx="1" fill="#D4AF37" opacity="0.9" />
        <rect x="340" y="164" width="14" height="20" rx="1" fill="#D4AF37" opacity="0.75" />
        <rect x="304" y="152" width="62" height="10" rx="3" fill="#0B3A66" />

        {/* Roof / cupola */}
        <path d="M310 152 L335 118 L360 152 Z" fill="#0B3A66" />
        <rect x="331" y="104" width="8" height="16" rx="2" fill="#D4AF37" />
        <circle cx="335" cy="100" r="5" fill="#FFE08A" />

        {/* Small dock posts */}
        <rect x="210" y="448" width="4" height="28" fill="#0B3A66" opacity="0.45" />
        <rect x="230" y="452" width="4" height="24" fill="#0B3A66" opacity="0.35" />
        <path
          d="M208 448 H236"
          stroke="#0B3A66"
          strokeOpacity="0.35"
          strokeWidth="3"
        />

        {/* Gulls */}
        <path
          d="M150 180 Q160 170 170 180"
          stroke="#0B3A66"
          strokeOpacity="0.35"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M185 165 Q193 156 201 165"
          stroke="#0B3A66"
          strokeOpacity="0.28"
          strokeWidth="2"
          fill="none"
        />
      </svg>
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
    "inline-flex items-center justify-center gap-2 rounded-2xl px-9 py-4 text-base font-semibold tracking-wide transition-[box-shadow,background-color,color] duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

  const variants = {
    primary: {
      background: colors.navy,
      color: colors.white,
      boxShadow: "0 16px 36px -14px rgba(11,58,102,0.55)",
      outlineColor: colors.navy,
    },
    secondary: {
      background: "rgba(255,255,255,0.55)",
      color: colors.navy,
      boxShadow: "inset 0 0 0 1.5px rgba(11,58,102,0.22)",
      outlineColor: colors.navy,
    },
    gold: {
      background: colors.gold,
      color: colors.navy,
      boxShadow: "0 18px 40px -14px rgba(212,175,55,0.7)",
      outlineColor: colors.gold,
    },
  } as const;

  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 420, damping: 22 }}
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
      style={{ background: colors.warmSand, color: colors.navy }}
    >
      {/* SECTION 1 — Floating glass navigation */}
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 sm:pt-5">
        <nav
          className="pointer-events-auto mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-2xl border px-4 py-3 shadow-[0_18px_50px_-24px_rgba(11,58,102,0.45)] backdrop-blur-xl sm:px-6 sm:py-3.5"
          style={{
            background: "rgba(255,255,255,0.55)",
            borderColor: "rgba(220,239,247,0.75)",
            boxShadow:
              "0 18px 50px -24px rgba(11,58,102,0.4), inset 0 1px 0 rgba(255,255,255,0.65)",
          }}
        >
          <a href="#home" className="shrink-0">
            <span
              className="font-display text-xl font-semibold tracking-tight sm:text-2xl"
              style={{ color: colors.navy }}
            >
              Current Solutions
            </span>
          </a>

          <ul className="hidden items-center gap-9 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium tracking-wide transition-opacity hover:opacity-65"
                  style={{ color: colors.navy }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <ScaleButton href="#contact" variant="primary" className="px-6 py-3 text-sm">
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
            className="pointer-events-auto mx-auto mt-3 max-w-6xl rounded-2xl border px-5 py-5 shadow-lg backdrop-blur-xl md:hidden"
            style={{
              background: "rgba(255,255,255,0.72)",
              borderColor: "rgba(220,239,247,0.8)",
            }}
          >
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block rounded-xl px-2 py-2.5 text-sm font-medium"
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
        {/* SECTION 2 — Premium Nature Coast hero */}
        <section
          id="home"
          className="relative min-h-[100svh] overflow-hidden pt-28 sm:pt-32"
          style={{
            background: `linear-gradient(165deg, #FFF6E8 0%, #F7E4B8 18%, ${colors.seaGlass} 48%, #A9D4E8 72%, #6BA3C4 100%)`,
          }}
        >
          {/* Full-bleed coastal lighthouse scene */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="pointer-events-none absolute inset-0"
            aria-hidden="true"
          >
            <div className="absolute inset-y-0 right-0 w-full lg:w-[62%]">
              <CoastalLighthouseScene />
            </div>
            <div
              className="absolute inset-0 lg:hidden"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,246,232,0.72) 0%, rgba(246,241,231,0.35) 42%, rgba(107,163,196,0.15) 100%)",
              }}
            />
            <div
              className="absolute inset-y-0 left-0 hidden w-[55%] lg:block"
              style={{
                background:
                  "linear-gradient(90deg, rgba(255,246,232,0.92) 0%, rgba(247,228,184,0.55) 48%, rgba(220,239,247,0) 100%)",
              }}
            />
          </motion.div>

          <div
            className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full opacity-40 blur-3xl"
            style={{ background: "#FFE08A" }}
            aria-hidden="true"
          />

          <div className="relative mx-auto flex min-h-[calc(100svh-7rem)] max-w-6xl flex-col justify-center px-5 pb-28 pt-8 sm:px-8 sm:pb-36 sm:pt-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.75, ease: "easeOut" }}
              variants={fadeUp}
              className="max-w-xl lg:max-w-2xl"
            >
              <p
                className="font-display mb-6 text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl"
                style={{ color: colors.navy }}
              >
                Current Solutions
              </p>
              <h1
                className="font-display text-2xl font-medium leading-snug tracking-tight sm:text-3xl lg:text-[2rem]"
                style={{ color: colors.navy }}
              >
                Reliable Electrical Solutions for Florida Homes &amp; Businesses
              </h1>
              <p
                className="mt-7 max-w-lg text-base leading-relaxed sm:text-lg"
                style={{ color: "rgba(11,58,102,0.78)" }}
              >
                Family-owned electrical care for the Nature Coast—honest
                workmanship, quality craftsmanship, and service you can trust.
              </p>
              <div className="mt-11 flex flex-col gap-4 sm:flex-row sm:items-center">
                <ScaleButton href="#contact" variant="gold">
                  Request a Free Quote
                </ScaleButton>
                <ScaleButton href="tel:+10000000000" variant="secondary">
                  <Phone size={18} strokeWidth={2} />
                  Call Now
                </ScaleButton>
              </div>
            </motion.div>
          </div>

          <WaveDivider
            topColor="rgba(107,163,196,0.35)"
            bottomColor={colors.warmSand}
          />
        </section>

        {/* SECTION 3 — Services */}
        <section
          id="services"
          className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32"
          style={{ background: colors.warmSand }}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.65 }}
            variants={fadeUp}
            className="mx-auto max-w-2xl text-center"
          >
            <h2
              className="font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.75rem]"
              style={{ color: colors.navy }}
            >
              Our Services
            </h2>
            <p
              className="mt-6 text-base leading-relaxed sm:text-lg"
              style={{ color: "rgba(11,58,102,0.72)" }}
            >
              Comprehensive electrical solutions tailored for homes and
              businesses across Florida&apos;s Nature Coast.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-9">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.article
                  key={service.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55, delay: index * 0.07 }}
                  variants={fadeUp}
                  whileHover={{ y: -10 }}
                  className="rounded-[1.75rem] p-8 transition-shadow duration-300"
                  style={{
                    background: `linear-gradient(165deg, ${colors.white} 0%, ${colors.warmSand} 100%)`,
                    border: "1px solid rgba(11,58,102,0.06)",
                    boxShadow: "0 18px 48px -22px rgba(11,58,102,0.28)",
                  }}
                >
                  <div
                    className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl"
                    style={{
                      background: `linear-gradient(145deg, ${colors.seaGlass}, rgba(220,239,247,0.4))`,
                      color: colors.navy,
                    }}
                  >
                    <Icon size={24} strokeWidth={1.75} />
                  </div>
                  <h3
                    className="font-display text-xl font-semibold tracking-tight"
                    style={{ color: colors.navy }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="mt-3 text-sm leading-relaxed sm:text-[0.95rem]"
                    style={{ color: "rgba(11,58,102,0.7)" }}
                  >
                    {service.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </section>

        <WaveDivider topColor={colors.warmSand} bottomColor={colors.seaGlass} />

        {/* SECTION 4 — Why Choose Us */}
        <section
          className="py-24 sm:py-32"
          style={{
            background: `linear-gradient(180deg, ${colors.seaGlass} 0%, ${colors.warmSand} 100%)`,
          }}
        >
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.65 }}
              variants={fadeUp}
              className="mx-auto max-w-2xl text-center"
            >
              <h2
                className="font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.75rem]"
                style={{ color: colors.navy }}
              >
                Why Homeowners Choose Current Solutions
              </h2>
            </motion.div>

            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.article
                    key={feature.title}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.55, delay: index * 0.08 }}
                    variants={fadeUp}
                    whileHover={{ y: -10 }}
                    className="rounded-[1.75rem] p-8 text-center transition-shadow duration-300"
                    style={{
                      background: colors.white,
                      border: "1px solid rgba(11,58,102,0.06)",
                      boxShadow: "0 18px 44px -22px rgba(11,58,102,0.24)",
                    }}
                  >
                    <div
                      className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl"
                      style={{
                        background: colors.navy,
                        color: colors.gold,
                      }}
                    >
                      <Icon size={24} strokeWidth={1.75} />
                    </div>
                    <h3
                      className="font-display text-lg font-semibold"
                      style={{ color: colors.navy }}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className="mt-3 text-sm leading-relaxed"
                      style={{ color: "rgba(11,58,102,0.7)" }}
                    >
                      {feature.description}
                    </p>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        <WaveDivider topColor={colors.warmSand} bottomColor={colors.warmSand} />

        {/* SECTION 5 — About */}
        <section
          id="about"
          className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32"
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.75 }}
            variants={fadeUp}
            className="mx-auto max-w-3xl text-center"
          >
            <h2
              className="font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.75rem]"
              style={{ color: colors.navy }}
            >
              Powering Florida Homes with Pride
            </h2>
            <p
              className="mt-8 text-base leading-relaxed sm:text-lg"
              style={{ color: "rgba(11,58,102,0.78)" }}
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

        <WaveDivider topColor={colors.warmSand} bottomColor={colors.navy} />

        {/* SECTION 6 — CTA */}
        <section
          id="contact"
          className="px-5 py-24 sm:px-8 sm:py-32"
          style={{
            background: `linear-gradient(145deg, ${colors.navy} 0%, #0E4A7A 55%, #156090 100%)`,
          }}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
            variants={fadeUp}
            className="mx-auto max-w-3xl text-center"
          >
            <h2
              className="font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.75rem]"
              style={{ color: colors.white }}
            >
              Ready for Your Next Electrical Project?
            </h2>
            <p
              className="mx-auto mt-6 max-w-xl text-base leading-relaxed sm:text-lg"
              style={{ color: "rgba(246,241,231,0.8)" }}
            >
              Tell us about your project and we&apos;ll provide a free,
              no-obligation quote with clear recommendations.
            </p>
            <div className="mt-12">
              <ScaleButton
                href="mailto:info@currentsolutions.example"
                variant="gold"
                className="px-12 py-5 text-lg"
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
          background: colors.warmSand,
          borderColor: "rgba(11,58,102,0.08)",
        }}
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-16 sm:px-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p
              className="font-display text-xl font-semibold tracking-tight"
              style={{ color: colors.navy }}
            >
              Current Solutions Electrical Services
            </p>
            <p
              className="mt-3 text-sm"
              style={{ color: "rgba(11,58,102,0.7)" }}
            >
              Family Owned &amp; Operated
            </p>
            <p
              className="mt-1 text-sm"
              style={{ color: "rgba(11,58,102,0.7)" }}
            >
              Serving Florida&apos;s Nature Coast
            </p>
          </div>

          <div className="flex flex-col gap-4 text-sm">
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
          className="border-t py-6 text-center text-xs"
          style={{
            borderColor: "rgba(11,58,102,0.08)",
            color: "rgba(11,58,102,0.5)",
          }}
        >
          © {new Date().getFullYear()} Current Solutions Electrical Services.
          All rights reserved.
        </div>
      </footer>
    </div>
  );
}
