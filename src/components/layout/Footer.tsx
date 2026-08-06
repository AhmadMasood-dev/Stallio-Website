"use client";

import Image from "next/image";
import Link from "next/link";
import { IconArrowUpRight, IconMail } from "@tabler/icons-react";
import { motion, useReducedMotion } from "motion/react";

import { Button } from "@/components/ui/button";
import { routes } from "@/constants/routes";
import { footerLinks, siteConfig } from "@/constants/site";
import { motionEase } from "@/lib/motion";

const linkGroups = [
  { title: "Product", items: footerLinks.product },
  { title: "Company", items: footerLinks.company },
  { title: "Legal", items: footerLinks.legal },
] as const;

export function Footer() {
  const reduce = useReducedMotion();
  const year = new Date().getFullYear();

  return (
    <footer className="border-border relative mt-auto overflow-hidden border-t">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_120%,color-mix(in_srgb,var(--brand)_12%,transparent),transparent_55%)] dark:bg-[radial-gradient(ellipse_at_50%_120%,color-mix(in_srgb,var(--brand)_18%,transparent),transparent_55%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:linear-gradient(to_right,color-mix(in_srgb,var(--foreground)_6%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_srgb,var(--foreground)_6%,transparent)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_18%,transparent_72%)]"
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 pt-20 pb-10 md:pt-24 md:pb-12">
        <motion.div
          className="grid gap-12 md:grid-cols-12 md:gap-10"
          initial={reduce ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: motionEase }}
        >
          <div className="space-y-6 md:col-span-5 lg:col-span-4">
            <Link
              href={routes.home}
              className="inline-flex items-center gap-2.5 font-semibold tracking-tight"
            >
              <Image
                src="/assets/images/logo.png"
                alt=""
                width={32}
                height={34}
                className="h-8 w-auto"
              />
              <span className="text-lg">{siteConfig.name}</span>
            </Link>

            <p className="text-muted-foreground max-w-[32ch] text-sm leading-7 md:text-base md:leading-8">
              {siteConfig.name}, {siteConfig.tagline}. Share one link. Sell like
              a real shop.
            </p>

            <div className="flex flex-wrap items-center gap-3">
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
                  <span className="bg-background/15 inline-flex size-8 items-center justify-center rounded-full transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-px group-hover:scale-105">
                    <IconArrowUpRight className="size-4" stroke={1.5} />
                  </span>
                </Link>
              </Button>

              <a
                href={`mailto:${siteConfig.email}`}
                className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2 text-sm transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
              >
                <IconMail className="size-4" stroke={1.5} />
                {siteConfig.email}
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-7 lg:col-span-8 lg:pl-6">
            {linkGroups.map((group) => (
              <div key={group.title}>
                <p className="text-foreground mb-4 text-[11px] font-medium tracking-[0.18em] uppercase">
                  {group.title}
                </p>
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-muted-foreground hover:text-foreground group inline-flex text-sm transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
                      >
                        <span className="transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5">
                          {item.label}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="relative mt-16 overflow-hidden md:mt-20">
          <motion.p
            aria-hidden
            className="text-foreground/10 dark:text-foreground/15 pointer-events-none select-none text-center text-[clamp(4.5rem,18vw,12rem)] leading-none font-semibold tracking-[-0.06em]"
            initial={reduce ? false : { opacity: 0.35 }}
            animate={
              reduce
                ? undefined
                : {
                    opacity: [0.28, 0.42, 0.28],
                  }
            }
            transition={
              reduce
                ? undefined
                : {
                    duration: 8,
                    repeat: Infinity,
                    ease: motionEase,
                  }
            }
          >
            {siteConfig.name}
          </motion.p>
          <div
            aria-hidden
            className="from-background via-background/70 pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t to-transparent"
          />
        </div>

        <div className="border-border/60 text-muted-foreground mt-6 flex flex-col gap-3 border-t pt-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p className="max-w-[42ch] text-xs leading-5 sm:text-right">
            One link. A real storefront — no domain stress.
          </p>
        </div>
      </div>
    </footer>
  );
}
