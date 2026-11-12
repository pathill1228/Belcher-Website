/**
 * Homepage copy. Final wording comes from
 * references/Cedric Belcher Homepage Build Spec.docx — edit text here, not in
 * the section components.
 */

import type { IconName } from "@/components/ui/Icon";
import { images, type ImageAsset } from "./images";
import { links, sectionIds, type Href } from "./links";

export type CtaContent = {
  label: string;
  href: Href;
};

/* -------------------------------------------------------------------------- */
/* Hero                                                                        */
/* -------------------------------------------------------------------------- */

export const hero = {
  eyebrow: "Cedric N. Belcher, Sr.",
  headline: ["Marketplace", "Minister"],
  signature: ["My pulpit may be in the church,", "but my ministry extends into the world."],
  primaryCta: { label: "Discover the Vision", href: links.discoverVision },
  secondaryCta: { label: "Invite Cedric", href: links.inviteCedric },
  image: images.hero,
} satisfies {
  eyebrow: string;
  headline: string[];
  signature: string[];
  primaryCta: CtaContent;
  secondaryCta: CtaContent;
  image: ImageAsset;
};

/* -------------------------------------------------------------------------- */
/* What is a Marketplace Minister?                                             */
/* -------------------------------------------------------------------------- */

export type Sphere = {
  name: string;
  description: string;
  icon: IconName;
};

export const definition = {
  label: "What is a",
  headline: ["Marketplace", "Minister?"],
  body: [
    "I believe God calls His people not only to serve within the church but to carry the principles of His Kingdom into the places that shape society.",
    "My calling concentrates on three critical components of society: Education, Economics, and Entrepreneurship.",
  ],
  cta: { label: "Read the Manifesto", href: links.manifesto } as CtaContent,
  spheres: [
    { name: "Education", description: "Shapes how people think.", icon: "education" },
    { name: "Economics", description: "Shapes how people live.", icon: "economics" },
    {
      name: "Entrepreneurship",
      description: "Shapes what people can build.",
      icon: "entrepreneurship",
    },
  ] as Sphere[],
  closing:
    "These are centers of influence. My calling is to enter these spaces with biblical conviction and practical wisdom to maximize potential.",
};

/* -------------------------------------------------------------------------- */
/* Engage. Enlighten. Empower.                                                 */
/* -------------------------------------------------------------------------- */

export type MethodStep = {
  number: string;
  title: string;
  lead: string;
  body: string;
  icon: IconName;
  image: ImageAsset;
};

export const method = {
  heading: "Engage. Enlighten. Empower.",
  steps: [
    {
      number: "01",
      title: "Engage.",
      lead: "Transformation begins with presence.",
      body: "I engage individuals, leaders, entrepreneurs, businesses, organizations, educational institutions, communities, and governments.",
      icon: "engage",
      image: images.method.engage,
    },
    {
      number: "02",
      title: "Enlighten.",
      lead: "Transformation requires a new way of seeing.",
      body: "I share biblical principles, knowledge, wisdom, ideas, and strategies that help people see possibilities beyond their present circumstances.",
      icon: "enlighten",
      image: images.method.enlighten,
    },
    {
      number: "03",
      title: "Empower.",
      lead: "Transformation must become action.",
      body: "I provide the resources, relationships, strategies, and capacity people need to build, create, lead, and influence.",
      icon: "empower",
      image: images.method.empower,
    },
  ] as MethodStep[],
};

/* -------------------------------------------------------------------------- */
/* From Survival to Significance                                               */
/* -------------------------------------------------------------------------- */

export const story = {
  label: "From Survival to Significance",
  sequence: [
    "Born in Liberia.",
    "Displaced by war.",
    "Refugee.",
    "Scholarship recipient.",
    "Pastor.",
    "Builder.",
    "Marketplace Minister.",
  ],
  statement: ["Somebody created", "an opportunity", "for me."],
  response: ["Now I want to create", "opportunities for others."],
  cta: { label: "Read My Story", href: links.story } as CtaContent,
  images: images.story,
};

/* -------------------------------------------------------------------------- */
/* The Vision                                                                  */
/* -------------------------------------------------------------------------- */

export type VisionPairing = {
  label: string;
  icon: IconName;
};

export const vision = {
  label: "The Vision",
  headline: ["Raise a generation", "of Kingdom millionaires", "who become", "Kingdom Influencers."],
  clarifier: [
    "Millionaire is a measure of resources.",
    "Kingdom Influencer is a measure of purpose.",
  ],
  pairings: [
    { label: "Pray and build", icon: "build" },
    { label: "Worship and work", icon: "worship" },
    { label: "Give and grow", icon: "grow" },
    { label: "Serve and lead", icon: "serve" },
  ] as VisionPairing[],
  cta: { label: "Explore the Vision", href: links.exploreVision } as CtaContent,
};

/* -------------------------------------------------------------------------- */
/* One Calling. Different Places.                                              */
/* -------------------------------------------------------------------------- */

export type Expression = {
  /** Optional anchor id so the primary navigation can target this card. */
  id?: string;
  name: string;
  description: string;
  /** Optional closing line set in bold (e.g. a motto). */
  motto?: string;
  icon: IconName;
  cta: CtaContent;
};

export const expressions = {
  headline: "One Calling. Different Places.",
  intro: "Marketplace Ministry is the conviction underneath everything I do.",
  items: [
    {
      id: sectionIds.ministry,
      name: "Ministry",
      description:
        "Preaching, teaching, pastoral leadership, biblical formation, and helping people discover the transforming power of Jesus Christ.",
      icon: "ministry",
      cta: { label: "Learn More", href: links.ministryPage },
    },
    {
      name: "Marketplace",
      description:
        "Equipping entrepreneurs, leaders, and professionals to understand business, stewardship, wealth creation, ownership, and influence through a Kingdom lens.",
      icon: "marketplace",
      cta: { label: "Learn More", href: links.marketplacePage },
    },
    {
      name: "Morementum",
      description:
        "A community of Christian entrepreneurs and leaders committed to meeting the Builder before we build.",
      motto: "Worship Before Work.",
      icon: "morementum",
      cta: { label: "Discover Morementum", href: links.morementum },
    },
    {
      id: sectionIds.impact,
      name: "Impact",
      description:
        "Creating educational opportunity and changing trajectories through initiatives such as Clothespins, Inc.",
      icon: "impact",
      cta: { label: "Learn More", href: links.impactPage },
    },
    {
      name: "Global Development",
      description:
        "Exploring entrepreneurial and economic opportunities that create jobs, strengthen communities, and build local capacity, particularly in Liberia and across Africa.",
      icon: "global",
      cta: { label: "Learn More", href: links.globalDevelopmentPage },
    },
  ] as Expression[],
};

/* -------------------------------------------------------------------------- */
/* Speaking / Resources / Connection                                           */
/* -------------------------------------------------------------------------- */

export type ConnectCard = {
  id: string;
  headline: string[];
  body: string;
  cta: CtaContent;
  image: ImageAsset;
};

export const connect = {
  heading: "Speaking, resources and connection",
  cards: [
    {
      id: sectionIds.speaking,
      headline: ["Bring Cedric", "to your next", "gathering."],
      body: "Faith. Leadership. Marketplace. Purpose. Impact.",
      cta: { label: "Invite Cedric", href: links.speakingInquiry },
      image: images.connect.speaking,
    },
    {
      id: sectionIds.resources,
      headline: ["Resources to", "Think. Grow. Build."],
      body: "Teaching, articles, books, devotionals, and tools to strengthen faith and increase capacity.",
      cta: { label: "Explore Resources", href: links.resourceLibrary },
      image: images.connect.resources,
    },
    {
      id: sectionIds.contact,
      headline: ["Stay connected.", "Be part of the", "movement."],
      body: "Join the journey and receive updates, teaching, and opportunities to be involved.",
      cta: { label: "Connect with Cedric", href: links.connectForm },
      image: images.connect.movement,
    },
  ] as ConnectCard[],
};
