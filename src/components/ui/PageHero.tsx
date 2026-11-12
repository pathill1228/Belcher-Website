import type { ReactNode } from "react";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
  /** Optional actions (Cta components) shown beneath the intro. */
  children?: ReactNode;
};

/**
 * Navy title band for interior pages (/about, /ministry, …).
 * Renders the page's single <h1>. The homepage uses its own Hero instead.
 */
export function PageHero({ eyebrow, title, intro, children }: PageHeroProps) {
  return (
    <section aria-labelledby="page-hero-heading" className="section-y bg-navy text-ivory">
      <Container>
        <SectionHeading
          as="h1"
          id="page-hero-heading"
          eyebrow={eyebrow}
          intro={intro}
          tone="dark"
          className="max-w-3xl"
        >
          {title}
        </SectionHeading>
        {children && <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">{children}</div>}
      </Container>
    </section>
  );
}
