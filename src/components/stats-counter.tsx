const statsData = [
  { value: "46+", label: "Foreign companies served" },
  { value: "88%", label: "Success rate" },
  { value: "5+", label: "Years of expertise" },
  { value: "87%", label: "Compliance guaranteed" },
]

export function StatsCounter() {
  return (
    <dl className="grid grid-cols-2 gap-y-7 sm:grid-cols-4 sm:gap-0">
      {statsData.map((stat, index) => (
        <div
          key={stat.label}
          className={`border-white/10 sm:px-7 ${
            index > 0 ? "sm:border-l" : "sm:pl-0"
          } ${index === 3 ? "sm:pr-0" : ""}`}
        >
          <dt className="sr-only">{stat.label}</dt>
          <dd className="site-heading text-3xl text-white sm:text-4xl">
            <span>{stat.value}</span>
            <span
              aria-hidden="true"
              className="mt-2 block font-sans text-xs text-slate-400 sm:text-sm"
            >
              {stat.label}
            </span>
          </dd>
        </div>
      ))}
    </dl>
  )
}
