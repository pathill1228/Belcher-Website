/**
 * Every link destination on the site, in one place.
 *
 * A destination is either a valid href or `null`. `null` means "the page this
 * points to has not been built yet": the Cta component then renders a
 * non-interactive "Soon" label instead of a dead link.
 *
 * When a page ships, change its entry here (e.g. `manifesto: "/about#manifesto"`)
 * and every button that references it becomes a live link.
 */

export type Href = string | null;

/** Anchor ids for homepage sections. Use these for `id` props and hrefs alike. */
export const sectionIds = {
  top: "top",
  marketplace: "marketplace",
  method: "method",
  story: "story",
  vision: "vision",
  expressions: "expressions",
  ministry: "ministry",
  impact: "impact",
  connect: "connect",
  speaking: "speaking",
  resources: "resources",
  contact: "contact",
} as const;

/** Anchor ids used on inner pages. */
export const pageSectionIds = {
  marketplace: { ministry: "ministry", marketplace: "marketplace" },
  morementum: { prayerCall: "prayer-call" },
  impact: { initiatives: "initiatives" },
  globalDevelopment: { clothespins: "clothespins" },
} as const;

/** Routes that exist. Add new pages here first. */
export const routes = {
  home: "/",
  marketplace: "/marketplace",
  morementum: "/morementum",
  impact: "/impact",
  globalDevelopment: "/global-development",
} as const;

const anchor = (id: string) => `/#${id}`;
const ministrySection = `${routes.marketplace}#${pageSectionIds.marketplace.ministry}`;
const marketplaceSection = `${routes.marketplace}#${pageSectionIds.marketplace.marketplace}`;

export const links = {
  home: routes.home,

  /* Primary navigation — swap an anchor for a route once the page exists. */
  about: anchor(sectionIds.story),
  ministry: ministrySection,
  marketplace: marketplaceSection,
  impact: routes.impact,
  resources: anchor(sectionIds.resources),
  speaking: anchor(sectionIds.speaking),
  contact: anchor(sectionIds.contact),

  /* Calls to action with a destination today. */
  discoverVision: anchor(sectionIds.vision),
  inviteCedric: anchor(sectionIds.speaking),
  ministryPage: ministrySection,
  marketplacePage: marketplaceSection,
  morementum: routes.morementum,
  impactPage: routes.impact,
  globalDevelopmentPage: routes.globalDevelopment,

  /* Calls to action waiting on future pages or forms. */
  manifesto: null, // → /about or /marketplace (manifesto)
  story: null, // → /about
  exploreVision: null, // → a dedicated vision page, if one is built
  speakingInquiry: null, // → /speaking (inquiry form)
  resourceLibrary: null, // → /resources
  connectForm: null, // → /contact
  privacy: null, // → /privacy
  terms: null, // → /terms
} satisfies Record<string, Href>;
