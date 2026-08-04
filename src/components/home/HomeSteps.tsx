"use client";

import {
  IconBuildingStore,
  IconLink,
  IconPhoto,
} from "@tabler/icons-react";
import { motion, useReducedMotion } from "motion/react";

import { BezelShell } from "@/components/ui/bezel-shell";
import { Timeline, type TimelineEntry } from "@/components/ui/timeline";
import { motionEase } from "@/lib/motion";

const steps = [
  {
    n: "01",
    title: "Open your shop",
    body: "Name it, add the basics, and claim your stallio.shop path.",
    note: "Under five minutes",
    detail:
      "No domain, DNS, or hosting setup. Your storefront URL is ready the moment you finish.",
    icon: IconBuildingStore,
  },
  {
    n: "02",
    title: "List products",
    body: "Photos, price, stock, variants - ready to share.",
    note: "No spreadsheet gymnastics",
    detail:
      "Drop in what you already shoot for Instagram. Buyers see a clean shelf instead of a DM thread.",
    icon: IconPhoto,
  },
  {
    n: "03",
    title: "Drop the link",
    body: "Bio, stories, WhatsApp: one link everywhere.",
    note: "Orders land in your dashboard",
    detail:
      "Share once. Mark paid, ship, and export when the orders start showing up.",
    icon: IconLink,
  },
] as const;

export function HomeSteps() {
  const reduce = useReducedMotion();

  const data: TimelineEntry[] = steps.map((step) => ({
    title: step.n,
    content: (
      <StepCard
        title={step.title}
        body={step.body}
        note={step.note}
        detail={step.detail}
        icon={step.icon}
      />
    ),
  }));

  return (
    <section className="border-border relative overflow-hidden border-y bg-surface dark:bg-background">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,color-mix(in_srgb,var(--brand)_10%,transparent),transparent_55%)] dark:bg-[radial-gradient(ellipse_at_bottom_left,color-mix(in_srgb,var(--brand)_16%,transparent),transparent_55%)]"
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-24 md:py-32">
        <motion.div
          className="mb-6 max-w-2xl space-y-5 md:mb-4"
          initial={reduce ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.8, ease: motionEase }}
        >
          <span className="border-border/70 bg-background/70 text-muted-foreground inline-flex rounded-full border px-3 py-1 text-[10px] font-medium tracking-[0.2em] uppercase">
            How it works
          </span>
          <h2 className="text-foreground text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
            Three moves. You’re live.
          </h2>
          <p className="text-muted-foreground max-w-[40ch] text-base leading-7 sm:text-lg sm:leading-8">
            No staging servers. No theme rabbit holes. Scroll the flow - open,
            list, share.
          </p>
        </motion.div>

        <Timeline data={data} />
      </div>
    </section>
  );
}

function StepCard({
  title,
  body,
  note,
  detail,
  icon: Icon,
}: {
  title: string;
  body: string;
  note: string;
  detail: string;
  icon: typeof IconBuildingStore;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.7, ease: motionEase }}
    >
      <BezelShell innerClassName="p-6 sm:p-8">
        <div className="mb-5 flex items-start justify-between gap-4">
          <span className="bg-brand inline-flex size-11 items-center justify-center rounded-full text-white shadow-[0_18px_40px_-24px_color-mix(in_srgb,var(--brand)_80%,transparent)]">
            <Icon className="size-5" stroke={1.5} />
          </span>
          <span className="text-brand text-[10px] font-medium tracking-[0.18em] uppercase">
            {note}
          </span>
        </div>

        <h3 className="text-foreground mb-2 text-xl font-semibold tracking-tight sm:text-2xl">
          {title}
        </h3>
        <p className="text-foreground/85 mb-3 max-w-[34ch] text-sm leading-6 sm:text-base sm:leading-7">
          {body}
        </p>
        <p className="text-muted-foreground max-w-[38ch] text-sm leading-6">
          {detail}
        </p>
      </BezelShell>
    </motion.div>
  );
}
