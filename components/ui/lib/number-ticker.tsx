"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface NumberTickerProps {
  value: number;
  duration?: number;
}

export const NumberTicker = ({ value, duration = 1.5 }: NumberTickerProps) => {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrameId: number;

    const updateValue = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

      setCurrentValue(Math.floor(progress * value));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateValue);
      } else {
        setCurrentValue(value);
      }
    };

    animationFrameId = requestAnimationFrame(updateValue);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [value, duration]);

  // Convert to string to handle each digit separately
  const digits = currentValue.toString().split("");

  return (
    <span className="inline-flex">
      {digits.map((digit, index) => (
        <motion.span
          key={`${index}-${digit}`}
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
        >
          {digit}
        </motion.span>
      ))}
    </span>
  );
};
