import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Current Solutions",
  description:
    "Request a free electrical quote from Current Solutions. Serving homes and businesses across Florida's Nature Coast.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
