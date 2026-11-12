/**
 * /impact — opportunity, education and community.
 *
 * Biographical facts are limited to the documented story sequence (Liberia,
 * war, refugee, scholarship, pastor, builder, Marketplace Minister). The only
 * documented initiative is Clothespins, Inc. Add further initiatives and
 * stories below only when they are verified.
 */

import type { FeatureItem } from "@/components/ui/FeatureColumns";
import type { NumberedItem } from "@/components/ui/NumberedList";
import { externalLinks } from "@/config/external";
import { images, type ImageAsset } from "./images";
import { links, pageSectionIds, routes } from "./links";

export type InitiativeCategory = "Education" | "Leadership" | "Community" | "Economic development";

/** An initiative connected to Cedric's impact work. */
export type Initiative = {
  title: string;
  description: string;
  category: InitiativeCategory;
  image?: ImageAsset;
  /** Where the initiative operates, once confirmed. */
  location?: string;
  /** Official external site. */
  url?: string;
  /** Label for the external link. */
  urlLabel?: string;
};

/**
 * A documented story or outcome. Leave the list empty until there is a
 * verified story to tell — the page hides this area when it is empty.
 */
export type ImpactStory = {
  title: string;
  summary: string;
  category: InitiativeCategory;
  image?: ImageAsset;
  location?: string;
  url?: string;
  /** ISO date, e.g. "2027-03-15". */
  publishedDate?: string;
  /** A confirmed, attributable outcome. Never estimate. */
  verifiedOutcome?: string;
};

export const initiatives: Initiative[] = [
  {
    title: "Clothespins, Inc.",
    description:
      "Clothespins, Inc. is part of how this work creates educational opportunity and changes trajectories. Education is one of the clearest ways an opportunity can change the direction of a life.",
    category: "Education",
    image: images.impact.clothespins,
    url: externalLinks.clothespins,
    urlLabel: "Explore Clothespins",
  },
];

export const impactStories: ImpactStory[] = [];

export const impactPage = {
  meta: {
    title: "Impact & Opportunity",
    description:
      "Somebody created an opportunity for me. Now I want to create opportunities for others. Cedric N. Belcher, Sr. on educational opportunity, leadership and community — including Clothespins, Inc.",
  },

  hero: {
    eyebrow: "Impact",
    title: ["Creating opportunities.", "Changing trajectories."],
    quote: "Somebody created an opportunity for me. Now I want to create opportunities for others.",
    image: images.impact.hero,
  },

  story: {
    label: "From Opportunity to Responsibility",
    heading: ["An opportunity", "can change a life."],
    paragraphs: [
      "My story begins in Liberia. I was displaced by war and lived as a refugee. Then came an opportunity — a scholarship — and with it, an education.",
      "That opportunity opened a path that led to pastoral ministry, to building, and to the calling I now describe as Marketplace Ministry.",
      "I know what one opportunity can do. That is why impact is not a side project to my calling. It is my response to what I have received.",
    ],
    sequence: [
      "Born in Liberia.",
      "Displaced by war.",
      "Refugee.",
      "Scholarship recipient.",
      "Pastor.",
      "Builder.",
      "Marketplace Minister.",
    ],
  },

  areas: {
    label: "Areas of Impact",
    heading: "Where opportunity takes shape.",
    items: [
      {
        title: "Educational opportunity",
        body: "Access to education changes personal trajectories. The aim is to help open doors to learning that might otherwise stay closed.",
        icon: "education",
      },
      {
        title: "Leadership & empowerment",
        body: "Equipping people with knowledge, wisdom, relationships, and capacity, so they are prepared to lead and to build.",
        icon: "empower",
      },
      {
        title: "Community development",
        body: "Strengthening communities through opportunity and practical action — work that serves families and neighborhoods, not only individuals.",
        icon: "impact",
      },
    ] satisfies FeatureItem[],
  },

  initiatives: {
    id: pageSectionIds.impact.initiatives,
    label: "Initiatives",
    heading: ["Opportunity,", "put to work."],
    intro: "Impact is carried out through initiatives that share the same conviction.",
  },

  philosophy: {
    label: "Impact Philosophy",
    heading: ["From receiving", "opportunity to", "creating it."],
    paragraphs: [
      "The goal is not simply individual success. It is to widen the door that once opened for me — so that more people can walk through it.",
    ],
    method: [
      { title: "Engage.", body: "Be present with people and communities — listening, learning, and understanding their challenges." },
      { title: "Enlighten.", body: "Share principles, knowledge, and possibilities that help people see beyond their present circumstances." },
      { title: "Empower.", body: "Help provide the resources, relationships, and capacity people need to act on what they now see." },
    ] satisfies NumberedItem[],
  },

  future: {
    label: "The Work Continues",
    heading: ["Impact is measured", "in years, not moments."],
    body: "As initiatives develop, their stories will be shared here — reported as they happen, and only as they are confirmed.",
  },

  closing: {
    heading: ["Opportunity changes", "what is possible."],
    body: "The same conviction extends beyond borders — toward entrepreneurship, economic opportunity, and stronger communities in Liberia and across Africa.",
    primaryCta: { label: "Global Development", href: routes.globalDevelopment },
    secondaryCta: { label: "Back to Home", href: links.home },
  },
};
