import Link from "next/link"
import {
  ArrowRight,
  Award,
  Building2,
  FileText,
  PhoneCall,
  RefreshCw,
  Send,
} from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Initial Consultation",
    description:
      "We start by understanding your business goals, the type of entity you need, and the specific regulatory requirements for your industry.",
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
    description:
      "You provide the necessary documents, and our team reviews them for completeness and compliance with Indonesian regulatory standards.",
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
    description:
      "We prepare and submit all applications to the relevant Indonesian authorities, including OSS-RBA, BKPM, ministries, and certification bodies.",
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
    description:
      "Indonesian authorities review and process your applications. We actively follow up to ensure timely approval and address any queries.",
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
    description:
      "For SNI certification, we coordinate product testing with accredited laboratories and arrange factory inspections as required.",
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
    description:
      "Once approved, we deliver all certificates and documentation. Our team remains available for compliance monitoring, renewals, and ongoing advisory support.",
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

const partnershipPhases = [
  {
    title: "Before You Start",
    items: [
      "Market entry advisory",
      "Entity structure planning",
      "Regulatory roadmap",
      "Cost & timeline estimation",
    ],
  },
  {
    title: "During Processing",
    items: [
      "Document preparation",
      "Authority submissions",
      "Status tracking & updates",
      "Issue resolution",
    ],
  },
  {
    title: "After Approval",
    items: [
      "Certificate delivery",
      "Compliance monitoring",
      "Renewal management",
      "Ongoing advisory",
    ],
  },
]

export default function ProcessPage() {
  return (
    <>
      <section className="page-hero-atmosphere relative overflow-hidden border-b border-white/10">
        <div className="page-hero-content mx-auto max-w-7xl px-6 pb-16 pt-32 sm:px-10 sm:pb-20 lg:px-12 lg:pb-24 lg:pt-40">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
            <p className="site-eyebrow flex items-start gap-3 pt-2">
              <span className="mt-2 h-px w-8 shrink-0 bg-sky-400/70" />
              Our Process
            </p>
            <div className="max-w-3xl">
              <h1 className="site-heading text-4xl text-white sm:text-5xl lg:text-6xl">
                A clear process, from first conversation to ongoing support.
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-7 text-slate-300/80 sm:text-lg sm:leading-8">
                A structured, transparent approach to getting your business
                established and compliant in Indonesia. We guide you every step
                of the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="surface-soft-glow py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-12">
          <div className="mb-9 grid gap-3 sm:grid-cols-[3rem_1fr] sm:gap-5">
            <span className="site-eyebrow">01—06</span>
            <div>
              <p className="site-eyebrow">The process</p>
              <h2 className="site-heading mt-3 text-3xl text-white sm:text-4xl">
                Each step, clearly understood.
              </h2>
            </div>
          </div>
          <ol className="border-t border-white/10">
            {steps.map((step) => {
              const Icon = step.icon
              return (
                <li
                  key={step.number}
                  className="grid gap-5 border-b border-white/10 py-7 sm:grid-cols-[3rem_1fr] sm:gap-5 sm:py-9 lg:grid-cols-[3rem_1fr_1fr]"
                >
                  <span className="font-mono text-sm text-sky-300/80">
                    {step.number}
                  </span>
                  <div>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                      <Icon
                        aria-hidden="true"
                        className="size-4 text-sky-300"
                        strokeWidth={1.6}
                      />
                      <h3 className="text-lg font-medium text-white">
                        {step.title}
                      </h3>
                    </div>
                    <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300/75">
                      {step.description}
                    </p>
                  </div>
                  <div className="sm:col-start-2 lg:col-start-3">
                    <p className="site-eyebrow">Typical duration · {step.duration}</p>
                    <ul className="mt-3 grid gap-x-5 gap-y-2 sm:grid-cols-2 lg:grid-cols-1">
                      {step.details.map((detail) => (
                        <li
                          key={detail}
                          className="text-sm leading-6 text-slate-400"
                        >
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              )
            })}
          </ol>
        </div>
      </section>

      <section className="surface-tint border-y border-white/10 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
          <div className="max-w-2xl">
            <p className="site-eyebrow">End-to-end partnership</p>
            <h2 className="site-heading mt-4 text-3xl text-white sm:text-4xl">
              Support that continues beyond approval.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300/75">
              From your first inquiry to long-term compliance support, KBB is
              with you at every stage of your Indonesia market entry journey.
            </p>
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-3 md:gap-0">
            {partnershipPhases.map((phase, index) => (
              <article
                key={phase.title}
                className={`border-t border-white/15 py-6 md:px-7 md:first:pl-0 md:last:pr-0 ${
                  index > 0 ? "md:border-l md:border-l-white/10" : ""
                }`}
              >
                <p className="font-mono text-xs text-sky-300/80">
                  0{index + 1}
                </p>
                <h3 className="mt-3 font-medium text-white">{phase.title}</h3>
                <ul className="mt-4 space-y-2">
                  {phase.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm leading-6 text-slate-300/70"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="surface-soft-glow py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 sm:px-10 lg:grid-cols-[1fr_auto] lg:items-end lg:px-12">
          <div className="max-w-2xl">
            <p className="site-eyebrow">Your next step</p>
            <h2 className="site-heading mt-4 text-3xl text-white sm:text-4xl">
              Start with a conversation.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300/75">
              We&apos;ll learn about your plans and outline the next steps for
              your business in Indonesia.
            </p>
          </div>
          <Link
            href="/contact"
            className="site-button inline-flex items-center justify-center gap-3 px-5 text-sm font-medium"
          >
            Book a Consultation
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
