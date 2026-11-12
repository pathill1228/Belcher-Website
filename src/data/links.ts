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

const anchor = (id: string) => `/#${id}`;

export const links = {
  home: "/",

  /* Primary navigation — swap an anchor for a route once the page exists. */
  about: anchor(sectionIds.story),
  ministry: anchor(sectionIds.ministry),
  marketplace: anchor(sectionIds.marketplace),
  impact: anchor(sectionIds.impact),
  resources: anchor(sectionIds.resources),
  speaking: anchor(sectionIds.speaking),
  contact: anchor(sectionIds.contact),

  /* Calls to action with a destination today. */
  discoverVision: anchor(sectionIds.vision),
  inviteCedric: anchor(sectionIds.speaking),

  /* Calls to action waiting on future pages or forms. */
  manifesto: null, // → /about or /marketplace (manifesto)
  story: null, // → /about
  exploreVision: null, // → /marketplace
  speakingInquiry: null, // → /speaking (inquiry form)
  resourceLibrary: null, // → /resources
  connectForm: null, // → /contact
  ministryPage: null, // → /ministry
  marketplacePage: null, // → /marketplace
  morementum: null, // → Morementum site (URL not yet supplied)
  impactPage: null, // → /impact
  globalDevelopmentPage: null, // → /impact or dedicated page
  privacy: null, // → /privacy
  terms: null, // → /terms
} satisfies Record<string, Href>;
