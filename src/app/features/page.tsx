import type { Metadata } from "next";

import {
  FeaturesBento,
  FeaturesCta,
  FeaturesHero,
  FeaturesLoop,
  FeaturesSpotlight,
  FeaturesTools,
} from "@/components/features";
import { siteConfig } from "@/constants/site";

export const metadata: Metadata = {
  title: "Features",
  description: `Everything you need to sell from one link with ${siteConfig.name} — storefront, catalog, orders, invoices, and seller tools.`,
};

export default function FeaturesPage() {
  return (
    <>
      <FeaturesHero />
      <FeaturesLoop />
      <FeaturesSpotlight />
      <FeaturesBento />
      <FeaturesTools />
      <FeaturesCta />
    </>
  );
}
