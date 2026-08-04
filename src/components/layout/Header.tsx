"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

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
import { mainNav, siteConfig } from "@/constants/site";

const navItems = mainNav.map((item) => ({
  name: item.label,
  link: item.href,
}));

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

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
          <span className="text-foreground text-base font-semibold tracking-tight">
            {siteConfig.name}
          </span>
        </NavbarLogo>

        <NavItems items={navItems} />

        <div className="relative z-20 flex items-center gap-2">
          <ThemeToggle />
          <NavbarButton href={routes.login} variant="secondary">
            Log In
          </NavbarButton>
          <NavbarButton href={routes.signup} variant="primary">
            Start Free
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
            <span className="text-foreground text-base font-semibold tracking-tight">
              {siteConfig.name}
            </span>
          </NavbarLogo>

          <div className="flex items-center gap-2 pr-2">
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
              className="text-foreground relative w-full px-1 py-2 text-sm font-medium"
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
              Log In
            </NavbarButton>
            <NavbarButton
              href={routes.signup}
              variant="primary"
              className="w-full"
              onClick={() => setIsOpen(false)}
            >
              Start Free
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
