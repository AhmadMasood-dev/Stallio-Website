"use client";

import {
  IconCreditCardOff,
  IconDeviceMobile,
  IconDiscount2,
  IconLink,
  IconPackages,
  IconWorldOff,
} from "@tabler/icons-react";
import { motion, useReducedMotion } from "motion/react";

import { BezelShell } from "@/components/ui/bezel-shell";
import {
  HoverEffect,
  type HoverEffectItem,
} from "@/components/ui/card-hover-effect";
import { motionEase } from "@/lib/motion";

const iconProps = { stroke: 1.5, "aria-hidden": true } as const;

const reasons: HoverEffectItem[] = [
  {
    title: "No Domain Stress",
    description:
      "Your link is ready on stallio.shop. No DNS, hosting, or deploy keys.",
    icon: <IconWorldOff {...iconProps} />,
  },
  {
    title: "You Collect Payment",
    description:
      "Add bank, link, or COD instructions. Stallio does not sit in the middle of buyer payments.",
    icon: <IconCreditCardOff {...iconProps} />,
  },
  {
    title: "Built For Thumbs",
    description:
      "Mobile-first storefront, cart, and checkout that feel natural on a phone.",
    icon: <IconDeviceMobile {...iconProps} />,
  },
  {
    title: "Orders In One Place",
    description:
      "Mark paid, ship, export CSV — without hunting through chat threads.",
    icon: <IconPackages {...iconProps} />,
  },
  {
    title: "Run Promotions",
    description:
      "Coupons, sale prices, and delivery fees without bolting on another tool.",
    icon: <IconDiscount2 {...iconProps} />,
  },
  {
    title: "Start Free",
    description: "First month free, no card required. Open a shop tonight.",
    icon: <IconLink {...iconProps} />,
  },
];

export function HomeWhy() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden border-y border-border bg-surface dark:bg-background">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_0%_100%,color-mix(in_srgb,var(--brand)_11%,transparent),transparent_55%)] dark:bg-[radial-gradient(ellipse_at_0%_100%,color-mix(in_srgb,var(--brand)_18%,transparent),transparent_55%)]"
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-24 md:py-32">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-10">
          <motion.div
            className="space-y-5 lg:sticky lg:top-28 lg:col-span-4 lg:self-start"
            initial={reduce ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: motionEase }}
          >
            <span className="border-border/70 bg-background/70 text-muted-foreground inline-flex rounded-full border px-3 py-1 text-[10px] font-medium tracking-[0.2em] uppercase">
              Why it lands
            </span>
            <h2 className="text-foreground text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
              Sharp where money moves. Quiet everywhere else.
            </h2>
            <p className="text-muted-foreground max-w-[34ch] text-base leading-7 sm:text-lg sm:leading-8">
              Fewer tools to babysit. More time making and shipping.
            </p>
          </motion.div>

          <motion.div
            className="lg:col-span-8"
            initial={reduce ? false : { opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.85,
              delay: reduce ? 0 : 0.06,
              ease: motionEase,
            }}
          >
            <BezelShell innerClassName="overflow-hidden p-1 md:p-2">
              <HoverEffect items={reasons} />
            </BezelShell>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
