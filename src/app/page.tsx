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
  HeartHandshake,
  MapPin,
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

const trustBar = [
  {
    title: "Family Owned & Operated",
    icon: HeartHandshake,
  },
  {
    title: "Licensed & Insured",
    icon: ShieldCheck,
  },
  {
    title: "Residential & Commercial",
    icon: Building2,
  },
  {
    title: "Proudly Serving Florida's Nature Coast",
    icon: MapPin,
  },
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

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
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

/** Full-bleed Nature Coast SVG — lighthouse, ocean, sunrise, sea oats, atmosphere */
function CoastalIllustration() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <svg
        className="coastal-scene"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="sunriseSky" x1="0" y1="0" x2="0.35" y2="1">
            <stop offset="0%" stopColor="#E8B978" />
            <stop offset="10%" stopColor="#F2C98A" />
            <stop offset="24%" stopColor="#F0D2A8" />
            <stop offset="42%" stopColor="#E6DFC8" />
            <stop offset="60%" stopColor="#D4E8F2" />
            <stop offset="80%" stopColor="#BDDCEB" />
            <stop offset="100%" stopColor="#A5CBDF" />
          </linearGradient>
          <radialGradient id="sunCore" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFF8E0" stopOpacity="1" />
            <stop offset="28%" stopColor="#FFE29A" stopOpacity="0.95" />
            <stop offset="58%" stopColor="#F0C56A" stopOpacity="0.42" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="sunBloom" cx="80%" cy="24%" r="42%">
            <stop offset="0%" stopColor="#FFE4A0" stopOpacity="0.7" />
            <stop offset="30%" stopColor="#F0C878" stopOpacity="0.32" />
            <stop offset="60%" stopColor="#E8B868" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="horizonWarmth" cx="74%" cy="50%" r="45%">
            <stop offset="0%" stopColor="#F8D9A0" stopOpacity="0.45" />
            <stop offset="45%" stopColor="#EBC890" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#DCEFF7" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="oceanDeep" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#246894" />
            <stop offset="35%" stopColor="#114870" />
            <stop offset="70%" stopColor="#0A355C" />
            <stop offset="100%" stopColor="#051C30" />
          </linearGradient>
          <linearGradient id="oceanMid" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4A8FB8" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#0B3A66" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="oceanShimmer" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#DCEFF7" stopOpacity="0" />
            <stop offset="35%" stopColor="#FFE9B0" stopOpacity="0.28" />
            <stop offset="55%" stopColor="#FFF3C4" stopOpacity="0.22" />
            <stop offset="80%" stopColor="#DCEFF7" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#DCEFF7" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="foamLine" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#E8F4F9" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#DCEFF7" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="sandBank" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F6F1E7" />
            <stop offset="55%" stopColor="#EDE4D0" />
            <stop offset="100%" stopColor="#E2D6BC" />
          </linearGradient>
          <linearGradient id="towerBody" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#D8CFBE" />
            <stop offset="28%" stopColor="#F4EFE4" />
            <stop offset="55%" stopColor="#FFFFFF" />
            <stop offset="82%" stopColor="#E8E0D0" />
            <stop offset="100%" stopColor="#C9BFAE" />
          </linearGradient>
          <linearGradient id="towerStripe" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0E4574" />
            <stop offset="100%" stopColor="#062440" />
          </linearGradient>
          <linearGradient id="beamGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#FFF6D0" stopOpacity="0.78" />
            <stop offset="12%" stopColor="#FFE49A" stopOpacity="0.48" />
            <stop offset="35%" stopColor="#D4AF37" stopOpacity="0.28" />
            <stop offset="65%" stopColor="#FFE9A3" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="lanternCore" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFF8DC" stopOpacity="1" />
            <stop offset="25%" stopColor="#FFE9A8" stopOpacity="0.65" />
            <stop offset="55%" stopColor="#D4AF37" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="textVeil" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#F6F1E7" stopOpacity="0.84" />
            <stop offset="22%" stopColor="#F6F1E7" stopOpacity="0.55" />
            <stop offset="40%" stopColor="#F6F1E7" stopOpacity="0.18" />
            <stop offset="54%" stopColor="#F6F1E7" stopOpacity="0" />
            <stop offset="100%" stopColor="#F6F1E7" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="mistBand" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F6F1E7" stopOpacity="0" />
            <stop offset="40%" stopColor="#E8F0F4" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#DCEFF7" stopOpacity="0" />
          </linearGradient>
          <filter id="softBlur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" />
          </filter>
        </defs>

        {/* Sunrise sky */}
        <rect width="1440" height="900" fill="url(#sunriseSky)" />
        <ellipse cx="1020" cy="210" rx="460" ry="340" fill="url(#sunBloom)" />
        <ellipse cx="960" cy="420" rx="520" ry="140" fill="url(#horizonWarmth)" />

        {/* Sun disk with layered atmosphere */}
        <circle cx="1080" cy="205" r="150" fill="url(#sunCore)" opacity="0.5" />
        <circle cx="1080" cy="205" r="72" fill="#FFF0C4" opacity="0.5" />
        <circle cx="1080" cy="205" r="44" fill="#FFE9A8" opacity="0.72" />
        <circle cx="1080" cy="205" r="26" fill="#FFF8E0" opacity="0.92" />

        {/* Soft floating clouds */}
        <motion.g
          animate={{ x: [0, 24, 0] }}
          transition={{ duration: 52, repeat: Infinity, ease: "easeInOut" }}
          opacity="0.42"
        >
          <ellipse cx="210" cy="138" rx="100" ry="26" fill="#FFFFFF" />
          <ellipse cx="268" cy="126" rx="62" ry="20" fill="#FFFFFF" />
          <ellipse cx="160" cy="130" rx="52" ry="16" fill="#FFFFFF" opacity="0.85" />
        </motion.g>
        <motion.g
          animate={{ x: [0, -18, 0] }}
          transition={{ duration: 60, repeat: Infinity, ease: "easeInOut" }}
          opacity="0.32"
        >
          <ellipse cx="600" cy="96" rx="78" ry="20" fill="#FFFFFF" />
          <ellipse cx="648" cy="88" rx="46" ry="14" fill="#FFFFFF" />
        </motion.g>
        <motion.g
          animate={{ x: [0, 16, 0] }}
          transition={{ duration: 68, repeat: Infinity, ease: "easeInOut" }}
          opacity="0.28"
        >
          <ellipse cx="940" cy="155" rx="86" ry="22" fill="#FFFFFF" />
          <ellipse cx="995" cy="146" rx="52" ry="16" fill="#FFFFFF" />
        </motion.g>

        {/* Atmospheric mist above horizon */}
        <rect y="400" width="1440" height="100" fill="url(#mistBand)" />
        <rect y="430" width="1440" height="50" fill="#0B3A66" opacity="0.04" />

        {/* Ocean layers — deeper, more dimensional */}
        <motion.path
          d="M0,515 C180,485 340,555 520,520 C720,480 900,555 1100,515 C1240,488 1340,505 1440,495 L1440,900 L0,900 Z"
          fill="url(#oceanDeep)"
          animate={{
            d: [
              "M0,515 C180,485 340,555 520,520 C720,480 900,555 1100,515 C1240,488 1340,505 1440,495 L1440,900 L0,900 Z",
              "M0,525 C200,555 360,485 540,525 C740,570 880,485 1080,530 C1240,555 1340,525 1440,515 L1440,900 L0,900 Z",
              "M0,515 C180,485 340,555 520,520 C720,480 900,555 1100,515 C1240,488 1340,505 1440,495 L1440,900 L0,900 Z",
            ],
          }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          d="M0,555 C220,530 400,595 620,560 C860,520 1040,600 1260,565 C1350,550 1400,560 1440,555 L1440,900 L0,900 Z"
          fill="url(#oceanMid)"
          animate={{
            d: [
              "M0,555 C220,530 400,595 620,560 C860,520 1040,600 1260,565 C1350,550 1400,560 1440,555 L1440,900 L0,900 Z",
              "M0,565 C200,600 420,535 640,570 C880,610 1020,535 1240,575 C1350,595 1400,570 1440,565 L1440,900 L0,900 Z",
              "M0,555 C220,530 400,595 620,560 C860,520 1040,600 1260,565 C1350,550 1400,560 1440,555 L1440,900 L0,900 Z",
            ],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Sunrise shimmer across water */}
        <motion.ellipse
          cx="980"
          cy="555"
          rx="320"
          ry="48"
          fill="url(#oceanShimmer)"
          animate={{ opacity: [0.4, 0.75, 0.4], rx: [290, 340, 290] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <ellipse
          cx="1040"
          cy="545"
          rx="160"
          ry="18"
          fill="#FFF3C4"
          opacity="0.12"
        />

        <path
          d="M0,615 C300,590 520,645 760,615 C1020,580 1220,645 1440,620 L1440,900 L0,900 Z"
          fill="url(#foamLine)"
        />

        {/* Shore / sand */}
        <path
          d="M0,715 C280,675 480,755 760,715 C1040,675 1240,755 1440,725 L1440,900 L0,900 Z"
          fill="url(#sandBank)"
        />
        <path
          d="M0,775 C320,750 560,805 860,770 C1120,740 1300,785 1440,770 L1440,900 L0,900 Z"
          fill="#E8DFC8"
          opacity="0.9"
        />

        {/* Sea oats — left foreground */}
        <g opacity="0.88">
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
          <ellipse
            cx="72"
            cy="586"
            rx="10"
            ry="4"
            fill="#8A9A55"
            transform="rotate(-25 72 586)"
          />
          <path
            d="M108,640 C120,625 128,620 140,618"
            fill="none"
            stroke="#6B7D45"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <ellipse
            cx="148"
            cy="616"
            rx="11"
            ry="4"
            fill="#8A9A55"
            transform="rotate(20 148 616)"
          />
          <path
            d="M112,690 C100,680 92,678 80,678"
            fill="none"
            stroke="#6B7D45"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          <ellipse
            cx="74"
            cy="677"
            rx="9"
            ry="3.5"
            fill="#7A8B4A"
            transform="rotate(-18 74 677)"
          />

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
          <ellipse
            cx="228"
            cy="607"
            rx="11"
            ry="4"
            fill="#8A9A55"
            transform="rotate(18 228 607)"
          />
          <path
            d="M180,670 C168,658 158,654 145,654"
            fill="none"
            stroke="#6B7D45"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          <ellipse
            cx="138"
            cy="653"
            rx="10"
            ry="3.5"
            fill="#7A8B4A"
            transform="rotate(-22 138 653)"
          />

          <path
            d="M210,800 C208,750 202,700 198,660"
            fill="none"
            stroke="#5A6B3A"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <ellipse
            cx="188"
            cy="652"
            rx="9"
            ry="3.5"
            fill="#8A9A55"
            transform="rotate(-30 188 652)"
          />
          <ellipse
            cx="212"
            cy="658"
            rx="9"
            ry="3.5"
            fill="#7A8B4A"
            transform="rotate(25 212 658)"
          />
        </g>

        {/* Sea oats — right mid */}
        <g opacity="0.72">
          <path
            d="M1280,760 C1282,710 1290,660 1295,620"
            fill="none"
            stroke="#5A6B3A"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <ellipse
            cx="1282"
            cy="612"
            rx="9"
            ry="3.5"
            fill="#8A9A55"
            transform="rotate(-28 1282 612)"
          />
          <ellipse
            cx="1310"
            cy="618"
            rx="9"
            ry="3.5"
            fill="#7A8B4A"
            transform="rotate(22 1310 618)"
          />
          <path
            d="M1325,770 C1328,720 1335,675 1340,640"
            fill="none"
            stroke="#5A6B3A"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <ellipse
            cx="1352"
            cy="634"
            rx="9"
            ry="3.5"
            fill="#8A9A55"
            transform="rotate(20 1352 634)"
          />
        </g>

        {/* Lighthouse group — right coastal overlook */}
        <g transform="translate(760, 170)">
          {/* Rock base with more depth */}
          <ellipse cx="160" cy="482" rx="140" ry="34" fill="#072844" opacity="0.2" />
          <path
            d="M35,468 C60,418 98,392 150,386 C188,382 230,400 270,432 C296,454 310,468 318,484 L35,484 Z"
            fill="#0B3A66"
          />
          <path
            d="M48,470 C78,438 115,420 155,416 C198,412 240,434 278,468"
            fill="none"
            stroke="#DCEFF7"
            strokeOpacity="0.18"
            strokeWidth="2"
          />
          <ellipse cx="90" cy="458" rx="22" ry="12" fill="#145A82" opacity="0.5" />
          <ellipse cx="235" cy="462" rx="20" ry="11" fill="#0B3A66" opacity="0.45" />
          <ellipse cx="160" cy="472" rx="28" ry="10" fill="#072844" opacity="0.35" />

          {/* Soft ambient lantern haze */}
          <circle
            cx="160"
            cy="118"
            r="90"
            fill="#D4AF37"
            opacity="0.06"
            filter="url(#softBlur)"
          />

          {/* Light beam — elegant sweep */}
          <motion.g
            style={{ transformOrigin: "160px 118px" }}
            animate={{ rotate: [-30, 34, -30] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          >
            <path
              d="M168,118 L520,20 L545,210 Z"
              fill="url(#beamGrad)"
              opacity="0.9"
            />
            <path
              d="M168,120 L490,145 L470,235 Z"
              fill="#FFF3C4"
              opacity="0.1"
            />
            <path
              d="M168,118 L400,80 L410,160 Z"
              fill="#FFE9A3"
              opacity="0.18"
            />
          </motion.g>

          {/* Tower shaft with subtle taper shadow */}
          <path d="M112,455 L128,155 L192,155 L208,455 Z" fill="url(#towerBody)" />
          <path
            d="M112,455 L128,155 L140,155 L130,455 Z"
            fill="#FFFFFF"
            opacity="0.12"
          />
          <path
            d="M190,155 L192,155 L208,455 L196,455 Z"
            fill="#0B3A66"
            opacity="0.08"
          />
          <path d="M118,400 L134,345 L186,345 L202,400 Z" fill="url(#towerStripe)" />
          <path d="M124,290 L136,240 L184,240 L196,290 Z" fill="url(#towerStripe)" />

          {/* Gallery railing */}
          <rect x="116" y="145" width="88" height="12" rx="2" fill="#0B3A66" />
          {[122, 140, 158, 176, 194].map((x) => (
            <rect key={x} x={x} y="136" width="3.5" height="11" fill="#D4AF37" />
          ))}
          <rect x="116" y="134" width="88" height="3" rx="1" fill="#D4AF37" opacity="0.85" />

          {/* Lantern room */}
          <rect x="132" y="96" width="56" height="42" rx="3" fill="#F8F3E8" />
          <rect
            x="136"
            y="100"
            width="14"
            height="34"
            rx="1"
            fill="#0B3A66"
            opacity="0.72"
          />
          <rect x="153" y="100" width="14" height="34" rx="1" fill="#E8F4F9" />
          <rect
            x="170"
            y="100"
            width="14"
            height="34"
            rx="1"
            fill="#0B3A66"
            opacity="0.72"
          />

          {/* Cupola */}
          <path d="M124,98 L160,58 L196,98 Z" fill="#0B3A66" />
          <path d="M132,98 L160,68 L188,98 Z" fill="#145A82" opacity="0.45" />
          <circle cx="160" cy="56" r="5" fill="#D4AF37" />
          <rect x="158" y="42" width="4" height="16" rx="1" fill="#D4AF37" />

          {/* Beacon glow */}
          <circle cx="160" cy="118" r="58" fill="url(#lanternCore)" />
          <circle cx="160" cy="118" r="10" fill="#FFF8DC" opacity="0.85" />

          {/* Door */}
          <rect x="146" y="415" width="28" height="40" rx="2" fill="#072844" />
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
      background: `linear-gradient(165deg, #E4C65A 0%, ${colors.champagne} 48%, #C9A227 100%)`,
      color: colors.navy,
      boxShadow:
        "0 18px 44px -12px rgba(212,175,55,0.55), inset 0 1px 0 rgba(255,255,255,0.35)",
    },
  } as const;

  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.035, y: -2 }}
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
                borderColor: "rgba(11,58,102,0.1)",
                background: "rgba(246,241,231,0.96)",
                backdropFilter: "blur(24px) saturate(165%)",
                WebkitBackdropFilter: "blur(24px) saturate(165%)",
                boxShadow: "0 22px 48px -18px rgba(11,58,102,0.45)",
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
          className="relative min-h-[100vh] overflow-hidden pt-28"
        >
          <CoastalIllustration />

          <div className="relative z-10 mx-auto flex min-h-[100vh] max-w-6xl items-center px-5 py-32 sm:px-8 sm:py-40 lg:py-44">
            <div className="max-w-xl lg:max-w-2xl">
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                className="text-[0.68rem] font-semibold tracking-[0.3em] sm:text-[0.72rem]"
                style={{ color: colors.champagne }}
              >
                SERVING FLORIDA&apos;S NATURE COAST
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="font-display mt-7 text-[clamp(3rem,7vw,5.75rem)] font-semibold leading-[0.98] tracking-[-0.02em]"
                style={{ color: colors.navy }}
              >
                Powering Florida&apos;s Nature Coast
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-8 text-base font-medium tracking-[0.04em] sm:text-lg"
                style={{ color: colors.navy }}
              >
                Residential • Commercial • Licensed &amp; Insured
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-8 max-w-md text-base leading-[1.75] sm:text-lg"
                style={{ color: "rgba(11,58,102,0.7)" }}
              >
                Family-owned electrical professionals delivering dependable
                service, honest workmanship, and quality craftsmanship
                throughout Florida&apos;s Nature Coast.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.75,
                  delay: 0.4,
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

              <motion.ul
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.75,
                  delay: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-14 flex flex-wrap gap-x-9 gap-y-3.5"
              >
                {trustBadges.map((badge) => (
                  <li
                    key={badge}
                    className="inline-flex items-center gap-2.5 text-sm font-medium tracking-wide"
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

        {/* Trust Bar — premium credibility strip */}
        <section
          aria-label="Trust and credentials"
          className="relative z-10 -mt-6 px-5 sm:-mt-10 sm:px-8"
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
            className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5"
          >
            {trustBar.map((item) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.title}
                  variants={fadeUp}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -6 }}
                  className="trust-card flex items-center gap-4 px-5 py-6 sm:px-6 sm:py-7"
                >
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                    style={{
                      background: `linear-gradient(145deg, ${colors.seaGlass}, rgba(220,239,247,0.35))`,
                      color: colors.navy,
                      boxShadow: "inset 0 0 0 1px rgba(11,58,102,0.05)",
                    }}
                  >
                    <Icon size={22} strokeWidth={1.5} />
                  </div>
                  <p className="font-display text-lg font-semibold leading-snug tracking-tight sm:text-[1.2rem]">
                    {item.title}
                  </p>
                </motion.article>
              );
            })}
          </motion.div>
        </section>

        <WaveDivider topColor={colors.warmSand} bottomColor={colors.warmSand} />

        {/* SECTION 3 — Services */}
        <section
          id="services"
          className="mx-auto max-w-6xl px-5 py-32 sm:px-8 sm:py-40"
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            variants={fadeUp}
            className="mx-auto max-w-2xl text-center"
          >
            <p className="section-label mb-5">What We Do</p>
            <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl lg:text-[3.5rem]">
              Our Services
            </h2>
            <p
              className="mt-7 text-base leading-relaxed sm:text-lg"
              style={{ color: "rgba(11,58,102,0.68)" }}
            >
              Comprehensive electrical solutions tailored for homes and
              businesses across Florida&apos;s Nature Coast.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            variants={stagger}
            className="mt-24 grid gap-9 sm:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <motion.article
                  key={service.title}
                  variants={fadeUp}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -10 }}
                  className="premium-card group p-9 sm:p-11"
                >
                  <div
                    className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl transition-transform duration-400 group-hover:scale-105"
                    style={{
                      background: `linear-gradient(145deg, ${colors.seaGlass}, rgba(220,239,247,0.35))`,
                      color: colors.navy,
                      boxShadow: "inset 0 0 0 1px rgba(11,58,102,0.05)",
                    }}
                  >
                    <Icon size={28} strokeWidth={1.45} />
                  </div>
                  <h3 className="font-display text-[1.65rem] font-semibold tracking-tight sm:text-[1.75rem]">
                    {service.title}
                  </h3>
                  <p
                    className="mt-5 text-base leading-relaxed"
                    style={{ color: "rgba(11,58,102,0.66)" }}
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
          bottomColor="rgba(220,239,247,0.5)"
        />

        {/* SECTION 4 — Why Choose Us */}
        <section
          className="py-32 sm:py-40"
          style={{
            background: `linear-gradient(180deg, rgba(220,239,247,0.5) 0%, ${colors.warmSand} 100%)`,
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
              <p className="section-label mb-5">Our Promise</p>
              <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl lg:text-[3.5rem]">
                Why Homeowners Choose Current Solutions
              </h2>
              <p
                className="mt-7 text-base leading-relaxed sm:text-lg"
                style={{ color: "rgba(11,58,102,0.68)" }}
              >
                Trusted local professionals who show up with integrity,
                skill, and respect for your home.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.12 }}
              variants={stagger}
              className="mt-24 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7"
            >
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <motion.article
                    key={feature.title}
                    variants={fadeUp}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ y: -10 }}
                    className="premium-card px-7 py-10 text-center sm:px-8 sm:py-11"
                  >
                    <div
                      className="mx-auto mb-7 flex h-14 w-14 items-center justify-center rounded-2xl"
                      style={{
                        background: colors.navy,
                        color: colors.champagne,
                        boxShadow: "0 12px 28px -14px rgba(11,58,102,0.5)",
                      }}
                    >
                      <Icon size={24} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-display text-[1.35rem] font-semibold tracking-tight sm:text-[1.45rem]">
                      {feature.title}
                    </h3>
                    <p
                      className="mt-4 text-[0.9375rem] leading-relaxed"
                      style={{ color: "rgba(11,58,102,0.66)" }}
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
          className="mx-auto max-w-6xl px-5 py-32 sm:px-8 sm:py-40"
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            variants={fadeUp}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="section-label mb-5">About Us</p>
            <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl lg:text-[3.5rem]">
              Powering Florida Homes with Pride
            </h2>
            <p
              className="mt-12 text-base leading-[1.85] sm:text-lg"
              style={{ color: "rgba(11,58,102,0.74)" }}
            >
              Current Solutions is a family-owned electrical company serving
              Florida&apos;s Nature Coast with honesty and care. We believe
              great work starts with craftsmanship you can trust, clear
              communication, and service that shows up when it matters—whether
              it&apos;s a simple repair, a full panel upgrade, or keeping your
              business running smoothly. Every project is handled with the same
              pride we&apos;d give our own home.
            </p>
          </motion.div>
        </section>

        <WaveDivider topColor={colors.warmSand} bottomColor={colors.navy} />

        {/* SECTION 6 — CTA */}
        <section
          id="contact"
          className="cta-surface relative overflow-hidden px-5 py-36 sm:px-8 sm:py-44"
        >
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-px opacity-40"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(212,175,55,0.7), transparent)",
            }}
          />

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
              LET&apos;S GET STARTED
            </p>
            <h2
              className="font-display text-[clamp(2.5rem,6vw,4.25rem)] font-semibold leading-[1.05] tracking-tight"
              style={{ color: colors.white }}
            >
              Ready for Your Next Electrical Project?
            </h2>
            <p
              className="mx-auto mt-9 max-w-xl text-base leading-relaxed sm:text-lg"
              style={{ color: "rgba(246,241,231,0.78)" }}
            >
              Tell us about your project and we&apos;ll provide a free,
              no-obligation quote with clear recommendations.
            </p>
            <div className="mt-16">
              <ScaleButton
                href="mailto:info@currentsolutions.example"
                variant="gold"
                className="px-14 py-6 text-lg sm:text-xl"
              >
                Request Your Free Quote
                <ArrowRight size={22} strokeWidth={2.25} />
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
        <div className="mx-auto flex max-w-6xl flex-col gap-14 px-5 py-20 sm:px-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <p className="font-display text-[1.75rem] font-semibold tracking-tight sm:text-[2rem]">
              Current Solutions Electrical Services
            </p>
            <p
              className="mt-5 text-sm tracking-wide"
              style={{ color: "rgba(11,58,102,0.65)" }}
            >
              Family Owned &amp; Operated
            </p>
            <p
              className="mt-1.5 text-sm tracking-wide"
              style={{ color: "rgba(11,58,102,0.65)" }}
            >
              Serving Florida&apos;s Nature Coast
            </p>
          </div>

          <div className="flex flex-col gap-5 text-sm tracking-wide">
            <a
              href="tel:+10000000000"
              className="inline-flex items-center gap-3 transition-opacity hover:opacity-70"
            >
              <span
                className="flex h-9 w-9 items-center justify-center rounded-xl"
                style={{
                  background: "rgba(220,239,247,0.7)",
                  color: colors.navy,
                }}
              >
                <Phone size={16} strokeWidth={1.6} />
              </span>
              (000) 000-0000
            </a>
            <a
              href="mailto:info@currentsolutions.example"
              className="inline-flex items-center gap-3 transition-opacity hover:opacity-70"
            >
              <span
                className="flex h-9 w-9 items-center justify-center rounded-xl"
                style={{
                  background: "rgba(220,239,247,0.7)",
                  color: colors.navy,
                }}
              >
                <Mail size={16} strokeWidth={1.6} />
              </span>
              info@currentsolutions.example
            </a>
          </div>
        </div>
        <div
          className="border-t py-8 text-center text-xs tracking-[0.08em]"
          style={{
            borderColor: "rgba(11,58,102,0.08)",
            color: "rgba(11,58,102,0.45)",
          }}
        >
          © {new Date().getFullYear()} Current Solutions Electrical Services.
          All rights reserved.
        </div>
      </footer>
    </div>
  );
}
