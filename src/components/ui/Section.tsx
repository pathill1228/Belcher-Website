import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

const tones = {
  ivory: "bg-ivory text-charcoal",
  navy: "bg-navy text-ivory",
  "navy-deep": "bg-navy-deep text-ivory",
} as const;

const spacings = {
  default: "section-y",
  compact: "section-y-compact",
  none: "",
} as const;

type SectionProps = {
  children: ReactNode;
  id?: string;
  /** Id of the heading that names this section, for assistive technology. */
  labelledBy?: string;
  tone?: keyof typeof tones;
  spacing?: keyof typeof spacings;
  className?: string;
};

/** A page band: sets background tone and the shared vertical rhythm. */
export function Section({
  children,
  id,
  labelledBy,
  tone = "ivory",
  spacing = "default",
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn(tones[tone], spacings[spacing], className)}
    >
      {children}
    </section>
  );
}
