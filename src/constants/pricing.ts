export type BillingCycle = "monthly" | "yearly";

export type PricingCountry = {
  code: string;
  name: string;
  currency: string;
  locale: string;
  /** Approximate local units per 1 USD. Planning only, not a live rate. */
  perUsd: number;
};

export const usdMonthly = 5;
export const usdYearly = 50;
export const yearlySaveUsd = usdMonthly * 12 - usdYearly;

export const pricingCountries: readonly PricingCountry[] = [
  {
    code: "US",
    name: "United States",
    currency: "USD",
    locale: "en-US",
    perUsd: 1,
  },
  {
    code: "PK",
    name: "Pakistan",
    currency: "PKR",
    locale: "en-PK",
    perUsd: 278,
  },
  {
    code: "AE",
    name: "United Arab Emirates",
    currency: "AED",
    locale: "en-AE",
    perUsd: 3.67,
  },
  {
    code: "SA",
    name: "Saudi Arabia",
    currency: "SAR",
    locale: "en-SA",
    perUsd: 3.75,
  },
  {
    code: "GB",
    name: "United Kingdom",
    currency: "GBP",
    locale: "en-GB",
    perUsd: 0.79,
  },
  {
    code: "CA",
    name: "Canada",
    currency: "CAD",
    locale: "en-CA",
    perUsd: 1.36,
  },
  {
    code: "AU",
    name: "Australia",
    currency: "AUD",
    locale: "en-AU",
    perUsd: 1.52,
  },
  {
    code: "IN",
    name: "India",
    currency: "INR",
    locale: "en-IN",
    perUsd: 83,
  },
  {
    code: "EG",
    name: "Egypt",
    currency: "EGP",
    locale: "en-EG",
    perUsd: 48,
  },
  {
    code: "TR",
    name: "Turkey",
    currency: "TRY",
    locale: "tr-TR",
    perUsd: 34,
  },
  {
    code: "MY",
    name: "Malaysia",
    currency: "MYR",
    locale: "en-MY",
    perUsd: 4.47,
  },
  {
    code: "SG",
    name: "Singapore",
    currency: "SGD",
    locale: "en-SG",
    perUsd: 1.34,
  },
  {
    code: "DE",
    name: "Germany",
    currency: "EUR",
    locale: "de-DE",
    perUsd: 0.92,
  },
  {
    code: "FR",
    name: "France",
    currency: "EUR",
    locale: "fr-FR",
    perUsd: 0.92,
  },
  {
    code: "ES",
    name: "Spain",
    currency: "EUR",
    locale: "es-ES",
    perUsd: 0.92,
  },
  {
    code: "BR",
    name: "Brazil",
    currency: "BRL",
    locale: "pt-BR",
    perUsd: 5.4,
  },
  {
    code: "MX",
    name: "Mexico",
    currency: "MXN",
    locale: "es-MX",
    perUsd: 18.2,
  },
  {
    code: "NG",
    name: "Nigeria",
    currency: "NGN",
    locale: "en-NG",
    perUsd: 1550,
  },
  {
    code: "KE",
    name: "Kenya",
    currency: "KES",
    locale: "en-KE",
    perUsd: 129,
  },
  {
    code: "ZA",
    name: "South Africa",
    currency: "ZAR",
    locale: "en-ZA",
    perUsd: 18.3,
  },
] as const;

export function formatUsd(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatLocal(amountUsd: number, country: PricingCountry) {
  return new Intl.NumberFormat(country.locale, {
    style: "currency",
    currency: country.currency,
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  }).format(amountUsd * country.perUsd);
}
