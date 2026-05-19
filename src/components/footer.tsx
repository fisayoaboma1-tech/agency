import Link from "next/link"
import { Logo } from "@/components/logo"
import { Phone, Mail, MapPin, ArrowUpRight, ArrowRight, ChevronRight } from "lucide-react"

const footerLinks = {
  services: [
    { name: "Company Incorporation", href: "/services#incorporation" },
    { name: "Business Licenses & Permits", href: "/services#licenses" },
    { name: "Import / Export Compliance", href: "/services#import-export" },
    { name: "Product Certification (SNI)", href: "/services#certification" },
    { name: "Work Permits & Immigration", href: "/services#work-permits" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Process", href: "/process" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
}

const contactInfo = [
  {
    icon: Phone,
    label: "Primary Contact",
    value: "+62 852 1641 2782",
    href: "tel:+6285216412782",
  },
  {
    icon: Phone,
    label: "Secondary Contact",
    value: "+62 831 6169 8888",
    href: "tel:+6283161698888",
  },
  {
    icon: Mail,
    label: "Email",
    value: "support@ptssni.id",
    href: "mailto:support@ptssni.id",
  },
  {
    icon: MapPin,
    label: "Office Address",
    value: null,
    href: null,
  },
]

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#070b12] via-[#0a0f1a] to-black overflow-hidden">
      {/* Top border glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main content */}
        <div className="py-16 lg:py-20">
          <div className="grid gap-12 sm:gap-14 lg:grid-cols-12 lg:gap-10">
            {/* Brand - wide column */}
            <div className="lg:col-span-4 space-y-6">
              <Logo />
              <p className="text-sm text-white/35 leading-relaxed max-w-xs">
                Trusted partner for foreign companies entering the Indonesian market. 
                Company registration, licensing, compliance, and certification.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row pt-2">
                <a
                  href="https://wa.me/6285216412782"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/10 hover:bg-white/15 border border-white/10 px-5 py-2.5 text-xs font-medium text-white/70 transition-all duration-300"
                >
                  <Phone className="size-3.5" />
                  <span>WhatsApp</span>
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/10 hover:bg-white/15 border border-white/10 px-5 py-2.5 text-xs font-medium text-white/70 transition-all duration-300"
                >
                  <span>Contact Us</span>
                  <ArrowRight className="size-3" />
                </Link>
              </div>
            </div>

            {/* Services */}
            <div className="lg:col-span-3">
              <h3 className="mb-5 text-[11px] font-semibold uppercase tracking-[0.15em] text-white/40">
                Services
              </h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/35 hover:text-white/70 transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="lg:col-span-2">
              <h3 className="mb-5 text-[11px] font-semibold uppercase tracking-[0.15em] text-white/40">
                Company
              </h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/35 hover:text-white/70 transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="lg:col-span-3">
              <h3 className="mb-5 text-[11px] font-semibold uppercase tracking-[0.15em] text-white/40">
                Contact
              </h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="tel:+6285216412782"
                    className="flex items-start gap-3 group"
                  >
                    <div className="flex size-7 shrink-0 items-center justify-center rounded-md bg-white/5 border border-white/10">
                      <Phone className="size-3 text-white/40" />
                    </div>
                    <div>
                      <span className="block text-[10px] font-medium uppercase tracking-wider text-white/25">
                        Primary Contact
                      </span>
                      <span className="text-sm text-white/35 group-hover:text-white/60 transition-colors">
                        +62 852 1641 2782
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+6283161698888"
                    className="flex items-start gap-3 group"
                  >
                    <div className="flex size-7 shrink-0 items-center justify-center rounded-md bg-white/5 border border-white/10">
                      <Phone className="size-3 text-white/40" />
                    </div>
                    <div>
                      <span className="block text-[10px] font-medium uppercase tracking-wider text-white/25">
                        Secondary
                      </span>
                      <span className="text-sm text-white/35 group-hover:text-white/60 transition-colors">
                        +62 831 6169 8888
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:support@ptssni.id"
                    className="flex items-start gap-3 group"
                  >
                    <div className="flex size-7 shrink-0 items-center justify-center rounded-md bg-white/5 border border-white/10">
                      <Mail className="size-3 text-white/40" />
                    </div>
                    <div>
                      <span className="block text-[10px] font-medium uppercase tracking-wider text-white/25">
                        Email
                      </span>
                      <span className="text-sm text-white/35 group-hover:text-white/60 transition-colors break-all">
                        support@ptssni.id
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <div className="flex items-start gap-3">
                    <div className="flex size-7 shrink-0 items-center justify-center rounded-md bg-white/5 border border-white/10">
                      <MapPin className="size-3 text-white/40" />
                    </div>
                    <div>
                      <span className="block text-[10px] font-medium uppercase tracking-wider text-white/25">
                        Address
                      </span>
                      <span className="text-sm text-white/35 leading-relaxed">
                        OCBD Park, Jl. Cahaya Raya Blok H10 No. 11
                        <br />
                        Kawasan Industri Sentul, Bogor
                        <br />
                        Jawa Barat, Indonesia
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] py-8">
          <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
            <p className="text-[11px] text-white/20 text-center sm:text-left">
              &copy; {new Date().getFullYear()} PT. Solusi Sertifikasi Nasional Indonesia (SSNI). All rights reserved.
            </p>
            <p className="text-[11px] text-white/15 text-center">
              Simplifying Business Expansion into Indonesia
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}