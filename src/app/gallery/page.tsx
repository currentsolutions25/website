import type { Metadata } from "next";
import GalleryClient from "@/components/GalleryClient";

export const metadata: Metadata = {
  title: "Gallery | Current Solutions",
  description:
    "Browse placeholder project highlights from Current Solutions Electrical Services across Florida's Nature Coast.",
};

export default function GalleryPage() {
  return <GalleryClient />;
}
