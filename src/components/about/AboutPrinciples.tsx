"use client";

import {
  IconFingerprint,
  IconLink,
  IconSparkles,
  IconVault,
} from "@tabler/icons-react";
import { motion, useReducedMotion } from "motion/react";

import { BezelShell } from "@/components/ui/bezel-shell";
import { motionEase } from "@/lib/motion";

const principles = [
  {
    number: "01",
    title: "Shareable by default",
    description:
      "If it cannot live in a story, DM, or WhatsApp message, it is not finished. Your store is a link — not a project plan.",
    icon: IconLink,
    span: "md:col-span-7",
  },
  {
    number: "02",
    title: "You keep the money path",
    description:
      "Bank transfer, payment link, or cash on delivery — Stallio does not insert itself between you and your buyer.",
    icon: IconVault,
    span: "md:col-span-5",
  },
  {
    number: "03",
    title: "Thumb-first, always",
    description:
      "Most of your buyers will never open a laptop. Catalog, cart, and checkout are designed for one hand.",
    icon: IconFingerprint,
    span: "md:col-span-5",
  },
  {
    number: "04",
    title: "Quiet tools, clear orders",
    description:
      "Invoices, status, and a dashboard that does not shout. Enough structure to ship — not enough to drown you.",
    icon: IconSparkles,
    span: "md:col-span-7",
  },
] as const;

export function AboutPrinciples() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden px-4 py-24 sm:px-6 md:py-32 md:pb-36">
      <div className="relative mx-auto w-full max-w-6xl">
        <motion.div
          className="mb-14 max-w-2xl space-y-4 md:mb-16"
          initial={reduce ? false : { opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: motionEase }}
        >
          <span className="border-border/70 bg-background/80 text-muted-foreground inline-flex rounded-full border px-3 py-1 text-[10px] font-medium tracking-[0.2em] uppercase">
            What we believe
          </span>
          <h2 className="text-foreground text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-[2.65rem] lg:leading-[1.1]">
            A few rules we will not bend.
          </h2>
          <p className="text-muted-foreground max-w-[42ch] text-base leading-7 sm:text-lg sm:leading-8">
            These are not slogans. They are the constraints that keep Stallio
            small, fast, and useful for solo sellers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-12 md:gap-6">
          {principles.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.number}
                className={`col-span-1 ${item.span}`}
                initial={reduce ? false : { opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.75,
                  delay: reduce ? 0 : index * 0.07,
                  ease: motionEase,
                }}
              >
                <BezelShell
                  className="h-full rounded-[2rem]"
                  innerClassName="flex h-full flex-col gap-6 p-6 sm:p-8"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-muted-foreground font-mono text-xs tracking-[0.18em] tabular-nums">
                      {item.number}
                    </span>
                    <span className="bg-brand/10 text-brand inline-flex size-10 items-center justify-center rounded-2xl">
                      <Icon className="size-5" stroke={1.5} aria-hidden />
                    </span>
                  </div>
                  <div className="mt-auto space-y-3">
                    <h3 className="text-foreground text-xl font-semibold tracking-tight sm:text-2xl">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground max-w-[36ch] text-sm leading-6 sm:text-base sm:leading-7">
                      {item.description}
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
