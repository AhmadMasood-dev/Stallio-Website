import type { Metadata } from "next";

import { AuthShell, ForgotPasswordForm } from "@/components/auth";
import { siteConfig } from "@/constants/site";

export const metadata: Metadata = {
  title: "Forgot Password",
  description: `Reset your ${siteConfig.name} password with a secure email link.`,
};

export default function ForgotPasswordPage() {
  return (
    <AuthShell
      eyebrow="Password reset"
      title="Forgot Password"
      description="Enter your account email. We will send a link to choose a new password."
    >
      <ForgotPasswordForm />
    </AuthShell>
  );
}
