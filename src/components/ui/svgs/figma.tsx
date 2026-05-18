import React from "react"

export function Figma({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 38 57"
      fill="none"
      className={className}
      {...props}
    >
      <path
        d="M19 28.5c0-5.25 4.25-9.5 9.5-9.5S38 23.25 38 28.5s-4.25 9.5-9.5 9.5S19 33.75 19 28.5z"
        fill="currentColor"
        fillOpacity="0.6"
      />
      <path
        d="M0 47.5c0-5.25 4.25-9.5 9.5-9.5H19v9.5c0 5.25-4.25 9.5-9.5 9.5S0 52.75 0 47.5z"
        fill="currentColor"
        fillOpacity="0.3"
      />
      <path
        d="M19 0v19h9.5c5.25 0 9.5-4.25 9.5-9.5S33.75 0 28.5 0H19z"
        fill="currentColor"
      />
      <path
        d="M0 9.5C0 4.25 4.25 0 9.5 0H19v19H9.5C4.25 19 0 14.75 0 9.5z"
        fill="currentColor"
        fillOpacity="0.8"
      />
      <path
        d="M0 28.5c0 5.25 4.25 9.5 9.5 9.5H19V19H9.5C4.25 19 0 23.25 0 28.5z"
        fill="currentColor"
        fillOpacity="0.4"
      />
    </svg>
  )
}