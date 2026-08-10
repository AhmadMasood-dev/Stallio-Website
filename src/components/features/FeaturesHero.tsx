"use client";

import Image from "next/image";
import Link from "next/link";
import { IconArrowUpRight, IconCheck } from "@tabler/icons-react";
import { motion, useReducedMotion } from "motion/react";

import { BezelShell } from "@/components/ui/bezel-shell";
import { Button } from "@/components/ui/button";
import { MovingBorderButton } from "@/components/ui/moving-border";
import { routes } from "@/constants/routes";
import { siteConfig } from "@/constants/site";
import { motionEase } from "@/lib/motion";

const bullets = [
  "stallio.shop link, no domain purchase",
  "Unlimited products, photos, and orders",
  "PDF invoices and order export",
  "Coupons, delivery fees, and COD at checkout",
] as const;

const stack = [
  {
    src: "/assets/images/demo-catalog.png",
    alt: "Stallio catalog dashboard",
    className: "md:col-span-8",
    aspect: "aspect-[16/10]",
  },
  {
    src: "/assets/images/demo-product.png",
    alt: "Mobile product page on Stallio",
    className: "md:col-span-4 md:mt-10",
    aspect: "aspect-[4/5]",
  },
  {
    src: "/assets/images/demo-checkout.png",
    alt: "Mobile checkout on Stallio",
    className: "md:col-span-5 md:-mt-6",
    aspect: "aspect-[5/4]",
  },
] as const;

export function FeaturesHero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-[10%] left-[5%] h-[420px] w-[480px] rounded-full bg-[radial-gradient(ellipse_at_center,color-mix(in_srgb,var(--brand)_14%,transparent),transparent_72%)] blur-3xl dark:bg-[radial-gradient(ellipse_at_center,color-mix(in_srgb,var(--brand)_26%,transparent),transparent_72%)]" />
      </div>

      <div className="relative z-10 mx-auto grid min-h-[100dvh] w-full max-w-7xl items-center gap-12 px-4 py-24 sm:px-6 md:grid-cols-12 md:gap-10 md:py-28 lg:gap-14">
        <motion.div
          className="order-2 md:order-1 md:col-span-7"
          initial={reduce ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: motionEase }}
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-12 sm:gap-4">
            {stack.map((item, index) => (
              <motion.div
                key={item.src}
                className={item.className}
                initial={reduce ? false : { opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.75,
                  delay: reduce ? 0 : 0.12 + index * 0.1,
                  ease: motionEase,
                }}
              >
                <BezelShell
                  className={`rounded-[1.75rem] ${reduce ? "" : index === 1 ? "md:rotate-[2deg]" : index === 2 ? "md:-rotate-[1.5deg]" : ""}`}
                  innerClassName="overflow-hidden rounded-[calc(1.75rem-0.375rem)]"
                >
                  <div className={`relative w-full ${item.aspect}`}>
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={index === 0}
                    />
                  </div>
                </BezelShell>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="order-1 flex max-w-xl flex-col gap-6 md:order-2 md:col-span-5 md:justify-center"
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
              hidden: { opacity: 0, y: 16 },
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
            variants={{
              hidden: { opacity: 0, y: 14 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: motionEase },
              },
            }}
          >
            Features
          </motion.span>

          <motion.h1
            className="text-foreground max-w-[14ch] text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-[3.25rem] lg:leading-[1.06]"
            variants={{
              hidden: { opacity: 0, y: 22 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.75, ease: motionEase },
              },
            }}
          >
            Everything you need{" "}
            <span className="text-brand">to sell from one link.</span>
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
            Storefront, dashboard, and seller tools in one place: hosted link,
            unlimited catalog and orders, no buyer payment gateway required.
          </motion.p>

          <motion.ul
            className="space-y-2.5"
            variants={{
              hidden: { opacity: 0, y: 16 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.65, ease: motionEase },
              },
            }}
          >
            {bullets.map((item) => (
              <li
                key={item}
                className="text-foreground/90 flex items-start gap-2.5 text-sm leading-6 sm:text-base"
              >
                <span className="bg-brand/10 text-brand mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full">
                  <IconCheck className="size-3" stroke={1.5} aria-hidden />
                </span>
                {item}
              </li>
            ))}
          </motion.ul>

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
              <Link href={routes.howItWorks}>See how it works</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
