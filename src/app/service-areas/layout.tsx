import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/design";

export const metadata: Metadata = buildPageMetadata({
  title: "Service Areas",
  description:
    "Current Solutions serves Hernando, Pasco, Citrus, Pinellas, and Hillsborough counties with residential and commercial electrical services.",
  path: "/service-areas",
});

export default function ServiceAreasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
