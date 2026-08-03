import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import {
  SITE_NAME,
  SITE_URL,
  buildPageMetadata,
} from "@/lib/design";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  ...buildPageMetadata({
    title: `${SITE_NAME} | Powering Florida's Nature Coast`,
    description:
      "Family-owned electrical company serving Florida's Nature Coast with residential and commercial electrical services, panel upgrades, lighting, generator connections, and 24/7 emergency response. Call (352) 397-6871.",
    path: "/",
  }),
  title: {
    default: `${SITE_NAME} | Powering Florida's Nature Coast`,
    template: `%s | ${SITE_NAME}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
