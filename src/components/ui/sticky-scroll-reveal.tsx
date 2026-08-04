"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";
import { motionEase } from "@/lib/motion";

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
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let frame = 0;

    const updateActive = () => {
      const center = window.innerHeight * 0.45;
      let bestIndex = 0;
      let bestDist = Number.POSITIVE_INFINITY;

      stepRefs.current.forEach((node, index) => {
        if (!node) return;
        const rect = node.getBoundingClientRect();
        const mid = rect.top + rect.height / 2;
        const dist = Math.abs(mid - center);
        if (dist < bestDist) {
          bestDist = dist;
          bestIndex = index;
        }
      });

      setActiveCard((prev) => (prev === bestIndex ? prev : bestIndex));
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateActive);
    };

    updateActive();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [content.length]);

  return (
    <div
      className={cn(
        "relative flex items-start gap-10 lg:gap-14",
        "bg-foreground/[0.03] ring-border/50 rounded-[1.75rem] p-6 ring-1 md:p-10",
        className,
      )}
    >
      <div className="relative w-full max-w-xl flex-1">
        {content.map((item, index) => (
          <div
            key={item.title + index}
            ref={(el) => {
              stepRefs.current[index] = el;
            }}
            data-sticky-step={index}
            className="flex min-h-[55vh] flex-col justify-center py-10 first:pt-4 last:pb-4 md:min-h-[60vh]"
          >
            <motion.h3
              animate={{ opacity: activeCard === index ? 1 : 0.28 }}
              transition={{ duration: 0.45, ease: motionEase }}
              className="text-foreground text-2xl font-semibold tracking-tight md:text-3xl"
            >
              {item.title}
            </motion.h3>
            <motion.p
              animate={{ opacity: activeCard === index ? 1 : 0.28 }}
              transition={{ duration: 0.45, ease: motionEase }}
              className="text-muted-foreground mt-5 max-w-sm text-sm leading-7 md:text-base md:leading-8"
            >
              {item.description}
            </motion.p>
          </div>
        ))}
      </div>

      <div
        className={cn(
          "sticky top-28 hidden h-80 w-[22rem] shrink-0 overflow-hidden rounded-[1.35rem] lg:block xl:h-[26rem] xl:w-[26rem]",
          "border-border/50 bg-background shadow-[inset_0_1px_1px_rgba(255,255,255,0.35)]",
          contentClassName,
        )}
        data-sticky-visual
        data-active-card={activeCard}
      >
        <div className="relative h-full w-full">
          {content.map((item, index) => (
            <motion.div
              key={item.title + index}
              className="absolute inset-0"
              initial={false}
              animate={{
                opacity: activeCard === index ? 1 : 0,
                scale: activeCard === index ? 1 : 0.98,
              }}
              transition={{ duration: 0.45, ease: motionEase }}
              aria-hidden={activeCard !== index}
            >
              {item.content}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
