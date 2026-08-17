import type { Metadata } from "next";

import { AuthShell, SignupForm } from "@/components/auth";
import { siteConfig } from "@/constants/site";

export const metadata: Metadata = {
  title: "Create your shop",
  description: `Start free with ${siteConfig.name}. One store link, a catalog, and a dashboard for products and orders.`,
};

export default function SignupPage() {
  return (
    <AuthShell
      compact
      eyebrow="Get started"
      title="Create your shop"
      description="Two quick steps. Free trial, one store link, and a dashboard for products and orders."
    >
      <SignupForm />
    </AuthShell>
  );
}
