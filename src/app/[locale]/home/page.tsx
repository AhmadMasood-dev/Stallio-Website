import { getTranslations, setRequestLocale } from "next-intl/server";

import {
  HomeAudience,
  HomeCompare,
  HomeCta,
  HomeDemo,
  HomeHero,
  HomeSteps,
  HomeToolkit,
  HomeWhy,
} from "@/components/home";

type HomePageProps = PageProps<"/[locale]/home">;

export async function generateMetadata({ params }: HomePageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.home" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <HomeHero />
      <HomeAudience />
      <HomeCompare />
      <HomeSteps />
      <HomeDemo />
      <HomeToolkit />
      <HomeWhy />
      <HomeCta />
    </>
  );
}
