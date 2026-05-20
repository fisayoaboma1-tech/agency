"use client"

import React from "react"
import Link from "next/link"
import { motion } from "motion/react"
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
    rating: 4.8,
  },
  {
    name: "Sarah Chen",
    role: "Head of APAC, GreenEnergy Corp",
    content: "The SNI certification process seemed daunting, but SSNI's expertise made it straightforward. They guided us through every step of testing and compliance.",
    rating: 4.5,
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
  const [slideIndex, setSlideIndex] = React.useState(0)
  const [whySlideIndex, setWhySlideIndex] = React.useState(0)
  const [servicesSlideIndex, setServicesSlideIndex] = React.useState(0)
  const [showReviewModal, setShowReviewModal] = React.useState(false)
  const [wordSwap, setWordSwap] = React.useState(false)
  const [swapPhase, setSwapPhase] = React.useState<"idle" | "exiting" | "entering">("idle")
  const [taglineSwap, setTaglineSwap] = React.useState(false)
  const [taglinePhase, setTaglinePhase] = React.useState<"idle" | "exiting" | "entering">("idle")
  const headingWords = ["SIMPLIFYING", "STREAMLINING", "FACILITATING", "EXPEDITING", "ACCELERATING"]
  const taglineWords = ["EXPANSION", "ENTRY", "PENETRATION", "ESTABLISHMENT", "INTEGRATION"]
  const [headingIndex, setHeadingIndex] = React.useState(0)
  const [taglineIndex, setTaglineIndex] = React.useState(0)
  const descriptionPhrases = [
    "End to end support for foreign companies entering the Indonesian market. From company incorporation and licensing to SNI certification and import export compliance, we handle the complexity so you can focus on growth.",
    "Comprehensive assistance for international businesses expanding into Indonesia. From entity registration and permit acquisition to product certification and trade compliance, we manage every detail so you can concentrate on scaling.",
    "Full service facilitation for overseas enterprises entering the Indonesian economy. From legal entity formation and regulatory licensing to SNI product approval and customs clearance, we take care of it all for you.",
    "Complete guidance for foreign firms establishing operations in Indonesia. From company setup and government permits to certification and cross border trade compliance, we simplify the entire journey for your success.",
    "Total support for global companies integrating into the Indonesian market. From business registration and license procurement to SNI certification and import export regulation, we remove the obstacles so you can thrive.",
  ]
  const [descriptionIndex, setDescriptionIndex] = React.useState(0)

  // Image slideshow for contact section
  const contactImages = [
    "https://res.cloudinary.com/dahp1ngcc/image/upload/v1779191726/Kelly_Talking_to_herself_gvknz9.jpg",
    "https://res.cloudinary.com/dahp1ngcc/image/upload/v1779191726/download_xuc0pn.jpg",
  ]

  // Why Choose Us background slideshow images
  const whyChooseUsImages = [
    "https://res.cloudinary.com/dahp1ngcc/image/upload/v1779193149/download_1_lkb9cw.jpg",
    "https://res.cloudinary.com/dahp1ngcc/image/upload/v1779193149/work_wmuklk.jpg",
    "https://res.cloudinary.com/dahp1ngcc/image/upload/v1779193149/office_zoadp7.jpg",
  ]

  React.useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % contactImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [contactImages.length])

  // Why Choose Us slideshow interval
  React.useEffect(() => {
    const interval = setInterval(() => {
      setWhySlideIndex((prev) => (prev + 1) % whyChooseUsImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [whyChooseUsImages.length])

  // Services section background slideshow images
  const servicesImages = [
    "https://res.cloudinary.com/dahp1ngcc/image/upload/v1779251980/download_10_truttr.jpg",
    "https://res.cloudinary.com/dahp1ngcc/image/upload/v1779251981/download_9_gnz2nz.jpg",
    "https://res.cloudinary.com/dahp1ngcc/image/upload/v1779251980/download_11_d2p9on.jpg",
  ]

  // Services section slideshow interval
  React.useEffect(() => {
    const interval = setInterval(() => {
      setServicesSlideIndex((prev) => (prev + 1) % servicesImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [servicesImages.length])

  // Heading word animation: cycles through 5 synonyms every 6s
  React.useEffect(() => {
    const cycle = setInterval(() => {
      setSwapPhase("exiting")
      setTimeout(() => {
        setHeadingIndex((prev) => (prev + 1) % headingWords.length)
        setWordSwap((prev) => !prev)
        setSwapPhase("entering")
        setTimeout(() => {
          setSwapPhase("idle")
        }, 800)
      }, 600)
    }, 6000)
    return () => clearInterval(cycle)
  }, [headingWords.length])

  // Tagline animation: cycles through 5 synonyms every 6s (offset so they don't sync together)
  React.useEffect(() => {
    const cycle = setInterval(() => {
      setTaglinePhase("exiting")
      setTimeout(() => {
        setTaglineIndex((prev) => (prev + 1) % taglineWords.length)
        setTaglineSwap((prev) => !prev)
        setTaglinePhase("entering")
        setTimeout(() => {
          setTaglinePhase("idle")
        }, 800)
      }, 600)
    }, 6000)
    return () => clearInterval(cycle)
  }, [taglineWords.length])

  // Description text swap (no animation): changes the paragraph text every 8s
  React.useEffect(() => {
    const cycle = setInterval(() => {
      setDescriptionIndex((prev) => (prev + 1) % descriptionPhrases.length)
    }, 8000)
    return () => clearInterval(cycle)
  }, [descriptionPhrases.length])

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none select-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            className="size-full object-contain"
            src="https://res.cloudinary.com/dahp1ngcc/video/upload/v1779166821/From_KlickPin_CF_Beautiful_Short_Hair_Inspiration_on_a_Budget_-_Pin-337277459614765000_m3jhge.mp4"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-900/50 to-slate-950/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120]/60 via-transparent to-slate-950/30" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-12 lg:px-16 pt-6 sm:pt-8">
          <div className="w-full lg:max-w-[45%] xl:max-w-[42%]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 sm:mb-8  inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.08] px-3.5 sm:px-4 py-1.5 text-[10px] sm:text-xs font-medium tracking-wider uppercase text-white/60 backdrop-blur-sm shadow-lg shadow-black/20"
            >
              <span className="flex size-1.5 rounded-full bg-sky-400 shadow-lg shadow-sky-400/50" />
              Trusted by 50+ international companies
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-[3.4rem] xl:text-[3.75rem] font-black tracking-tight text-white leading-[1.05] text-left min-h-[1.2em]"
            >
              <motion.span
                className="block font-black [text-shadow:0_0_2px_#fff,0_0_4px_rgba(255,255,255,0.3),0_0_8px_rgba(255,255,255,0.1)]"
                animate={
                  swapPhase === "exiting"
                    ? { x: 200, opacity: 0 }
                    : swapPhase === "entering"
                    ? { x: -200, opacity: 0 }
                    : { x: 0, opacity: 1 }
                }
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {headingWords[headingIndex]} BUSINESS
              </motion.span>
              <motion.span
                className="block mt-1 sm:mt-2 bg-gradient-to-r from-sky-400 via-cyan-300 to-sky-400 bg-clip-text text-transparent"
                animate={
                  taglinePhase === "exiting"
                    ? { x: 200, opacity: 0 }
                    : taglinePhase === "entering"
                    ? { x: -200, opacity: 0 }
                    : { x: 0, opacity: 1 }
                }
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {taglineWords[taglineIndex]} INTO INDONESIA
              </motion.span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-5 sm:mt-6"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-1.5 sm:px-5 sm:py-2 shadow-inner shadow-white/5">
                <span className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-white/70">
                  <span className="text-white/70 font-medium">Specializing in</span>
                  <span className="text-white/30">|</span>
                  <span className="font-medium text-white">Market Entry Strategy</span>
                </span>
              </div>
            </motion.div>

            <p
              className="mt-6 sm:mt-8 text-sm sm:text-base lg:text-lg leading-relaxed text-white/60 font-light tracking-wide text-left max-w-xl"
            >
              {descriptionPhrases[descriptionIndex]}
            </p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-start gap-3 sm:gap-4"
            >
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-b from-sky-500 to-sky-600 px-6 py-3.5 sm:px-7 sm:py-4 text-sm sm:text-base font-semibold text-white shadow-lg shadow-sky-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/30 hover:-translate-y-0.5 active:translate-y-0 overflow-hidden w-full sm:w-auto justify-center"
              >
                <span className="relative z-10">Book a Consultation</span>
                <span className="relative z-10 flex size-5 sm:size-6 items-center justify-center rounded-full bg-white/20 text-white transition-all duration-300 group-hover:scale-110">
                  <ArrowRight className="size-3 sm:size-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
              <a
                href="tel:+6285216412782"
                className="group inline-flex items-center gap-2.5 rounded-xl border border-white/15 bg-white/[0.06] px-6 py-3.5 sm:px-7 sm:py-4 text-sm sm:text-base font-medium text-white/70 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/30 hover:text-white w-full sm:w-auto justify-center"
              >
                <span className="relative flex size-2.5 sm:size-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex size-2.5 sm:size-3 rounded-full bg-green-500" />
                </span>
                Call +62 852 1641 2782
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-12 sm:mt-16 flex flex-wrap items-center gap-x-6 sm:gap-x-10 gap-y-3 text-white/30 text-[11px] sm:text-xs tracking-widest uppercase"
            >
              <span className="flex items-center gap-2">
                <Building2 className="size-3 sm:size-3.5" />
                PT PMA
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck className="size-3 sm:size-3.5" />
                SNI Certified
              </span>
              <span className="flex items-center gap-2">
                <Globe className="size-3 sm:size-3.5" />
                OSS-RBA
              </span>
              <span className="flex items-center gap-2">
                <FileCheck className="size-3 sm:size-3.5" />
                BKPM
              </span>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0b1120] via-[#0b1120]/70 to-transparent" />
      </section>

      {/* Stats Bar */}
      <section className="relative py-12 bg-gradient-to-b from-[#0b1120] via-[#111827]/80 to-[#0b1120] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-sky-500/[0.02] to-transparent pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
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
        {/* Transition blend between Stats and Services */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent via-[#0b1120]/50 to-[#0b1120]" />
      </section>

      {/* Services Overview */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#0b1120] to-transparent z-20" />
        {/* Image background slideshow */}
        <div className="absolute inset-0 pointer-events-none select-none">
          {servicesImages.map((src, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                i === servicesSlideIndex ? "opacity-100" : "opacity-0"
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
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b1120]/85 via-[#0b1120]/70 to-[#0b1120]/85" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120]/80 via-transparent to-[#0b1120]/30" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b1120]/80 via-transparent to-[#0b1120]/80" />
        </div>
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex items-center justify-center gap-3 mb-3">
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
          <div className="-mt-17 sm:mt-16 grid gap-5 sm:gap-6 lg:gap-8 grid-cols-1 sm:grid-cols-2">
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
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none select-none">
          {whyChooseUsImages.map((src, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                i === whySlideIndex ? "opacity-100" : "opacity-0"
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
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/70 to-slate-950/85" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120]/80 via-transparent to-[#0b1120]/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b1120]/60 via-transparent to-[#0b1120]/80" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
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
      <section className="relative py-24 lg:py-32 bg-gradient-to-b from-slate-900 via-slate-950 to-[#0b1120] overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#0b1120] to-transparent" />
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
                <div className="flex gap-0.5 mb-4 relative">
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`size-4 ${
                          star <= Math.floor(t.rating)
                            ? "fill-amber-400 text-amber-400"
                            : star === Math.ceil(t.rating) && t.rating % 1 >= 0.3
                            ? "fill-amber-400/50 text-amber-400/50"
                            : "fill-white/10 text-white/10"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-[11px] font-medium text-white/30 tracking-tight">{t.rating.toFixed(1)}</span>
                </div>
                <p className="text-sm text-white/50 leading-relaxed">&ldquo;{t.content}&rdquo;</p>
                <div className="mt-6 border-t border-white/10 pt-4">
                  <div className="font-semibold text-sm text-white">{t.name}</div>
                  <div className="text-xs text-white/40">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <button
              onClick={() => setShowReviewModal(true)}
              className="group inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.06] px-6 py-3 text-sm font-medium text-white/60 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/30 hover:text-white shadow-lg shadow-black/20"
            >
              <Star className="size-4" />
              Leave a Review
            </button>
          </div>
          {/* Review Modal */}
          {showReviewModal && (
            <div
              className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
              onClick={() => setShowReviewModal(false)}
            >
              <div
                className="relative max-w-md w-full rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900 to-[#0b1120] p-8 shadow-2xl shadow-black/50"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setShowReviewModal(false)}
                  className="absolute top-4 right-4 flex size-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-white/40 hover:text-white/80 transition-colors text-lg leading-none"
                >
                  &times;
                </button>
                <div className="mb-6 flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400/20 to-yellow-500/10 border border-amber-400/20 mx-auto">
                  <Star className="size-7 text-amber-300" />
                </div>
                <h3 className="text-center text-lg font-semibold text-white">Review Access Restricted</h3>
                <p className="mt-3 text-center text-sm text-white/50 leading-relaxed">
                  You can't drop a review if you haven't worked with us. Please complete a service engagement with SSNI first — we'd love to hear your feedback afterward.
                </p>
                <div className="mt-6 text-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-b from-sky-500 to-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/30"
                    onClick={() => setShowReviewModal(false)}
                  >
                    Start a Service
                    <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
        {/* Transition blend between Testimonials and FAQ */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-[#0b1120]" />
      </section>

      {/* FAQ Section */}
      <section className="relative py-24 lg:py-32 bg-gradient-to-b from-slate-900 via-slate-950 to-[#0b1120] overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#0b1120] to-transparent" />
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
              24 hour response
            </span>
          </div>
        </div>
      </section>
    </>
  )
}