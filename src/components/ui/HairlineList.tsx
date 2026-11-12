import { cn } from "@/lib/cn";

type HairlineListProps = {
  items: readonly string[];
  tone?: "light" | "dark";
  /** Accessible name for the list, when the surrounding heading isn't enough. */
  label?: string;
  className?: string;
};

/** Short uppercase terms in two ruled columns, each marked with a gold diamond. */
export function HairlineList({ items, tone = "light", label, className }: HairlineListProps) {
  const onDark = tone === "dark";

  return (
    <ul
      aria-label={label}
      className={cn(
        "grid border-t sm:grid-cols-2 sm:gap-x-10",
        onDark ? "border-ivory/15" : "border-gold/35",
        className,
      )}
    >
      {items.map((item) => (
        <li
          key={item}
          className={cn(
            "flex items-center gap-3 border-b py-3.5 text-sm font-semibold tracking-[0.08em] uppercase",
            onDark ? "border-ivory/15 text-ivory" : "border-gold/35 text-navy",
          )}
        >
          <span
            aria-hidden="true"
            className={cn("size-1.5 shrink-0 rotate-45", onDark ? "bg-gold-light" : "bg-gold")}
          />
          {item}
        </li>
      ))}
    </ul>
  );
}
