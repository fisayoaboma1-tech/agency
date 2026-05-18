import React from "react"

export function Bolt({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 100 30"
      fill="currentColor"
      className={className}
      {...props}
    >
      <path d="M55.52 6.5l-4.5 16.5h-3.5l4.5-16.5h3.5zm-12 0l-4.5 16.5h-3.5l4.5-16.5h3.5zm-12 0l-4.5 16.5h-3.5l4.5-16.5h3.5zm36 0l-4.5 16.5h-3.5l4.5-16.5h3.5z"/>
    </svg>
  )
}