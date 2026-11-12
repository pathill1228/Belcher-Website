"use client";

import { useEffect, useId, useRef, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Cta } from "@/components/ui/Cta";
import { links } from "@/data/links";
import { primaryCta, primaryNav } from "@/data/navigation";
import { cn } from "@/lib/cn";
import { isActivePath } from "@/lib/navigation";
import { Wordmark } from "./Wordmark";

const DESKTOP_QUERY = "(min-width: 1024px)";

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
      <div className="mx-auto flex h-header w-full max-w-site items-center justify-between gap-6 px-6 sm:px-8 xl:px-12">
        <Link
          href={links.home}
          aria-label="Cedric Belcher, Marketplace Minister — home"
          className="flex min-h-11 items-center"
          onClick={closeMenu}
        >
          <Wordmark />
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-x-3.5 xl:gap-x-8">
            {primaryNav.map((item) => {
              const active = isActivePath(item.href, pathname);
              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "type-label relative flex min-h-11 items-center text-[0.6875rem] tracking-[0.08em] xl:text-xs xl:tracking-[0.14em]",
                      "after:absolute after:inset-x-0 after:bottom-1.5 after:h-px after:origin-left after:bg-gold-light",
                      "after:transition-transform after:duration-200 hover:after:scale-x-100",
                      active ? "after:scale-x-100" : "after:scale-x-0",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li className="pl-1 xl:pl-2">
              <Cta
                href={primaryCta.href}
                className="px-4 text-[0.6875rem] tracking-[0.08em] xl:text-xs xl:tracking-[0.14em] [&>svg]:hidden xl:[&>svg]:block"
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
          className="-mr-2.5 flex size-11 items-center justify-center text-ivory lg:hidden"
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
        className="fixed inset-x-0 top-header bottom-0 overflow-y-auto border-t border-gold/30 bg-navy-deep lg:hidden"
      >
        <nav aria-label="Primary" className="mx-auto max-w-site px-6 pt-6 pb-12 sm:px-8">
          <Cta href={primaryCta.href} className="w-full justify-between" onClick={closeMenu}>
            {primaryCta.label}
          </Cta>
          <ul className="mt-4 divide-y divide-ivory/10">
            {primaryNav.map((item) => {
              const active = isActivePath(item.href, pathname);
              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className="flex min-h-14 items-center gap-4 font-serif text-xl tracking-[0.06em] uppercase"
                    onClick={closeMenu}
                  >
                    <span
                      aria-hidden="true"
                      className={cn("h-px w-6 bg-gold-light", !active && "invisible")}
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
