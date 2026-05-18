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
  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 pb-16 sm:py-24 lg:py-28 bg-gradient-to-b from-slate-900 via-slate-950 to-[#0b1120] overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-3.5 py-1 text-xs font-medium text-white mb-5 sm:mb-6">
              Our Process
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Our <span className="bg-gradient-to-r from-sky-200 via-white to-sky-100 bg-clip-text text-transparent">Process</span>
            </h1>
            <p className="mt-4 sm:mt-5 text-base sm:text-lg leading-relaxed text-white/40 max-w-2xl mx-auto">
              A structured, transparent approach to getting your business established
              and compliant in Indonesia. From consultation to ongoing support, we guide
              you every step of the way.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-[#0b1120] via-slate-950 to-[#0b1120] overflow-hidden">
        <div className="relative mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Vertical line */}
            <div className="hidden sm:block absolute left-8 top-0 h-full w-px bg-white/[0.06] md:left-12" />

            <div className="space-y-10 sm:space-y-16">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="relative sm:pl-20 md:pl-24"
                >
                  {/* Circle on timeline */}
                  <div className="hidden sm:flex absolute left-4 top-0 size-10 items-center justify-center rounded-full border-4 border-slate-900 bg-gradient-to-br from-white/20 to-white/10 text-sm font-bold text-white shadow-md md:left-6">
                    {step.number}
                  </div>

                  <div className="rounded-2xl border border-white/[0.06] bg-gradient-to-b from-white/[0.04] to-transparent p-5 sm:p-6 lg:p-8 shadow-xl transition-all duration-500 hover:border-white/20">
                    <div className="flex flex-col sm:flex-row items-start justify-between gap-3 sm:gap-4">
                      <div className="w-full">
                        <div className="flex items-center gap-3">
                          <span className="sm:hidden flex size-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-white/20 to-white/10 border border-white/20 text-xs font-bold text-white">
                            {step.number}
                          </span>
                          <step.icon className="size-5 sm:size-6 text-white/70 shrink-0" />
                          <h2 className="text-base sm:text-xl font-bold text-white">{step.title}</h2>
                        </div>
                        <p className="mt-3 text-xs sm:text-sm lg:text-base text-white/40 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                      <div className="shrink-0 rounded-full bg-white/10 border border-white/20 px-2.5 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium text-white/60 whitespace-nowrap ml-auto sm:ml-0">
                        {step.duration}
                      </div>
                    </div>

                    <div className="mt-4 sm:mt-6 grid gap-1.5 sm:gap-2 grid-cols-1 sm:grid-cols-2">
                      {step.details.map((detail) => (
                        <div key={detail} className="flex items-start gap-2 text-xs sm:text-sm text-white/40">
                          <CheckCircle className="mt-0.5 size-3.5 sm:size-4 shrink-0 text-white/60" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="relative py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-slate-900 via-slate-950 to-[#0b1120] overflow-hidden">
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
              From your first inquiry to long-term compliance support, SSNI is with you
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
            ].map((phase) => (
              <motion.div
                key={phase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ delay: 0.08 }}
                className="rounded-2xl border border-white/[0.06] bg-gradient-to-b from-white/[0.04] to-transparent p-5 sm:p-6 shadow-xl transition-all duration-500 hover:border-white/20"
              >
                <h3 className="font-semibold text-sm sm:text-base text-white">{phase.title}</h3>
                <ul className="mt-3 sm:mt-4 space-y-1.5 sm:space-y-2">
                  {phase.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs sm:text-sm text-white/40">
                      <CheckCircle className="mt-0.5 size-3.5 sm:size-4 shrink-0 text-white/60" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 sm:py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-[#0b1120]">
        <div className="relative mx-auto max-w-3xl px-5 sm:px-6 text-center lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col items-center"
          >
            <div className="mb-6 sm:mb-8 flex items-center gap-3 sm:gap-4">
              <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 sm:px-4 py-1 sm:py-1.5 text-[10px] sm:text-xs font-medium text-white/50 whitespace-nowrap">
                Start Your Journey
              </span>
              <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
              Start Your Journey Today
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-white/40 max-w-xl mx-auto">
              Contact us for a free consultation and let's discuss how we can help
              your business succeed in Indonesia.
            </p>
            <div className="mt-8 sm:mt-10 flex flex-col items-center justify-center gap-3 sm:gap-4 sm:flex-row w-full sm:w-auto">
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-2.5 sm:gap-3 rounded-xl sm:rounded-2xl bg-gradient-to-b from-sky-500 to-sky-600 px-6 sm:px-9 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white shadow-2xl shadow-sky-500/30 transition-all duration-300 hover:shadow-sky-500/40 hover:-translate-y-0.5 active:translate-y-0 overflow-hidden w-full sm:w-auto justify-center"
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
                className="group inline-flex items-center gap-2.5 sm:gap-3 rounded-xl sm:rounded-2xl border border-white/15 bg-white/[0.04] px-6 sm:px-9 py-3 sm:py-4 text-sm sm:text-base font-medium text-white/70 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/30 hover:text-white hover:-translate-y-0.5 active:translate-y-0 w-full sm:w-auto justify-center"
              >
                <div className="flex size-5 sm:size-6 items-center justify-center rounded-full bg-white/10 transition-colors group-hover:bg-white/20">
                  <Phone className="size-3 sm:size-3.5" />
                </div>
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}