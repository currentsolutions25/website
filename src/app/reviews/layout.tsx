import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reviews | Current Solutions",
  description:
    "Sample customer testimonials for Current Solutions Electrical Services. Real reviews will be added as they become available.",
};

export default function ReviewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
