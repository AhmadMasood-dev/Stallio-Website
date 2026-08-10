"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

import { BezelShell } from "@/components/ui/bezel-shell";
import { motionEase } from "@/lib/motion";
import { cn } from "@/lib/utils";

type CapabilityTileProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  amount?: number;
  rounded?: string;
  innerClassName?: string;
};

/** Motion + BezelShell card shell for capability / loop grids. */
export function CapabilityTile({
  children,
  className,
  delay = 0,
  amount = 0.2,
  rounded = "rounded-[2rem]",
  innerClassName,
}: CapabilityTileProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={cn("col-span-1", className)}
      initial={reduce ? false : { opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{
        duration: 0.75,
        delay: reduce ? 0 : delay,
        ease: motionEase,
      }}
    >
      <BezelShell className={cn("h-full", rounded)} innerClassName={innerClassName}>
        {children}
      </BezelShell>
    </motion.div>
  );
}
