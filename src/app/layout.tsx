import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Current Solutions Electrical Services",
  description:
    "Professional electrical services from Current Solutions Electrical Services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
