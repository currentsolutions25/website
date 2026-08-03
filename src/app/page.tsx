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

const trustBadges = [
  "Family Owned",
  "Licensed & Insured",
  "Residential & Commercial",
  "Emergency Service",
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

/** Full-bleed Nature Coast SVG: sunrise, ocean, lighthouse, sea oats, soft clouds */
function CoastalLighthouseScene() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Soft sunrise → sea-glass sky */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(180deg,
              #F8DFB4 0%,
              #F4C98A 14%,
              #E9D4B4 28%,
              #DCEFF7 50%,
              #C8E4F2 70%,
              #F6F1E7 88%,
              #EDE6D8 100%
            )
          `,
        }}
      />

      {/* Warm sunrise glow — right horizon */}
      <motion.div
        className="absolute -right-[4%] top-[2%] h-[52vmin] w-[52vmin] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255,228,160,0.72) 0%, rgba(212,175,55,0.28) 38%, rgba(212,175,55,0.08) 58%, transparent 72%)",
        }}
        animate={{ opacity: [0.72, 1, 0.72], scale: [1, 1.04, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Soft sea-glass haze */}
      <div
        className="absolute -left-[10%] top-[18%] h-[50vmin] w-[50vmin] rounded-full opacity-80 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(220,239,247,0.95) 0%, transparent 68%)",
        }}
      />

      {/* Full-scene SVG: clouds, ocean, lighthouse, sea oats */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="gulfDeep" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0B3A66" stopOpacity="0.52" />
            <stop offset="100%" stopColor="#072844" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="gulfMid" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1A5A8A" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#0B3A66" stopOpacity="0.7" />
          </linearGradient>
          <linearGradient id="gulfFoam" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#DCEFF7" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#DCEFF7" stopOpacity="0.12" />
          </linearGradient>
          <linearGradient id="towerBody" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#F6F1E7" />
            <stop offset="45%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#E8E0D4" />
          </linearGradient>
          <linearGradient id="towerStripe" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0B3A66" />
            <stop offset="100%" stopColor="#072844" />
          </linearGradient>
          <linearGradient id="beamGlow" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.55" />
            <stop offset="55%" stopColor="#D4AF37" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="rockBase" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1A4F78" />
            <stop offset="100%" stopColor="#0B3A66" />
          </linearGradient>
          <radialGradient id="beacon" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFE9A3" stopOpacity="0.95" />
            <stop offset="45%" stopColor="#D4AF37" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="seaOat" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#C4A574" />
            <stop offset="100%" stopColor="#8B7355" />
          </linearGradient>
        </defs>

        {/* Soft floating clouds */}
        <motion.g
          animate={{ x: [0, 28, 0] }}
          transition={{ duration: 48, repeat: Infinity, ease: "easeInOut" }}
          opacity="0.34"
        >
          <ellipse cx="220" cy="120" rx="70" ry="18" fill="#FFFFFF" />
          <ellipse cx="255" cy="112" rx="42" ry="14" fill="#FFFFFF" />
          <ellipse cx="185" cy="114" rx="36" ry="12" fill="#FFFFFF" />
        </motion.g>
        <motion.g
          animate={{ x: [0, -22, 0] }}
          transition={{ duration: 56, repeat: Infinity, ease: "easeInOut" }}
          opacity="0.26"
        >
          <ellipse cx="980" cy="150" rx="80" ry="20" fill="#FFFFFF" />
          <ellipse cx="1030" cy="140" rx="48" ry="15" fill="#FFFFFF" />
          <ellipse cx="940" cy="144" rx="40" ry="13" fill="#FFFFFF" />
        </motion.g>
        <motion.g
          animate={{ x: [0, 16, 0] }}
          transition={{ duration: 62, repeat: Infinity, ease: "easeInOut" }}
          opacity="0.2"
        >
          <ellipse cx="620" cy="90" rx="55" ry="14" fill="#FFFFFF" />
          <ellipse cx="650" cy="84" rx="30" ry="10" fill="#FFFFFF" />
        </motion.g>

        {/* Distant horizon haze */}
        <rect
          x="0"
          y="480"
          width="1440"
          height="140"
          fill="#0B3A66"
          opacity="0.06"
        />

        {/* Gentle ocean waves */}
        <motion.path
          d="M0,560 C240,520 360,610 560,570 C780,520 980,610 1200,565 C1320,540 1380,550 1440,545 L1440,900 L0,900 Z"
          fill="url(#gulfDeep)"
          animate={{
            d: [
              "M0,560 C240,520 360,610 560,570 C780,520 980,610 1200,565 C1320,540 1380,550 1440,545 L1440,900 L0,900 Z",
              "M0,570 C220,610 380,530 580,575 C800,630 960,530 1180,575 C1320,600 1380,570 1440,565 L1440,900 L0,900 Z",
              "M0,560 C240,520 360,610 560,570 C780,520 980,610 1200,565 C1320,540 1380,550 1440,545 L1440,900 L0,900 Z",
            ],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          d="M0,600 C260,570 400,640 620,605 C860,565 1040,645 1260,610 C1350,595 1400,605 1440,600 L1440,900 L0,900 Z"
          fill="url(#gulfMid)"
          animate={{
            d: [
              "M0,600 C260,570 400,640 620,605 C860,565 1040,645 1260,610 C1350,595 1400,605 1440,600 L1440,900 L0,900 Z",
              "M0,610 C240,650 420,580 640,615 C880,655 1020,575 1240,620 C1350,640 1400,615 1440,610 L1440,900 L0,900 Z",
              "M0,600 C260,570 400,640 620,605 C860,565 1040,645 1260,610 C1350,595 1400,605 1440,600 L1440,900 L0,900 Z",
            ],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <path
          d="M0,655 C300,635 480,680 720,655 C980,625 1180,685 1440,660 L1440,900 L0,900 Z"
          fill="url(#gulfFoam)"
        />

        {/* Warm sand shoreline */}
        <path
          d="M0,760 C360,730 720,780 1080,745 C1260,728 1360,740 1440,735 L1440,900 L0,900 Z"
          fill="#F6F1E7"
          opacity="0.94"
        />
        <path
          d="M0,800 C400,780 780,820 1100,795 C1280,780 1380,790 1440,787 L1440,900 L0,900 Z"
          fill="#EDE6D8"
        />

        {/* Elegant lighthouse — center-right so it remains in mobile crop */}
        <g transform="translate(640, 245)">
          {/* Soft ground shadow */}
          <ellipse cx="160" cy="470" rx="130" ry="28" fill="#072844" opacity="0.22" />

          {/* Rock / island base */}
          <path
            d="M48,455 C70,415 100,397 145,393 C175,390 210,403 245,425 C270,443 285,457 292,470 L48,470 Z"
            fill="url(#rockBase)"
          />
          <path
            d="M70,457 C95,433 125,420 155,417 C190,413 225,430 255,453"
            fill="none"
            stroke="#DCEFF7"
            strokeOpacity="0.25"
            strokeWidth="2"
          />

          {/* Sea oats — left of tower */}
          <g opacity="0.85">
            <path d="M70,450 Q62,400 55,355" fill="none" stroke="url(#seaOat)" strokeWidth="1.6" />
            <path d="M78,452 Q74,405 72,360" fill="none" stroke="url(#seaOat)" strokeWidth="1.4" />
            <path d="M88,448 Q90,402 95,358" fill="none" stroke="url(#seaOat)" strokeWidth="1.5" />
            <ellipse cx="54" cy="350" rx="7" ry="3" fill="#C4A574" transform="rotate(-25 54 350)" />
            <ellipse cx="71" cy="355" rx="6" ry="2.5" fill="#B8956A" transform="rotate(-10 71 355)" />
            <ellipse cx="96" cy="353" rx="7" ry="3" fill="#C4A574" transform="rotate(18 96 353)" />
          </g>

          {/* Sea oats — right of tower */}
          <g opacity="0.8">
            <path d="M240,448 Q248,405 255,362" fill="none" stroke="url(#seaOat)" strokeWidth="1.5" />
            <path d="M252,450 Q258,408 268,365" fill="none" stroke="url(#seaOat)" strokeWidth="1.4" />
            <path d="M230,452 Q228,410 222,368" fill="none" stroke="url(#seaOat)" strokeWidth="1.3" />
            <ellipse cx="256" cy="357" rx="7" ry="3" fill="#C4A574" transform="rotate(22 256 357)" />
            <ellipse cx="270" cy="360" rx="6" ry="2.5" fill="#B8956A" transform="rotate(30 270 360)" />
            <ellipse cx="220" cy="363" rx="6" ry="2.5" fill="#C4A574" transform="rotate(-15 220 363)" />
          </g>

          {/* Foreground sea oats (dune) */}
          <g opacity="0.9">
            <path d="M30,470 Q20,430 12,395" fill="none" stroke="#A88B62" strokeWidth="1.5" />
            <path d="M42,472 Q38,435 34,400" fill="none" stroke="#C4A574" strokeWidth="1.4" />
            <path d="M54,470 Q56,432 60,398" fill="none" stroke="#A88B62" strokeWidth="1.3" />
            <ellipse cx="10" cy="390" rx="6" ry="2.5" fill="#C4A574" transform="rotate(-30 10 390)" />
            <ellipse cx="33" cy="395" rx="5" ry="2" fill="#B8956A" />
            <ellipse cx="62" cy="393" rx="6" ry="2.5" fill="#C4A574" transform="rotate(20 62 393)" />
          </g>

          {/* Light beam — sweeps slowly every 12s */}
          <motion.g
            style={{ transformOrigin: "160px 175px" }}
            animate={{ rotate: [-18, 22, -18] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          >
            <path
              d="M168,175 L420,95 L420,255 Z"
              fill="url(#beamGlow)"
              opacity="0.55"
            />
            <path
              d="M168,178 L400,200 L380,255 Z"
              fill="#D4AF37"
              opacity="0.12"
            />
          </motion.g>

          {/* Beacon glow */}
          <circle cx="160" cy="175" r="52" fill="url(#beacon)" opacity="0.8" />

          {/* Tower shaft */}
          <path
            d="M118,425 L132,205 L188,205 L202,425 Z"
            fill="url(#towerBody)"
          />
          <path d="M122,385 L136,340 L184,340 L198,385 Z" fill="url(#towerStripe)" />
          <path d="M128,295 L138,255 L182,255 L192,295 Z" fill="url(#towerStripe)" />

          {/* Gallery railing */}
          <rect x="122" y="197" width="76" height="10" rx="2" fill="#0B3A66" />
          <rect x="126" y="191" width="4" height="8" fill="#D4AF37" />
          <rect x="142" y="191" width="4" height="8" fill="#D4AF37" />
          <rect x="158" y="191" width="4" height="8" fill="#D4AF37" />
          <rect x="174" y="191" width="4" height="8" fill="#D4AF37" />
          <rect x="190" y="191" width="4" height="8" fill="#D4AF37" />

          {/* Lantern room */}
          <rect x="136" y="157" width="48" height="36" rx="3" fill="#F6F1E7" />
          <rect x="140" y="161" width="12" height="28" rx="1" fill="#0B3A66" opacity="0.75" />
          <rect x="156" y="161" width="12" height="28" rx="1" fill="#DCEFF7" />
          <rect x="172" y="161" width="12" height="28" rx="1" fill="#0B3A66" opacity="0.75" />

          {/* Cupola / roof */}
          <path d="M128,159 L160,127 L192,159 Z" fill="#0B3A66" />
          <circle cx="160" cy="125" r="5" fill="#D4AF37" />
          <rect x="158" y="113" width="4" height="14" rx="1" fill="#D4AF37" />

          {/* Door */}
          <rect x="148" y="393" width="24" height="32" rx="2" fill="#0B3A66" />
          <circle cx="166" cy="409" r="1.5" fill="#D4AF37" />
        </g>

        {/* Additional dune sea oats across foreground */}
        <g opacity="0.75">
          <path d="M180,820 Q172,780 165,745" fill="none" stroke="#A88B62" strokeWidth="1.4" />
          <path d="M195,822 Q192,785 190,750" fill="none" stroke="#C4A574" strokeWidth="1.3" />
          <path d="M210,818 Q214,782 220,748" fill="none" stroke="#A88B62" strokeWidth="1.3" />
          <ellipse cx="163" cy="740" rx="6" ry="2.5" fill="#C4A574" transform="rotate(-28 163 740)" />
          <ellipse cx="189" cy="745" rx="5" ry="2" fill="#B8956A" />
          <ellipse cx="222" cy="743" rx="6" ry="2.5" fill="#C4A574" transform="rotate(18 222 743)" />
        </g>
      </svg>

      {/* Soft vignette for text readability on left */}
      <div
        className="absolute inset-0 max-sm:opacity-90"
        style={{
          background: `
            linear-gradient(105deg,
              rgba(246,241,231,0.9) 0%,
              rgba(246,241,231,0.58) 30%,
              rgba(246,241,231,0.16) 50%,
              transparent 66%
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
      {/* SECTION 1 — Floating glass navigation */}
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 sm:pt-5">
        <nav
          className={`pointer-events-auto glass-nav mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-2xl px-4 py-3.5 transition-[background,box-shadow,border-color] duration-300 sm:px-6 sm:py-4 ${
            scrolled ? "glass-nav-scrolled" : ""
          }`}
        >
          <a
            href="#home"
            className="shrink-0 transition-opacity duration-300 hover:opacity-75"
          >
            <span className="font-display text-2xl font-semibold tracking-tight sm:text-[1.75rem]">
              Current Solutions
            </span>
          </a>

          <ul className="hidden items-center gap-10 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative text-[0.9375rem] font-medium tracking-[0.04em] transition-opacity duration-300 hover:opacity-65 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-[var(--champagne)] after:transition-[width] after:duration-300 hover:after:w-full"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <ScaleButton
              href="#contact"
              variant="gold"
              className="px-7 py-3.5 text-sm"
            >
              Request a Quote
            </ScaleButton>
          </div>

          <button
            type="button"
            className="rounded-xl p-2 transition-colors duration-300 hover:bg-white/40 md:hidden"
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
                      className="block py-2.5 text-base font-medium transition-opacity hover:opacity-65"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li className="pt-3">
                  <ScaleButton
                    href="#contact"
                    variant="gold"
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
          className="relative min-h-[90vh] overflow-hidden pt-24"
        >
          <CoastalLighthouseScene />

          <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-6xl items-center px-5 py-24 sm:px-8 sm:py-32 lg:py-36">
            <div className="max-w-xl lg:max-w-[34rem]">
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] sm:text-xs"
                style={{ color: "rgba(11,58,102,0.62)" }}
              >
                Serving Florida&apos;s Nature Coast
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.85,
                  delay: 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-5 font-display text-[clamp(2.75rem,6.8vw,5.25rem)] font-semibold leading-[0.98] tracking-tight"
                style={{ color: colors.navy }}
              >
                Powering Florida&apos;s Nature Coast
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.18,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-6 text-base font-medium tracking-wide sm:text-lg"
                style={{ color: colors.navy }}
              >
                Residential • Commercial • Licensed &amp; Insured
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.75,
                  delay: 0.28,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-6 max-w-md text-base leading-relaxed sm:text-lg"
                style={{ color: "rgba(11,58,102,0.72)" }}
              >
                Family-owned electrical professionals delivering dependable
                service, honest workmanship, and quality craftsmanship
                throughout Florida&apos;s Nature Coast.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.38,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
              >
                <ScaleButton href="#contact" variant="gold">
                  Request a Free Quote
                  <ArrowRight size={20} strokeWidth={2.25} />
                </ScaleButton>
                <ScaleButton href="tel:+10000000000" variant="secondary">
                  Call Now
                </ScaleButton>
              </motion.div>

              <motion.ul
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-10 flex flex-wrap gap-x-6 gap-y-3"
              >
                {trustBadges.map((badge) => (
                  <li
                    key={badge}
                    className="inline-flex items-center gap-2 text-sm font-medium tracking-wide"
                    style={{ color: "rgba(11,58,102,0.78)" }}
                  >
                    <span
                      className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[0.65rem] font-bold"
                      style={{
                        background: "rgba(212,175,55,0.18)",
                        color: colors.champagne,
                      }}
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                    {badge}
                  </li>
                ))}
              </motion.ul>
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
