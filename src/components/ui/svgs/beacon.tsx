import React from "react"

export function Beacon({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 100 30"
      fill="currentColor"
      className={className}
      {...props}
    >
      <path d="M28.5 6.5H24l-6 9-6-9H7.5l7.5 11.5V24h3v-6L28.5 6.5zM42 6.5h-3v13.5h3V6.5zM42 22.5h-3v3h3v-3zM55.5 6.5h-3v13.5h3V6.5zM55.5 22.5h-3v3h3v-3zM69 6.5h-3l-6 9-6-9h-3l7.5 11.5V24h3v-6L69 6.5z"/>
    </svg>
  )
}