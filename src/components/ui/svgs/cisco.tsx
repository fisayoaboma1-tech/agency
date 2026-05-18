import React from "react"

export function Cisco({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 100 30"
      fill="currentColor"
      className={className}
      {...props}
    >
      <path d="M23.5 3.5H16v20h3.5v-8h4c2.2 0 4-1.8 4-4v-4c0-2.2-1.8-4-4-4zm0 8h-4v-5h4c.8 0 1.5.7 1.5 1.5v2c0 .8-.7 1.5-1.5 1.5zM44 3.5h-3.5L34 23.5h3l7-20zM53 3.5H46v20h7c3.9 0 7-3.1 7-7v-6c0-3.9-3.1-7-7-7zm3.5 13c0 1.9-1.6 3.5-3.5 3.5h-3.5V7H53c1.9 0 3.5 1.6 3.5 3.5v6z"/>
    </svg>
  )
}