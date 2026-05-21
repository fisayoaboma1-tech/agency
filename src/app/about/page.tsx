"use client"

import React from "react"
import Link from "next/link"
import { motion } from "motion/react"
import { ArrowRight, ShieldCheck, Target, Users, Award, ChevronRight, Phone } from "lucide-react"

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
  { name: "Dr. Andi Pratama", title: "Pendiri & Direktur Utama", expertise: "Hukum Perusahaan & Kepatuhan Regulasi", image: "https://res.cloudinary.com/dahp1ngcc/image/upload/v1778959635/WhatsApp_Image_2026-05-16_at_8.16.32_PM_otmktj.jpg" },
  { name: "Rina Wijaya", title: "Kepala Sertifikasi", expertise: "Sertifikasi SNI & Kepatuhan Produk", image: "https://res.cloudinary.com/dahp1ngcc/image/upload/v1778959636/WhatsApp_Image_2026-05-16_at_8.16.33_PM_1_dkxu68.jpg" },
  { name: "David Kusuma", title: "Kepala Pengembangan Bisnis", expertise: "Strategi Masuk Pasar & Hubungan Klien", image: "https://res.cloudinary.com/dahp1ngcc/image/upload/v1778959636/WhatsApp_Image_2026-05-16_at_8.16.33_PM_bfnxf2.jpg" },
  { name: "Siti Rahmawati", title: "Konsultan Hukum Senior", expertise: "Pendirian Perusahaan & Perizinan", image: "https://res.cloudinary.com/dahp1ngcc/image/upload/v1779193822/download_3_ldv9c7.jpg" },
]

export default function AboutPage() {
  return (
    <>
      {/* About PT. KBB */}
      <section className="relative py-16 sm:py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none select-none">
          <img
            src="https://res.cloudinary.com/dahp1ngcc/image/upload/v1779225861/Outsourcing_Philippines_gtsine.jpg"
            alt=""
            className="size-full object-cover"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b1120]/95 via-[#0b1120]/80 to-[#0b1120]/95" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120] via-transparent to-[#0b1120]/60" />
        </div>
        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.08] px-4 sm:px-5 py-1.5 sm:py-2 text-[10px] sm:text-xs font-medium tracking-wider uppercase text-white/60 backdrop-blur-sm shadow-lg shadow-black/20">
              <span className="flex size-1.5 rounded-full bg-sky-400 shadow-lg shadow-sky-400/50" />
              About
            </span>
            <h2 className="mt-5 sm:mt-6 text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              About{" "}
              <span className="bg-gradient-to-r from-amber-200 via-white to-amber-100 bg-clip-text text-transparent">PT. KBB</span>
            </h2>
            <p className="mt-4 sm:mt-5 text-xs sm:text-sm leading-relaxed text-white/60 max-w-2xl mx-auto">
              We are a specialized consulting firm dedicated to helping foreign companies
              successfully enter and operate in the Indonesian market. With deep regulatory
              expertise and a proven track record, we are your trusted partner for
              Indonesia market entry.
            </p>
          </motion.div>
        </div>
        {/* Transition blend between sections */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#0b1120]" />
      </section>
      {/* Why KBB */}
      <section className="relative py-16 sm:py-20 lg:py-28 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0b1120] to-transparent z-10" />
        <div className="absolute inset-0 pointer-events-none select-none">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="size-full object-cover"
          >
            <source src="https://res.cloudinary.com/dahp1ngcc/video/upload/v1779244298/From_KlickPin_CF_Upgrade_these_beautiful_road_trip_ideas_to_make_your_next_project_easier_and_prettier_with_practical_inspiration_you_can_use_right_away_bookmark_-_Pin-88946161386807898_s88nt4.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b1120]/90 via-[#0b1120]/75 to-[#0b1120]/90" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
              Why Choose KBB?
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
                className="rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] backdrop-blur-xl p-5 sm:p-6 text-left shadow-xl transition-all duration-500 hover:border-white/20 hover:-translate-y-0.5"
              >
                <div className="flex size-10 sm:size-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400/20 to-blue-500/10 border border-sky-400/20">
                  <v.icon className="size-5 sm:size-6 text-sky-300" />
                </div>
                <h3 className="mt-3 sm:mt-4 font-semibold text-sm sm:text-base text-white">{v.title}</h3>
                <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-white/50">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Transition blend between Why KBB and Our Expertise */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#0b1120] z-10" />
      </section>

      {/* Our Expertise */}
      <section className="relative py-16 sm:py-20 lg:py-28 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0b1120] to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b1120] via-slate-950 to-[#0b1120]" />
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
        {/* Transition blend between Our Expertise and Team */}
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
        {/* Transition blend between CTA and Footer */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#0b1120]" />
      </section>
    </>
  )
}