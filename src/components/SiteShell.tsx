import type { ReactNode } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { colors } from "@/lib/design";

export default function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div
      className="min-h-screen overflow-x-hidden antialiased"
      style={{ background: colors.warmSand, color: colors.navy }}
    >
      <Header />
      {children}
      <Footer />
    </div>
  );
}
