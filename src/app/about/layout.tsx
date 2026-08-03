import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Current Solutions",
  description:
    "Learn about Current Solutions, a family-owned electrical contractor serving Florida's Nature Coast with honest workmanship and dependable service.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
