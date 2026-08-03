"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";
import SiteShell from "@/components/SiteShell";
import WaveDivider from "@/components/WaveDivider";
import {
  colors,
  EMAIL,
  fadeUp,
  PHONE_DISPLAY,
  PHONE_HREF,
} from "@/lib/design";

const contactDetails = [
  {
    label: "Phone",
    value: PHONE_DISPLAY,
    href: PHONE_HREF,
    icon: Phone,
  },
  {
    label: "Email",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    icon: Mail,
  },
  {
    label: "Service Area",
    value: "Florida's Nature Coast",
    href: undefined,
    icon: MapPin,
  },
];

export default function ContactPage() {
  return (
    <SiteShell>
      <main>
        <PageHero
          eyebrow="Contact"
          title="Request a Free Quote"
          description="Share a few details about your electrical project and we'll follow up with clear next steps. The form below is UI-only for now."
        />

        <WaveDivider topColor={colors.seaGlass} bottomColor={colors.warmSand} />

        <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
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

              <ul className="mt-10 space-y-5">
                {contactDetails.map((detail) => {
                  const Icon = detail.icon;
                  const content = (
                    <>
                      <span
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                        style={{
                          background: `linear-gradient(145deg, ${colors.seaGlass}, rgba(220,239,247,0.35))`,
                          color: colors.navy,
                        }}
                      >
                        <Icon size={18} strokeWidth={1.6} />
                      </span>
                      <span>
                        <span
                          className="block text-xs font-semibold tracking-[0.16em] uppercase"
                          style={{ color: "rgba(11,58,102,0.5)" }}
                        >
                          {detail.label}
                        </span>
                        <span className="mt-1 block text-base font-medium">
                          {detail.value}
                        </span>
                      </span>
                    </>
                  );

                  return (
                    <li key={detail.label}>
                      {detail.href ? (
                        <a
                          href={detail.href}
                          className="inline-flex items-center gap-4 transition-opacity hover:opacity-75"
                        >
                          {content}
                        </a>
                      ) : (
                        <div className="inline-flex items-center gap-4">
                          {content}
                        </div>
                      )}
                    </li>
                  );
                })}
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
      </main>
    </SiteShell>
  );
}
