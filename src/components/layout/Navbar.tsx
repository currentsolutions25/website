"use client";

import { useEffect, useId, useState, type MouseEvent } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/types";

const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#our-work" },
  { label: "Contact", href: "#contact" },
];

function sectionIdFromHref(href: string) {
  return href.replace(/^#/, "");
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");
  const mobileNavId = useId();
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(sectionIdFromHref(item.href)))
      .filter((el): el is HTMLElement => Boolean(el));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0) ||
              a.boundingClientRect.top - b.boundingClientRect.top,
          );

        if (visible[0]?.target?.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const scrollToSection = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    const id = sectionIdFromHref(href);
    const target = document.getElementById(id);
    if (!target) return;

    event.preventDefault();
    setOpen(false);
    setActiveId(id);

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    target.scrollIntoView({
      behavior: prefersReduced ? "auto" : "smooth",
      block: "start",
    });

    if (history.replaceState) {
      history.replaceState(null, "", href);
    }
  };

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <motion.nav
        aria-label="Primary"
        initial={reduceMotion ? false : { y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "pointer-events-auto mx-auto flex max-w-5xl items-center justify-between rounded-full border px-5 py-3 transition-[background-color,border-color,box-shadow,backdrop-filter] duration-500 sm:px-7",
          scrolled
            ? "border-white/25 bg-navy-deep/80 shadow-[0_12px_40px_rgba(6,21,38,0.32)] backdrop-blur-2xl"
            : "border-white/15 bg-navy-deep/40 shadow-[0_8px_28px_rgba(6,21,38,0.14)] backdrop-blur-xl",
        )}
      >
        <a
          href="#home"
          className="font-display text-lg font-semibold tracking-[0.04em] text-warm-white transition-colors duration-300 hover:text-gold-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-deep sm:text-xl"
          onClick={(event) => scrollToSection(event, "#home")}
        >
          Current Solutions
        </a>

        <ul className="hidden items-center gap-1 md:flex lg:gap-2">
          {navItems.map((item) => {
            const id = sectionIdFromHref(item.href);
            const isActive = activeId === id;

            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "relative block rounded-full px-3 py-2 text-sm font-light tracking-[0.14em] uppercase transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-deep lg:px-3.5",
                    isActive
                      ? "text-gold-soft"
                      : "text-warm-white/80 hover:text-gold-soft",
                  )}
                  onClick={(event) => scrollToSection(event, item.href)}
                >
                  {item.label}
                  <motion.span
                    aria-hidden="true"
                    className="absolute inset-x-3 -bottom-0.5 h-px bg-gold-soft"
                    initial={false}
                    animate={{ scaleX: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }}
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    style={{ originX: 0.5 }}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-warm-white transition-colors duration-300 hover:border-gold/40 hover:text-gold-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-deep md:hidden"
          aria-expanded={open}
          aria-controls={mobileNavId}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span className="relative block h-3.5 w-5" aria-hidden="true">
            <motion.span
              className="absolute left-0 block h-px w-full bg-current"
              animate={
                open
                  ? { top: "50%", y: "-50%", rotate: 45 }
                  : { top: "0%", y: "0%", rotate: 0 }
              }
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.span
              className="absolute top-1/2 left-0 block h-px w-full -translate-y-1/2 bg-current"
              animate={
                open
                  ? { scaleX: 0, opacity: 0 }
                  : { scaleX: 1, opacity: 1 }
              }
              transition={{ duration: 0.25 }}
            />
            <motion.span
              className="absolute left-0 block h-px w-full bg-current"
              animate={
                open
                  ? { top: "50%", y: "-50%", rotate: -45 }
                  : { top: "100%", y: "-100%", rotate: 0 }
              }
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            />
          </span>
        </button>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id={mobileNavId}
            key="mobile-nav"
            initial={
              reduceMotion
                ? { opacity: 1 }
                : { opacity: 0, y: -8, height: 0 }
            }
            animate={
              reduceMotion
                ? { opacity: 1 }
                : { opacity: 1, y: 0, height: "auto" }
            }
            exit={
              reduceMotion
                ? { opacity: 0 }
                : { opacity: 0, y: -8, height: 0 }
            }
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-auto mx-auto mt-3 max-w-5xl overflow-hidden rounded-[1.75rem] border border-white/15 bg-navy-deep/88 shadow-[0_18px_44px_rgba(6,21,38,0.38)] backdrop-blur-2xl md:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 py-5" role="list">
              {navItems.map((item, index) => {
                const id = sectionIdFromHref(item.href);
                const isActive = activeId === id;

                return (
                  <motion.li
                    key={item.href}
                    initial={reduceMotion ? false : { opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: reduceMotion ? 0 : 0.04 * index,
                      duration: 0.3,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <a
                      href={item.href}
                      aria-current={isActive ? "true" : undefined}
                      className={cn(
                        "block rounded-full px-4 py-3 text-sm font-light tracking-[0.14em] uppercase transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-deep",
                        isActive
                          ? "bg-white/5 text-gold-soft"
                          : "text-warm-white/85 hover:bg-white/5 hover:text-gold-soft",
                      )}
                      onClick={(event) => scrollToSection(event, item.href)}
                    >
                      {item.label}
                    </a>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
