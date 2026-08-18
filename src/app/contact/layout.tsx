import type { Metadata } from "next";

import { siteConfig } from "@/constants/site";
import { SiteLayout } from "@/layouts/SiteLayout";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${siteConfig.name}. We read every message and respond promptly.`,
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SiteLayout>{children}</SiteLayout>;
}
