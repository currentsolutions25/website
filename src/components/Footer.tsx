import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import {
  colors,
  EMAIL,
  navLinks,
  PHONE_DISPLAY,
  PHONE_HREF,
} from "@/lib/design";

export default function Footer() {
  return (
    <footer
      className="border-t"
      style={{
        background: colors.warmSand,
        borderColor: "rgba(11,58,102,0.08)",
      }}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-14 px-5 py-20 sm:px-8 md:flex-row md:items-start md:justify-between">
        <div className="max-w-md">
          <p className="font-display text-[1.75rem] font-semibold tracking-tight sm:text-[2rem]">
            Current Solutions Electrical Services
          </p>
          <p
            className="mt-5 text-sm tracking-wide"
            style={{ color: "rgba(11,58,102,0.65)" }}
          >
            Family Owned &amp; Operated
          </p>
          <p
            className="mt-1.5 text-sm tracking-wide"
            style={{ color: "rgba(11,58,102,0.65)" }}
          >
            Serving Florida&apos;s Nature Coast
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <p className="section-label mb-4">Explore</p>
            <ul className="flex flex-col gap-3 text-sm tracking-wide">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-opacity hover:opacity-70"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-5 text-sm tracking-wide">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-3 transition-opacity hover:opacity-70"
            >
              <span
                className="flex h-9 w-9 items-center justify-center rounded-xl"
                style={{
                  background: "rgba(220,239,247,0.7)",
                  color: colors.navy,
                }}
              >
                <Phone size={16} strokeWidth={1.6} />
              </span>
              {PHONE_DISPLAY}
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-3 transition-opacity hover:opacity-70"
            >
              <span
                className="flex h-9 w-9 items-center justify-center rounded-xl"
                style={{
                  background: "rgba(220,239,247,0.7)",
                  color: colors.navy,
                }}
              >
                <Mail size={16} strokeWidth={1.6} />
              </span>
              {EMAIL}
            </a>
          </div>
        </div>
      </div>
      <div
        className="border-t py-8 text-center text-xs tracking-[0.08em]"
        style={{
          borderColor: "rgba(11,58,102,0.08)",
          color: "rgba(11,58,102,0.45)",
        }}
      >
        © {new Date().getFullYear()} Current Solutions Electrical Services.
        All rights reserved.
      </div>
    </footer>
  );
}
