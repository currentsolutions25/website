import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import {
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
  buildPageMetadata,
} from "@/lib/design";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  ...buildPageMetadata({
    title: `${SITE_NAME} | ${SITE_TAGLINE}`,
    description:
      "Family-owned electrical company serving Florida's Nature Coast with residential and commercial electrical services, panel upgrades, lighting, generator connections, and emergency response.",
    path: "/",
  }),
  title: {
    default: `${SITE_NAME} | ${SITE_TAGLINE}`,
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
      <body
        className={`${outfit.variable} ${cormorant.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
