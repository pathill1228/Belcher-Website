import { links, routes, type Href } from "./links";

export type NavItem = {
  label: string;
  href: string;
};

export type FooterLink = {
  label: string;
  href: Href;
};

export type SocialPlatform = "facebook" | "instagram" | "linkedin" | "youtube";

export type SocialLink = {
  platform: SocialPlatform;
  label: string;
  /** Profile URL. Leave null until the real URL is supplied. */
  url: string | null;
};

/**
 * Primary navigation, in display order — used by the desktop header and the
 * mobile menu. The active item is derived from the URL (src/lib/navigation.ts),
 * so pointing About at a real route later needs no other change.
 */
export const primaryNav: NavItem[] = [
  { label: "Home", href: routes.home },
  { label: "About", href: links.about },
  { label: "Ministry & Marketplace", href: routes.marketplace },
  { label: "Morementum", href: routes.morementum },
  { label: "Impact", href: routes.impact },
  { label: "Global Development", href: routes.globalDevelopment },
];

/** The site's primary conversion action, shown in the header and mobile menu. */
export const primaryCta: NavItem = {
  label: "Invite Cedric",
  href: links.inviteCedric,
};

export const footerLinks: FooterLink[] = [
  { label: "Privacy Policy", href: links.privacy },
  { label: "Terms of Use", href: links.terms },
  { label: "Contact", href: links.contact },
];

/**
 * Social profiles. Icons render as plain, non-interactive marks until a URL
 * is filled in, at which point they become external links automatically.
 */
export const socialLinks: SocialLink[] = [
  { platform: "facebook", label: "Facebook", url: null },
  { platform: "instagram", label: "Instagram", url: null },
  { platform: "linkedin", label: "LinkedIn", url: null },
  { platform: "youtube", label: "YouTube", url: null },
];
