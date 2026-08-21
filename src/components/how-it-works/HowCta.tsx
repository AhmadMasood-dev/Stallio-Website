"use client";

import { useTranslations } from "next-intl";

import { MarketingCta } from "@/components/marketing";
import { routes } from "@/constants/routes";

export function HowCta() {
  const t = useTranslations("howItWorks.cta");

  return (
    <MarketingCta
      eyebrow={t("eyebrow")}
      title={t("title")}
      body={t("body")}
      secondary={{ label: t("secondary"), href: routes.features }}
    />
  );
}
