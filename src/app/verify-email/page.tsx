import type { Metadata } from "next";

import { VerificationCodeForm } from "@/components/auth";
import { Header } from "@/components/layout/Header";
import { siteConfig } from "@/constants/site";

export const metadata: Metadata = {
  title: "Verify your email",
  description: `Confirm your account email for ${siteConfig.name}.`,
};

export default function VerifyEmailPage() {
  return (
    <div className="bg-background flex min-h-screen flex-col">
      <Header />

      <main className="mx-auto flex w-full max-w-6xl flex-1 items-center justify-center px-4 py-8 sm:px-6 sm:py-12">
        <div className="w-full max-w-[28rem]">
          <VerificationCodeForm />
        </div>
      </main>
    </div>
  );
}
