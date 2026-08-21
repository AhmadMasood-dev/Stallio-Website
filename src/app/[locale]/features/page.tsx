import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import {
  FeaturesBento,
  FeaturesCta,
  FeaturesHero,
  FeaturesLoop,
  FeaturesSpotlight,
  FeaturesTools,
} from "@/components/features";

type Props = PageProps<"/[locale]/features">;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("features.title"),
    description: t("features.description"),
  };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

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
