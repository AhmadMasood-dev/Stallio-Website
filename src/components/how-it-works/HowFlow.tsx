"use client";

import {
  IconBuildingStore,
  IconLink,
  IconPhoto,
} from "@tabler/icons-react";
import { motion, useReducedMotion } from "motion/react";

import { BezelShell } from "@/components/ui/bezel-shell";
import { motionEase } from "@/lib/motion";

const steps = [
  {
    n: "01",
    title: "Create your shop",
    body: "Sign up, name your store, pick your URL. You get a live link you can paste anywhere.",
    note: "No DNS. No deploy.",
    icon: IconBuildingStore,
    span: "md:col-span-7 md:row-span-2",
    tall: true,
  },
  {
    n: "02",
    title: "Add your products",
    body: "Photos, prices, short descriptions. One catalog you can refine anytime.",
    note: "Clarity, not chaos",
    icon: IconPhoto,
    span: "md:col-span-5",
    tall: false,
  },
  {
    n: "03",
    title: "Share and take orders",
    body: "Same link in bio, stories, and chats. Buyers browse on the phone. You track in one dashboard.",
    note: "Orders land here",
    icon: IconLink,
    span: "md:col-span-5",
    tall: false,
  },
] as const;

export function HowFlow() {
  const reduce = useReducedMotion();

  return (
    <section className="border-border relative overflow-hidden border-y bg-surface dark:bg-background">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,color-mix(in_srgb,var(--brand)_8%,transparent),transparent_50%)] dark:bg-[radial-gradient(ellipse_at_top_right,color-mix(in_srgb,var(--brand)_16%,transparent),transparent_50%)]"
      />

      <div className="relative mx-auto grid w-full max-w-6xl gap-12 px-4 py-24 sm:px-6 md:grid-cols-12 md:gap-10 md:py-32 md:pb-36">
        <motion.div
          className="md:col-span-4 md:sticky md:top-28 md:self-start"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.75, ease: motionEase }}
        >
          <span className="border-border/70 bg-background/80 text-muted-foreground inline-flex rounded-full border px-3 py-1 text-[10px] font-medium tracking-[0.2em] uppercase">
            The flow
          </span>
          <h2 className="text-foreground mt-5 text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-[2.65rem] lg:leading-[1.1]">
            Open. List. Share.
          </h2>
          <p className="text-muted-foreground mt-4 max-w-[32ch] text-base leading-7 sm:text-lg sm:leading-8">
            Three deliberate beats so you ship a storefront that feels
            intentional, not improvised.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:col-span-8 md:grid-cols-12 md:gap-5">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.n}
                className={`col-span-1 ${step.span}`}
                initial={reduce ? false : { opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.75,
                  delay: reduce ? 0 : index * 0.08,
                  ease: motionEase,
                }}
              >
                <BezelShell
                  className="h-full rounded-[2rem]"
                  innerClassName={`flex h-full flex-col gap-5 p-6 sm:p-8 ${step.tall ? "md:min-h-[22rem] md:justify-between" : ""}`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-muted-foreground font-mono text-xs tracking-[0.18em] tabular-nums">
                      {step.n}
                    </span>
                    <span className="bg-brand inline-flex size-10 items-center justify-center rounded-full text-white shadow-[0_18px_40px_-24px_color-mix(in_srgb,var(--brand)_80%,transparent)]">
                      <Icon className="size-5" stroke={1.5} aria-hidden />
                    </span>
                  </div>
                  <div className="space-y-3">
                    <p className="text-brand text-[10px] font-medium tracking-[0.18em] uppercase">
                      {step.note}
                    </p>
                    <h3 className="text-foreground text-xl font-semibold tracking-tight sm:text-2xl">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground max-w-[34ch] text-sm leading-6 sm:text-base sm:leading-7">
                      {step.body}
                    </p>
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
