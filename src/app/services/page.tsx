"use client"

import React from "react"
import Link from "next/link"
import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Building2, FileCheck, Globe, ShieldCheck, Users, ChevronRight, Phone } from "lucide-react"

const serviceDetails = [
  {
    id: "incorporation",
    title: "Company Incorporation",
    description: "Full-service company registration in Indonesia. We handle everything from entity structuring to obtaining your Business Identification Number (NIB) through the OSS-RBA system.",
    icon: Building2,
    benefits: [
      "Limited Liability Company (PT) establishment",
      "Business Identification Number (NIB) via OSS-RBA",
      "Company domicile letter & tax registration",
      "Articles of Association notarization & Ministry approval",
      "Bank account opening assistance",
      "Company seal & operational readiness",
    ],
    suitable: "Foreign entrepreneurs, SMEs, and corporations looking to establish a legal presence in Indonesia.",
  },
  {
    id: "licenses",
    title: "Business Licenses & Permits",
    description: "Navigate Indonesia's licensing requirements with confidence. We secure all industry-specific permits and government approvals needed for your operations.",
    icon: FileCheck,
    benefits: [
      "Business Licensing (IU / IUI / IUJK, etc.)",
      "BKPM / Investment Ministry coordination",
      "Location permits & environmental approvals",
      "Sector-specific licenses (construction, manufacturing, trade, services)",
      "Operational permits & compliance certificates",
      "License renewals & amendments",
    ],
    suitable: "Companies in regulated industries requiring multiple permits from Indonesian government agencies.",
  },
  {
    id: "import-export",
    title: "Import / Export Compliance",
    description: "Streamline your cross-border trade operations. We handle customs documentation, regulatory compliance, and tariff classification for smooth import and export processes.",
    icon: Globe,
    benefits: [
      "Import documentation & customs clearance",
      "Export compliance & documentation",
      "HS Code classification & valuation",
      "Import duty & tax calculation advisory",
      "Restricted/prohibited goods assessment",
      "Trade agreement & preferential duty analysis",
      "Customs audit support",
    ],
    suitable: "Importers, exporters, and manufacturers moving goods across Indonesian borders.",
  },
  {
    id: "certification",
    title: "Product Certification (SNI)",
    description: "Mandatory SNI (Standar Nasional Indonesia) certification for products sold in Indonesia. Complete management from product testing to certification issuance.",
    icon: ShieldCheck,
    benefits: [
      "SNI certification gap analysis",
      "Product testing coordination with accredited labs",
      "Factory production inspection",
      "Quality management system review",
      "Compliance documentation preparation",
      "Certification application & follow-up",
      "Surveillance audit management",
    ],
    suitable: "Manufacturers and importers of regulated products that require SNI certification to be sold in Indonesia.",
  },
  {
    id: "work-permits",
    title: "Work Permits & Immigration",
    description: "Comprehensive work permit and immigration support for foreign professionals. We manage the full process from work permit application to stay permit issuance.",
    icon: Users,
    benefits: [
      "Work permit (IMTA/Izin Mempekerjakan Tenaga Asing)",
      "Expatriate Position Plan (RPTKA)",
      "Stay permits (KITAS/KITAP)",
      "Visa support (Business, Work, Multiple Entry)",
      "Dependent permits for family members",
      "Expatriate reporting & compliance",
      "Permit renewals & extensions",
    ],
    suitable: "International companies deploying foreign staff to Indonesia and professionals seeking work authorization.",
  },
]

const whyThisMatters = {
  incorporation: "Getting your company structure right from day one is critical. We ensure your PT PMA is fully compliant with Indonesian corporate law, correctly classified under the Positive Investment List, and set up for smooth operations — saving you from costly restructuring later.",
  licenses: "Indonesia's licensing landscape is multi-layered and sector-specific. Missing a single permit can halt operations. We map every requirement for your industry and ensure you have full operational clearance before you launch.",
  "import-export": "Customs delays and misclassified goods cost time and money. Our team ensures your HS codes are accurate, duties are optimized, and all documentation meets Indonesian customs standards.",
  certification: "SNI certification is legally required for hundreds of product categories. Without it, your goods can be seized or fined. We manage the entire certification lifecycle — from lab testing to factory audits.",
  "work-permits": "Indonesia's immigration system has strict quotas, documentation, and timelines. A single error can delay your expatriate's deployment by months. We handle every step so your foreign staff can start working without delays.",
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-20 pb-14 sm:py-24 lg:py-28 bg-gradient-to-b from-slate-900 via-slate-950 to-[#0b1120] overflow-hidden">
        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto w-full max-w-3xl text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-3 py-0.5 sm:px-3.5 sm:py-1 text-[10px] sm:text-xs font-medium text-white mb-4 sm:mb-6">
              Our Services
            </span>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Comprehensive <span className="bg-gradient-to-r from-sky-200 via-white to-sky-100 bg-clip-text text-transparent">Market Entry</span> Solutions
            </h1>
            <p className="mt-3 sm:mt-5 text-sm sm:text-base lg:text-lg leading-relaxed text-white/40 max-w-2xl mx-auto">
              End-to-end solutions for your Indonesia market entry. From company setup
              to product certification, we provide comprehensive support at every stage.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Details */}
      {serviceDetails.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`relative py-14 sm:py-20 lg:py-28 overflow-hidden ${
            index % 2 === 0 
              ? "bg-gradient-to-b from-[#0b1120] via-slate-950 to-[#0b1120]" 
              : "bg-gradient-to-b from-slate-900 via-slate-950 to-[#0b1120]"
          }`}
        >
          <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 sm:gap-10 lg:gap-12 lg:grid-cols-2">
              {/* Left: Details */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4 }}
                className="w-full min-w-0 overflow-hidden"
              >
                <div className="flex size-10 sm:size-12 lg:size-14 items-center justify-center rounded-xl bg-gradient-to-br from-white/20 to-white/10 border border-white/20 mb-4 sm:mb-5 lg:mb-6">
                  <service.icon className="size-5 sm:size-6 lg:size-7 text-white/70" />
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-white">{service.title}</h2>
                <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-white/40 leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-6 sm:mt-8">
                  <h3 className="font-semibold text-sm sm:text-base text-white mb-2.5 sm:mb-3">Key Benefits</h3>
                  <ul className="space-y-1.5 sm:space-y-2">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-white/40">
                        <CheckCircle className="mt-0.5 size-3.5 sm:size-4 shrink-0 text-white/60" />
                        <span className="break-words">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-5 sm:mt-6 rounded-2xl border border-white/[0.06] bg-gradient-to-b from-white/[0.04] to-transparent p-4 sm:p-5 w-full">
                  <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-white/30">
                    Ideal for
                  </p>
                  <p className="mt-1 text-xs sm:text-sm text-white/40 break-words">{service.suitable}</p>
                </div>
                <div className="mt-6 sm:mt-8">
                  <Link
                    href="/contact"
                    className="group relative inline-flex items-center gap-2.5 sm:gap-3 rounded-xl bg-gradient-to-b from-orange-400/30 to-orange-500/30 hover:from-orange-300/30 hover:to-orange-400/30 px-5 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white shadow-2xl shadow-orange-500/30 transition-all duration-300 hover:shadow-orange-500/40 hover:-translate-y-0.5 active:translate-y-0 overflow-hidden w-full sm:w-auto justify-center sm:justify-start"
                  >
                    <span className="relative z-10">Get Started</span>
                    <span className="relative z-10 flex size-4 sm:size-5 items-center justify-center rounded-full bg-white/20 transition-all duration-300 group-hover:scale-110 group-hover:bg-white/30">
                      <ArrowRight className="size-3 sm:size-3.5 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                </div>
              </motion.div>

              {/* Right: Why This Matters */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4 }}
                className="w-full min-w-0 overflow-hidden"
              >
                <div className="rounded-2xl border border-white/[0.06] bg-gradient-to-b from-white/[0.04] to-transparent backdrop-blur-xl p-5 sm:p-6 lg:p-8 shadow-xl transition-all duration-500 hover:border-white/20 w-full">
                  <h3 className="text-base sm:text-lg font-semibold text-white">Why This Matters</h3>
                  <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-white/40 leading-relaxed break-words">
                    {whyThisMatters[service.id as keyof typeof whyThisMatters]}
                  </p>
                  <div className="mt-5 sm:mt-6 pt-5 sm:pt-6 border-t border-white/[0.06]">
                    <div className="flex items-center gap-3">
                      <div className="flex size-8 sm:size-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sky-400/20 to-sky-400/10 border border-sky-400/20">
                        <span className="text-xs sm:text-sm font-bold text-sky-300">✓</span>
                      </div>
                      <div className="min-w-0">
                        <div className="font-medium text-xs sm:text-sm text-white">Trusted by 50+ companies</div>
                        <div className="text-[10px] sm:text-xs text-white/40">Proven results across industries</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="relative py-14 sm:py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-[#0b1120]">
        <div className="relative mx-auto w-full max-w-3xl px-4 sm:px-6 text-center lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col items-center w-full"
          >
            <div className="mb-5 sm:mb-8 flex items-center gap-3 sm:gap-4 w-full justify-center">
              <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent via-white/20 to-transparent shrink-0" />
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 sm:px-4 py-1 sm:py-1.5 text-[10px] sm:text-xs font-medium text-white/50 whitespace-nowrap shrink-0">
                Need Help Deciding?
              </span>
              <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent via-white/20 to-transparent shrink-0" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
              Not Sure Which Service You Need?
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-white/40 max-w-xl mx-auto">
              Schedule a free consultation and we'll help identify the right path for your business.
            </p>
            <div className="mt-6 sm:mt-10 flex flex-col items-center justify-center gap-3 sm:gap-4 sm:flex-row w-full">
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-2.5 sm:gap-3 rounded-xl sm:rounded-2xl bg-gradient-to-b from-sky-500 to-sky-600 px-5 sm:px-9 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white shadow-2xl shadow-sky-500/30 transition-all duration-300 hover:shadow-sky-500/40 hover:-translate-y-0.5 active:translate-y-0 overflow-hidden w-full sm:w-auto justify-center"
              >
                <span className="relative z-10">Book a Free Consultation</span>
                <span className="relative z-10 flex size-4 sm:size-5 items-center justify-center rounded-full bg-white/20 transition-all duration-300 group-hover:scale-110 group-hover:bg-white/30">
                  <ArrowRight className="size-3 sm:size-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
              <a
                href="https://wa.me/6285216412782"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 sm:gap-3 rounded-xl sm:rounded-2xl border border-white/15 bg-white/[0.04] px-5 sm:px-9 py-3 sm:py-4 text-sm sm:text-base font-medium text-white/70 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/30 hover:text-white hover:-translate-y-0.5 active:translate-y-0 w-full sm:w-auto justify-center"
              >
                <div className="flex size-5 sm:size-6 items-center justify-center rounded-full bg-white/10 transition-colors group-hover:bg-white/20">
                  <Phone className="size-3 sm:size-3.5 shrink-0" />
                </div>
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}