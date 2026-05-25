"use client"

import React from "react"
import Link from "next/link"
import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import { ArrowRight, PhoneCall, FileText, Send, Building2, Award, RefreshCw, CheckCircle, Phone } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Initial Consultation",
    description: "We start by understanding your business goals, the type of entity you need, and the specific regulatory requirements for your industry.",
    details: [
      "Free consultation call or meeting",
      "Needs assessment & requirement analysis",
      "Timeline and cost estimation",
      "Service agreement & engagement letter",
    ],
    icon: PhoneCall,
    duration: "1-2 days",
  },
  {
    number: "02",
    title: "Document Collection & Review",
    description: "You provide the necessary documents, and our team reviews them for completeness and compliance with Indonesian regulatory standards.",
    details: [
      "Detailed document checklist provided",
      "Corporate documents (passports, etc.)",
      "Business plans & supporting documentation",
      "Document verification & gap analysis",
    ],
    icon: FileText,
    duration: "3-7 days",
  },
  {
    number: "03",
    title: "Application & Submission",
    description: "We prepare and submit all applications to the relevant Indonesian authorities, including OSS-RBA, BKPM, ministries, and certification bodies.",
    details: [
      "Complete application preparation",
      "Submission via OSS-RBA system",
      "Coordination with government agencies",
      "Regular status updates provided",
    ],
    icon: Send,
    duration: "1-4 weeks",
  },
  {
    number: "04",
    title: "Government Processing",
    description: "Indonesian authorities review and process your applications. We actively follow up to ensure timely approval and address any queries.",
    details: [
      "Active follow-up with agencies",
      "Response to information requests",
      "Expedited processing where possible",
      "Status tracking & client updates",
    ],
    icon: Building2,
    duration: "2-8 weeks",
  },
  {
    number: "05",
    title: "Testing & Inspection (if applicable)",
    description: "For SNI certification, we coordinate product testing with accredited laboratories and arrange factory inspections as required.",
    details: [
      "Accredited lab coordination",
      "Product sample management",
      "Factory inspection scheduling",
      "Quality system documentation review",
    ],
    icon: Award,
    duration: "4-12 weeks",
  },
  {
    number: "06",
    title: "Approval & Ongoing Support",
    description: "Once approved, we deliver all certificates and documentation. Our team remains available for compliance monitoring, renewals, and ongoing advisory support.",
    details: [
      "Certificate & document delivery",
      "Compliance monitoring setup",
      "Renewal management",
      "Ongoing regulatory advisory",
    ],
    icon: RefreshCw,
    duration: "Continuous",
  },
]

export default function ProcessPage() {
  const [slideIndex, setSlideIndex] = React.useState(0)
  const [summarySlide, setSummarySlide] = React.useState(0)

  const contactImages = [
    "https://res.cloudinary.com/dahp1ngcc/image/upload/v1779247133/3_12_2025_vbct7a.jpg",
    "https://res.cloudinary.com/dahp1ngcc/image/upload/v1779247133/download_7_tchhj2.jpg",
  ]

  const summaryImages = [
    "https://res.cloudinary.com/dahp1ngcc/image/upload/v1779247133/download_7_tchhj2.jpg",
    "https://res.cloudinary.com/dahp1ngcc/image/upload/v1779247133/3_12_2025_vbct7a.jpg",
    "https://res.cloudinary.com/dahp1ngcc/image/upload/v1779247133/download_8_bpvlpo.jpg",
  ]

  React.useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % contactImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [contactImages.length])

  React.useEffect(() => {
    const interval = setInterval(() => {
      setSummarySlide((prev) => (prev + 1) % summaryImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [summaryImages.length])

  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 pb-16 sm:py-24 lg:py-28 overflow-hidden">
        {/* Slideshow background images */}
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
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.08] px-4 sm:px-5 py-1.5 sm:py-2 text-[10px] sm:text-xs font-medium tracking-wider uppercase text-white/60 backdrop-blur-sm shadow-lg shadow-black/20">
              <span className="flex size-1.5 rounded-full bg-sky-400 shadow-lg shadow-sky-400/50" />
              Our Process
            </span>
            <h1 className="mt-5 sm:mt-6 text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Our <span className="bg-gradient-to-r from-sky-200 via-white to-sky-100 bg-clip-text text-transparent">Process</span>
            </h1>
            <p className="mt-4 sm:mt-5 text-xs sm:text-sm leading-relaxed text-white/40 max-w-2xl mx-auto">
              A structured, transparent approach to getting your business established
              and compliant in Indonesia. From consultation to ongoing support, we guide
              you every step of the way.
            </p>
          </motion.div>
        </div>
        {/* Transition blend between Hero and Timeline */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#0b1120]" />
      </section>

      {/* Timeline */}
      <section className="relative py-12 sm:py-20 lg:py-28 bg-gradient-to-b from-[#0b1120] via-slate-950 to-[#0b1120] overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0b1120] to-transparent z-10" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Vertical line - desktop only */}
            <div className="hidden md:block absolute left-12 top-0 h-full w-px bg-gradient-to-b from-sky-400/30 via-sky-400/10 to-transparent" />

            <div className="space-y-6 sm:space-y-8 lg:space-y-16">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="relative md:pl-24"
                >
                  {/* Circle on timeline - desktop only */}
                  <div className="hidden md:flex absolute left-4 top-0 size-10 items-center justify-center rounded-full border-4 border-slate-900 bg-gradient-to-br from-sky-400/30 to-blue-500/20 text-sm font-bold text-sky-300 shadow-lg shadow-sky-400/10">
                    {step.number}
                  </div>

                  <div className="rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] backdrop-blur-xl p-4 sm:p-6 lg:p-8 shadow-xl transition-all duration-500 hover:border-white/20">
                    {/* Header row with number, icon, title, duration */}
                    <div className="flex items-start gap-2.5 sm:gap-3">
                      {/* Mobile number badge */}
                      <span className="md:hidden flex size-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sky-400/30 to-blue-500/20 border border-sky-400/20 text-xs font-bold text-sky-300">
                        {step.number}
                      </span>
                      <step.icon className="hidden sm:block size-5 sm:size-6 text-sky-300 shrink-0 mt-0.5" />
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-start justify-between gap-2">
                          <h2 className="text-sm sm:text-base lg:text-xl font-bold text-white break-words pr-1">
                            {step.title}
                          </h2>
                          <span className="shrink-0 rounded-full bg-sky-400/10 border border-sky-400/20 px-2.5 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium text-sky-300 whitespace-nowrap">
                            {step.duration}
                          </span>
                        </div>
                        <p className="mt-2 text-xs sm:text-sm lg:text-base text-white/50 leading-relaxed break-words">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Key Steps */}
                    <div className="mt-4 sm:mt-6 pt-4 sm:pt-5 border-t border-white/10">
                      <h3 className="font-semibold text-xs sm:text-sm text-sky-300 mb-2.5 sm:mb-3 flex items-center gap-1.5">
                        <span className="flex size-1.5 rounded-full bg-sky-400" />
                        Key Steps
                      </h3>
                      <div className="grid gap-1.5 sm:gap-2 grid-cols-1 sm:grid-cols-2">
                        {step.details.map((detail) => (
                          <div key={detail} className="flex items-start gap-2 text-xs sm:text-sm text-white/50">
                            <CheckCircle className="mt-0.5 size-3.5 sm:size-4 shrink-0 text-sky-400/80" />
                            <span className="break-words">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        {/* Transition blend between Timeline and Summary */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#0b1120]" />
      </section>

      {/* Summary */}
      <section className="relative py-16 sm:py-20 lg:py-28 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0b1120] to-transparent z-10" />
        {/* Slideshow background images */}
        <div className="absolute inset-0 pointer-events-none select-none">
          {summaryImages.map((src, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                i === summarySlide ? "opacity-100" : "opacity-0"
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
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b1120]/90 via-[#0b1120]/75 to-[#0b1120]/90" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
              End-to-End Partnership
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-white/40 max-w-xl mx-auto">
              From your first inquiry to long-term compliance support, KBB is with you
              at every stage of your Indonesia market entry journey.
            </p>
          </motion.div>
          <div className="relative mt-8 sm:mt-10 lg:mt-12 grid gap-4 sm:gap-5 lg:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {[
              {
                title: "Before You Start",
                items: ["Market entry advisory", "Entity structure planning", "Regulatory roadmap", "Cost & timeline estimation"],
              },
              {
                title: "During Processing",
                items: ["Document preparation", "Authority submissions", "Status tracking & updates", "Issue resolution"],
              },
              {
                title: "After Approval",
                items: ["Certificate delivery", "Compliance monitoring", "Renewal management", "Ongoing advisory"],
              },
            ].map((phase, idx) => (
              <motion.div
                key={`${phase.title}-${summarySlide}`}
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.15, ease: "easeOut" }}
                className="rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] backdrop-blur-xl p-5 sm:p-6 shadow-xl transition-all duration-500 hover:border-white/20"
              >
                <h3 className="font-semibold text-sm sm:text-base text-white flex items-center gap-2">
                  <span className="flex size-2 rounded-full bg-sky-400" />
                  {phase.title}
                </h3>
                <ul className="mt-3 sm:mt-4 space-y-2 sm:space-y-2.5">
                  {phase.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/50">
                      <CheckCircle className="mt-0.5 size-4 sm:size-4.5 shrink-0 text-sky-400/80" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Transition blend between Summary and CTA */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#0b1120]" />
      </section>

      {/* CTA */}
      <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-[#0b1120]">
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0b1120] to-transparent z-10" />
        <div className="relative mx-auto max-w-3xl px-5 sm:px-6 text-center lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col items-center"
          >
            <div className="mb-5 sm:mb-8 flex items-center gap-3 sm:gap-4">
              <div className="h-px w-10 sm:w-16 bg-gradient-to-r from-transparent via-sky-400/40 to-transparent" />
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3.5 sm:px-4 py-1.5 text-[10px] sm:text-xs font-medium tracking-wider uppercase text-white/60 whitespace-nowrap backdrop-blur-sm">
                <span className="flex size-1.5 rounded-full bg-sky-400 shadow-lg shadow-sky-400/50" />
                Start Your Journey
              </span>
              <div className="h-px w-10 sm:w-16 bg-gradient-to-r from-transparent via-sky-400/40 to-transparent" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
              Start Your Journey Today
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-white/60 max-w-xl mx-auto">
              Contact us for a free consultation and let's discuss how we can help
              your business succeed in Indonesia.
            </p>
            <div className="mt-8 sm:mt-10 flex flex-col items-center justify-center gap-3 sm:gap-4 sm:flex-row w-full sm:w-auto">
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-2.5 sm:gap-3 rounded-xl bg-gradient-to-b from-sky-500 to-sky-600 px-6 sm:px-9 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-white shadow-lg shadow-sky-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/30 hover:-translate-y-0.5 active:translate-y-0 overflow-hidden w-full sm:w-auto justify-center"
              >
                <span className="relative z-10">Book Free Consultation</span>
                <span className="relative z-10 flex size-4 sm:size-5 items-center justify-center rounded-full bg-white/20 transition-all duration-300 group-hover:scale-110 group-hover:bg-white/30">
                  <ArrowRight className="size-3 sm:size-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
              <a
                href="https://wa.me/6285216412782"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 sm:gap-3 rounded-xl border border-white/15 bg-white/[0.06] px-6 sm:px-9 py-3.5 sm:py-4 text-sm sm:text-base font-medium text-white/70 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/30 hover:text-white hover:-translate-y-0.5 active:translate-y-0 w-full sm:w-auto justify-center"
              >
                <div className="flex size-5 sm:size-6 items-center justify-center rounded-full bg-white/10 transition-colors group-hover:bg-white/20">
                  <Phone className="size-3 sm:size-3.5" />
                </div>
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
        {/* Transition blend between CTA and Footer */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#0b1120]" />
      </section>
    </>
  )
}