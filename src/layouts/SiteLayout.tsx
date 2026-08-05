import { SiteShell } from "@/components/layout";

type SiteLayoutProps = {
  children: React.ReactNode;
};

/** Shared marketing/site chrome for App Router layouts. */
export function SiteLayout({ children }: SiteLayoutProps) {
  return <SiteShell>{children}</SiteShell>;
}
