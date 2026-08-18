"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { motion, useAnimate } from "motion/react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
}

export const StatefulButton = ({ className, children, ...props }: ButtonProps) => {
  const [scope, animate] = useAnimate();

  const safeAnimate = async (
    selector: string,
    keyframes: Record<string, string | number>,
    options?: { duration?: number; delay?: number },
  ) => {
    if (!scope.current) return;

    try {
      await animate(selector, keyframes, options);
    } catch {
      // Ignore animation failures when the target nodes are not mounted.
    }
  };

  const animateLoading = async () => {
    await safeAnimate(
      ".loader",
      {
        width: "20px",
        scale: 1,
        display: "block",
      },
      {
        duration: 0.2,
      },
    );
  };

  const animateSuccess = async () => {
    await safeAnimate(
      ".loader",
      {
        width: "0px",
        scale: 0,
        display: "none",
      },
      {
        duration: 0.2,
      },
    );
    await safeAnimate(
      ".check",
      {
        width: "20px",
        scale: 1,
        display: "block",
      },
      {
        duration: 0.2,
      },
    );

    await safeAnimate(
      ".check",
      {
        width: "0px",
        scale: 0,
        display: "none",
      },
      {
        delay: 2,
        duration: 0.2,
      },
    );
  };

  const resetLoader = async () => {
    await safeAnimate(
      ".loader",
      {
        width: "0px",
        scale: 0,
        display: "none",
      },
      {
        duration: 0.15,
      },
    );
  };

  const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    await animateLoading();
    try {
      await props.onClick?.(event);
      await animateSuccess();
    } catch {
      await resetLoader();
    }
  };

  const {
    onClick: _onClick,
    onDrag: _onDrag,
    onDragStart: _onDragStart,
    onDragEnd: _onDragEnd,
    onAnimationStart: _onAnimationStart,
    onAnimationEnd: _onAnimationEnd,
    ...buttonProps
  } = props;

  void _onClick;
  void _onDrag;
  void _onDragStart;
  void _onDragEnd;
  void _onAnimationStart;
  void _onAnimationEnd;

  return (
    <motion.button
      layout
      ref={scope}
      className={cn(
        "bg-brand hover:ring-brand flex h-12 min-w-[120px] w-full cursor-pointer items-center justify-center gap-2 rounded-full px-6 font-medium text-white ring-offset-2 transition duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:ring-2 active:scale-[0.98] dark:ring-offset-black disabled:pointer-events-none disabled:opacity-50",
        className,
      )}
      {...buttonProps}
      onClick={handleClick}
    >
      <motion.div layout className="flex items-center gap-2">
        <Loader />
        <CheckIcon />
        <motion.span layout>{children}</motion.span>
      </motion.div>
    </motion.button>
  );
};

/** @deprecated Use StatefulButton */
export const Button = StatefulButton;

const Loader = () => {
  return (
    <motion.svg
      animate={{
        rotate: [0, 360],
      }}
      initial={{
        scale: 0,
        width: 0,
        display: "none",
      }}
      style={{
        scale: 0.5,
        display: "none",
      }}
      transition={{
        duration: 0.3,
        repeat: Infinity,
        ease: "linear",
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="loader text-white"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 3a9 9 0 1 0 9 9" />
    </motion.svg>
  );
};

const CheckIcon = () => {
  return (
    <motion.svg
      initial={{
        scale: 0,
        width: 0,
        display: "none",
      }}
      style={{
        scale: 0.5,
        display: "none",
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="check text-white"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
      <path d="M9 12l2 2l4 -4" />
    </motion.svg>
  );
};
