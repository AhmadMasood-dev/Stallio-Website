"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

import { AuthFormCard } from "@/components/auth/AuthFormCard";
import { routes } from "@/constants/routes";
import { siteConfig } from "@/constants/site";
import { cn } from "@/lib/utils";

const CODE_LENGTH = 6;
const RESEND_COOLDOWN = 30;

export default function VerificationCodeForm() {
  const [email, setEmail] = useState("your email");

  useEffect(() => {
    const storedEmail = sessionStorage.getItem("stallio_verification_email");
    if (storedEmail) setEmail(storedEmail);
  }, []);

  const [code, setCode] = useState<string[]>(Array(CODE_LENGTH).fill(""));
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resendCountdown, setResendCountdown] = useState(RESEND_COOLDOWN);
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setResendCountdown((current) => {
        if (current <= 1) {
          clearInterval(timer);
          return 0;
        }
        return current - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function updateCode(index: number, value: string) {
    const sanitized = value.replace(/\D/g, "").slice(-1);

    setError(null);
    setCode((prev) => {
      const next = [...prev];
      next[index] = sanitized;
      return next;
    });

    if (sanitized && index < CODE_LENGTH - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  }

  function handleKeyDown(
    index: number,
    event: React.KeyboardEvent<HTMLInputElement>,
  ) {
    if (event.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }

    if (event.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }

    if (event.key === "ArrowRight" && index < CODE_LENGTH - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  }

  function handlePaste(value: string) {
    const digits = value.replace(/\D/g, "").slice(0, CODE_LENGTH).split("");
    if (!digits.length) return;

    const nextCode = Array(CODE_LENGTH).fill("");
    digits.forEach((digit, index) => {
      if (index < CODE_LENGTH) nextCode[index] = digit;
    });

    setCode(nextCode);
    setError(null);

    const nextIndex = Math.min(digits.length, CODE_LENGTH - 1);
    inputRefs.current[nextIndex]?.focus();
  }

  async function handleSubmit() {
    const verificationCode = code.join("");

    if (verificationCode.length !== CODE_LENGTH) {
      setError("Please enter the full 6-digit code.");
      return;
    }

    setIsSubmitting(true);
    setError(null);

    await new Promise((resolve) => setTimeout(resolve, 900));

    if (verificationCode !== "123456") {
      setError("That code is incorrect or expired. Please try again.");
      setIsSubmitting(false);
      return;
    }

    window.location.href = routes.home;
  }

  async function handleResend() {
    if (resendCountdown > 0) return;

    setResendCountdown(RESEND_COOLDOWN);
    setError(null);
    setCode(Array(CODE_LENGTH).fill(""));
    inputRefs.current[0]?.focus();

    await new Promise((resolve) => setTimeout(resolve, 500));
  }

  return (
    <div className="mx-auto w-full max-w-104 px-1 sm:px-0">
      <div className="relative overflow-hidden rounded-[2rem] border border-violet-500/20 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.18),transparent_35%),rgba(255,255,255,0.84)] p-px shadow-[0_20px_60px_rgba(109,94,240,0.18)] backdrop-blur-sm dark:bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.16),transparent_35%),rgba(12,12,18,0.88)] dark:shadow-[0_30px_90px_rgba(76,29,149,0.28)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(255,255,255,0.45),transparent_30%),radial-gradient(circle_at_90%_0%,rgba(88,70,234,0.14),transparent_32%)] dark:bg-[radial-gradient(circle_at_15%_15%,rgba(255,255,255,0.12),transparent_30%),radial-gradient(circle_at_90%_0%,rgba(88,70,234,0.22),transparent_32%)]" />

        <AuthFormCard compact className="relative border-0 bg-transparent shadow-none ring-0">
          <div className="space-y-4 sm:space-y-5">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/5 px-3 py-1.5 text-[10px] font-semibold tracking-[0.24em] text-violet-700 uppercase shadow-inner shadow-violet-500/10 dark:border-white/10 dark:bg-white/5 dark:text-violet-300">
                Email verification
              </div>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-balance text-slate-900 sm:text-3xl dark:text-white">
                Verify your email
              </h2>
              <div className="mt-4 inline-flex max-w-full items-center justify-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700 shadow-inner shadow-violet-500/10 sm:text-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-100">
                <span className="inline-block h-2 w-2 shrink-0 rounded-full bg-emerald-500 shadow-[0_0_18px_rgba(16,185,129,0.9)]" />
                <span className="max-w-[16rem] truncate sm:max-w-[18rem]">{email}</span>
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <div className="mt-1 text-center text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6 dark:text-slate-300">
                Enter the 6-digit code sent to your inbox. It expires in 15 minutes.
              </div>

              <div className="rounded-[1.5rem] border border-slate-200 bg-slate-100/80 px-2.5 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] sm:px-3 dark:border-white/10 dark:bg-[#171922]/90 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                <div className="grid grid-cols-6 gap-2 sm:gap-2.5">
                  {code.map((digit, index) => (
                    <input
                      key={index}
                      ref={(element) => {
                        inputRefs.current[index] = element;
                      }}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={digit}
                      onChange={(event) => updateCode(index, event.target.value)}
                      onKeyDown={(event) => handleKeyDown(index, event)}
                      onPaste={(event) => {
                        event.preventDefault();
                        handlePaste(event.clipboardData.getData("text"));
                      }}
                      aria-label={`Verification digit ${index + 1}`}
                      className={cn(
                        "h-11 w-full rounded-xl border bg-white/80 text-center text-base font-semibold text-slate-900 outline-none transition-all duration-300 sm:h-12 sm:text-lg",
                        digit
                          ? "border-violet-400 bg-violet-50 text-violet-700 shadow-[0_0_0_1px_rgba(139,92,246,0.2)] dark:border-violet-400/70 dark:bg-violet-500/10 dark:text-violet-200 dark:shadow-[0_0_0_1px_rgba(167,139,250,0.2)]"
                          : "border-slate-200 focus:border-violet-400 focus:bg-violet-50 dark:border-white/10 dark:bg-white/3 dark:text-white dark:focus:border-violet-400/80 dark:focus:bg-violet-500/5",
                      )}
                    />
                  ))}
                </div>
              </div>

              {error ? (
                <p className="text-sm text-red-600 dark:text-red-300" role="alert">
                  {error}
                </p>
              ) : null}

              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="inline-flex h-12 w-full items-center justify-center rounded-full bg-linear-to-r from-[#5b5ae9] via-[#6d5ef0] to-[#8a4af4] px-6 text-sm font-medium text-white shadow-[0_14px_35px_rgba(109,94,240,0.45)] transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_18px_42px_rgba(109,94,240,0.5)] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? "Verifying..." : "Verify and continue"}
              </button>

              <div className="flex flex-col gap-3 pb-1 pt-1 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between sm:text-sm dark:text-slate-300">
                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-2 transition-colors duration-300 hover:text-slate-900 disabled:cursor-not-allowed disabled:opacity-50 dark:hover:text-white"
                  onClick={() => window.history.back()}
                >
                  <span aria-hidden>←</span>
                  Back to sign in
                </button>

                <button
                  type="button"
                  className="font-medium text-violet-700 underline-offset-4 transition-colors duration-300 hover:text-violet-900 hover:underline disabled:cursor-not-allowed disabled:opacity-50 dark:text-violet-200 dark:hover:text-white"
                  onClick={handleResend}
                  disabled={resendCountdown > 0}
                >
                  {resendCountdown > 0
                    ? `Send a new code (${resendCountdown}s)`
                    : "Send a new code"}
                </button>
              </div>
            </div>
          </div>

          <p className="mt-5 text-center text-[11px] leading-5 text-slate-500 sm:text-xs dark:text-slate-400">
            By continuing you agree to {siteConfig.name}&apos;s{" "}
            <Link href={routes.terms} className="underline-offset-2 hover:text-slate-800 hover:underline dark:hover:text-slate-200">
              Terms
            </Link>{" "}
            and{" "}
            <Link href={routes.privacy} className="underline-offset-2 hover:text-slate-800 hover:underline dark:hover:text-slate-200">
              Privacy Policy
            </Link>
            .
          </p>
        </AuthFormCard>
      </div>
    </div>
  );
}
