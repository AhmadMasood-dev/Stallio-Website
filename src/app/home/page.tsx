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

export default function HomePage() {
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
