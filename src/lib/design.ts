import {
  Home,
  Building2,
  PanelTop,
  Lightbulb,
  Zap,
  Siren,
  Trees,
  Landmark,
  Waves,
  Anchor,
  Wrench,
  Shield,
  Car,
  ClipboardCheck,
  HeartHandshake,
  Clock,
  type LucideIcon,
} from "lucide-react";

export const colors = {
  navy: "#0B3A66",
  navyDeep: "#071F3A",
  seaGlass: "#DCEFF7",
  warmSand: "#F6F1E7",
  softGrey: "#F6F1E7",
  champagne: "#D4AF37",
  gold: "#D4AF37",
  /** Higher-contrast gold for navigation text/icons on light surfaces */
  goldNav: "#B88916",
  white: "#FFFFFF",
} as const;

export const SITE_NAME = "Current Solutions Electrical Services";
export const SITE_SHORT_NAME = "Current Solutions";
export const SITE_TAGLINE = "Honest. Professional. Family Owned.";
export const SITE_URL = "https://currentsolutions.example";
export const SERVICE_AREA_LINE =
  "Serving Hernando, Pasco, Citrus, Pinellas, and Hillsborough";

export const PHONE_DISPLAY = "813-377-5735";
export const PHONE_HREF = "tel:+18133775735";
export const PHONE_DISPLAY_ALT = "352-777-1770";
export const PHONE_HREF_ALT = "tel:+13527771770";
export const PHONE_PLACEHOLDER_NOTE = "24/7 Emergency Service";
export const PHONES = [
  { display: PHONE_DISPLAY, href: PHONE_HREF },
  { display: PHONE_DISPLAY_ALT, href: PHONE_HREF_ALT },
] as const;

export const EMAIL = "currentsolutions25@yahoo.com";
export const EMAIL_PLACEHOLDER_NOTE = "Project inquiries welcome";

/** Replace with real business address when available. */
export const ADDRESS_LINES = [
  "[Street Address]",
  "Nature Coast, FL",
] as const;

/** Replace with real business hours when available. */
export const BUSINESS_HOURS = [
  { day: "Monday – Friday", hours: "7:00 AM – 6:00 PM" },
  { day: "Saturday", hours: "8:00 AM – 2:00 PM" },
  { day: "Sunday", hours: "Emergency Only" },
] as const;

export const EMERGENCY_HOURS_NOTE = "24/7 Emergency Electrical Service";

/** Replace with real social profile URLs when available. */
export const socialLinks = [
  {
    label: "Facebook",
    href: "#",
    placeholder: "[Replace with Facebook URL]",
  },
  {
    label: "Instagram",
    href: "#",
    placeholder: "[Replace with Instagram URL]",
  },
  {
    label: "Google Business",
    href: "#",
    placeholder: "[Replace with Google Business URL]",
  },
] as const;

export const FACEBOOK = socialLinks[0];

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/solutions" },
  { label: "Solution Areas", href: "/service-areas" },
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

export type FaqItem = {
  question: string;
  answer: string;
};

export type Service = {
  slug: ServiceSlug;
  title: string;
  shortTitle: string;
  description: string;
  metaDescription: string;
  heroEyebrow: string;
  heroTitle: string;
  heroDescription: string;
  overviewTitle: string;
  overview: string[];
  whatWeDoTitle: string;
  whatWeDo: string[];
  whyChooseTitle: string;
  whyChoose: string[];
  faqs: FaqItem[];
  ctaTitle: string;
  ctaDescription: string;
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
    metaDescription:
      "Residential electrical services for Nature Coast homes — outlets, rewiring, ceiling fans, troubleshooting, and safety upgrades from Current Solutions.",
    heroEyebrow: "Home Electrical",
    heroTitle: "Residential Electrical Services",
    heroDescription:
      "From everyday repairs to whole-home upgrades, we bring careful, code-conscious electrical work to homes across Florida's Nature Coast.",
    overviewTitle: "Dependable electrical care for your home",
    overview: [
      "Your home’s electrical system should feel invisible when everything works — and carefully handled when it doesn’t. Current Solutions provides residential electrical services designed around safety, clarity, and lasting craftsmanship for Nature Coast homeowners.",
      "We take time to understand how you use your home, explain options in plain language, and complete each project with the same attention we’d want in our own living spaces.",
    ],
    whatWeDoTitle: "What we do for homeowners",
    whatWeDo: [
      "Outlet, switch, and GFCI upgrades throughout living spaces",
      "Home troubleshooting for flickering lights, tripped breakers, and dead circuits",
      "Ceiling fan, fixture, and appliance circuit installations",
      "Rewiring support for renovations and aging homes",
      "Safety-focused repairs and electrical system improvements",
      "Smoke detector and dedicated circuit work as needed",
    ],
    whyChooseTitle: "Why homeowners choose Current Solutions",
    whyChoose: [
      "Family-owned service that treats your home with respect",
      "Clear recommendations before work begins — no pressure, no confusion",
      "Clean job sites and careful protection of floors, furniture, and finishes",
      "Licensed and insured workmanship for peace of mind",
      "Local understanding of Florida coastal home needs",
    ],
    faqs: [
      {
        question: "What residential electrical issues can you help with?",
        answer:
          "We handle common home needs including outlet and switch upgrades, fixture installs, troubleshooting, ceiling fans, appliance circuits, and broader safety improvements. If you're unsure where to start, describe the issue and we'll help identify next steps.",
      },
      {
        question: "Do you work on older Nature Coast homes?",
        answer:
          "Yes. Many local homes have aging wiring or panels that need careful evaluation. We assess what is practical, explain options clearly, and recommend improvements that prioritize safety and everyday reliability.",
      },
      {
        question: "How do I request a residential quote?",
        answer:
          "Call us or use the contact form to share details about your project. We'll follow up to discuss scope, timing, and a clear path forward. Phone and email placeholders should be replaced with live contact details when available.",
      },
      {
        question: "Will you leave the work area tidy?",
        answer:
          "Absolutely. We protect your space during the job and leave the area clean when we're finished — because residential work should feel respectful from start to finish.",
      },
    ],
    ctaTitle: "Ready to improve your home’s electrical system?",
    ctaDescription:
      "Tell us about your residential project and we’ll help you plan the next step with clear guidance and a free quote.",
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
    metaDescription:
      "Commercial electrical services for Nature Coast businesses — tenant improvements, lighting, power upgrades, and maintenance from Current Solutions.",
    heroEyebrow: "Business Power",
    heroTitle: "Commercial Electrical Services",
    heroDescription:
      "Dependable electrical support for storefronts, offices, and local businesses that need clear communication and minimal downtime.",
    overviewTitle: "Electrical support that respects your business hours",
    overview: [
      "When your business depends on power, lighting, and reliable circuits, downtime is more than an inconvenience. Current Solutions provides commercial electrical services with practical planning, clean execution, and communication that keeps owners and managers informed.",
      "Whether you are preparing a tenant improvement, expanding capacity, or resolving an ongoing issue, we focus on solutions that support daily operations without unnecessary disruption.",
    ],
    whatWeDoTitle: "What we do for local businesses",
    whatWeDo: [
      "Tenant improvements and commercial build-out electrical work",
      "Storefront, office, and workspace lighting upgrades",
      "Panel, circuit, and power capacity expansions",
      "Dedicated circuits for equipment and workstations",
      "Maintenance visits and troubleshooting for active spaces",
      "Practical recommendations for growth and layout changes",
    ],
    whyChooseTitle: "Why businesses work with Current Solutions",
    whyChoose: [
      "Respect for schedules, customers, and active work environments",
      "Straightforward communication for owners, managers, and property contacts",
      "Clean, organized installations that look professional when the job is done",
      "Family-owned accountability with licensed and insured service",
      "Local focus on Nature Coast commercial properties",
    ],
    faqs: [
      {
        question: "Can you work around our business hours?",
        answer:
          "Whenever possible, yes. Share your preferred windows and operational constraints when you request a quote so we can plan around customers, staff, and opening hours.",
      },
      {
        question: "Do you handle tenant improvements?",
        answer:
          "We support electrical work for tenant improvements and build-outs, including lighting, outlets, circuit changes, and related upgrades that help a space fit your business needs.",
      },
      {
        question: "What should I prepare before a commercial quote?",
        answer:
          "A brief description of the space, the work you need, photos if available, and any timing constraints helps us respond more efficiently. Property access details are also useful.",
      },
      {
        question: "Do you support ongoing maintenance?",
        answer:
          "Yes. Beyond one-time projects, we can help with troubleshooting and maintenance so your electrical systems stay reliable as your business evolves.",
      },
    ],
    ctaTitle: "Let’s keep your business powered with confidence",
    ctaDescription:
      "Request a free commercial quote and we’ll discuss your timeline, scope, and the most practical path forward.",
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
    metaDescription:
      "Electrical panel upgrades for Nature Coast homes and businesses — safer capacity, cleaner organization, and modern service equipment from Current Solutions.",
    heroEyebrow: "Service Equipment",
    heroTitle: "Electrical Panel Upgrades",
    heroDescription:
      "Upgrade aging panels and service equipment for safer capacity, cleaner organization, and readiness for modern electrical demand.",
    overviewTitle: "A stronger foundation for every circuit in your property",
    overview: [
      "Your panel is the heart of the electrical system. When it is outdated, undersized, or poorly organized, everyday additions — from kitchen appliances to EV-ready planning — can become stressful and unsafe.",
      "Current Solutions helps homeowners and businesses upgrade service equipment with a focus on capacity, clarity, and long-term readiness for the way properties are actually used today.",
    ],
    whatWeDoTitle: "What panel upgrade work can include",
    whatWeDo: [
      "Replacement of aging or outdated electrical panels",
      "Service equipment upgrades for improved capacity",
      "Circuit breaker improvements and cleaner organization",
      "Load planning for renovations, appliances, and future growth",
      "Safety-focused corrections identified during evaluation",
      "Neater labeling and a more maintainable panel layout",
    ],
    whyChooseTitle: "Why choose Current Solutions for panel work",
    whyChoose: [
      "Careful evaluation before recommending an upgrade path",
      "Clear explanations of capacity needs and practical options",
      "Organized installations designed for future serviceability",
      "Safety-first approach on every service equipment project",
      "Local experience with Nature Coast residential and light commercial needs",
    ],
    faqs: [
      {
        question: "How do I know if I need a panel upgrade?",
        answer:
          "Common signs include frequent breaker trips, an older panel that cannot support new loads, limited available circuits, or equipment that no longer meets modern expectations. An on-site evaluation is the best way to confirm.",
      },
      {
        question: "Can a panel upgrade support future renovations?",
        answer:
          "Often, yes. We discuss how you plan to use the property — kitchens, workshops, generators, and other loads — so the upgrade supports both current needs and near-term growth.",
      },
      {
        question: "Will the work disrupt power?",
        answer:
          "Panel upgrades typically require a planned outage window. We’ll discuss timing in advance so you can prepare and keep the process as orderly as possible.",
      },
      {
        question: "Do you only replace panels, or can you improve existing setups?",
        answer:
          "Replacement is common, but every property is different. After evaluation, we recommend the approach that best improves safety, capacity, and organization for your situation.",
      },
    ],
    ctaTitle: "Planning a panel upgrade?",
    ctaDescription:
      "Request a free quote and we’ll help you understand capacity, options, and a clear recommendation for your property.",
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
    metaDescription:
      "Interior and exterior lighting installation for Nature Coast homes and businesses — fixtures, recessed lighting, landscape lighting, and controls from Current Solutions.",
    heroEyebrow: "Interior & Exterior",
    heroTitle: "Lighting Installation",
    heroDescription:
      "Thoughtful lighting installation that improves comfort, visibility, and the look of your home or business after dark.",
    overviewTitle: "Lighting that shapes how a space feels and functions",
    overview: [
      "Good lighting does more than brighten a room — it sets mood, improves safety, and helps a property feel finished. Current Solutions installs interior and exterior lighting with attention to placement, practicality, and clean finishing details.",
    ],
    whatWeDoTitle: "Lighting projects we commonly handle",
    whatWeDo: [
      "Interior fixture replacements and upgrades",
      "Recessed and accent lighting installations",
      "Exterior entry, pathway, and landscape lighting",
      "Dining, living, and bedroom fixture updates",
      "Dimmer and control installations for better everyday use",
      "Commercial lighting refreshes for clearer, more inviting spaces",
    ],
    whyChooseTitle: "Why clients trust us with lighting installs",
    whyChoose: [
      "Design-aware installation that balances beauty and function",
      "Careful mounting, wiring, and finishing for a polished result",
      "Helpful guidance on fixture placement and control options",
      "Respect for interiors, landscaping, and finished surfaces",
      "A family-owned team focused on clean, lasting workmanship",
    ],
    faqs: [
      {
        question: "Can you install fixtures I already purchased?",
        answer:
          "In many cases, yes. Share fixture details and photos when requesting a quote so we can confirm compatibility, mounting needs, and the best installation approach.",
      },
      {
        question: "Do you install outdoor and landscape lighting?",
        answer:
          "Yes. Exterior lighting is a popular request along the Nature Coast for safety, curb appeal, and evening usability around homes and businesses.",
      },
      {
        question: "Can lighting upgrades include dimmers or controls?",
        answer:
          "Absolutely. Dimmers and updated controls can make a space more comfortable and flexible. We can discuss options that fit how you use each room.",
      },
      {
        question: "Will you help me choose the right lighting approach?",
        answer:
          "We can offer practical guidance on placement, layers of light, and what tends to work well — while keeping recommendations grounded in your space and goals.",
      },
    ],
    ctaTitle: "Ready to refresh your lighting?",
    ctaDescription:
      "Share your interior or exterior lighting goals and we’ll provide a clear quote with practical recommendations.",
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
    metaDescription:
      "Generator connection and transfer switch installation for Nature Coast homes and businesses — storm-ready backup power support from Current Solutions.",
    heroEyebrow: "Backup Power",
    heroTitle: "Generator Connections",
    heroDescription:
      "Professional transfer switch and generator connection work designed to help keep essential power available when storms roll through.",
    overviewTitle: "Backup power planned with care for Florida weather",
    overview: [
      "Along the Nature Coast, backup power is more than a convenience — it is part of being prepared. Current Solutions provides generator connection services with a focus on proper transfer equipment, essential circuit planning, and clear guidance through the process.",
      "We help you understand how backup power can support the systems that matter most when the grid goes down.",
    ],
    whatWeDoTitle: "Generator connection services",
    whatWeDo: [
      "Transfer switch installation for safe generator use",
      "Portable generator connection support",
      "Standby generator connection coordination",
      "Essential circuit planning for refrigerators, lights, and key loads",
      "Storm-season readiness recommendations",
      "Clear walkthroughs so you understand how the system operates",
    ],
    whyChooseTitle: "Why choose Current Solutions for generator work",
    whyChoose: [
      "Safety-focused connection methods that protect your home and utility lines",
      "Practical planning around the circuits you truly need during an outage",
      "Clear communication before, during, and after installation",
      "Local awareness of Florida storm-season priorities",
      "Family-owned service with licensed and insured workmanship",
    ],
    faqs: [
      {
        question: "Do I need a transfer switch for my generator?",
        answer:
          "A properly installed transfer switch is the safe way to connect generator power to your home’s electrical system. It helps prevent dangerous backfeeding and keeps the setup organized for outage use.",
      },
      {
        question: "Can you help decide which circuits should stay powered?",
        answer:
          "Yes. We discuss essential loads — such as refrigeration, selected lighting, and other priorities — so your backup plan matches real household or business needs.",
      },
      {
        question: "Do you install generators or only the electrical connections?",
        answer:
          "Our focus is the electrical connection side, including transfer equipment and related wiring. Share your equipment plans when requesting a quote so we can clarify scope.",
      },
      {
        question: "When should I schedule generator connection work?",
        answer:
          "Earlier is better, especially ahead of peak storm season. Reach out when you are planning backup power so there is time for evaluation and proper installation.",
      },
    ],
    ctaTitle: "Planning backup power for storm season?",
    ctaDescription:
      "Request a free quote for generator connection work and we’ll help you map a safer, clearer backup power plan.",
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
    metaDescription:
      "Emergency electrical service for Nature Coast homes and businesses — urgent troubleshooting, safety guidance, and practical repairs from Current Solutions.",
    heroEyebrow: "When You Need Us Most",
    heroTitle: "Emergency Electrical Service",
    heroDescription:
      "When power issues interrupt your home or business, we’re ready to respond with steady guidance and practical repairs.",
    overviewTitle: "Calm, practical help when something feels urgent",
    overview: [
      "Electrical emergencies create stress quickly — burning smells, sudden outages, sparking outlets, or a panel that will not reset. Current Solutions provides emergency electrical support with a safety-first mindset and clear communication when you need direction most.",
      "Our goal is to stabilize the situation, explain what is happening, and outline the next responsible step.",
    ],
    whatWeDoTitle: "How we help in urgent situations",
    whatWeDo: [
      "Power outage troubleshooting for homes and businesses",
      "Urgent circuit, breaker, and panel issue response",
      "Safety-first diagnostics when something feels wrong",
      "Temporary stabilization guidance when appropriate",
      "Clear recommendations for immediate and follow-up repairs",
      "Support coordinating next steps after the urgent issue is addressed",
    ],
    whyChooseTitle: "Why call Current Solutions in an emergency",
    whyChoose: [
      "Steady guidance when the situation feels uncertain",
      "Safety prioritized before convenience or quick fixes",
      "Plain-language explanations so you understand what is happening",
      "Family-owned accountability for local homeowners and businesses",
      "A practical path from urgent issue to lasting resolution",
    ],
    faqs: [
      {
        question: "What counts as an electrical emergency?",
        answer:
          "Urgent concerns can include burning smells, sparking, repeated breaker trips that will not resolve, sudden partial outages, or any situation where electrical safety feels compromised. If you are unsure, call and describe what you are seeing.",
      },
      {
        question: "What should I do before help arrives?",
        answer:
          "If it is safe to do so, avoid using the affected area or equipment. If you smell burning or see sparking, prioritize safety and follow local emergency guidance. Never attempt repairs that put you at risk.",
      },
      {
        question: "Do you offer after-hours emergency support?",
        answer:
          "Emergency availability details should be confirmed with the live business contact information. Replace the placeholder phone number and emergency hours note with real details when ready.",
      },
      {
        question: "Will you explain what caused the issue?",
        answer:
          "Yes. After addressing the urgent concern, we aim to explain what we found and what follow-up work, if any, is recommended to reduce the chance of a repeat problem.",
      },
    ],
    ctaTitle: "Need urgent electrical help?",
    ctaDescription:
      "Call the business phone for emergency support, or request a quote for non-urgent follow-up work once the situation is stable.",
    highlights: [
      "Power outage troubleshooting",
      "Urgent circuit and panel issues",
      "Safety-first diagnostics",
      "Clear next-step recommendations",
    ],
    icon: Siren,
  },
];

export type ServiceArea = {
  slug: string;
  name: string;
  description: string;
  cardDescription: string;
  highlights: string[];
  icon: LucideIcon;
};

export const serviceAreas: ServiceArea[] = [
  {
    slug: "hernando",
    name: "Hernando",
    description:
      "Current Solutions provides residential and commercial electrical support throughout Hernando County — from panel upgrades to everyday repairs.",
    cardDescription:
      "Reliable electrical service for Hernando County homes and businesses.",
    highlights: [
      "Home electrical upgrades",
      "Panel and lighting projects",
      "Local quote response",
    ],
    icon: Trees,
  },
  {
    slug: "pasco",
    name: "Pasco",
    description:
      "Dependable electrical service for Pasco County homes and businesses across everyday repairs and planned upgrades.",
    cardDescription:
      "Dependable upgrades, repairs, and project support across Pasco County.",
    highlights: [
      "Residential troubleshooting",
      "Commercial electrical support",
      "Generator connections",
    ],
    icon: Landmark,
  },
  {
    slug: "citrus",
    name: "Citrus",
    description:
      "Electrical services for Citrus County properties that need careful, code-conscious workmanship.",
    cardDescription:
      "Careful, code-conscious electrical work throughout Citrus County.",
    highlights: [
      "Coastal home electrical care",
      "Exterior lighting installs",
      "Storm-ready planning",
    ],
    icon: Waves,
  },
  {
    slug: "pinellas",
    name: "Pinellas",
    description:
      "From panel upgrades to emergency troubleshooting, Pinellas County customers can request clear guidance and quality work.",
    cardDescription:
      "Clear guidance for panels, lighting, and urgent needs in Pinellas County.",
    highlights: [
      "Panel upgrades",
      "Emergency electrical help",
      "Fixture and outlet updates",
    ],
    icon: Anchor,
  },
  {
    slug: "hillsborough",
    name: "Hillsborough",
    description:
      "Current Solutions supports Hillsborough County homes and businesses with practical electrical solutions.",
    cardDescription:
      "Practical electrical solutions for Hillsborough County homes and businesses.",
    highlights: [
      "Residential service calls",
      "Business lighting upgrades",
      "Circuit improvements",
    ],
    icon: Building2,
  },
];

export type SolutionCard = {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  images?: string[];
};

/** Premium Solutions page offerings — brand-forward listing */
export const solutions: SolutionCard[] = [
  {
    slug: "residential",
    title: "Residential Solutions",
    description:
      "Safe, dependable electrical solutions for homes throughout Florida's Nature Coast.",
    icon: Home,
    images: [
      "/images/solutions/residential-pendant-install.jpg",
      "/images/solutions/residential-recessed-lighting.jpg",
      "/images/solutions/residential-coastal-interior.jpg",
    ],
  },
  {
    slug: "commercial",
    title: "Commercial Solutions",
    description:
      "Professional electrical solutions for offices, retail spaces, restaurants, and commercial properties.",
    icon: Building2,
    images: [
      "/images/solutions/commercial-office-wiring.jpg",
      "/images/solutions/commercial-restaurant-lighting.jpg",
      "/images/solutions/commercial-retail-buildout.jpg",
    ],
  },
  {
    slug: "lighting",
    title: "Lighting Solutions",
    description:
      "Indoor lighting, outdoor lighting, landscape lighting, security lighting, and LED upgrades.",
    icon: Lightbulb,
    images: [
      "/images/solutions/lighting-coastal-pathway.jpg",
      "/images/solutions/lighting-modern-exterior.jpg",
      "/images/solutions/lighting-interior-layered.jpg",
    ],
  },
  {
    slug: "electrical-repair",
    title: "Electrical Repair Solutions",
    description:
      "Troubleshooting, breaker issues, outlets, switches, storm damage, and electrical repairs.",
    icon: Wrench,
  },
  {
    slug: "panel-upgrades",
    title: "Panel Upgrade Solutions",
    description:
      "Safe electrical panel upgrades for growing electrical needs and older homes.",
    icon: PanelTop,
    images: [
      "/images/solutions/panel-upgrade-electrician-work.jpg",
      "/images/solutions/panel-upgrade-inspection.jpg",
      "/images/solutions/panel-upgrade-modern-panel.jpg",
    ],
  },
  {
    slug: "surge-protection",
    title: "Whole-Home Surge Protection Solutions",
    description:
      "Protection for valuable electronics and appliances from Florida storms and power surges.",
    icon: Shield,
  },
  {
    slug: "ev-charging",
    title: "EV Charging Solutions",
    description:
      "Professional installation of residential and commercial EV charging stations.",
    icon: Car,
    images: [
      "/images/solutions/ev-charging-garage-station.jpg",
      "/images/solutions/ev-charging-installation-service.jpg",
      "/images/solutions/ev-charging-brick-install.jpg",
    ],
  },
  {
    slug: "backup-power",
    title: "Backup Power Solutions",
    description:
      "Standby generator connections, transfer switches, and storm-ready backup power for Nature Coast homes and businesses.",
    icon: Zap,
    images: [
      "/images/solutions/backup-power-luxury-standby.jpg",
      "/images/solutions/backup-power-dual-generators.jpg",
      "/images/solutions/backup-power-home-generator.jpg",
    ],
  },
  {
    slug: "maintenance",
    title: "Maintenance Solutions",
    description:
      "Preventive maintenance and inspections to keep electrical systems operating safely.",
    icon: ClipboardCheck,
  },
];

export const whyChooseSolutions: { title: string; icon: LucideIcon }[] = [
  { title: "Licensed & Insured", icon: Shield },
  { title: "Family Owned", icon: Home },
  { title: "Honest Communication", icon: ClipboardCheck },
  { title: "Quality Workmanship", icon: Wrench },
  { title: "Respect for Your Home", icon: HeartHandshake },
  { title: "Reliable Scheduling", icon: Clock },
  { title: "Serving Florida's Nature Coast", icon: Waves },
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

export function buildPageMetadata({
  title,
  description,
  path = "",
}: {
  title: string;
  description: string;
  path?: string;
}) {
  const url = `${SITE_URL}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_US",
      type: "website" as const,
    },
    twitter: {
      card: "summary_large_image" as const,
      title,
      description,
    },
  };
}
