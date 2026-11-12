import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { socialLinks } from "@/data/navigation";

type PageMetadataInput = {
  /** Page title. Omit on the homepage to use the full site title. */
  title?: string;
  description?: string;
  /** Route path beginning with "/", used for the canonical URL. */
  path: string;
};

/**
 * Builds per-page metadata. Canonical and Open Graph URLs are only emitted
 * once NEXT_PUBLIC_SITE_URL is configured, so no placeholder domain ever ships.
 *
 * Usage in a page:  export const metadata = pageMetadata({ title: "About", path: "/about" });
 */
export function pageMetadata({ title, description, path }: PageMetadataInput): Metadata {
  const resolvedDescription = description ?? siteConfig.description;
  const socialTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.title;
  const images = siteConfig.ogImage
    ? [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.title }]
    : undefined;

  return {
    title: title ?? { absolute: siteConfig.title },
    description: resolvedDescription,
    alternates: siteConfig.url ? { canonical: path } : undefined,
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: siteConfig.name,
      title: socialTitle,
      description: resolvedDescription,
      url: siteConfig.url ? path : undefined,
      images,
    },
    twitter: {
      card: images ? "summary_large_image" : "summary",
      title: socialTitle,
      description: resolvedDescription,
      images: images?.map((image) => image.url),
    },
  };
}

type JsonLdObject = Record<string, unknown>;

/** schema.org Person for Cedric. URL and profiles are included once they exist. */
export function personJsonLd(): JsonLdObject {
  const profiles = socialLinks.flatMap((link) => (link.url ? [link.url] : []));

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.fullName,
    alternateName: siteConfig.name,
    jobTitle: siteConfig.role,
    description: siteConfig.description,
    ...(siteConfig.url && { url: siteConfig.url }),
    ...(profiles.length > 0 && { sameAs: profiles }),
  };
}

/** schema.org WebSite. */
export function websiteJsonLd(): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    description: siteConfig.description,
    inLanguage: "en-US",
    ...(siteConfig.url && { url: siteConfig.url }),
  };
}
