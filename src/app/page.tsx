"use client"

import React from "react"
import Link from "next/link"
import {
  ArrowRight,
  CheckCircle,
  Building2,
  FileCheck,
  Globe,
  ShieldCheck,
  Users,
  Star,
  ChevronRight,
  Phone,
  Quote,
  Sparkles,
  Zap,
  Target,
  BarChart3,
  BookHeart,
} from "lucide-react"

const services = [
  {
    title: "Company Incorporation",
    description: "Register your legal entity in Indonesia with ease. We handle NIB, OSS registration, and full legal entity setup.",
    icon: Building2,
    href: "/services#incorporation",
    items: ["Legal entity registration", "Business Identification Number (NIB)", "OSS-RBA system setup", "Local operations setup"],
  },
  {
    title: "Business Licenses & Permits",
    description: "Navigate Indonesia's complex licensing landscape. We secure industry-specific permits and government approvals.",
    icon: FileCheck,
    href: "/services#licenses",
    items: ["Industry-specific permits", "BKPM / Investment Ministry approvals", "Construction, manufacturing, trade licenses", "Ongoing compliance support"],
  },
  {
    title: "Import / Export Compliance",
    description: "Streamline your cross-border trade. We handle customs documentation and regulatory compliance for goods entering and leaving Indonesia.",
    icon: Globe,
    href: "/services#import-export",
    items: ["Import documentation & clearance", "Export compliance", "Customs classification & valuation", "Regulatory advisory"],
  },
  {
    title: "Product Certification (SNI)",
    description: "Get your products approved for the Indonesian market. Comprehensive SNI certification from testing to issuance.",
    icon: ShieldCheck,
    href: "/services#certification",
    items: ["Product testing & inspection", "Factory inspection", "Compliance documentation", "Certification issuance"],
  },
  {
    title: "Work Permits & Immigration",
    description: "Enable your foreign staff to work legally in Indonesia. Complete work permit and immigration document handling.",
    icon: Users,
    href: "/services#work-permits",
    items: ["Work permit (IMTA) processing", "Stay permits (KITAS/KITAP)", "Employee legal documentation", "Expatriate planning"],
  },
]

const testimonials = [
  {
    name: "Alexandre Dubois",
    role: "CEO, EuroTech Manufacturing",
    content: "SSNI made our company registration in Indonesia completely seamless. Their team handled everything from NIB to industry permits. We were operational in under 3 months.",
    rating: 5,
  },
  {
    name: "Sarah Chen",
    role: "Head of APAC, GreenEnergy Corp",
    content: "The SNI certification process seemed daunting, but SSNI's expertise made it straightforward. They guided us through every step of testing and compliance.",
    rating: 5,
  },
  {
    name: "Michael Torres",
    role: "Director, Pacific Trade Group",
    content: "We needed import/export compliance support urgently. SSNI responded within hours and had our documentation ready before the deadline. Highly professional.",
    rating: 5,
  },
]

const stats = [
  { value: "50+", label: "Foreign Companies Served" },
  { value: "98%", label: "Success Rate" },
  { value: "5+", label: "Years of Expertise" },
  { value: "100%", label: "Compliance Guaranteed" },
]

const faqs = [
  {
    q: "How long does company registration in Indonesia take?",
    a: "Typically 2-4 weeks for a standard PT (limited liability company) establishment. More complex structures may take 6-8 weeks.",
  },
  {
    q: "What is SNI certification and is it mandatory?",
    a: "SNI (Standar Nasional Indonesia) is mandatory certification for many products sold in Indonesia. We handle the full process from testing to issuance.",
  },
  {
    q: "Can a foreigner fully own a company in Indonesia?",
    a: "Yes, for many business sectors under the Positive Investment List. We'll advise on your specific case and help structure the entity accordingly.",
  },
  {
    q: "What documents are needed to start the process?",
    a: "Basic requirements include passport copies, company profile, business plan, and board of directors' information. We'll provide a complete checklist during consultation.",
  },
  {
    q: "How much does it cost to set up a company in Indonesia?",
    a: "Costs vary based on company type, sector, and complexity. Contact us for a tailored quote after our initial consultation.",
  },
]

export default function HomePage() {
  const [showLoader, setShowLoader] = React.useState(true)
  const [slideIndex, setSlideIndex] = React.useState(0)

  React.useEffect(() => {
    const timer = setTimeout(() => setShowLoader(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  // Image slideshow for contact section
  const contactImages = [
    "https://res.cloudinary.com/dahp1ngcc/image/upload/v1779191726/Kelly_Talking_to_herself_gvknz9.jpg",
    "https://res.cloudinary.com/dahp1ngcc/image/upload/v1779191726/download_xuc0pn.jpg",
  ]

  React.useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % contactImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [contactImages.length])

  if (showLoader) {
    return (
      <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-slate-950 to-[#0b1120]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-72 rounded-full bg-sky-500/10 blur-3xl pointer-events-none" />
        <div className="relative mb-12 flex flex-col items-center gap-3">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-xl bg-gradient-to-br from-sky-400/20 to-blue-500/20 border border-sky-400/30 flex items-center justify-center shadow-lg shadow-sky-500/10">
              <svg className="size-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-bold text-cyan-300">PT SSNI</span>
              <span className="text-[10px] text-sky-300/70">Solusi Sertifikasi Nasional</span>
            </div>
          </div>
        </div>
        <div className="loader mb-8" />
        <div className="flex items-center gap-3">
          <div className="flex flex-col size-7 shrink-0 rounded-sm shadow-lg shadow-black/30 overflow-hidden ring-1 ring-white/10">
            <div className="h-1/2 bg-red-600" />
            <div className="h-1/2 bg-white" />
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-sm font-medium tracking-[0.2em] uppercase text-white/40">Memuat</span>
            <span className="flex gap-0.5">
              <span className="size-1.5 rounded-full bg-red-500 animate-ping" />
              <span className="size-1.5 rounded-full bg-white animate-ping" style={{ animationDelay: "0.2s" }} />
              <span className="size-1.5 rounded-full bg-red-500 animate-ping" style={{ animationDelay: "0.4s" }} />
              <span className="size-1.5 rounded-full bg-white animate-ping" style={{ animationDelay: "0.6s" }} />
              <span className="size-1.5 rounded-full bg-red-500 animate-ping" style={{ animationDelay: "0.8s" }} />
            </span>
          </div>
        </div>
        <p className="mt-6 text-xs text-white/20 tracking-wider text-center max-w-[200px] leading-relaxed">
          Mitra terpercaya Anda untuk masuk pasar Indonesia
        </p>
        <div className="absolute bottom-12 flex items-center gap-2 text-[10px] tracking-widest uppercase text-white/10">
          <svg className="size-3 animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
          </svg>
          <span>Memperbarui</span>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none select-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            className="size-full object-cover"
            src="https://res.cloudinary.com/dahp1ngcc/video/upload/v1779166821/From_KlickPin_CF_Beautiful_Short_Hair_Inspiration_on_a_Budget_-_Pin-337277459614765000_m3jhge.mp4"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/70 to-slate-950/90" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120]/90 via-transparent to-slate-950/50" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 mt-26 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.08] px-4 sm:px-5 py-1.5 sm:py-2 text-[10px] sm:text-xs font-medium tracking-wider uppercase text-white/60 backdrop-blur-sm shadow-lg shadow-black/20">
              <span className="flex size-1.5 rounded-full bg-sky-400 shadow-lg shadow-sky-400/50" />
              Trusted by 50+ international companies
            </div>
            <h1 className="relative text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
              <span className="block">SIMPLIFYING BUSINESS</span>
              <div className="h-2" />
              <span className="relative block">
                <span className="relative z-10 bg-gradient-to-r from-sky-400 via-cyan-300 to-sky-400 bg-clip-text text-transparent">
                  EXPANSION INTO INDONESIA
                </span>
              </span>
            </h1>
            <div className="mt-8 flex items-center justify-center">
              <div className="rounded-full bg-white/5 border border-white/10 px-4 py-1.5 sm:px-6 sm:py-2 shadow-inner shadow-white/5">
                <span className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-white/70">
                  <span className="text-white/70 font-medium">Specializing in</span>
                  <span className="text-white/30">|</span>
                  <span className="font-medium text-white">Market Entry Strategy</span>
                </span>
              </div>
            </div>
            <div className="relative mx-auto mt-10 max-w-2xl">
              <div className="absolute -top-4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-white/70 font-light tracking-wide">
                End-to-end support for foreign companies entering the Indonesian market. From company incorporation and licensing to SNI certification and import/export compliance — we handle the complexity so you can focus on growth.
              </p>
              <div className="absolute -bottom-4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </div>
            <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-3 rounded-xl bg-gradient-to-b from-sky-500 to-sky-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-sky-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/30 active:translate-y-0 overflow-hidden"
              >
                <span className="relative z-10">Book a Consultation</span>
                <span className="relative z-10 flex size-6 items-center justify-center rounded-full bg-white/20 text-white transition-all duration-300">
                  <ArrowRight className="size-3.5" />
                </span>
              </Link>
              <a
                href="tel:+6285216412782"
                className="group inline-flex items-center gap-3 rounded-xl border border-white/15 bg-white/[0.06] px-8 py-4 text-base font-medium text-white/70 backdrop-blur-sm transition-all duration-300 active:translate-y-0"
              >
                <span className="relative flex size-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex size-3 rounded-full bg-green-500" />
                </span>
                Call +62 852 1641 2782
              </a>
            </div>
            <div className="mt-16 flex items-center justify-center gap-8 sm:gap-12 text-white/30 text-xs tracking-widest uppercase">
              <span className="flex items-center gap-2">
                <Building2 className="size-3.5" />
                PT PMA
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck className="size-3.5" />
                SNI Certified
              </span>
              <span className="flex items-center gap-2">
                <Globe className="size-3.5" />
                OSS-RBA
              </span>
              <span className="hidden sm:flex items-center gap-2">
                <FileCheck className="size-3.5" />
                BKPM
              </span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0b1120] to-transparent" />
      </section>

      {/* Stats Bar */}
      <section className="border-y border-white/10 bg-gradient-to-br from-[#0b1120] via-[#111827] to-[#0b1120] overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-b from-white to-slate-300 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm text-white/40">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-[#0b1120] via-slate-950 to-[#0b1120] overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-10 sm:w-16 bg-gradient-to-r from-transparent via-sky-400/40 to-transparent" />
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.08] px-4 sm:px-5 py-1.5 sm:py-2 text-[10px] sm:text-xs font-medium tracking-wider uppercase text-white/60 backdrop-blur-sm shadow-lg shadow-black/20">
                <span className="flex size-1.5 rounded-full bg-sky-400 shadow-lg shadow-sky-400/50" />
                Our Services
              </span>
              <div className="h-px w-10 sm:w-16 bg-gradient-to-r from-transparent via-sky-400/40 to-transparent" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
              Comprehensive Market Entry Solutions
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-white/40 max-w-xl mx-auto">
              Everything you need to establish and grow your business in Indonesia — all under one roof.
            </p>
          </div>
          <div className="mt-12 sm:mt-16 grid gap-5 sm:gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <div
                  key={service.title}
                  className="group relative rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] backdrop-blur-xl p-6 sm:p-7 shadow-xl transition-all duration-500 hover:border-white/20 hover:-translate-y-0.5"
                >
                  <div className="mb-5 flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400/20 to-blue-500/10 border border-sky-400/20 group-hover:border-sky-400/30 transition-colors">
                    <Icon className="size-6 text-sky-300" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                  <p className="mt-2 text-sm text-white/50 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="mt-5 space-y-2.5 border-t border-white/10 pt-5">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/50">
                        <CheckCircle className="mt-0.5 size-4 shrink-0 text-sky-400/80" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={service.href}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-sky-300 hover:text-white transition-colors"
                  >
                    Learn more <ChevronRight className="size-3.5" />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-slate-900 via-slate-950 to-[#0b1120] overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-10 sm:w-16 bg-gradient-to-r from-transparent via-sky-400/40 to-transparent" />
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.08] px-4 sm:px-5 py-1.5 sm:py-2 text-[10px] sm:text-xs font-medium tracking-wider uppercase text-white/60 backdrop-blur-sm shadow-lg shadow-black/20">
                <span className="flex size-1.5 rounded-full bg-sky-400 shadow-lg shadow-sky-400/50" />
                Why Choose Us
              </span>
              <div className="h-px w-10 sm:w-16 bg-gradient-to-r from-transparent via-sky-400/40 to-transparent" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
              Why Companies Trust SSNI
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-white/40 max-w-xl mx-auto">
              We combine deep knowledge of Indonesia's regulatory environment with practical execution to deliver results.
            </p>
          </div>
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div className="space-y-5 sm:space-y-6">
              {[
                { title: "Regulatory Expertise", desc: "Deep understanding of Indonesian laws, BKPM requirements, and SNI standards.", icon: ShieldCheck },
                { title: "One-Stop Partnership", desc: "From company setup to product certification — no need to juggle multiple vendors.", icon: Zap },
                { title: "Proven Track Record", desc: "50+ international companies successfully established in Indonesia.", icon: BarChart3 },
                { title: "Ongoing Support", desc: "We don't just set you up; we stay with you for compliance and renewals.", icon: Users },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.title}
                    className="group flex gap-4 rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] backdrop-blur-xl p-5 shadow-xl transition-all duration-500 hover:border-white/20"
                  >
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400/20 to-blue-500/10 border border-sky-400/20 group-hover:border-sky-400/30 transition-colors">
                      <Icon className="size-6 text-sky-300" />
                    </div>
                    <div className="pt-1">
                      <h3 className="font-semibold text-white">{item.title}</h3>
                      <p className="mt-1 text-sm text-white/50 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
            <div>
              <div className="rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] backdrop-blur-xl p-6 sm:p-8 shadow-xl transition-all duration-500 hover:border-white/20">
                <h3 className="text-xl font-semibold text-white">Our Service Process</h3>
                <div className="mt-6 space-y-6">
                  {[
                    { step: "01", title: "Consultation", desc: "We discuss your needs and assess requirements." },
                    { step: "02", title: "Document Collection", desc: "You submit documents; we review and prepare filings." },
                    { step: "03", title: "Application & Processing", desc: "We handle all submissions with Indonesian authorities." },
                    { step: "04", title: "Approval & Support", desc: "Certification issued, with ongoing compliance support." },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-sky-400/20 to-blue-500/10 border border-sky-400/20 font-bold text-sky-300 text-sm shadow-md">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-medium text-white">{item.title}</h4>
                        <p className="text-sm text-white/50">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <Link
                    href="/process"
                    className="group relative flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-sky-500 to-sky-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-sky-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/30 overflow-hidden"
                  >
                    <span className="relative z-10">View Full Process</span>
                    <span className="relative z-10 flex size-5 items-center justify-center rounded-full bg-white/20 transition-all duration-300">
                      <ChevronRight className="size-3.5" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-slate-900 via-slate-950 to-[#0b1120] overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-10 sm:w-16 bg-gradient-to-r from-transparent via-sky-400/40 to-transparent" />
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.08] px-4 sm:px-5 py-1.5 sm:py-2 text-[10px] sm:text-xs font-medium tracking-wider uppercase text-white/60 backdrop-blur-sm shadow-lg shadow-black/20">
                <span className="flex size-1.5 rounded-full bg-sky-400 shadow-lg shadow-sky-400/50" />
                Testimonials
              </span>
              <div className="h-px w-10 sm:w-16 bg-gradient-to-r from-transparent via-sky-400/40 to-transparent" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
              What Our Clients Say
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-white/40 max-w-xl mx-auto">
              Feedback from international companies we've helped enter the Indonesian market.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:gap-6 lg:gap-8 md:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="group relative rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] backdrop-blur-xl p-6 sm:p-7 shadow-xl transition-all duration-500 hover:border-white/20"
              >
                <Quote className="size-8 text-sky-400/30 mb-4" />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="size-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-white/50 leading-relaxed">&ldquo;{t.content}&rdquo;</p>
                <div className="mt-6 border-t border-white/10 pt-4">
                  <div className="font-semibold text-sm text-white">{t.name}</div>
                  <div className="text-xs text-white/40">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-slate-900 via-slate-950 to-[#0b1120] overflow-hidden">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-10 sm:w-16 bg-gradient-to-r from-transparent via-sky-400/40 to-transparent" />
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.08] px-4 sm:px-5 py-1.5 sm:py-2 text-[10px] sm:text-xs font-medium tracking-wider uppercase text-white/60 backdrop-blur-sm shadow-lg shadow-black/20">
                <span className="flex size-1.5 rounded-full bg-sky-400 shadow-lg shadow-sky-400/50" />
                FAQ
              </span>
              <div className="h-px w-10 sm:w-16 bg-gradient-to-r from-transparent via-sky-400/40 to-transparent" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-white/40 max-w-xl mx-auto">
              Common questions about setting up a business in Indonesia.
            </p>
          </div>
          <div className="mt-12 space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] backdrop-blur-xl shadow-xl transition-all duration-300 [&[open]]:border-white/20 hover:border-white/20"
              >
                <summary className="flex cursor-pointer items-center justify-between p-5 font-medium text-white">
                  <span>{faq.q}</span>
                  <ChevronRight className="size-4 shrink-0 transition-transform duration-300 group-open:rotate-90 text-sky-400" />
                </summary>
                <div className="border-t border-white/10 px-5 pb-5 pt-3">
                  <p className="text-sm text-white/50 leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
          <div className="mt-10 text-center">
            <p className="text-sm text-white/40">
              Still have questions?{" "}
              <Link href="/contact" className="font-medium text-sky-300 hover:text-white transition-colors">
                Contact us
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Get in Touch / Contact Us Section */}
      <section className="relative py-28 lg:py-36 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none select-none">
          {contactImages.map((src, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                i === slideIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={src}
                alt=""
                className="size-full object-cover"
                aria-hidden="true"
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120]/80 via-transparent to-[#0b1120]/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b1120]/60 via-transparent to-[#0b1120]/80" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center lg:px-8">
          <div className="mb-8 sm:mb-10 flex items-center justify-center gap-3 sm:gap-4">
            <div className="h-px w-10 sm:w-16 bg-gradient-to-r from-transparent via-sky-400/40 to-transparent" />
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.08] px-4 sm:px-5 py-1.5 sm:py-2 text-[10px] sm:text-xs font-medium tracking-wider uppercase text-white/60 backdrop-blur-sm shadow-lg shadow-black/20">
              <span className="flex size-1.5 rounded-full bg-sky-400 shadow-lg shadow-sky-400/50" />
              Get in Touch
            </span>
            <div className="h-px w-10 sm:w-16 bg-gradient-to-r from-transparent via-sky-400/40 to-transparent" />
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]">
            <span className="bg-gradient-to-r from-sky-200 via-white to-sky-100 bg-clip-text text-transparent">
              Contact Us
            </span>
          </h2>
          <p className="mx-auto mt-6 sm:mt-8 max-w-2xl text-xs sm:text-sm leading-relaxed text-white/40 max-w-2xl mx-auto">
            Ready to expand your business into Indonesia? Get in touch with our team for a free consultation. We typically respond within 24 hours.
          </p>
          <div className="mt-10 sm:mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-3 rounded-xl bg-gradient-to-b from-sky-500 to-sky-600 px-8 sm:px-9 py-4 sm:py-4.5 text-base font-semibold text-white shadow-lg shadow-sky-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/30 overflow-hidden"
            >
              <span className="relative z-10">Book Free Consultation</span>
              <span className="relative z-10 flex size-5 sm:size-6 items-center justify-center rounded-full bg-white/20 text-white transition-all duration-300">
                <ArrowRight className="size-3.5" />
              </span>
            </Link>
            <a
              href="https://wa.me/6285216412782"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-xl border border-white/15 bg-white/[0.06] px-8 sm:px-9 py-4 sm:py-4.5 text-base font-medium text-white/70 backdrop-blur-sm transition-all duration-300 shadow-lg shadow-black/20"
            >
              <div className="flex size-5 sm:size-6 items-center justify-center rounded-full bg-white/10 transition-colors">
                <Phone className="size-3.5" />
              </div>
              Chat on WhatsApp
            </a>
          </div>
          <div className="mt-10 sm:mt-12 flex items-center justify-center gap-4 sm:gap-6 text-[11px] sm:text-xs text-white/40">
            <span className="flex items-center gap-1.5">
              <span className="flex size-1.5 rounded-full bg-emerald-400/70" />
              No commitment required
            </span>
            <span className="w-px h-3 bg-white/20" />
            <span className="flex items-center gap-1.5">
              <span className="flex size-1.5 rounded-full bg-emerald-400/70" />
              Free consultation
            </span>
            <span className="w-px h-3 bg-white/20" />
            <span className="flex items-center gap-1.5">
              <span className="flex size-1.5 rounded-full bg-emerald-400/70" />
              24-hour response
            </span>
          </div>
        </div>
      </section>
    </>
  )
}