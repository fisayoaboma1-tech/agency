"use client"

import { motion } from "motion/react"

export function WhatsAppFloat() {
  return (
    <motion.a
      href="https://wa.me/6285691569538"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: 1 }}
      className="fixed bottom-5 right-5 z-50 size-14 sm:size-16 rounded-full shadow-lg shadow-black/30 hover:shadow-xl hover:shadow-black/40 transition-shadow duration-300 active:scale-95 hover:scale-105 cursor-pointer"
    >
      <img
        src="https://res.cloudinary.com/dahp1ngcc/image/upload/v1779248861/Pngtree_whatsapp_icon_whatsapp_logo_whatsapp_3584845_zpfhwg.png"
        alt="WhatsApp"
        className="size-full object-contain"
      />
    </motion.a>
  )
}