import type { ReactNode } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { Href } from "@/data/links";
import { cn } from "@/lib/cn";
import { isExternalHref, isProtocolHref } from "@/lib/navigation";

type Variant = "outline" | "text";
type Tone = "dark" | "light";

type CtaProps = {
  /** Destination from src/data/links.ts. `null` renders a non-interactive "Soon" label. */
  href: Href;
  children: ReactNode;
  variant?: Variant;
  /** The background the CTA sits on. */
  tone?: Tone;
  className?: string;
  onClick?: () => void;
};

const layout: Record<Variant, string> = {
  outline: "min-h-11 border px-5 py-3",
  text: "min-h-11",
};

const live: Record<Variant, Record<Tone, string>> = {
  outline: {
    dark: "border-gold-light text-gold-light hover:bg-gold-light hover:text-navy-deep",
    light: "border-gold-dark text-gold-dark hover:bg-gold-dark hover:text-ivory",
  },
  text: {
    dark: "text-gold-light underline decoration-1 underline-offset-[6px] hover:text-ivory",
    light: "text-gold-dark underline decoration-1 underline-offset-[6px] hover:text-navy",
  },
};

const pending: Record<Variant, Record<Tone, string>> = {
  outline: {
    dark: "border-ivory/25 text-ivory/75",
    light: "border-charcoal/25 text-gray",
  },
  text: {
    dark: "text-ivory/75",
    light: "text-gray",
  },
};

/**
 * The site's call-to-action: an outlined button or an underlined text link.
 * Internal hrefs use next/link, web links open in a new tab, mailto:/tel:
 * links are plain anchors, and
 * destinations that do not exist yet render as plain text marked "Soon".
 */
export function Cta({
  href,
  children,
  variant = "outline",
  tone = "dark",
  className,
  onClick,
}: CtaProps) {
  const base = cn("type-label inline-flex items-center gap-x-2.5", layout[variant]);

  if (href === null) {
    return (
      <span
        className={cn(base, "cursor-default flex-wrap gap-y-1", pending[variant][tone], className)}
      >
        <span className="whitespace-nowrap">{children}</span>
        <span aria-hidden="true" className="border-l border-current/40 pl-2.5 text-[0.625rem]">
          Soon
        </span>
        <span className="sr-only">(coming soon)</span>
      </span>
    );
  }

  const classes = cn(base, "whitespace-nowrap transition-colors duration-200", live[variant][tone], className);
  const content = (
    <>
      {children}
      <ChevronRight aria-hidden="true" strokeWidth={1.75} className="size-3.5 shrink-0" />
    </>
  );

  if (isExternalHref(href)) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} onClick={onClick}>
        {content}
        <span className="sr-only">(opens in a new tab)</span>
      </a>
    );
  }

  if (isProtocolHref(href)) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} onClick={onClick}>
      {content}
    </Link>
  );
}
