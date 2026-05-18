import React from "react"

export function Hulu({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 80 30"
      fill="none"
      className={className}
      {...props}
    >
      <path
        d="M39.53 3.91v21.47h-5.26V17.4h-7.3v7.98h-5.27V3.91h5.27v8.58h7.3V3.91h5.26zm22.08.1c-5.66 0-10.24 4.58-10.24 10.24s4.58 10.24 10.24 10.24S71.85 19.91 71.85 14.25 67.27 4.01 61.61 4.01zm0 15.92c-3.13 0-5.66-2.54-5.66-5.66s2.53-5.66 5.66-5.66 5.66 2.54 5.66 5.66-2.53 5.66-5.66 5.66zM4.23 3.91v21.47H9.5V11.35l9.77 14.03h4.77V3.91H19.1v11.74L10.9 3.91H4.23z"
        fill="currentColor"
      />
    </svg>
  )
}