"use client";

import type { ReactNode } from "react";

import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

type AuthFieldProps = {
  id: string;
  label: string;
  hint?: string;
  error?: string;
  success?: string;
  required?: boolean;
  trailing?: ReactNode;
  children: ReactNode;
  className?: string;
};

export function AuthField({
  id,
  label,
  hint,
  error,
  success,
  required,
  trailing,
  children,
  className,
}: AuthFieldProps) {
  const describedBy = error
    ? `${id}-error`
    : success
      ? `${id}-success`
      : hint
        ? `${id}-hint`
        : undefined;

  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex items-end justify-between gap-3">
        <Label htmlFor={id} className="text-foreground text-sm font-medium">
          {label}
          {required ? (
            <span className="text-brand ml-0.5" aria-hidden>
              *
            </span>
          ) : null}
        </Label>
        {trailing}
      </div>
      {children}
      {error ? (
        <p
          id={`${id}-error`}
          role="alert"
          className="text-destructive text-sm leading-5"
        >
          {error}
        </p>
      ) : success ? (
        <p id={`${id}-success`} className="text-sm leading-5 text-emerald-600 dark:text-emerald-400">
          {success}
        </p>
      ) : hint ? (
        <p id={`${id}-hint`} className="text-muted-foreground text-xs leading-5">
          {hint}
        </p>
      ) : null}
      {/* Expose describedBy to parent via data attr for wiring if needed */}
      <span className="sr-only" data-describedby={describedBy} />
    </div>
  );
}
