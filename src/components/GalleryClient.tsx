"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { ArrowRight, Expand, X } from "lucide-react";
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
  location: string;
  tone: string;
};

const galleryItems: GalleryItem[] = [
  {
    id: "1",
    title: "Coastal Home Panel Refresh",
    category: "Panels",
    caption: "[Placeholder project image] Residential panel upgrade — replace with finished photo.",
    location: "[City, FL]",
    tone: "linear-gradient(145deg, #DCEFF7 0%, #F6F1E7 100%)",
  },
  {
    id: "2",
    title: "Storefront Lighting Upgrade",
    category: "Commercial",
    caption: "[Placeholder project image] Commercial lighting installation — replace with finished photo.",
    location: "[City, FL]",
    tone: "linear-gradient(145deg, #F6F1E7 0%, #E8D48A 55%, #DCEFF7 100%)",
  },
  {
    id: "3",
    title: "Warm Exterior Path Lighting",
    category: "Lighting",
    caption: "[Placeholder project image] Exterior pathway lighting — replace with finished photo.",
    location: "[City, FL]",
    tone: "linear-gradient(160deg, #0B3A66 0%, #145A82 45%, #D4AF37 100%)",
  },
  {
    id: "4",
    title: "Generator Transfer Setup",
    category: "Generators",
    caption: "[Placeholder project image] Generator transfer connection — replace with finished photo.",
    location: "[City, FL]",
    tone: "linear-gradient(145deg, #072844 0%, #0B3A66 50%, #DCEFF7 100%)",
  },
  {
    id: "5",
    title: "Kitchen Circuit Improvements",
    category: "Residential",
    caption: "[Placeholder project image] Residential circuit upgrades — replace with finished photo.",
    location: "[City, FL]",
    tone: "linear-gradient(145deg, #F6F1E7 0%, #DCEFF7 100%)",
  },
  {
    id: "6",
    title: "Office Suite Power Expansion",
    category: "Commercial",
    caption: "[Placeholder project image] Commercial power expansion — replace with finished photo.",
    location: "[City, FL]",
    tone: "linear-gradient(145deg, #DCEFF7 0%, #FFFFFF 50%, #F6F1E7 100%)",
  },
  {
    id: "7",
    title: "Dining Room Fixture Install",
    category: "Lighting",
    caption: "[Placeholder project image] Interior fixture installation — replace with finished photo.",
    location: "[City, FL]",
    tone: "linear-gradient(145deg, #E8D48A 0%, #F6F1E7 55%, #DCEFF7 100%)",
  },
  {
    id: "8",
    title: "Service Panel Organization",
    category: "Panels",
    caption: "[Placeholder project image] Organized service panel — replace with finished photo.",
    location: "[City, FL]",
    tone: "linear-gradient(145deg, #0B3A66 0%, #DCEFF7 100%)",
  },
  {
    id: "9",
    title: "Storm-Ready Backup Connection",
    category: "Generators",
    caption: "[Placeholder project image] Storm-season generator work — replace with finished photo.",
    location: "[City, FL]",
    tone: "linear-gradient(145deg, #145A82 0%, #F6F1E7 100%)",
  },
];

export default function GalleryClient() {
  const [active, setActive] = useState<Category>("All");
  const [lightboxId, setLightboxId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    if (active === "All") return galleryItems;
    return galleryItems.filter((item) => item.category === active);
  }, [active]);

  const lightboxItem = galleryItems.find((item) => item.id === lightboxId);

  return (
    <SiteShell>
      <main>
        <PageHero
          eyebrow="Project Portfolio"
          title="Work Across the Nature Coast"
          description="A premium portfolio layout with large project cards, category filters, and lightbox-ready placeholders prepared for real job-site photography."
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

          <p
            className="mt-8 text-center text-sm"
            style={{ color: "rgba(11,58,102,0.55)" }}
          >
            All images are placeholders — click any card for a lightbox-ready preview.
          </p>

          <motion.div
            key={active}
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="mt-12 grid gap-8 sm:grid-cols-2"
          >
            {filtered.map((item, index) => (
              <motion.article
                key={item.id}
                variants={fadeUp}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className={`group premium-card overflow-hidden ${
                  index % 5 === 0 ? "sm:col-span-2" : ""
                }`}
              >
                <button
                  type="button"
                  onClick={() => setLightboxId(item.id)}
                  className="block w-full text-left"
                  aria-label={`Open preview for ${item.title}`}
                >
                  <div
                    className={`relative overflow-hidden ${
                      index % 5 === 0 ? "aspect-[21/9]" : "aspect-[16/10]"
                    }`}
                    style={{ background: item.tone }}
                  >
                    <div
                      className="absolute inset-0 opacity-30 transition-opacity duration-500 group-hover:opacity-45"
                      style={{
                        backgroundImage:
                          "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.55), transparent 40%), radial-gradient(circle at 80% 70%, rgba(212,175,55,0.28), transparent 35%)",
                      }}
                    />
                    <div
                      className="absolute inset-0 opacity-0 transition-opacity duration-400 group-hover:opacity-100"
                      style={{
                        background:
                          "linear-gradient(180deg, transparent 40%, rgba(7,40,68,0.55) 100%)",
                      }}
                    />
                    <span
                      className="absolute left-5 top-5 rounded-xl px-3 py-1.5 text-xs font-semibold tracking-[0.14em] uppercase"
                      style={{
                        background: "rgba(246,241,231,0.92)",
                        color: colors.navy,
                      }}
                    >
                      {item.category}
                    </span>
                    <span
                      className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-xl opacity-0 transition-all duration-400 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2"
                      style={{
                        background: "rgba(246,241,231,0.92)",
                        color: colors.navy,
                      }}
                    >
                      <Expand size={18} strokeWidth={1.75} />
                    </span>
                    <span
                      className="absolute bottom-5 left-5 rounded-xl px-3 py-1.5 text-xs font-semibold tracking-wide opacity-0 transition-opacity duration-400 group-hover:opacity-100"
                      style={{
                        background: "rgba(246,241,231,0.92)",
                        color: "rgba(11,58,102,0.7)",
                      }}
                    >
                      Placeholder Image
                    </span>
                  </div>
                  <div className="p-7 sm:p-8">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                        {item.title}
                      </h3>
                      <span
                        className="text-sm tracking-wide"
                        style={{ color: "rgba(11,58,102,0.5)" }}
                      >
                        {item.location}
                      </span>
                    </div>
                    <p
                      className="mt-3 text-sm leading-relaxed sm:text-base"
                      style={{ color: "rgba(11,58,102,0.66)" }}
                    >
                      {item.caption}
                    </p>
                  </div>
                </button>
              </motion.article>
            ))}
          </motion.div>
        </section>

        <AnimatePresence>
          {lightboxItem ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[80] flex items-center justify-center px-4 py-8"
              style={{ background: "rgba(7,40,68,0.78)", backdropFilter: "blur(8px)" }}
              role="dialog"
              aria-modal="true"
              aria-label={`Preview: ${lightboxItem.title}`}
              onClick={() => setLightboxId(null)}
            >
              <motion.div
                initial={{ opacity: 0, y: 24, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 16, scale: 0.98 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-full max-w-4xl overflow-hidden rounded-3xl"
                style={{ background: colors.warmSand }}
                onClick={(event) => event.stopPropagation()}
              >
                <button
                  type="button"
                  onClick={() => setLightboxId(null)}
                  className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{
                    background: "rgba(246,241,231,0.92)",
                    color: colors.navy,
                  }}
                  aria-label="Close preview"
                >
                  <X size={18} />
                </button>
                <div
                  className="relative aspect-[16/10]"
                  style={{ background: lightboxItem.tone }}
                >
                  <div
                    className="absolute inset-0 opacity-35"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.55), transparent 40%), radial-gradient(circle at 80% 70%, rgba(212,175,55,0.28), transparent 35%)",
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p
                      className="rounded-2xl px-5 py-3 text-sm font-semibold tracking-wide"
                      style={{
                        background: "rgba(246,241,231,0.92)",
                        color: colors.navy,
                      }}
                    >
                      Lightbox-ready placeholder
                    </p>
                  </div>
                </div>
                <div className="px-7 py-7 sm:px-10 sm:py-8">
                  <p className="section-label mb-3">{lightboxItem.category}</p>
                  <h3 className="font-display text-3xl font-semibold tracking-tight">
                    {lightboxItem.title}
                  </h3>
                  <p
                    className="mt-3 text-base leading-relaxed"
                    style={{ color: "rgba(11,58,102,0.68)" }}
                  >
                    {lightboxItem.caption}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>

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
