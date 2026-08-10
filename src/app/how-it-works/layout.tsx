import { SiteLayout } from "@/layouts/SiteLayout";

export default function HowItWorksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SiteLayout>{children}</SiteLayout>;
}
