"use client"

import { motion } from "motion/react"
import Image from "next/image"
import { usePathname } from "next/navigation"

export function WhatsAppFloat() {
  const pathname = usePathname()

  if (pathname === "/contact") return null

  return (
    <motion.a
      href="https://wa.me/6285216412782"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: 1 }}
      aria-label="Chat with KBB on WhatsApp"
      className="fixed bottom-5 right-5 z-50 size-14 cursor-pointer rounded-full transition-transform duration-200 hover:scale-105 active:scale-95"
    >
      <Image
        src="https://res.cloudinary.com/dahp1ngcc/image/upload/v1779248861/Pngtree_whatsapp_icon_whatsapp_logo_whatsapp_3584845_zpfhwg.png"
        alt="WhatsApp"
        width={64}
        height={64}
        className="size-full object-contain"
      />
    </motion.a>
  )
}