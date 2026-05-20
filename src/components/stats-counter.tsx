"use client"

import React from "react"

const statsData = [
  { value: 46, suffix: "+", label: "Foreign Companies Served" },
  { value: 88, suffix: "%", label: "Success Rate" },
  { value: 5, suffix: "+", label: "Years of Expertise" },
  { value: 87, suffix: "%", label: "Compliance Guaranteed" },
]

export function StatsCounter() {
  const [phase, setPhase] = React.useState<"idle" | "scanning" | "reading">("idle")
  const [counts, setCounts] = React.useState([0, 0, 0, 0])
  const [scanProgress, setScanProgress] = React.useState(0) // 0-100

  React.useEffect(() => {
    let mounted = true

    const runCycle = () => {
      if (!mounted) return

      // Phase 1: Scanning (3 seconds)
      setPhase("scanning")
      setCounts([0, 0, 0, 0])

      const scanDuration = 3000 // 3 seconds total scan
      const startTime = Date.now()

      // Animate scan line position
      const scanInterval = setInterval(() => {
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / scanDuration, 1)
        setScanProgress(progress * 100)

        if (progress >= 1) {
          clearInterval(scanInterval)
        }
      }, 16) // ~60fps

      // Animate numbers for each stat sequentially
      const perStatDuration = scanDuration / statsData.length

      statsData.forEach((stat, index) => {
        const steps = Math.min(stat.value, 30)
        const increment = stat.value / steps
        const perStep = perStatDuration / steps

        setTimeout(() => {
          let current = 0
          const countTimer = setInterval(() => {
            current += increment
            if (current >= stat.value) {
              current = stat.value
              clearInterval(countTimer)
            }
            if (mounted) {
              setCounts((prev) => {
                const next = [...prev]
                next[index] = Math.floor(current)
                return next
              })
            }
          }, perStep)
        }, index * perStatDuration)
      })

      // Phase 2: Reading (8 seconds)
      setTimeout(() => {
        if (!mounted) return
        clearInterval(scanInterval)
        setPhase("reading")
        setScanProgress(100)
        setCounts(statsData.map((s) => s.value))

        // Hold for 8 seconds then loop
        setTimeout(() => {
          if (!mounted) return
          setPhase("idle")
          setCounts([0, 0, 0, 0])
          setScanProgress(0)

          // Brief pause then restart
          setTimeout(() => {
            if (mounted) runCycle()
          }, 500)
        }, 8000)
      }, scanDuration)
    }

    // Start after a brief initial delay
    const initialTimeout = setTimeout(runCycle, 600)
    return () => {
      mounted = false
      clearTimeout(initialTimeout)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="relative">
      {/* Scan line overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-10 overflow-hidden rounded-xl"
        aria-hidden="true"
      >
        {/* Glow line that sweeps down */}
        <div
          className="absolute left-0 right-0 h-24 transition-transform duration-75"
          style={{
            top: `${scanProgress}%`,
            transform: phase === "scanning" ? "translateY(-12px)" : "translateY(-50%)",
            opacity: phase === "reading" ? 0 : 1,
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(56, 189, 248, 0.25) 40%, rgba(56, 189, 248, 0.5) 50%, rgba(56, 189, 248, 0.25) 60%, transparent 100%)",
            filter: "blur(8px)",
            transition: phase === "scanning" ? "none" : "opacity 0.5s ease",
          }}
        />
        {/* Sharp accent line */}
        <div
          className="absolute left-4 right-4 h-px transition-transform duration-75"
          style={{
            top: `${scanProgress}%`,
            opacity: phase === "reading" ? 0 : 1,
            background:
              "linear-gradient(to right, transparent 0%, rgba(56, 189, 248, 0.8) 30%, rgba(56, 189, 248, 1) 50%, rgba(56, 189, 248, 0.8) 70%, transparent 100%)",
            boxShadow: "0 0 12px rgba(56, 189, 248, 0.5), 0 0 40px rgba(56, 189, 248, 0.2)",
            transition: phase === "scanning" ? "none" : "opacity 0.5s ease",
          }}
        />
        {/* Side glow bars */}
        <div
          className="absolute left-0 top-0 bottom-0 w-px transition-opacity duration-75"
          style={{
            opacity: phase === "scanning" ? Math.min(scanProgress / 20, 0.6) : 0,
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(56, 189, 248, 0.3) 50%, transparent 100%)",
          }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-px transition-opacity duration-75"
          style={{
            opacity: phase === "scanning" ? Math.min(scanProgress / 20, 0.6) : 0,
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(56, 189, 248, 0.3) 50%, transparent 100%)",
          }}
        />
      </div>

      {/* Grid of stats */}
      <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
        {statsData.map((stat, index) => (
          <div key={stat.label} className="relative text-center">
            <div
              className={`text-4xl font-bold bg-gradient-to-b from-white to-slate-300 bg-clip-text text-transparent transition-opacity duration-500 ${
                phase === "idle" && counts[index] === 0 ? "opacity-20" : "opacity-100"
              }`}
            >
              {counts[index]}
              {stat.suffix}
            </div>
            <div
              className={`mt-2 text-sm text-white/40 transition-opacity duration-500 ${
                phase === "idle" && counts[index] === 0 ? "opacity-20" : "opacity-100"
              }`}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}