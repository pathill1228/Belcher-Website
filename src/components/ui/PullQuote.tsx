import { cn } from "@/lib/cn";

type PullQuoteProps = {
  children: string;
  tone?: "light" | "dark";
  className?: string;
};

/** Italic serif quotation set off by a gold rule. */
export function PullQuote({ children, tone = "light", className }: PullQuoteProps) {
  return (
    <blockquote
      className={cn(
        "type-quote border-l pl-6 text-[clamp(1.125rem,1rem+0.6vw,1.4375rem)]",
        tone === "dark" ? "border-gold-light text-ivory" : "border-gold text-navy",
        className,
      )}
    >
      <p>“{children}”</p>
    </blockquote>
  );
}
