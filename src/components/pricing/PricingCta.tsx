"use client";

import { MarketingCta } from "@/components/marketing";
import { routes } from "@/constants/routes";

export function PricingCta() {
  return (
    <MarketingCta
      eyebrow="Still deciding?"
      title="Ask us, or start a trial."
      body="Write on the contact page, or open a shop and see the product for yourself. First month free, no card on file."
      secondary={{
        label: "Contact Us",
        href: routes.contact,
      }}
    />
  );
}
