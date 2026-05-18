import React from "react"
import { cn } from "@/lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "outline" | "ghost"
  size?: "sm" | "default" | "lg"
  asChild?: boolean
  children: React.ReactNode
}

export { type ButtonProps }

export function Button({
  className,
  variant = "default",
  size = "default",
  asChild,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer"

  const variantStyles = {
    default:
      "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm",
    secondary:
      "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-sm",
    outline:
      "border border-border bg-background hover:bg-muted text-foreground",
    ghost: "hover:bg-muted text-foreground",
  }

  const sizeStyles = {
    sm: "h-9 rounded-lg px-4 text-sm",
    default: "h-10 rounded-lg px-6 text-sm",
    lg: "h-12 rounded-xl px-8 text-base",
  }

  const combined = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className
  )

  if (asChild) {
    // For simplicity, we just return a button with children
    // In a real app we'd use Slot from Radix
    return (
      <button className={combined} {...props}>
        {children}
      </button>
    )
  }

  return (
    <button className={combined} {...props}>
      {children}
    </button>
  )
}

// Re-export as named
export { Button as Btn }