"use client"

import React from "react"
import Link from "next/link"
import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import { ArrowRight, ShieldCheck, Target, Eye, Users, Award, ChevronRight, Phone } from "lucide-react"

const values = [
  {
    title: "Integrity",
    desc: "We operate with full transparency in every regulatory engagement.",
    icon: ShieldCheck,
  },
  {
    title: "Expertise",
    desc: "Deep knowledge of Indonesian laws, regulations, and government processes.",
    icon: Award,
  },
  {
    title: "Client-First",
    desc: "Every solution is tailored to your specific business needs and goals.",
    icon: Users,
  },
  {
    title: "Reliability",
    desc: "We deliver on commitments with timely, accurate, and compliant results.",
    icon: Target,
  },
]

const team = [
  { name: "Dr. Andi Pratama", title: "Founder & Managing Director", expertise: "Corporate Law & Regulatory Compliance" },
  { name: "Rina Wijaya", title: "Head of Certification", expertise: "SNI Certification & Product Compliance" },
  { name: "David Kusuma", title: "Head of Business Development", expertise: "Market Entry Strategy & Client Relations" },
  { name: "Siti Rahmawati", title: "Senior Legal Consultant", expertise: "Company Incorporation & Licensing" },
]

export default function AboutPage() {
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
      <section className="relative pt-24 pb-16 sm:py-24 lg:py-28 overflow-hidden">
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
              About Us
            </span>
            <h1 className="mt-5 sm:mt-6 text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              About{" "}
              <span className="bg-gradient-to-r from-sky-200 via-white to-sky-100 bg-clip-text text-transparent">PT. SSNI</span>
            </h1>
            <p className="mt-4 sm:mt-5 text-xs sm:text-sm leading-relaxed text-white/40 max-w-2xl mx-auto">
              We are a specialized consulting firm dedicated to helping foreign companies
              successfully enter and operate in the Indonesian market. With deep regulatory
              expertise and a proven track record, we are your trusted partner for
              Indonesia market entry.
            </p>
          </motion.div>
        </div>
      </section>
      {/* Why SSNI */}
      <section className="relative py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-slate-900 via-slate-950 to-[#0b1120] overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
              Why Choose SSNI?
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-white/40 max-w-xl mx-auto">
              We bring together deep regulatory knowledge, practical experience, and
              a commitment to excellence.
            </p>
          </motion.div>
          <div className="relative mt-8 sm:mt-10 lg:mt-12 grid gap-4 sm:gap-5 lg:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ delay: 0.05 }}
                className="rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] backdrop-blur-xl p-5 sm:p-6 text-center shadow-xl transition-all duration-500 hover:border-white/20 hover:-translate-y-0.5"
              >
                <div className="mx-auto flex size-10 sm:size-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400/20 to-blue-500/10 border border-sky-400/20">
                  <v.icon className="size-5 sm:size-6 text-sky-300" />
                </div>
                <h3 className="mt-3 sm:mt-4 font-semibold text-sm sm:text-base text-white">{v.title}</h3>
                <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-white/50">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="relative py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-[#0b1120] via-slate-950 to-[#0b1120] overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
              Our Expertise
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-white/40 max-w-xl mx-auto">
              We specialize in navigating Indonesia's complex regulatory environment.
            </p>
          </motion.div>
          <div className="relative mt-8 sm:mt-10 lg:mt-12 grid gap-4 sm:gap-5 lg:gap-6 md:grid-cols-2">
            {[
              {
                area: "Regulatory Navigation",
                desc: "In-depth knowledge of Indonesian laws, ministerial regulations, and the OSS-RBA system.",
              },
              {
                area: "Government Relations",
                desc: "Established relationships with BKPM, Ministry of Law, and industry regulatory bodies.",
              },
              {
                area: "Cross-Border Compliance",
                desc: "Expert handling of import/export regulations, customs procedures, and trade documentation.",
              },
              {
                area: "Technical Standards",
                desc: "Comprehensive understanding of SNI standards, testing protocols, and factory inspection processes.",
              },
            ].map((item) => (
              <motion.div
                key={item.area}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ delay: 0.05 }}
                className="group flex gap-3 sm:gap-4 rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] backdrop-blur-xl p-4 sm:p-5 lg:p-6 shadow-xl transition-all duration-500 hover:border-white/20 hover:-translate-y-0.5"
              >
                <div className="flex size-10 sm:size-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400/20 to-blue-500/10 border border-sky-400/20 group-hover:border-sky-400/30 transition-colors">
                  <ShieldCheck className="size-5 sm:size-6 text-sky-300" />
                </div>
                <div className="pt-0.5 sm:pt-1">
                  <h3 className="font-semibold text-sm sm:text-base text-white">{item.area}</h3>
                  <p className="mt-0.5 sm:mt-1 text-xs sm:text-sm text-white/50">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="relative py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-slate-900 via-slate-950 to-[#0b1120] overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
              Leadership Team
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-white/40 max-w-xl mx-auto">
              Seasoned professionals with deep expertise in Indonesian business regulations.
            </p>
          </motion.div>
          <div className="relative mt-8 sm:mt-10 lg:mt-12 grid gap-4 sm:gap-5 lg:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ delay: 0.05 }}
                className="rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] backdrop-blur-xl p-5 sm:p-6 text-center shadow-xl transition-all duration-500 hover:border-white/20 hover:-translate-y-0.5"
              >
                <div className="mx-auto flex size-14 sm:size-16 items-center justify-center rounded-full bg-gradient-to-br from-sky-400/20 to-blue-500/10 border border-sky-400/20 shadow-md">
                  <span className="text-base sm:text-xl font-bold text-sky-300">
                    {member.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <h3 className="mt-3 sm:mt-4 font-semibold text-sm sm:text-base text-white">{member.name}</h3>
                <p className="text-xs sm:text-sm text-white/60">{member.title}</p>
                <p className="mt-1 text-[10px] sm:text-xs text-white/30">{member.expertise}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-[#0b1120]">
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
                Let's Work Together
              </span>
              <div className="h-px w-10 sm:w-16 bg-gradient-to-r from-transparent via-sky-400/40 to-transparent" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
              Let's Work Together
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-white/60 max-w-xl mx-auto">
              Ready to start your Indonesia market entry journey? Contact our team today.
            </p>
            <div className="mt-8 sm:mt-10 flex flex-col items-center justify-center gap-3 sm:gap-4 sm:flex-row w-full sm:w-auto">
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-2.5 sm:gap-3 rounded-xl bg-gradient-to-b from-sky-500 to-sky-600 px-6 sm:px-9 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-white shadow-lg shadow-sky-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/30 hover:-translate-y-0.5 active:translate-y-0 overflow-hidden w-full sm:w-auto justify-center"
              >
                <span className="relative z-10">Contact Us</span>
                <span className="relative z-10 flex size-4 sm:size-5 items-center justify-center rounded-full bg-white/20 transition-all duration-300 group-hover:scale-110 group-hover:bg-white/30">
                  <ArrowRight className="size-3 sm:size-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
              <Link
                href="/services"
                className="group inline-flex items-center gap-2.5 sm:gap-3 rounded-xl border border-white/15 bg-white/[0.06] px-6 sm:px-9 py-3.5 sm:py-4 text-sm sm:text-base font-medium text-white/70 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/30 hover:text-white hover:-translate-y-0.5 active:translate-y-0 w-full sm:w-auto justify-center"
              >
                <ChevronRight className="size-3.5 sm:size-4 transition-transform group-hover:translate-x-0.5" />
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}