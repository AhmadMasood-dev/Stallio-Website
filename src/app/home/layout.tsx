import { SiteShell } from "@/components/layout";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SiteShell>{children}</SiteShell>;
}
