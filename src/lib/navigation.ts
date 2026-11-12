/**
 * Whether a navigation href represents the page currently being viewed.
 * In-page anchors (e.g. "/#vision") never count as the active page, so the
 * indicator only moves once a nav item points at a real route.
 */
export function isActivePath(href: string, pathname: string): boolean {
  if (href.includes("#")) return false;
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function isExternalHref(href: string): boolean {
  return /^(https?:)?\/\//.test(href) || href.startsWith("mailto:") || href.startsWith("tel:");
}
