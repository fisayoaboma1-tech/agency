"use client"

import React from "react"
import { motion } from "motion/react"
import { Logo } from "@/components/logo"

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-slate-950 to-[#0b1120]">
      {/* Subtle radial glow behind loader */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-72 rounded-full bg-sky-500/10 blur-3xl pointer-events-none" />

      {/* Company branding */}
      <div className="relative mb-12 flex flex-col items-center gap-3">
        <div className="flex items-center gap-3">
          <img
            src="https://res.cloudinary.com/dahp1ngcc/image/upload/v1779260635/Pngtree_letter_p_icon_8622509_j1t2dg.png"
            alt="KBB Logo"
            className="size-9 object-contain shrink-0"
          />
          <div className="flex flex-col leading-tight text-left">
            <span className="text-sm font-bold text-blue-200">PT KBB</span>
            <span className="text-[10px] text-white/70">Konsultan Berdikari Bersama</span>
          </div>
        </div>
      </div>

      {/* The loader */}
      <div className="loader mb-8" />

      {/* Indonesian flag + Memuat text with animated dots */}
      <div className="flex items-center gap-3">
        {/* Indonesian Flag */}
        <div className="flex flex-col size-7 shrink-0 rounded-sm shadow-lg shadow-black/30 overflow-hidden ring-1 ring-white/10">
          <div className="h-1/2 bg-red-600" />
          <div className="h-1/2 bg-white" />
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-sm font-medium tracking-[0.2em] uppercase text-white/40">Memuat</span>
          <span className="flex gap-0.5">
            <motion.span
              animate={{ opacity: [0, 1, 0], scale: [0.8, 1.2, 0.8] }}
              transition={{ duration: 1.2, repeat: Infinity, delay: 0 }}
              className="size-1.5 rounded-full bg-red-500"
            />
            <motion.span
              animate={{ opacity: [0, 1, 0], scale: [0.8, 1.2, 0.8] }}
              transition={{ duration: 1.2, repeat: Infinity, delay: 0.2 }}
              className="size-1.5 rounded-full bg-white"
            />
            <motion.span
              animate={{ opacity: [0, 1, 0], scale: [0.8, 1.2, 0.8] }}
              transition={{ duration: 1.2, repeat: Infinity, delay: 0.4 }}
              className="size-1.5 rounded-full bg-red-500"
            />
            <motion.span
              animate={{ opacity: [0, 1, 0], scale: [0.8, 1.2, 0.8] }}
              transition={{ duration: 1.2, repeat: Infinity, delay: 0.6 }}
              className="size-1.5 rounded-full bg-white"
            />
            <motion.span
              animate={{ opacity: [0, 1, 0], scale: [0.8, 1.2, 0.8] }}
              transition={{ duration: 1.2, repeat: Infinity, delay: 0.8 }}
              className="size-1.5 rounded-full bg-red-500"
            />
          </span>
        </div>
      </div>

      {/* Tagline */}
      <p className="mt-6 text-xs text-white/20 tracking-wider text-center max-w-[200px] leading-relaxed">
        Mitra terpercaya Anda untuk masuk pasar Indonesia
      </p>

      {/* Refresh indicator */}
      <div className="absolute bottom-12 flex items-center gap-2 text-[10px] tracking-widest uppercase text-white/10">
        <svg className="size-3 animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
        </svg>
        <span>Memperbarui</span>
      </div>
    </div>
  )
}
