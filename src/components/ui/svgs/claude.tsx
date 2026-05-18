import React from "react"

export function Claude({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 120 30"
      fill="currentColor"
      className={className}
      {...props}
    >
      <path d="M17.8 3.5L8 23.5h3.5l2-4.5h10l2 4.5H29L19.2 3.5h-1.4zm-1.5 12.5l3.5-8 3.5 8h-7zM45.5 3.5h-3v15c0 2.8 2.2 5 5 5h6v-3h-6c-1.1 0-2-.9-2-2v-15zM58.5 3.5h-3v20h3v-20zM72.5 3.5h-3V23.5h3V3.5zM86.5 3.5h-3l-8 20h3.5l2-5h10l2 5h3.5l-8-20h-2zm-2.5 12l3.5-9 3.5 9H84z"/>
    </svg>
  )
}