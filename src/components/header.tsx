"use client"

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { AnimatePresence, motion } from "motion/react"
import { Menu, Moon, Sun, X } from "lucide-react"
import { Logo } from "@/components/logo"
import { cn } from "@/lib/utils"
import { useSiteTheme } from "@/components/site-theme-provider"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Process", href: "/process" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const pathname = usePathname()
  const { theme, toggleTheme } = useSiteTheme()
  const [menuOpen, setMenuOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)

  function isActive(href: string) {
    return href === "/" ? pathname === "/" : pathname.startsWith(href)
  }

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  React.useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setMenuOpen(false)
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
        aria-label="Main navigation"
        className={cn(
          "border-b border-white/10 transition-colors duration-300",
          scrolled ? "bg-[#0b1120]/95" : "bg-[#0b1120]/85",
          "backdrop-blur-md",
        )}
      >
        <div className="mx-auto flex h-[4.75rem] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
          <Logo light />

          <ul className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={cn(
                    "relative py-2 text-sm transition-colors",
                    isActive(link.href)
                      ? "text-white"
                      : "text-slate-400 hover:text-white",
                  )}
                >
                  {link.name}
                  {isActive(link.href) && (
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 -bottom-[1.05rem] h-px bg-sky-300"
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/contact"
            className="site-button hidden items-center justify-center px-4 text-sm font-medium lg:inline-flex"
          >
            Start a conversation
          </Link>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              aria-pressed={theme === "light"}
              className="theme-toggle inline-flex h-10 items-center justify-center gap-2 border border-white/15 px-3 text-xs font-medium text-slate-200 transition-colors hover:border-sky-300/50 hover:text-white"
            >
              {theme === "dark" ? (
                <Sun aria-hidden="true" className="size-4 text-sky-300" />
              ) : (
                <Moon aria-hidden="true" className="size-4 text-sky-700" />
              )}
              <span className="sm:hidden">
                {theme === "dark" ? "Light" : "Dark"}
              </span>
              <span className="hidden sm:inline">
                {theme === "dark" ? "Light mode" : "Dark mode"}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              className="flex size-10 items-center justify-center text-slate-200 transition-colors hover:text-sky-300 lg:hidden"
            >
              <Menu aria-hidden="true" className="size-5" strokeWidth={1.7} />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close navigation menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-40 cursor-default bg-[#070c15]/75 backdrop-blur-sm lg:hidden"
            />
            <motion.div
              id="mobile-navigation"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-y-0 right-0 z-[60] flex w-[min(88vw,24rem)] flex-col border-l border-white/10 bg-[#0b1120] px-6 pb-8 pt-5 lg:hidden"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <Logo light />
                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close navigation menu"
                  className="flex size-10 items-center justify-center text-slate-300 transition-colors hover:text-white"
                >
                  <X aria-hidden="true" className="size-5" />
                </button>
              </div>
              <p className="site-eyebrow mt-8">Navigation</p>
              <ul className="mt-4">
                {navLinks.map((link, index) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={isActive(link.href) ? "page" : undefined}
                      onClick={() => setMenuOpen(false)}
                      className={cn(
                        "flex items-center gap-4 border-b border-white/10 py-4 text-lg",
                        isActive(link.href)
                          ? "text-white"
                          : "text-slate-400 hover:text-white",
                      )}
                    >
                      <span className="font-mono text-xs text-sky-300/70">
                        0{index + 1}
                      </span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="site-button mt-8 inline-flex items-center justify-center px-5 text-sm font-medium"
              >
                Start a conversation
              </Link>
              <button
                type="button"
                onClick={toggleTheme}
                aria-pressed={theme === "light"}
                className="theme-toggle mt-5 inline-flex min-h-11 items-center gap-3 border-t border-white/10 pt-5 text-sm text-slate-300 transition-colors hover:text-white"
              >
                {theme === "dark" ? (
                  <Sun aria-hidden="true" className="size-4 text-sky-300" />
                ) : (
                  <Moon aria-hidden="true" className="size-4 text-sky-700" />
                )}
                Switch to {theme === "dark" ? "light" : "dark"} mode
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
