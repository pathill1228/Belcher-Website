/**
 * /morementum — an informational page for Morementum.
 *
 * Documented in /references: "A community of Christian entrepreneurs and
 * leaders committed to meeting the Builder before we build. Worship Before
 * Work." Morementum will eventually have its own website. Nothing here
 * describes programs, membership or results that have not been documented.
 */

import type { FeatureItem } from "@/components/ui/FeatureColumns";
import { links, pageSectionIds } from "./links";

/**
 * Daily prayer call details.
 *
 * No phone number, meeting link, schedule or time zone has been confirmed.
 * Fill these in when they are final — the page then shows a "Call in" and/or
 * "Join online" action automatically. Leave a field undefined to hide it.
 */
export type PrayerCallConfig = {
  title: string;
  description: string;
  /** Dial-in number exactly as it should be displayed, e.g. "+1 (555) 010-0000". */
  phoneNumber?: string;
  /** Optional access code callers need after dialing. */
  accessCode?: string;
  /** Full https:// URL for joining online. */
  meetingUrl?: string;
  /** Human-readable schedule, e.g. "Weekdays at 6:00 AM". */
  schedule?: string;
  /** Time zone for the schedule, e.g. "Central Time (CT)". */
  timezone?: string;
};

export const prayerCall: PrayerCallConfig = {
  title: "Morementum Daily Prayer Call",
  description:
    "A simple, regular opportunity to gather in prayer before the work of the day begins.",
};

export const morementumPage = {
  meta: {
    title: "Morementum | Worship Before Work",
    description:
      "Morementum is a community of Christian entrepreneurs and leaders committed to meeting the Builder before we build. Learn about its philosophy and its planned daily prayer call.",
  },

  hero: {
    eyebrow: "Morementum",
    title: ["Worship", "before work."],
    text: "A community of Christian entrepreneurs and leaders committed to meeting the Builder before we build.",
  },

  about: {
    label: "What Is Morementum?",
    heading: ["Before we build,", "we seek the Builder."],
    paragraphs: [
      "Morementum is a community of Christian entrepreneurs and leaders committed to meeting the Builder before we build.",
      "Its conviction is simple: the work of our hands should begin in the presence of God. Before the meetings, the decisions, and the plans, we seek the One who gives ideas, creativity, resources, opportunities, and the ability to create.",
      "Morementum is one expression of the Marketplace Minister calling — bringing together people who want their faith to shape how they lead and what they build.",
    ],
    note: "Morementum is in its early stages. A dedicated Morementum website is planned; until then, this page introduces the vision behind it.",
  },

  philosophy: {
    label: "The Philosophy",
    heading: "Faith first. Purpose in motion.",
    intro: "The convictions behind Morementum.",
    items: [
      {
        title: "Seek God first",
        body: "Bring plans, decisions, and ambitions before God before acting on them.",
        icon: "morementum",
      },
      {
        title: "Grounded in prayer",
        body: "Let prayer be the foundation of the work, not an afterthought to it.",
        icon: "worship",
      },
      {
        title: "Lead with purpose",
        body: "Treat leadership as stewardship of people, influence, and opportunity.",
        icon: "direction",
      },
      {
        title: "Build with conviction",
        body: "Pursue excellence in enterprise without sacrificing biblical conviction.",
        icon: "craft",
      },
      {
        title: "Steward faithfully",
        body: "Hold resources as tools placed under God’s authority, with somewhere to go.",
        icon: "stewardship",
      },
      {
        title: "Grow in community",
        body: "Encourage one another, sharpen one another, and grow together.",
        icon: "engage",
      },
    ] satisfies FeatureItem[],
  },

  prayer: {
    id: pageSectionIds.morementum.prayerCall,
    label: "Daily Prayer",
    heading: ["Start the day", "with purpose."],
    paragraphs: [
      "Morementum is planned to include a daily prayer call — a place to call in, pray together, and begin the day’s work and leadership from a place of faith.",
      "It will start small and simply: an opportunity for spiritual encouragement and for connection with others pursuing purpose-driven work.",
    ],
    intentions: [
      "Gather regularly in prayer",
      "Receive spiritual encouragement",
      "Begin work and leadership from a place of faith",
      "Connect with others pursuing purpose-driven work",
    ],
    pendingStatus: "Prayer call details coming soon.",
    pendingNote: "The schedule and how to join will be published here once they are confirmed.",
  },

  audience: {
    label: "Who It Is For",
    heading: ["For those", "called to build."],
    intro: "Morementum is for people who want their faith and their work to move in the same direction.",
    groups: [
      { title: "Christian entrepreneurs", body: "Founders and owners building enterprises with Kingdom purpose." },
      { title: "Business leaders", body: "Executives and managers who carry influence over people and resources." },
      { title: "Professionals", body: "Men and women whose daily work is part of their calling." },
      { title: "Emerging leaders", body: "Those preparing to lead, build, and take on greater responsibility." },
      { title: "Anyone integrating faith and work", body: "People seeking to bring their whole faith into their whole life." },
    ],
  },

  closing: {
    heading: ["Meet the Builder", "before you build."],
    label: "Worship Before Work",
    body: "Morementum is part of a larger conviction: that ministry extends beyond the church and into the places where people work, lead, and build.",
    primaryCta: { label: "Ministry & Marketplace", href: links.marketplacePage },
    secondaryCta: { label: "Discover the Vision", href: links.discoverVision },
  },
};
