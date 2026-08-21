"use client";

import {
  IconChartBar,
  IconCreditCardOff,
  IconDiscount2,
  IconFileInvoice,
  IconFolder,
  IconHeadset,
  IconMessages,
  IconTruckDelivery,
} from "@tabler/icons-react";
import { motion, useReducedMotion } from "motion/react";
import { useTranslations } from "next-intl";

import {
  FeatureHoverGrid,
  type FeatureHoverItem,
} from "@/components/ui/feature-hover-grid";
import { motionEase } from "@/lib/motion";

const iconProps = { stroke: 1.5, "aria-hidden": true } as const;

const toolIcons = [
  <IconDiscount2 key="discount" {...iconProps} />,
  <IconFileInvoice key="invoice" {...iconProps} />,
  <IconTruckDelivery key="truck" {...iconProps} />,
  <IconFolder key="folder" {...iconProps} />,
  <IconCreditCardOff key="card" {...iconProps} />,
  <IconChartBar key="chart" {...iconProps} />,
  <IconMessages key="messages" {...iconProps} />,
  <IconHeadset key="headset" {...iconProps} />,
];

type ToolItem = {
  title: string;
  description: string;
};

export function FeaturesTools() {
  const t = useTranslations("features");
  const reduce = useReducedMotion();
  const items = t.raw("tools.items") as ToolItem[];

  const tools: FeatureHoverItem[] = items.map((item, index) => ({
    title: item.title,
    description: item.description,
    icon: toolIcons[index]!,
  }));

  return (
    <section className="relative overflow-hidden px-4 py-24 sm:px-6 md:py-32 md:pb-36">
      <div className="relative mx-auto w-full max-w-6xl">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-10">
          <motion.div
            className="space-y-4 lg:sticky lg:top-28 lg:col-span-4 lg:self-start"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.75, ease: motionEase }}
          >
            <span className="border-border/70 bg-background/80 text-muted-foreground inline-flex rounded-full border px-3 py-1 text-[10px] font-medium tracking-[0.2em] uppercase">
              {t("tools.eyebrow")}
            </span>
            <h2 className="text-foreground text-section-heading">
              {t("tools.title")}
            </h2>
          </motion.div>

          <motion.div
            className="lg:col-span-8"
            initial={reduce ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease: motionEase }}
          >
            <FeatureHoverGrid items={tools} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
