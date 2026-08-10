"use client";

import { MarketingCta } from "@/components/marketing";
import { routes } from "@/constants/routes";

export function HowCta() {
  return (
    <MarketingCta
      eyebrow="Ready"
      title="Ship the link tonight."
      body="Free to start. No card on file. If it feels right, keep selling from the same URL tomorrow."
      secondary={{ label: "Explore features", href: routes.features }}
    />
  );
}
