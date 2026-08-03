import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/design";

export const metadata: Metadata = buildPageMetadata({
  title: "About",
  description:
    "Learn about Current Solutions, a family-owned electrical contractor serving Florida's Nature Coast with honest workmanship and dependable service.",
  path: "/about",
});

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
