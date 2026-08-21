"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

import {
  AuthAlert,
  AuthFormCard,
  AuthSubmitButton,
} from "@/components/auth/AuthFormCard";
import { AuthField } from "@/components/auth/AuthField";
import {
  AuthPasswordField,
  authInputClass,
} from "@/components/auth/AuthPasswordField";
import { isValidEmail } from "@/components/auth/auth-options";
import { Input } from "@/components/ui/input";
import { routes } from "@/constants/routes";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

type FieldErrors = {
  email?: string;
  password?: string;
};

export function LoginForm() {
  const t = useTranslations("auth.login");
  const tCommon = useTranslations("common");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState<string | null>(null);
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  function validate(next = { email, password }) {
    const nextErrors: FieldErrors = {};
    if (!next.email.trim()) nextErrors.email = t("emailRequired");
    else if (!isValidEmail(next.email)) nextErrors.email = t("emailInvalid");
    if (!next.password) nextErrors.password = t("passwordRequired");
    return nextErrors;
  }

  async function signIn() {
    setTouched({ email: true, password: true });
    const nextErrors = validate();
    setErrors(nextErrors);
    setFormError(null);
    if (Object.keys(nextErrors).length) throw new Error("invalid");

    await new Promise((r) => setTimeout(r, 900));
    setFormError(t("stubSuccess"));
  }

  return (
    <AuthFormCard>
      <form
        className="space-y-5"
        onSubmit={(e) => e.preventDefault()}
        noValidate
      >
        {formError ? <AuthAlert variant="error">{formError}</AuthAlert> : null}

        <AuthField
          id="login-email"
          label={t("email")}
          required
          error={touched.email ? errors.email : undefined}
        >
          <Input
            id="login-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder={t("emailPlaceholder")}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (touched.email)
                setErrors(validate({ email: e.target.value, password }));
            }}
            onBlur={() => {
              setTouched((prev) => ({ ...prev, email: true }));
              setErrors(validate());
            }}
            aria-invalid={Boolean(touched.email && errors.email) || undefined}
            className={authInputClass}
          />
        </AuthField>

        <AuthPasswordField
          id="login-password"
          label={t("password")}
          required
          value={password}
          placeholder={t("passwordPlaceholder")}
          autoComplete="current-password"
          error={touched.password ? errors.password : undefined}
          onChange={(value) => {
            setPassword(value);
            if (touched.password)
              setErrors(validate({ email, password: value }));
          }}
          onBlur={() => {
            setTouched((prev) => ({ ...prev, password: true }));
            setErrors(validate());
          }}
        />

        <div className="flex justify-end">
          <Link
            href={routes.forgotPassword}
            className="text-brand text-sm font-medium transition-opacity duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:opacity-80"
          >
            {t("forgot")}
          </Link>
        </div>

        <AuthSubmitButton onAction={signIn}>{t("submit")}</AuthSubmitButton>
      </form>

      <p className="text-muted-foreground mt-6 text-center text-sm leading-6">
        {t("newTo")}{" "}
        <Link
          href={routes.signup}
          className={cn(
            "text-foreground hover:text-brand font-medium underline-offset-4 transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:underline",
          )}
        >
          {tCommon("startFree")}
        </Link>
      </p>
    </AuthFormCard>
  );
}
