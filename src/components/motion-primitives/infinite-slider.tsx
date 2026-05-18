"use client"

import { useRef, useState } from "react"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"

interface InfiniteSliderProps {
  children: React.ReactNode
  gap?: number
  speed?: number
  speedOnHover?: number
  direction?: "left" | "right"
  className?: string
}

export function InfiniteSlider({
  children,
  gap = 24,
  speed = 50,
  speedOnHover,
  direction = "left",
  className,
}: InfiniteSliderProps) {
  const [hovered, setHovered] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div
      ref={containerRef}
      className={cn("overflow-hidden", className)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        className="flex"
        style={{ gap }}
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          repeat: Infinity,
          duration: hovered && speedOnHover ? speedOnHover : speed,
          ease: "linear",
        }}
      >
        <div className="flex shrink-0" style={{ gap }}>
          {children}
        </div>
        <div className="flex shrink-0" style={{ gap }}>
          {children}
        </div>
      </motion.div>
    </div>
  )
}