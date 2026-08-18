"use client";

import { motion, useReducedMotion } from "motion/react";

import { Header } from "@/components/layout";
import { siteConfig } from "@/constants/site";
import { motionEase } from "@/lib/motion";
import { cn } from "@/lib/utils";

type AuthShellProps = {
  children: React.ReactNode;
  eyebrow?: string;
  title?: string;
  description?: string;
  className?: string;
  /** Compact single-column layout for dense flows like signup. */
  compact?: boolean;
};

export function AuthShell({
  children,
  eyebrow,
  title,
  description,
  className,
  compact = false,
}: AuthShellProps) {
  const reduce = useReducedMotion();

  return (
    <div
      className={cn(
        "bg-background relative flex min-h-dvh flex-col",
        compact ? "overflow-hidden" : "overflow-x-hidden",
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_12%_0%,color-mix(in_srgb,var(--brand)_14%,transparent),transparent_48%)] dark:bg-[radial-gradient(ellipse_at_12%_0%,color-mix(in_srgb,var(--brand)_22%,transparent),transparent_48%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_90%_80%,color-mix(in_srgb,#F5C518_10%,transparent),transparent_50%)]"
      />

      <div className="relative z-20">
        <Header />
      </div>

      <div
        className={cn(
          "relative z-10 mx-auto flex w-full max-w-6xl flex-1 px-4 sm:px-6",
          compact
            ? "items-start justify-center py-3 md:items-center md:py-4"
            : "items-center gap-10 py-8 md:grid md:grid-cols-12 md:gap-12 md:py-12",
          className,
        )}
      >
        {compact ? (
          <motion.div
            className="w-full max-w-xl"
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: motionEase }}
          >
            {(eyebrow || title || description) && (
              <div className="mb-4 space-y-2 text-center md:mb-5">
                {eyebrow ? (
                  <span className="border-border/70 bg-background/80 text-muted-foreground inline-flex rounded-full border px-3 py-1 text-[10px] font-medium tracking-[0.2em] uppercase">
                    {eyebrow}
                  </span>
                ) : null}
                {title ? (
                  <h1 className="text-foreground text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                    {title}
                  </h1>
                ) : null}
                {description ? (
                  <p className="text-muted-foreground mx-auto max-w-[40ch] text-sm leading-6">
                    {description}
                  </p>
                ) : null}
              </div>
            )}
            {children}
          </motion.div>
        ) : (
          <>
            <motion.aside
              className="md:col-span-5 lg:col-span-5"
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: motionEase }}
            >
              <span className="border-border/70 bg-background/80 text-muted-foreground inline-flex rounded-full border px-3 py-1 text-[10px] font-medium tracking-[0.2em] uppercase">
                {eyebrow}
              </span>
              <h1 className="text-foreground mt-5 max-w-[14ch] text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-[3.1rem] lg:leading-[1.06]">
                {title}
              </h1>
              <p className="text-muted-foreground mt-4 max-w-[36ch] text-base leading-7 sm:text-lg sm:leading-8">
                {description}
              </p>
              <p className="text-muted-foreground mt-8 hidden text-sm md:block">
                {siteConfig.name}, {siteConfig.tagline}.
              </p>
            </motion.aside>

            <motion.div
              className="md:col-span-7 lg:col-span-7"
              initial={reduce ? false : { opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: reduce ? 0 : 0.08,
                ease: motionEase,
              }}
            >
              {children}
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
}
