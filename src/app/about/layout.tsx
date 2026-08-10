import { SiteLayout } from "@/layouts/SiteLayout";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SiteLayout>{children}</SiteLayout>;
}
