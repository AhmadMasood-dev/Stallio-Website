import { SiteLayout } from "@/layouts/SiteLayout";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SiteLayout>{children}</SiteLayout>;
}
