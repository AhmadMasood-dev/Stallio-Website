"use client";

import Image from "next/image";
import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";
import { motion, useReducedMotion } from "motion/react";

import { BezelShell } from "@/components/ui/bezel-shell";
import { Button } from "@/components/ui/button";
import { MovingBorderButton } from "@/components/ui/moving-border";
import { routes } from "@/constants/routes";
import { siteConfig } from "@/constants/site";
import { motionEase } from "@/lib/motion";

const storyPills = [
  {
    src: "/assets/images/audience-baker.jpg",
    alt: "Baker packaging goods beside a phone storefront",
    label: "Kitchens",
    rotateClass: "md:-rotate-[3deg]",
  },
  {
    src: "/assets/images/audience-craft.jpg",
    alt: "Maker studio with handmade goods ready to ship",
    label: "Studios",
    rotateClass: "md:rotate-[2.5deg]",
  },
  {
    src: "/assets/images/audience-local-shops.png",
    alt: "Local shop counter with catalog open on a phone",
    label: "Counters",
    rotateClass: "md:-rotate-[1.5deg]",
  },
] as const;

export function AboutHero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
      >
        <div className="absolute -top-24 left-[12%] h-[380px] w-[460px] rounded-full bg-[radial-gradient(ellipse_at_center,color-mix(in_srgb,var(--brand)_16%,transparent),transparent_72%)] blur-3xl dark:bg-[radial-gradient(ellipse_at_center,color-mix(in_srgb,var(--brand)_28%,transparent),transparent_72%)]" />
        <div className="absolute right-[4%] bottom-[8%] h-[320px] w-[360px] rounded-full bg-[radial-gradient(ellipse_at_center,color-mix(in_srgb,#F5C518_12%,transparent),transparent_70%)] blur-3xl dark:bg-[radial-gradient(ellipse_at_center,color-mix(in_srgb,#F5C518_10%,transparent),transparent_70%)]" />
      </div>

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
            About us
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
            Built for sellers who already have an audience.
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
            Stallio is a storefront you can share in a message. No domain
            setup, no payment gateway maze — just a catalog, orders, and
            invoices that stay out of your DMs.
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
            {reduce ? (
              <Button
                asChild
                size="lg"
                className="group rounded-full px-5 active:scale-[0.98]"
              >
                <Link
                  href={routes.signup}
                  className="inline-flex items-center gap-2"
                >
                  Start Free
                  <span className="bg-background/15 inline-flex size-8 items-center justify-center rounded-full">
                    <IconArrowUpRight className="size-4" stroke={1.5} />
                  </span>
                </Link>
              </Button>
            ) : (
              <MovingBorderButton
                as={Link}
                href={routes.signup}
                borderRadius="9999px"
                duration={2800}
                containerClassName="group h-12 w-auto min-w-[10.5rem] active:scale-[0.98]"
                className="bg-brand gap-2 px-5 hover:bg-[color-mix(in_srgb,var(--brand)_88%,black)]"
              >
                Start Free
                <span className="bg-background/15 inline-flex size-8 items-center justify-center rounded-full transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-px group-hover:scale-105">
                  <IconArrowUpRight className="size-4" stroke={1.5} />
                </span>
              </MovingBorderButton>
            )}

            <Button
              asChild
              size="lg"
              variant="ghost"
              className="rounded-full px-5 active:scale-[0.98]"
            >
              <Link href={routes.home}>See how it works</Link>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative w-full"
          initial={reduce ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: reduce ? 0 : 0.15, ease: motionEase }}
        >
          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 md:flex-col md:overflow-visible md:pb-0 md:gap-5">
            {storyPills.map((pill, index) => (
              <motion.div
                key={pill.label}
                className={`w-[78%] shrink-0 snap-center sm:w-[62%] md:w-full md:max-w-[28rem] md:shrink md:odd:ml-auto md:even:mr-auto ${reduce ? "" : pill.rotateClass}`}
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
                      src={pill.src}
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
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
