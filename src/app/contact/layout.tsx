import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/design";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact",
  description:
    "Request a free electrical quote from Current Solutions. View business hours, service area, phone, email, and emergency service details for Florida's Nature Coast.",
  path: "/contact",
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
