"use client";

import Link from "next/link";
import {
  IconArrowUpRight,
  IconChartBar,
  IconDiscount2,
  IconFileInvoice,
  IconLanguage,
  IconGift,
  IconMessages,
  IconPackage,
  IconReceipt,
  IconShoppingCart,
  IconTruckDelivery,
  IconUserCircle,
  IconWorldWww,
} from "@tabler/icons-react";
import { motion, useReducedMotion } from "motion/react";

import { BezelShell } from "@/components/ui/bezel-shell";
import { Button } from "@/components/ui/button";
import {
  FeatureHoverGrid,
  type FeatureHoverItem,
} from "@/components/ui/feature-hover-grid";
import { routes } from "@/constants/routes";
import { motionEase } from "@/lib/motion";

const iconProps = { stroke: 1.5, "aria-hidden": true } as const;

const toolkit: FeatureHoverItem[] = [
  {
    title: "Hosted shop link",
    description: "Your stallio.shop URL is ready on day one — no domain setup.",
    icon: <IconWorldWww {...iconProps} />,
  },
  {
    title: "Unlimited catalog",
    description: "Products, photos, and orders with no hard caps on the plan.",
    icon: <IconPackage {...iconProps} />,
  },
  {
    title: "Mobile checkout",
    description: "Storefront, cart, and checkout built for thumbs, not desktops.",
    icon: <IconShoppingCart {...iconProps} />,
  },
  {
    title: "Variants & stock",
    description: "Sizes, colors, sale prices, and inventory in one shelf view.",
    icon: <IconDiscount2 {...iconProps} />,
  },
  {
    title: "About & Contact",
    description: "Trust pages that ship with the shop — edit, publish, done.",
    icon: <IconUserCircle {...iconProps} />,
  },
  {
    title: "Coupons & delivery",
    description: "Promo codes and delivery fees without a separate plugin tax.",
    icon: <IconTruckDelivery {...iconProps} />,
  },
  {
    title: "PDF invoices",
    description: "A clean invoice for every order, ready to send or print.",
    icon: <IconFileInvoice {...iconProps} />,
  },
  {
    title: "Fulfillment ops",
    description: "Mark paid, ship, and export CSV when the books need a dump.",
    icon: <IconReceipt {...iconProps} />,
  },
  {
    title: "EN, ES, and AR",
    description: "Shop and dashboard in three languages, including RTL Arabic.",
    icon: <IconLanguage {...iconProps} />,
  },
  {
    title: "Revenue charts",
    description: "Orders and revenue at a glance — enough signal, not a BI suite.",
    icon: <IconChartBar {...iconProps} />,
  },
  {
    title: "Buyer messages",
    description: "Support chat so questions stay next to the order, not in DMs.",
    icon: <IconMessages {...iconProps} />,
  },
  {
    title: "First month free",
    description: "No card to start. Pick monthly or yearly when you are ready.",
    icon: <IconGift {...iconProps} />,
  },
];

export function HomeToolkit() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,color-mix(in_srgb,var(--brand)_10%,transparent),transparent_52%)] dark:bg-[radial-gradient(ellipse_at_20%_0%,color-mix(in_srgb,var(--brand)_18%,transparent),transparent_52%)]"
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-24 md:py-32">
        <div className="mb-12 flex flex-col gap-8 md:mb-14 md:flex-row md:items-end md:justify-between">
          <motion.div
            className="max-w-xl space-y-5"
            initial={reduce ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: motionEase }}
          >
            <span className="border-border/70 bg-background/70 text-muted-foreground inline-flex rounded-full border px-3 py-1 text-[10px] font-medium tracking-[0.2em] uppercase">
              What&apos;s included
            </span>
            <h2 className="text-foreground text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
              One plan. The full seller toolkit.
            </h2>
            <p className="text-muted-foreground max-w-[40ch] text-base leading-7 sm:text-lg sm:leading-8">
              Everything below is part of Stallio, not add-ons. Start free, then
              pick monthly or yearly when you are ready.
            </p>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 0.7,
              delay: reduce ? 0 : 0.08,
              ease: motionEase,
            }}
          >
            <Button
              asChild
              size="lg"
              variant="outline"
              className="group border-brand/40 text-brand hover:bg-brand/5 hover:text-brand rounded-full px-5 active:scale-[0.98]"
            >
              <Link href={routes.signup} className="inline-flex items-center gap-2">
                Start free
                <span className="bg-brand/10 inline-flex size-8 items-center justify-center rounded-full transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-px group-hover:scale-105">
                  <IconArrowUpRight className="size-4" stroke={1.5} />
                </span>
              </Link>
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.85, ease: motionEase }}
        >
          <BezelShell innerClassName="overflow-hidden p-0 md:p-1">
            <FeatureHoverGrid items={toolkit} columns={3} />
          </BezelShell>
        </motion.div>
      </div>
    </section>
  );
}
