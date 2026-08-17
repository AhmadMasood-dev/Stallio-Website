"use client";

import type { ReactNode } from "react";

import { BezelShell } from "@/components/ui/bezel-shell";
import { StatefulButton } from "@/components/ui/stateful-button";
import { cn } from "@/lib/utils";

type AuthFormCardProps = {
  children: ReactNode;
  className?: string;
  compact?: boolean;
};

export function AuthFormCard({
  children,
  className,
  compact = false,
}: AuthFormCardProps) {
  return (
    <BezelShell
      className={cn("rounded-[2rem]", className)}
      innerClassName={cn(
        "rounded-[calc(2rem-0.375rem)]",
        compact ? "p-5 sm:p-6" : "p-6 sm:p-8 md:p-9",
      )}
    >
      {children}
    </BezelShell>
  );
}

type AuthSubmitButtonProps = {
  children: ReactNode;
  disabled?: boolean;
  className?: string;
  onAction: () => void | Promise<void>;
};

/** Aceternity StatefulButton with Stallio brand styling. */
export function AuthSubmitButton({
  children,
  disabled,
  className,
  onAction,
}: AuthSubmitButtonProps) {
  return (
    <StatefulButton
      type="button"
      disabled={disabled}
      className={cn(className)}
      onClick={async () => {
        await onAction();
      }}
    >
      {children}
    </StatefulButton>
  );
}

type AuthAlertProps = {
  variant: "error" | "success";
  children: ReactNode;
};

export function AuthAlert({ variant, children }: AuthAlertProps) {
  return (
    <div
      role="status"
      className={cn(
        "rounded-2xl px-4 py-3 text-sm leading-6",
        variant === "error"
          ? "bg-destructive/10 text-destructive ring-destructive/20 ring-1"
          : "bg-emerald-500/10 text-emerald-700 ring-1 ring-emerald-500/20 dark:text-emerald-300",
      )}
    >
      {children}
    </div>
  );
}
