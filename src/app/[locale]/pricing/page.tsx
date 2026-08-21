import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import {
  PricingCta,
  PricingFaq,
  PricingHero,
  PricingIncluded,
  PricingPlans,
} from "@/components/pricing";

type PricingPageProps = PageProps<"/[locale]/pricing">;

export async function generateMetadata({
  params,
}: PricingPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.pricing" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function PricingPage({ params }: PricingPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

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
