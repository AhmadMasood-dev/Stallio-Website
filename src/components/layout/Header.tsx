"use client";

import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "next-intl";

import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { ThemeToggle } from "@/components/theme";
import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  Navbar,
  NavbarButton,
  NavbarLogo,
  NavBody,
  NavItems,
} from "@/components/ui/resizable-navbar";
import { routes } from "@/constants/routes";
import { siteConfig } from "@/constants/site";
import { Link } from "@/i18n/navigation";

export function Header() {
  const tNav = useTranslations("nav");
  const tCommon = useTranslations("common");
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: tNav("home"), link: routes.home },
    { name: tNav("about"), link: routes.about },
    { name: tNav("howItWorks"), link: routes.howItWorks },
    { name: tNav("features"), link: routes.features },
    { name: tNav("pricing"), link: routes.pricing },
    { name: tNav("contact"), link: routes.contact },
  ];

  return (
    <Navbar className="pt-2">
      <NavBody>
        <NavbarLogo href={routes.home}>
          <Image
            src="/assets/images/logo.png"
            alt=""
            width={30}
            height={32}
            className="h-8 w-auto"
            priority
          />
          <span className="font-logo text-foreground text-[1.65rem] leading-none tracking-normal">
            {siteConfig.name}
          </span>
        </NavbarLogo>

        <NavItems items={navItems} />

        <div className="relative z-20 flex flex-wrap items-center justify-end gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
          <NavbarButton href={routes.login} variant="secondary">
            {tCommon("logIn")}
          </NavbarButton>
          <NavbarButton href={routes.signup} variant="primary">
            {tCommon("startFree")}
          </NavbarButton>
        </div>
      </NavBody>

      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo href={routes.home}>
            <Image
              src="/assets/images/logo.png"
              alt=""
              width={28}
              height={30}
              className="h-7 w-auto"
              priority
            />
            <span className="font-logo text-foreground text-[1.5rem] leading-none tracking-normal">
              {siteConfig.name}
            </span>
          </NavbarLogo>

          <div className="flex items-center gap-2 pr-2">
            <LanguageSwitcher />
            <ThemeToggle />
            <MobileNavToggle
              isOpen={isOpen}
              onClick={() => setIsOpen((open) => !open)}
            />
          </div>
        </MobileNavHeader>

        <MobileNavMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
          {navItems.map((item) => (
            <Link
              key={item.link}
              href={item.link}
              onClick={() => setIsOpen(false)}
              className="text-foreground relative w-full px-1 py-2.5 text-sm font-medium"
            >
              {item.name}
            </Link>
          ))}
          <div className="flex w-full flex-col gap-3 pt-2">
            <NavbarButton
              href={routes.login}
              variant="secondary"
              className="w-full"
              onClick={() => setIsOpen(false)}
            >
              {tCommon("logIn")}
            </NavbarButton>
            <NavbarButton
              href={routes.signup}
              variant="primary"
              className="w-full"
              onClick={() => setIsOpen(false)}
            >
              {tCommon("startFree")}
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
