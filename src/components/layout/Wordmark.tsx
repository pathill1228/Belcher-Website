import { siteConfig } from "@/config/site";
import { cn } from "@/lib/cn";

type WordmarkProps = {
  className?: string;
};

/** Primary wordmark: CEDRIC BELCHER over widely spaced MARKETPLACE MINISTER. */
export function Wordmark({ className }: WordmarkProps) {
  return (
    <span className={cn("inline-flex flex-col leading-none whitespace-nowrap", className)}>
      <span className="font-serif text-[1.375rem] tracking-[0.04em] text-ivory uppercase">
        {siteConfig.name}
      </span>
      <span className="mt-1.5 text-[0.5625rem] font-medium tracking-wordmark text-gold-light uppercase">
        {siteConfig.role}
      </span>
    </span>
  );
}
