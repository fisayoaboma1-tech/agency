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
  const [slideIndex, setSlideIndex] = React.useState(0)

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

  return (
    <>
      {/* Hero */}
      <section className="relative pt-20 pb-14 sm:py-24 lg:py-28 overflow-hidden">
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
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto w-full max-w-3xl text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.08] px-4 sm:px-5 py-1.5 sm:py-2 text-[10px] sm:text-xs font-medium tracking-wider uppercase text-white/60 backdrop-blur-sm shadow-lg shadow-black/20">
              <span className="flex size-1.5 rounded-full bg-sky-400 shadow-lg shadow-sky-400/50" />
              Our Services
            </span>
            <h1 className="mt-5 sm:mt-6 text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Comprehensive <span className="bg-gradient-to-r from-sky-200 via-white to-sky-100 bg-clip-text text-transparent">Market Entry</span> Solutions
            </h1>
            <p className="mt-4 sm:mt-5 text-xs sm:text-sm leading-relaxed text-white/40 max-w-2xl mx-auto">
              End-to-end solutions for your Indonesia market entry. From company setup
              to product certification, we provide comprehensive support at every stage.
            </p>
          </motion.div>
        </div>
        {/* Transition blend between Hero and Services */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#0b1120]" />
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
          {/* Top transition blend */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0b1120] to-transparent z-10" />
          {/* Background image for Company Incorporation */}
          {index === 0 && (
            <div className="absolute inset-0 pointer-events-none select-none">
              <img
                src="https://res.cloudinary.com/dahp1ngcc/image/upload/v1779193149/download_1_lkb9cw.jpg"
                alt=""
                className="size-full object-cover"
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/65 to-black/80" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120]/90 via-transparent to-[#0b1120]/50" />
              <div className="absolute inset-0 bg-gradient-to-b from-[#0b1120]/75 via-transparent to-[#0b1120]/90" />
            </div>
          )}
          {/* Background image for Business Licenses & Permits */}
          {index === 1 && (
            <div className="absolute inset-0 pointer-events-none select-none">
              <img
                src="https://res.cloudinary.com/dahp1ngcc/image/upload/v1779193149/bhavi_It_Tech_rweyyn.jpg"
                alt=""
                className="size-full object-cover"
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/65 to-black/80" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120]/90 via-transparent to-[#0b1120]/50" />
              <div className="absolute inset-0 bg-gradient-to-b from-[#0b1120]/75 via-transparent to-[#0b1120]/90" />
            </div>
          )}
          {/* Background image for Import / Export Compliance */}
          {index === 2 && (
            <div className="absolute inset-0 pointer-events-none select-none">
              <img
                src="https://res.cloudinary.com/dahp1ngcc/image/upload/v1779193149/office_zoadp7.jpg"
                alt=""
                className="size-full object-cover"
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/65 to-black/80" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120]/90 via-transparent to-[#0b1120]/50" />
              <div className="absolute inset-0 bg-gradient-to-b from-[#0b1120]/75 via-transparent to-[#0b1120]/90" />
            </div>
          )}
          {/* Background image for Product Certification (SNI) */}
          {index === 3 && (
            <div className="absolute inset-0 pointer-events-none select-none">
              <img
                src="https://res.cloudinary.com/dahp1ngcc/image/upload/v1779193149/work_wmuklk.jpg"
                alt=""
                className="size-full object-cover"
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/65 to-black/80" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120]/90 via-transparent to-[#0b1120]/50" />
              <div className="absolute inset-0 bg-gradient-to-b from-[#0b1120]/75 via-transparent to-[#0b1120]/90" />
            </div>
          )}
          {/* Background image for Work Permits & Immigration */}
          {index === 4 && (
            <div className="absolute inset-0 pointer-events-none select-none">
              <img
                src="https://res.cloudinary.com/dahp1ngcc/image/upload/v1779193149/download_2_hdvd3v.jpg"
                alt=""
                className="size-full object-cover"
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/65 to-black/80" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120]/90 via-transparent to-[#0b1120]/50" />
              <div className="absolute inset-0 bg-gradient-to-b from-[#0b1120]/75 via-transparent to-[#0b1120]/90" />
            </div>
          )}
          <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-6 sm:gap-8 lg:grid lg:grid-cols-2 lg:gap-12">
              {/* Left: Details */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4 }}
                className="w-full min-w-0"
              >
                <div className="flex size-9 sm:size-12 lg:size-14 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400/20 to-blue-500/10 border border-sky-400/20 mb-3 sm:mb-5 lg:mb-6">
                  <service.icon className="size-4 sm:size-6 lg:size-7 text-sky-300" />
                </div>
                <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold tracking-tight text-white break-words">
                  {service.title}
                </h2>
                <p className="mt-2 sm:mt-4 text-sm sm:text-base lg:text-lg leading-relaxed text-white/60 break-words">
                  {service.description}
                </p>
                <div className="mt-5 sm:mt-8">
                  <h3 className="font-semibold text-xs sm:text-base text-sky-300 mb-2.5 sm:mb-4 flex items-center gap-2">
                    <span className="flex size-1.5 rounded-full bg-sky-400" />
                    Key Benefits
                  </h3>
                  <ul className="space-y-1.5 sm:space-y-2.5">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-white/50">
                        <CheckCircle className="mt-0.5 size-3.5 sm:size-4.5 shrink-0 text-sky-400/80" />
                        <span className="break-words">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-5 sm:mt-8 rounded-xl border border-sky-400/10 bg-gradient-to-b from-sky-400/5 to-transparent p-3.5 sm:p-5 w-full">
                  <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-sky-300/60">
                    Ideal for
                  </p>
                  <p className="mt-1.5 text-xs sm:text-sm text-white/60 leading-relaxed break-words">{service.suitable}</p>
                </div>
                <div className="mt-5 sm:mt-8">
                  <Link
                    href="/contact"
                    className="group relative inline-flex items-center gap-2 sm:gap-3 rounded-xl bg-gradient-to-b from-sky-500 to-sky-600 px-5 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-semibold text-white shadow-lg shadow-sky-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/30 hover:-translate-y-0.5 active:translate-y-0 overflow-hidden w-full sm:w-auto justify-center"
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
                className="w-full min-w-0"
              >
                <div className="rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] backdrop-blur-xl p-4 sm:p-6 lg:p-8 shadow-xl transition-all duration-500 hover:border-white/20 w-full">
                  <h3 className="text-sm sm:text-lg font-semibold text-white flex items-center gap-2">
                    <span className="flex size-2 rounded-full bg-sky-400" />
                    Why This Matters
                  </h3>
                  <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-white/50 leading-relaxed break-words">
                    {whyThisMatters[service.id as keyof typeof whyThisMatters]}
                  </p>
                  <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="flex size-8 sm:size-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sky-400/20 to-sky-400/10 border border-sky-400/20">
                        <span className="text-xs sm:text-base font-bold text-sky-300">✓</span>
                      </div>
                      <div className="min-w-0">
                        <div className="font-medium text-xs sm:text-sm text-white/80">Trusted by 50+ companies</div>
                        <div className="text-[11px] sm:text-xs text-white/40">Proven results across industries</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          {/* Bottom transition blend to next section */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#0b1120]" />
        </section>
      ))}

      {/* CTA */}
      <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
        {/* Top transition blend from last service */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0b1120] to-transparent z-10" />
        {/* Background image for CTA */}
        <div className="absolute inset-0 pointer-events-none select-none">
          <img
            src="https://res.cloudinary.com/dahp1ngcc/image/upload/v1779193822/download_3_ldv9c7.jpg"
            alt=""
            className="size-full object-cover"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/65 to-black/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120]/90 via-transparent to-[#0b1120]/50" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b1120]/75 via-transparent to-[#0b1120]/90" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-3xl px-4 sm:px-6 text-center lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col items-center w-full"
          >
            <div className="mb-5 sm:mb-8 flex items-center gap-3 sm:gap-4 w-full justify-center">
              <div className="h-px w-10 sm:w-16 bg-gradient-to-r from-transparent via-sky-400/40 to-transparent" />
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3.5 sm:px-4 py-1.5 text-[10px] sm:text-xs font-medium tracking-wider uppercase text-white/60 whitespace-nowrap shrink-0 backdrop-blur-sm">
                <span className="flex size-1.5 rounded-full bg-sky-400 shadow-lg shadow-sky-400/50" />
                Need Help Deciding?
              </span>
              <div className="h-px w-10 sm:w-16 bg-gradient-to-r from-transparent via-sky-400/40 to-transparent" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
              Not Sure Which Service You Need?
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-white/60 max-w-xl mx-auto">
              Schedule a free consultation and we'll help identify the right path for your business.
            </p>
            <div className="mt-8 sm:mt-10 flex flex-col items-center justify-center gap-3 sm:gap-4 sm:flex-row w-full">
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-2.5 sm:gap-3 rounded-xl bg-gradient-to-b from-sky-500 to-sky-600 px-6 sm:px-9 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-white shadow-lg shadow-sky-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/30 hover:-translate-y-0.5 active:translate-y-0 overflow-hidden w-full sm:w-auto justify-center"
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
                className="group inline-flex items-center gap-2.5 sm:gap-3 rounded-xl border border-white/15 bg-white/[0.06] px-6 sm:px-9 py-3.5 sm:py-4 text-sm sm:text-base font-medium text-white/70 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/30 hover:text-white hover:-translate-y-0.5 active:translate-y-0 w-full sm:w-auto justify-center"
              >
                <div className="flex size-5 sm:size-6 items-center justify-center rounded-full bg-white/10 transition-colors group-hover:bg-white/20">
                  <Phone className="size-3 sm:size-3.5 shrink-0" />
                </div>
                <span>Chat on WhatsApp</span>
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