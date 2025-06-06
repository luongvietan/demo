"use client";

import React, { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

export interface ShineBorderProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
  borderWidth?: number;
  duration?: number;
  delay?: number;
  size?: number;
  position?: { x: number; y: number } | null;
  borderRadius?: string;
  backgroundImage?: string;
  isActive?: boolean;
  shimmerColor?: string | string[];
  shineColor?: string | string[];
}

export const ShineBorder = React.forwardRef<HTMLDivElement, ShineBorderProps>(
  (
    {
      className,
      containerClassName,
      children,
      borderWidth = 1,
      duration = 3,
      delay = 0,
      size = 200,
      position = null,
      borderRadius = "0.5rem",
      backgroundImage = "radial-gradient(circle, rgba(255,255,255,0.8) 0%, transparent 70%)",
      isActive = true,
      shimmerColor = "rgba(255, 255, 255, 0.2)",
      shineColor = "rgba(255, 255, 255, 0.2)",
      ...props
    },
    ref
  ) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (!containerRef.current || !isActive) return;

      const container = containerRef.current;
      const handleMouseMove = (event: MouseEvent) => {
        if (!position) {
          const rect = container.getBoundingClientRect();
          const x = event.clientX - rect.left;
          const y = event.clientY - rect.top;
          container.style.setProperty("--x", `${x}px`);
          container.style.setProperty("--y", `${y}px`);
        }
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }, [position, isActive]);

    useEffect(() => {
      if (position && containerRef.current) {
        containerRef.current.style.setProperty("--x", `${position.x}px`);
        containerRef.current.style.setProperty("--y", `${position.y}px`);
      }
    }, [position]);

    // Xử lý shimmerColor khi là mảng
    const getShimmerGradient = () => {
      if (Array.isArray(shimmerColor) && shimmerColor.length >= 2) {
        return `linear-gradient(90deg, ${shimmerColor[0]}, transparent 20%, transparent 80%, ${shimmerColor[1]})`;
      }
      if (Array.isArray(shineColor) && shineColor.length >= 2) {
        return `linear-gradient(90deg, ${shineColor[0]}, transparent 20%, transparent 80%, ${shineColor[1]})`;
      }
      return `linear-gradient(90deg, var(--shimmer-color), transparent 20%, transparent 80%, var(--shimmer-color))`;
    };

    return (
      <div
        ref={containerRef}
        className={cn(
          "relative p-[1px] group/shine overflow-hidden",
          containerClassName
        )}
        style={
          {
            borderRadius,
            "--duration": `${duration}s`,
            "--delay": `${delay}s`,
            "--border-width": `${borderWidth}px`,
            "--size": `${size}px`,
            "--shimmer-color": Array.isArray(shimmerColor)
              ? shimmerColor[0]
              : shimmerColor,
          } as React.CSSProperties
        }
      >
        <div
          className={cn(
            "absolute inset-0 overflow-hidden z-0",
            !isActive && "opacity-0"
          )}
        >
          <div
            className={cn(
              "absolute top-[calc(var(--y,0px)-var(--size)/2)] left-[calc(var(--x,0px)-var(--size)/2)] h-[--size] w-[--size] opacity-0 group-hover/shine:opacity-100 transition-opacity duration-300 ease-in-out pointer-events-none"
            )}
            style={{
              background: backgroundImage,
            }}
          />
        </div>

        <div
          className={cn(
            "absolute inset-[--border-width] z-10",
            !isActive && "opacity-0"
          )}
          style={{
            borderRadius: `calc(${borderRadius} - var(--border-width))`,
            background: getShimmerGradient(),
            backgroundSize: "200% 100%",
            animation: isActive
              ? `shine var(--duration) linear infinite var(--delay)`
              : "none",
          }}
        />

        <div
          ref={ref}
          className={cn("relative z-20", className)}
          style={{
            borderRadius,
          }}
          {...props}
        >
          {children}
        </div>
      </div>
    );
  }
);

ShineBorder.displayName = "ShineBorder";
