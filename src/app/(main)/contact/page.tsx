"use client"

import React from "react"
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Mail,
  MapPin,
  Phone,
} from "lucide-react"

export default function ContactPage() {
  const [submitted, setSubmitted] = React.useState(false)
  const [submitting, setSubmitting] = React.useState(false)
  const [error, setError] = React.useState("")
  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [company, setCompany] = React.useState("")
  const [service, setService] = React.useState("")
  const [message, setMessage] = React.useState("")

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitting(true)
    setError("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, company, service, message }),
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || "Failed to send message.")
      }

      setSubmitted(true)
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Something went wrong. Please try again.",
      )
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

  return (
    <>
      <section className="page-hero-atmosphere relative overflow-hidden border-b border-white/10">
        <div className="page-hero-content mx-auto max-w-7xl px-6 pb-16 pt-32 sm:px-10 sm:pb-20 lg:px-12 lg:pb-24 lg:pt-40">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
            <p className="site-eyebrow flex items-start gap-3 pt-2">
              <span className="mt-2 h-px w-8 shrink-0 bg-sky-400/70" />
              Get in touch
            </p>
            <div className="max-w-3xl">
              <h1 className="site-heading text-4xl text-white sm:text-5xl lg:text-6xl">
                Let&apos;s talk about what comes next.
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-7 text-slate-300/80 sm:text-lg sm:leading-8">
                Ready to expand your business into Indonesia? Get in touch with
                our team for a free consultation. We typically respond within
                24 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="surface-contact py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 sm:px-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20 lg:px-12">
          <div>
            <p className="site-eyebrow">Send us a message</p>
            <h2 className="site-heading mt-4 text-3xl text-white sm:text-4xl">
              Tell us about your plans.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-6 text-slate-300/70">
              Fill out the form and our team will get back to you within 24
              hours.
            </p>

            {submitted ? (
              <div
                role="status"
                className="mt-8 border-y border-sky-300/25 py-8"
              >
                <CheckCircle
                  aria-hidden="true"
                  className="size-6 text-sky-300"
                  strokeWidth={1.6}
                />
                <h3 className="mt-4 text-lg font-medium text-white">
                  Message sent successfully.
                </h3>
                <p className="mt-2 max-w-lg text-sm leading-6 text-slate-300/70">
                  Thank you for reaching out. Our team will contact you within
                  24 hours. In the meantime, feel free to WhatsApp us for urgent
                  inquiries.
                </p>
                <button
                  type="button"
                  onClick={resetForm}
                  className="site-link mt-5 text-sm font-medium"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-slate-200"
                    >
                      Full Name <span className="text-sky-300">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      placeholder="Enter your full name"
                      autoComplete="name"
                      className="site-field min-h-12 w-full px-3.5 text-sm"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-slate-200"
                    >
                      Email Address <span className="text-sky-300">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      placeholder="Enter your email address"
                      autoComplete="email"
                      className="site-field min-h-12 w-full px-3.5 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="mb-2 block text-sm font-medium text-slate-200"
                  >
                    Company Name{" "}
                    <span className="font-normal text-slate-500">
                      (optional)
                    </span>
                  </label>
                  <input
                    id="company"
                    type="text"
                    value={company}
                    onChange={(event) => setCompany(event.target.value)}
                    placeholder="Enter your company name"
                    autoComplete="organization"
                    className="site-field min-h-12 w-full px-3.5 text-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="mb-2 block text-sm font-medium text-slate-200"
                  >
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    value={service}
                    onChange={(event) => setService(event.target.value)}
                    className="site-field min-h-12 w-full px-3.5 text-sm"
                  >
                    <option value="" className="bg-[#111827]">
                      Select a service...
                    </option>
                    <option value="incorporation" className="bg-[#111827]">
                      Company Incorporation
                    </option>
                    <option value="licenses" className="bg-[#111827]">
                      Business Licenses &amp; Permits
                    </option>
                    <option value="import-export" className="bg-[#111827]">
                      Import / Export Compliance
                    </option>
                    <option value="certification" className="bg-[#111827]">
                      Product Certification (SNI)
                    </option>
                    <option value="work-permits" className="bg-[#111827]">
                      Work Permits &amp; Immigration
                    </option>
                    <option value="general" className="bg-[#111827]">
                      General Inquiry
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-slate-200"
                  >
                    Message <span className="text-sky-300">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    placeholder="Tell us about your project and how we can help..."
                    className="site-field min-h-36 w-full resize-y px-3.5 py-3 text-sm leading-6"
                  />
                </div>

                {error && (
                  <p
                    role="alert"
                    className="border-l-2 border-red-400 px-3 py-2 text-sm text-red-200"
                  >
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="site-button inline-flex w-full items-center justify-center gap-3 px-5 text-sm font-medium disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                >
                  {submitting ? "Sending..." : "Send Message"}
                  <ArrowRight aria-hidden="true" className="size-4" />
                </button>
              </form>
            )}
          </div>

          <aside className="contact-information-panel border-t border-white/10 p-6 pt-7 sm:p-8 lg:border-l lg:border-t-0">
            <p className="site-eyebrow">Contact information</p>
            <h2 className="site-heading mt-4 text-2xl text-white">
              Reach our team directly.
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-300/70">
              Reach out through any of these channels.
            </p>

            <dl className="mt-8 space-y-7">
              <div>
                <dt className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-slate-400">
                  <Phone aria-hidden="true" className="size-3.5 text-sky-300" />
                  Primary Contact
                </dt>
                <dd className="mt-2 pl-5.5">
                  <a
                    href="tel:+6285216412782"
                    className="text-sm text-slate-100 transition-colors hover:text-sky-300"
                  >
                    +62 852 1641 2782
                  </a>
                  <p className="mt-1 text-xs text-slate-500">
                    Secondary:{" "}
                    <a
                      href="tel:+6283161698888"
                      className="transition-colors hover:text-sky-300"
                    >
                      +62 831 6169 8888
                    </a>
                  </p>
                </dd>
              </div>
              <div>
                <dt className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-slate-400">
                  <Mail aria-hidden="true" className="size-3.5 text-sky-300" />
                  Email
                </dt>
                <dd className="mt-2 pl-5.5">
                  <a
                    href="mailto:support@ptkonsultantberdikaribersama.id"
                    className="break-all text-sm text-slate-100 transition-colors hover:text-sky-300"
                  >
                    support@ptkonsultantberdikaribersama.id
                  </a>
                </dd>
              </div>
              <div>
                <dt className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-slate-400">
                  <MapPin
                    aria-hidden="true"
                    className="size-3.5 text-sky-300"
                  />
                  Address
                </dt>
                <dd className="mt-2 pl-5.5 text-sm leading-6 text-slate-300/80">
                  Komplek Duta Harapan Indah Blok KK No.6
                  <br />
                  Kelurahan Kapuk Muara, Kecamatan Penjaringan
                  <br />
                  Jakarta Utara, North Jakarta
                </dd>
              </div>
              <div>
                <dt className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-slate-400">
                  <Clock aria-hidden="true" className="size-3.5 text-sky-300" />
                  Business Hours
                </dt>
                <dd className="mt-2 pl-5.5 text-sm leading-6 text-slate-300/80">
                  Monday – Friday
                  <br />
                  9:00 AM – 5:00 PM (WIB)
                </dd>
              </div>
            </dl>

            <a
              href="https://wa.me/6285216412782"
              target="_blank"
              rel="noopener noreferrer"
              className="site-button-secondary mt-8 inline-flex w-full items-center justify-center gap-2 px-4 text-sm font-medium"
            >
              Chat on WhatsApp
              <ArrowRight aria-hidden="true" className="size-4" />
            </a>
            <p className="mt-3 text-center text-xs text-slate-400">
              We typically respond within 24 hours.
            </p>
          </aside>
        </div>
      </section>

      <section className="surface-ink border-t border-white/10 py-16 sm:py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 sm:px-10 md:flex-row md:items-center md:justify-between lg:px-12">
          <div>
            <p className="site-eyebrow">Quick call</p>
            <h2 className="site-heading mt-3 text-2xl text-white sm:text-3xl">
              Prefer to speak with us?
            </h2>
            <p className="mt-2 text-sm text-slate-300/70">
              Call +62 852 1641 2782
            </p>
          </div>
          <a
            href="tel:+6285216412782"
            className="site-button inline-flex items-center justify-center gap-3 px-5 text-sm font-medium"
          >
            Call our team
            <ArrowRight aria-hidden="true" className="size-4" />
          </a>
        </div>
      </section>
    </>
  )
}
