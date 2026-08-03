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
  fadeUp,
  PHONE_DISPLAY,
  PHONE_HREF,
  PHONE_PLACEHOLDER_NOTE,
  serviceAreas,
} from "@/lib/design";

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
                </a>
                .
              </p>
            </div>
          </motion.div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="grid items-start gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              variants={fadeUp}
            >
              <p className="section-label mb-5">Get In Touch</p>
              <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
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
                  <a
                    href={PHONE_HREF}
                    className="inline-flex items-start gap-4 transition-opacity hover:opacity-75"
                  >
                    <span
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                      style={{
                        background: `linear-gradient(145deg, ${colors.seaGlass}, rgba(220,239,247,0.35))`,
                        color: colors.navy,
                      }}
                    >
                      <Phone size={18} strokeWidth={1.6} />
                    </span>
                    <span>
                      <span
                        className="block text-xs font-semibold tracking-[0.16em] uppercase"
                        style={{ color: "rgba(11,58,102,0.5)" }}
                      >
                        Phone
                      </span>
                      <span className="mt-1 block text-lg font-semibold">
                        {PHONE_DISPLAY}
                      </span>
                      <span
                        className="mt-1 block text-xs"
                        style={{ color: "rgba(11,58,102,0.45)" }}
                      >
                        {PHONE_PLACEHOLDER_NOTE}
                      </span>
                    </span>
                  </a>
                </li>

                <li>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="inline-flex items-start gap-4 transition-opacity hover:opacity-75"
                  >
                    <span
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                      style={{
                        background: `linear-gradient(145deg, ${colors.seaGlass}, rgba(220,239,247,0.35))`,
                        color: colors.navy,
                      }}
                    >
                      <Mail size={18} strokeWidth={1.6} />
                    </span>
                    <span>
                      <span
                        className="block text-xs font-semibold tracking-[0.16em] uppercase"
                        style={{ color: "rgba(11,58,102,0.5)" }}
                      >
                        Email
                      </span>
                      <span className="mt-1 block text-base font-semibold break-all">
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

                <li className="inline-flex items-start gap-4">
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                    style={{
                      background: `linear-gradient(145deg, ${colors.seaGlass}, rgba(220,239,247,0.35))`,
                      color: colors.navy,
                    }}
                  >
                    <MapPin size={18} strokeWidth={1.6} />
                  </span>
                  <span>
                    <span
                      className="block text-xs font-semibold tracking-[0.16em] uppercase"
                      style={{ color: "rgba(11,58,102,0.5)" }}
                    >
                      Service Area
                    </span>
                    <span className="mt-1 block text-base font-semibold">
                      Florida&apos;s Nature Coast
                    </span>
                    <span
                      className="mt-2 block text-sm leading-relaxed"
                      style={{ color: "rgba(11,58,102,0.65)" }}
                    >
                      {serviceAreas.map((area) => area.name).join(" · ")}
                    </span>
                  </span>
                </li>

                <li className="inline-flex items-start gap-4">
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                    style={{
                      background: `linear-gradient(145deg, ${colors.seaGlass}, rgba(220,239,247,0.35))`,
                      color: colors.navy,
                    }}
                  >
                    <Clock size={18} strokeWidth={1.6} />
                  </span>
                  <span className="w-full">
                    <span
                      className="block text-xs font-semibold tracking-[0.16em] uppercase"
                      style={{ color: "rgba(11,58,102,0.5)" }}
                    >
                      Business Hours
                    </span>
                    <ul className="mt-3 space-y-2">
                      {BUSINESS_HOURS.map((item) => (
                        <li
                          key={item.day}
                          className="flex flex-wrap items-baseline justify-between gap-2 border-b pb-2 text-sm"
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
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              variants={fadeUp}
            >
              <ContactForm />
            </motion.div>
          </div>
        </section>

        {/* Google Map placeholder */}
        <section className="mx-auto max-w-6xl px-5 pb-24 sm:px-8 sm:pb-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            variants={fadeUp}
          >
            <p className="section-label mb-5">Find Us</p>
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Service area map
            </h2>
            <p
              className="mt-4 max-w-2xl text-base leading-relaxed"
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
