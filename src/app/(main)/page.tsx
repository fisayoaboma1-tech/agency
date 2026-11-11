"use client"

import React from "react"
import Link from "next/link"
import {
  ArrowRight,
  Building2,
  Check,
  ChevronDown,
  FileCheck,
  Globe,
  ShieldCheck,
  Star,
  Users,
  X,
} from "lucide-react"
import { StatsCounter } from "@/components/stats-counter"

const services = [
  {
    title: "Company Incorporation",
    description:
      "Register your legal entity in Indonesia with ease. We handle NIB, OSS registration, and full legal entity setup.",
    icon: Building2,
    href: "/services#incorporation",
    items: [
      "Legal entity registration",
      "Business Identification Number (NIB)",
      "OSS-RBA system setup",
      "Local operations setup",
    ],
  },
  {
    title: "Business Licenses & Permits",
    description:
      "Navigate Indonesia's complex licensing landscape. We secure industry-specific permits and government approvals.",
    icon: FileCheck,
    href: "/services#licenses",
    items: [
      "Industry-specific permits",
      "BKPM / Investment Ministry approvals",
      "Construction, manufacturing, trade licenses",
      "Ongoing compliance support",
    ],
  },
  {
    title: "Import / Export Compliance",
    description:
      "Streamline your cross-border trade. We handle customs documentation and regulatory compliance for goods entering and leaving Indonesia.",
    icon: Globe,
    href: "/services#import-export",
    items: [
      "Import documentation & clearance",
      "Export compliance",
      "Customs classification & valuation",
      "Regulatory advisory",
    ],
  },
  {
    title: "Product Certification (SNI)",
    description:
      "Get your products approved for the Indonesian market. Comprehensive SNI certification from testing to issuance.",
    icon: ShieldCheck,
    href: "/services#certification",
    items: [
      "Product testing & inspection",
      "Factory inspection",
      "Compliance documentation",
      "Certification issuance",
    ],
  },
  {
    title: "Work Permits & Immigration",
    description:
      "Enable your foreign staff to work legally in Indonesia. Complete work permit and immigration document handling.",
    icon: Users,
    href: "/services#work-permits",
    items: [
      "Work permit (IMTA) processing",
      "Stay permits (KITAS/KITAP)",
      "Employee legal documentation",
      "Expatriate planning",
    ],
  },
]

const reasons = [
  {
    title: "Regulatory Expertise",
    description:
      "Deep understanding of Indonesian laws, BKPM requirements, and SNI standards.",
  },
  {
    title: "One-Stop Partnership",
    description:
      "From company setup to product certification — no need to juggle multiple vendors.",
  },
  {
    title: "Proven Track Record",
    description:
      "50+ international companies successfully established in Indonesia.",
  },
  {
    title: "Ongoing Support",
    description:
      "We don't just set you up; we stay with you for compliance and renewals.",
  },
]

const testimonials = [
  {
    name: "Alexandre Dubois",
    role: "CEO, EuroTech Manufacturing",
    content:
      "KBB made our company registration in Indonesia completely seamless. Their team handled everything from NIB to industry permits. We were operational in under 3 months.",
    rating: 4.8,
  },
  {
    name: "Sarah Chen",
    role: "Head of APAC, GreenEnergy Corp",
    content:
      "The SNI certification process seemed daunting, but KBB's expertise made it straightforward. They guided us through every step of testing and compliance.",
    rating: 4.5,
  },
  {
    name: "Michael Torres",
    role: "Director, Pacific Trade Group",
    content:
      "We needed import/export compliance support urgently. KBB responded within hours and had our documentation ready before the deadline. Highly professional.",
    rating: 5,
  },
]

const faqs = [
  {
    question: "How long does company registration in Indonesia take?",
    answer:
      "Typically 2-4 weeks for a standard PT (limited liability company) establishment. More complex structures may take 6-8 weeks.",
  },
  {
    question: "What is SNI certification and is it mandatory?",
    answer:
      "SNI (Standar Nasional Indonesia) is mandatory certification for many products sold in Indonesia. We handle the full process from testing to issuance.",
  },
  {
    question: "Can a foreigner fully own a company in Indonesia?",
    answer:
      "Yes, for many business sectors under the Positive Investment List. We'll advise on your specific case and help structure the entity accordingly.",
  },
  {
    question: "What documents are needed to start the process?",
    answer:
      "Basic requirements include passport copies, company profile, business plan, and board of directors' information. We'll provide a complete checklist during consultation.",
  },
  {
    question: "How much does it cost to set up a company in Indonesia?",
    answer:
      "Costs vary based on company type, sector, and complexity. Contact us for a tailored quote after our initial consultation.",
  },
]

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description?: string
}) {
  return (
    <div className="max-w-2xl">
      <p className="site-eyebrow">{eyebrow}</p>
      <h2 className="site-heading mt-4 text-3xl text-white sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-xl text-base leading-7 text-slate-300/75">
          {description}
        </p>
      )}
    </div>
  )
}

export default function HomePage() {
  const [showReviewModal, setShowReviewModal] = React.useState(false)

  React.useEffect(() => {
    if (!showReviewModal) return

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setShowReviewModal(false)
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [showReviewModal])

  return (
    <>
      <section className="home-hero-atmosphere relative isolate overflow-hidden border-b border-white/10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-36 top-20 hidden size-[34rem] rounded-full border border-sky-300/10 lg:block"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 top-36 hidden size-[22rem] rounded-full border border-sky-300/10 lg:block"
        />
        <div className="hero-content relative mx-auto grid min-h-[min(48rem,100svh)] max-w-7xl items-center gap-16 px-6 pb-20 pt-32 sm:px-10 lg:grid-cols-[1.4fr_0.6fr] lg:px-12 lg:pb-24 lg:pt-36">
          <div className="max-w-3xl">
            <p className="site-eyebrow flex items-center gap-3">
              <span className="h-px w-8 bg-sky-400/70" />
              Indonesia market entry · Jakarta
            </p>
            <h1 className="site-heading mt-7 max-w-3xl text-[2.65rem] text-white sm:text-6xl lg:text-[4.5rem]">
              Your next chapter in Indonesia, <span className="text-sky-300">made clear.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-slate-300/80 sm:text-lg sm:leading-8">
              KBB helps international businesses establish, operate and grow in
              Indonesia. We take care of incorporation, licensing, certification
              and compliance—so your team can focus on the opportunity.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="site-button inline-flex items-center justify-center gap-3 px-5 text-sm font-medium"
              >
                Discuss your plans
                <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
              <Link
                href="/services"
                className="site-button-secondary inline-flex items-center justify-center px-5 text-sm font-medium"
              >
                Explore our services
              </Link>
            </div>
          </div>

          <div className="relative max-w-sm border-l border-sky-300/25 bg-gradient-to-br from-white/[0.035] to-transparent py-4 pl-7 pr-3 lg:ml-auto lg:mt-28">
            <p className="site-eyebrow">One considered path forward</p>
            <ol className="mt-7 space-y-5 text-sm text-slate-200/85">
              {[
                "Establish your company",
                "Navigate local requirements",
                "Operate with confidence",
              ].map((item, index) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="font-mono text-xs text-sky-300/80">
                    0{index + 1}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
            <p className="mt-8 border-t border-white/10 pt-5 text-xs leading-5 text-slate-400">
              Company setup · Licensing · SNI certification · Trade compliance
            </p>
          </div>
        </div>
      </section>

      <section className="home-proof-surface border-b border-white/10 py-10 sm:py-12">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
          <StatsCounter />
        </div>
      </section>

      <section className="surface-paper py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
          <div className="flex flex-col justify-between gap-6 border-b border-white/10 pb-10 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="What we do"
              title="The groundwork for doing business in Indonesia."
              description="Practical, end-to-end support for the legal and regulatory steps that make a market entry work."
            />
            <Link
              href="/services"
              className="site-link inline-flex items-center gap-2 pb-1 text-sm font-medium"
            >
              See all services <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
          <div className="mt-2">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <article
                  key={service.title}
                  className="grid gap-5 border-b border-white/10 py-7 sm:py-8 lg:grid-cols-[3.5rem_1.1fr_1.4fr_auto] lg:items-start lg:gap-8"
                >
                  <span className="font-mono text-xs text-slate-500">
                    0{index + 1}
                  </span>
                  <div className="flex items-start gap-3">
                    <Icon
                      aria-hidden="true"
                      className="mt-1 size-4 shrink-0 text-sky-300"
                      strokeWidth={1.6}
                    />
                    <h3 className="text-lg font-medium text-white">
                      {service.title}
                    </h3>
                  </div>
                  <div>
                    <p className="max-w-xl text-sm leading-6 text-slate-300/75">
                      {service.description}
                    </p>
                    <ul className="mt-4 grid gap-x-6 gap-y-2 sm:grid-cols-2">
                      {service.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-xs leading-5 text-slate-400"
                        >
                          <Check
                            aria-hidden="true"
                            className="mt-1 size-3 shrink-0 text-sky-300/70"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    href={service.href}
                    aria-label={`Learn more about ${service.title}`}
                    className="site-link inline-flex items-center gap-2 text-sm lg:mt-1"
                  >
                    Details <ArrowRight aria-hidden="true" className="size-4" />
                  </Link>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="surface-tint border-y border-white/10 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 sm:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-12">
          <div>
            <SectionHeading
              eyebrow="Why KBB"
              title="Clear advice. Thoughtful execution."
              description="Entering a new market takes more than paperwork. It takes a partner who understands how the pieces fit together."
            />
            <Link
              href="/about"
              className="site-link mt-7 inline-flex items-center gap-2 text-sm font-medium"
            >
              Get to know us <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
          <div>
            {reasons.map((reason, index) => (
              <article
                key={reason.title}
                className="grid gap-2 border-b border-white/10 py-5 first:border-t sm:grid-cols-[3rem_1fr] sm:gap-5 sm:py-6"
              >
                <span className="font-mono text-xs text-sky-300/80">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="font-medium text-white">{reason.title}</h3>
                  <p className="mt-2 max-w-xl text-sm leading-6 text-slate-300/70">
                    {reason.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="surface-soft-glow py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
          <SectionHeading
            eyebrow="Client perspective"
            title="Trusted through every step."
            description="A selection of feedback from the businesses we have supported."
          />
          <div className="mt-11 grid gap-8 md:grid-cols-3 md:gap-0">
            {testimonials.map((testimonial, index) => (
              <article
                key={testimonial.name}
                className={`border-t border-white/15 py-6 md:px-7 md:first:pl-0 md:last:pr-0 ${
                  index > 0 ? "md:border-l md:border-l-white/10" : ""
                }`}
              >
                <div
                  className="flex items-center gap-1 text-sky-300"
                  aria-label={`${testimonial.rating} out of 5 stars`}
                >
                  {Array.from({ length: 5 }, (_, star) => (
                    <Star
                      key={star}
                      aria-hidden="true"
                      className={`size-3.5 ${
                        star < Math.floor(testimonial.rating)
                          ? "fill-amber-400 text-amber-400"
                          : star === Math.floor(testimonial.rating) &&
                              testimonial.rating % 1 >= 0.3
                            ? "fill-amber-400/50 text-amber-400/50"
                          : "text-slate-600"
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-xs text-slate-400">
                    {testimonial.rating.toFixed(1)}
                  </span>
                </div>
                <blockquote className="mt-5 text-sm leading-7 text-slate-200/85">
                  “{testimonial.content}”
                </blockquote>
                <div className="mt-6">
                  <p className="text-sm font-medium text-white">
                    {testimonial.name}
                  </p>
                  <p className="mt-1 text-xs text-slate-400">
                    {testimonial.role}
                  </p>
                </div>
              </article>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setShowReviewModal(true)}
            className="site-button-secondary mt-8 inline-flex items-center gap-2 px-4 text-sm"
          >
            <Star aria-hidden="true" className="size-4 text-amber-400" />
            Leave a Review
          </button>
        </div>
      </section>

      <section className="surface-ink border-y border-white/10 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 sm:px-10">
          <SectionHeading
            eyebrow="Good to know"
            title="Questions, answered."
            description="A few common questions about setting up and operating a business in Indonesia."
          />
          <div className="mt-9">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group border-b border-white/10 first:border-t"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left text-sm font-medium text-white marker:hidden">
                  {faq.question}
                  <ChevronDown
                    aria-hidden="true"
                    className="size-4 shrink-0 text-sky-300 transition-transform group-open:rotate-180"
                  />
                </summary>
                <p className="max-w-2xl pb-5 pr-8 text-sm leading-6 text-slate-300/75">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
          <p className="mt-7 text-sm text-slate-400">
            Still have questions?{" "}
            <Link href="/contact" className="site-link">
              Talk to our team
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="surface-soft-glow py-20 sm:py-24 lg:py-28">
        <div className="surface-cta-panel mx-auto grid max-w-7xl gap-8 px-6 py-10 sm:px-10 sm:py-12 lg:grid-cols-[1fr_auto] lg:items-center lg:px-12">
          <div className="max-w-2xl">
            <p className="site-eyebrow">Start a conversation</p>
            <h2 className="site-heading mt-4 text-3xl text-white sm:text-4xl">
              Make your move into Indonesia with confidence.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300/75">
              Tell us what you are planning. We will help you understand the
              steps ahead.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link
              href="/contact"
              className="site-button inline-flex items-center justify-center gap-3 px-5 text-sm font-medium"
            >
              Book a Consultation
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
            <a
              href="tel:+6285216412782"
              className="site-button-secondary inline-flex items-center justify-center px-5 text-sm font-medium"
            >
              Call +62 852 1641 2782
            </a>
          </div>
        </div>
      </section>

      {showReviewModal && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#070c15]/85 p-5 backdrop-blur-sm"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setShowReviewModal(false)
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="review-dialog-title"
            className="relative w-full max-w-md border border-white/15 bg-[#111827] p-7 sm:p-9"
          >
            <button
              type="button"
              aria-label="Close dialog"
              onClick={() => setShowReviewModal(false)}
              className="absolute right-5 top-5 p-1 text-slate-400 transition-colors hover:text-white"
            >
              <X aria-hidden="true" className="size-5" />
            </button>
            <p className="site-eyebrow">Client reviews</p>
            <h2
              id="review-dialog-title"
              className="site-heading mt-4 text-2xl text-white"
            >
              Review access is reserved for our clients.
            </h2>
            <p className="mt-4 text-sm leading-6 text-slate-300/75">
              Please complete a service engagement with KBB first. We would
              value your feedback afterward.
            </p>
            <Link
              href="/contact"
              onClick={() => setShowReviewModal(false)}
              className="site-button mt-7 inline-flex items-center justify-center gap-2 px-4 text-sm font-medium"
            >
              Start a Service
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
