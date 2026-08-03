"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import ScaleButton from "@/components/ScaleButton";
import SiteShell from "@/components/SiteShell";
import WaveDivider from "@/components/WaveDivider";
import { colors, fadeUp, stagger } from "@/lib/design";

const categories = [
  "All",
  "Residential",
  "Commercial",
  "Lighting",
  "Panels",
  "Generators",
] as const;

type Category = (typeof categories)[number];

type GalleryItem = {
  id: string;
  title: string;
  category: Exclude<Category, "All">;
  caption: string;
  tone: string;
};

const galleryItems: GalleryItem[] = [
  {
    id: "1",
    title: "Coastal Home Panel Refresh",
    category: "Panels",
    caption: "Placeholder for a completed residential panel upgrade.",
    tone: "linear-gradient(145deg, #DCEFF7 0%, #F6F1E7 100%)",
  },
  {
    id: "2",
    title: "Storefront Lighting Upgrade",
    category: "Commercial",
    caption: "Placeholder for a commercial lighting installation.",
    tone: "linear-gradient(145deg, #F6F1E7 0%, #E8D48A 55%, #DCEFF7 100%)",
  },
  {
    id: "3",
    title: "Warm Exterior Path Lighting",
    category: "Lighting",
    caption: "Placeholder for an exterior lighting project.",
    tone: "linear-gradient(160deg, #0B3A66 0%, #145A82 45%, #D4AF37 100%)",
  },
  {
    id: "4",
    title: "Generator Transfer Setup",
    category: "Generators",
    caption: "Placeholder for a generator connection project.",
    tone: "linear-gradient(145deg, #072844 0%, #0B3A66 50%, #DCEFF7 100%)",
  },
  {
    id: "5",
    title: "Kitchen Circuit Improvements",
    category: "Residential",
    caption: "Placeholder for residential electrical improvements.",
    tone: "linear-gradient(145deg, #F6F1E7 0%, #DCEFF7 100%)",
  },
  {
    id: "6",
    title: "Office Suite Power Expansion",
    category: "Commercial",
    caption: "Placeholder for commercial power upgrades.",
    tone: "linear-gradient(145deg, #DCEFF7 0%, #FFFFFF 50%, #F6F1E7 100%)",
  },
  {
    id: "7",
    title: "Dining Room Fixture Install",
    category: "Lighting",
    caption: "Placeholder for an interior lighting install.",
    tone: "linear-gradient(145deg, #E8D48A 0%, #F6F1E7 55%, #DCEFF7 100%)",
  },
  {
    id: "8",
    title: "Service Panel Organization",
    category: "Panels",
    caption: "Placeholder for a tidy, modernized panel project.",
    tone: "linear-gradient(145deg, #0B3A66 0%, #DCEFF7 100%)",
  },
  {
    id: "9",
    title: "Storm-Ready Backup Connection",
    category: "Generators",
    caption: "Placeholder for storm-season generator work.",
    tone: "linear-gradient(145deg, #145A82 0%, #F6F1E7 100%)",
  },
];

export default function GalleryClient() {
  const [active, setActive] = useState<Category>("All");

  const filtered = useMemo(() => {
    if (active === "All") return galleryItems;
    return galleryItems.filter((item) => item.category === active);
  }, [active]);

  return (
    <SiteShell>
      <main>
        <PageHero
          eyebrow="Project Gallery"
          title="A Look at Work Across the Nature Coast"
          description="These elegant placeholder cards are ready for future project photos spanning residential, commercial, lighting, panels, and generator work."
        />

        <WaveDivider topColor={colors.seaGlass} bottomColor={colors.warmSand} />

        <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => {
              const isActive = active === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActive(category)}
                  className="rounded-2xl px-5 py-2.5 text-sm font-semibold tracking-wide transition-all duration-300"
                  style={{
                    background: isActive
                      ? colors.navy
                      : "rgba(255,255,255,0.72)",
                    color: isActive ? colors.white : colors.navy,
                    boxShadow: isActive
                      ? "0 14px 28px -16px rgba(11,58,102,0.45)"
                      : "inset 0 0 0 1px rgba(11,58,102,0.12)",
                  }}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <motion.div
            key={active}
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filtered.map((item) => (
              <motion.article
                key={item.id}
                variants={fadeUp}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8 }}
                className="premium-card overflow-hidden"
              >
                <div
                  className="relative aspect-[4/3]"
                  style={{ background: item.tone }}
                >
                  <div
                    className="absolute inset-0 opacity-30"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.55), transparent 40%), radial-gradient(circle at 80% 70%, rgba(212,175,55,0.28), transparent 35%)",
                    }}
                  />
                  <span
                    className="absolute left-4 top-4 rounded-xl px-3 py-1.5 text-xs font-semibold tracking-[0.14em] uppercase"
                    style={{
                      background: "rgba(246,241,231,0.9)",
                      color: colors.navy,
                    }}
                  >
                    {item.category}
                  </span>
                </div>
                <div className="p-7">
                  <h3 className="font-display text-2xl font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <p
                    className="mt-3 text-sm leading-relaxed"
                    style={{ color: "rgba(11,58,102,0.66)" }}
                  >
                    {item.caption}
                  </p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </section>

        <WaveDivider topColor={colors.warmSand} bottomColor={colors.navy} />

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
              HAVE A PROJECT IN MIND?
            </p>
            <h2
              className="font-display text-[clamp(2.25rem,5vw,3.75rem)] font-semibold leading-[1.08] tracking-tight"
              style={{ color: colors.white }}
            >
              Let&apos;s create your next success story
            </h2>
            <div className="mt-12">
              <ScaleButton href="/contact" variant="gold" className="px-12 py-5">
                Request a Quote
                <ArrowRight size={20} strokeWidth={2.25} />
              </ScaleButton>
            </div>
          </motion.div>
        </section>
      </main>
    </SiteShell>
  );
}
