import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

/** Centers content at the site max-width with responsive gutters. */
export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("mx-auto w-full max-w-site px-6 sm:px-8 lg:px-12", className)}>
      {children}
    </div>
  );
}
