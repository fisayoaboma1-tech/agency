"use client"

import React from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"

export function Logo({ className = "", light = false }: { className?: string; light?: boolean }) {
  const router = useRouter()

  function handleClick() {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior })
    router.refresh()
    router.push("/")
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="KBB Home"
      className={`flex items-center gap-1.5 justify-start cursor-pointer shrink-0 ${className}`}
    >
      <Image
        src="https://res.cloudinary.com/dahp1ngcc/image/upload/v1779260635/Pngtree_letter_p_icon_8622509_j1t2dg.png"
        alt="KBB Logo"
        width={36}
        height={36}
        className="object-contain shrink-0"
      />
      <div className="flex flex-col leading-tight text-left">
        <span className={`text-sm font-bold ${light ? "text-blue-200" : "text-blue-600"}`}>
          PT KBB
        </span>
        <span className={`text-[10px] ${light ? "text-white/70" : "text-white/80"}`}>
          Konsultan Berdikari Bersama
        </span>
      </div>
    </button>
  )
}