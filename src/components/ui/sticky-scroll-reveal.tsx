"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";

import { cn } from "@/lib/utils";

export type StickyScrollItem = {
  title: string;
  description: string;
  content?: React.ReactNode;
};

type StickyScrollProps = {
  content: StickyScrollItem[];
  contentClassName?: string;
  className?: string;
};

export function StickyScroll({
  content,
  contentClassName,
  className,
}: StickyScrollProps) {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0,
    );
    setActiveCard(closestBreakpointIndex);
  });

  return (
    <div
      ref={ref}
      className={cn(
        "relative flex h-[32rem] justify-center overflow-y-auto rounded-[1.75rem] p-6 md:h-[36rem] md:space-x-12 md:p-10",
        "bg-foreground/[0.03] ring-border/50 ring-1",
        className,
      )}
    >
      <div className="relative flex items-start px-2 md:px-4">
        <div className="max-w-xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-16 md:my-24">
              <motion.h3
                animate={{ opacity: activeCard === index ? 1 : 0.28 }}
                transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
                className="text-foreground text-2xl font-semibold tracking-tight md:text-3xl"
              >
                {item.title}
              </motion.h3>
              <motion.p
                animate={{ opacity: activeCard === index ? 1 : 0.28 }}
                transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
                className="text-muted-foreground mt-5 max-w-sm text-sm leading-7 md:text-base md:leading-8"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-36" />
        </div>
      </div>

      <div
        className={cn(
          "sticky top-8 relative hidden h-72 w-[22rem] overflow-hidden rounded-[1.35rem] lg:block xl:h-80 xl:w-[26rem]",
          "border-border/50 bg-background shadow-[inset_0_1px_1px_rgba(255,255,255,0.35)]",
          contentClassName,
        )}
      >
        {content[activeCard]?.content ?? null}
      </div>
    </div>
  );
}
