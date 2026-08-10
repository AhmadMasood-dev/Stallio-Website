"use client";

import {
  IconDeviceMobile,
  IconLink,
  IconPackages,
  IconPhoto,
} from "@tabler/icons-react";
import { motion, useReducedMotion } from "motion/react";

import { BezelShell } from "@/components/ui/bezel-shell";
import { motionEase } from "@/lib/motion";

const capabilities = [
  {
    title: "Custom store link",
    body: "One path for bio, WhatsApp, stories, and QR. Copy and paste; we host the shop.",
    icon: IconLink,
    span: "md:col-span-8 md:row-span-2",
    tall: true,
  },
  {
    title: "Product catalog",
    body: "Unlimited products and images. Variants, sale prices, stock, and hide/show without deleting.",
    icon: IconPhoto,
    span: "md:col-span-4",
    tall: false,
  },
  {
    title: "Order dashboard",
    body: "Every order in one inbox. Search, filter, mark paid, set delivery status, add tracking.",
    icon: IconPackages,
    span: "md:col-span-4",
    tall: false,
  },
  {
    title: "Mobile-first storefront",
    body: "Grid, product pages, and checkout tuned for thumbs, where your buyers actually are.",
    icon: IconDeviceMobile,
    span: "md:col-span-12",
    tall: false,
  },
] as const;

export function FeaturesBento() {
  const reduce = useReducedMotion();

  return (
    <section className="border-border relative overflow-hidden border-y bg-surface dark:bg-background">
      <div className="relative mx-auto w-full max-w-6xl px-4 py-24 sm:px-6 md:py-32 md:pb-36">
        <motion.div
          className="mb-12 max-w-2xl space-y-4 md:mb-16"
          initial={reduce ? false : { opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: motionEase }}
        >
          <span className="border-border/70 bg-background/80 text-muted-foreground inline-flex rounded-full border px-3 py-1 text-[10px] font-medium tracking-[0.2em] uppercase">
            What you get
          </span>
          <h2 className="text-foreground text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-[2.65rem] lg:leading-[1.1]">
            Capabilities that stay out of your way.
          </h2>
          <p className="text-muted-foreground max-w-[42ch] text-base leading-7 sm:text-lg sm:leading-8">
            Built for sellers who already have buyers, not for teams managing
            DNS, plugins, and payment gateways.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-12 md:gap-5">
          {capabilities.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                className={`col-span-1 ${item.span}`}
                initial={reduce ? false : { opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.75,
                  delay: reduce ? 0 : index * 0.06,
                  ease: motionEase,
                }}
              >
                <BezelShell
                  className="h-full rounded-[2rem]"
                  innerClassName={`flex h-full flex-col gap-5 p-6 sm:p-8 ${item.tall ? "md:min-h-[20rem] md:justify-between" : ""}`}
                >
                  <span className="bg-brand/10 text-brand inline-flex size-11 items-center justify-center rounded-2xl">
                    <Icon className="size-5" stroke={1.5} aria-hidden />
                  </span>
                  <div className="space-y-3">
                    <h3 className="text-foreground text-xl font-semibold tracking-tight sm:text-2xl">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground max-w-[40ch] text-sm leading-6 sm:text-base sm:leading-7">
                      {item.body}
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
