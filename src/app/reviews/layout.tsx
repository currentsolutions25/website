import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/design";

export const metadata: Metadata = buildPageMetadata({
  title: "Reviews",
  description:
    "Customer review layout for Current Solutions Electrical Services. Placeholder testimonials and Google Reviews section ready for verified feedback.",
  path: "/reviews",
});

export default function ReviewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
