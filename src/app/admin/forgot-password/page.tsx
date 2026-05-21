"use client";

import { useState, FormEvent, useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, Mail, Lock, Sun, Moon } from "lucide-react";

export default function AdminForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [step, setStep] = useState<"email" | "reset" | "done">("email");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("admin_darkMode");
      if (stored !== null) setDarkMode(stored === "true");
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const next = !prev;
      localStorage.setItem("admin_darkMode", String(next));
      return next;
    });
  };

  const txt = (darkClass: string, lightClass: string) => darkMode ? darkClass : lightClass;

  const handleEmailSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email.trim()) {
      setError("Please enter your admin email.");
      return;
    }

    if (email !== "admin") {
      setError("No account found with this email.");
      return;
    }

    setLoading(true);
    await new Promise((r) => setTimeout(r, 500));
    setLoading(false);
    setStep("reset");
  };

  const handleResetSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");

    if (!newPassword.trim() || !confirmPassword.trim()) {
      setError("Please fill in all fields.");
      return;
    }

    if (newPassword.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);
    await new Promise((r) => setTimeout(r, 500));
    setLoading(false);
    setStep("done");
  };

  return (
    <>
      <style jsx global>{`
        input, textarea, select {
          font-size: 16px !important;
        }
      `}</style>

      <div className={`relative flex min-h-screen items-center justify-center overflow-hidden px-4 transition-colors duration-500 ${darkMode ? "bg-gray-950" : "bg-gray-50"}`}>
        {/* Background glow */}
        <div className={`pointer-events-none absolute left-1/2 top-0 z-0 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/3 rounded-full blur-[200px] transition-colors duration-500 ${darkMode ? "bg-emerald-500/5" : "bg-emerald-300/30"}`} />
        <div className={`pointer-events-none absolute -right-40 bottom-0 z-0 h-[400px] w-[400px] rounded-full blur-[150px] transition-colors duration-500 ${darkMode ? "bg-emerald-600/5" : "bg-emerald-400/20"}`} />

        {/* Grain texture */}
        <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.02] mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJmIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc0IiBudW1PY3RhdmVzPSIzIiAvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCMfikiIG9wYWNpdHk9IjAiIC8+PC9zdmc+')]" />

        {/* Subtle grid overlay */}
        <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Back to login + Dark/Light toggle */}
        <div className="fixed left-1/2 top-8 z-20 -translate-x-1/2 flex items-center gap-4">
          <Link
            href="/admin/login"
            className={txt(
              "inline-flex items-center gap-2.5 rounded-xl border border-white/[0.08] bg-gray-950/80 px-6 py-3 text-sm font-medium text-white/50 shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-white/[0.15] hover:text-white/80",
              "inline-flex items-center gap-2.5 rounded-xl border border-gray-200 bg-white/80 px-6 py-3 text-sm font-medium text-gray-500 shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-gray-300 hover:text-gray-800"
            )}
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Login
          </Link>

          <button
            onClick={toggleDarkMode}
            className={txt(
              "relative inline-flex h-8 w-14 items-center rounded-full border border-white/[0.10] bg-white/[0.04] transition-all duration-300 hover:bg-white/[0.08] hover:border-white/[0.15]",
              "relative inline-flex h-8 w-14 items-center rounded-full border border-gray-200 bg-gray-100 transition-all duration-300 hover:bg-gray-200 hover:border-gray-300"
            )}
            aria-label="Toggle theme"
          >
            <span className={txt(
              "inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400 text-white shadow-sm transition-all duration-300 translate-x-0.5",
              "inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-gray-600 shadow-sm transition-all duration-300 translate-x-[18px]"
            )}>
              {darkMode ? <Moon className="h-3.5 w-3.5" /> : <Sun className="h-3.5 w-3.5" />}
            </span>
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative z-10 w-full max-w-[400px]"
        >
          <div className={`rounded-2xl border p-8 shadow-2xl backdrop-blur-xl transition-colors duration-500 ${
            darkMode
              ? "border-white/[0.06] bg-gray-950/90"
              : "border-gray-200 bg-white/90 shadow-gray-200/50"
          }`}>
            {/* Logo header */}
            <div className="mb-7">
              <div className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl ${
                darkMode ? "bg-emerald-500/10 ring-1 ring-emerald-500/20" : "bg-emerald-50 ring-1 ring-emerald-200"
              }`}>
                <Lock className={`h-5 w-5 ${darkMode ? "text-emerald-400" : "text-emerald-600"}`} />
              </div>
              <h1 className={`text-sm font-semibold transition-colors duration-500 ${darkMode ? "text-white" : "text-gray-900"}`}>
                Reset Password
              </h1>
              <p className={`text-[11px] transition-colors duration-500 ${darkMode ? "text-white/40" : "text-gray-500"}`}>
                {step === "email"
                  ? "Verify your admin email"
                  : step === "reset"
                  ? "Choose a new password"
                  : "Password updated"}
              </p>
            </div>

            <div className={`mb-6 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent transition-colors duration-500 ${darkMode ? "" : "via-gray-200"}`} />

            {step === "email" && (
              <form onSubmit={handleEmailSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="reset-email"
                    className={`mb-1.5 block text-[11px] font-semibold tracking-wide uppercase transition-colors duration-500 ${darkMode ? "text-white/50" : "text-gray-600"}`}
                  >
                    Admin Email
                  </label>
                  <div className="group relative">
                    <Mail className={`pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 transition-colors duration-300 group-focus-within:text-emerald-400/60 ${darkMode ? "text-white/20" : "text-gray-400"}`} />
                    <input
                      id="reset-email"
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter admin email"
                      className={txt(
                        "w-full rounded-xl border border-white/[0.06] bg-white/[0.03] px-4 py-3 pl-11 text-sm text-white placeholder-white/20 outline-none transition-all duration-300 focus:border-emerald-400/30 focus:bg-white/[0.05] focus:ring-1 focus:ring-emerald-400/10",
                        "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 pl-11 text-sm text-gray-900 placeholder-gray-400 outline-none transition-all duration-300 focus:border-emerald-400/50 focus:bg-white focus:ring-1 focus:ring-emerald-400/20 shadow-sm"
                      )}
                      autoComplete="off"
                    />
                  </div>
                </div>

                {error && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`rounded-lg px-3.5 py-2.5 text-xs font-medium ${darkMode ? "bg-red-500/10 text-red-400" : "bg-red-50 text-red-600"}`}
                  >
                    {error}
                  </motion.p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-1 w-full rounded-xl bg-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/15 transition-all duration-300 hover:bg-emerald-400 hover:shadow-emerald-400/25 active:scale-[0.98] disabled:opacity-50"
                >
                  {loading ? (
                    <span className="inline-flex items-center gap-2">
                      <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Verifying...
                    </span>
                  ) : (
                    "Verify Email"
                  )}
                </button>
              </form>
            )}

            {step === "reset" && (
              <form onSubmit={handleResetSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="new-password"
                    className={`mb-1.5 block text-[11px] font-semibold tracking-wide uppercase transition-colors duration-500 ${darkMode ? "text-white/50" : "text-gray-600"}`}
                  >
                    New Password
                  </label>
                  <div className="group relative">
                    <Lock className={`pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 transition-colors duration-300 group-focus-within:text-emerald-400/60 ${darkMode ? "text-white/20" : "text-gray-400"}`} />
                    <input
                      id="new-password"
                      type="password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="Enter new password"
                      className={txt(
                        "w-full rounded-xl border border-white/[0.06] bg-white/[0.03] px-4 py-3 pl-11 text-sm text-white placeholder-white/20 outline-none transition-all duration-300 focus:border-emerald-400/30 focus:bg-white/[0.05] focus:ring-1 focus:ring-emerald-400/10",
                        "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 pl-11 text-sm text-gray-900 placeholder-gray-400 outline-none transition-all duration-300 focus:border-emerald-400/50 focus:bg-white focus:ring-1 focus:ring-emerald-400/20 shadow-sm"
                      )}
                      autoComplete="off"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="confirm-password"
                    className={`mb-1.5 block text-[11px] font-semibold tracking-wide uppercase transition-colors duration-500 ${darkMode ? "text-white/50" : "text-gray-600"}`}
                  >
                    Confirm Password
                  </label>
                  <div className="group relative">
                    <Lock className={`pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 transition-colors duration-300 group-focus-within:text-emerald-400/60 ${darkMode ? "text-white/20" : "text-gray-400"}`} />
                    <input
                      id="confirm-password"
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Confirm new password"
                      className={txt(
                        "w-full rounded-xl border border-white/[0.06] bg-white/[0.03] px-4 py-3 pl-11 text-sm text-white placeholder-white/20 outline-none transition-all duration-300 focus:border-emerald-400/30 focus:bg-white/[0.05] focus:ring-1 focus:ring-emerald-400/10",
                        "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 pl-11 text-sm text-gray-900 placeholder-gray-400 outline-none transition-all duration-300 focus:border-emerald-400/50 focus:bg-white focus:ring-1 focus:ring-emerald-400/20 shadow-sm"
                      )}
                      autoComplete="off"
                    />
                  </div>
                </div>

                {error && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`rounded-lg px-3.5 py-2.5 text-xs font-medium ${darkMode ? "bg-red-500/10 text-red-400" : "bg-red-50 text-red-600"}`}
                  >
                    {error}
                  </motion.p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-1 w-full rounded-xl bg-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/15 transition-all duration-300 hover:bg-emerald-400 hover:shadow-emerald-400/25 active:scale-[0.98] disabled:opacity-50"
                >
                  {loading ? (
                    <span className="inline-flex items-center gap-2">
                      <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Resetting...
                    </span>
                  ) : (
                    "Reset Password"
                  )}
                </button>
              </form>
            )}

            {step === "done" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center"
              >
                <div className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full ${darkMode ? "bg-emerald-500/10" : "bg-emerald-50"}`}>
                  <svg className={`h-6 w-6 ${darkMode ? "text-emerald-400" : "text-emerald-600"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className={`text-sm font-semibold transition-colors duration-500 ${darkMode ? "text-white" : "text-gray-900"}`}>
                  Password Reset Successful
                </h2>
                <p className={`mt-1 text-xs transition-colors duration-500 ${darkMode ? "text-white/40" : "text-gray-500"}`}>
                  You can now log in with your new password.
                </p>
                <Link
                  href="/admin/login"
                  className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/15 transition-all duration-300 hover:bg-emerald-400 active:scale-[0.98]"
                >
                  Back to Login
                </Link>
              </motion.div>
            )}
          </div>

          <p className={`mt-5 text-center text-[11px] transition-colors duration-500 ${darkMode ? "text-white/20" : "text-gray-400"}`}>
            Authorized personnel only
          </p>
        </motion.div>
      </div>
    </>
  );
}