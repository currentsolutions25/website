"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Clock, Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";
import SiteShell from "@/components/SiteShell";
import WaveDivider from "@/components/WaveDivider";
import {
  BUSINESS_HOURS,
  colors,
  EMAIL,
  EMAIL_PLACEHOLDER_NOTE,
  EMERGENCY_HOURS_NOTE,
  FACEBOOK,
  fadeUp,
  PHONE_DISPLAY,
  PHONE_DISPLAY_ALT,
  PHONE_HREF,
  PHONE_HREF_ALT,
  PHONE_PLACEHOLDER_NOTE,
  PHONES,
  SERVICE_AREA_LINE,
  serviceAreas,
  stagger,
} from "@/lib/design";

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M14 8h3V4h-3c-2.8 0-5 2.2-5 5v2H6v4h3v7h4v-7h3.1l.9-4H13V9c0-.6.4-1 1-1z" />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <SiteShell>
      <main>
        <PageHero
          eyebrow="Contact"
          title="Request a Free Quote"
          description="Share a few details about your electrical project and we'll follow up with clear next steps. Contact details below include clearly labeled placeholders ready for live business information."
        />

        <WaveDivider topColor={colors.seaGlass} bottomColor={colors.warmSand} />

        {/* Emergency notice */}
        <section className="mx-auto max-w-6xl px-5 pt-10 sm:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            variants={fadeUp}
            className="flex flex-col gap-4 rounded-2xl px-6 py-5 sm:flex-row sm:items-center sm:gap-5 sm:px-8"
            style={{
              background:
                "linear-gradient(135deg, rgba(212,175,55,0.14) 0%, rgba(220,239,247,0.55) 100%)",
              boxShadow: "inset 0 0 0 1px rgba(212,175,55,0.28)",
            }}
          >
            <span
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
              style={{
                background: "rgba(255,255,255,0.75)",
                color: colors.champagne,
              }}
            >
              <AlertTriangle size={22} strokeWidth={1.75} />
            </span>
            <div>
              <p className="font-display text-xl font-semibold tracking-tight">
                Emergency Electrical Service
              </p>
              <p
                className="mt-1.5 text-sm leading-relaxed sm:text-base"
                style={{ color: "rgba(11,58,102,0.72)" }}
              >
                {EMERGENCY_HOURS_NOTE}. For urgent issues, call{" "}
                <a
                  href={PHONE_HREF}
                  className="font-semibold underline-offset-2 hover:underline"
                >
                  {PHONE_DISPLAY}
                </a>{" "}
                or{" "}
                <a
                  href={PHONE_HREF_ALT}
                  className="font-semibold underline-offset-2 hover:underline"
                >
                  {PHONE_DISPLAY_ALT}
                </a>
                .
              </p>
            </div>
          </motion.div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="grid items-start gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              variants={fadeUp}
            >
              <p className="section-label mb-5">Get In Touch</p>
              <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.75rem]">
                Let&apos;s talk through your project
              </h2>
              <p
                className="mt-6 text-base leading-[1.85] sm:text-lg"
                style={{ color: "rgba(11,58,102,0.72)" }}
              >
                Whether you need a panel upgrade, lighting install, generator
                connection, or emergency help, we&apos;re here to provide dependable
                guidance for homes and businesses across the Nature Coast.
              </p>

              <ul className="mt-10 space-y-6">
                <li>
                  <div
                    className="group inline-flex items-start gap-4 rounded-2xl p-1"
                    title={PHONE_PLACEHOLDER_NOTE}
                  >
                    <span
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                      style={{
                        background:
                          "linear-gradient(145deg, rgba(212,175,55,0.28), rgba(212,175,55,0.1))",
                        color: colors.champagne,
                        boxShadow: "inset 0 0 0 1px rgba(212,175,55,0.22)",
                      }}
                    >
                      <Phone size={20} strokeWidth={1.9} />
                    </span>
                    <span>
                      <span
                        className="block text-xs font-semibold tracking-[0.16em] uppercase"
                        style={{ color: "rgba(11,58,102,0.5)" }}
                      >
                        Phone
                      </span>
                      {PHONES.map((phone) => (
                        <a
                          key={phone.display}
                          href={phone.href}
                          className="mt-1 block text-xl font-semibold tracking-tight transition-opacity hover:opacity-75"
                        >
                          {phone.display}
                        </a>
                      ))}
                      <span
                        className="mt-1 block text-xs"
                        style={{ color: "rgba(11,58,102,0.45)" }}
                      >
                        {PHONE_PLACEHOLDER_NOTE}
                      </span>
                    </span>
                  </div>
                </li>

                <li>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="group inline-flex items-start gap-4 rounded-2xl p-1 transition-opacity duration-300 hover:opacity-80"
                    title={EMAIL_PLACEHOLDER_NOTE}
                  >
                    <span
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105"
                      style={{
                        background: `linear-gradient(145deg, ${colors.seaGlass}, rgba(220,239,247,0.35))`,
                        color: colors.navy,
                      }}
                    >
                      <Mail size={20} strokeWidth={1.6} />
                    </span>
                    <span>
                      <span
                        className="block text-xs font-semibold tracking-[0.16em] uppercase"
                        style={{ color: "rgba(11,58,102,0.5)" }}
                      >
                        Email
                      </span>
                      <span className="mt-1 block text-base font-semibold break-all sm:text-lg">
                        {EMAIL}
                      </span>
                      <span
                        className="mt-1 block text-xs"
                        style={{ color: "rgba(11,58,102,0.45)" }}
                      >
                        {EMAIL_PLACEHOLDER_NOTE}
                      </span>
                    </span>
                  </a>
                </li>

                <li className="inline-flex items-start gap-4 p-1">
                  <span
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                    style={{
                      background: `linear-gradient(145deg, ${colors.seaGlass}, rgba(220,239,247,0.35))`,
                      color: colors.navy,
                    }}
                  >
                    <Clock size={20} strokeWidth={1.6} />
                  </span>
                  <span className="w-full">
                    <span
                      className="block text-xs font-semibold tracking-[0.16em] uppercase"
                      style={{ color: "rgba(11,58,102,0.5)" }}
                    >
                      Business Hours
                    </span>
                    <ul className="mt-3 space-y-2.5">
                      {BUSINESS_HOURS.map((item) => (
                        <li
                          key={item.day}
                          className="flex flex-wrap items-baseline justify-between gap-2 border-b pb-2.5 text-sm"
                          style={{ borderColor: "rgba(11,58,102,0.08)" }}
                        >
                          <span className="font-medium">{item.day}</span>
                          <span style={{ color: "rgba(11,58,102,0.6)" }}>
                            {item.hours}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </span>
                </li>
              </ul>

              <div className="mt-10">
                <a
                  href={FACEBOOK.href}
                  title={FACEBOOK.placeholder}
                  aria-label={`Facebook — ${FACEBOOK.placeholder}`}
                  className="inline-flex items-center gap-3 rounded-2xl px-6 py-4 text-sm font-semibold tracking-wide transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90"
                  style={{
                    background: colors.navy,
                    color: colors.white,
                    boxShadow: "0 16px 36px -16px rgba(11,58,102,0.55)",
                  }}
                >
                  <FacebookIcon />
                  Follow Us on Facebook
                </a>
                <p
                  className="mt-3 text-xs"
                  style={{ color: "rgba(11,58,102,0.45)" }}
                >
                  {FACEBOOK.placeholder}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              variants={fadeUp}
            >
              <div className="mb-6">
                <p className="section-label mb-3">Quote Request</p>
                <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                  Tell us about your project
                </h2>
              </div>
              <ContactForm />
            </motion.div>
          </div>
        </section>

        {/* Service Area */}
        <section
          className="py-20 sm:py-28"
          style={{
            background: `linear-gradient(180deg, rgba(220,239,247,0.45) 0%, ${colors.warmSand} 100%)`,
          }}
        >
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              variants={fadeUp}
              className="mx-auto max-w-2xl text-center"
            >
              <p className="section-label mb-5">Service Area</p>
              <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.75rem]">
                {SERVICE_AREA_LINE}
              </h2>
              <p
                className="mt-6 text-base leading-relaxed sm:text-lg"
                style={{ color: "rgba(11,58,102,0.68)" }}
              >
                Residential and commercial electrical service across the
                counties below.
              </p>
            </motion.div>

            <motion.ul
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={stagger}
              className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5"
            >
              {serviceAreas.map((area) => {
                const Icon = area.icon;
                return (
                  <motion.li
                    key={area.slug}
                    variants={fadeUp}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ y: -4 }}
                    className="premium-card flex items-center gap-3 px-4 py-4"
                  >
                    <span
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                      style={{
                        background: `linear-gradient(145deg, ${colors.seaGlass}, rgba(220,239,247,0.35))`,
                        color: colors.navy,
                      }}
                    >
                      <Icon size={18} strokeWidth={1.5} />
                    </span>
                    <span className="font-display text-lg font-semibold tracking-tight">
                      {area.name}
                    </span>
                  </motion.li>
                );
              })}
            </motion.ul>
          </div>
        </section>

        {/* Google Map placeholder */}
        <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            variants={fadeUp}
          >
            <p className="section-label mb-5">Find Us</p>
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.75rem]">
              Service area map
            </h2>
            <p
              className="mt-5 max-w-2xl text-base leading-relaxed sm:text-lg"
              style={{ color: "rgba(11,58,102,0.68)" }}
            >
              Google Map placeholder — replace with an embedded map once the
              business address or service-area pin is finalized.
            </p>

            <div
              className="premium-card relative mt-10 flex min-h-[320px] items-center justify-center overflow-hidden sm:min-h-[400px]"
              role="img"
              aria-label="Google Map placeholder for Current Solutions service area"
            >
              <div
                className="absolute inset-0"
                style={{
                  background: `
                    radial-gradient(ellipse 50% 45% at 70% 35%, rgba(212,175,55,0.18) 0%, transparent 55%),
                    radial-gradient(ellipse 45% 50% at 25% 70%, rgba(220,239,247,0.85) 0%, transparent 50%),
                    linear-gradient(160deg, #E8F4F9 0%, ${colors.warmSand} 55%, #EDE6D8 100%)
                  `,
                }}
              />
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(11,58,102,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(11,58,102,0.08) 1px, transparent 1px)",
                  backgroundSize: "48px 48px",
                }}
              />
              <div className="relative z-10 mx-6 max-w-md text-center">
                <span
                  className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl"
                  style={{
                    background: "rgba(255,255,255,0.85)",
                    color: colors.navy,
                    boxShadow: "0 12px 28px -16px rgba(11,58,102,0.35)",
                  }}
                >
                  <MapPin size={24} strokeWidth={1.6} />
                </span>
                <p className="font-display text-2xl font-semibold tracking-tight">
                  Google Map Placeholder
                </p>
                <p
                  className="mt-3 text-sm leading-relaxed"
                  style={{ color: "rgba(11,58,102,0.65)" }}
                >
                  [Replace with Google Maps embed for Nature Coast service area]
                </p>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
    </SiteShell>
  );
}
