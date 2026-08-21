"use client";

import { useId, useState } from "react";
import { useTranslations } from "next-intl";
import { IconEye, IconEyeOff } from "@tabler/icons-react";

import { AuthField } from "@/components/auth/AuthField";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const authInputClass =
  "h-12 rounded-2xl border-border/70 bg-background px-4 text-sm shadow-[inset_0_1px_1px_rgba(255,255,255,0.35)] transition-[border-color,box-shadow,transform] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] focus-visible:ring-brand/25";

type AuthPasswordFieldProps = {
  id?: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  placeholder?: string;
  required?: boolean;
  error?: string;
  autoComplete?: string;
  name?: string;
  className?: string;
  inputClassName?: string;
};

export function AuthPasswordField({
  id: idProp,
  label,
  value,
  onChange,
  onBlur,
  placeholder,
  required,
  error,
  autoComplete = "current-password",
  name = "password",
  className,
  inputClassName,
}: AuthPasswordFieldProps) {
  const reactId = useId();
  const id = idProp ?? reactId;
  const [visible, setVisible] = useState(false);
  const t = useTranslations("auth.password");

  return (
    <AuthField
      id={id}
      label={label}
      required={required}
      error={error}
      className={className}
    >
      <div className="relative">
        <Input
          id={id}
          name={name}
          type={visible ? "text" : "password"}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
          placeholder={placeholder}
          autoComplete={autoComplete}
          aria-invalid={Boolean(error) || undefined}
          aria-describedby={error ? `${id}-error` : undefined}
          className={cn(authInputClass, "pr-12", inputClassName)}
        />
        <button
          type="button"
          onClick={() => setVisible((v) => !v)}
          className="text-muted-foreground hover:text-foreground absolute top-1/2 right-3 inline-flex size-8 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
          aria-label={visible ? t("hide") : t("show")}
        >
          {visible ? (
            <IconEyeOff className="size-4" stroke={1.5} />
          ) : (
            <IconEye className="size-4" stroke={1.5} />
          )}
        </button>
      </div>
    </AuthField>
  );
}

export { authInputClass };
