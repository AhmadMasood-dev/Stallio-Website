"use client";

import {
  IconDiscount2,
  IconFileInvoice,
  IconPackages,
  IconShoppingBag,
} from "@tabler/icons-react";
import { motion, useReducedMotion } from "motion/react";

import { BezelShell } from "@/components/ui/bezel-shell";
import { motionEase } from "@/lib/motion";

const loop = [
  {
    n: "01",
    title: "Orders with payment and delivery status",
    icon: IconPackages,
    span: "md:col-span-7",
  },
  {
    n: "02",
    title: "Products with variants, sales, and stock",
    icon: IconShoppingBag,
    span: "md:col-span-5",
  },
  {
    n: "03",
    title: "Coupons and delivery at checkout",
    icon: IconDiscount2,
    span: "md:col-span-5",
  },
  {
    n: "04",
    title: "PDF invoice ready to send",
    icon: IconFileInvoice,
    span: "md:col-span-7",
  },
] as const;

export function FeaturesLoop() {
  const reduce = useReducedMotion();

  return (
    <section className="border-border relative overflow-hidden border-y bg-surface dark:bg-background">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_0%,color-mix(in_srgb,var(--brand)_8%,transparent),transparent_50%)] dark:bg-[radial-gradient(ellipse_at_80%_0%,color-mix(in_srgb,var(--brand)_16%,transparent),transparent_50%)]"
      />

      <div className="relative mx-auto w-full max-w-6xl px-4 py-24 sm:px-6 md:py-32 md:pb-36">
        <motion.div
          className="mx-auto mb-12 max-w-2xl space-y-4 text-center md:mb-16"
          initial={reduce ? false : { opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.75, ease: motionEase }}
        >
          <span className="border-border/70 bg-background/80 text-muted-foreground inline-flex rounded-full border px-3 py-1 text-[10px] font-medium tracking-[0.2em] uppercase">
            The loop
          </span>
          <h2 className="text-foreground text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-[2.65rem] lg:leading-[1.1]">
            Catalog, checkout, orders, and invoices.
          </h2>
          <p className="text-muted-foreground mx-auto max-w-[42ch] text-base leading-7 sm:text-lg sm:leading-8">
            One dashboard loop — not a pile of tabs you forget exist.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-12 md:gap-5">
          {loop.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.n}
                className={`col-span-1 ${item.span}`}
                initial={reduce ? false : { opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.7,
                  delay: reduce ? 0 : index * 0.07,
                  ease: motionEase,
                }}
              >
                <BezelShell
                  className="h-full rounded-[1.75rem]"
                  innerClassName="flex h-full items-start gap-4 p-5 sm:gap-5 sm:p-7"
                >
                  <span className="text-muted-foreground font-mono text-xs tracking-[0.18em] tabular-nums">
                    {item.n}
                  </span>
                  <div className="flex-1 space-y-3">
                    <span className="bg-brand/10 text-brand inline-flex size-10 items-center justify-center rounded-2xl">
                      <Icon className="size-5" stroke={1.5} aria-hidden />
                    </span>
                    <h3 className="text-foreground text-lg font-semibold tracking-tight text-pretty sm:text-xl">
                      {item.title}
                    </h3>
                  </div>
                </BezelShell>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
