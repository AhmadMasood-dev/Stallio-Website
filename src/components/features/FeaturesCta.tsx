"use client";

import { MarketingCta } from "@/components/marketing";
import { routes } from "@/constants/routes";

export function FeaturesCta() {
  return (
    <MarketingCta
      eyebrow="Try it"
      title="See it on a real storefront."
      body="Spin up your shop in minutes, or browse the demo first. No card on file."
      secondary={{
        label: "View demo store",
        href: routes.demo,
        external: true,
      }}
    />
  );
}
