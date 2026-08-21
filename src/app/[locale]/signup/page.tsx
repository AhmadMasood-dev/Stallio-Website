import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { AuthShell, SignupForm } from "@/components/auth";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.signup" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function SignupPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("auth.signup");

  return (
    <AuthShell
      compact
      eyebrow={t("eyebrow")}
      title={t("title")}
      description={t("description")}
    >
      <SignupForm />
    </AuthShell>
  );
}
