"use client"

import React from "react"

type Theme = "dark" | "light"

type SiteThemeContextValue = {
  theme: Theme
  toggleTheme: () => void
}

const SiteThemeContext = React.createContext<SiteThemeContextValue | null>(null)
const THEME_STORAGE_KEY = "kbb-site-theme"
const THEME_CHANGE_EVENT = "kbb-site-theme-change"

function subscribeToTheme(onChange: () => void) {
  window.addEventListener("storage", onChange)
  window.addEventListener(THEME_CHANGE_EVENT, onChange)
  return () => {
    window.removeEventListener("storage", onChange)
    window.removeEventListener(THEME_CHANGE_EVENT, onChange)
  }
}

function getThemeSnapshot(): Theme {
  return window.localStorage.getItem(THEME_STORAGE_KEY) === "light"
    ? "light"
    : "dark"
}

function getServerThemeSnapshot(): Theme {
  return "dark"
}

export function SiteThemeProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const theme = React.useSyncExternalStore(
    subscribeToTheme,
    getThemeSnapshot,
    getServerThemeSnapshot,
  )

  return (
    <SiteThemeContext.Provider
      value={{
        theme,
        toggleTheme: () => {
          const nextTheme = theme === "dark" ? "light" : "dark"
          window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme)
          window.dispatchEvent(new Event(THEME_CHANGE_EVENT))
        },
      }}
    >
      <div
        className="main-site flex min-h-screen flex-col"
        data-theme={theme}
      >
        {children}
      </div>
    </SiteThemeContext.Provider>
  )
}

export function useSiteTheme() {
  const context = React.useContext(SiteThemeContext)
  if (!context) {
    throw new Error("useSiteTheme must be used within SiteThemeProvider")
  }
  return context
}
