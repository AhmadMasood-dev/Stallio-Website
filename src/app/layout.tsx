import type { ReactNode } from "react";

type RootLayoutProps = {
  children: ReactNode;
};

/** Pass-through: html/body live in `[locale]/layout.tsx`. */
export default function RootLayout({ children }: RootLayoutProps) {
  return children;
}
