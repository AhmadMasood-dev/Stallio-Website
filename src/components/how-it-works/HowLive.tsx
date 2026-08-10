"use client";

import Image from "next/image";
import {
  IconDeviceMobile,
  IconFileInvoice,
  IconPackages,
  IconTicket,
} from "@tabler/icons-react";
import { motion, useReducedMotion } from "motion/react";

import { BezelShell } from "@/components/ui/bezel-shell";
import { motionEase } from "@/lib/motion";

const dashboardPoints = [
  {
    icon: IconPackages,
    text: "Mark paid, ship, and download invoice PDFs",
  },
  {
    icon: IconTicket,
    text: "Coupons, delivery, and stock in one place",
  },
  {
    icon: IconFileInvoice,
    text: "Export orders or add a manual phone order",
  },
] as const;

const phoneChips = ["Cart", "Coupons", "Invoices"] as const;

export function HowLive() {
  const reduce = useReducedMotion();

  return (
    <section className="border-border relative overflow-hidden border-y bg-surface dark:bg-background">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,color-mix(in_srgb,var(--brand)_8%,transparent),transparent_55%)] dark:bg-[radial-gradient(ellipse_at_bottom_left,color-mix(in_srgb,var(--brand)_16%,transparent),transparent_55%)]"
      />

      <div className="relative mx-auto w-full max-w-6xl px-4 py-24 sm:px-6 md:py-32 md:pb-36">
        <motion.div
          className="mb-12 max-w-2xl space-y-4 md:mb-16"
          initial={reduce ? false : { opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: motionEase }}
        >
          <span className="border-border/70 bg-background/80 text-muted-foreground inline-flex rounded-full border px-3 py-1 text-[10px] font-medium tracking-[0.2em] uppercase">
            When you are live
          </span>
          <h2 className="text-foreground text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-[2.65rem] lg:leading-[1.1]">
            Buyers see polish. You see control.
          </h2>
          <p className="text-muted-foreground max-w-[42ch] text-base leading-7 sm:text-lg sm:leading-8">
            A fast storefront on the outside. A calm dashboard on the inside.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-12 md:gap-7">
          <motion.div
            className="md:col-span-7"
            initial={reduce ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: motionEase }}
          >
            <BezelShell
              className="h-full rounded-[2rem]"
              innerClassName="flex h-full flex-col overflow-hidden rounded-[calc(2rem-0.375rem)]"
            >
              <div className="relative aspect-[16/10] w-full border-b border-border/60">
                <Image
                  src="/assets/images/demo-catalog.png"
                  alt="Stallio seller catalog view"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 58vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              </div>
              <div className="flex flex-1 flex-col gap-5 p-6 sm:p-8">
                <div>
                  <h3 className="text-foreground text-xl font-semibold tracking-tight sm:text-2xl">
                    Command center
                  </h3>
                  <p className="text-muted-foreground mt-2 max-w-[40ch] text-sm leading-6 sm:text-base sm:leading-7">
                    Orders, products, and requests in one view. Update stock
                    between deliveries without opening ten apps.
                  </p>
                </div>
                <ul className="space-y-3">
                  {dashboardPoints.map((point) => {
                    const Icon = point.icon;
                    return (
                      <li
                        key={point.text}
                        className="flex items-start gap-3 text-sm leading-6 sm:text-base"
                      >
                        <span className="bg-brand/10 text-brand mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-2xl">
                          <Icon className="size-4" stroke={1.5} aria-hidden />
                        </span>
                        <span className="text-foreground/90">{point.text}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </BezelShell>
          </motion.div>

          <motion.div
            className="md:col-span-5"
            initial={reduce ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.8,
              delay: reduce ? 0 : 0.1,
              ease: motionEase,
            }}
          >
            <BezelShell
              className="h-full rounded-[2rem]"
              innerClassName="flex h-full flex-col gap-6 overflow-hidden rounded-[calc(2rem-0.375rem)] p-6 sm:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-foreground text-xl font-semibold tracking-tight sm:text-2xl">
                    Thumb friendly
                  </h3>
                  <p className="text-muted-foreground mt-2 max-w-[28ch] text-sm leading-6 sm:text-base sm:leading-7">
                    Categories, cart, coupons, and checkout on the phone. Buyers
                    can switch English, Spanish, or Arabic on your store.
                  </p>
                </div>
                <span className="bg-brand/10 text-brand inline-flex size-10 shrink-0 items-center justify-center rounded-2xl">
                  <IconDeviceMobile className="size-5" stroke={1.5} aria-hidden />
                </span>
              </div>

              <BezelShell
                className="mx-auto w-full max-w-[14rem] rounded-[1.5rem]"
                innerClassName="overflow-hidden rounded-[calc(1.5rem-0.375rem)]"
              >
                <div className="relative aspect-[9/16] w-full">
                  <Image
                    src="/assets/images/demo-product.png"
                    alt="Mobile product detail on a Stallio storefront"
                    fill
                    className="object-cover object-top"
                    sizes="14rem"
                  />
                </div>
              </BezelShell>

              <div className="mt-auto flex flex-wrap gap-2">
                {phoneChips.map((chip) => (
                  <span
                    key={chip}
                    className="border-border/70 bg-background text-muted-foreground rounded-full border px-3 py-1 text-xs font-medium tracking-wide"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </BezelShell>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
