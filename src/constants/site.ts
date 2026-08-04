import { routes } from "./routes";

export const siteConfig = {
  name: "Stallio",
  tagline: "your online shop, one link away",
  description:
    "Your catalog on stallio.shop/you. No domain, hosting, or payment gateway to set up. Buyers order; you get a dashboard and PDF invoices.",
  heroSubtext:
    "Your catalog at stallio.shop/you. Buyers order. You get invoices and a dashboard.",
  url: "https://www.stallio.shop",
  email: "contact@stallio.shop",
} as const;

export const mainNav = [
  { label: "Home", href: routes.home },
  { label: "About", href: routes.about },
  { label: "How It Works", href: routes.howItWorks },
  { label: "Features", href: routes.features },
  { label: "Pricing", href: routes.pricing },
  { label: "Contact", href: routes.contact },
] as const;

export const footerLinks = {
  product: [
    { label: "Home", href: routes.home },
    { label: "Features", href: routes.features },
    { label: "Pricing", href: routes.pricing },
    { label: "How It Works", href: routes.howItWorks },
  ],
  company: [
    { label: "About", href: routes.about },
    { label: "Contact", href: routes.contact },
    { label: "Log In", href: routes.login },
  ],
  legal: [
    { label: "Privacy Policy", href: routes.privacy },
    { label: "Terms of Service", href: routes.terms },
    { label: "Refund Policy", href: routes.refund },
  ],
} as const;
