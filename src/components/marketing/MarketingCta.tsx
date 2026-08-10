"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

import { StartFreeCta } from "@/components/marketing/StartFreeCta";
import { BezelShell } from "@/components/ui/bezel-shell";
import { Button } from "@/components/ui/button";
import { motionEase } from "@/lib/motion";

type MarketingCtaProps = {
  eyebrow: string;
  title: string;
  body: string;
  secondary: {
    label: string;
    href: string;
    external?: boolean;
  };
};

/** Editorial split closing CTA used across marketing pages. */
export function MarketingCta({
  eyebrow,
  title,
  body,
  secondary,
}: MarketingCtaProps) {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden px-4 py-24 sm:px-6 md:py-32 md:pb-36">
      <div className="relative mx-auto w-full max-w-6xl">
        <BezelShell
          className="overflow-hidden rounded-[2rem]"
          innerClassName="relative overflow-hidden rounded-[calc(2rem-0.375rem)] px-6 py-20 sm:px-10 md:grid md:grid-cols-[1.25fr_0.75fr] md:items-center md:gap-10 md:px-12 md:py-24"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_0%_50%,color-mix(in_srgb,var(--brand)_12%,transparent),transparent_55%)] dark:bg-[radial-gradient(ellipse_at_0%_50%,color-mix(in_srgb,var(--brand)_20%,transparent),transparent_55%)]"
          />

          <motion.div
            className="relative z-10 max-w-xl"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: motionEase }}
          >
            <span className="border-border/70 bg-background/70 text-muted-foreground inline-flex rounded-full border px-3 py-1 text-[10px] font-medium tracking-[0.2em] uppercase">
              {eyebrow}
            </span>
            <h2 className="text-foreground mt-5 text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
              {title}
            </h2>
            <p className="text-muted-foreground mt-5 max-w-[38ch] text-base leading-7 sm:text-lg sm:leading-8">
              {body}
            </p>
          </motion.div>

          <motion.div
            className="relative z-10 mt-10 flex flex-col items-start gap-3 md:mt-0 md:items-end"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 0.75,
              delay: reduce ? 0 : 0.1,
              ease: motionEase,
            }}
          >
            <StartFreeCta />
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-background/80 rounded-full px-6 active:scale-[0.98]"
            >
              {secondary.external ? (
                <a
                  href={secondary.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {secondary.label}
                </a>
              ) : (
                <Link href={secondary.href}>{secondary.label}</Link>
              )}
            </Button>
          </motion.div>
        </BezelShell>
      </div>
    </section>
  );
}
