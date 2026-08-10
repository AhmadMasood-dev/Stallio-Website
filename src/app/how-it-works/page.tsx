import type { Metadata } from "next";

import {
  HowChannels,
  HowCta,
  HowFlow,
  HowHero,
  HowLive,
  HowSteps,
} from "@/components/how-it-works";
import { siteConfig } from "@/constants/site";

export const metadata: Metadata = {
  title: "How It Works",
  description: `Open. List. Share. How ${siteConfig.name} gets you from empty path to a live storefront in three moves.`,
};

export default function HowItWorksPage() {
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
