"use client"

import React from "react"
import Link from "next/link"
import { Logo } from "@/components/logo"
import {
  Logs,
  X,
  Phone,
  Home,
  Briefcase,
  GitBranch,
  Users,
  FileText,
  Mail,
  ChevronRight,
} from "lucide-react"
import { motion, AnimatePresence } from "motion/react"
import { cn } from "@/lib/utils"

const navLinks = [
  { name: "Home", href: "/", icon: Home },
  { name: "Services", href: "/services", icon: Briefcase },
  { name: "Process", href: "/process", icon: GitBranch },
  { name: "About", href: "/about", icon: Users },
  { name: "Blog", href: "/blog", icon: FileText },
  { name: "Contact", href: "/contact", icon: Mail },
]

export function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    // Initial check
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false)
    }
    if (menuOpen) {
      document.addEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "hidden"
      document.documentElement.setAttribute("data-menu-open", "true")
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = ""
      document.documentElement.removeAttribute("data-menu-open")
    }
  }, [menuOpen])

  return (
    <header className="fixed top-0 z-50 w-full">
      <nav
        className={cn(
          "w-full transition-all duration-500",
          scrolled
            ? "bg-[#0b1120]/80 backdrop-blur-xl shadow-sm shadow-black/20"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
          <Link href="/" aria-label="Home" className="flex shrink-0">
            <Logo light />
          </Link>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-white/80 transition-colors hover:text-white"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close Menu" : "Open Menu"}
            aria-expanded={menuOpen}
            className="relative z-30 -mr-2 flex size-10 cursor-pointer items-center justify-center lg:hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
              {menuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                >
                  <X className="size-6 text-white" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                >
                  <Logs className="size-6 text-white" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-20 bg-black/70 lg:hidden"
            />

            {/* Drawer panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
              style={{ willChange: "transform" }}
              className={cn(
                "fixed inset-y-0 right-0 z-20 flex w-full max-w-sm flex-col",
                "bg-gradient-to-b from-slate-900 via-slate-950 to-[#0b1120] shadow-2xl lg:hidden",
                "shadow-black/60"
              )}
            >
              {/* Drawer header */}
              <div className="flex items-center px-6 py-5">
                <Link href="/" aria-label="Home" className="flex shrink-0">
                  <Logo light />
                </Link>
              </div>
              <div className="flex-1 overflow-y-auto px-6 py-6">
                <span className="mb-4 block text-[11px] font-semibold uppercase tracking-[0.18em] text-white/35">
                  Navigation
                </span>
                <ul className="space-y-0.5">
                  {navLinks.map((link) => {
                    const Icon = link.icon
                    return (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          onClick={() => setMenuOpen(false)}
                          className="group flex items-center gap-3.5 rounded-xl px-3.5 py-3 text-sm font-medium text-white/55 transition-colors duration-150 hover:bg-white/[0.06] hover:text-white"
                        >
                          <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-white/[0.07] bg-white/[0.05] text-white/40 shadow-sm transition-colors duration-150 group-hover:border-white/25 group-hover:bg-white/10 group-hover:text-white">
                            <Icon className="size-4" />
                          </span>
                          <span className="flex-1">{link.name}</span>
                          <ChevronRight className="size-4 text-white/25 transition-transform duration-150 group-hover:translate-x-0.5" />
                        </Link>
                      </li>
                    )
                  })}
                </ul>
   
                {/* Contact section */}
                <div className="mt-10">
                  <span className="mb-4 block text-[11px] font-semibold uppercase tracking-[0.18em] text-white/35">
                    Contact
                  </span>
                  <div className="space-y-3 rounded-2xl border border-white/[0.06] bg-white/[0.03] p-4">
                    <div>
                      <a
                        href="https://wa.me/6285216412782"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center gap-3 rounded-xl px-3.5 py-3 text-sm font-medium text-white/55 transition-colors hover:bg-white/[0.06] hover:text-white"
                      >
                        <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-green-500/25 bg-green-500/10 text-green-400">
                          <Phone className="size-4" />
                        </span>
                        <div className="flex flex-col">
                          <span className="text-xs font-normal text-white/40">WhatsApp</span>
                          <span className="text-sm font-medium text-white/90">+62 852 1641 2782</span>
                        </div>
                        <span className="ml-auto flex size-2 shrink-0 rounded-full bg-green-400 shadow-sm shadow-green-400/30" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}