"use client";

import Image from "next/image";
import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";
import { motion, useReducedMotion } from "motion/react";

import { Button } from "@/components/ui/button";
import {
  StickyScroll,
  type StickyScrollItem,
} from "@/components/ui/sticky-scroll-reveal";
import { routes } from "@/constants/routes";
import { motionEase } from "@/lib/motion";

const stickyContent: StickyScrollItem[] = [
  {
    title: "Browse the shelf",
    description:
      "Categories, variants, and sale prices in a grid buyers understand on the first tap.",
    content: (
      <Image
        src="/assets/images/demo-catalog.png"
        alt="Stallio shop catalog grid on a phone"
        fill
        className="object-cover object-center"
        sizes="(max-width: 1024px) 14rem, (max-width: 1280px) 22rem, 26rem"
      />
    ),
  },
  {
    title: "Open a product",
    description:
      "Photos, price, and stock on one clean detail page - ready to share from bio or WhatsApp.",
    content: (
      <Image
        src="/assets/images/demo-product.png"
        alt="Stallio product detail screen on a phone"
        fill
        className="object-cover object-center"
        sizes="(max-width: 1024px) 14rem, (max-width: 1280px) 22rem, 26rem"
      />
    ),
  },
  {
    title: "Check out",
    description:
      "Cart, coupons, and delivery fees. You mark paid and ship; payments stay between you and the buyer.",
    content: (
      <Image
        src="/assets/images/demo-checkout.png"
        alt="Stallio cart and checkout screens on phones"
        fill
        className="object-cover object-center"
        sizes="(max-width: 1280px) 22rem, 26rem"
      />
    ),
    mobileContent: (
      <Image
        src="/assets/images/demo-checkout-mobile.png"
        alt="Stallio checkout screen on a phone"
        fill
        className="object-cover object-top"
        sizes="14rem"
      />
    ),
  },
];

export function HomeDemo() {
  const reduce = useReducedMotion();

  return (
    <section className="relative">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_0%,color-mix(in_srgb,var(--brand)_10%,transparent),transparent_50%)] dark:bg-[radial-gradient(ellipse_at_80%_0%,color-mix(in_srgb,var(--brand)_18%,transparent),transparent_50%)]"
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-24 md:py-32">
        <div className="mb-12 flex flex-col gap-8 md:mb-14 md:flex-row md:items-end md:justify-between">
          <motion.div
            className="max-w-xl space-y-5"
            initial={reduce ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: motionEase }}
          >
            <span className="border-border/70 bg-background/70 text-muted-foreground inline-flex rounded-full border px-3 py-1 text-[10px] font-medium tracking-[0.2em] uppercase">
              Inside the box
            </span>
            <h2 className="text-foreground text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
              What buyers actually tap through
            </h2>
            <p className="text-muted-foreground max-w-[38ch] text-base leading-7 sm:text-lg sm:leading-8">
              Grid, product detail, cart cues: premium enough to trust, simple
              enough to ship today.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-3"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 0.7,
              delay: reduce ? 0 : 0.08,
              ease: motionEase,
            }}
          >
            <Button
              asChild
              size="lg"
              className="group rounded-full px-5 active:scale-[0.98]"
            >
              <Link href={routes.signup} className="inline-flex items-center gap-2">
                Open Your Shop
                <span className="bg-background/15 inline-flex size-8 items-center justify-center rounded-full transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-px group-hover:scale-105">
                  <IconArrowUpRight className="size-4" stroke={1.5} />
                </span>
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full px-6 active:scale-[0.98]"
            >
              <a href={routes.demo} target="_blank" rel="noopener noreferrer">
                Browse Demo
              </a>
            </Button>
          </motion.div>
        </div>

        <StickyScroll content={stickyContent} />

        <p className="text-muted-foreground mt-6 text-sm">
          Live example:{" "}
          <a
            href={routes.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground underline-offset-4 transition-colors hover:text-brand hover:underline"
          >
            stallio.shop/sweet-cravings-studio
          </a>
        </p>
      </div>
    </section>
  );
}
