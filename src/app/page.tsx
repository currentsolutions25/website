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
  Check,
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

const trustBadges = [
  "Family Owned",
  "Licensed & Insured",
  "Residential & Commercial",
  "Emergency Service",
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

/** Full-bleed Nature Coast SVG — lighthouse, ocean, sunrise, sea oats, clouds */
function CoastalIllustration() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="sunriseSky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F7D9A8" />
            <stop offset="18%" stopColor="#F0C98A" />
            <stop offset="38%" stopColor="#E8D5B8" />
            <stop offset="58%" stopColor="#DCEFF7" />
            <stop offset="78%" stopColor="#C8E4F2" />
            <stop offset="100%" stopColor="#B5D6E8" />
          </linearGradient>
          <radialGradient id="sunGlow" cx="78%" cy="28%" r="32%">
            <stop offset="0%" stopColor="#FFE4A8" stopOpacity="0.85" />
            <stop offset="40%" stopColor="#D4AF37" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="oceanDeep" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1A5A8A" />
            <stop offset="55%" stopColor="#0B3A66" />
            <stop offset="100%" stopColor="#072844" />
          </linearGradient>
          <linearGradient id="oceanMid" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2A6F9E" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#0B3A66" stopOpacity="0.35" />
          </linearGradient>
          <linearGradient id="foamLine" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#DCEFF7" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#DCEFF7" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="sandBank" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F6F1E7" />
            <stop offset="100%" stopColor="#E8DFC8" />
          </linearGradient>
          <linearGradient id="towerBody" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#EDE6D8" />
            <stop offset="45%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#D9D0C0" />
          </linearGradient>
          <linearGradient id="towerStripe" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0B3A66" />
            <stop offset="100%" stopColor="#072844" />
          </linearGradient>
          <linearGradient id="beamGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.55" />
            <stop offset="55%" stopColor="#FFE9A3" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="lanternCore" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFF3C4" stopOpacity="0.95" />
            <stop offset="45%" stopColor="#D4AF37" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="textVeil" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#F6F1E7" stopOpacity="0.82" />
            <stop offset="42%" stopColor="#F6F1E7" stopOpacity="0.45" />
            <stop offset="68%" stopColor="#F6F1E7" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#F6F1E7" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Sunrise sky */}
        <rect width="1440" height="900" fill="url(#sunriseSky)" />
        <ellipse cx="1120" cy="240" rx="320" ry="260" fill="url(#sunGlow)" />
        <circle cx="1180" cy="220" r="54" fill="#FFE9A8" opacity="0.9" />
        <circle cx="1180" cy="220" r="72" fill="#D4AF37" opacity="0.12" />

        {/* Soft floating clouds */}
        <motion.g
          animate={{ x: [0, 28, 0] }}
          transition={{ duration: 48, repeat: Infinity, ease: "easeInOut" }}
          opacity="0.55"
        >
          <ellipse cx="220" cy="140" rx="90" ry="28" fill="#FFFFFF" />
          <ellipse cx="270" cy="128" rx="58" ry="22" fill="#FFFFFF" />
          <ellipse cx="175" cy="132" rx="48" ry="18" fill="#FFFFFF" opacity="0.85" />
        </motion.g>
        <motion.g
          animate={{ x: [0, -22, 0] }}
          transition={{ duration: 56, repeat: Infinity, ease: "easeInOut" }}
          opacity="0.4"
        >
          <ellipse cx="620" cy="100" rx="70" ry="22" fill="#FFFFFF" />
          <ellipse cx="660" cy="92" rx="42" ry="16" fill="#FFFFFF" />
        </motion.g>
        <motion.g
          animate={{ x: [0, 18, 0] }}
          transition={{ duration: 62, repeat: Infinity, ease: "easeInOut" }}
          opacity="0.35"
        >
          <ellipse cx="980" cy="160" rx="80" ry="24" fill="#FFFFFF" />
          <ellipse cx="1030" cy="150" rx="50" ry="18" fill="#FFFFFF" />
        </motion.g>

        {/* Distant horizon haze */}
        <rect
          y="420"
          width="1440"
          height="80"
          fill="#0B3A66"
          opacity="0.06"
        />

        {/* Ocean layers */}
        <motion.path
          d="M0,520 C180,490 340,560 520,525 C720,485 900,560 1100,520 C1240,492 1340,510 1440,500 L1440,900 L0,900 Z"
          fill="url(#oceanDeep)"
          animate={{
            d: [
              "M0,520 C180,490 340,560 520,525 C720,485 900,560 1100,520 C1240,492 1340,510 1440,500 L1440,900 L0,900 Z",
              "M0,530 C200,560 360,490 540,530 C740,575 880,490 1080,535 C1240,560 1340,530 1440,520 L1440,900 L0,900 Z",
              "M0,520 C180,490 340,560 520,525 C720,485 900,560 1100,520 C1240,492 1340,510 1440,500 L1440,900 L0,900 Z",
            ],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          d="M0,560 C220,535 400,600 620,565 C860,525 1040,605 1260,570 C1350,555 1400,565 1440,560 L1440,900 L0,900 Z"
          fill="url(#oceanMid)"
          animate={{
            d: [
              "M0,560 C220,535 400,600 620,565 C860,525 1040,605 1260,570 C1350,555 1400,565 1440,560 L1440,900 L0,900 Z",
              "M0,570 C200,605 420,540 640,575 C880,615 1020,540 1240,580 C1350,600 1400,575 1440,570 L1440,900 L0,900 Z",
              "M0,560 C220,535 400,600 620,565 C860,525 1040,605 1260,570 C1350,555 1400,565 1440,560 L1440,900 L0,900 Z",
            ],
          }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />
        <path
          d="M0,620 C300,595 520,650 760,620 C1020,585 1220,650 1440,625 L1440,900 L0,900 Z"
          fill="url(#foamLine)"
        />

        {/* Shore / sand */}
        <path
          d="M0,720 C280,680 480,760 760,720 C1040,680 1240,760 1440,730 L1440,900 L0,900 Z"
          fill="url(#sandBank)"
        />
        <path
          d="M0,780 C320,755 560,810 860,775 C1120,745 1300,790 1440,775 L1440,900 L0,900 Z"
          fill="#EDE6D8"
          opacity="0.85"
        />

        {/* Sea oats — left foreground */}
        <g opacity="0.85">
          <path
            d="M120,780 C118,720 110,660 105,610"
            fill="none"
            stroke="#5A6B3A"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M105,610 C95,595 88,590 78,588"
            fill="none"
            stroke="#6B7D45"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <ellipse cx="72" cy="586" rx="10" ry="4" fill="#8A9A55" transform="rotate(-25 72 586)" />
          <path
            d="M108,640 C120,625 128,620 140,618"
            fill="none"
            stroke="#6B7D45"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <ellipse cx="148" cy="616" rx="11" ry="4" fill="#8A9A55" transform="rotate(20 148 616)" />
          <path
            d="M112,690 C100,680 92,678 80,678"
            fill="none"
            stroke="#6B7D45"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          <ellipse cx="74" cy="677" rx="9" ry="3.5" fill="#7A8B4A" transform="rotate(-18 74 677)" />

          <path
            d="M168,790 C170,730 178,670 185,625"
            fill="none"
            stroke="#5A6B3A"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M185,625 C198,612 208,608 220,608"
            fill="none"
            stroke="#6B7D45"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <ellipse cx="228" cy="607" rx="11" ry="4" fill="#8A9A55" transform="rotate(18 228 607)" />
          <path
            d="M180,670 C168,658 158,654 145,654"
            fill="none"
            stroke="#6B7D45"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          <ellipse cx="138" cy="653" rx="10" ry="3.5" fill="#7A8B4A" transform="rotate(-22 138 653)" />

          <path
            d="M210,800 C208,750 202,700 198,660"
            fill="none"
            stroke="#5A6B3A"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <ellipse cx="188" cy="652" rx="9" ry="3.5" fill="#8A9A55" transform="rotate(-30 188 652)" />
          <ellipse cx="212" cy="658" rx="9" ry="3.5" fill="#7A8B4A" transform="rotate(25 212 658)" />
        </g>

        {/* Sea oats — right mid */}
        <g opacity="0.7">
          <path
            d="M1280,760 C1282,710 1290,660 1295,620"
            fill="none"
            stroke="#5A6B3A"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <ellipse cx="1282" cy="612" rx="9" ry="3.5" fill="#8A9A55" transform="rotate(-28 1282 612)" />
          <ellipse cx="1310" cy="618" rx="9" ry="3.5" fill="#7A8B4A" transform="rotate(22 1310 618)" />
          <path
            d="M1325,770 C1328,720 1335,675 1340,640"
            fill="none"
            stroke="#5A6B3A"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <ellipse cx="1352" cy="634" rx="9" ry="3.5" fill="#8A9A55" transform="rotate(20 1352 634)" />
        </g>

        {/* Lighthouse group — right coastal overlook */}
        <g transform="translate(980, 180)">
          {/* Rock base */}
          <ellipse cx="160" cy="480" rx="130" ry="32" fill="#072844" opacity="0.22" />
          <path
            d="M40,465 C65,420 100,398 150,392 C185,388 225,405 265,435 C290,455 305,470 312,482 L40,482 Z"
            fill="#0B3A66"
          />
          <path
            d="M55,468 C85,440 120,425 155,422 C195,418 235,438 270,465"
            fill="none"
            stroke="#DCEFF7"
            strokeOpacity="0.2"
            strokeWidth="2"
          />
          <ellipse cx="95" cy="455" rx="20" ry="11" fill="#145A82" opacity="0.55" />
          <ellipse cx="230" cy="460" rx="18" ry="10" fill="#0B3A66" opacity="0.5" />

          {/* Light beam — sweeps every 12s */}
          <motion.g
            style={{ transformOrigin: "160px 118px" }}
            animate={{ rotate: [-28, 32, -28] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          >
            <path
              d="M168,118 L480,40 L500,200 Z"
              fill="url(#beamGrad)"
              opacity="0.85"
            />
            <path
              d="M168,120 L460,160 L440,230 Z"
              fill="#D4AF37"
              opacity="0.12"
            />
          </motion.g>

          {/* Tower shaft */}
          <path d="M112,455 L128,155 L192,155 L208,455 Z" fill="url(#towerBody)" />
          <path d="M118,400 L134,345 L186,345 L202,400 Z" fill="url(#towerStripe)" />
          <path d="M124,290 L136,240 L184,240 L196,290 Z" fill="url(#towerStripe)" />

          {/* Gallery */}
          <rect x="118" y="146" width="84" height="11" rx="2" fill="#0B3A66" />
          {[124, 142, 160, 178, 196].map((x) => (
            <rect key={x} x={x} y="138" width="4" height="10" fill="#D4AF37" />
          ))}

          {/* Lantern room */}
          <rect x="134" y="98" width="52" height="40" rx="3" fill="#F6F1E7" />
          <rect x="138" y="102" width="13" height="32" rx="1" fill="#0B3A66" opacity="0.75" />
          <rect x="154" y="102" width="13" height="32" rx="1" fill="#DCEFF7" />
          <rect x="170" y="102" width="13" height="32" rx="1" fill="#0B3A66" opacity="0.75" />

          {/* Cupola */}
          <path d="M126,100 L160,62 L194,100 Z" fill="#0B3A66" />
          <circle cx="160" cy="60" r="5" fill="#D4AF37" />
          <rect x="158" y="46" width="4" height="16" rx="1" fill="#D4AF37" />

          {/* Beacon glow */}
          <circle cx="160" cy="118" r="52" fill="url(#lanternCore)" />

          {/* Door */}
          <rect x="146" y="415" width="28" height="40" rx="2" fill="#0B3A66" />
          <circle cx="168" cy="436" r="1.8" fill="#D4AF37" />
        </g>

        {/* Soft left veil for text legibility */}
        <rect width="1440" height="900" fill="url(#textVeil)" />
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
          <a href="#home" className="group shrink-0">
            <span className="font-display text-2xl font-semibold tracking-tight transition-opacity duration-300 group-hover:opacity-75 sm:text-[1.75rem]">
              Current Solutions
            </span>
          </a>

          <ul className="hidden items-center gap-10 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative text-[0.9375rem] font-medium tracking-[0.04em] transition-opacity duration-300 hover:opacity-65 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-[var(--champagne)] after:transition-transform after:duration-300 hover:after:scale-x-100"
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
        {/* SECTION 2 — Tall coastal hero */}
        <section
          id="home"
          className="relative min-h-[90vh] overflow-hidden pt-24"
        >
          <CoastalIllustration />

          <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-6xl items-center px-5 py-28 sm:px-8 sm:py-32 lg:py-36">
            <div className="max-w-xl lg:max-w-2xl">
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="text-[0.7rem] font-semibold tracking-[0.28em] sm:text-xs"
                style={{ color: colors.champagne }}
              >
                SERVING FLORIDA&apos;S NATURE COAST
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.85,
                  delay: 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="font-display mt-5 text-[clamp(2.75rem,6.5vw,5.25rem)] font-semibold leading-[1.02] tracking-tight"
                style={{ color: colors.navy }}
              >
                Powering Florida&apos;s Nature Coast
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.75,
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
                  delay: 0.48,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-12 flex flex-wrap gap-x-8 gap-y-3"
              >
                {trustBadges.map((badge) => (
                  <li
                    key={badge}
                    className="inline-flex items-center gap-2 text-sm font-medium tracking-wide"
                    style={{ color: colors.navy }}
                  >
                    <span
                      className="flex h-5 w-5 items-center justify-center rounded-full"
                      style={{
                        background: "rgba(212,175,55,0.18)",
                        color: colors.champagne,
                      }}
                    >
                      <Check size={12} strokeWidth={2.75} />
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
