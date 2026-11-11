"use client"

import React from "react"
import { Logo } from "@/components/logo"

export function PageLoader({ children }: { children: React.ReactNode }) {
  const [showLoader, setShowLoader] = React.useState(true)

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false)
    }, 350)
    return () => clearTimeout(timer)
  }, [])

  if (showLoader) {
    return (
      <div
        role="status"
        aria-label="Loading KBB"
        className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#0b1120]"
      >
        <Logo light />
        <div className="loader mt-10" />
      </div>
    )
  }

  return <>{children}</>
}