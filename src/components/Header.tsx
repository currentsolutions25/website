"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, Phone, X, Zap } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import LighthouseMark from "@/components/LighthouseMark";
import {
  colors,
  navLinks,
  PHONE_DISPLAY,
  PHONE_HREF,
  services,
} from "@/lib/design";

const primaryNav = navLinks.filter((link) => link.label !== "Services");

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const servicesRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onPointerDown = (event: MouseEvent) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target as Node)
      ) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, []);

  const servicesActive =
    pathname.startsWith("/services") || pathname === "/";

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-[background,box-shadow] duration-300 ${
        scrolled ? "header-scrolled" : ""
      }`}
      style={{
        background: "rgba(255,255,255,0.96)",
        borderColor: "rgba(11,58,102,0.08)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6 lg:px-8 lg:py-4">
        <Link href="/" className="group flex min-w-0 shrink-0 items-center gap-3">
          <LighthouseMark size={46} />
          <span className="min-w-0 leading-tight">
            <span
              className="block font-display text-[1.15rem] font-bold tracking-[0.02em] sm:text-[1.35rem]"
              style={{ color: colors.navy }}
            >
              CURRENT SOLUTIONS
            </span>
            <span
              className="block text-[0.62rem] font-semibold tracking-[0.18em] uppercase sm:text-[0.68rem]"
              style={{ color: colors.gold }}
            >
              Electrical Services
            </span>
          </span>
        </Link>

        <nav className="hidden items-center xl:flex" aria-label="Primary">
          <ul className="flex items-center gap-1">
            {primaryNav
              .filter((link) => link.href === "/")
              .map((link) => (
                <li key={link.href}>
                  <NavItem
                    href={link.href}
                    label={link.label}
                    active={pathname === "/"}
                  />
                </li>
              ))}

            <li ref={servicesRef} className="relative">
              <button
                type="button"
                className={`nav-link inline-flex items-center gap-1.5 px-3 py-2 text-[0.78rem] font-semibold tracking-[0.12em] uppercase transition-colors duration-200 ${
                  servicesActive ? "nav-link-active" : ""
                }`}
                style={{ color: colors.navy }}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
                onClick={() => setServicesOpen((open) => !open)}
              >
                Services
                <ChevronDown
                  size={14}
                  strokeWidth={2.4}
                  className={`transition-transform duration-200 ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18 }}
                    className="absolute left-1/2 top-full z-50 mt-3 w-64 -translate-x-1/2 overflow-hidden rounded-xl border bg-white py-2 shadow-xl"
                    style={{ borderColor: "rgba(11,58,102,0.1)" }}
                  >
                    <Link
                      href="/#services"
                      className="block px-4 py-2.5 text-sm font-medium transition-colors hover:bg-[rgba(11,58,102,0.04)]"
                      style={{ color: colors.navy }}
                      onClick={() => setServicesOpen(false)}
                    >
                      All Services
                    </Link>
                    <div
                      className="my-1 h-px"
                      style={{ background: "rgba(11,58,102,0.08)" }}
                    />
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="block px-4 py-2.5 text-sm transition-colors hover:bg-[rgba(11,58,102,0.04)]"
                        style={{ color: "rgba(11,58,102,0.82)" }}
                        onClick={() => setServicesOpen(false)}
                      >
                        {service.title}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            {primaryNav
              .filter((link) => link.href !== "/")
              .map((link) => {
                const isActive =
                  pathname === link.href ||
                  pathname.startsWith(`${link.href}/`);
                return (
                  <li key={link.href}>
                    <NavItem
                      href={link.href}
                      label={link.label}
                      active={isActive}
                    />
                  </li>
                );
              })}
          </ul>
        </nav>

        <div className="hidden items-center gap-4 lg:flex xl:gap-5">
          <a
            href={PHONE_HREF}
            className="group text-right leading-tight"
            aria-label={`Call ${PHONE_DISPLAY}`}
          >
            <span
              className="flex items-center justify-end gap-2 text-[1.05rem] font-bold tracking-wide"
              style={{ color: colors.gold }}
            >
              <Phone size={16} strokeWidth={2.4} />
              {PHONE_DISPLAY}
            </span>
            <span
              className="mt-0.5 block text-[0.62rem] font-semibold tracking-[0.16em] uppercase"
              style={{ color: colors.navy }}
            >
              24/7 Emergency Service
            </span>
          </a>

          <Link
            href="/contact"
            className="cta-gold inline-flex items-center gap-2 rounded-md px-5 py-3 text-[0.78rem] font-bold tracking-[0.12em] uppercase text-white transition-transform duration-200 hover:-translate-y-0.5"
          >
            <Zap size={14} strokeWidth={2.4} fill="currentColor" />
            Request a Quote
          </Link>
        </div>

        <div className="flex items-center gap-1 xl:hidden">
          <a
            href={PHONE_HREF}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg"
            aria-label={`Call ${PHONE_DISPLAY}`}
            style={{ color: colors.gold }}
          >
            <Phone size={20} strokeWidth={2.2} />
          </a>
          <button
            type="button"
            className="rounded-lg p-2"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            style={{ color: colors.navy }}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t xl:hidden"
            style={{
              borderColor: "rgba(11,58,102,0.08)",
              background: colors.white,
            }}
          >
            <ul className="flex flex-col gap-1 px-5 py-5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block py-2.5 text-base font-semibold tracking-wide"
                    style={{ color: colors.navy }}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <p
                  className="mb-2 text-[0.65rem] font-semibold tracking-[0.16em] uppercase"
                  style={{ color: colors.gold }}
                >
                  Services
                </p>
                <ul className="space-y-1 pl-1">
                  {services.map((service) => (
                    <li key={service.slug}>
                      <Link
                        href={`/services/${service.slug}`}
                        className="block py-1.5 text-sm"
                        style={{ color: "rgba(11,58,102,0.78)" }}
                        onClick={() => setMobileOpen(false)}
                      >
                        {service.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="pt-4">
                <a
                  href={PHONE_HREF}
                  className="mb-3 flex items-center gap-3 rounded-lg px-4 py-3"
                  style={{ background: colors.softGrey }}
                >
                  <Phone size={18} style={{ color: colors.gold }} />
                  <span>
                    <span
                      className="block text-base font-bold"
                      style={{ color: colors.navy }}
                    >
                      {PHONE_DISPLAY}
                    </span>
                    <span
                      className="text-xs font-semibold tracking-wide uppercase"
                      style={{ color: "rgba(11,58,102,0.65)" }}
                    >
                      24/7 Emergency Service
                    </span>
                  </span>
                </a>
                <Link
                  href="/contact"
                  className="cta-gold flex w-full items-center justify-center gap-2 rounded-md px-5 py-3.5 text-sm font-bold tracking-[0.12em] uppercase text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  Request a Quote
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function NavItem({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={`nav-link block px-3 py-2 text-[0.78rem] font-semibold tracking-[0.12em] uppercase transition-colors duration-200 ${
        active ? "nav-link-active" : ""
      }`}
      style={{ color: colors.navy }}
    >
      {label}
    </Link>
  );
}
