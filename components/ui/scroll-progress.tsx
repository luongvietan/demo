"use client";

import { useScroll, motion, useSpring } from "framer-motion";
import React, { useRef } from "react";

export const ScrollProgress = ({
  color = "from-emerald-500 to-cyan-400",
  height = 1,
  positionClass = "fixed top-0 left-0 right-0 z-50",
  containerClass = "",
  barClass = "",
  position = "top",
}: {
  color?: string;
  height?: number;
  positionClass?: string;
  containerClass?: string;
  barClass?: string;
  position?: "top" | "bottom";
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div
      ref={ref}
      className={`${positionClass} ${
        position === "bottom" ? "bottom-0" : "top-0"
      } ${containerClass}`}
    >
      <motion.div
        className={`h-[${height}px] bg-gradient-to-r ${color} origin-left ${barClass}`}
        style={{ scaleX }}
      />
    </div>
  );
};
