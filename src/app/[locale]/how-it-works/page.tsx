import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import {
  HowChannels,
  HowCta,
  HowFlow,
  HowHero,
  HowLive,
  HowSteps,
} from "@/components/how-it-works";

type HowItWorksPageProps = PageProps<"/[locale]/how-it-works">;

export async function generateMetadata({
  params,
}: HowItWorksPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.howItWorks" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function HowItWorksPage({ params }: HowItWorksPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <HowHero />
      <HowFlow />
      <HowSteps />
      <HowChannels />
      <HowLive />
      <HowCta />
    </>
  );
}
