"use client";

import { useState } from "react";
import Link from "next/link";
import { IconArrowUpRight, IconCheck } from "@tabler/icons-react";
import { motion, useReducedMotion } from "motion/react";

import { BezelShell } from "@/components/ui/bezel-shell";
import {
  formatLocal,
  formatUsd,
  pricingCountries,
  usdMonthly,
  usdYearly,
  yearlySaveUsd,
  type BillingCycle,
} from "@/constants/pricing";
import { routes } from "@/constants/routes";
import { motionEase } from "@/lib/motion";
import { cn } from "@/lib/utils";

const selectClass = cn(
  "border-border/70 bg-background h-12 w-full appearance-none rounded-2xl border px-4 pr-10 text-sm shadow-[inset_0_1px_1px_rgba(255,255,255,0.35)]",
  "transition-[border-color,box-shadow,transform] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
  "bg-[length:1rem] bg-[right_1rem_center] bg-no-repeat",
  "bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 fill=%22none%22 stroke=%22%2371717a%22 stroke-width=%221.5%22%3E%3Cpath d=%22m4 6 4 4 4-4%22/%3E%3C/svg%3E')]",
);

type Plan = {
  id: BillingCycle;
  eyebrow: string;
  cadence: string;
  usd: number;
  blurb: string;
  cta: string;
  featured?: boolean;
};

const plans: Plan[] = [
  {
    id: "monthly",
    eyebrow: "Monthly",
    cadence: "/mo",
    usd: usdMonthly,
    blurb: "Flexible billing. Cancel anytime from your account.",
    cta: "Start Monthly",
  },
  {
    id: "yearly",
    eyebrow: "Yearly",
    cadence: "/yr",
    usd: usdYearly,
    blurb: "Pay once per year. Best if you are committed to growing your shop.",
    cta: "Start Yearly",
    featured: true,
  },
];

export function PricingPlans() {
  const reduce = useReducedMotion();
  const [cycle, setCycle] = useState<BillingCycle>("monthly");
  const [countryCode, setCountryCode] = useState(pricingCountries[0].code);
  const country =
    pricingCountries.find((item) => item.code === countryCode) ??
    pricingCountries[0];
  const showLocal = country.currency !== "USD";

  return (
    <section
      id="plans"
      className="border-border relative overflow-hidden border-y bg-surface scroll-mt-28 dark:bg-background"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_88%_0%,color-mix(in_srgb,var(--brand)_10%,transparent),transparent_50%)] dark:bg-[radial-gradient(ellipse_at_88%_0%,color-mix(in_srgb,var(--brand)_18%,transparent),transparent_50%)]"
      />

      <div className="relative mx-auto w-full max-w-6xl px-4 py-24 sm:px-6 md:py-32 md:pb-36">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-10">
          <motion.div
            className="space-y-6 lg:sticky lg:top-28 lg:col-span-4 lg:self-start"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.75, ease: motionEase }}
          >
            <span className="border-border/70 bg-background/80 text-muted-foreground inline-flex rounded-full border px-3 py-1 text-[10px] font-medium tracking-[0.2em] uppercase">
              Choose billing
            </span>
            <h2 className="text-foreground text-section-heading">
              Monthly or yearly, your choice
            </h2>
            <p className="text-muted-foreground max-w-[34ch] text-base leading-7 sm:text-lg sm:leading-8">
              Preview local amounts by country. Subscriptions are charged in US
              dollars.
            </p>

            <div className="space-y-2">
              <label
                htmlFor="pricing-country"
                className="text-foreground text-sm font-medium"
              >
                Your country
              </label>
              <select
                id="pricing-country"
                value={country.code}
                onChange={(e) => setCountryCode(e.target.value)}
                className={selectClass}
              >
                {pricingCountries.map((item) => (
                  <option key={item.code} value={item.code}>
                    {item.name} · {item.currency}
                  </option>
                ))}
              </select>
              <p className="text-muted-foreground text-xs leading-5">
                Approximate local amount. Subscriptions are charged in USD.
              </p>
            </div>

            <div
              role="tablist"
              aria-label="Billing cycle"
              className="bg-background ring-border/60 relative inline-flex w-full rounded-full p-1 ring-1"
            >
              {(["monthly", "yearly"] as const).map((id) => {
                const selected = cycle === id;
                return (
                  <button
                    key={id}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    onClick={() => setCycle(id)}
                    className={cn(
                      "relative z-10 h-10 flex-1 cursor-pointer rounded-full text-sm font-medium capitalize transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
                      selected
                        ? "text-brand-foreground"
                        : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {selected ? (
                      <motion.span
                        layoutId={reduce ? undefined : "pricing-cycle-pill"}
                        className="bg-brand absolute inset-0 rounded-full"
                        transition={{ duration: 0.45, ease: motionEase }}
                      />
                    ) : null}
                    <span className="relative z-10 capitalize">{id}</span>
                  </button>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-8"
            initial={reduce ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: reduce ? 0 : 0.06,
              ease: motionEase,
            }}
          >
            <div className="flex flex-col gap-5 lg:flex-row lg:items-stretch lg:gap-0">
              {plans.map((plan, index) => {
                const active = cycle === plan.id;
                const local = showLocal
                  ? formatLocal(plan.usd, country)
                  : null;

                return (
                  <motion.div
                    key={plan.id}
                    className={cn(
                      "w-full lg:w-1/2",
                      plan.featured
                        ? "lg:relative lg:z-10 lg:-ml-4 lg:mt-0"
                        : "lg:mt-8",
                      !reduce && plan.featured ? "lg:rotate-[1.25deg]" : "",
                      !reduce && !plan.featured ? "lg:-rotate-[1.25deg]" : "",
                    )}
                    animate={
                      reduce
                        ? undefined
                        : { scale: active ? 1 : 0.98, opacity: active ? 1 : 0.88 }
                    }
                    transition={{ duration: 0.5, ease: motionEase }}
                  >
                    <BezelShell
                      className={cn(
                        "h-full rounded-[2rem]",
                        active ? "ring-brand/25" : "",
                      )}
                      innerClassName={cn(
                        "flex h-full flex-col rounded-[calc(2rem-0.375rem)] p-6 sm:p-7",
                        plan.featured
                          ? "bg-[color-mix(in_srgb,var(--brand)_6%,var(--background))] dark:bg-[color-mix(in_srgb,var(--brand)_14%,var(--card))]"
                          : "",
                      )}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-[10px] font-medium tracking-[0.2em] uppercase">
                          <span className="text-brand">{plan.eyebrow}</span>
                        </p>
                        {plan.featured ? (
                          <span className="bg-brand/10 text-brand rounded-full px-2.5 py-1 text-[10px] font-medium tracking-[0.14em] uppercase">
                            Save {formatUsd(yearlySaveUsd)}
                          </span>
                        ) : null}
                      </div>

                      <p className="text-foreground mt-5 flex items-end gap-1.5">
                        <span className="text-5xl font-semibold tracking-tight">
                          {formatUsd(plan.usd)}
                        </span>
                        <span className="text-muted-foreground mb-1.5 text-sm">
                          {plan.cadence}
                        </span>
                      </p>

                      <p className="text-muted-foreground mt-1 text-xs leading-5">
                        After trial
                        {local ? ` · about ${local}${plan.cadence}` : ""}
                      </p>
                      <p className="text-muted-foreground mt-4 max-w-[32ch] text-sm leading-6">
                        {plan.blurb}
                      </p>

                      <ul className="mt-6 space-y-2">
                        {[
                          "Full storefront and dashboard",
                          "Unlimited products and orders",
                          "Same tools on both plans",
                        ].map((line) => (
                          <li
                            key={line}
                            className="text-foreground/90 flex items-start gap-2 text-sm leading-6"
                          >
                            <span className="bg-brand/10 text-brand mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full">
                              <IconCheck className="size-3" stroke={1.5} aria-hidden />
                            </span>
                            {line}
                          </li>
                        ))}
                      </ul>

                      <Link
                        href={routes.signup}
                        className={cn(
                          "group mt-8 inline-flex h-12 w-full items-center justify-between rounded-full px-5 text-sm font-medium transition-[transform,background-color] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]",
                          plan.featured
                            ? "bg-brand text-brand-foreground hover:bg-[color-mix(in_srgb,var(--brand)_88%,black)]"
                            : "border-border/70 bg-background text-foreground hover:bg-muted/50 border",
                        )}
                      >
                        {plan.cta}
                        <span
                          className={cn(
                            "inline-flex size-8 items-center justify-center rounded-full transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-px group-hover:scale-105",
                            plan.featured
                              ? "bg-background/15"
                              : "bg-foreground/5 dark:bg-white/10",
                          )}
                        >
                          <IconArrowUpRight className="size-4" stroke={1.5} />
                        </span>
                      </Link>
                    </BezelShell>
                    {index === 0 ? (
                      <span className="sr-only">and</span>
                    ) : null}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
