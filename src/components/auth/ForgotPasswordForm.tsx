"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

import {
  AuthAlert,
  AuthFormCard,
} from "@/components/auth/AuthFormCard";
import { isValidEmail } from "@/components/auth/auth-options";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { routes } from "@/constants/routes";
import { Link } from "@/i18n/navigation";

const placeholders = [
  "you@example.com",
  "shopowner@gmail.com",
  "hello@yourbrand.com",
];

export function ForgotPasswordForm() {
  const t = useTranslations("auth.forgot");
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const value = email.trim();
    if (!value) {
      setError(t("emailRequired"));
      throw new Error("invalid");
    }
    if (!isValidEmail(value)) {
      setError(t("emailInvalid"));
      throw new Error("invalid");
    }
    setError(null);
    await new Promise((r) => setTimeout(r, 700));
    setSent(true);
  }

  return (
    <AuthFormCard>
      {sent ? (
        <div className="space-y-5">
          <AuthAlert variant="success">
            {t("sent", { email: email.trim() })}
          </AuthAlert>
          <Link
            href={routes.login}
            className="bg-brand hover:bg-[color-mix(in_srgb,var(--brand)_88%,black)] text-brand-foreground inline-flex h-12 w-full items-center justify-center rounded-full text-sm font-semibold transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]"
          >
            {t("back")}
          </Link>
        </div>
      ) : (
        <div className="space-y-5">
          <div className="space-y-2">
            <p className="text-foreground text-sm font-medium">
              {t("email")}
              <span className="text-brand ml-0.5">*</span>
            </p>
            <PlaceholdersAndVanishInput
              placeholders={placeholders}
              onChange={(e) => {
                setEmail(e.target.value);
                if (error) setError(null);
              }}
              onSubmit={onSubmit}
            />
            {error ? (
              <p role="alert" className="text-destructive text-sm leading-5">
                {error}
              </p>
            ) : (
              <p className="text-muted-foreground text-xs leading-5">
                {t("hint")}
              </p>
            )}
          </div>
        </div>
      )}

      {!sent ? (
        <p className="text-muted-foreground mt-6 text-center text-sm leading-6">
          <Link
            href={routes.login}
            className="text-foreground hover:text-brand font-medium underline-offset-4 transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:underline"
          >
            {t("backAlt")}
          </Link>
        </p>
      ) : null}
    </AuthFormCard>
  );
}
