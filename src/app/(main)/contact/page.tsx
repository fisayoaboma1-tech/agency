"use client"

import React from "react"
import Link from "next/link"
import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import { Phone, ArrowRight, Send, CheckCircle, Mail, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  const [submitted, setSubmitted] = React.useState(false)
  const [submitting, setSubmitting] = React.useState(false)
  const [error, setError] = React.useState("")
  const [slideIndex, setSlideIndex] = React.useState(0)

  // Form state
  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [company, setCompany] = React.useState("")
  const [service, setService] = React.useState("")
  const [message, setMessage] = React.useState("")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)
    setError("")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, company, service, message }),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || "Failed to send message.")
      }

      setSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.")
    } finally {
      setSubmitting(false)
    }
  }

  function resetForm() {
    setSubmitted(false)
    setName("")
    setEmail("")
    setCompany("")
    setService("")
    setMessage("")
    setError("")
  }

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

  return (
    <>
      {/* Hero - Slideshow blended background */}
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
              Get in Touch
            </span>
            <h1 className="mt-5 sm:mt-6 text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              <span className="bg-gradient-to-r from-sky-200 via-white to-sky-100 bg-clip-text text-transparent">
                Contact Us
              </span>
            </h1>
            <p className="mt-4 sm:mt-5 text-xs sm:text-sm leading-relaxed text-white/40 max-w-2xl mx-auto">
              Ready to expand your business into Indonesia? Get in touch with our team
              for a free consultation. We typically respond within 24 hours.
            </p>
          </motion.div>
        </div>
        {/* Transition blend between Hero and Contact Grid */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#0b1120]" />
      </section>

      {/* Contact Grid */}
      <section className="relative py-14 sm:py-20 lg:py-28 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0b1120] to-transparent z-10" />
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://res.cloudinary.com/dahp1ngcc/image/upload/v1779191726/download_xuc0pn.jpg')",
          }}
        />
        {/* Dark overlays - dimmed like footer */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b1120]/95 via-[#0f1522]/90 to-[#0b1120]/95" />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:gap-10 lg:gap-12 lg:grid-cols-5">
            {/* Contact Form */}
            <div className="lg:col-span-3 w-full">
              <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full max-w-full"
            >
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">Send Us a Message</h2>
              <p className="mt-1.5 sm:mt-2 text-sm sm:text-base text-white/50">
                Fill out the form and our team will get back to you within 24 hours.
              </p>

              {submitted ? (
                <div className="mt-5 sm:mt-8 rounded-xl border border-emerald-500/20 bg-gradient-to-b from-emerald-500/10 to-transparent backdrop-blur-xl p-5 sm:p-8 text-center">
                  <CheckCircle className="mx-auto size-10 sm:size-12 text-emerald-400" />
                  <h3 className="mt-3 sm:mt-4 text-base sm:text-lg font-semibold text-emerald-200">
                    Message Sent Successfully!
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-emerald-300/60">
                    Thank you for reaching out. Our team will contact you within 24 hours.
                    In the meantime, feel free to WhatsApp us for urgent inquiries.
                  </p>
                  <Button
                    className="mt-5 sm:mt-6 border border-white/20 bg-white/10 text-white hover:bg-white/20 text-xs sm:text-sm"
                    variant="outline"
                    onClick={resetForm}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-5 sm:mt-8 space-y-4 sm:space-y-6 w-full">
                  <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 w-full">
                    <div className="w-full">
                      <label htmlFor="name" className="block text-sm sm:text-base font-medium text-white mb-1.5">
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your full name"
                        className="mt-1 sm:mt-1.5 block w-full min-w-0 rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3.5 text-[16px] sm:text-base shadow-sm text-white placeholder:text-white/30 focus:border-sky-400/40 focus:outline-none focus:ring-1 focus:ring-sky-400/30 backdrop-blur-sm transition-all duration-200 hover:bg-white/[0.08]"
                        autoComplete="name"
                      />
                    </div>
                    <div className="w-full">
                      <label htmlFor="email" className="block text-sm sm:text-base font-medium text-white mb-1.5">
                        Email Address <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className="mt-1 sm:mt-1.5 block w-full min-w-0 rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3.5 text-[16px] sm:text-base shadow-sm text-white placeholder:text-white/30 focus:border-sky-400/40 focus:outline-none focus:ring-1 focus:ring-sky-400/30 backdrop-blur-sm transition-all duration-200 hover:bg-white/[0.08]"
                        autoComplete="email"
                      />
                    </div>
                  </div>

                  <div className="w-full">
                    <label htmlFor="company" className="block text-sm sm:text-base font-medium text-white mb-1.5">
                      Company Name <span className="text-white/30 font-normal">(optional)</span>
                    </label>
                    <input
                      id="company"
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Enter your company name"
                      className="mt-1 sm:mt-1.5 block w-full min-w-0 rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3.5 text-[16px] sm:text-base shadow-sm text-white placeholder:text-white/30 focus:border-sky-400/40 focus:outline-none focus:ring-1 focus:ring-sky-400/30 backdrop-blur-sm transition-all duration-200 hover:bg-white/[0.08]"
                      autoComplete="organization"
                    />
                  </div>

                  <div className="w-full">
                    <label htmlFor="service" className="block text-sm sm:text-base font-medium text-white mb-1.5">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="mt-1 sm:mt-1.5 block w-full min-w-0 rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3.5 text-[16px] sm:text-base shadow-sm text-white focus:border-sky-400/40 focus:outline-none focus:ring-1 focus:ring-sky-400/30 backdrop-blur-sm transition-all duration-200 hover:bg-white/[0.08]"
                    >
                      <option value="" className="bg-slate-900">Select a service...</option>
                      <option value="incorporation" className="bg-slate-900">Company Incorporation</option>
                      <option value="licenses" className="bg-slate-900">Business Licenses & Permits</option>
                      <option value="import-export" className="bg-slate-900">Import / Export Compliance</option>
                      <option value="certification" className="bg-slate-900">Product Certification (SNI)</option>
                      <option value="work-permits" className="bg-slate-900">Work Permits & Immigration</option>
                      <option value="general" className="bg-slate-900">General Inquiry</option>
                    </select>
                  </div>

                  <div className="w-full">
                    <label htmlFor="message" className="block text-sm sm:text-base font-medium text-white mb-1.5">
                      Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us about your project and how we can help..."
                      className="mt-1 sm:mt-1.5 block w-full min-w-0 rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3.5 text-[16px] sm:text-base shadow-sm text-white placeholder:text-white/30 focus:border-sky-400/40 focus:outline-none focus:ring-1 focus:ring-sky-400/30 backdrop-blur-sm transition-all duration-200 hover:bg-white/[0.08] resize-y min-h-[130px]"
                    />
                  </div>

                  {error && (
                    <p className="text-sm text-red-400 bg-red-500/10 rounded-lg px-4 py-2.5">
                      {error}
                    </p>
                  )}

                  <Button
                    type="submit"
                    disabled={submitting}
                    size="lg"
                    className="w-full gap-2.5 bg-gradient-to-b from-sky-500 to-sky-600 hover:from-sky-400 hover:to-sky-500 text-white text-sm sm:text-base py-3.5 sm:py-4 shadow-lg shadow-sky-500/20 hover:shadow-xl hover:shadow-sky-500/30 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="size-4 sm:size-4.5 shrink-0" />
                    <span>{submitting ? "Sending..." : "Send Message"}</span>
                  </Button>
                </form>
              )}
            </motion.div>
            </div>

            {/* Contact Info Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] backdrop-blur-xl p-6 sm:p-8 shadow-xl">
                <h3 className="text-lg sm:text-xl font-bold text-white">Contact Information</h3>
                <p className="mt-1.5 text-sm text-white/50">
                  Reach out through any of these channels.
                </p>

                <div className="mt-6 sm:mt-8 space-y-5 sm:space-y-6">
                  <div className="flex items-start gap-4 group">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400/20 to-blue-500/10 border border-sky-400/20">
                      <Phone className="size-4 sm:size-5 text-sky-300" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-white/40">Primary Contact</p>
                      <a href="tel:+6285216412782" className="text-sm sm:text-base text-white hover:text-sky-300 transition-colors">
                        +62 852 1641 2782
                      </a>
                      <p className="mt-0.5 text-[11px] text-white/30">Secondary: +62 852 1641 2782</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400/20 to-blue-500/10 border border-sky-400/20">
                      <Mail className="size-4 sm:size-5 text-sky-300" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-white/40">Email</p>
                      <a href="mailto:support@ptkonsultanberdikaribersama.id" className="text-sm sm:text-base text-white hover:text-sky-300 transition-colors break-all">
                        support@ptkonsultanberdikaribersama.id
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400/20 to-blue-500/10 border border-sky-400/20">
                      <MapPin className="size-4 sm:size-5 text-sky-300" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-white/40">Address</p>
                      <p className="text-sm sm:text-base text-white leading-relaxed">
                        Komplek Duta Harapan Indah Blok KK No.6
                        <br />
                        Kelurahan Kapuk Muara, Kecamatan Penjaringan
                        <br />
                        Jakarta Utara, North Jakarta
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400/20 to-blue-500/10 border border-sky-400/20">
                      <Clock className="size-4 sm:size-5 text-sky-300" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-white/40">Business Hours</p>
                      <p className="text-sm sm:text-base text-white">Monday – Friday</p>
                      <p className="text-sm text-white/50">9:00 AM – 5:00 PM (WIB)</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-white/10">
                  <a
                href="https://wa.me/6285216412782"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex w-full items-center justify-center gap-2.5 rounded-xl bg-gradient-to-b from-emerald-500 to-emerald-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/30 hover:-translate-y-0.5 active:translate-y-0 overflow-hidden"
                  >
                    <span className="relative z-10">Chat on WhatsApp</span>
                    <span className="relative z-10 flex size-4 items-center justify-center rounded-full bg-white/20 transition-all duration-300">
                      <ArrowRight className="size-3" />
                    </span>
                  </a>
                </div>

                <div className="mt-4 rounded-lg border border-sky-400/10 bg-gradient-to-b from-sky-400/5 to-transparent p-3.5">
                  <p className="text-[11px] text-center text-sky-300/60 leading-relaxed">
                    We typically respond within <span className="font-semibold text-sky-300/80">24 hours</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* Transition blend between Contact Grid and Quick CTA */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#0b1120]" />
      </section>

      {/* Quick CTA */}
      <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0b1120] to-transparent z-10" />
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://res.cloudinary.com/dahp1ngcc/image/upload/v1779191726/Kelly_Talking_to_herself_gvknz9.jpg')",
          }}
        />
        {/* Dark overlays - dimmed like footer */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1a]/95 via-[#0f1522]/90 to-[#080b14]/95" />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 mx-auto w-full max-w-3xl px-4 sm:px-6 text-center lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center w-full"
          >
            <div className="mb-5 sm:mb-8 flex items-center gap-3 sm:gap-4 w-full justify-center">
              <div className="h-px w-10 sm:w-16 bg-gradient-to-r from-transparent via-sky-400/40 to-transparent shrink-0" />
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3.5 sm:px-4 py-1.5 text-[10px] sm:text-xs font-medium tracking-wider uppercase text-white/60 whitespace-nowrap shrink-0 backdrop-blur-sm">
                <span className="flex size-1.5 rounded-full bg-sky-400 shadow-lg shadow-sky-400/50" />
                Quick Call
              </span>
              <div className="h-px w-10 sm:w-16 bg-gradient-to-r from-transparent via-sky-400/40 to-transparent shrink-0" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
              Prefer a Quick Call?
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-white/60 max-w-xl mx-auto">
              Call us directly and speak with our team about your Indonesia market entry needs.
            </p>
            <div className="mt-8 sm:mt-10 flex flex-col items-center justify-center gap-3 sm:gap-4 sm:flex-row w-full">
              <a
                href="tel:+6285216412782"
                className="group relative inline-flex items-center gap-2.5 sm:gap-3 rounded-xl bg-gradient-to-b from-sky-500 to-sky-600 px-6 sm:px-9 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-white shadow-lg shadow-sky-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/30 hover:-translate-y-0.5 active:translate-y-0 overflow-hidden w-full sm:w-auto justify-center"
              >
                <Phone className="size-4 sm:size-5 shrink-0" />
                <span>Call +62 852 1641 2782</span>
                <span className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </a>
              <Link
                href="/services"
                className="group inline-flex items-center gap-2.5 sm:gap-3 rounded-xl border border-white/15 bg-white/[0.06] px-6 sm:px-9 py-3.5 sm:py-4 text-sm sm:text-base font-medium text-white/70 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/30 hover:text-white hover:-translate-y-0.5 active:translate-y-0 w-full sm:w-auto justify-center"
              >
                <span>View Our Services</span>
                <ArrowRight className="size-3.5 sm:size-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}