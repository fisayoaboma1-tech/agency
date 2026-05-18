"use client"

import React from "react"
import Image from "next/image"

export function Logo({ className = "", light = false }: { className?: string; light?: boolean }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Image
        src="https://res.cloudinary.com/dahp1ngcc/image/upload/v1779103592/Pngtree_s_letter_logo_3626192_w5u5gm.png"
        alt="Logo"
        width={40}
        height={40}
        className="object-contain"
      />
      <div className="flex flex-col leading-tight">
        <span className={`text-sm font-bold ${light ? "text-cyan-300" : "text-cyan-500"}`}>PT SSNI</span>
        <span className={`text-[10px] ${light ? "text-sky-300/70" : "text-sky-600/80"}`}>Solusi Sertifikasi Nasional</span>
      </div>
    </div>
  )
}