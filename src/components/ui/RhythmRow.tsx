import { cn } from "@/lib/cn";
import { Icon, type IconName } from "./Icon";

type RhythmRowProps = {
  items: readonly { label: string; icon: IconName }[];
  className?: string;
};

/** "Pray and build · Worship and work · …" — icon-over-label row on navy. */
export function RhythmRow({ items, className }: RhythmRowProps) {
  return (
    <ul className={cn("grid w-full max-w-xl grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4", className)}>
      {items.map((item) => (
        <li key={item.label} className="flex flex-col items-start gap-3 sm:items-center">
          <Icon name={item.icon} className="size-9 text-gold-light" />
          <span className="type-label max-w-[6.5rem] leading-normal">{item.label}</span>
        </li>
      ))}
    </ul>
  );
}
