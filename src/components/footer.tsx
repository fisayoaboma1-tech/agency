import Link from "next/link"
import { Logo } from "@/components/logo"

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
    { name: "Contact", href: "/contact" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#080d18]">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <div className="grid gap-10 py-12 sm:py-14 lg:grid-cols-[1.4fr_1fr_0.7fr_1.2fr] lg:gap-12 lg:py-16">
          <div className="max-w-sm">
            <Logo light />
            <p className="mt-5 max-w-xs text-sm leading-6 text-slate-400">
              Trusted partner for foreign companies entering the Indonesian
              market. Company registration, licensing, compliance, and
              certification.
            </p>
          </div>

          <div>
            <h2 className="site-eyebrow">Services</h2>
            <ul className="mt-4 space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="site-eyebrow">Company</h2>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="max-w-sm">
            <h2 className="site-eyebrow">Contact</h2>
            <address className="mt-4 space-y-4 not-italic">
              <div>
                <p className="text-xs text-slate-500">Primary Contact</p>
                <a
                  href="tel:+6285216412782"
                  className="mt-1 inline-block text-sm text-slate-300 transition-colors hover:text-sky-300"
                >
                  +62 852 1641 2782
                </a>
              </div>
              <div>
                <p className="text-xs text-slate-500">Secondary</p>
                <a
                  href="tel:+6283161698888"
                  className="mt-1 inline-block text-sm text-slate-300 transition-colors hover:text-sky-300"
                >
                  +62 831 6169 8888
                </a>
              </div>
              <div>
                <p className="text-xs text-slate-500">Email</p>
                <a
                  href="mailto:support@ptkonsultantberdikaribersama.id"
                  className="mt-1 inline-block break-all text-sm text-slate-300 transition-colors hover:text-sky-300"
                >
                  support@ptkonsultantberdikaribersama.id
                </a>
              </div>
              <p className="text-sm leading-6 text-slate-400">
                Komplek Duta Harapan Indah Blok KK No.6
                <br />
                Kelurahan Kapuk Muara, Kecamatan Penjaringan
                <br />
                Jakarta Utara, North Jakarta
              </p>
            </address>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-white/10 py-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} PT. Konsultan Berdikari Bersama
            (KBB). All rights reserved.
          </p>
          <p>Simplifying Business Expansion into Indonesia</p>
        </div>
      </div>
    </footer>
  )
}
