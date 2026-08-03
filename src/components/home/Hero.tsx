"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import WaveDivider from "@/components/ui/WaveDivider";

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
        className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-navy-deep/35"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-28 pt-40 sm:px-8 sm:pb-32 md:py-36 lg:px-12 lg:py-44">
        <motion.p
          className="font-display text-3xl font-semibold tracking-[0.05em] text-gold-soft sm:text-4xl md:text-5xl"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.1}
        >
          Current Solutions
        </motion.p>

        <motion.p
          className="mt-4 text-sm font-light tracking-[0.3em] text-warm-white/68 uppercase sm:text-base"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.22}
        >
          Electrical Services
        </motion.p>

        <motion.h1
          className="mt-14 max-w-3xl font-display text-5xl leading-[1.1] font-medium tracking-tight text-warm-white sm:mt-16 sm:text-6xl md:text-7xl lg:text-[5.35rem]"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.35}
        >
          Reliable Electrical Solutions
          <span className="mt-3 block text-warm-white/90">
            for Homes and Businesses
          </span>
        </motion.h1>

        <motion.div
          className="mt-14 max-w-xl space-y-3 text-base font-light tracking-wide text-warm-white/76 sm:mt-16 sm:text-lg"
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
          className="mt-14 flex flex-col gap-4 sm:mt-16 sm:flex-row sm:items-center"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.65}
        >
          <a href="#contact" className="btn-gold">
            Request a Free Quote
          </a>
          <a href="tel:8133775735" className="btn-ghost">
            <Phone className="h-4 w-4" aria-hidden="true" />
            Call 813-377-5735
          </a>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-16 left-1/2 z-10 hidden -translate-x-1/2 md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.45 }}
        transition={{ delay: 1.3, duration: 1.1 }}
        aria-hidden="true"
      >
        <div className="h-14 w-px bg-gradient-to-b from-gold-soft to-transparent" />
      </motion.div>

      <div className="absolute inset-x-0 bottom-0 z-20">
        <WaveDivider />
      </div>
    </section>
  );
}
