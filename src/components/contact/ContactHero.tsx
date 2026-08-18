"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

import {
  HeroAtmosphere,
  heroBleedClassName,
} from "@/components/marketing";
import { Spotlight } from "@/components/ui/spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { brandColors } from "@/constants/colors";
import { siteConfig } from "@/constants/site";
import { motionEase } from "@/lib/motion";

export function ContactHero() {
  const reduce = useReducedMotion();

  return (
    <section className={heroBleedClassName}>
      <HeroAtmosphere sparkleId="contact-hero-sparkles" />
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <Spotlight
          className="-top-40 right-0 md:-top-24 md:right-40"
          fill={brandColors.brand}
        />
      </div>

      <div className="pointer-events-none relative z-10 mx-auto flex min-h-[60dvh] w-full max-w-7xl items-center justify-center px-6 py-24 md:py-32">
        <motion.div
          className="pointer-events-auto flex flex-col items-center gap-6 text-center"
          initial={reduce ? false : "hidden"}
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: reduce ? 0 : 0.15 },
            },
          }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 18 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.65, ease: motionEase },
              },
            }}
          >
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              CONTACT
            </p>
          </motion.div>

          <motion.h1
            className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
            variants={{
              hidden: { opacity: 0, y: 18 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.65, ease: motionEase },
              },
            }}
          >
            We read every message
          </motion.h1>

          <motion.p
            className="max-w-2xl text-lg text-muted-foreground sm:text-xl"
            variants={{
              hidden: { opacity: 0, y: 18 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.65, ease: motionEase },
              },
            }}
          >
            Product questions, partnership ideas, or something broken: send a note and we will point you in the right direction.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
