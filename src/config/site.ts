/**
 * Site-wide identity and SEO configuration.
 *
 * The production domain is intentionally not hard-coded. Set
 * NEXT_PUBLIC_SITE_URL (e.g. https://www.example.com) in the hosting
 * provider's environment settings once the final domain is known; canonical
 * URLs, Open Graph URLs and structured data pick it up automatically.
 */

const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/+$/, "");

export const siteConfig = {
  /** Absolute origin of the production site, or null until one is provided. */
  url: rawSiteUrl || null,

  name: "Cedric Belcher",
  fullName: "Cedric N. Belcher, Sr.",
  role: "Marketplace Minister",

  title: "Cedric Belcher | Marketplace Minister, Speaker & Kingdom Influencer",
  description:
    "Cedric Belcher is a Marketplace Minister, pastor, speaker, entrepreneur, and humanitarian equipping people to engage, enlighten, and empower through education, economics, entrepreneurship, and Kingdom influence.",

  /** Each line is split so the first word can carry the gold emphasis. */
  tagline: [
    { emphasis: "Expanding", rest: "the Kingdom." },
    { emphasis: "Influencing", rest: "Society." },
    { emphasis: "Empowering", rest: "People." },
  ],

  /**
   * Social sharing image (1200×630), relative to /public.
   * Null until the branded card is supplied — see README "Asset checklist".
   */
  ogImage: null as string | null,
} as const;

export type SiteConfig = typeof siteConfig;
