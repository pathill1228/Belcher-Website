"use client";

import { useEffect, useId, useRef, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Cta } from "@/components/ui/Cta";
import { links } from "@/data/links";
import { primaryCta, primaryNav } from "@/data/navigation";
import { cn } from "@/lib/cn";
import { findActiveHref } from "@/lib/navigation";
import { Wordmark } from "./Wordmark";

// Seven labels plus the CTA need ~1,100px; below this the menu button is used.
const DESKTOP_QUERY = "(min-width: 1280px)";

function subscribeToScroll(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  return () => window.removeEventListener("scroll", onChange);
}

/** True once the page has scrolled away from the very top. */
function useScrolled() {
  return useSyncExternalStore(
    subscribeToScroll,
    () => window.scrollY > 8,
    () => false,
  );
}

export function Header() {
  const pathname = usePathname();
  const scrolled = useScrolled();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    const desktop = window.matchMedia(DESKTOP_QUERY);
    const onBreakpoint = () => {
      if (desktop.matches) setMenuOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onBreakpoint);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onBreakpoint);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);
  const activeHref = findActiveHref(primaryNav, pathname);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b bg-navy-deep text-ivory transition-[border-color,box-shadow] duration-300",
        scrolled && !menuOpen
          ? "border-gold/30 shadow-lg shadow-navy-deep/40"
          : "border-transparent",
      )}
      // Tabbing out of the open menu closes it, so focus never sits behind the overlay.
      onBlur={(event) => {
        if (menuOpen && event.relatedTarget && !event.currentTarget.contains(event.relatedTarget)) {
          closeMenu();
        }
      }}
    >
      <div className="mx-auto flex h-header w-full max-w-site items-center justify-between gap-10 px-6 sm:px-8 xl:px-12">
        <Link
          href={links.home}
          aria-label="Cedric Belcher, Marketplace Minister — home"
          className="flex min-h-11 items-center"
          onClick={closeMenu}
        >
          <Wordmark />
        </Link>

        <nav aria-label="Primary" className="hidden xl:block">
          <ul className="flex items-center gap-x-5 2xl:gap-x-6">
            {primaryNav.map((item) => {
              const active = item.href === activeHref;
              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "type-label relative flex min-h-11 items-center whitespace-nowrap text-[0.6875rem] tracking-[0.1em] transition-colors duration-200 2xl:text-xs 2xl:tracking-[0.12em]",
                      "after:absolute after:inset-x-0 after:bottom-1 after:origin-left after:transition-transform after:duration-200",
                      // Active: gold text on a solid 2px gold rule, always visible.
                      // Hover: brighter text and a fine ivory rule — never mistaken for active.
                      active
                        ? "text-gold-light after:h-0.5 after:scale-x-100 after:bg-gold-light"
                        : "text-ivory/80 after:h-px after:scale-x-0 after:bg-ivory/50 hover:text-ivory hover:after:scale-x-100",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li className="pl-1 2xl:pl-2">
              <Cta
                href={primaryCta.href}
                className="px-4 text-[0.6875rem] tracking-[0.1em] 2xl:text-xs 2xl:tracking-[0.12em] [&>svg]:hidden 2xl:[&>svg]:block"
              >
                {primaryCta.label}
              </Cta>
            </li>
          </ul>
        </nav>

        <button
          ref={menuButtonRef}
          type="button"
          aria-expanded={menuOpen}
          aria-controls={menuId}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="-mr-2.5 flex size-11 items-center justify-center text-ivory xl:hidden"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            <X aria-hidden="true" strokeWidth={1.5} className="size-6" />
          ) : (
            <Menu aria-hidden="true" strokeWidth={1.5} className="size-6" />
          )}
        </button>
      </div>

      <div
        id={menuId}
        hidden={!menuOpen}
        className="fixed inset-x-0 top-header bottom-0 overflow-y-auto border-t border-gold/30 bg-navy-deep xl:hidden"
      >
        <nav aria-label="Primary" className="mx-auto max-w-site px-6 pt-6 pb-12 sm:px-8">
          <Cta href={primaryCta.href} className="w-full justify-between" onClick={closeMenu}>
            {primaryCta.label}
          </Cta>
          <ul className="mt-4 divide-y divide-ivory/10">
            {primaryNav.map((item) => {
              const active = item.href === activeHref;
              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "flex min-h-14 items-center gap-4 font-serif text-xl tracking-[0.06em] uppercase",
                      active ? "text-gold-light" : "text-ivory",
                    )}
                    onClick={closeMenu}
                  >
                    <span
                      aria-hidden="true"
                      className={cn("h-0.5 w-6 bg-gold-light", !active && "invisible")}
                    />
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
