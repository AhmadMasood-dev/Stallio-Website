"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

import { BezelShell } from "@/components/ui/bezel-shell";
import { motionEase } from "@/lib/motion";

const audiences = [
  {
    title: "Social sellers",
    copy: "Turn story taps into orders without sending another price list.",
    src: "/assets/images/audience-clothing.jpg",
    alt: "Clothing workspace with a phone open to a shop catalog",
  },
  {
    title: "Home bakers",
    copy: "A catalog buyers can browse while you finish the next batch.",
    src: "/assets/images/audience-baker.jpg",
    alt: "Baker packaging goods beside a phone storefront",
  },
  {
    title: "Makers & craft",
    copy: "Show work clearly. Take orders without drowning in DMs.",
    src: "/assets/images/audience-craft.jpg",
    alt: "Maker studio with handmade goods ready to ship",
  },
  {
    title: "Local shops",
    copy: "Put the counter online. Same payments, clearer orders.",
    src: "/assets/images/product-1.jpg",
    alt: "Fresh prepared food ready for a local shop shelf",
  },
] as const;

export function AboutFor() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden border-y border-border bg-surface dark:bg-background">
      <div className="relative mx-auto w-full max-w-6xl px-4 py-24 sm:px-6 md:py-32 md:pb-36">
        <motion.div
          className="mb-12 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between"
          initial={reduce ? false : { opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: motionEase }}
        >
          <div className="max-w-xl space-y-4">
            <span className="border-border/70 bg-background/80 text-muted-foreground inline-flex rounded-full border px-3 py-1 text-[10px] font-medium tracking-[0.2em] uppercase">
              Who it is for
            </span>
            <h2 className="text-foreground text-section-heading">
              If you already sell in conversation, you are the customer.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-[32ch] text-sm leading-6 md:pb-1 md:text-base md:leading-7">
            Stallio is not for warehouse ops teams. It is for people who ship
            from a kitchen, studio, or street-facing counter.
          </p>
        </motion.div>

        <div className="scrollbar-none -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 sm:-mx-6 sm:px-6 md:mx-0 md:grid md:grid-cols-2 md:gap-5 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-4">
          {audiences.map((item, index) => (
            <motion.article
              key={item.title}
              className="w-[78%] shrink-0 snap-center sm:w-[58%] md:w-auto md:shrink"
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: reduce ? 0 : index * 0.06,
                ease: motionEase,
              }}
            >
              <BezelShell
                className="group h-full rounded-[1.75rem]"
                innerClassName="flex h-full flex-col overflow-hidden rounded-[calc(1.75rem-0.375rem)]"
              >
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 78vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 space-y-1.5 p-5">
                    <h3 className="text-lg font-semibold tracking-tight text-white">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-6 text-white/80">
                      {item.copy}
                    </p>
                  </div>
                </div>
              </BezelShell>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
