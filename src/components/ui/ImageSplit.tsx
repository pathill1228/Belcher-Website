import type { ReactNode } from "react";
import type { ImageAsset } from "@/data/images";
import { cn } from "@/lib/cn";
import { Container } from "./Container";
import { Lines } from "./Lines";
import { Media } from "./Media";
import { Section } from "./Section";

type ImageSplitProps = {
  id?: string;
  headingId: string;
  label?: string;
  heading: readonly string[];
  image: ImageAsset;
  /** Side the photograph sits on at desktop widths. On mobile copy comes first. */
  imageSide?: "left" | "right";
  tone?: "ivory" | "navy" | "navy-deep";
  children: ReactNode;
};

/** Photograph beside a labelled section of copy; alternate sides down a page. */
export function ImageSplit({
  id,
  headingId,
  label,
  heading,
  image,
  imageSide = "left",
  tone = "ivory",
  children,
}: ImageSplitProps) {
  const onDark = tone !== "ivory";

  return (
    <Section id={id} labelledBy={headingId} tone={tone}>
      <Container className="grid items-center gap-x-16 gap-y-12 lg:grid-cols-2">
        <div>
          {label && (
            <p className={cn("type-eyebrow mb-3", onDark ? "text-gold-light" : "text-gold-dark")}>
              {label}
            </p>
          )}
          <h2 id={headingId} className={cn("type-heading", onDark ? "text-ivory" : "text-navy")}>
            <Lines lines={heading} lineClassName="sm:block" />
          </h2>
          <div className="mt-8">{children}</div>
        </div>
        <Media
          image={image}
          sizes="(min-width: 1024px) 45vw, 100vw"
          className={cn("aspect-16/10 lg:aspect-4/5", imageSide === "left" && "lg:order-first")}
        />
      </Container>
    </Section>
  );
}
