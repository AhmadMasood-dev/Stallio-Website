"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";
import { motionEase } from "@/lib/motion";

const items = [
  {
    title: "Power Bowl",
    image: "/assets/images/product-1.jpg",
    className: "absolute top-6 left-[8%] rotate-[-8deg]",
  },
  {
    title: "Pulse Watch",
    image: "/assets/images/product-2.jpg",
    className: "absolute top-10 right-[4%] rotate-[7deg]",
  },
  {
    title: "Studio Pro",
    image: "/assets/images/product-3.jpg",
    className: "absolute bottom-8 left-[14%] rotate-[4deg]",
  },
  {
    title: "Sprint Knit",
    image: "/assets/images/product-4.jpg",
    className: "absolute top-[28%] left-[28%] rotate-[-2deg]",
  },
] as const;

export function HomeHeroVisual() {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className="relative mx-auto w-full max-w-[560px]"
      initial={reduce ? false : { opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.75,
        delay: reduce ? 0 : 0.1,
        ease: motionEase,
      }}
    >
      <DraggableCardContainer className="relative mx-auto flex min-h-[28rem] w-full items-center justify-center overflow-visible sm:min-h-[32rem]">
        {items.map((item) => (
          <DraggableCardBody
            key={item.title}
            drag={!reduce}
            className={`h-64 w-56 bg-white p-3 dark:bg-neutral-950 sm:h-72 sm:w-64 ${item.className}`}
          >
            <div className="relative h-[78%] w-full overflow-hidden rounded-sm">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="pointer-events-none object-cover"
                sizes="260px"
                priority
              />
            </div>
            <h3 className="text-foreground mt-3 text-center text-sm font-semibold tracking-tight sm:text-base">
              {item.title}
            </h3>
          </DraggableCardBody>
        ))}
      </DraggableCardContainer>
    </motion.div>
  );
}
