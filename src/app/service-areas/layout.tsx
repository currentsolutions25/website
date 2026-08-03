import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/design";

export const metadata: Metadata = buildPageMetadata({
  title: "Service Areas",
  description:
    "Current Solutions serves Spring Hill, Brooksville, Weeki Wachee, Hudson, Port Richey, New Port Richey, Hernando Beach, Crystal River, Homosassa, Inverness, and the Nature Coast.",
  path: "/service-areas",
});

export default function ServiceAreasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
