import type { Metadata } from "next";

import {
  AboutCta,
  AboutFor,
  AboutHero,
  AboutPrinciples,
  AboutStory,
} from "@/components/about";
import { siteConfig } from "@/constants/site";

export const metadata: Metadata = {
  title: "About",
  description: `Why ${siteConfig.name} exists — a shareable storefront for sellers who already have an audience.`,
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutPrinciples />
      <AboutFor />
      <AboutCta />
    </>
  );
}
