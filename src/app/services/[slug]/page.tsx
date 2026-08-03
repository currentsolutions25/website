import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicePage from "@/components/ServicePage";
import {
  buildPageMetadata,
  services,
  type ServiceSlug,
} from "@/lib/design";

const serviceSlugs = new Set(services.map((service) => service.slug));

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return { title: "Service Not Found" };
  }

  return buildPageMetadata({
    title: service.title,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;

  if (!serviceSlugs.has(slug as ServiceSlug)) {
    notFound();
  }

  return <ServicePage slug={slug as ServiceSlug} />;
}
