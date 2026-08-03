import {
  Home,
  Building2,
  PanelTop,
  Lightbulb,
  Zap,
  Siren,
  type LucideIcon,
} from "lucide-react";

export const colors = {
  navy: "#0B3A66",
  seaGlass: "#DCEFF7",
  warmSand: "#F6F1E7",
  champagne: "#D4AF37",
  white: "#FFFFFF",
} as const;

export const PHONE_DISPLAY = "(352) XXX-XXXX";
export const PHONE_HREF = "tel:+13520000000";
export const EMAIL = "info@currentsolutions.example";

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
] as const;

export type ServiceSlug =
  | "residential"
  | "commercial"
  | "panel-upgrades"
  | "lighting"
  | "generator-connections"
  | "emergency-service";

export type Service = {
  slug: ServiceSlug;
  title: string;
  shortTitle: string;
  description: string;
  heroEyebrow: string;
  heroTitle: string;
  heroDescription: string;
  highlights: string[];
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    slug: "residential",
    title: "Residential Electrical",
    shortTitle: "Residential",
    description:
      "Safe, code-compliant wiring and upgrades for Florida homes along the Nature Coast.",
    heroEyebrow: "Home Electrical",
    heroTitle: "Residential Electrical Services",
    heroDescription:
      "From everyday repairs to whole-home upgrades, we bring careful, code-conscious electrical work to homes across Florida's Nature Coast.",
    highlights: [
      "Outlet, switch, and fixture upgrades",
      "Home rewiring and troubleshooting",
      "Ceiling fans and appliance circuits",
      "Safety inspections and repairs",
    ],
    icon: Home,
  },
  {
    slug: "commercial",
    title: "Commercial Electrical",
    shortTitle: "Commercial",
    description:
      "Reliable electrical systems that keep your business powered and productive.",
    heroEyebrow: "Business Power",
    heroTitle: "Commercial Electrical Services",
    heroDescription:
      "Dependable electrical support for storefronts, offices, and local businesses that need clear communication and minimal downtime.",
    highlights: [
      "Tenant improvements and build-outs",
      "Lighting and power upgrades",
      "Panel and circuit expansions",
      "Maintenance and troubleshooting",
    ],
    icon: Building2,
  },
  {
    slug: "panel-upgrades",
    title: "Panel Upgrades",
    shortTitle: "Panels",
    description:
      "Modern service panels built for today's demand and tomorrow's growth.",
    heroEyebrow: "Service Equipment",
    heroTitle: "Electrical Panel Upgrades",
    heroDescription:
      "Upgrade aging panels and service equipment for safer capacity, cleaner organization, and readiness for modern electrical demand.",
    highlights: [
      "Panel replacements and upgrades",
      "Circuit breaker improvements",
      "Capacity planning for new loads",
      "Cleaner, safer service equipment",
    ],
    icon: PanelTop,
  },
  {
    slug: "lighting",
    title: "Lighting Installation",
    shortTitle: "Lighting",
    description:
      "Interior and exterior lighting that elevates comfort, safety, and curb appeal.",
    heroEyebrow: "Interior & Exterior",
    heroTitle: "Lighting Installation",
    heroDescription:
      "Thoughtful lighting installation that improves comfort, visibility, and the look of your home or business after dark.",
    highlights: [
      "Interior fixture upgrades",
      "Exterior and landscape lighting",
      "Recessed and accent lighting",
      "Dimmer and control installations",
    ],
    icon: Lightbulb,
  },
  {
    slug: "generator-connections",
    title: "Generator Connections",
    shortTitle: "Generators",
    description:
      "Professional generator transfer switch installation for storm-ready backup power.",
    heroEyebrow: "Backup Power",
    heroTitle: "Generator Connections",
    heroDescription:
      "Professional transfer switch and generator connection work designed to help keep essential power available when storms roll through.",
    highlights: [
      "Transfer switch installation",
      "Portable and standby generator connections",
      "Essential circuit planning",
      "Storm-season readiness support",
    ],
    icon: Zap,
  },
  {
    slug: "emergency-service",
    title: "Emergency Service",
    shortTitle: "Emergency",
    description:
      "Prompt response when you need electrical help most—day or night.",
    heroEyebrow: "When You Need Us Most",
    heroTitle: "Emergency Electrical Service",
    heroDescription:
      "When power issues interrupt your home or business, we’re ready to respond with steady guidance and practical repairs.",
    highlights: [
      "Power outage troubleshooting",
      "Urgent circuit and panel issues",
      "Safety-first diagnostics",
      "Clear next-step recommendations",
    ],
    icon: Siren,
  },
];

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

export const serviceNeededOptions = [
  "Residential Electrical",
  "Commercial Electrical",
  "Panel Upgrades",
  "Lighting Installation",
  "Generator Connections",
  "Emergency Service",
  "Other / Not Sure",
] as const;
