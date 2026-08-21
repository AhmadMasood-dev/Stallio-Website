"use client";

import { useTranslations } from "next-intl";

import { MarketingCta } from "@/components/marketing";
import { routes } from "@/constants/routes";

export function AboutCta() {
  const t = useTranslations("about");

  return (
    <MarketingCta
      eyebrow={t("cta.eyebrow")}
      title={t("cta.title")}
      body={t("cta.body")}
      secondary={{ label: t("cta.secondary"), href: routes.contact }}
    />
  );
}
