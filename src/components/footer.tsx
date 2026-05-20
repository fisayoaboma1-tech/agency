import Link from "next/link"
import { Logo } from "@/components/logo"
import { Phone, Mail, MapPin } from "lucide-react"

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
    label: "Secondary",
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
    label: "Address",
    value: null,
    href: null,
  },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Top transition blend from previous section */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0b1120] to-transparent z-20" />

      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://res.cloudinary.com/dahp1ngcc/image/upload/v1778959636/WhatsApp_Image_2026-05-16_at_8.16.33_PM_bfnxf2.jpg')",
        }}
      />

      {/* Dark gradient overlays for blending */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1a]/95 via-[#0f1522]/90 to-[#080b14]/95" />
      <div className="absolute inset-0 bg-black/40" />

      {/* Subtle top border glow */}
      <div className="absolute top-0 left-0 right-0 z-10 h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent" />

      {/* Ambient glow top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10 w-[600px] h-[300px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main content */}
        <div className="py-16 lg:py-20">
          <div className="grid gap-12 sm:gap-14 lg:grid-cols-12 lg:gap-10">
            {/* Brand - wide column */}
            <div className="lg:col-span-4 space-y-5">
              <Logo />
              {/* Tagline */}
              <p className="text-[14px] text-white/70 leading-relaxed max-w-xs">
                Trusted partner for foreign companies entering the Indonesian market. 
                Company registration, licensing, compliance, and certification.
              </p>
            </div>

            {/* Services */}
            <div className="lg:col-span-3">
              <h3 className="mb-5 text-[12px] font-semibold uppercase tracking-[0.18em] text-gray-100">
                Services
              </h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[14px] text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="lg:col-span-2">
              <h3 className="mb-5 text-[12px] font-semibold uppercase tracking-[0.18em] text-gray-100">
                Company
              </h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[14px] text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="lg:col-span-3">
              <h3 className="mb-5 text-[12px] font-semibold uppercase tracking-[0.18em] text-gray-100">
                Contact
              </h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="tel:+6285216412782"
                    className="flex items-start gap-3 group"
                  >
                    <div className="flex size-7 shrink-0 items-center justify-center rounded-md bg-blue-500/10 border border-blue-400/20">
                      <Phone className="size-3 text-blue-400/70" />
                    </div>
                    <div>
                      <span className="block text-[10px] font-medium uppercase tracking-wider text-gray-100/60">
                        Primary Contact
                      </span>
                      <span className="text-[14px] text-gray-200 group-hover:text-white transition-colors">
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
                    <div className="flex size-7 shrink-0 items-center justify-center rounded-md bg-blue-500/10 border border-blue-400/20">
                      <Phone className="size-3 text-blue-400/70" />
                    </div>
                    <div>
                      <span className="block text-[10px] font-medium uppercase tracking-wider text-gray-100/60">
                        Secondary
                      </span>
                      <span className="text-[14px] text-gray-200 group-hover:text-white transition-colors">
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
                    <div className="flex size-7 shrink-0 items-center justify-center rounded-md bg-blue-500/10 border border-blue-400/20">
                      <Mail className="size-3 text-blue-400/70" />
                    </div>
                    <div>
                      <span className="block text-[10px] font-medium uppercase tracking-wider text-gray-100/60">
                        Email
                      </span>
                      <span className="text-[14px] text-gray-400 group-hover:text-white transition-colors break-all">
                        support@ptssni.id
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <div className="flex items-start gap-3">
                    <div className="flex size-7 shrink-0 items-center justify-center rounded-md bg-blue-500/10 border border-blue-400/20">
                      <MapPin className="size-3 text-blue-400/70" />
                    </div>
                    <div>
                      <span className="block text-[10px] font-medium uppercase tracking-wider text-gray-100/60">
                        Address
                      </span>
                      <span className="text-[14px] text-gray-400 leading-relaxed">
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
        <div className="border-t border-white/[0.06] py-7">
          <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
            <p className="text-[11px] text-white/40 text-center sm:text-left leading-relaxed">
              &copy; {new Date().getFullYear()} PT. Solusi Sertifikasi Nasional Indonesia (SSNI). All reserved.
            </p>
            <p className="text-[11px] text-white/30 text-center leading-relaxed">
              Simplifying Business Expansion into Indonesia
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}