"use client";

import { motion, useReducedMotion } from "motion/react";

import { BezelShell } from "@/components/ui/bezel-shell";
import { motionEase } from "@/lib/motion";
import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconBrandTwitter } from "@tabler/icons-react";

const socialLinks = [
  {
    icon: IconBrandInstagram,
    href: "https://www.instagram.com/stallio.shop",
    label: "Instagram",
  },
  {
    icon: IconBrandFacebook,
    href: "https://www.facebook.com/people/Stallio/61590381759845/?share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1D8brJcX4C%2F",
    label: "Facebook",
  },
  {
    icon: IconBrandLinkedin,
    href: "https://www.linkedin.com/company/stallio/",
    label: "LinkedIn",
  },
  {
    icon: IconBrandTwitter,
    href: "https://x.com/stallio_shop",
    label: "X",
  },
];

export function ContactInfo() {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: reduce ? 0 : 0.1 },
        },
      }}
    >
      <BezelShell className="rounded-2xl">
        <div className="space-y-8 rounded-[calc(1rem-0.375rem)] p-6 sm:p-8">
          {/* Contact Header */}
          <motion.div
            className="space-y-3"
            variants={{
              hidden: { opacity: 0, y: 18 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.65, ease: motionEase },
              },
            }}
          >
            <h3 className="text-lg font-semibold text-foreground">
              Contact Info
            </h3>
            <p className="text-sm text-muted-foreground">
              Prefer email? Use the below address. Typical reply time is a few
              hours.
            </p>
          </motion.div>

          {/* Email */}
          <motion.div
            className="flex items-center gap-4 rounded-lg border border-border/50 p-4"
            variants={{
              hidden: { opacity: 0, y: 18 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.65, ease: motionEase },
              },
            }}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10">
              <span className="text-sm font-semibold text-brand">@</span>
            </div>
            <a
              href="mailto:contact@stallio.shop"
              className="font-medium text-foreground transition-colors hover:text-brand"
            >
              contact@stallio.shop
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="space-y-3"
            variants={{
              hidden: { opacity: 0, y: 18 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.65, ease: motionEase },
              },
            }}
          >
            <p className="text-sm font-medium text-muted-foreground">SOCIAL</p>
            <div className="flex gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/50 text-muted-foreground transition-all hover:border-brand/50 hover:bg-brand/5 hover:text-brand"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </BezelShell>
    </motion.div>
  );
}
