"use client";

import { IconCheck } from "@tabler/icons-react";
import { motion, useReducedMotion } from "motion/react";

import { BezelShell } from "@/components/ui/bezel-shell";
import { includedFeatures } from "@/constants/pricing";
import { motionEase } from "@/lib/motion";

export function PricingIncluded() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden px-4 py-24 sm:px-6 md:py-32 md:pb-36">
      <div className="relative mx-auto w-full max-w-6xl">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-14">
          <motion.div
            className="space-y-5 lg:sticky lg:top-28 lg:col-span-5 lg:self-start"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.75, ease: motionEase }}
          >
            <span className="border-border/70 bg-background/80 text-muted-foreground inline-flex rounded-full border px-3 py-1 text-[10px] font-medium tracking-[0.2em] uppercase">
              Included
            </span>
            <h2 className="text-foreground text-section-heading">
              Everything in both plans
            </h2>
            <p className="text-muted-foreground max-w-[36ch] text-base leading-7 sm:text-lg sm:leading-8">
              One product, two billing rhythms. Your first month is free. We
              remind you before the trial ends so you can pick monthly or
              yearly, or cancel if it is not a fit.
            </p>
          </motion.div>

          <motion.div
            className="lg:col-span-7"
            initial={reduce ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: reduce ? 0 : 0.06,
              ease: motionEase,
            }}
          >
            <BezelShell
              className="rounded-[2rem]"
              innerClassName="rounded-[calc(2rem-0.375rem)] p-6 sm:p-8"
            >
              <ul className="grid gap-x-10 gap-y-3.5 sm:grid-cols-2">
                {includedFeatures.map((item) => (
                  <li
                    key={item}
                    className="text-foreground/90 flex items-start gap-2.5 text-sm leading-6"
                  >
                    <span className="bg-brand/10 text-brand mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full">
                      <IconCheck className="size-3" stroke={1.5} aria-hidden />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </BezelShell>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
