import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Current Solutions Electrical Services | Nature Coast Florida",
  description:
    "Family-owned electrical services for Florida homes and businesses along the Nature Coast. Residential, commercial, panel upgrades, lighting, generators, and emergency service.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${fraunces.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
