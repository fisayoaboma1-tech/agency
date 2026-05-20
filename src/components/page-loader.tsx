"use client"

import React from "react"

export function PageLoader({ children }: { children: React.ReactNode }) {
  const [showLoader, setShowLoader] = React.useState(true)

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false)
    }, 4000)
    return () => clearTimeout(timer)
  }, [])

  if (showLoader) {
    return (
      <div className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#0b1120]">
        <div className="loader" />
        <p className="mt-8 text-xs font-medium tracking-[0.2em] uppercase text-white/30">
          Loading
        </p>
      </div>
    )
  }

  return <>{children}</>
}