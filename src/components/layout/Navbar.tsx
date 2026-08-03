"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
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
          "pointer-events-auto mx-auto flex max-w-6xl items-center justify-between rounded-2xl border px-5 py-3 transition-[background-color,border-color,box-shadow,backdrop-filter] duration-500 sm:px-7",
          scrolled
            ? "border-white/20 bg-navy-deep/75 shadow-[0_10px_40px_rgba(6,21,38,0.28)] backdrop-blur-xl"
            : "border-white/12 bg-navy-deep/35 shadow-[0_8px_30px_rgba(6,21,38,0.12)] backdrop-blur-md",
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
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 text-warm-white transition-colors duration-300 hover:border-gold/40 hover:text-gold-soft md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          {open ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </nav>

      <div
        id="mobile-nav"
        className={cn(
          "pointer-events-auto mx-auto mt-3 max-w-6xl overflow-hidden rounded-2xl border border-white/15 bg-navy-deep/85 backdrop-blur-xl transition-all duration-500 md:hidden",
          open
            ? "max-h-96 opacity-100 shadow-[0_16px_40px_rgba(6,21,38,0.35)]"
            : "max-h-0 border-transparent opacity-0",
        )}
      >
        <ul className="flex flex-col gap-1 px-5 py-4">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="block rounded-xl px-3 py-3 text-sm font-light tracking-[0.14em] text-warm-white/85 uppercase transition-colors duration-300 hover:bg-white/5 hover:text-gold-soft"
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
