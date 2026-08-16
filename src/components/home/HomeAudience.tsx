"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

import { motionEase } from "@/lib/motion";

export function HomeAudience() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden border-y border-border bg-surface dark:bg-background">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,color-mix(in_srgb,var(--brand)_10%,transparent),transparent_55%)] dark:bg-[radial-gradient(ellipse_at_top_left,color-mix(in_srgb,var(--brand)_18%,transparent),transparent_55%)]"
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
        <motion.div
          className="mb-10 max-w-2xl space-y-4 md:mb-14"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.65, ease: motionEase }}
        >
          <h2 className="text-foreground text-section-heading">
            Your audience already follows you. Give them a shelf.
          </h2>
          <p className="text-muted-foreground max-w-xl text-base leading-7 sm:text-lg sm:leading-8">
            Built for kitchens, studios, and counters - not for teams buried in
            enterprise dashboards.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-12 md:gap-5">
          {/* Social sellers: large left */}
          <motion.article
            className="group relative min-h-[22rem] overflow-hidden rounded-3xl md:col-span-7 md:row-span-2 md:min-h-[28rem]"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: motionEase }}
          >
            <Image
              src="/assets/images/audience-clothing.jpg"
              alt="Clothing workspace with a phone open to a shop catalog"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 58vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent dark:from-black/85 dark:via-black/35" />
            <div className="absolute inset-x-0 bottom-0 space-y-2 p-6 sm:p-8">
              <h3 className="text-2xl font-semibold tracking-tight text-white">
                Social sellers
              </h3>
              <p className="max-w-[28ch] text-sm leading-6 text-white/80 sm:text-base">
                Turn story taps into orders with one shareable link.
              </p>
            </div>
          </motion.article>

          {/* Clothing labels: top right */}
          <motion.article
            className="group relative min-h-[10.5rem] overflow-hidden rounded-3xl md:col-span-5 md:min-h-[13.5rem]"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, delay: reduce ? 0 : 0.06, ease: motionEase }}
          >
            <Image
              src="/assets/images/audience-clothing-labels.png"
              alt="Clothing label studio with garments and a phone showing the shop catalog"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 42vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent dark:from-black/85 dark:via-black/35" />
            <div className="absolute inset-x-0 bottom-0 space-y-1.5 p-6 sm:p-7">
              <h3 className="text-xl font-semibold tracking-tight text-white">
                Clothing labels
              </h3>
              <p className="max-w-[26ch] text-sm leading-6 text-white/80">
                Drop collections to bio and WhatsApp the same day.
              </p>
            </div>
          </motion.article>

          {/* Local shops: bottom right of top block */}
          <motion.article
            className="group relative min-h-[10.5rem] overflow-hidden rounded-3xl md:col-span-5 md:min-h-[13.5rem]"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, delay: reduce ? 0 : 0.12, ease: motionEase }}
          >
            <Image
              src="/assets/images/product-1.jpg"
              alt="Fresh prepared food ready for a neighborhood shop shelf"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 42vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent dark:from-black/85 dark:via-black/40" />
            <div className="absolute inset-x-0 bottom-0 space-y-1.5 p-6 sm:p-7">
              <h3 className="text-xl font-semibold tracking-tight text-white">
                Local shops
              </h3>
              <p className="max-w-[26ch] text-sm leading-6 text-white/80">
                A cleaner shelf for walk-ins who already trust you.
              </p>
            </div>
          </motion.article>

          {/* Home bakers: bottom left */}
          <motion.article
            className="group relative min-h-[16rem] overflow-hidden rounded-3xl sm:min-h-[18rem] md:col-span-6"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay: reduce ? 0 : 0.08, ease: motionEase }}
          >
            <Image
              src="/assets/images/audience-baker.jpg"
              alt="Fresh pastries beside a phone showing a product catalog"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent dark:from-black/80 dark:via-black/30" />
            <div className="absolute inset-x-0 bottom-0 space-y-1.5 p-5 sm:p-6">
              <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                Home bakers
              </h3>
              <p className="max-w-[32ch] text-sm leading-6 text-white/80 sm:text-base">
                Menus that look as good as the tray.
              </p>
            </div>
          </motion.article>

          {/* Handmade and craft: bottom right */}
          <motion.article
            className="group relative min-h-[16rem] overflow-hidden rounded-3xl sm:min-h-[18rem] md:col-span-6"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay: reduce ? 0 : 0.14, ease: motionEase }}
          >
            <Image
              src="/assets/images/audience-craft.jpg"
              alt="Handmade ceramics and textiles with a shop page on a phone"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent dark:from-black/80 dark:via-black/30" />
            <div className="absolute inset-x-0 bottom-0 space-y-1.5 p-5 sm:p-6">
              <h3 className="text-lg font-semibold tracking-tight text-white sm:text-xl">
                Handmade & craft
              </h3>
              <p className="max-w-[28ch] text-sm leading-6 text-white/80">
                Show texture, price, and stock without the DM ping-pong.
              </p>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
