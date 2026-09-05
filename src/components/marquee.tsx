"use client";

import { motion, useReducedMotion } from "framer-motion";

type MarqueeProps = {
  items: string[];
  speed?: number;
  className?: string;
};

export function Marquee({ items, speed = 30, className }: MarqueeProps) {
  const reduceMotion = useReducedMotion();
  const repeatedItems = [...items, ...items];

  return (
    <div className="overflow-hidden" aria-label={items.join(", ")}>
      <motion.div
        className={`flex w-max items-center gap-8 whitespace-nowrap ${className ?? ""}`}
        initial={{ x: 0 }}
        animate={reduceMotion ? { x: 0 } : { x: "-50%" }}
        transition={
          reduceMotion
            ? { duration: 0 }
            : { duration: Math.max(speed, 1), repeat: Infinity, ease: "linear" }
        }
      >
        {repeatedItems.map((item, index) => (
          <span key={`${item}-${index}`} aria-hidden={index >= items.length}>
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}