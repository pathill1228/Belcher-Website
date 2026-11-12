import type { ReactNode } from "react";
import type { ImageAsset } from "@/data/images";
import { cn } from "@/lib/cn";
import { Container } from "./Container";
import { Lines } from "./Lines";
import { Media } from "./Media";

type PageHeroProps = {
  eyebrow: string;
  /** Headline lines; each line breaks deliberately on wider screens. */
  title: readonly string[];
  intro?: string;
  /** Signature line set in italic serif beneath the headline. */
  quote?: string;
  /** Photograph shown to the right on desktop (beneath the copy on mobile). */
  image?: ImageAsset;
  /** "center" gives a type-only, centered hero (ignored when an image is set). */
  align?: "left" | "center";
  /** Actions (Cta components). */
  children?: ReactNode;
};

/**
 * Navy title band for inner pages. Renders the page's single <h1>.
 * Shares the homepage hero's language — serif display type, gold eyebrow and
 * rule, right-bleeding portrait — at a shorter, inner-page height.
 */
export function PageHero({
  eyebrow,
  title,
  intro,
  quote,
  image,
  align = "left",
  children,
}: PageHeroProps) {
  const centered = align === "center" && !image;

  return (
    <section
      aria-labelledby="page-hero-heading"
      className="relative isolate overflow-hidden bg-navy text-ivory"
    >
      <Container
        className={cn(
          "relative z-10",
          image && "lg:flex lg:min-h-[clamp(28rem,34vw,36rem)] lg:items-center",
        )}
      >
        <div
          className={cn(
            "py-14 sm:py-16 lg:py-20",
            image ? "lg:w-1/2 lg:pr-8" : "max-w-4xl",
            centered && "mx-auto flex flex-col sm:items-center sm:text-center",
          )}
        >
          <p className="type-eyebrow text-gold-light">{eyebrow}</p>
          <h1
            id="page-hero-heading"
            className="mt-4 font-serif text-[clamp(2.25rem,1.5rem+3.2vw,4.25rem)] leading-[1.04] tracking-[0.01em] uppercase"
          >
            <Lines lines={title} lineClassName="sm:block" />
          </h1>

          <span aria-hidden="true" className="mt-7 block h-px w-10 bg-gold-light" />

          {quote && (
            <blockquote className="type-quote mt-6 max-w-xl text-ivory/95">
              <p>“{quote}”</p>
            </blockquote>
          )}
          {intro && (
            <p className="mt-5 max-w-xl text-[1.0625rem] leading-relaxed text-ivory/85">{intro}</p>
          )}
          {children && (
            <div
              className={cn(
                "mt-8 flex flex-wrap items-center gap-x-7 gap-y-2",
                centered && "sm:justify-center",
              )}
            >
              {children}
            </div>
          )}
        </div>
      </Container>

      {image && (
        <div className="relative aspect-16/10 w-full lg:absolute lg:inset-y-0 lg:right-0 lg:aspect-auto lg:w-[46%]">
          <Media image={image} sizes="(min-width: 1024px) 46vw, 100vw" fill priority />
          <div
            aria-hidden="true"
            className="absolute inset-y-0 left-0 hidden w-1/3 bg-linear-to-r from-navy to-transparent lg:block"
          />
        </div>
      )}
    </section>
  );
}
