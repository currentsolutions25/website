import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/design";

export const metadata: Metadata = buildPageMetadata({
  title: "Solutions",
  description:
    "Explore Current Solutions electrical offerings — residential, commercial, lighting, repairs, panel upgrades, surge protection, EV charging, backup power, and maintenance across Florida's Nature Coast.",
  path: "/solutions",
});

export default function SolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
