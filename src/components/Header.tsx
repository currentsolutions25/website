"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Mail, Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ScaleButton from "@/components/ScaleButton";
import {
  colors,
  EMAIL,
  EMAIL_PLACEHOLDER_NOTE,
  navLinks,
  PHONE_DISPLAY,
  PHONE_HREF,
  PHONE_PLACEHOLDER_NOTE,
  SITE_SHORT_NAME,
} from "@/lib/design";

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
        {/* Company logo placeholder — replace CS mark with brand artwork when ready */}
        <Link href="/" className="group flex min-w-0 shrink-0 items-center gap-3">
          <span
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl sm:h-12 sm:w-12"
            style={{
              background: `linear-gradient(145deg, ${colors.seaGlass}, rgba(220,239,247,0.4))`,
              boxShadow: "inset 0 0 0 1px rgba(11,58,102,0.08)",
            }}
            aria-hidden="true"
            title="[Replace with company logo]"
          >
            <span
              className="font-display text-lg font-semibold tracking-tight sm:text-xl"
              style={{ color: colors.navy }}
            >
              CS
            </span>
          </span>
          <span className="min-w-0">
            <span className="block font-display text-xl font-semibold tracking-tight transition-opacity duration-300 group-hover:opacity-75 sm:text-[1.65rem]">
              {SITE_SHORT_NAME}
            </span>
            <span
              className="hidden text-[0.65rem] font-medium tracking-[0.14em] uppercase sm:block"
              style={{ color: "rgba(11,58,102,0.5)" }}
            >
              Electrical Services
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-5 xl:flex xl:gap-7">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : link.href.startsWith("/#")
                  ? pathname === "/"
                  : pathname === link.href ||
                    pathname.startsWith(`${link.href}/`);

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative whitespace-nowrap text-[0.8125rem] font-medium tracking-[0.04em] transition-opacity duration-300 hover:opacity-65 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:bg-[var(--champagne)] after:transition-transform after:duration-300 ${
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

        <div className="hidden items-center gap-2.5 lg:flex xl:gap-3.5">
          <a
            href={PHONE_HREF}
            className="group inline-flex items-center gap-2.5 rounded-2xl px-3 py-2 transition-all duration-300 hover:bg-white/55"
            style={{ color: colors.navy }}
            aria-label={`Call ${PHONE_DISPLAY}`}
            title={PHONE_PLACEHOLDER_NOTE}
          >
            <span
              className="flex h-10 w-10 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105"
              style={{
                background:
                  "linear-gradient(145deg, rgba(212,175,55,0.28), rgba(212,175,55,0.1))",
                color: colors.champagne,
                boxShadow: "inset 0 0 0 1px rgba(212,175,55,0.22)",
              }}
            >
              <Phone size={18} strokeWidth={2.1} />
            </span>
            <span className="flex flex-col leading-tight">
              <span
                className="text-[0.62rem] font-semibold tracking-[0.16em] uppercase"
                style={{ color: "rgba(11,58,102,0.5)" }}
              >
                Call Now
              </span>
              <span className="text-[0.98rem] font-semibold tracking-wide">
                {PHONE_DISPLAY}
              </span>
            </span>
          </a>

          <a
            href={`mailto:${EMAIL}`}
            className="group inline-flex items-center gap-2 rounded-2xl px-2.5 py-2 transition-all duration-300 hover:bg-white/55 xl:gap-2.5 xl:px-3"
            style={{ color: colors.navy }}
            aria-label={`Email ${EMAIL}`}
            title={EMAIL_PLACEHOLDER_NOTE}
          >
            <span
              className="flex h-9 w-9 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105"
              style={{
                background: `linear-gradient(145deg, ${colors.seaGlass}, rgba(220,239,247,0.4))`,
                color: colors.navy,
              }}
            >
              <Mail size={16} strokeWidth={1.9} />
            </span>
            <span className="hidden flex-col leading-tight min-[1180px]:flex">
              <span
                className="text-[0.62rem] font-semibold tracking-[0.16em] uppercase"
                style={{ color: "rgba(11,58,102,0.5)" }}
              >
                Email
              </span>
              <span className="max-w-[11rem] truncate text-[0.8rem] font-semibold tracking-wide">
                {EMAIL}
              </span>
            </span>
          </a>

          <ScaleButton
            href="/contact"
            variant="gold"
            className="px-6 py-3.5 text-sm xl:px-7"
          >
            Request a Quote
          </ScaleButton>
        </div>

        <div className="flex items-center gap-1.5 xl:hidden">
          <a
            href={PHONE_HREF}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl transition-colors duration-300 hover:bg-white/40 lg:hidden"
            aria-label={`Call ${PHONE_DISPLAY}`}
            title={PHONE_PLACEHOLDER_NOTE}
            style={{ color: colors.champagne }}
          >
            <Phone size={20} strokeWidth={2.1} />
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl transition-colors duration-300 hover:bg-white/40 lg:hidden"
            aria-label={`Email ${EMAIL}`}
            title={EMAIL_PLACEHOLDER_NOTE}
            style={{ color: colors.navy }}
          >
            <Mail size={19} strokeWidth={1.9} />
          </a>
          <button
            type="button"
            className="rounded-xl p-2 transition-colors duration-300 hover:bg-white/40"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0, y: -8 }}
            animate={{ height: "auto", opacity: 1, y: 0 }}
            exit={{ height: 0, opacity: 0, y: -8 }}
            transition={{ duration: 0.28 }}
            className="pointer-events-auto mx-auto mt-3 max-w-6xl overflow-hidden rounded-2xl border xl:hidden"
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
              <li className="pt-3">
                <a
                  href={PHONE_HREF}
                  className="inline-flex w-full items-center gap-3 rounded-2xl px-4 py-3.5 transition-opacity hover:opacity-90"
                  style={{
                    background:
                      "linear-gradient(145deg, rgba(212,175,55,0.2), rgba(220,239,247,0.45))",
                    boxShadow: "inset 0 0 0 1px rgba(212,175,55,0.22)",
                  }}
                  onClick={() => setMobileOpen(false)}
                  title={PHONE_PLACEHOLDER_NOTE}
                >
                  <Phone
                    size={18}
                    strokeWidth={2.1}
                    style={{ color: colors.champagne }}
                  />
                  <span>
                    <span
                      className="block text-[0.65rem] font-semibold tracking-[0.16em] uppercase"
                      style={{ color: "rgba(11,58,102,0.5)" }}
                    >
                      Call Now
                    </span>
                    <span className="text-base font-semibold">
                      {PHONE_DISPLAY}
                    </span>
                  </span>
                </a>
              </li>
              <li className="pt-2">
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex w-full items-center gap-3 rounded-2xl px-4 py-3.5 transition-opacity hover:opacity-90"
                  style={{
                    background: "rgba(220,239,247,0.55)",
                  }}
                  onClick={() => setMobileOpen(false)}
                  title={EMAIL_PLACEHOLDER_NOTE}
                >
                  <Mail size={18} strokeWidth={1.9} style={{ color: colors.navy }} />
                  <span>
                    <span
                      className="block text-[0.65rem] font-semibold tracking-[0.16em] uppercase"
                      style={{ color: "rgba(11,58,102,0.5)" }}
                    >
                      Email
                    </span>
                    <span className="text-sm font-semibold break-all">
                      {EMAIL}
                    </span>
                  </span>
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
