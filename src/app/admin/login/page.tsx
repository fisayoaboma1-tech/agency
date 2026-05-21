"use client";

import { useEffect, useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Check if already authenticated via Supabase session
    const checkSession = async () => {
      try {
        const res = await fetch("/api/auth/session");
        const data = await res.json();
        if (data.authenticated) {
          router.replace("/admin/dashboard");
        }
      } catch {
        // Not authenticated
      }
    };
    checkSession();
  }, [router]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!email.trim() || !password.trim()) {
      setError("Please enter both email and password.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Invalid email or password.");
        setLoading(false);
        return;
      }

      // Store auth state in sessionStorage for immediate layout check
      if (typeof window !== "undefined") {
        sessionStorage.setItem("admin_authenticated", "true");
      }

      router.push("/admin/dashboard");
    } catch {
      setError("An error occurred. Please try again.");
      setLoading(false);
    }
  };

  return (
    <>
      <style jsx global>{`
        input, textarea, select {
          font-size: 16px !important;
        }
        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}</style>

      <div className="flex min-h-screen flex-col bg-[#f5f5f7]">
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 py-4 sm:px-10">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#86868b] transition-colors hover:text-[#1d1d1f]"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5m7-7-7 7 7 7"/>
            </svg>
            Back
          </Link>
        </div>

        {/* Main content */}
        <div className="flex flex-1 items-center justify-center px-6 pb-20 sm:px-10">
          <motion.div
            initial={{ opacity: 0, translateY: 12 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-[380px]"
          >
            {/* Logo + heading */}
            <div className="mb-10 text-center">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#1d1d1f]">
                <Image
                  src="https://res.cloudinary.com/dahp1ngcc/image/upload/v1779260635/Pngtree_letter_p_icon_8622509_j1t2dg.png"
                  alt="KBB Logo"
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </div>
              <h1 className="text-[22px] font-semibold tracking-tight text-[#1d1d1f]">
                Sign in
              </h1>
              <p className="mt-1.5 text-[14px] text-[#86868b]">
                Enter your credentials to access the admin panel.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit}>
              <div className="space-y-3">
                {/* Email */}
                <div>
                  <input
                    id="admin-email"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="w-full rounded-xl border border-[#d2d2d7] bg-white px-4 py-3 text-[14px] text-[#1d1d1f] placeholder-[#86868b] outline-none transition-all duration-200 focus:border-[#0071e3] focus:ring-[3px] focus:ring-[#0071e3]/15"
                    autoComplete="off"
                  />
                </div>

                {/* Password */}
                <div className="relative">
                  <input
                    id="admin-password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="w-full rounded-xl border border-[#d2d2d7] bg-white px-4 py-3 pr-11 text-[14px] text-[#1d1d1f] placeholder-[#86868b] outline-none transition-all duration-200 focus:border-[#0071e3] focus:ring-[3px] focus:ring-[#0071e3]/15"
                    autoComplete="off"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#86868b] hover:text-[#1d1d1f] transition-colors"
                    tabIndex={-1}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Forgot password */}
              <div className="mt-3 flex justify-end">
                <Link
                  href="/admin/forgot-password"
                  className="text-[13px] font-medium text-[#0071e3] transition-colors hover:text-[#0077ed]"
                >
                  Forgot password?
                </Link>
              </div>

              {/* Error */}
              {error && (
                <motion.p
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 rounded-lg bg-[#fef2f2] px-3.5 py-2.5 text-[13px] font-medium text-[#dc2626]"
                >
                  {error}
                </motion.p>
              )}

              {/* Submit */}
              <button
                type="submit"
                className="mt-5 w-full rounded-full bg-[#0071e3] px-6 py-3 text-[14px] font-semibold text-white transition-all duration-200 hover:bg-[#0077ed] active:scale-[0.98]"
              >
                Sign In
              </button>
            </form>

            {/* Footer */}
            <p className="mt-8 text-center text-[12px] text-[#86868b]">
              Authorized personnel only
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
}