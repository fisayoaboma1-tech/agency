import Link from "next/link"
import {
  ArrowRight,
  Building2,
  FileCheck,
  Globe,
  ShieldCheck,
  Users,
} from "lucide-react"

const serviceDetails = [
  {
    id: "incorporation",
    title: "Company Incorporation",
    description:
      "Full-service company registration in Indonesia. We handle everything from entity structuring to obtaining your Business Identification Number (NIB) through the OSS-RBA system.",
    icon: Building2,
    benefits: [
      "Limited Liability Company (PT) establishment",
      "Business Identification Number (NIB) via OSS-RBA",
      "Company domicile letter & tax registration",
      "Articles of Association notarization & Ministry approval",
      "Bank account opening assistance",
      "Company seal & operational readiness",
    ],
    suitable:
      "Foreign entrepreneurs, SMEs, and corporations looking to establish a legal presence in Indonesia.",
    why:
      "Getting your company structure right from day one is critical. We ensure your PT PMA is fully compliant with Indonesian corporate law, correctly classified under the Positive Investment List, and set up for smooth operations — saving you from costly restructuring later.",
  },
  {
    id: "licenses",
    title: "Business Licenses & Permits",
    description:
      "Navigate Indonesia's licensing requirements with confidence. We secure all industry-specific permits and government approvals needed for your operations.",
    icon: FileCheck,
    benefits: [
      "Business Licensing (IU / IUI / IUJK, etc.)",
      "BKPM / Investment Ministry coordination",
      "Location permits & environmental approvals",
      "Sector-specific licenses (construction, manufacturing, trade, services)",
      "Operational permits & compliance certificates",
      "License renewals & amendments",
    ],
    suitable:
      "Companies in regulated industries requiring multiple permits from Indonesian government agencies.",
    why:
      "Indonesia's licensing landscape is multi-layered and sector-specific. Missing a single permit can halt operations. We map every requirement for your industry and ensure you have full operational clearance before you launch.",
  },
  {
    id: "import-export",
    title: "Import / Export Compliance",
    description:
      "Streamline your cross-border trade operations. We handle customs documentation, regulatory compliance, and tariff classification for smooth import and export processes.",
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
    suitable:
      "Importers, exporters, and manufacturers moving goods across Indonesian borders.",
    why:
      "Customs delays and misclassified goods cost time and money. Our team ensures your HS codes are accurate, duties are optimized, and all documentation meets Indonesian customs standards.",
  },
  {
    id: "certification",
    title: "Product Certification (SNI)",
    description:
      "Mandatory SNI (Standar Nasional Indonesia) certification for products sold in Indonesia. Complete management from product testing to certification issuance.",
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
    suitable:
      "Manufacturers and importers of regulated products that require SNI certification to be sold in Indonesia.",
    why:
      "SNI certification is legally required for hundreds of product categories. Without it, your goods can be seized or fined. We manage the entire certification lifecycle — from lab testing to factory audits.",
  },
  {
    id: "work-permits",
    title: "Work Permits & Immigration",
    description:
      "Comprehensive work permit and immigration support for foreign professionals. We manage the full process from work permit application to stay permit issuance.",
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
    suitable:
      "International companies deploying foreign staff to Indonesia and professionals seeking work authorization.",
    why:
      "Indonesia's immigration system has strict quotas, documentation, and timelines. A single error can delay your expatriate's deployment by months. We handle every step so your foreign staff can start working without delays.",
  },
]

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero-atmosphere relative overflow-hidden border-b border-white/10">
        <div className="page-hero-content mx-auto max-w-7xl px-6 pb-16 pt-32 sm:px-10 sm:pb-20 lg:px-12 lg:pb-24 lg:pt-40">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
            <p className="site-eyebrow flex items-start gap-3 pt-2">
              <span className="mt-2 h-px w-8 shrink-0 bg-sky-400/70" />
              Our Services
            </p>
            <div className="max-w-3xl">
              <h1 className="site-heading text-4xl text-white sm:text-5xl lg:text-6xl">
                The right foundations for doing business in Indonesia.
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-7 text-slate-300/80 sm:text-lg sm:leading-8">
                End-to-end solutions for your Indonesia market entry. From
                company setup to product certification, we provide
                comprehensive support at every stage.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div>
        {serviceDetails.map((service, index) => {
          const Icon = service.icon
          return (
            <section
              key={service.id}
              id={service.id}
              className={`scroll-mt-24 border-b border-white/10 py-16 sm:py-20 lg:py-24 ${
                index % 2 === 0 ? "surface-service-primary" : "surface-service-alt"
              }`}
            >
              <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
                <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
                  <div>
                    <p className="site-eyebrow flex items-center gap-3">
                      <span className="font-mono text-slate-500">
                        0{index + 1}
                      </span>
                      Service
                    </p>
                    <div className="mt-6 flex items-start gap-4">
                      <Icon
                        aria-hidden="true"
                        className="mt-1 size-5 shrink-0 text-sky-300"
                        strokeWidth={1.6}
                      />
                      <h2 className="site-heading text-3xl text-white sm:text-4xl">
                        {service.title}
                      </h2>
                    </div>
                    <p className="mt-5 max-w-xl text-base leading-7 text-slate-300/75">
                      {service.description}
                    </p>
                    <div className="mt-7 border-l border-sky-300/30 pl-5">
                      <p className="site-eyebrow">Ideal for</p>
                      <p className="mt-2 text-sm leading-6 text-slate-300/75">
                        {service.suitable}
                      </p>
                    </div>
                    <Link
                      href="/contact"
                      className="site-link mt-7 inline-flex items-center gap-2 text-sm font-medium"
                    >
                      Discuss this service
                      <ArrowRight aria-hidden="true" className="size-4" />
                    </Link>
                  </div>

                  <div className="grid gap-8 sm:grid-cols-2 sm:gap-10">
                    <div>
                      <h3 className="text-sm font-medium text-white">
                        Key benefits
                      </h3>
                      <ul className="mt-4">
                        {service.benefits.map((benefit) => (
                          <li
                            key={benefit}
                            className="border-t border-white/10 py-3 text-sm leading-6 text-slate-300/75"
                          >
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="border-t border-white/10 pt-5 sm:border-t-0 sm:border-l sm:border-white/10 sm:pl-7 sm:pt-0">
                      <p className="site-eyebrow">Why this matters</p>
                      <p className="mt-4 text-sm leading-7 text-slate-300/75">
                        {service.why}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )
        })}
      </div>

      <section className="surface-ink py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 sm:px-10 lg:grid-cols-[1fr_auto] lg:items-end lg:px-12">
          <div className="max-w-2xl">
            <p className="site-eyebrow">A considered first step</p>
            <h2 className="site-heading mt-4 text-3xl text-white sm:text-4xl">
              Let&apos;s find the right path for your business.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300/75">
              Tell us what you are planning and our team will help you
              understand what comes next.
            </p>
          </div>
          <Link
            href="/contact"
            className="site-button inline-flex items-center justify-center gap-3 px-5 text-sm font-medium"
          >
            Get Started <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
