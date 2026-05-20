"use client"

import React from "react"
import { useRouter, usePathname } from "next/navigation"
import { Logo } from "@/components/logo"
import {
  Logs,
  Phone,
  Home,
  Briefcase,
  GitBranch,
  Users,
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
  { name: "Contact", href: "/contact", icon: Mail },
]

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior })
}

export function Header() {
  const router = useRouter()
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)

  function isActive(href: string) {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  function handleNavigation(href: string) {
    scrollToTop()
    setMenuOpen(false)
    router.push(href)
  }

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
          <button onClick={() => handleNavigation("/")} aria-label="Home" className="flex shrink-0 cursor-pointer">
            <Logo light />
          </button>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavigation(link.href)}
                  className="text-sm font-medium text-white/80 transition-colors hover:text-white cursor-pointer"
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger - only menu icon, no X (tap outside closes) */}
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open Menu"
            className="relative z-30 -mr-2 flex size-10 cursor-pointer items-center justify-center lg:hidden"
          >
            <Logs className="size-6 text-white" />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop with blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-20 bg-black/80 backdrop-blur-md lg:hidden"
            />

            {/* Drawer panel - higher z-index to cover hamburger */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
              style={{ willChange: "transform" }}
              className={cn(
                "fixed inset-y-0 right-0 z-[60] flex w-[55vw] sm:max-w-sm flex-col",
                "bg-gradient-to-b from-slate-900 via-slate-950 to-[#0b1120] shadow-2xl lg:hidden",
                "shadow-black/60"
              )}
            >
              {/* Drawer header - smaller left-aligned logo */}
              <div className="flex items-center justify-start px-4 py-4">
                <button onClick={() => handleNavigation("/")} aria-label="Home" className="flex shrink-0 cursor-pointer scale-[0.75] origin-left">
                  <Logo light />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto px-4 py-4">
                <span className="mb-4 block text-[10px] font-semibold uppercase tracking-[0.18em] text-white/35">
                  Navigation
                </span>
                <ul className="space-y-0.5">
                  {navLinks.map((link) => {
                    const Icon = link.icon
                    const active = isActive(link.href)
                    return (
                      <li key={link.href}>
                        <button
                          onClick={() => handleNavigation(link.href)}
                          className={cn(
                            "group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium cursor-pointer text-left transition-all duration-150",
                            active
                              ? "text-sky-200"
                              : "text-white/55 hover:bg-white/[0.06] hover:text-white"
                          )}
                        >
                          <span className={cn(
                            "flex size-8 shrink-0 items-center justify-center rounded-lg border shadow-sm transition-colors duration-150",
                            active
                              ? "border-sky-400/30 bg-sky-400/15 text-sky-200"
                              : "border-white/[0.07] bg-white/[0.05] text-white/40 group-hover:border-white/25 group-hover:bg-white/10 group-hover:text-white"
                          )}>
                            <Icon className="size-3.5" />
                          </span>
                          <span className="flex-1">{link.name}</span>
                          <ChevronRight className={cn(
                            "size-3.5 transition-transform duration-150 group-hover:translate-x-0.5",
                            active ? "text-sky-300/50" : "text-white/25"
                          )} />
                        </button>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}