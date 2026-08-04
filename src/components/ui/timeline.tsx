"use client";

import {
  motion,
  useScroll,
  useTransform,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

export type TimelineEntry = {
  title: string;
  content: React.ReactNode;
};

type TimelineProps = {
  data: TimelineEntry[];
  className?: string;
};

export function Timeline({ data, className }: TimelineProps) {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const measure = () => setHeight(el.getBoundingClientRect().height);
    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 15%", "end 55%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.08], [0, 1]);

  return (
    <div ref={containerRef} className={cn("relative w-full", className)}>
      <div ref={ref} className="relative mx-auto max-w-5xl pb-8">
        {data.map((item, index) => (
          <div
            key={`${item.title}-${index}`}
            className="flex justify-start pt-12 md:gap-10 md:pt-28"
          >
            <div className="sticky top-36 z-30 flex max-w-xs flex-col items-center self-start md:w-full md:max-w-sm md:flex-row">
              <div className="bg-background absolute left-3 flex size-10 items-center justify-center rounded-full">
                <div className="border-border bg-muted size-3 rounded-full border p-2 shadow-[inset_0_1px_1px_rgba(255,255,255,0.35)]" />
              </div>
              <h3 className="text-muted-foreground/55 hidden text-3xl font-semibold tracking-tight md:block md:pl-20 md:text-5xl">
                {item.title}
              </h3>
            </div>

            <div className="relative w-full pr-2 pl-20 md:pl-4">
              <h3 className="text-muted-foreground/70 mb-4 block text-left text-2xl font-semibold tracking-tight md:hidden">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}

        <div
          style={{ height: `${height}px` }}
          className="absolute top-0 left-8 w-[2px] overflow-hidden bg-[linear-gradient(to_bottom,transparent_0%,color-mix(in_srgb,var(--border)_80%,transparent)_10%,color-mix(in_srgb,var(--border)_80%,transparent)_90%,transparent_100%)] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-t from-[#5E2BEC] via-[#8B5CF6] to-transparent from-[0%] via-[12%]"
          />
        </div>
      </div>
    </div>
  );
}
