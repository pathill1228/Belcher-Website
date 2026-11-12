import { cn } from "@/lib/cn";

export type NumberedItem = {
  title: string;
  body: string;
};

type NumberedListProps = {
  items: readonly NumberedItem[];
  tone?: "light" | "dark";
  className?: string;
};

/**
 * Editorial numbered rows (01, 02, 03 …) with hairline dividers. Used for the
 * Engage / Enlighten / Empower method on inner pages.
 */
export function NumberedList({ items, tone = "light", className }: NumberedListProps) {
  const onDark = tone === "dark";

  return (
    <ol className={cn("border-t", onDark ? "border-ivory/15" : "border-gold/35", className)}>
      {items.map((item, index) => (
        <li
          key={item.title}
          className={cn(
            "grid grid-cols-[2.75rem_minmax(0,1fr)] items-baseline gap-x-4 gap-y-3 border-b py-7 sm:grid-cols-[3.5rem_minmax(0,1fr)] sm:gap-x-6",
            onDark ? "border-ivory/15" : "border-gold/35",
          )}
        >
          <span
            aria-hidden="true"
            className={cn("font-serif text-2xl", onDark ? "text-gold-light" : "text-gold-dark")}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3
            className={cn(
              "font-serif text-[1.625rem] leading-tight tracking-[0.03em] uppercase",
              onDark ? "text-ivory" : "text-navy",
            )}
          >
            {item.title}
          </h3>
          <p
            className={cn(
              "col-start-2 text-[1.0625rem] leading-relaxed",
              onDark ? "text-ivory/85" : "text-charcoal",
            )}
          >
            {item.body}
          </p>
        </li>
      ))}
    </ol>
  );
}
