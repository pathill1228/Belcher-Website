/**
 * Whether a navigation href points at the page currently being viewed.
 * The hash is ignored, so "/marketplace#ministry" matches /marketplace.
 * Homepage anchors (e.g. "/#story") never count: they are sections, not pages,
 * so HOME stays the only active item on the homepage.
 */
export function isActivePath(href: string, pathname: string): boolean {
  const [path, hash] = href.split("#");
  const target = path || "/";
  if (target === "/") return hash === undefined && pathname === "/";
  return pathname === target || pathname.startsWith(`${target}/`);
}

/**
 * The single nav href to mark as current. When several items share a page
 * (Ministry and Marketplace both live on /marketplace), the first one wins,
 * so only one item ever carries aria-current="page".
 */
export function findActiveHref(items: readonly { href: string }[], pathname: string): string | null {
  return items.find((item) => isActivePath(item.href, pathname))?.href ?? null;
}

/** Off-site web links (opened in a new tab). */
export function isExternalHref(href: string): boolean {
  return /^(https?:)?\/\//.test(href);
}

/** mailto: and tel: links — handled by the device, not the router. */
export function isProtocolHref(href: string): boolean {
  return href.startsWith("mailto:") || href.startsWith("tel:");
}
