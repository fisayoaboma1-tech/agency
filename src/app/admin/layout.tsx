"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [checked, setChecked] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // Sync dark mode from localStorage
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("admin_darkMode");
      if (stored !== null) setDarkMode(stored === "true");
    }
  }, []);

  useEffect(() => {
    // Apply dark mode class to <html>
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  useEffect(() => {
    // Allow access to login/forgot-password pages without auth
    if (pathname === "/admin/login" || pathname === "/admin/forgot-password") {
      setChecked(true);
      return;
    }

    // Verify session via API (reliable — checks Supabase cookies)
    const verifySession = async () => {
      try {
        const res = await fetch("/api/auth/session");
        const data = await res.json();
        if (data.authenticated) {
          setChecked(true);
        } else {
          router.replace("/admin/login");
        }
      } catch {
        router.replace("/admin/login");
      }
    };
    verifySession();
  }, [pathname, router]);

  if (!checked) {
    return (
      <div className={`flex min-h-screen items-center justify-center transition-colors duration-500 ${darkMode ? "bg-gray-950" : "bg-gray-50"}`}>
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-emerald-400/30 border-t-emerald-400" />
      </div>
    );
  }

  return <>{children}</>;
}
