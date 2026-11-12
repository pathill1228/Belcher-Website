import type { ReactNode } from "react";
import { Container } from "./Container";
import { Lines } from "./Lines";

type ClosingStatementProps = {
  headingId: string;
  label?: string;
  heading: readonly string[];
  body?: string;
  /** Optional content between the copy and the actions (e.g. the rhythm row). */
  feature?: ReactNode;
  /** Actions (Cta components). */
  children?: ReactNode;
};

/**
 * The navy closing band that ends every inner page: a centered serif
 * statement with a gold rule, optional supporting line and next steps.
 */
export function ClosingStatement({
  headingId,
  label,
  heading,
  body,
  feature,
  children,
}: ClosingStatementProps) {
  return (
    <section aria-labelledby={headingId} className="section-y bg-navy text-ivory">
      <Container className="flex flex-col items-start sm:items-center sm:text-center">
        {label && <p className="type-eyebrow text-gold-light">{label}</p>}
        <h2
          id={headingId}
          className="mt-4 max-w-4xl font-serif text-[clamp(1.875rem,1.3rem+2.4vw,3.25rem)] leading-[1.12] tracking-[0.015em] uppercase"
        >
          <Lines lines={heading} lineClassName="sm:block" />
        </h2>
        <span aria-hidden="true" className="mt-7 block h-px w-10 bg-gold-light" />
        {body && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ivory/85">{body}</p>
        )}
        {feature && <div className="mt-10 w-full">{feature}</div>}
        {children && (
          <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 sm:justify-center">
            {children}
          </div>
        )}
      </Container>
    </section>
  );
}
