"use client";

import React, { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export interface AnimatedBeamProps {
  className?: string;
  children?: React.ReactNode;
  beamColor?: string;
  beamOpacity?: number;
  beamClassName?: string;
  containerClassName?: string;
  size?: number;
}

export const AnimatedBeam = ({
  className,
  children,
  beamColor = "#10b981",
  beamOpacity = 0.4,
  beamClassName,
  containerClassName,
  size = 100,
}: AnimatedBeamProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [cursorPosition, setCursorPosition] = useState<{
    x: number;
    y: number;
  }>({
    x: 0,
    y: 0,
  });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setCursorPosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden", containerClassName)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={cn(
          "pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300",
          isHovered ? "opacity-100" : "opacity-0",
          beamClassName
        )}
        style={{
          background: `radial-gradient(${size}px circle at ${
            cursorPosition.x
          }px ${cursorPosition.y}px, ${beamColor} ${beamOpacity}, transparent ${
            beamOpacity * 2
          })`,
        }}
      />
      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
};
