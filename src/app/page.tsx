"use client";

import { motion, AnimatePresence } from "framer-motion";
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
  ArrowRight,
} from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";

const colors = {
  navy: "#0B3A66",
  seaGlass: "#DCEFF7",
  warmSand: "#F6F1E7",
  champagne: "#D4AF37",
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
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09 },
  },
};

function WaveDivider({
  topColor,
  bottomColor,
  flip = false,
  className = "",
}: {
  topColor: string;
  bottomColor: string;
  flip?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`relative -mb-px h-16 w-full overflow-hidden sm:h-20 md:h-28 ${className}`}
      aria-hidden="true"
      style={{
        background: topColor,
        transform: flip ? "scaleY(-1)" : undefined,
      }}
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
          opacity="0.4"
        />
        <path
          d="M0,80 C280,20 520,110 760,70 C1000,30 1240,10 1440,72 L1440,120 L0,120 Z"
          fill={bottomColor}
        />
      </svg>
    </div>
  );
}

/** Full-bleed Nature Coast lighthouse with soft sunrise & Gulf tones */
function CoastalLighthouseScene() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Soft sunrise → sea glass sky */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(180deg,
              #F7D9A8 0%,
              #F3C98A 12%,
              #E8D5B0 26%,
              #DCEFF7 48%,
              #C5E0EF 68%,
              #F6F1E7 88%,
              #EDE6D8 100%
            )
          `,
        }}
      />

      {/* Warm sunrise glow — right horizon */}
      <motion.div
        className="absolute -right-[6%] top-[4%] h-[48vmin] w-[48vmin] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255,228,160,0.7) 0%, rgba(212,175,55,0.28) 38%, rgba(212,175,55,0.08) 58%, transparent 72%)",
        }}
        animate={{ opacity: [0.75, 1, 0.75], scale: [1, 1.05, 1] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Soft sea glass haze left */}
      <div
        className="absolute -left-[12%] top-[22%] h-[52vmin] w-[52vmin] rounded-full opacity-75 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(220,239,247,0.95) 0%, transparent 68%)",
        }}
      />

      {/* Distant gulf horizon band */}
      <div
        className="absolute inset-x-0 bottom-[28%] h-[18%]"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, rgba(11,58,102,0.08) 40%, rgba(11,58,102,0.2) 100%)",
        }}
      />

      {/* Animated gentle waves */}
      <svg
        className="absolute inset-x-0 bottom-0 h-[38%] w-full"
        viewBox="0 0 1440 420"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="gulfDeep" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0B3A66" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#072844" stopOpacity="0.88" />
          </linearGradient>
          <linearGradient id="gulfMid" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1A5A8A" stopOpacity="0.48" />
            <stop offset="100%" stopColor="#0B3A66" stopOpacity="0.72" />
          </linearGradient>
          <linearGradient id="gulfFoam" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#DCEFF7" stopOpacity="0.58" />
            <stop offset="100%" stopColor="#DCEFF7" stopOpacity="0.15" />
          </linearGradient>
        </defs>
        <motion.path
          d="M0,160 C240,120 360,210 560,170 C780,120 980,210 1200,165 C1320,140 1380,150 1440,145 L1440,420 L0,420 Z"
          fill="url(#gulfDeep)"
          animate={{
            d: [
              "M0,160 C240,120 360,210 560,170 C780,120 980,210 1200,165 C1320,140 1380,150 1440,145 L1440,420 L0,420 Z",
              "M0,170 C220,210 380,130 580,175 C800,230 960,130 1180,175 C1320,200 1380,170 1440,165 L1440,420 L0,420 Z",
              "M0,160 C240,120 360,210 560,170 C780,120 980,210 1200,165 C1320,140 1380,150 1440,145 L1440,420 L0,420 Z",
            ],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          d="M0,200 C260,170 400,240 620,205 C860,165 1040,245 1260,210 C1350,195 1400,205 1440,200 L1440,420 L0,420 Z"
          fill="url(#gulfMid)"
          animate={{
            d: [
              "M0,200 C260,170 400,240 620,205 C860,165 1040,245 1260,210 C1350,195 1400,205 1440,200 L1440,420 L0,420 Z",
              "M0,210 C240,250 420,180 640,215 C880,255 1020,175 1240,220 C1350,240 1400,215 1440,210 L1440,420 L0,420 Z",
              "M0,200 C260,170 400,240 620,205 C860,165 1040,245 1260,210 C1350,195 1400,205 1440,200 L1440,420 L0,420 Z",
            ],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <path
          d="M0,255 C300,235 480,280 720,255 C980,225 1180,285 1440,260 L1440,420 L0,420 Z"
          fill="url(#gulfFoam)"
        />
        <path
          d="M0,340 C360,310 720,360 1080,325 C1260,308 1360,320 1440,315 L1440,420 L0,420 Z"
          fill="#F6F1E7"
          opacity="0.92"
        />
        <path
          d="M0,365 C400,345 780,385 1100,360 C1280,345 1380,355 1440,352 L1440,420 L0,420 Z"
          fill="#EDE6D8"
        />
      </svg>

      {/* Lighthouse — right side overlooking the Gulf */}
      <div className="absolute bottom-[22%] right-[3%] w-[min(44vw,400px)] sm:right-[7%] lg:right-[9%]">
        <svg
          viewBox="0 0 320 420"
          className="h-auto w-full drop-shadow-[0_30px_60px_rgba(11,58,102,0.28)]"
        >
          <defs>
            <linearGradient id="towerBody" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#F6F1E7" />
              <stop offset="45%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#E8E0D4" />
            </linearGradient>
            <linearGradient id="towerStripe" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0B3A66" />
              <stop offset="100%" stopColor="#072844" />
            </linearGradient>
            <linearGradient id="lanternGlow" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#D4AF37" stopOpacity="0" />
              <stop offset="35%" stopColor="#D4AF37" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="rockBase" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1A4F78" />
              <stop offset="100%" stopColor="#0B3A66" />
            </linearGradient>
            <radialGradient id="beacon" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFE9A3" stopOpacity="0.95" />
              <stop offset="45%" stopColor="#D4AF37" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Soft clouds */}
          <ellipse cx="40" cy="48" rx="36" ry="12" fill="#FFFFFF" opacity="0.28" />
          <ellipse cx="62" cy="42" rx="22" ry="9" fill="#FFFFFF" opacity="0.22" />

          {/* Rock / island base */}
          <ellipse cx="160" cy="385" rx="118" ry="28" fill="#072844" opacity="0.25" />
          <path
            d="M48,370 C70,330 100,312 145,308 C175,305 210,318 245,340 C270,358 285,372 292,385 L48,385 Z"
            fill="url(#rockBase)"
          />
          <path
            d="M70,372 C95,348 125,335 155,332 C190,328 225,345 255,368"
            fill="none"
            stroke="#DCEFF7"
            strokeOpacity="0.25"
            strokeWidth="2"
          />

          {/* Coastal foliage */}
          <ellipse cx="95" cy="355" rx="18" ry="10" fill="#0B3A66" opacity="0.55" />
          <ellipse cx="112" cy="350" rx="14" ry="9" fill="#145A82" opacity="0.5" />
          <ellipse cx="220" cy="358" rx="16" ry="9" fill="#0B3A66" opacity="0.45" />

          {/* Tower shaft */}
          <path
            d="M118,340 L132,120 L188,120 L202,340 Z"
            fill="url(#towerBody)"
          />
          <path d="M122,300 L136,255 L184,255 L198,300 Z" fill="url(#towerStripe)" />
          <path d="M128,210 L138,170 L182,170 L192,210 Z" fill="url(#towerStripe)" />

          {/* Gallery railing */}
          <rect x="122" y="112" width="76" height="10" rx="2" fill="#0B3A66" />
          <rect x="126" y="106" width="4" height="8" fill="#D4AF37" />
          <rect x="142" y="106" width="4" height="8" fill="#D4AF37" />
          <rect x="158" y="106" width="4" height="8" fill="#D4AF37" />
          <rect x="174" y="106" width="4" height="8" fill="#D4AF37" />
          <rect x="190" y="106" width="4" height="8" fill="#D4AF37" />

          {/* Lantern room */}
          <rect x="136" y="72" width="48" height="36" rx="3" fill="#F6F1E7" />
          <rect x="140" y="76" width="12" height="28" rx="1" fill="#0B3A66" opacity="0.75" />
          <rect x="156" y="76" width="12" height="28" rx="1" fill="#DCEFF7" />
          <rect x="172" y="76" width="12" height="28" rx="1" fill="#0B3A66" opacity="0.75" />

          {/* Cupola / roof */}
          <path d="M128,74 L160,42 L192,74 Z" fill="#0B3A66" />
          <circle cx="160" cy="40" r="5" fill="#D4AF37" />
          <rect x="158" y="28" width="4" height="14" rx="1" fill="#D4AF37" />

          {/* Beacon glow */}
          <circle cx="160" cy="90" r="48" fill="url(#beacon)" opacity="0.85" />

          {/* Light beams sweeping Gulf */}
          <motion.g
            style={{ transformOrigin: "160px 90px" }}
            animate={{ opacity: [0.32, 0.78, 0.32] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <path d="M168,88 L310,55 L310,115 Z" fill="url(#lanternGlow)" />
            <path d="M168,92 L300,130 L285,165 Z" fill="#D4AF37" opacity="0.18" />
          </motion.g>

          {/* Door */}
          <rect x="148" y="308" width="24" height="32" rx="2" fill="#0B3A66" />
          <circle cx="166" cy="324" r="1.5" fill="#D4AF37" />
        </svg>
      </div>

      {/* Soft vignette for text readability on left */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(90deg,
              rgba(246,241,231,0.78) 0%,
              rgba(246,241,231,0.48) 36%,
              rgba(246,241,231,0.1) 58%,
              transparent 74%
            )
          `,
        }}
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
    "inline-flex items-center justify-center gap-2.5 rounded-2xl px-10 py-5 text-lg font-semibold tracking-wide transition-[box-shadow,background-color,color] duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

  const variants = {
    primary: {
      background: colors.navy,
      color: colors.white,
      boxShadow: "0 18px 44px -14px rgba(11,58,102,0.55)",
    },
    secondary: {
      background: "rgba(255,255,255,0.58)",
      color: colors.navy,
      boxShadow: "inset 0 0 0 1.5px rgba(11,58,102,0.22)",
      backdropFilter: "blur(10px)",
    },
    gold: {
      background: colors.champagne,
      color: colors.navy,
      boxShadow: "0 20px 48px -14px rgba(212,175,55,0.68)",
    },
  } as const;

  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.045, y: -3 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 420, damping: 28 }}
      className={`${base} ${className}`}
      style={variants[variant]}
    >
      {children}
    </motion.a>
  );
}

export default function HomePage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="min-h-screen overflow-x-hidden antialiased"
      style={{ background: colors.warmSand, color: colors.navy }}
    >
      {/* SECTION 1 — Floating glassmorphism navigation */}
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 sm:pt-5">
        <nav
          className={`pointer-events-auto glass-nav mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-2xl px-4 py-3.5 transition-[background,box-shadow,border-color] duration-300 sm:px-6 sm:py-4 ${
            scrolled ? "glass-nav-scrolled" : ""
          }`}
        >
          <a href="#home" className="shrink-0">
            <span className="font-display text-2xl font-semibold tracking-tight sm:text-[1.75rem]">
              Current Solutions
            </span>
          </a>

          <ul className="hidden items-center gap-10 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[0.9375rem] font-medium tracking-[0.04em] transition-opacity hover:opacity-65"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <ScaleButton
              href="#contact"
              variant="primary"
              className="px-7 py-3.5 text-sm"
            >
              Request a Quote
            </ScaleButton>
          </div>

          <button
            type="button"
            className="rounded-xl p-2 md:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0, y: -8 }}
              animate={{ height: "auto", opacity: 1, y: 0 }}
              exit={{ height: 0, opacity: 0, y: -8 }}
              transition={{ duration: 0.28 }}
              className="pointer-events-auto mx-auto mt-3 max-w-6xl overflow-hidden rounded-2xl border md:hidden"
              style={{
                borderColor: "rgba(220,239,247,0.8)",
                background: "rgba(255,255,255,0.78)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                boxShadow: "0 18px 44px -22px rgba(11,58,102,0.4)",
              }}
            >
              <ul className="flex flex-col gap-1 px-5 py-5">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="block py-2.5 text-base font-medium"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li className="pt-3">
                  <ScaleButton
                    href="#contact"
                    variant="primary"
                    className="w-full"
                  >
                    Request a Quote
                  </ScaleButton>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        {/* SECTION 2 — Dramatic Nature Coast Hero */}
        <section
          id="home"
          className="relative min-h-[min(94vh,960px)] overflow-hidden pt-20"
        >
          <CoastalLighthouseScene />

          <div className="relative z-10 mx-auto flex min-h-[min(94vh,960px)] max-w-6xl items-center px-5 py-28 sm:px-8 sm:py-36 lg:py-40">
            <div className="max-w-xl lg:max-w-2xl">
              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-[clamp(3rem,7.5vw,5.75rem)] font-semibold leading-[0.96] tracking-tight"
                style={{ color: colors.navy }}
              >
                Current Solutions
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-7 max-w-lg text-xl font-medium leading-snug tracking-tight sm:text-2xl lg:text-[1.65rem]"
                style={{ color: colors.navy }}
              >
                Reliable electrical craftsmanship for Florida&apos;s Nature
                Coast.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.75,
                  delay: 0.22,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-6 max-w-md text-base leading-relaxed sm:text-lg"
                style={{ color: "rgba(11,58,102,0.72)" }}
              >
                Family-owned service with honest workmanship—keeping homes and
                businesses powered with quiet confidence.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.34,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center"
              >
                <ScaleButton href="#contact" variant="gold">
                  Request a Free Quote
                  <ArrowRight size={20} strokeWidth={2.25} />
                </ScaleButton>
                <ScaleButton href="tel:+10000000000" variant="secondary">
                  Call Now
                </ScaleButton>
              </motion.div>
            </div>
          </div>
        </section>

        <WaveDivider topColor={colors.warmSand} bottomColor={colors.warmSand} />

        {/* SECTION 3 — Services */}
        <section
          id="services"
          className="mx-auto max-w-6xl px-5 py-28 sm:px-8 sm:py-36"
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            variants={fadeUp}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl lg:text-[3.35rem]">
              Our Services
            </h2>
            <p
              className="mt-6 text-base leading-relaxed sm:text-lg"
              style={{ color: "rgba(11,58,102,0.7)" }}
            >
              Comprehensive electrical solutions tailored for homes and
              businesses across Florida&apos;s Nature Coast.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger}
            className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <motion.article
                  key={service.title}
                  variants={fadeUp}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -12 }}
                  className="premium-card group p-8 sm:p-10"
                >
                  <div
                    className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-105"
                    style={{
                      background: `linear-gradient(145deg, ${colors.seaGlass}, rgba(220,239,247,0.4))`,
                      color: colors.navy,
                      boxShadow: "inset 0 0 0 1px rgba(11,58,102,0.05)",
                    }}
                  >
                    <Icon size={24} strokeWidth={1.6} />
                  </div>
                  <h3 className="font-display text-2xl font-semibold tracking-tight">
                    {service.title}
                  </h3>
                  <p
                    className="mt-4 text-[0.9375rem] leading-relaxed"
                    style={{ color: "rgba(11,58,102,0.68)" }}
                  >
                    {service.description}
                  </p>
                </motion.article>
              );
            })}
          </motion.div>
        </section>

        <WaveDivider
          topColor={colors.warmSand}
          bottomColor="rgba(220,239,247,0.55)"
        />

        {/* SECTION 4 — Why Choose Us */}
        <section
          className="py-28 sm:py-36"
          style={{
            background: `linear-gradient(180deg, rgba(220,239,247,0.55) 0%, ${colors.warmSand} 100%)`,
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
              <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl lg:text-[3.35rem]">
                Why Homeowners Choose Current Solutions
              </h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={stagger}
              className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
            >
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <motion.article
                    key={feature.title}
                    variants={fadeUp}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ y: -12 }}
                    className="premium-card p-8 text-center sm:p-9"
                  >
                    <div
                      className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl"
                      style={{
                        background: colors.navy,
                        color: colors.champagne,
                        boxShadow: "0 14px 32px -16px rgba(11,58,102,0.55)",
                      }}
                    >
                      <Icon size={24} strokeWidth={1.6} />
                    </div>
                    <h3 className="font-display text-xl font-semibold sm:text-[1.35rem]">
                      {feature.title}
                    </h3>
                    <p
                      className="mt-4 text-sm leading-relaxed"
                      style={{ color: "rgba(11,58,102,0.68)" }}
                    >
                      {feature.description}
                    </p>
                  </motion.article>
                );
              })}
            </motion.div>
          </div>
        </section>

        <WaveDivider topColor={colors.warmSand} bottomColor={colors.warmSand} />

        {/* SECTION 5 — About */}
        <section
          id="about"
          className="mx-auto max-w-6xl px-5 py-28 sm:px-8 sm:py-36"
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            variants={fadeUp}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl lg:text-[3.35rem]">
              Powering Florida Homes with Pride
            </h2>
            <p
              className="mt-10 text-base leading-relaxed sm:text-lg"
              style={{ color: "rgba(11,58,102,0.76)" }}
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
          className="relative overflow-hidden px-5 py-28 sm:px-8 sm:py-36"
          style={{
            background: `linear-gradient(145deg, ${colors.navy} 0%, #0c4a7a 48%, #156089 100%)`,
          }}
        >
          <div
            className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full opacity-30 blur-3xl"
            style={{ background: colors.champagne }}
          />
          <div
            className="pointer-events-none absolute -left-16 bottom-0 h-64 w-64 rounded-full opacity-40 blur-3xl"
            style={{ background: colors.seaGlass }}
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            variants={fadeUp}
            className="relative mx-auto max-w-3xl text-center"
          >
            <h2
              className="font-display text-4xl font-semibold tracking-tight sm:text-5xl lg:text-[3.35rem]"
              style={{ color: colors.white }}
            >
              Ready for Your Next Electrical Project?
            </h2>
            <p
              className="mx-auto mt-8 max-w-xl text-base leading-relaxed sm:text-lg"
              style={{ color: "rgba(246,241,231,0.78)" }}
            >
              Tell us about your project and we&apos;ll provide a free,
              no-obligation quote with clear recommendations.
            </p>
            <div className="mt-14">
              <ScaleButton
                href="mailto:info@currentsolutions.example"
                variant="gold"
                className="px-12 py-5 text-lg"
              >
                Request Your Free Quote
                <ArrowRight size={20} strokeWidth={2.25} />
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
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-5 py-16 sm:px-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-display text-2xl font-semibold tracking-tight">
              Current Solutions Electrical Services
            </p>
            <p
              className="mt-4 text-sm"
              style={{ color: "rgba(11,58,102,0.68)" }}
            >
              Family Owned &amp; Operated
            </p>
            <p
              className="mt-1 text-sm"
              style={{ color: "rgba(11,58,102,0.68)" }}
            >
              Serving Florida&apos;s Nature Coast
            </p>
          </div>

          <div className="flex flex-col gap-4 text-sm">
            <a
              href="tel:+10000000000"
              className="inline-flex items-center gap-2.5 transition-opacity hover:opacity-70"
            >
              <Phone size={16} />
              (000) 000-0000
            </a>
            <a
              href="mailto:info@currentsolutions.example"
              className="inline-flex items-center gap-2.5 transition-opacity hover:opacity-70"
            >
              <Mail size={16} />
              info@currentsolutions.example
            </a>
          </div>
        </div>
        <div
          className="border-t py-7 text-center text-xs tracking-wide"
          style={{
            borderColor: "rgba(11,58,102,0.08)",
            color: "rgba(11,58,102,0.48)",
          }}
        >
          © {new Date().getFullYear()} Current Solutions Electrical Services.
          All rights reserved.
        </div>
      </footer>
    </div>
  );
}
