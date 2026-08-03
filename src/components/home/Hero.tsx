"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden bg-navy-deep text-warm-white md:items-center">
      <Image
        src="/images/florida-lighthouse-sunset.jpg"
        alt="Florida Nature Coast lighthouse at sunset over calm coastal waters"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      <div
        className="absolute inset-0 bg-gradient-to-r from-navy-deep/90 via-navy-deep/70 to-navy/35"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-navy-deep/40"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-28 sm:px-8 sm:pb-20 md:py-24 lg:px-12">
        <motion.p
          className="font-display text-3xl font-semibold tracking-[0.04em] text-gold-soft sm:text-4xl md:text-5xl"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.1}
        >
          Current Solutions
        </motion.p>

        <motion.p
          className="mt-2 text-sm font-light tracking-[0.22em] text-warm-white/75 uppercase sm:text-base"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.22}
        >
          Electrical Services
        </motion.p>

        <motion.h1
          className="mt-8 max-w-2xl font-display text-4xl leading-[1.12] font-medium text-warm-white sm:text-5xl md:text-6xl lg:text-[4.25rem]"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.35}
        >
          Reliable Electrical Solutions
          <span className="block text-warm-white/95">
            for Homes and Businesses
          </span>
        </motion.h1>

        <motion.div
          className="mt-8 space-y-1.5 text-base font-light tracking-wide text-warm-white/80 sm:text-lg"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.5}
        >
          <p>Family Owned & Operated</p>
          <p>Licensed & Insured</p>
          <p>Proudly Serving Florida&apos;s Nature Coast</p>
        </motion.div>

        <motion.div
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.65}
        >
          <a
            href="tel:8133775735"
            className="inline-flex items-center justify-center bg-gold px-8 py-3.5 text-sm font-medium tracking-[0.08em] text-navy-deep uppercase transition-colors duration-300 hover:bg-gold-soft"
          >
            Request a Free Quote
          </a>
          <a
            href="tel:8133775735"
            className="inline-flex items-center justify-center gap-2 border border-warm-white/40 px-8 py-3.5 text-sm font-medium tracking-[0.08em] text-warm-white uppercase transition-colors duration-300 hover:border-gold-soft hover:text-gold-soft"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            Call 813-377-5735
          </a>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.55 }}
        transition={{ delay: 1.2, duration: 1 }}
        aria-hidden="true"
      >
        <div className="h-10 w-px bg-gradient-to-b from-gold-soft to-transparent" />
      </motion.div>
    </section>
  );
}
