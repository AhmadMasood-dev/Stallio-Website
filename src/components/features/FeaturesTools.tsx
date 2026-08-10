"use client";

import {
  IconChartBar,
  IconCreditCardOff,
  IconDiscount2,
  IconFileInvoice,
  IconFolder,
  IconHeadset,
  IconMessages,
  IconTruckDelivery,
} from "@tabler/icons-react";
import { motion, useReducedMotion } from "motion/react";

import {
  FeatureHoverGrid,
  type FeatureHoverItem,
} from "@/components/ui/feature-hover-grid";
import { motionEase } from "@/lib/motion";

const iconProps = { stroke: 1.5, "aria-hidden": true } as const;

const tools: FeatureHoverItem[] = [
  {
    title: "Coupons and promos",
    description:
      "Percent or fixed-off codes with optional expiry. Buyers apply them at checkout.",
    icon: <IconDiscount2 {...iconProps} />,
  },
  {
    title: "PDF invoices",
    description:
      "Download a professional invoice per order to send on WhatsApp or email.",
    icon: <IconFileInvoice {...iconProps} />,
  },
  {
    title: "Delivery and COD",
    description:
      "Fixed or free-above-minimum delivery, ETA text, checkout notes, and cash on delivery.",
    icon: <IconTruckDelivery {...iconProps} />,
  },
  {
    title: "Categories and pages",
    description:
      "Group products, run a custom home hero, trust lines, reviews, plus About and Contact.",
    icon: <IconFolder {...iconProps} />,
  },
  {
    title: "You control payment",
    description:
      "Tell buyers how to pay by bank, link, or COD. Stallio tracks the order; you confirm money.",
    icon: <IconCreditCardOff {...iconProps} />,
  },
  {
    title: "Revenue overview",
    description:
      "Charts and totals for paid orders across today, the week, or a custom range.",
    icon: <IconChartBar {...iconProps} />,
  },
  {
    title: "Buyer messages",
    description:
      "Contact form submissions land in your inbox so nothing sits only on Instagram.",
    icon: <IconMessages {...iconProps} />,
  },
  {
    title: "Seller support",
    description:
      "Chat with the Stallio team from your dashboard when you need a hand.",
    icon: <IconHeadset {...iconProps} />,
  },
];

export function FeaturesTools() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden px-4 py-24 sm:px-6 md:py-32 md:pb-36">
      <div className="relative mx-auto w-full max-w-6xl">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-10">
          <motion.div
            className="space-y-4 lg:sticky lg:top-28 lg:col-span-4 lg:self-start"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.75, ease: motionEase }}
          >
            <span className="border-border/70 bg-background/80 text-muted-foreground inline-flex rounded-full border px-3 py-1 text-[10px] font-medium tracking-[0.2em] uppercase">
              Seller tools
            </span>
            <h2 className="text-foreground text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-[2.5rem] lg:leading-[1.1]">
              The quiet tools that keep orders moving.
            </h2>
            <p className="text-muted-foreground max-w-[34ch] text-base leading-7 sm:text-lg sm:leading-8">
              Promos, invoices, delivery, and inbox — without bolting on another
              plugin stack.
            </p>
          </motion.div>

          <motion.div
            className="lg:col-span-8"
            initial={reduce ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease: motionEase }}
          >
            <FeatureHoverGrid items={tools} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
