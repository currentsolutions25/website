"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/types";

const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#our-work" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <nav
        aria-label="Primary"
        className={cn(
          "pointer-events-auto mx-auto flex max-w-5xl items-center justify-between rounded-full border px-5 py-3 transition-[background-color,border-color,box-shadow,backdrop-filter] duration-500 sm:px-7",
          scrolled
            ? "border-white/25 bg-navy-deep/80 shadow-[0_12px_40px_rgba(6,21,38,0.32)] backdrop-blur-2xl"
            : "border-white/15 bg-navy-deep/40 shadow-[0_8px_28px_rgba(6,21,38,0.14)] backdrop-blur-xl",
        )}
      >
        <a
          href="#home"
          className="font-display text-lg font-semibold tracking-[0.04em] text-warm-white transition-colors duration-300 hover:text-gold-soft sm:text-xl"
        >
          Current Solutions
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm font-light tracking-[0.14em] text-warm-white/80 uppercase transition-colors duration-300 hover:text-gold-soft"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-warm-white transition-colors duration-300 hover:border-gold/40 hover:text-gold-soft md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span className="relative block h-3.5 w-5" aria-hidden="true">
            <span
              className={cn(
                "absolute left-0 block h-px w-full bg-current transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0",
              )}
            />
            <span
              className={cn(
                "absolute top-1/2 left-0 block h-px w-full -translate-y-1/2 bg-current transition-all duration-300",
                open ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100",
              )}
            />
            <span
              className={cn(
                "absolute left-0 block h-px w-full bg-current transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                open ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0",
              )}
            />
          </span>
        </button>
      </nav>

      <div
        id="mobile-nav"
        className={cn(
          "pointer-events-auto mx-auto mt-3 max-w-5xl overflow-hidden rounded-[1.75rem] border border-white/15 bg-navy-deep/88 backdrop-blur-2xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden",
          open
            ? "max-h-96 opacity-100 shadow-[0_18px_44px_rgba(6,21,38,0.38)]"
            : "pointer-events-none max-h-0 border-transparent opacity-0",
        )}
      >
        <ul className="flex flex-col gap-1 px-5 py-5">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="block rounded-full px-4 py-3 text-sm font-light tracking-[0.14em] text-warm-white/85 uppercase transition-colors duration-300 hover:bg-white/5 hover:text-gold-soft"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
