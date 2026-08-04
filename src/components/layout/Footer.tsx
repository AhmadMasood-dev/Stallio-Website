import Image from "next/image";
import Link from "next/link";

import { routes } from "@/constants/routes";
import { footerLinks, siteConfig } from "@/constants/site";

export function Footer() {
  return (
    <footer className="border-border bg-card text-card-foreground mt-auto border-t">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-16 md:grid-cols-[1.6fr_1fr_1fr]">
        <div className="max-w-sm space-y-5">
          <Link
            href={routes.home}
            className="flex items-center gap-2.5 font-semibold tracking-tight"
          >
            <Image
              src="/assets/images/logo.png"
              alt=""
              width={32}
              height={34}
              className="h-8 w-auto"
            />
            <span className="text-lg">{siteConfig.name}</span>
          </Link>
          <p className="text-muted-foreground text-sm leading-7">
            {siteConfig.name}, {siteConfig.tagline}. Share one link. Sell like a
            real shop.
          </p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-muted-foreground hover:text-foreground text-sm transition-colors"
          >
            {siteConfig.email}
          </a>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold">Product</p>
          <ul className="space-y-2.5">
            {footerLinks.product.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold">Company</p>
          <ul className="space-y-2.5">
            {footerLinks.company.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-border border-t">
        <div className="text-muted-foreground mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-5 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {footerLinks.legal.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
