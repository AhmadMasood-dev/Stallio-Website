"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { Button } from "@/components/ui/button";
import { routes } from "@/constants/routes";
import { motionEase } from "@/lib/motion";

export function ContactCta() {
  const reduce = useReducedMotion();

  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
      <motion.div
        className="flex flex-col items-center gap-8 rounded-2xl border border-border/50 bg-gradient-to-b from-background to-background/50 px-6 py-16 text-center sm:px-8 sm:py-20 md:gap-10"
        initial={reduce ? false : "hidden"}
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: {},
          show: {
            transition: { staggerChildren: reduce ? 0 : 0.15 },
          },
        }}
      >
        <motion.div
          className="space-y-4"
          variants={{
            hidden: { opacity: 0, y: 18 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.65, ease: motionEase },
            },
          }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Ready to get started?
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore what Stallio can do for your storefront.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col gap-3 sm:flex-row sm:justify-center"
          variants={{
            hidden: { opacity: 0, y: 18 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.65, ease: motionEase },
            },
          }}
        >
          <Link href={routes.signup}>
            <Button>
              Start Free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href={routes.features}>
            <Button variant="outline">Learn More</Button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
