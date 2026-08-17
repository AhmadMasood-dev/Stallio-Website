import type { Metadata } from "next";

import {
  PricingCta,
  PricingFaq,
  PricingHero,
  PricingIncluded,
  PricingPlans,
} from "@/components/pricing";
import { siteConfig } from "@/constants/site";

export const metadata: Metadata = {
  title: "Pricing",
  description: `Simple numbers, one full product. Start free with ${siteConfig.name}, then pick monthly or yearly. Same storefront, dashboard, and tools either way.`,
};

export default function PricingPage() {
  return (
    <>
      <PricingHero />
      <PricingPlans />
      <PricingIncluded />
      <PricingFaq />
      <PricingCta />
    </>
  );
}
