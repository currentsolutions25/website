import { Clock, Mail, MapPin, Phone, Zap } from "lucide-react";
import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";
import {
  ADDRESS_LINES,
  BUSINESS_HOURS,
  colors,
  EMAIL,
  EMAIL_PLACEHOLDER_NOTE,
  navLinks,
  PHONES,
  PHONE_HREF,
  SERVICE_AREA_LINE,
  serviceAreas,
  services,
  SITE_NAME,
  socialLinks,
} from "@/lib/design";

const quickLinks = navLinks.filter((link) => link.href !== "/#services");

function SocialIcon({ label }: { label: string }) {
  if (label === "Facebook") {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M14 8h3V4h-3c-2.8 0-5 2.2-5 5v2H6v4h3v7h4v-7h3.1l.9-4H13V9c0-.6.4-1 1-1z" />
      </svg>
    );
  }
  if (label === "Instagram") {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
  }
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.8 3.8 5.8 3.8 9S14.5 18.2 12 21c-2.5-2.8-3.8-5.8-3.8-9S9.5 5.8 12 3z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer
      style={{
        background: colors.navyDeep,
        color: colors.warmSand,
      }}
    >
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-3">
            <div className="flex items-center">
              <BrandLogo height={80} />
            </div>
            <p
              className="mt-5 max-w-xs text-sm leading-relaxed"
              style={{ color: "rgba(246,241,231,0.68)" }}
            >
              {SERVICE_AREA_LINE} with honest, professional, family-owned
              electrical service.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={`${social.label} — ${social.placeholder}`}
                  title={social.placeholder}
                  className="flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    background: "rgba(220,239,247,0.1)",
                    color: colors.seaGlass,
                  }}
                >
                  <SocialIcon label={social.label} />
                </a>
              ))}
            </div>

            <p
              className="mt-8 text-xs tracking-wide"
              style={{ color: "rgba(246,241,231,0.4)" }}
            >
              © {new Date().getFullYear()} {SITE_NAME}
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <p
              className="mb-5 text-[0.68rem] font-bold tracking-[0.22em] uppercase"
              style={{ color: colors.gold }}
            >
              Quick Links
            </p>
            <ul className="flex flex-col gap-3 text-sm tracking-wide">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-opacity duration-300 hover:opacity-70"
                    style={{ color: "rgba(246,241,231,0.78)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <p
              className="mb-5 text-[0.68rem] font-bold tracking-[0.22em] uppercase"
              style={{ color: colors.gold }}
            >
              Our Services
            </p>
            <ul className="flex flex-col gap-3 text-sm tracking-wide">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="transition-opacity duration-300 hover:opacity-70"
                    style={{ color: "rgba(246,241,231,0.78)" }}
                  >
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div className="lg:col-span-2">
            <p
              className="mb-5 text-[0.68rem] font-bold tracking-[0.22em] uppercase"
              style={{ color: colors.gold }}
            >
              Service Areas
            </p>
            <ul className="flex flex-col gap-2.5 text-sm tracking-wide">
              {serviceAreas.slice(0, 8).map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/service-areas#${area.slug}`}
                    className="transition-opacity duration-300 hover:opacity-70"
                    style={{ color: "rgba(246,241,231,0.78)" }}
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/service-areas"
                  className="font-semibold transition-opacity duration-300 hover:opacity-70"
                  style={{ color: colors.gold }}
                >
                  View all areas →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <p
              className="mb-5 text-[0.68rem] font-bold tracking-[0.22em] uppercase"
              style={{ color: colors.gold }}
            >
              Contact Us
            </p>
            <ul className="space-y-4">
              {PHONES.map((phone) => (
                <li key={phone.display}>
                  <a
                    href={phone.href}
                    className="inline-flex items-start gap-3 transition-opacity duration-300 hover:opacity-80"
                  >
                    <Phone size={16} strokeWidth={1.8} style={{ color: colors.gold, marginTop: 2 }} />
                    <span className="text-sm font-semibold text-white">
                      {phone.display}
                    </span>
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-start gap-3 transition-opacity duration-300 hover:opacity-80"
                  title={EMAIL_PLACEHOLDER_NOTE}
                >
                  <Mail size={16} strokeWidth={1.6} style={{ color: colors.seaGlass, marginTop: 2 }} />
                  <span className="text-sm font-semibold break-all text-white">
                    {EMAIL}
                  </span>
                </a>
              </li>
              <li className="inline-flex items-start gap-3">
                <MapPin size={16} strokeWidth={1.6} style={{ color: colors.seaGlass, marginTop: 2 }} />
                <span
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(246,241,231,0.72)" }}
                >
                  {ADDRESS_LINES.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </span>
              </li>
              <li className="inline-flex items-start gap-3">
                <Clock size={16} strokeWidth={1.6} style={{ color: colors.seaGlass, marginTop: 2 }} />
                <ul className="space-y-1.5 text-sm">
                  {BUSINESS_HOURS.map((item) => (
                    <li key={item.day}>
                      <span className="font-medium text-white">{item.day}</span>
                      <span
                        className="ml-2"
                        style={{ color: "rgba(246,241,231,0.6)" }}
                      >
                        {item.hours}
                      </span>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>

            <div
              className="mt-8 rounded-xl px-5 py-5"
              style={{
                border: `1.5px solid ${colors.gold}`,
                background: "rgba(212,175,55,0.08)",
              }}
            >
              <div className="flex items-center gap-2" style={{ color: colors.gold }}>
                <Zap size={18} strokeWidth={2.2} fill="currentColor" />
                <p className="text-[0.72rem] font-bold tracking-[0.16em] uppercase">
                  24/7 Emergency Service
                </p>
              </div>
              <p
                className="mt-2 text-sm leading-relaxed"
                style={{ color: "rgba(246,241,231,0.72)" }}
              >
                Need urgent electrical help? We&apos;re ready day or night.
              </p>
              <a
                href={PHONE_HREF}
                className="cta-gold mt-4 inline-flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-3 text-[0.75rem] font-bold tracking-[0.14em] uppercase"
                style={{ color: colors.navy }}
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
