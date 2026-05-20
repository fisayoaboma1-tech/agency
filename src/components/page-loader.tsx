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
        {/* Dimmed video background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-20"
          src="https://res.cloudinary.com/dahp1ngcc/video/upload/v1779259081/From_KlickPin_CF_40_Painted_Pot_Ideas_That_Feel_Fresh_and_New_-_Pin-10836855346909696_kokpyh.mp4"
        />
        <div className="relative z-10 loader" />
        <p className="relative z-10 mt-8 text-xs font-medium tracking-[0.2em] uppercase text-white/30">
          Mohon tunggu&hellip;
        </p>
      </div>
    )
  }

  return <>{children}</>
}