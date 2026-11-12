/**
 * /marketplace — Ministry & Marketplace.
 * Copy draws on the Marketplace Minister manifesto and the homepage build
 * spec in /references. Quoted lines are Cedric's own words from those documents.
 */

import type { FeatureItem } from "@/components/ui/FeatureColumns";
import type { NumberedItem } from "@/components/ui/NumberedList";
import { images } from "./images";
import { links, pageSectionIds } from "./links";

export const marketplacePage = {
  meta: {
    title: "Ministry & Marketplace",
    description:
      "Cedric N. Belcher, Sr. on one calling expressed in two places: preaching, teaching and pastoral leadership in the church, and Kingdom-minded entrepreneurship, stewardship and leadership in the marketplace.",
  },

  hero: {
    eyebrow: "Ministry & Marketplace",
    title: ["One calling.", "Beyond the church walls."],
    quote: "My pulpit may be in the church, but my ministry extends into the world.",
    intro:
      "Faith and leadership are not separate from the marketplace. The God who calls pastors also calls entrepreneurs — and the same calling that leads me into the pulpit leads me into the places that shape society.",
    image: images.marketplace.hero,
  },

  /** In-page jump links shown beneath the hero. */
  jumpLinks: [
    { label: "Ministry", href: `#${pageSectionIds.marketplace.ministry}` },
    { label: "Marketplace", href: `#${pageSectionIds.marketplace.marketplace}` },
    { label: "Three Spheres", href: "#spheres" },
    { label: "The Method", href: "#method" },
  ],

  calling: {
    label: "The Calling",
    heading: ["Faith that moves", "beyond Sunday."],
    paragraphs: [
      "I believe my calling to ministry does not end when I leave the pulpit, and my responsibility to the Kingdom of God does not stop at the doors of the church.",
      "The God who calls pastors also calls entrepreneurs. The God who gives spiritual gifts also gives ideas, creativity, resources, opportunities, and the ability to create wealth. Therefore, I refuse to separate my faith from the marketplace.",
    ],
    quote:
      "I am called not only to preach the Gospel but to carry the principles of the Kingdom into the places that shape society.",
  },

  ministry: {
    id: pageSectionIds.marketplace.ministry,
    label: "Ministry",
    heading: ["Preaching. Teaching.", "Transforming lives."],
    paragraphs: [
      "At the center of my calling is the ministry of the Word: preaching, teaching, pastoral leadership, and biblical formation — helping people discover the transforming power of Jesus Christ.",
      "Ministry is more than what happens in a service. It is the patient work of forming people: helping them grow spiritually, understand and apply biblical principles, and live with purpose wherever God places them.",
    ],
    focus: [
      { title: "Preaching & teaching", body: "Proclaiming the Gospel and opening the Scriptures with clarity and conviction." },
      { title: "Pastoral leadership", body: "Shepherding people with care, wisdom, and faithfulness." },
      { title: "Biblical formation", body: "Helping believers understand and apply biblical principles to everyday life." },
      { title: "Purposeful living", body: "Equipping people to carry their faith into their families, work, and communities." },
    ],
    image: images.marketplace.ministry,
  },

  marketplace: {
    id: pageSectionIds.marketplace.marketplace,
    label: "Marketplace",
    heading: ["Where faith", "meets influence."],
    paragraphs: [
      "In the marketplace, my work is equipping entrepreneurs, leaders, and professionals to understand business, stewardship, wealth creation, ownership, and influence through a Kingdom lens.",
      "I believe wealth has a Kingdom purpose. Wealth should never become our god; it should become a resource placed under God’s authority. Kingdom wealth has somewhere to go: it supports ministry, advances mission, educates children, creates businesses, employs people, strengthens families, develops communities, and creates opportunities.",
    ],
    quote:
      "We are not pursuing wealth so that people can see how much we have. We are building capacity so the world can experience what the Kingdom can do.",
    focus: [
      "Entrepreneurship",
      "Business leadership",
      "Financial stewardship",
      "Wealth creation",
      "Ownership",
      "Leadership development",
      "Economic opportunity",
      "Purpose-driven influence",
    ],
    vision: {
      statement: "Raise a generation of Kingdom millionaires who become Kingdom Influencers.",
      clarifier: [
        "Millionaire is a measure of resources.",
        "Kingdom Influencer is a measure of purpose.",
      ],
    },
    image: images.marketplace.marketplace,
  },

  spheres: {
    label: "Three Spheres of Influence",
    heading: "Education. Economics. Entrepreneurship.",
    intro:
      "My calling concentrates on three critical components of society. These are centers of influence — and places where Kingdom principles can change what is possible.",
    items: [
      {
        title: "Education",
        tagline: "Shapes how people think.",
        body: "Education opens pathways to knowledge, leadership, and opportunity. It expands what a person believes is possible — and what they are prepared to pursue.",
        icon: "education",
      },
      {
        title: "Economics",
        tagline: "Shapes how people live.",
        body: "Economic understanding and faithful stewardship affect households and whole communities. How resources are earned, managed, and shared is part of living out the Kingdom.",
        icon: "economics",
      },
      {
        title: "Entrepreneurship",
        tagline: "Shapes what people can build.",
        body: "Ownership, innovation, and enterprise create the capacity to solve problems, employ people, and open opportunities for others.",
        icon: "entrepreneurship",
      },
    ] satisfies FeatureItem[],
  },

  method: {
    label: "The Method",
    heading: ["Engage. Enlighten.", "Empower."],
    intro: "The same method guides my work in the sanctuary and in the marketplace.",
    items: [
      {
        title: "Engage.",
        body: "Transformation begins with presence. I enter spaces where Kingdom influence is needed — listening, learning, building relationships, and understanding challenges.",
      },
      {
        title: "Enlighten.",
        body: "I bring biblical principles, knowledge, wisdom, ideas, and strategies that help people think differently about faith, purpose, stewardship, wealth, leadership, and opportunity.",
      },
      {
        title: "Empower.",
        body: "I help people develop the spiritual conviction, knowledge, resources, relationships, and practical capacity necessary to act — to lead, build, create, and influence.",
      },
    ] satisfies NumberedItem[],
    closing: "I don’t simply want people to hear what is possible. I want to help them build it.",
  },

  closing: {
    heading: ["Worship and work.", "Faith and action."],
    body: "Believers who can pray and build, worship and work, give and grow, serve and lead — creating wealth without worshiping wealth, and building enterprises without sacrificing biblical conviction.",
    primaryCta: { label: "Discover the Vision", href: links.discoverVision },
    secondaryCta: { label: "Invite Cedric", href: links.inviteCedric },
  },
};
