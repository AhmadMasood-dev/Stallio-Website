"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

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
import {
  currencies,
  countries,
  isValidEmail,
  isValidPassword,
  isValidUsername,
} from "@/components/auth/auth-options";
import { Input } from "@/components/ui/input";
import { routes } from "@/constants/routes";
import { siteConfig } from "@/constants/site";
import { Link, useRouter } from "@/i18n/navigation";
import { motionEase } from "@/lib/motion";
import { cn } from "@/lib/utils";

type FormState = {
  email: string;
  shopName: string;
  username: string;
  password: string;
  confirmPassword: string;
  country: string;
  currency: string;
};

type FieldErrors = Partial<Record<keyof FormState, string>>;
type Step = 0 | 1;

const compactInputClass = cn(authInputClass, "h-11");

const selectClass = cn(
  compactInputClass,
  "appearance-none bg-[length:1rem] bg-[right_1rem_center] bg-no-repeat pr-10",
  "bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 fill=%22none%22 stroke=%22%2371717a%22 stroke-width=%221.5%22%3E%3Cpath d=%22m4 6 4 4 4-4%22/%3E%3C/svg%3E')]",
);

const accountKeys: (keyof FormState)[] = [
  "email",
  "password",
  "confirmPassword",
];
const shopKeys: (keyof FormState)[] = [
  "shopName",
  "username",
  "country",
  "currency",
];

export function SignupForm() {
  const t = useTranslations("auth.signup");
  const tFooter = useTranslations("footer");
  const reduce = useReducedMotion();
  const router = useRouter();
  const [step, setStep] = useState<Step>(0);
  const [form, setForm] = useState<FormState>({
    email: "",
    shopName: "",
    username: "",
    password: "",
    confirmPassword: "",
    country: "",
    currency: "",
  });
  const [logoName, setLogoName] = useState<string | null>(null);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<
    Partial<Record<keyof FormState, boolean>>
  >({});
  const [formError, setFormError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  function setField<K extends keyof FormState>(key: K, value: FormState[K]) {
    const next = { ...form, [key]: value };
    setForm(next);
    if (touched[key]) setErrors(validate(next));
  }

  function validate(next: FormState = form) {
    const nextErrors: FieldErrors = {};
    if (!next.email.trim()) nextErrors.email = t("emailRequired");
    else if (!isValidEmail(next.email)) nextErrors.email = t("emailInvalid");

    if (!next.shopName.trim()) nextErrors.shopName = t("shopRequired");

    if (!next.username.trim()) nextErrors.username = t("urlRequired");
    else if (!isValidUsername(next.username))
      nextErrors.username = t("urlInvalid");

    if (!next.password) nextErrors.password = t("passwordRequired");
    else if (!isValidPassword(next.password))
      nextErrors.password = t("passwordShort");

    if (!next.confirmPassword)
      nextErrors.confirmPassword = t("confirmRequired");
    else if (next.confirmPassword !== next.password)
      nextErrors.confirmPassword = t("passwordMismatch");

    if (!next.country) nextErrors.country = t("countryRequired");
    if (!next.currency) nextErrors.currency = t("currencyRequired");

    return nextErrors;
  }

  function markTouched(keys: (keyof FormState)[]) {
    setTouched((prev) => {
      const next = { ...prev };
      for (const key of keys) next[key] = true;
      return next;
    });
  }

  function validateStep(current: Step) {
    const keys = current === 0 ? accountKeys : shopKeys;
    markTouched(keys);
    const all = validate();
    const stepErrors: FieldErrors = {};
    for (const key of keys) {
      if (all[key]) stepErrors[key] = all[key];
    }
    setErrors(all);
    return stepErrors;
  }

  async function goNext() {
    setFormError(null);
    setSuccess(null);
    const stepErrors = validateStep(0);
    if (Object.keys(stepErrors).length) {
      setFormError(t("fixError"));
      return;
    }
    setStep(1);
  }

  async function createShop() {
    setFormError(null);
    setSuccess(null);
    const stepErrors = validateStep(1);
    if (Object.keys(stepErrors).length) {
      setFormError(t("fixError"));
      throw new Error("invalid");
    }

    await new Promise((r) => setTimeout(r, 900));
    sessionStorage.setItem("stallio_verification_email", form.email.trim());
    router.push(routes.verifyEmail);
  }

  const storePreview = form.username.trim()
    ? `stallio.shop/${form.username.trim()}`
    : "stallio.shop/you";

  return (
    <AuthFormCard compact>
      <div className="mb-4 flex items-center justify-center gap-2" aria-hidden>
        {[0, 1].map((index) => (
          <div key={index} className="flex items-center gap-2">
            <span
              className={cn(
                "inline-flex h-7 min-w-7 items-center justify-center rounded-full px-2 text-[11px] font-medium tracking-[0.12em] uppercase transition-[background-color,color,transform] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
                step === index
                  ? "bg-brand text-brand-foreground scale-105"
                  : step > index
                    ? "bg-brand/15 text-brand"
                    : "bg-muted text-muted-foreground",
              )}
            >
              {index + 1}
            </span>
            <span
              className={cn(
                "text-[11px] font-medium tracking-[0.14em] uppercase",
                step === index ? "text-foreground" : "text-muted-foreground",
              )}
            >
              {index === 0 ? t("stepAccount") : t("stepShop")}
            </span>
            {index === 0 ? (
              <span className="bg-border mx-1 h-px w-6 sm:w-10" />
            ) : null}
          </div>
        ))}
      </div>

      <form
        className="space-y-3.5"
        onSubmit={(e) => e.preventDefault()}
        noValidate
      >
        {formError ? <AuthAlert variant="error">{formError}</AuthAlert> : null}
        {success ? <AuthAlert variant="success">{success}</AuthAlert> : null}

        <div className="relative min-h-[17.5rem] overflow-hidden">
          <AnimatePresence mode="wait" initial={false}>
            {step === 0 ? (
              <motion.div
                key="account"
                className="space-y-3.5"
                initial={reduce ? false : { opacity: 0, x: -18 }}
                animate={{ opacity: 1, x: 0 }}
                exit={reduce ? undefined : { opacity: 0, x: 18 }}
                transition={{ duration: 0.45, ease: motionEase }}
              >
                <AuthField
                  id="signup-email"
                  label={t("email")}
                  required
                  className="space-y-1.5"
                  error={touched.email ? errors.email : undefined}
                >
                  <Input
                    id="signup-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder={t("emailPlaceholder")}
                    value={form.email}
                    onChange={(e) => setField("email", e.target.value)}
                    onBlur={() => {
                      setTouched((prev) => ({ ...prev, email: true }));
                      setErrors(validate());
                    }}
                    aria-invalid={
                      Boolean(touched.email && errors.email) || undefined
                    }
                    className={compactInputClass}
                  />
                </AuthField>

                <AuthPasswordField
                  id="signup-password"
                  label={t("password")}
                  name="password"
                  required
                  className="space-y-1.5"
                  inputClassName="h-11"
                  value={form.password}
                  placeholder={t("passwordPlaceholder")}
                  autoComplete="new-password"
                  error={touched.password ? errors.password : undefined}
                  onChange={(value) => setField("password", value)}
                  onBlur={() => {
                    setTouched((prev) => ({ ...prev, password: true }));
                    setErrors(validate());
                  }}
                />

                <AuthPasswordField
                  id="signup-confirm"
                  label={t("confirmPassword")}
                  name="confirmPassword"
                  required
                  className="space-y-1.5"
                  inputClassName="h-11"
                  value={form.confirmPassword}
                  placeholder={t("confirmPlaceholder")}
                  autoComplete="new-password"
                  error={
                    touched.confirmPassword
                      ? errors.confirmPassword
                      : undefined
                  }
                  onChange={(value) => setField("confirmPassword", value)}
                  onBlur={() => {
                    setTouched((prev) => ({ ...prev, confirmPassword: true }));
                    setErrors(validate());
                  }}
                />
              </motion.div>
            ) : (
              <motion.div
                key="shop"
                className="space-y-3.5"
                initial={reduce ? false : { opacity: 0, x: 18 }}
                animate={{ opacity: 1, x: 0 }}
                exit={reduce ? undefined : { opacity: 0, x: -18 }}
                transition={{ duration: 0.45, ease: motionEase }}
              >
                <div className="grid gap-3.5 sm:grid-cols-2">
                  <AuthField
                    id="signup-shop"
                    label={t("shopName")}
                    required
                    className="space-y-1.5"
                    error={touched.shopName ? errors.shopName : undefined}
                  >
                    <Input
                      id="signup-shop"
                      name="shopName"
                      type="text"
                      autoComplete="organization"
                      placeholder={t("shopNamePlaceholder")}
                      value={form.shopName}
                      onChange={(e) => setField("shopName", e.target.value)}
                      onBlur={() => {
                        setTouched((prev) => ({ ...prev, shopName: true }));
                        setErrors(validate());
                      }}
                      aria-invalid={
                        Boolean(touched.shopName && errors.shopName) ||
                        undefined
                      }
                      className={compactInputClass}
                    />
                  </AuthField>

                  <AuthField
                    id="signup-username"
                    label={t("storeUrl")}
                    required
                    className="space-y-1.5"
                    error={touched.username ? errors.username : undefined}
                    success={
                      touched.username && !errors.username && form.username
                        ? storePreview
                        : undefined
                    }
                  >
                    <Input
                      id="signup-username"
                      name="username"
                      type="text"
                      autoComplete="username"
                      placeholder={t("usernamePlaceholder")}
                      value={form.username}
                      onChange={(e) => setField("username", e.target.value)}
                      onBlur={() => {
                        setTouched((prev) => ({ ...prev, username: true }));
                        setErrors(validate());
                      }}
                      aria-invalid={
                        Boolean(touched.username && errors.username) ||
                        undefined
                      }
                      className={compactInputClass}
                    />
                  </AuthField>
                </div>

                <div className="grid gap-3.5 sm:grid-cols-2">
                  <AuthField
                    id="signup-country"
                    label={t("country")}
                    required
                    className="space-y-1.5"
                    error={touched.country ? errors.country : undefined}
                  >
                    <select
                      id="signup-country"
                      name="country"
                      value={form.country}
                      onChange={(e) => setField("country", e.target.value)}
                      onBlur={() => {
                        setTouched((prev) => ({ ...prev, country: true }));
                        setErrors(validate());
                      }}
                      aria-invalid={
                        Boolean(touched.country && errors.country) || undefined
                      }
                      className={selectClass}
                    >
                      <option value="">Select country</option>
                      {countries.map((c) => (
                        <option key={c.value} value={c.value}>
                          {c.label}
                        </option>
                      ))}
                    </select>
                  </AuthField>

                  <AuthField
                    id="signup-currency"
                    label={t("currency")}
                    required
                    className="space-y-1.5"
                    error={touched.currency ? errors.currency : undefined}
                  >
                    <select
                      id="signup-currency"
                      name="currency"
                      value={form.currency}
                      onChange={(e) => setField("currency", e.target.value)}
                      onBlur={() => {
                        setTouched((prev) => ({ ...prev, currency: true }));
                        setErrors(validate());
                      }}
                      aria-invalid={
                        Boolean(touched.currency && errors.currency) ||
                        undefined
                      }
                      className={selectClass}
                    >
                      <option value="">Select currency</option>
                      {currencies.map((c) => (
                        <option key={c.value} value={c.value}>
                          {c.label}
                        </option>
                      ))}
                    </select>
                  </AuthField>
                </div>

                <AuthField
                  id="signup-logo"
                  label={t("logo")}
                  className="space-y-1.5"
                  hint={logoName ? `Selected: ${logoName}` : t("optional")}
                >
                  <label
                    htmlFor="signup-logo"
                    className="border-border/70 bg-background hover:bg-muted/40 text-foreground flex h-11 cursor-pointer items-center justify-between rounded-2xl border px-4 text-sm transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
                  >
                    <span className="text-muted-foreground truncate">
                      {logoName ?? t("chooseLogo")}
                    </span>
                    <span className="text-brand shrink-0 text-xs font-medium tracking-[0.14em] uppercase">
                      Upload
                    </span>
                    <input
                      id="signup-logo"
                      name="logo"
                      type="file"
                      accept="image/png,image/jpeg,image/webp"
                      className="sr-only"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        setLogoName(file ? file.name : null);
                      }}
                    />
                  </label>
                </AuthField>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {step === 0 ? (
          <button
            type="button"
            onClick={goNext}
            className="bg-brand text-brand-foreground hover:ring-brand inline-flex h-11 w-full items-center justify-center rounded-full px-6 text-sm font-medium ring-offset-2 transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:ring-2 active:scale-[0.98] dark:ring-offset-black"
          >
            {t("continue")}
          </button>
        ) : (
          <div className="grid gap-2.5 sm:grid-cols-[auto_1fr]">
            <button
              type="button"
              onClick={() => {
                setFormError(null);
                setStep(0);
              }}
              className="border-border/70 bg-background text-foreground hover:bg-muted/50 inline-flex h-11 items-center justify-center rounded-full border px-5 text-sm font-medium transition-[transform,background-color] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]"
            >
              {t("back")}
            </button>
            <AuthSubmitButton onAction={createShop} className="h-11">
              {t("submit")}
            </AuthSubmitButton>
          </div>
        )}
      </form>

      <p className="text-muted-foreground mt-4 text-center text-sm leading-6">
        {t("haveAccount")}{" "}
        <Link
          href={routes.login}
          className="text-foreground hover:text-brand font-medium underline-offset-4 transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:underline"
        >
          {t("signIn")}
        </Link>
      </p>
      <p className="text-muted-foreground mt-2 text-center text-xs leading-5">
        {t("legalBefore", { name: siteConfig.name })}{" "}
        <Link href={routes.terms} className="underline-offset-2 hover:underline">
          {tFooter("terms")}
        </Link>{" "}
        {t("legalMid")}{" "}
        <Link
          href={routes.privacy}
          className="underline-offset-2 hover:underline"
        >
          {tFooter("privacy")}
        </Link>
        {t("legalAfter", { name: siteConfig.name })}
      </p>
    </AuthFormCard>
  );
}
