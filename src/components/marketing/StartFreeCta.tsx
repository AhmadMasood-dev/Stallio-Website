"use client";

import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";
import { useReducedMotion } from "motion/react";

import { Button } from "@/components/ui/button";
import { MovingBorderButton } from "@/components/ui/moving-border";
import { routes } from "@/constants/routes";

/** Primary Start Free CTA — quiet Button when reduced motion. */
export function StartFreeCta() {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <Button
        asChild
        size="lg"
        className="group rounded-full px-5 active:scale-[0.98]"
      >
        <Link href={routes.signup} className="inline-flex items-center gap-2">
          Start Free
          <span className="bg-background/15 inline-flex size-8 items-center justify-center rounded-full">
            <IconArrowUpRight className="size-4" stroke={1.5} />
          </span>
        </Link>
      </Button>
    );
  }

  return (
    <MovingBorderButton
      as={Link}
      href={routes.signup}
      borderRadius="9999px"
      duration={2800}
      containerClassName="group h-12 w-auto min-w-[10.5rem] active:scale-[0.98]"
      className="bg-brand gap-2 px-5 hover:bg-[color-mix(in_srgb,var(--brand)_88%,black)]"
    >
      Start Free
      <span className="bg-background/15 inline-flex size-8 items-center justify-center rounded-full transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-px group-hover:scale-105">
        <IconArrowUpRight className="size-4" stroke={1.5} />
      </span>
    </MovingBorderButton>
  );
}
