"use client";

import Image from "next/image";
import Link from "next/link";
import { IconCalendarOff, IconTag } from "@tabler/icons-react";
import { motion, useReducedMotion } from "motion/react";

import {
  HeroAtmosphere,
  heroBleedClassName,
  StartFreeCta,
} from "@/components/marketing";
import { BezelShell } from "@/components/ui/bezel-shell";
import { Button } from "@/components/ui/button";
import { formatUsd, usdMonthly, usdYearly } from "@/constants/pricing";
import { routes } from "@/constants/routes";
import { siteConfig } from "@/constants/site";
import { fadeUp, motionEase } from "@/lib/motion";

const billingPreview = [
  {
    label: "Monthly",
    price: `${formatUsd(usdMonthly)}/mo`,
    note: "Flexible. Cancel anytime.",
  },
  {
    label: "Yearly",
    price: `${formatUsd(usdYearly)}/yr`,
    note: "Two months free vs monthly.",
  },
] as const;

export function PricingHero() {
  const reduce = useReducedMotion();

  return (
    <section className={heroBleedClassName}>
      <HeroAtmosphere sparkleId="pricing-hero-sparkles" />

      <div className="relative z-10 mx-auto grid min-h-[100dvh] w-full max-w-7xl items-center gap-12 px-4 py-24 sm:px-6 md:grid-cols-12 md:gap-10 md:py-28 lg:gap-14">
        <motion.div
          className="flex max-w-xl flex-col gap-6 md:col-span-6"
          initial={reduce ? false : "hidden"}
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: reduce ? 0 : 0.1 },
            },
          }}
        >
          <motion.div className="flex items-center gap-3" variants={fadeUp(0.65, 16)}>
            <Image
              src="/assets/images/logo.png"
              alt=""
              width={44}
              height={46}
              className="h-11 w-auto"
              priority
            />
            <p className="text-foreground text-2xl font-semibold tracking-tight">
              {siteConfig.name}
            </p>
          </motion.div>

          <motion.span
            className="border-border/70 bg-background/80 text-muted-foreground w-fit rounded-full border px-3 py-1 text-[10px] font-medium tracking-[0.2em] uppercase"
            variants={fadeUp(0.6, 14)}
          >
            Pricing
          </motion.span>

          <motion.h1
            className="text-foreground max-w-[12ch] text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-[3.25rem] lg:leading-[1.06]"
            variants={fadeUp(0.75, 22)}
          >
            Simple numbers.{" "}
            <span className="text-brand">One full product.</span>
          </motion.h1>

          <motion.p
            className="text-muted-foreground max-w-[40ch] text-base leading-7 sm:text-lg sm:leading-8"
            variants={fadeUp(0.7, 18)}
          >
            One month on us, then choose monthly or yearly. Same features either
            way: storefront, dashboard, and tools included.
          </motion.p>

          <motion.ul className="space-y-2.5" variants={fadeUp()}>
            <li className="text-foreground/90 flex items-center gap-2.5 text-sm leading-6 sm:text-base">
              <span className="bg-brand/10 text-brand inline-flex size-8 shrink-0 items-center justify-center rounded-full">
                <IconTag className="size-4" stroke={1.5} aria-hidden />
              </span>
              From {formatUsd(usdMonthly)}/mo after trial
            </li>
            <li className="text-foreground/90 flex items-center gap-2.5 text-sm leading-6 sm:text-base">
              <span className="bg-brand/10 text-brand inline-flex size-8 shrink-0 items-center justify-center rounded-full">
                <IconCalendarOff className="size-4" stroke={1.5} aria-hidden />
              </span>
              No card to start
            </li>
          </motion.ul>

          <motion.div
            className="flex flex-wrap items-center gap-3 pt-1"
            variants={fadeUp()}
          >
            <StartFreeCta />
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="rounded-full px-5 active:scale-[0.98]"
            >
              <Link href={routes.features}>What You Get</Link>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="md:col-span-6"
          initial={reduce ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.85,
            delay: reduce ? 0 : 0.12,
            ease: motionEase,
          }}
        >
          <BezelShell
            className="rounded-[2rem] md:rotate-[1.5deg]"
            innerClassName="rounded-[calc(2rem-0.375rem)] p-5 sm:p-7 md:rotate-[-1.5deg]"
          >
            <p className="text-brand text-[10px] font-medium tracking-[0.2em] uppercase">
              Choose billing
            </p>
            <p className="text-muted-foreground mt-2 max-w-[36ch] text-sm leading-6">
              Preview local amounts by country below. Subscriptions are charged
              in US dollars.
            </p>

            <div className="mt-6 space-y-2.5">
              {billingPreview.map((option) => (
                <div
                  key={option.label}
                  className="ring-border/60 flex items-center justify-between rounded-[1.35rem] px-5 py-4 ring-1"
                >
                  <span>
                    <span className="text-foreground block text-sm font-semibold tracking-tight">
                      {option.label}
                    </span>
                    <span className="text-muted-foreground mt-0.5 block text-xs leading-5">
                      {option.note}
                    </span>
                  </span>
                  <span className="text-foreground text-lg font-semibold tracking-tight">
                    {option.price}
                  </span>
                </div>
              ))}
            </div>
          </BezelShell>
        </motion.div>
      </div>
    </section>
  );
}
