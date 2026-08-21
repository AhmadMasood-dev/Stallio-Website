"use client";

import { useTranslations } from "next-intl";

import { MarketingCta } from "@/components/marketing";
import { routes } from "@/constants/routes";

export function FeaturesCta() {
  const t = useTranslations("features");

  return (
    <MarketingCta
      eyebrow={t("cta.eyebrow")}
      title={t("cta.title")}
      body={t("cta.body")}
      secondary={{
        label: t("cta.secondary"),
        href: routes.demo,
        external: true,
      }}
    />
  );
}
