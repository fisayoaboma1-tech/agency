import Link from "next/link"
import {
  ArrowRight,
  Award,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react"

const values = [
  {
    title: "Integrity",
    description:
      "We operate with full transparency in every regulatory engagement.",
    icon: ShieldCheck,
  },
  {
    title: "Expertise",
    description:
      "Deep knowledge of Indonesian laws, regulations, and government processes.",
    icon: Award,
  },
  {
    title: "Client-First",
    description:
      "Every solution is tailored to your specific business needs and goals.",
    icon: Users,
  },
  {
    title: "Reliability",
    description:
      "We deliver on commitments with timely, accurate, and compliant results.",
    icon: Target,
  },
]

const expertise = [
  {
    title: "Regulatory Navigation",
    description:
      "In-depth knowledge of Indonesian laws, ministerial regulations, and the OSS-RBA system.",
  },
  {
    title: "Government Relations",
    description:
      "Established relationships with BKPM, Ministry of Law, and industry regulatory bodies.",
  },
  {
    title: "Cross-Border Compliance",
    description:
      "Expert handling of import/export regulations, customs procedures, and trade documentation.",
  },
  {
    title: "Technical Standards",
    description:
      "Comprehensive understanding of SNI standards, testing protocols, and factory inspection processes.",
  },
]

export default function AboutPage() {
  return (
    <>
      <section className="page-hero-atmosphere relative overflow-hidden border-b border-white/10">
        <div className="page-hero-content mx-auto max-w-7xl px-6 pb-16 pt-32 sm:px-10 sm:pb-20 lg:px-12 lg:pb-24 lg:pt-40">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
            <p className="site-eyebrow flex items-start gap-3 pt-2">
              <span className="mt-2 h-px w-8 shrink-0 bg-sky-400/70" />
              About PT. KBB
            </p>
            <div className="max-w-3xl">
              <h1 className="site-heading text-4xl text-white sm:text-5xl lg:text-6xl">
                A steady partner for your next market.
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-7 text-slate-300/80 sm:text-lg sm:leading-8">
                We are a specialized consulting firm dedicated to helping
                foreign companies successfully enter and operate in the
                Indonesian market. With deep regulatory expertise and a proven
                track record, we are your trusted partner for Indonesia market
                entry.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="surface-tint border-b border-white/10 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div className="max-w-md">
              <p className="site-eyebrow">What guides us</p>
              <h2 className="site-heading mt-4 text-3xl text-white sm:text-4xl">
                Why choose KBB?
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-300/75">
                We bring together deep regulatory knowledge, practical
                experience, and a commitment to excellence.
              </p>
            </div>
            <div className="grid gap-x-10 sm:grid-cols-2">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <article
                    key={value.title}
                    className={`border-t border-white/10 py-6 ${
                      index > 1 ? "sm:border-t-0 sm:border-b" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon
                        aria-hidden="true"
                        className="size-4 text-sky-300"
                        strokeWidth={1.6}
                      />
                      <h3 className="text-base font-medium text-white">
                        {value.title}
                      </h3>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-slate-300/70">
                      {value.description}
                    </p>
                  </article>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="surface-soft-glow py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div className="max-w-md">
              <p className="site-eyebrow">Our expertise</p>
              <h2 className="site-heading mt-4 text-3xl text-white sm:text-4xl">
                Clarity in a complex environment.
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-300/75">
                We specialize in navigating Indonesia&apos;s complex regulatory
                environment.
              </p>
            </div>
            <div>
              {expertise.map((item, index) => (
                <article
                  key={item.title}
                  className="grid gap-2 border-b border-white/10 py-5 first:border-t sm:grid-cols-[3rem_1fr] sm:gap-5 sm:py-6"
                >
                  <span className="font-mono text-xs text-sky-300/80">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="font-medium text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-300/70">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="surface-ink border-t border-white/10 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 sm:px-10 lg:grid-cols-[1fr_auto] lg:items-end lg:px-12">
          <div className="max-w-2xl">
            <p className="site-eyebrow">Let&apos;s work together</p>
            <h2 className="site-heading mt-4 text-3xl text-white sm:text-4xl">
              Ready to make Indonesia your next step?
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300/75">
              Ready to start your Indonesia market entry journey? Contact our
              team today.
            </p>
          </div>
          <Link
            href="/contact"
            className="site-button inline-flex items-center justify-center gap-3 px-5 text-sm font-medium"
          >
            Contact Us <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
