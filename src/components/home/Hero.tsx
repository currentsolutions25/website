"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-end overflow-hidden bg-navy-deep text-warm-white md:items-center"
    >
      <Image
        src="/images/florida-lighthouse-sunset.jpg"
        alt="Florida Nature Coast lighthouse at sunset over calm coastal waters"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Soft lighthouse beam — calming sweep across the sky */}
      <div className="lighthouse-beam" aria-hidden="true">
        <div className="lighthouse-beam__cone" />
      </div>

      <div
        className="absolute inset-0 bg-gradient-to-r from-navy-deep/88 via-navy-deep/55 to-navy/20"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-navy-deep/75 via-transparent to-navy-deep/35"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-36 sm:px-8 sm:pb-24 md:py-32 lg:px-12 lg:py-36">
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
          className="mt-3 text-sm font-light tracking-[0.26em] text-warm-white/70 uppercase sm:text-base"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.22}
        >
          Electrical Services
        </motion.p>

        <motion.h1
          className="mt-12 max-w-3xl font-display text-5xl leading-[1.08] font-medium text-warm-white sm:mt-14 sm:text-6xl md:text-7xl lg:text-[5.25rem]"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.35}
        >
          Reliable Electrical Solutions
          <span className="mt-2 block text-warm-white/92">
            for Homes and Businesses
          </span>
        </motion.h1>

        <motion.div
          className="mt-12 max-w-xl space-y-2.5 text-base font-light tracking-wide text-warm-white/78 sm:mt-14 sm:text-lg"
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
          className="mt-12 flex flex-col gap-4 sm:mt-14 sm:flex-row sm:items-center"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.65}
        >
          <a href="tel:8133775735" className="btn-gold">
            Request a Free Quote
          </a>
          <a href="tel:8133775735" className="btn-ghost">
            <Phone className="h-4 w-4" aria-hidden="true" />
            Call 813-377-5735
          </a>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1.3, duration: 1.1 }}
        aria-hidden="true"
      >
        <div className="h-12 w-px bg-gradient-to-b from-gold-soft to-transparent" />
      </motion.div>
    </section>
  );
}
