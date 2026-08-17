export const countries = [
  { value: "PK", label: "Pakistan" },
  { value: "AE", label: "United Arab Emirates" },
  { value: "SA", label: "Saudi Arabia" },
  { value: "US", label: "United States" },
  { value: "GB", label: "United Kingdom" },
  { value: "CA", label: "Canada" },
  { value: "AU", label: "Australia" },
  { value: "IN", label: "India" },
  { value: "EG", label: "Egypt" },
  { value: "TR", label: "Turkey" },
  { value: "MY", label: "Malaysia" },
  { value: "SG", label: "Singapore" },
  { value: "DE", label: "Germany" },
  { value: "FR", label: "France" },
  { value: "ES", label: "Spain" },
  { value: "BR", label: "Brazil" },
  { value: "MX", label: "Mexico" },
  { value: "NG", label: "Nigeria" },
  { value: "KE", label: "Kenya" },
  { value: "ZA", label: "South Africa" },
] as const;

export const currencies = [
  { value: "PKR", label: "PKR, Pakistani Rupee" },
  { value: "AED", label: "AED, UAE Dirham" },
  { value: "SAR", label: "SAR, Saudi Riyal" },
  { value: "USD", label: "USD, US Dollar" },
  { value: "GBP", label: "GBP, British Pound" },
  { value: "EUR", label: "EUR, Euro" },
  { value: "CAD", label: "CAD, Canadian Dollar" },
  { value: "AUD", label: "AUD, Australian Dollar" },
  { value: "INR", label: "INR, Indian Rupee" },
  { value: "EGP", label: "EGP, Egyptian Pound" },
  { value: "TRY", label: "TRY, Turkish Lira" },
  { value: "MYR", label: "MYR, Malaysian Ringgit" },
  { value: "SGD", label: "SGD, Singapore Dollar" },
  { value: "BRL", label: "BRL, Brazilian Real" },
  { value: "MXN", label: "MXN, Mexican Peso" },
  { value: "NGN", label: "NGN, Nigerian Naira" },
  { value: "KES", label: "KES, Kenyan Shilling" },
  { value: "ZAR", label: "ZAR, South African Rand" },
] as const;

export function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export function isValidUsername(value: string) {
  return /^[a-zA-Z0-9_-]+$/.test(value.trim()) && value.trim().length >= 3;
}

export function isValidPassword(value: string) {
  return value.length >= 8;
}
