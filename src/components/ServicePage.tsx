"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check, ChevronDown } from "lucide-react";
import { notFound } from "next/navigation";
import { useState } from "react";
import PageHero from "@/components/PageHero";
import ScaleButton from "@/components/ScaleButton";
import SiteShell from "@/components/SiteShell";
import WaveDivider from "@/components/WaveDivider";
import {
  colors,
  fadeUp,
  PHONE_DISPLAY,
  PHONE_HREF,
  services,
  type ServiceSlug,
  stagger,
} from "@/lib/design";

function FaqAccordion({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={faq.question}
            className="premium-card overflow-hidden"
          >
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left sm:px-8 sm:py-6"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span className="font-display text-xl font-semibold tracking-tight sm:text-2xl">
                {faq.question}
              </span>
              <ChevronDown
                size={20}
                strokeWidth={1.75}
                className="shrink-0 transition-transform duration-300"
                style={{
                  color: colors.champagne,
                  transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                }}
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p
                    className="px-6 pb-6 text-base leading-[1.85] sm:px-8 sm:pb-8"
                    style={{ color: "rgba(11,58,102,0.72)" }}
                  >
                    {faq.answer}
                  </p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

export default function ServicePage({ slug }: { slug: ServiceSlug }) {
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  return (
    <SiteShell>
      <main>
        <PageHero
          eyebrow={service.heroEyebrow}
          title={service.heroTitle}
          description={service.heroDescription}
          actions={
            <>
              <ScaleButton href="/contact" variant="gold">
                Request a Quote
                <ArrowRight size={20} strokeWidth={2.25} />
              </ScaleButton>
              <ScaleButton href={PHONE_HREF} variant="secondary">
                Call {PHONE_DISPLAY}
              </ScaleButton>
            </>
          }
        />

        <WaveDivider topColor={colors.seaGlass} bottomColor={colors.warmSand} />

        {/* Overview */}
        <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
          <div className="grid items-start gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              variants={fadeUp}
            >
              <p className="section-label mb-5">Overview</p>
              <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                {service.overviewTitle}
              </h2>
              {service.overview.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 48)}
                  className="mt-7 text-base leading-[1.85] sm:text-lg"
                  style={{ color: "rgba(11,58,102,0.72)" }}
                >
                  {paragraph}
                </p>
              ))}
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={stagger}
              className="premium-card p-8 sm:p-10"
            >
              <div
                className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl"
                style={{
                  background: `linear-gradient(145deg, ${colors.seaGlass}, rgba(220,239,247,0.35))`,
                  color: colors.navy,
                }}
              >
                <Icon size={28} strokeWidth={1.45} />
              </div>
              <h3 className="font-display text-2xl font-semibold tracking-tight">
                At a glance
              </h3>
              <ul className="mt-7 space-y-4">
                {service.highlights.map((item) => (
                  <motion.li
                    key={item}
                    variants={fadeUp}
                    className="flex items-start gap-3 text-base leading-relaxed"
                    style={{ color: "rgba(11,58,102,0.74)" }}
                  >
                    <span
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                      style={{
                        background: "rgba(212,175,55,0.18)",
                        color: colors.champagne,
                      }}
                    >
                      <Check size={12} strokeWidth={2.75} />
                    </span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* What We Do */}
        <section
          className="border-y px-5 py-24 sm:px-8 sm:py-32"
          style={{
            background: `linear-gradient(180deg, rgba(220,239,247,0.35) 0%, ${colors.warmSand} 100%)`,
            borderColor: "rgba(11,58,102,0.06)",
          }}
        >
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              variants={fadeUp}
              className="max-w-2xl"
            >
              <p className="section-label mb-5">What We Do</p>
              <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                {service.whatWeDoTitle}
              </h2>
            </motion.div>

            <motion.ul
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={stagger}
              className="mt-12 grid gap-5 sm:grid-cols-2"
            >
              {service.whatWeDo.map((item) => (
                <motion.li
                  key={item}
                  variants={fadeUp}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-start gap-4 rounded-2xl px-6 py-5"
                  style={{
                    background: "rgba(255,255,255,0.72)",
                    boxShadow: "inset 0 0 0 1px rgba(11,58,102,0.06)",
                  }}
                >
                  <span
                    className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                    style={{
                      background: "rgba(212,175,55,0.18)",
                      color: colors.champagne,
                    }}
                  >
                    <Check size={12} strokeWidth={2.75} />
                  </span>
                  <span
                    className="text-base leading-relaxed"
                    style={{ color: "rgba(11,58,102,0.78)" }}
                  >
                    {item}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </section>

        {/* Why Choose */}
        <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            variants={fadeUp}
            className="mx-auto max-w-2xl text-center"
          >
            <p className="section-label mb-5">Why Choose Current Solutions</p>
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              {service.whyChooseTitle}
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger}
            className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {service.whyChoose.map((item, index) => (
              <motion.article
                key={item}
                variants={fadeUp}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="premium-card p-7 sm:p-8"
              >
                <span
                  className="font-display text-3xl font-semibold"
                  style={{ color: colors.champagne }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p
                  className="mt-5 text-base leading-relaxed"
                  style={{ color: "rgba(11,58,102,0.78)" }}
                >
                  {item}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </section>

        <WaveDivider topColor={colors.warmSand} bottomColor={colors.seaGlass} />

        {/* FAQ */}
        <section
          className="px-5 py-24 sm:px-8 sm:py-32"
          style={{ background: colors.seaGlass }}
        >
          <div className="mx-auto max-w-3xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              variants={fadeUp}
              className="mb-12 text-center"
            >
              <p className="section-label mb-5">Frequently Asked Questions</p>
              <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                Common questions about {service.shortTitle.toLowerCase()} service
              </h2>
            </motion.div>
            <FaqAccordion faqs={service.faqs} />
          </div>
        </section>

        <WaveDivider topColor={colors.seaGlass} bottomColor={colors.navy} />

        {/* CTA */}
        <section className="cta-surface relative overflow-hidden px-5 py-28 sm:px-8 sm:py-36">
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
              READY TO TALK
            </p>
            <h2
              className="font-display text-[clamp(2.25rem,5vw,3.75rem)] font-semibold leading-[1.08] tracking-tight"
              style={{ color: colors.white }}
            >
              {service.ctaTitle}
            </h2>
            <p
              className="mx-auto mt-8 max-w-xl text-base leading-relaxed sm:text-lg"
              style={{ color: "rgba(246,241,231,0.78)" }}
            >
              {service.ctaDescription}
            </p>
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <ScaleButton href="/contact" variant="gold" className="px-12 py-5">
                Request a Quote
                <ArrowRight size={20} strokeWidth={2.25} />
              </ScaleButton>
              <ScaleButton href={PHONE_HREF} variant="secondary" className="px-10 py-5">
                Call {PHONE_DISPLAY}
              </ScaleButton>
            </div>
          </motion.div>
        </section>
      </main>
    </SiteShell>
  );
}
