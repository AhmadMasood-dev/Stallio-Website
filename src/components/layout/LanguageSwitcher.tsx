"use client";

import { useLocale, useTranslations } from "next-intl";

import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, type AppLocale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ className }: { className?: string }) {
  const t = useTranslations("common");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  function switchLocale(next: AppLocale) {
    if (next === locale) return;
    router.replace(pathname, { locale: next });
  }

  return (
    <div
      role="group"
      aria-label={t("language")}
      className={cn(
        "border-border/70 bg-background/70 inline-flex items-center rounded-full border p-0.5 text-xs font-medium",
        className,
      )}
    >
      {routing.locales.map((code) => {
        const active = code === locale;
        const label = code.toUpperCase();
        return (
          <button
            key={code}
            type="button"
            onClick={() => switchLocale(code)}
            aria-pressed={active}
            aria-label={
              code === "en" ? t("switchToEnglish") : t("switchToSpanish")
            }
            className={cn(
              "rounded-full px-2.5 py-1 transition-colors duration-300",
              active
                ? "bg-brand text-brand-foreground"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
