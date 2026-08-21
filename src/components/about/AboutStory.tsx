"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { useTranslations } from "next-intl";

import { BezelShell } from "@/components/ui/bezel-shell";
import { motionEase } from "@/lib/motion";

export function AboutStory() {
  const t = useTranslations("about");
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden border-y border-border bg-surface dark:bg-background">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,color-mix(in_srgb,var(--brand)_8%,transparent),transparent_50%)] dark:bg-[radial-gradient(ellipse_at_80%_20%,color-mix(in_srgb,var(--brand)_16%,transparent),transparent_50%)]"
      />

      <div className="relative mx-auto grid w-full max-w-6xl gap-14 px-4 py-24 sm:px-6 md:grid-cols-12 md:gap-10 md:py-32 md:pb-36">
        <motion.div
          className="md:col-span-5 md:sticky md:top-28 md:self-start"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.75, ease: motionEase }}
        >
          <span className="border-border/70 bg-background/80 text-muted-foreground inline-flex rounded-full border px-3 py-1 text-[10px] font-medium tracking-[0.2em] uppercase">
            {t("story.eyebrow")}
          </span>
          <h2 className="text-foreground mt-5 text-section-heading">
            {t("story.title")}
          </h2>
        </motion.div>

        <div className="flex flex-col gap-10 md:col-span-7 md:gap-12">
          <motion.p
            className="text-muted-foreground max-w-[42ch] text-base leading-7 sm:text-lg sm:leading-8"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: motionEase }}
          >
            {t("story.body")}
          </motion.p>

          <motion.blockquote
            className="border-brand/30 relative max-w-[36ch] border-l-2 pl-6"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 0.7,
              delay: reduce ? 0 : 0.08,
              ease: motionEase,
            }}
          >
            <p className="text-foreground text-xl font-medium tracking-tight text-pretty sm:text-2xl sm:leading-snug">
              {t("story.pull")}
            </p>
          </motion.blockquote>

          <motion.p
            className="text-muted-foreground max-w-[42ch] text-base leading-7 sm:text-lg sm:leading-8"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 0.7,
              delay: reduce ? 0 : 0.12,
              ease: motionEase,
            }}
          >
            {t("story.closingBefore")}{" "}
            <span className="text-foreground font-medium">
              {t("story.closingPath")}
            </span>
            {t("story.closingAfter")}
          </motion.p>

          <motion.div
            className="relative mt-2 max-w-md md:-ml-4 md:mt-4"
            initial={reduce ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: motionEase }}
          >
            <BezelShell
              className={`rounded-[2rem] ${reduce ? "" : "md:-rotate-2"}`}
              innerClassName="overflow-hidden rounded-[calc(2rem-0.375rem)]"
            >
              <div className="relative aspect-[5/4] w-full">
                <Image
                  src="/assets/images/audience-clothing.jpg"
                  alt={t("story.altWorkspace")}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 28rem"
                />
              </div>
            </BezelShell>
            <BezelShell
              className={`absolute -right-3 -bottom-8 w-[58%] rounded-[1.5rem] sm:-right-6 md:-right-4 lg:-right-10 ${reduce ? "" : "md:rotate-3"}`}
              innerClassName="overflow-hidden rounded-[calc(1.5rem-0.375rem)]"
            >
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/assets/images/demo-catalog.png"
                  alt={t("story.altCatalog")}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 55vw, 16rem"
                />
              </div>
            </BezelShell>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
