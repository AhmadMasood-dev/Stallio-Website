"use client";

import { useReducedMotion } from "motion/react";

import { SparklesCore } from "@/components/ui/sparkles";
import { brandColors } from "@/constants/colors";
import { cn } from "@/lib/utils";

/** Pulls the hero under the sticky header so gradients + sparkles fill the nav band. */
export const heroBleedClassName =
  "relative isolate overflow-hidden -mt-[4.75rem] pt-[4.75rem]";

type HeroAtmosphereProps = {
  sparkleId: string;
  className?: string;
  /** Extra soft brand wash orbs. */
  variant?: "home" | "default";
};

/**
 * Shared hero backdrop: page-matched surface, brand washes, and sparkle points
 * that continue behind the transparent sticky navbar.
 */
export function HeroAtmosphere({
  sparkleId,
  className,
  variant = "default",
}: HeroAtmosphereProps) {
  const reduce = useReducedMotion();

  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 z-0 overflow-hidden bg-background",
        className,
      )}
    >
      <div
        className={cn(
          "absolute rounded-full blur-3xl",
          variant === "home"
            ? "-top-28 left-[18%] h-[420px] w-[520px] bg-[radial-gradient(ellipse_at_center,color-mix(in_srgb,var(--brand)_22%,transparent),transparent_72%)] dark:bg-[radial-gradient(ellipse_at_center,color-mix(in_srgb,var(--brand)_34%,transparent),transparent_72%)]"
            : "-top-24 left-[10%] h-[380px] w-[460px] bg-[radial-gradient(ellipse_at_center,color-mix(in_srgb,var(--brand)_16%,transparent),transparent_72%)] dark:bg-[radial-gradient(ellipse_at_center,color-mix(in_srgb,var(--brand)_28%,transparent),transparent_72%)]",
        )}
      />
      <div
        className={cn(
          "absolute rounded-full blur-3xl",
          variant === "home"
            ? "top-[35%] right-[8%] h-[380px] w-[420px] bg-[radial-gradient(ellipse_at_center,color-mix(in_srgb,#F5C518_18%,transparent),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_center,color-mix(in_srgb,#F5C518_14%,transparent),transparent_70%)]"
            : "right-[4%] bottom-[8%] h-[300px] w-[340px] bg-[radial-gradient(ellipse_at_center,color-mix(in_srgb,#F5C518_12%,transparent),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_center,color-mix(in_srgb,#F5C518_10%,transparent),transparent_70%)]",
        )}
      />

      {!reduce ? (
        <SparklesCore
          id={sparkleId}
          background="transparent"
          minSize={0.3}
          maxSize={1.1}
          particleDensity={variant === "home" ? 48 : 36}
          speed={2.4}
          className="absolute inset-0 h-full w-full"
          particleColor={brandColors.brand}
        />
      ) : null}
    </div>
  );
}
