export const routes = {
  home: "/home",
  about: "/about",
  howItWorks: "/how-it-works",
  features: "/features",
  pricing: "/pricing",
  contact: "/contact",
  login: "/login",
  signup: "/signup",
  demo: "https://www.stallio.shop/sweet-cravings-studio",
  privacy: "/privacy",
  terms: "/terms",
  refund: "/refund-policy",
} as const;

export type AppRoute = (typeof routes)[keyof typeof routes];
