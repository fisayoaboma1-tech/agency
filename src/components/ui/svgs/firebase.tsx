import React from "react"

export function FirebaseFull({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 131 180"
      fill="none"
      className={className}
      {...props}
    >
      <path
        d="M72.4 67.4L48.7 5.1c-1.1-2.6-4.7-2.6-5.8 0L.1 125.8c-.6 1.5.1 3.3 1.6 4.2l122.8 71.9c1.2.7 2.7.5 3.6-.5l2.5-2.8-58-131.2z"
        fill="currentColor"
      />
      <path
        d="M72.4 67.4l19.3 72.4-41.7-36.3 22.4-36.1z"
        fill="currentColor"
        fillOpacity="0.5"
      />
      <path
        d="M50.1 142.3l-32-29.5 8.8-22.7 23.2 52.2z"
        fill="currentColor"
        fillOpacity="0.3"
      />
    </svg>
  )
}