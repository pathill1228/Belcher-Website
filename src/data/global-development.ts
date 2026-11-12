/**
 * /global-development — the global development vision.
 *
 * Documented in /references: "Exploring entrepreneurial and economic
 * opportunities that create jobs, strengthen communities, and build local
 * capacity, particularly in Liberia and across Africa." Everything here is
 * written as vision and interest — no completed projects, partners or places.
 */

import type { FeatureItem } from "@/components/ui/FeatureColumns";
import { externalLinks } from "@/config/external";
import { images } from "./images";
import { links, pageSectionIds, routes } from "./links";

export const globalDevelopmentPage = {
  meta: {
    title: "Global Development",
    description:
      "Cedric N. Belcher, Sr.’s vision for entrepreneurship, education and economic opportunity that creates jobs, strengthens communities and builds local capacity — particularly in Liberia and across Africa.",
  },

  hero: {
    eyebrow: "Global Development",
    title: ["Building opportunity.", "Strengthening communities."],
    text: "A vision for entrepreneurship, education, and economic opportunity that strengthens communities and expands what people can build.",
  },

  vision: {
    label: "The Vision",
    heading: ["Development", "begins with", "opportunity."],
    paragraphs: [
      "My interest in global development is the same calling at a wider scale: exploring entrepreneurial and economic opportunities that create jobs, strengthen communities, and build local capacity.",
      "Lasting development is not something done to a community. It grows from opportunity that people can take hold of — the chance to learn, to work, to own, and to build.",
    ],
    principles: [
      "Sustainable opportunity",
      "Local capacity",
      "Entrepreneurship",
      "Economic participation",
      "Education",
      "Community strength",
    ],
  },

  liberia: {
    label: "Liberia and Beyond",
    heading: ["Rooted in Liberia.", "Looking toward the future."],
    paragraphs: [
      "Liberia is where my story began. I was born there, and I was displaced by war.",
      "That is why my vision for development focuses particularly on Liberia and extends across Africa — toward opportunity that is built with communities and strengthens them from within.",
      "This vision is still taking shape. As specific efforts are confirmed, they will be shared here.",
    ],
    image: images.story.journey,
  },

  focus: {
    label: "Areas of Focus",
    heading: "Where the vision points.",
    items: [
      {
        title: "Entrepreneurship",
        body: "Supporting business creation, ownership, and innovation as pathways toward opportunity.",
        icon: "entrepreneurship",
      },
      {
        title: "Economic opportunity",
        body: "Exploring ways to strengthen economic participation and create the conditions for job creation.",
        icon: "economics",
      },
      {
        title: "Community capacity",
        body: "Developing the knowledge, relationships, and resources that help communities build lasting opportunities.",
        icon: "build",
      },
    ] satisfies FeatureItem[],
  },

  clothespins: {
    id: pageSectionIds.globalDevelopment.clothespins,
    label: "Clothespins, Inc.",
    heading: ["Education creates", "opportunity."],
    paragraphs: [
      "Clothespins, Inc. is connected to the conviction at the heart of this work: education creates opportunity, and opportunity changes trajectories.",
      "It is one related initiative within a broader vision — and the best place to learn more about Clothespins and its work.",
    ],
    cta: { label: "Explore Clothespins", href: externalLinks.clothespins },
    image: images.impact.clothespins,
  },

  closing: {
    heading: ["Create opportunity.", "Build capacity.", "Expand possibility."],
    body: "Global development is one more place the Marketplace Minister calling is expressed: engaging communities, enlightening possibilities, and empowering people to build.",
    primaryCta: { label: "Impact", href: routes.impact },
    secondaryCta: { label: "Discover the Vision", href: links.discoverVision },
  },
};
