import Link from "next/link"
import { Logo } from "@/components/logo"
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react"

const footerLinks = {
  services: [
    { name: "Company Incorporation", href: "/services#incorporation" },
    { name: "Business Licenses", href: "/services#licenses" },
    { name: "Import/Export Compliance", href: "/services#import-export" },
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

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-gradient-to-b from-slate-900 via-[#0b1120] to-black overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-white/40 leading-relaxed">
              Your trusted partner for Indonesia market entry. We help foreign
              companies navigate company registration, licensing, compliance,
              and certification seamlessly.
            </p>
            <div className="flex gap-3">
              <a
                href="https://wa.me/6285216412782"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-white/60 hover:text-white transition-colors"
              >
                WhatsApp us <ArrowUpRight className="size-3.5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/40 transition-colors hover:text-white/70"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/40 transition-colors hover:text-white/70"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+6285216412782"
                  className="flex items-start gap-2 text-sm text-white/40 transition-colors hover:text-white/70"
                >
                  <Phone className="mt-0.5 size-4 shrink-0" />
                  <span>+62 852 1641 2782</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+6283161698888"
                  className="flex items-start gap-2 text-sm text-white/40 transition-colors hover:text-white/70"
                >
                  <Phone className="mt-0.5 size-4 shrink-0" />
                  <span>+62 831 6169 8888</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@ptssni.id"
                  className="flex items-start gap-2 text-sm text-white/40 transition-colors hover:text-white/70"
                >
                  <Mail className="mt-0.5 size-4 shrink-0" />
                  <span>support@ptssni.id</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2 text-sm text-white/40">
                  <MapPin className="mt-0.5 size-4 shrink-0" />
                  <span>
                    OCBD Park, Jl. Cahaya Raya Blok H10 No. 11
                    <br />
                    Kawasan Industri Sentul
                    <br />
                    Bogor, Jawa Barat, Indonesia
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/[0.06] pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-white/30">
              &copy; {new Date().getFullYear()} PT. Solusi Sertifikasi Nasional
              Indonesia (SSNI). All rights reserved.
            </p>
            <p className="text-xs text-white/30">
              Simplifying Business Expansion into Indonesia
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}