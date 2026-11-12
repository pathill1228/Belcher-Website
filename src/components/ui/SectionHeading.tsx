import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  /** Id placed on the heading so its <section> can reference it. */
  id: string;
  children: ReactNode;
  eyebrow?: string;
  /** Italic serif line beneath the heading. */
  intro?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  as?: "h1" | "h2";
  className?: string;
};

/** Eyebrow + serif heading + optional intro. `tone` is the background it sits on. */
export function SectionHeading({
  id,
  children,
  eyebrow,
  intro,
  align = "left",
  tone = "light",
  as: Heading = "h2",
  className,
}: SectionHeadingProps) {
  const onDark = tone === "dark";

  return (
    <div className={cn(align === "center" && "text-center", className)}>
      {eyebrow && (
        <p className={cn("type-eyebrow mb-2", onDark ? "text-gold-light" : "text-gold-dark")}>
          {eyebrow}
        </p>
      )}
      <Heading id={id} className={cn("type-heading", onDark ? "text-ivory" : "text-navy")}>
        {children}
      </Heading>
      {intro && (
        <p className={cn("type-quote mt-3", onDark ? "text-ivory/85" : "text-charcoal")}>{intro}</p>
      )}
    </div>
  );
}
