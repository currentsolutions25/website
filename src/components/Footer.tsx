import { Clock, Mail, Phone } from "lucide-react";
import Link from "next/link";
import {
  BUSINESS_HOURS,
  colors,
  EMAIL,
  navLinks,
  PHONE_DISPLAY,
  PHONE_HREF,
  serviceAreas,
  services,
  SITE_NAME,
  socialLinks,
} from "@/lib/design";

const footerNav = navLinks.filter((link) => link.href !== "/#services");

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
      className="border-t"
      style={{
        background: colors.warmSand,
        borderColor: "rgba(11,58,102,0.08)",
      }}
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr_0.85fr_1fr]">
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <span
                className="flex h-12 w-12 items-center justify-center rounded-xl"
                style={{
                  background: `linear-gradient(145deg, ${colors.seaGlass}, rgba(220,239,247,0.4))`,
                  boxShadow: "inset 0 0 0 1px rgba(11,58,102,0.08)",
                }}
                aria-hidden="true"
              >
                <span className="font-display text-xl font-semibold">CS</span>
              </span>
              <div>
                <p className="font-display text-[1.55rem] font-semibold tracking-tight leading-tight">
                  Current Solutions
                </p>
                <p
                  className="text-xs font-medium tracking-[0.14em] uppercase"
                  style={{ color: "rgba(11,58,102,0.5)" }}
                >
                  Electrical Services
                </p>
              </div>
            </div>
            <p
              className="mt-6 text-sm leading-relaxed tracking-wide"
              style={{ color: "rgba(11,58,102,0.65)" }}
            >
              Family Owned &amp; Operated · Serving Florida&apos;s Nature Coast
            </p>
            <div className="mt-7 flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={`${social.label} — ${social.placeholder}`}
                  title={social.placeholder}
                  className="flex h-10 w-10 items-center justify-center rounded-xl transition-opacity hover:opacity-70"
                  style={{
                    background: "rgba(220,239,247,0.7)",
                    color: colors.navy,
                  }}
                >
                  <SocialIcon label={social.label} />
                </a>
              ))}
            </div>
            <p
              className="mt-4 text-xs leading-relaxed"
              style={{ color: "rgba(11,58,102,0.45)" }}
            >
              Social links are placeholders for replacement with live profiles.
            </p>
          </div>

          <div>
            <p className="section-label mb-5">Navigation</p>
            <ul className="flex flex-col gap-3 text-sm tracking-wide">
              {footerNav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-opacity hover:opacity-70"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="section-label mb-5">Services</p>
            <ul className="flex flex-col gap-3 text-sm tracking-wide">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="transition-opacity hover:opacity-70"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="section-label mb-4 mt-10">Service Areas</p>
            <ul className="flex flex-col gap-2.5 text-sm tracking-wide">
              {serviceAreas.slice(0, 5).map((area) => (
                <li key={area.slug}>
                  <Link
                    href="/service-areas"
                    className="transition-opacity hover:opacity-70"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/service-areas"
                  className="font-medium transition-opacity hover:opacity-70"
                  style={{ color: colors.champagne }}
                >
                  View all areas →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="section-label mb-5">Contact</p>
            <ul className="flex flex-col gap-5 text-sm tracking-wide">
              <li>
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-start gap-3 transition-opacity hover:opacity-70"
                >
                  <span
                    className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
                    style={{
                      background: "rgba(220,239,247,0.7)",
                      color: colors.navy,
                    }}
                  >
                    <Phone size={16} strokeWidth={1.6} />
                  </span>
                  <span>
                    <span className="block font-medium">{PHONE_DISPLAY}</span>
                    <span
                      className="mt-1 block text-xs"
                      style={{ color: "rgba(11,58,102,0.45)" }}
                    >
                      [Replace with real phone number]
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-start gap-3 transition-opacity hover:opacity-70"
                >
                  <span
                    className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
                    style={{
                      background: "rgba(220,239,247,0.7)",
                      color: colors.navy,
                    }}
                  >
                    <Mail size={16} strokeWidth={1.6} />
                  </span>
                  <span>
                    <span className="block font-medium break-all">{EMAIL}</span>
                    <span
                      className="mt-1 block text-xs"
                      style={{ color: "rgba(11,58,102,0.45)" }}
                    >
                      [Replace with real email address]
                    </span>
                  </span>
                </a>
              </li>
              <li className="inline-flex items-start gap-3">
                <span
                  className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
                  style={{
                    background: "rgba(220,239,247,0.7)",
                    color: colors.navy,
                  }}
                >
                  <Clock size={16} strokeWidth={1.6} />
                </span>
                <span>
                  <span className="mb-2 block font-medium">Business Hours</span>
                  <ul className="space-y-1.5" style={{ color: "rgba(11,58,102,0.65)" }}>
                    {BUSINESS_HOURS.map((item) => (
                      <li key={item.day}>
                        <span className="block">{item.day}</span>
                        <span className="text-xs">{item.hours}</span>
                      </li>
                    ))}
                  </ul>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        className="border-t py-8 text-center text-xs tracking-[0.08em]"
        style={{
          borderColor: "rgba(11,58,102,0.08)",
          color: "rgba(11,58,102,0.45)",
        }}
      >
        © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
      </div>
    </footer>
  );
}
