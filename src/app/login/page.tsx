import type { Metadata } from "next";

import { AuthShell, LoginForm } from "@/components/auth";
import { siteConfig } from "@/constants/site";

export const metadata: Metadata = {
  title: "Sign In",
  description: `Sign in to ${siteConfig.name} and manage your shop, products, and orders.`,
};

export default function LoginPage() {
  return (
    <AuthShell
      eyebrow="Welcome back"
      title="Sign In"
      description="Open your dashboard, update the catalog, and keep orders moving from one place."
    >
      <LoginForm />
    </AuthShell>
  );
}
