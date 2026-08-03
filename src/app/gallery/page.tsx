import type { Metadata } from "next";
import GalleryClient from "@/components/GalleryClient";
import { buildPageMetadata } from "@/lib/design";

export const metadata: Metadata = buildPageMetadata({
  title: "Gallery",
  description:
    "Browse the Current Solutions project portfolio — premium placeholder cards ready for residential, commercial, lighting, panel, and generator photography across Florida's Nature Coast.",
  path: "/gallery",
});

export default function GalleryPage() {
  return <GalleryClient />;
}
