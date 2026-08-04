"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { HomeHeroVisual } from "@/components/home/HomeHeroVisual";
import { Button } from "@/components/ui/button";
import { MovingBorderButton } from "@/components/ui/moving-border";
import { SparklesCore } from "@/components/ui/sparkles";
import { Spotlight } from "@/components/ui/spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { brandColors } from "@/constants/colors";
import { routes } from "@/constants/routes";
import { siteConfig } from "@/constants/site";

const ease = [0.16, 1, 0.3, 1] as const;

export function HomeHero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden">
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-28 left-[18%] h-[420px] w-[520px] rounded-full bg-[radial-gradient(ellipse_at_center,color-mix(in_srgb,var(--brand)_22%,transparent),transparent_72%)] blur-3xl dark:bg-[radial-gradient(ellipse_at_center,color-mix(in_srgb,var(--brand)_34%,transparent),transparent_72%)]" />
        <div className="absolute top-[35%] right-[8%] h-[380px] w-[420px] rounded-full bg-[radial-gradient(ellipse_at_center,color-mix(in_srgb,#F5C518_18%,transparent),transparent_70%)] blur-3xl dark:bg-[radial-gradient(ellipse_at_center,color-mix(in_srgb,#F5C518_14%,transparent),transparent_70%)]" />
        <Spotlight
          className="-top-40 left-0 md:-top-24 md:left-40"
          fill={brandColors.brand}
        />
        {!reduce ? (
          <SparklesCore
            id="hero-sparkles"
            background="transparent"
            minSize={0.3}
            maxSize={1.1}
            particleDensity={48}
            speed={2.4}
            className="absolute inset-0 h-full w-full"
            particleColor={brandColors.brand}
          />
        ) : null}
      </div>

      <div className="pointer-events-none relative z-10 mx-auto grid min-h-[calc(100dvh-5rem)] w-full max-w-7xl items-center gap-8 px-6 pt-8 pb-14 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.15fr)] md:gap-10 md:pt-10 md:pb-16 lg:gap-14">
        <motion.div
          className="pointer-events-auto flex max-w-xl flex-col gap-5 md:gap-6"
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
                transition: { duration: 0.65, ease },
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

          <motion.h1
            className="text-foreground max-w-[13ch] text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-[3.5rem] lg:leading-[1.08]"
            variants={{
              hidden: { opacity: 0, y: 22 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, ease },
              },
            }}
          >
            One link.{" "}
            <span className="text-brand">A real storefront.</span>
          </motion.h1>

          <motion.div
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { duration: 0.2, delay: reduce ? 0 : 0.15 },
              },
            }}
          >
            <TextGenerateEffect
              words={siteConfig.heroSubtext}
              className="max-w-[34ch] text-base leading-7 sm:text-lg sm:leading-8"
              duration={0.35}
            />
          </motion.div>

          <motion.div
            className="flex flex-wrap items-center gap-3 pt-1"
            variants={{
              hidden: { opacity: 0, y: 16 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.55, ease },
              },
            }}
          >
            {reduce ? (
              <Button
                asChild
                size="lg"
                className="rounded-full px-6 active:scale-[0.98]"
              >
                <Link href={routes.signup}>
                  Start Free
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            ) : (
              <MovingBorderButton
                as={Link}
                href={routes.signup}
                borderRadius="9999px"
                duration={2800}
                containerClassName="h-11 w-auto min-w-[9.5rem]"
                className="bg-brand px-6 hover:bg-[color-mix(in_srgb,var(--brand)_88%,black)]"
              >
                Start Free
                <ArrowRight className="size-4" />
              </MovingBorderButton>
            )}
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-background/75 rounded-full px-6 backdrop-blur-sm active:scale-[0.98]"
            >
              <a href={routes.demo} target="_blank" rel="noopener noreferrer">
                View Demo
              </a>
            </Button>
          </motion.div>
        </motion.div>

        <div className="pointer-events-auto min-w-0">
          <HomeHeroVisual />
        </div>
      </div>
    </section>
  );
}
