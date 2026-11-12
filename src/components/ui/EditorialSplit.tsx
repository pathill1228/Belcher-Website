import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Container } from "./Container";
import { Lines } from "./Lines";
import { Section } from "./Section";

type EditorialSplitProps = {
  id?: string;
  /** Unique id for the heading (used for aria-labelledby). */
  headingId: string;
  label?: string;
  heading: readonly string[];
  tone?: "ivory" | "navy" | "navy-deep";
  /** Optional content beneath the heading in the left column (e.g. a photo). */
  aside?: ReactNode;
  children: ReactNode;
};

/**
 * The inner-page workhorse: label and serif heading on the left, content on
 * the right, divided by a gold hairline on desktop. Stacks on smaller screens.
 */
export function EditorialSplit({
  id,
  headingId,
  label,
  heading,
  tone = "ivory",
  aside,
  children,
}: EditorialSplitProps) {
  const onDark = tone !== "ivory";

  return (
    <Section id={id} labelledBy={headingId} tone={tone}>
      <Container className="grid gap-x-16 gap-y-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <div>
          {label && (
            <p className={cn("type-eyebrow mb-3", onDark ? "text-gold-light" : "text-gold-dark")}>
              {label}
            </p>
          )}
          <h2 id={headingId} className={cn("type-heading", onDark ? "text-ivory" : "text-navy")}>
            <Lines lines={heading} lineClassName="lg:block" />
          </h2>
          {aside && <div className="mt-10">{aside}</div>}
        </div>
        <div
          className={cn(
            "lg:border-l lg:pl-16",
            onDark ? "lg:border-ivory/15" : "lg:border-gold/35",
          )}
        >
          {children}
        </div>
      </Container>
    </Section>
  );
}
