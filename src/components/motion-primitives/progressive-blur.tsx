"use client"

import { cn } from "@/lib/utils"

interface ProgressiveBlurProps {
  className?: string
  direction?: "left" | "right" | "top" | "bottom"
  blurIntensity?: number
}

export function ProgressiveBlur({
  className,
  direction = "left",
  blurIntensity = 1,
}: ProgressiveBlurProps) {
  const directionClasses = {
    left: "left-0 top-0 h-full",
    right: "right-0 top-0 h-full",
    top: "top-0 left-0 w-full",
    bottom: "bottom-0 left-0 w-full",
  }

  const gradientDirection = {
    left: "to right",
    right: "to left",
    top: "to bottom",
    bottom: "to top",
  }

  return (
    <div
      className={cn(
        "pointer-events-none absolute",
        directionClasses[direction],
        className
      )}
      style={{
        width: direction === "left" || direction === "right" ? `${20 * blurIntensity}px` : "100%",
        height: direction === "top" || direction === "bottom" ? `${20 * blurIntensity}px` : "100%",
        background: `linear-gradient(${gradientDirection[direction]}, transparent, white)`,
        filter: `blur(${blurIntensity}px)`,
      }}
    />
  )
}