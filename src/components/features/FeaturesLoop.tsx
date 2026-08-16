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
import { cn } from "@/lib/utils";

const loop = [
  {
    n: "01",
    title: "Orders with payment and delivery status",
    body: "Every order lands in one inbox. Mark paid, set delivery, keep moving.",
    icon: IconPackages,
  },
  {
    n: "02",
    title: "Products with variants, sales, and stock",
    body: "Update the shelf once. Stories, bio, and chats all point to the same catalog.",
    icon: IconShoppingBag,
  },
  {
    n: "03",
    title: "Coupons and delivery at checkout",
    body: "Promo codes and delivery fees sit in the flow buyers already use.",
    icon: IconDiscount2,
  },
  {
    n: "04",
    title: "PDF invoice ready to send",
    body: "A clean invoice for every order, ready to forward or print.",
    icon: IconFileInvoice,
  },
] as const;

export function FeaturesLoop() {
  const reduce = useReducedMotion();

  return (
    <section className="border-border relative overflow-hidden border-y bg-background">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,color-mix(in_srgb,var(--brand)_9%,transparent),transparent_52%)] dark:bg-[radial-gradient(ellipse_at_20%_0%,color-mix(in_srgb,var(--brand)_18%,transparent),transparent_52%)]"
      />

      <div className="relative mx-auto w-full max-w-6xl px-4 py-24 sm:px-6 md:py-32 md:pb-36">
        <div className="grid gap-12 md:grid-cols-12 md:gap-10 lg:gap-14">
          <motion.div
            className="md:col-span-4 md:sticky md:top-28 md:self-start"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.75, ease: motionEase }}
          >
            <span className="border-border/70 bg-surface/80 text-muted-foreground inline-flex rounded-full border px-3 py-1 text-[10px] font-medium tracking-[0.2em] uppercase">
              The loop
            </span>
            <h2 className="text-foreground text-section-heading mt-5">
              Catalog, checkout, orders, and invoices.
            </h2>
            <p className="text-muted-foreground mt-4 max-w-[36ch] text-base leading-7 sm:text-lg sm:leading-8">
              One dashboard loop, not a pile of tabs you forget exist.
            </p>

            <div className="mt-8 hidden md:block">
              <div className="relative mx-auto aspect-square max-w-[15rem]">
                <div
                  aria-hidden
                  className="border-border/70 absolute inset-[12%] rounded-full border border-dashed"
                />
                <div className="bg-brand absolute inset-[34%] flex items-center justify-center rounded-full text-center text-[11px] font-medium tracking-[0.16em] text-white uppercase shadow-[0_24px_50px_-28px_color-mix(in_srgb,var(--brand)_75%,transparent)]">
                  Loop
                </div>
                {loop.map((item, index) => {
                  const angle = index * 90 - 45;
                  return (
                    <span
                      key={item.n}
                      aria-hidden
                      className="bg-background text-brand ring-border/60 absolute top-1/2 left-1/2 flex size-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-[10px] font-mono tracking-[0.12em] ring-1"
                      style={{
                        transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-5.6rem) rotate(${-angle}deg)`,
                      }}
                    >
                      {item.n}
                    </span>
                  );
                })}
              </div>
            </div>
          </motion.div>

          <div className="md:col-span-8">
            <ol className="relative space-y-4 md:space-y-0">
              {loop.map((item, index) => {
                const Icon = item.icon;
                const offset =
                  index % 2 === 0
                    ? "md:ml-0 md:mr-10"
                    : "md:ml-10 md:mr-0";
                const rotate =
                  index % 2 === 0
                    ? "md:-rotate-[1deg]"
                    : "md:rotate-[1deg]";

                return (
                  <motion.li
                    key={item.n}
                    className={cn("relative", index > 0 && "md:-mt-4")}
                    initial={reduce ? false : { opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{
                      duration: 0.75,
                      delay: reduce ? 0 : index * 0.08,
                      ease: motionEase,
                    }}
                    style={{ zIndex: index + 1 }}
                  >
                    <BezelShell
                      className={cn(
                        "rounded-[1.75rem] transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]",
                        offset,
                        reduce ? "" : rotate,
                      )}
                      innerClassName="group flex flex-col gap-4 p-5 sm:flex-row sm:items-start sm:gap-5 sm:p-7"
                    >
                      <div className="flex items-center gap-3 sm:flex-col sm:items-start sm:gap-4">
                        <span className="text-muted-foreground font-mono text-xs tracking-[0.18em] tabular-nums">
                          {item.n}
                        </span>
                        <span className="bg-brand/10 text-brand inline-flex size-11 items-center justify-center rounded-2xl transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105">
                          <Icon className="size-5" stroke={1.5} aria-hidden />
                        </span>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-foreground text-lg font-semibold tracking-tight text-pretty sm:text-xl">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground max-w-[40ch] text-sm leading-6 sm:text-base sm:leading-7">
                          {item.body}
                        </p>
                      </div>
                    </BezelShell>
                  </motion.li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
