"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { useTranslations } from "next-intl";

import {
  HeroAtmosphere,
  StartFreeCta,
  heroBleedClassName,
} from "@/components/marketing";
import { BezelShell } from "@/components/ui/bezel-shell";
import { Button } from "@/components/ui/button";
import { routes } from "@/constants/routes";
import { siteConfig } from "@/constants/site";
import { Link } from "@/i18n/navigation";
import { motionEase } from "@/lib/motion";

const pillMeta = [
  {
    src: "/assets/images/audience-baker.jpg",
    rotateClass: "md:-rotate-[3deg]",
  },
  {
    src: "/assets/images/audience-craft.jpg",
    rotateClass: "md:rotate-[2.5deg]",
  },
  {
    src: "/assets/images/audience-local-shops.png",
    rotateClass: "md:-rotate-[1.5deg]",
  },
] as const;

type PillCopy = {
  label: string;
  alt: string;
};

export function AboutHero() {
  const t = useTranslations("about");
  const reduce = useReducedMotion();
  const pills = t.raw("hero.pills") as PillCopy[];

  return (
    <section className={heroBleedClassName}>
      <HeroAtmosphere sparkleId="about-hero-sparkles" />

      <div className="relative z-10 mx-auto grid min-h-[100dvh] w-full max-w-7xl items-center gap-12 px-4 py-24 sm:px-6 md:grid-cols-2 md:gap-10 md:py-28 lg:gap-16">
        <motion.div
          className="flex max-w-xl flex-col gap-6 md:gap-7"
          initial={reduce ? false : "hidden"}
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: reduce ? 0 : 0.1 },
            },
          }}
        >
          <motion.div
            className="flex items-center gap-3"
            variants={{
              hidden: { opacity: 0, y: 18 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.65, ease: motionEase },
              },
            }}
          >
            <Image
              src="/assets/images/logo.png"
              alt=""
              width={48}
              height={50}
              className="h-12 w-auto"
              priority
            />
            <p className="text-foreground text-[1.75rem] font-semibold tracking-tight sm:text-3xl">
              {siteConfig.name}
            </p>
          </motion.div>

          <motion.span
            className="border-border/70 bg-background/80 text-muted-foreground w-fit rounded-full border px-3 py-1 text-[10px] font-medium tracking-[0.2em] uppercase"
            variants={{
              hidden: { opacity: 0, y: 14 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: motionEase },
              },
            }}
          >
            {t("hero.eyebrow")}
          </motion.span>

          <motion.h1
            className="text-foreground max-w-[14ch] text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-[3.4rem] lg:leading-[1.06]"
            variants={{
              hidden: { opacity: 0, y: 22 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.75, ease: motionEase },
              },
            }}
          >
            {t("hero.title")}
          </motion.h1>

          <motion.p
            className="text-muted-foreground max-w-[38ch] text-base leading-7 sm:text-lg sm:leading-8"
            variants={{
              hidden: { opacity: 0, y: 18 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, ease: motionEase },
              },
            }}
          >
            {t("hero.body")}
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center gap-3 pt-1"
            variants={{
              hidden: { opacity: 0, y: 16 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.65, ease: motionEase },
              },
            }}
          >
            <StartFreeCta />
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="rounded-full px-5 active:scale-[0.98]"
            >
              <Link href={routes.home}>{t("hero.secondary")}</Link>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative w-full"
          initial={reduce ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: reduce ? 0 : 0.15,
            ease: motionEase,
          }}
        >
          <div className="scrollbar-none flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 md:flex-col md:overflow-visible md:pb-0 md:gap-5">
            {pillMeta.map((meta, index) => {
              const pill = pills[index];
              if (!pill) return null;
              return (
                <motion.div
                  key={`${pill.label}-${index}`}
                  className={`w-[78%] shrink-0 snap-center sm:w-[62%] md:w-full md:max-w-[28rem] md:shrink md:odd:ml-auto md:even:mr-auto ${reduce ? "" : meta.rotateClass}`}
                  initial={reduce ? false : { opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.75,
                    delay: reduce ? 0 : 0.2 + index * 0.1,
                    ease: motionEase,
                  }}
                >
                  <BezelShell
                    className="rounded-[1.75rem]"
                    innerClassName="overflow-hidden rounded-[calc(1.75rem-0.375rem)]"
                  >
                    <div className="relative aspect-[16/10] w-full">
                      <Image
                        src={meta.src}
                        alt={pill.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 80vw, 28rem"
                        priority={index === 0}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                      <p className="absolute bottom-4 left-4 text-sm font-medium tracking-wide text-white">
                        {pill.label}
                      </p>
                    </div>
                  </BezelShell>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
