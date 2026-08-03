"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ScaleButton from "@/components/ScaleButton";
import { colors, navLinks, PHONE_DISPLAY, PHONE_HREF } from "@/lib/design";

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 sm:pt-5">
      <nav
        className={`pointer-events-auto glass-nav mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-2xl px-4 py-3.5 transition-[background,box-shadow,border-color] duration-300 sm:gap-4 sm:px-6 sm:py-4 ${
          scrolled ? "glass-nav-scrolled" : ""
        }`}
      >
        <Link href="/" className="group shrink-0">
          <span className="font-display text-2xl font-semibold tracking-tight transition-opacity duration-300 group-hover:opacity-75 sm:text-[1.75rem]">
            Current Solutions
          </span>
        </Link>

        <ul className="hidden items-center gap-7 lg:flex xl:gap-9">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname === link.href || pathname.startsWith(`${link.href}/`);

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative text-[0.875rem] font-medium tracking-[0.04em] transition-opacity duration-300 hover:opacity-65 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:bg-[var(--champagne)] after:transition-transform after:duration-300 ${
                    isActive
                      ? "after:scale-x-100"
                      : "after:scale-x-0 hover:after:scale-x-100"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-2 text-sm font-medium tracking-wide transition-opacity hover:opacity-70"
            style={{ color: colors.navy }}
          >
            <Phone size={16} strokeWidth={1.75} />
            <span>{PHONE_DISPLAY}</span>
          </a>
          <ScaleButton
            href="/contact"
            variant="gold"
            className="px-7 py-3.5 text-sm"
          >
            Request a Quote
          </ScaleButton>
        </div>

        <button
          type="button"
          className="rounded-xl p-2 transition-colors duration-300 hover:bg-white/40 lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0, y: -8 }}
            animate={{ height: "auto", opacity: 1, y: 0 }}
            exit={{ height: 0, opacity: 0, y: -8 }}
            transition={{ duration: 0.28 }}
            className="pointer-events-auto mx-auto mt-3 max-w-6xl overflow-hidden rounded-2xl border lg:hidden"
            style={{
              borderColor: "rgba(11,58,102,0.1)",
              background: "rgba(246,241,231,0.96)",
              backdropFilter: "blur(24px) saturate(165%)",
              WebkitBackdropFilter: "blur(24px) saturate(165%)",
              boxShadow: "0 22px 48px -18px rgba(11,58,102,0.45)",
            }}
          >
            <ul className="flex flex-col gap-1 px-5 py-5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block py-2.5 text-base font-medium transition-opacity hover:opacity-65"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center gap-2.5 py-2.5 text-base font-medium transition-opacity hover:opacity-65"
                  onClick={() => setMobileOpen(false)}
                >
                  <Phone size={18} strokeWidth={1.75} />
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li className="pt-3">
                <ScaleButton
                  href="/contact"
                  variant="gold"
                  className="w-full"
                >
                  Request a Quote
                </ScaleButton>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
