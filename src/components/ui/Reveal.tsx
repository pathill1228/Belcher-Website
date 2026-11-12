"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Stagger in milliseconds, for siblings that enter together. */
  delay?: number;
  className?: string;
};

/**
 * Fades content up as it scrolls into view (opacity + small translate only).
 *
 * Progressive enhancement: content renders visible. It is hidden only after
 * mount, only if it is still below the viewport, and the CSS in globals.css
 * ignores the whole mechanism under prefers-reduced-motion.
 */
export function Reveal({ children, delay = 0, className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || !("IntersectionObserver" in window)) return;
    if (element.getBoundingClientRect().top < window.innerHeight) return;

    element.dataset.reveal = "pending";
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.dataset.reveal = "shown";
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(element);

    return () => {
      observer.disconnect();
      delete element.dataset.reveal;
    };
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}
