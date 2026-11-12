import { cn } from "@/lib/cn";
import { Icon, type IconName } from "./Icon";

export type FeatureItem = {
  title: string;
  /** Short line set beneath the title, e.g. "Shapes how people think." */
  tagline?: string;
  body: string;
  icon: IconName;
};

type FeatureColumnsProps = {
  items: readonly FeatureItem[];
  /** The background the columns sit on. */
  tone?: "light" | "dark";
  className?: string;
};

/**
 * Icon-led editorial columns separated by gold hairlines — the inner-page
 * counterpart to the homepage's spheres and "One Calling" rows. Three items
 * sit in one row on desktop; six wrap into two rows.
 */
export function FeatureColumns({ items, tone = "light", className }: FeatureColumnsProps) {
  const onDark = tone === "dark";

  return (
    <ul
      className={cn(
        "grid gap-y-10 md:grid-cols-3 md:gap-y-14",
        onDark ? "border-ivory/15" : "border-gold/35",
        className,
      )}
    >
      {items.map((item) => (
        <li
          key={item.title}
          className={cn(
            "border-t pt-8 md:border-t-0 md:border-l md:px-8 md:pt-0 md:[&:nth-child(3n+1)]:border-l-0 md:[&:nth-child(3n+1)]:pl-0",
            onDark ? "border-ivory/15" : "border-gold/35",
          )}
        >
          <Icon name={item.icon} className={onDark ? "text-gold-light" : "text-gold"} />
          <h3
            className={cn(
              "mt-5 font-serif text-xl tracking-[0.04em] uppercase",
              onDark ? "text-ivory" : "text-navy",
            )}
          >
            {item.title}
          </h3>
          {item.tagline && (
            <p className={cn("mt-1 font-semibold", onDark ? "text-gold-light" : "text-gold-dark")}>
              {item.tagline}
            </p>
          )}
          <p
            className={cn(
              "mt-3 text-[0.9375rem] leading-relaxed",
              onDark ? "text-ivory/80" : "text-charcoal",
            )}
          >
            {item.body}
          </p>
        </li>
      ))}
    </ul>
  );
}
