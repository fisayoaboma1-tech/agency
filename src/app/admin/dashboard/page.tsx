"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  LogOut, Mail, Inbox,
  X, Sun, Moon, Menu, AlertTriangle, ChevronLeft, ChevronRight,
  Clock, Archive, Eye,
} from "lucide-react";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
  createdAt: string;
  read: boolean;
}

interface Stats {
  total: number;
  unread: number;
  thisMonth: number;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const formatDate = (dateStr: string) => {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", {
    month: "short", day: "numeric", year: "numeric",
    hour: "2-digit", minute: "2-digit",
  });
};

const timeAgo = (dateStr: string) => {
  const diff = Date.now() - new Date(dateStr).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "Just now";
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.floor(hrs / 24);
  if (days < 7) return `${days}d ago`;
  return formatDate(dateStr);
};

const serviceLabel = (service: string) =>
  service
    ? service.charAt(0).toUpperCase() + service.slice(1).replace(/-/g, " ")
    : "Not specified";

// ---------------------------------------------------------------------------
// Detail Modal
// ---------------------------------------------------------------------------

function DetailModal({
  msg,
  onClose,
  darkMode,
}: {
  msg: ContactMessage;
  onClose: () => void;
  darkMode: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [onClose]);
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 backdrop-blur-sm overflow-y-auto py-10 px-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 10 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        ref={ref}
        className={`w-full max-w-lg rounded-2xl shadow-xl border overflow-hidden ${
          darkMode
            ? "bg-gray-900 border-gray-800"
            : "bg-white border-gray-200"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className={`flex items-start justify-between gap-4 px-6 pt-6 pb-4 border-b ${
          darkMode ? "border-gray-800" : "border-gray-100"
        }`}>
          <div className="min-w-0 flex-1">
            <h3 className={`text-[17px] font-semibold tracking-tight truncate ${
              darkMode ? "text-white" : "text-gray-900"
            }`}>
              {msg.name}
            </h3>
            <p className={`text-[13px] mt-0.5 ${
              darkMode ? "text-gray-400" : "text-gray-500"
            }`}>
              {msg.email}
            </p>
            <p className={`text-[12px] mt-0.5 ${
              darkMode ? "text-gray-500" : "text-gray-400"
            }`}>
              {formatDate(msg.createdAt)}
            </p>
          </div>
          <button
            onClick={onClose}
            className={`shrink-0 rounded-full p-1.5 -mr-1 -mt-1 transition-colors ${
              darkMode
                ? "text-gray-500 hover:text-gray-300 hover:bg-gray-800"
                : "text-gray-400 hover:text-gray-600 hover:bg-gray-100"
            }`}
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-5 space-y-5">
          {/* Company */}
          <div>
            <p className={`text-[11px] font-semibold tracking-wide uppercase mb-1 ${
              darkMode ? "text-gray-500" : "text-gray-400"
            }`}>
              Company Name <span className="font-normal lowercase text-gray-400">(optional)</span>
            </p>
            <p className={`text-[14px] ${
              msg.company
                ? (darkMode ? "text-white" : "text-gray-900")
                : (darkMode ? "text-gray-600" : "text-gray-400")
            }`}>
              {msg.company || "Not provided"}
            </p>
          </div>

          {/* Service */}
          <div>
            <p className={`text-[11px] font-semibold tracking-wide uppercase mb-1 ${
              darkMode ? "text-gray-500" : "text-gray-400"
            }`}>
              Service Interested In
            </p>
            <p className={`text-[14px] ${
              darkMode ? "text-white" : "text-gray-900"
            }`}>
              {serviceLabel(msg.service)}
            </p>
          </div>

          {/* Full message */}
          <div>
            <p className={`text-[11px] font-semibold tracking-wide uppercase mb-2 ${
              darkMode ? "text-gray-500" : "text-gray-400"
            }`}>
              Message
            </p>
            <div className={`rounded-xl p-4 border ${
              darkMode
                ? "bg-gray-800/60 border-gray-700/50"
                : "bg-gray-50 border-gray-100"
            }`}>
              <p className={`text-[14px] leading-relaxed whitespace-pre-wrap break-words ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}>
                {msg.message}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ---------------------------------------------------------------------------
// Theme toggle
// ---------------------------------------------------------------------------

function ThemeToggle({ darkMode, onToggle }: { darkMode: boolean; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      className={`relative inline-flex h-[30px] w-[52px] items-center rounded-full transition-all duration-300 ${
        darkMode ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-100 hover:bg-gray-200"
      }`}
      aria-label="Toggle theme"
    >
      <span
        className={`inline-flex h-[26px] w-[26px] items-center justify-center rounded-full bg-white shadow-sm transition-all duration-300 ${
          darkMode ? "translate-x-[23px]" : "translate-x-[2px]"
        }`}
      >
        {darkMode ? <Moon className="h-3 w-3 text-gray-600" /> : <Sun className="h-3 w-3 text-amber-500" />}
      </span>
    </button>
  );
}

// ---------------------------------------------------------------------------
// Stat card
// ---------------------------------------------------------------------------

function StatCard({
  label, value, subtitle, icon: Icon, darkMode, delay,
}: {
  label: string; value: string; subtitle: string; icon: React.ElementType; darkMode: boolean; delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4, ease: "easeOut" }}
      className={`rounded-2xl p-5 transition-all duration-300 ${
        darkMode
          ? "bg-gray-900 border border-gray-800"
          : "bg-white border border-gray-200 shadow-[0_1px_3px_0_rgba(0,0,0,0.04)]"
      }`}
    >
      <div className="flex items-center justify-between mb-4">
        <span className={`text-[11px] font-bold tracking-wide uppercase ${
          darkMode ? "text-gray-400" : "text-gray-500"
        }`}>
          {label}
        </span>
        <div className={`flex h-7 w-7 items-center justify-center rounded-lg ${
          darkMode ? "bg-gray-800" : "bg-gray-50"
        }`}>
          <Icon className={`h-3.5 w-3.5 ${darkMode ? "text-gray-400" : "text-gray-500"}`} />
        </div>
      </div>
      <p className={`text-[28px] font-semibold tracking-tight ${darkMode ? "text-white" : "text-gray-900"}`}>
        {value}
      </p>
      <p className={`mt-1 text-[12px] ${darkMode ? "text-gray-500" : "text-gray-400"}`}>
        {subtitle}
      </p>
    </motion.div>
  );
}

// ---------------------------------------------------------------------------
// Pagination
// ---------------------------------------------------------------------------

function Pagination({ page, totalPages, onChange, darkMode }: {
  page: number; totalPages: number; onChange: (p: number) => void; darkMode: boolean;
}) {
  const start = Math.max(1, page - 1);
  const end = Math.min(totalPages, page + 1);
  const visible: number[] = [];
  for (let i = start; i <= end; i++) visible.push(i);

  return (
    <div className="mt-6 flex items-center justify-center gap-1.5">
      <button
        onClick={() => onChange(Math.max(1, page - 1))}
        disabled={page === 1}
        className={`inline-flex h-8 w-8 items-center justify-center rounded-lg transition-all ${
          darkMode
            ? "text-gray-500 hover:text-gray-300 hover:bg-gray-800 disabled:opacity-20 disabled:cursor-not-allowed disabled:hover:bg-transparent"
            : "text-gray-400 hover:text-gray-600 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent"
        }`}
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
      {visible.map((p) => (
        <button
          key={p}
          onClick={() => onChange(p)}
          className={`inline-flex h-8 min-w-[32px] items-center justify-center rounded-lg px-2 text-[13px] font-medium transition-all ${
            p === page
              ? darkMode
                ? "bg-white text-gray-900 shadow-sm"
                : "bg-gray-900 text-white shadow-sm"
              : darkMode
                ? "text-gray-400 hover:text-gray-200 hover:bg-gray-800"
                : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
          }`}
        >
          {p}
        </button>
      ))}
      <button
        onClick={() => onChange(Math.min(totalPages, page + 1))}
        disabled={page === totalPages}
        className={`inline-flex h-8 w-8 items-center justify-center rounded-lg transition-all ${
          darkMode
            ? "text-gray-500 hover:text-gray-300 hover:bg-gray-800 disabled:opacity-20 disabled:cursor-not-allowed disabled:hover:bg-transparent"
            : "text-gray-400 hover:text-gray-600 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent"
        }`}
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Mobile menu
// ---------------------------------------------------------------------------

function MobileMenu({ open, darkMode, onToggleTheme, onLogout, onClose }: {
  open: boolean; darkMode: boolean; onToggleTheme: () => void; onLogout: () => void; onClose: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [onClose]);

  if (!open) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: -4 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.15 }}
      ref={ref}
      className={`absolute right-0 top-full mt-2 w-44 rounded-xl border shadow-lg p-1.5 z-50 ${
        darkMode ? "border-gray-800 bg-gray-900" : "border-gray-200 bg-white"
      }`}
    >
      <button
        onClick={() => { onToggleTheme(); onClose(); }}
        className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] font-medium transition-all ${
          darkMode ? "text-gray-400 hover:text-gray-200 hover:bg-gray-800" : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
        }`}
      >
        {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <div className={`my-1 border-t ${darkMode ? "border-gray-800" : "border-gray-100"}`} />
      <button
        onClick={() => { onLogout(); onClose(); }}
        className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] font-medium transition-all ${
          darkMode ? "text-red-400 hover:bg-red-500/10" : "text-red-500 hover:bg-red-50"
        }`}
      >
        <LogOut className="h-4 w-4" />
        Sign Out
      </button>
    </motion.div>
  );
}

// ---------------------------------------------------------------------------
// Loader
// ---------------------------------------------------------------------------

function FetchLoader() {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-gray-300 border-t-blue-500" />
    </div>
  );
}

// ===========================================================================
// Main dashboard
// ===========================================================================

export default function AdminDashboardPage() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [stats, setStats] = useState<Stats>({ total: 0, unread: 0, thisMonth: 0 });
  const [loading, setLoading] = useState(true);
  const [selectedMessage, setSelectedMessage] = useState<ContactMessage | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    setMounted(true);
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("admin_darkMode");
      if (stored !== null) setDarkMode(stored === "true");
    }
    const checkAuth = async () => {
      try {
        const res = await fetch("/api/auth/session");
        const data = await res.json();
        if (!data.authenticated) {
          sessionStorage.removeItem("admin_authenticated");
          router.replace("/admin/login");
          return;
        }
        // Keep sessionStorage in sync for instant checks
        sessionStorage.setItem("admin_authenticated", "true");
      } catch {
        sessionStorage.removeItem("admin_authenticated");
        router.replace("/admin/login");
        return;
      }
      fetchMessages();
    };
    checkAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const total = Math.max(1, Math.ceil(messages.length / itemsPerPage));
    if (page > total) setPage(1);
  }, [messages, page]);

  const toggleDarkMode = useCallback(() => {
    setDarkMode((prev) => {
      const next = !prev;
      localStorage.setItem("admin_darkMode", String(next));
      return next;
    });
  }, []);

  const fetchMessages = async () => {
    try {
      const res = await fetch("/api/contact");
      const data = await res.json();
      const mapped = (data.messages || []).map((m: Record<string, unknown>) => ({
        id: m.id as string,
        name: m.name as string,
        email: m.email as string,
        company: (m.company as string) || "",
        service: (m.service as string) || "",
        message: (m.message as string) || "",
        createdAt: (m.created_at as string) || (m.createdAt as string),
        read: Boolean(m.read),
      }));
      setMessages(mapped);
      setStats(data.stats || { total: 0, unread: 0, thisMonth: 0 });
    } catch {
      // silent
    } finally {
      setLoading(false);
    }
  };

  const toggleRead = async (id: string, currentRead: boolean) => {
    try {
      await fetch("/api/contact", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, read: !currentRead }),
      });
      setMessages((prev) => prev.map((m) => (m.id === id ? { ...m, read: !currentRead } : m)));
      setStats((prev) => ({
        ...prev,
        unread: currentRead ? prev.unread + 1 : prev.unread - 1,
      }));
    } catch {
      // silent
    }
  };

  const confirmLogout = async () => {
    try {
      await fetch("/api/auth/signout", { method: "POST" });
    } catch {
      // silent
    }
    if (typeof window !== "undefined") {
      sessionStorage.removeItem("admin_authenticated");
    }
    router.replace("/admin/login");
  };

  if (!mounted) return null;

  const totalPages = Math.max(1, Math.ceil(messages.length / itemsPerPage));
  const paginated = messages.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  const txt = (dark: string, light: string) => (darkMode ? dark : light);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? "bg-[#1c1c1e]" : "bg-gray-50"
    }`}>
      {/* ─── Top bar ─── */}
      <header
        className={`sticky top-0 z-30 border-b transition-colors duration-300 ${
          darkMode
            ? "border-gray-800 bg-[#1c1c1e]/80 backdrop-blur-xl"
            : "border-gray-200 bg-white/80 backdrop-blur-xl"
        }`}
      >
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3">
          <div className="flex items-center gap-3">
            <div className={`flex h-8 w-8 items-center justify-center rounded-full ${
              darkMode ? "bg-gray-800" : "bg-gray-100"
            }`}>
              <Image
                src="https://res.cloudinary.com/dahp1ngcc/image/upload/v1779260635/Pngtree_letter_p_icon_8622509_j1t2dg.png"
                alt="KBB Logo"
                width={16}
                height={16}
                className="object-contain shrink-0"
              />
            </div>
            <div className="flex items-baseline gap-2">
              <span className={txt("text-[15px] font-semibold tracking-tight text-white", "text-[15px] font-semibold tracking-tight text-gray-900")}>
                PT KBB
              </span>
              <span className={txt("text-[11px] text-gray-500", "text-[11px] text-gray-400")}>
                Admin
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <ThemeToggle darkMode={darkMode} onToggle={toggleDarkMode} />
            <button
              onClick={() => setShowLogoutConfirm(true)}
              className={txt(
                "inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-[13px] font-medium text-gray-400 hover:text-gray-200 hover:bg-gray-800 transition-all",
                "inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-[13px] font-medium text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-all"
              )}
            >
              <LogOut className="h-3.5 w-3.5" />
              Sign Out
            </button>
          </div>

          <div className="md:hidden relative">
            <button
              onClick={() => setMobileMenuOpen((o) => !o)}
              className={txt(
                "inline-flex items-center justify-center rounded-lg p-2 text-gray-400 hover:text-gray-200 hover:bg-gray-800 transition-all",
                "inline-flex items-center justify-center rounded-lg p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-all"
              )}
            >
              <Menu className="h-5 w-5" />
            </button>
            <MobileMenu
              open={mobileMenuOpen}
              darkMode={darkMode}
              onToggleTheme={toggleDarkMode}
              onLogout={() => setShowLogoutConfirm(true)}
              onClose={() => setMobileMenuOpen(false)}
            />
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 sm:px-5 py-8 sm:py-12">
        {/* ─── Page header ─── */}
        <div className="mb-8 sm:mb-10">
          <h1 className={txt(
            "text-[26px] sm:text-[28px] font-semibold tracking-tight text-white",
            "text-[26px] sm:text-[28px] font-semibold tracking-tight text-gray-900"
          )}>
            Messages
          </h1>
          <p className={txt(
            "mt-1 text-[14px] text-gray-500",
            "mt-1 text-[14px] text-gray-400"
          )}>
            Contact form submissions from your website
          </p>
        </div>

        {/* ─── Stats ─── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
          <StatCard
            label="Total"
            value={String(stats.total)}
            subtitle={`${stats.total} message${stats.total !== 1 ? "s" : ""} received`}
            icon={Inbox}
            darkMode={darkMode}
            delay={0}
          />
          <StatCard
            label="This Month"
            value={String(stats.thisMonth)}
            subtitle={`${stats.thisMonth} new this month`}
            icon={Clock}
            darkMode={darkMode}
            delay={0.05}
          />
        </div>

        {/* ─── Messages list ─── */}
        <div
          className={`rounded-2xl border transition-colors duration-300 overflow-hidden ${
            darkMode ? "border-gray-800 bg-gray-900" : "border-gray-200 bg-white shadow-[0_1px_3px_0_rgba(0,0,0,0.04)]"
          }`}
        >
          {/* Header */}
          <div className={txt(
            "flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-5 sm:px-8 pt-6 sm:pt-8 pb-4 sm:pb-6 border-b border-gray-800",
            "flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-5 sm:px-8 pt-6 sm:pt-8 pb-4 sm:pb-6 border-b border-gray-100"
          )}>
            <div className="flex items-baseline gap-3 flex-wrap pl-2 sm:pl-3">
              <h2 className={txt(
                "text-[15px] sm:text-[16px] font-semibold tracking-tight text-white",
                "text-[15px] sm:text-[16px] font-semibold tracking-tight text-gray-900"
              )}>
                All Messages
              </h2>
              {messages.length > 0 && (
                <>
                  <span className={txt("text-[12px] text-gray-600", "text-[12px] text-gray-300")}>|</span>
                  <p className={txt("text-[12px] sm:text-[13px] text-gray-400", "text-[12px] sm:text-[13px] text-gray-500")}>
                    {messages.length} message{messages.length !== 1 ? "s" : ""}
                  </p>
                </>
              )}
            </div>
            <span className={`self-start sm:self-center inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-[11px] font-medium ${
              darkMode ? "bg-gray-800 text-gray-400" : "bg-gray-100 text-gray-500"
            }`}>
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
              Live
            </span>
          </div>

          {/* Content */}
          {loading ? (
            <FetchLoader />
          ) : messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 px-8">
              <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-full ${
                darkMode ? "bg-gray-800" : "bg-gray-100"
              }`}>
                <Archive className={`h-6 w-6 ${darkMode ? "text-gray-500" : "text-gray-400"}`} />
              </div>
              <h3 className={txt(
                "text-[16px] font-semibold tracking-tight text-white",
                "text-[16px] font-semibold tracking-tight text-gray-900"
              )}>
                No messages yet
              </h3>
              <p className={txt(
                "mt-1.5 text-[14px] max-w-[280px] text-center leading-relaxed text-gray-500",
                "mt-1.5 text-[14px] max-w-[280px] text-center leading-relaxed text-gray-400"
              )}>
                Messages from your contact form will appear here.
              </p>
            </div>
          ) : (
            <div className="divide-y" style={darkMode ? { borderColor: "#1f2937" } : { borderColor: "#f3f4f6" }}>
              {paginated.map((msg, i) => (
                <div
                  key={msg.id}
                  className={`group transition-all duration-200 ${
                    !msg.read
                      ? darkMode ? "bg-gray-800/20" : "bg-blue-50/30"
                      : ""
                  } ${darkMode ? "hover:bg-gray-800/40" : "hover:bg-gray-50"}`}
                >
                  <div className="px-4 sm:px-6 py-3.5 sm:py-5">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4">
                      {/* Status + Name + Email + Time */}
                      <div className="flex items-center gap-2.5 min-w-0 flex-1">
                        <span className={`shrink-0 inline-flex h-2.5 w-2.5 rounded-full transition-colors ${
                          msg.read
                            ? darkMode ? "bg-gray-700" : "bg-gray-300"
                            : "bg-blue-500"
                        }`} />
                        <div className="min-w-0 flex-1">
                          <p className={txt(
                            "text-[14px] sm:text-[15px] font-semibold tracking-tight truncate text-white",
                            "text-[14px] sm:text-[15px] font-semibold tracking-tight truncate text-gray-900"
                          )}>
                            {msg.name}
                          </p>
                          <div className="flex items-center gap-1.5 mt-0.5">
                            <Mail className={`shrink-0 h-3 w-3 ${darkMode ? "text-gray-600" : "text-gray-400"}`} />
                            <span className={txt(
                              "text-[12px] sm:text-[13px] truncate text-gray-500",
                              "text-[12px] sm:text-[13px] truncate text-gray-400"
                            )}>
                              {msg.email}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Time + button */}
                      <div className="flex items-center gap-3 shrink-0 self-start sm:self-center">
                        <span className={`shrink-0 text-[11px] sm:text-[12px] ${darkMode ? "text-gray-600" : "text-gray-400"}`}>
                          {timeAgo(msg.createdAt)}
                        </span>
                        <button
                          onClick={(e) => { e.stopPropagation(); setSelectedMessage(msg); }}
                          className="inline-flex items-center gap-1.5 rounded-full text-[12px] font-semibold transition-all shadow-sm px-3 py-1.5 sm:px-4 sm:py-2"
                          style={{
                            backgroundColor: "#2563eb",
                            color: "#fff",
                          }}
                          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#3b82f6"; }}
                          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#2563eb"; }}
                        >
                          <Eye className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Pagination */}
        {!loading && messages.length > 0 && (
          <Pagination page={page} totalPages={totalPages} onChange={setPage} darkMode={darkMode} />
        )}
      </main>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedMessage && (
          <DetailModal
            msg={selectedMessage}
            onClose={() => setSelectedMessage(null)}
            darkMode={darkMode}
          />
        )}
      </AnimatePresence>

      {/* Logout modal */}
      <AnimatePresence>
        {showLogoutConfirm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className={`w-full max-w-sm rounded-2xl border p-6 shadow-xl mx-4 ${
                darkMode ? "border-gray-800 bg-gray-900" : "border-gray-200 bg-white"
              }`}
            >
              <div className="flex flex-col items-center text-center">
                <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-full ${
                  darkMode ? "bg-red-500/10" : "bg-red-50"
                }`}>
                  <AlertTriangle className={`h-6 w-6 ${darkMode ? "text-red-400" : "text-red-500"}`} />
                </div>
                <h3 className={txt("text-[16px] font-semibold text-white", "text-[16px] font-semibold text-gray-900")}>
                  Sign Out
                </h3>
                <p className={`mt-1.5 text-[13px] leading-relaxed max-w-[260px] ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                  Are you sure you want to sign out?
                </p>
                <div className="mt-6 flex w-full gap-2.5">
                  <button
                    onClick={() => setShowLogoutConfirm(false)}
                    className={`flex-1 rounded-xl border px-4 py-2.5 text-[13px] font-semibold transition-all ${
                      darkMode
                        ? "border-gray-700 text-gray-400 hover:text-gray-200 hover:bg-gray-800"
                        : "border-gray-200 text-gray-600 hover:text-gray-800 hover:bg-gray-50"
                    }`}
                  >
                    Cancel
                  </button>
                  <button
                    onClick={confirmLogout}
                    className="flex-1 rounded-xl bg-red-500 px-4 py-2.5 text-[13px] font-semibold text-white transition-all hover:bg-red-600"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}