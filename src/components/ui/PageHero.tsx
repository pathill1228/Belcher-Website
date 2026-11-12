import type { ReactNode } from "react";
import { Container } from "./Container";
import { Lines } from "./Lines";

type PageHeroProps = {
  eyebrow: string;
  /** Headline lines. Each breaks onto its own line from `sm` up; on phones it wraps naturally. */
  title: readonly string[];
  /** Supporting line beneath the gold divider. */
  text?: string;
  /** Set when `text` is Cedric's own words: adds quotation marks and blockquote semantics. */
  quoted?: boolean;
  /** Optional short line in gold beneath the supporting text. */
  emphasis?: string;
  /** Optional actions (Cta components). */
  children?: ReactNode;
};

/**
 * The inner-page hero: centered serif headline on navy, gold eyebrow and
 * divider, italic supporting line. Renders the page's single <h1>.
 *
 * Deliberately distinct from the homepage's split portrait hero, so visitors
 * can tell at a glance that they have entered a new section of the site.
 */
export function PageHero({ eyebrow, title, text, quoted = false, emphasis, children }: PageHeroProps) {
  return (
    <section aria-labelledby="page-hero-heading" className="bg-navy text-ivory">
      <Container>
        <div className="mx-auto flex max-w-6xl flex-col py-14 sm:items-center sm:py-16 sm:text-center lg:py-20">
          <p className="type-eyebrow text-gold-light">{eyebrow}</p>
          <h1
            id="page-hero-heading"
            className="mt-4 font-serif text-[clamp(2.25rem,1.5rem+3.2vw,4.25rem)] leading-[1.04] tracking-[0.01em] text-balance uppercase"
          >
            <Lines lines={title} lineClassName="sm:block" />
          </h1>

          <span aria-hidden="true" className="mt-7 block h-px w-10 bg-gold-light" />

          {text &&
            (quoted ? (
              <blockquote className="type-quote mt-6 max-w-xl text-balance text-ivory/95">
                <p>“{text}”</p>
              </blockquote>
            ) : (
              <p className="type-quote mt-6 max-w-xl text-balance text-ivory/95">{text}</p>
            ))}
          {emphasis && <p className="mt-4 font-semibold text-gold-light">{emphasis}</p>}
          {children && (
            <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-2 sm:justify-center">
              {children}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
