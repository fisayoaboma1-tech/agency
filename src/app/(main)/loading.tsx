import { Logo } from "@/components/logo"

export default function Loading() {
  return (
    <div
      role="status"
      aria-label="Loading KBB"
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0b1120]"
    >
      <Logo light />
      <div className="loader mt-10" />
      <p className="mt-7 text-xs tracking-wide text-slate-400">
        Preparing your visit
      </p>
    </div>
  )
}
