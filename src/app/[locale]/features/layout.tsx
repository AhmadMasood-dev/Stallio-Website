import { SiteLayout } from "@/layouts/SiteLayout";

export default function FeaturesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SiteLayout>{children}</SiteLayout>;
}
