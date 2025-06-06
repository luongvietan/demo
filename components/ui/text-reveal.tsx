"use client";

import { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface TextRevealProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  delay?: number;
}

export function TextReveal({
  children,
  className = "",
  threshold = 0.5,
  delay = 0,
}: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, threshold, 1], [0, 1, 1]);

  const y = useTransform(scrollYProgress, [0, threshold, 1], [20, 0, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
