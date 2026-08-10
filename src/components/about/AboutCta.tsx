"use client";

import { MarketingCta } from "@/components/marketing";
import { routes } from "@/constants/routes";

export function AboutCta() {
  return (
    <MarketingCta
      eyebrow="Next step"
      title="Put your catalog on a link tonight."
      body="Free to start. Share stallio.shop/you when you are ready — no domain paperwork required."
      secondary={{ label: "Talk to us", href: routes.contact }}
    />
  );
}
