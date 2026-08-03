import { Facebook, Mail, Phone } from "lucide-react";
import type { NavItem } from "@/types";

const quickLinks: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#our-work" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-navy-deep text-warm-white"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(196,163,90,0.1),transparent_55%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-[1.5fr_1fr_1fr] lg:gap-16">
          <div>
            <p className="font-display text-3xl font-semibold tracking-[0.03em] text-warm-white sm:text-4xl">
              Current Solutions
            </p>
            <p className="mt-2 text-sm font-light tracking-[0.22em] text-gold-soft uppercase">
              Electrical Services
            </p>
            <p className="mt-6 max-w-md text-base leading-relaxed text-warm-white/70">
              Family Owned & Operated
              <br />
              Serving Florida&apos;s Nature Coast
            </p>

            <div className="mt-8 space-y-3 text-sm text-warm-white/80">
              <a
                href="tel:8133775735"
                className="flex items-center gap-3 transition-colors duration-300 hover:text-gold-soft"
              >
                <Phone className="h-4 w-4 text-gold" aria-hidden="true" />
                813-377-5735
              </a>
              <a
                href="tel:3527771170"
                className="flex items-center gap-3 transition-colors duration-300 hover:text-gold-soft"
              >
                <Phone className="h-4 w-4 text-gold" aria-hidden="true" />
                352-777-1170
              </a>
              <a
                href="mailto:currentsolutions25@yahoo.com"
                className="flex items-center gap-3 transition-colors duration-300 hover:text-gold-soft"
              >
                <Mail className="h-4 w-4 text-gold" aria-hidden="true" />
                currentsolutions25@yahoo.com
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-xs font-medium tracking-[0.28em] text-gold-soft uppercase">
              Quick Links
            </h2>
            <ul className="mt-6 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm tracking-wide text-warm-white/75 transition-colors duration-300 hover:text-gold-soft"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-medium tracking-[0.28em] text-gold-soft uppercase">
              Connect
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-warm-white/65">
              Stay connected with Current Solutions across the Nature Coast.
            </p>
            <ul className="mt-6 flex items-center gap-3">
              <li>
                <a
                  href="#"
                  aria-label="Facebook (placeholder)"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-warm-white/80 transition-all duration-300 hover:border-gold/45 hover:bg-gold/10 hover:text-gold-soft"
                >
                  <Facebook
                    className="h-4 w-4"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-sm text-warm-white/50 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} Current Solutions Electrical Services
          </p>
          <p className="tracking-wide">Family Owned & Operated</p>
        </div>
      </div>
    </footer>
  );
}
