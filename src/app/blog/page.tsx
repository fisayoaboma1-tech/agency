"use client"

import React from "react"
import Link from "next/link"
import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Clock, ChevronRight } from "lucide-react"

const posts = [
  {
    title: "A Complete Guide to Setting Up a Company in Indonesia for Foreign Investors",
    excerpt:
      "Learn the step-by-step process of establishing a PT PMA in Indonesia, from understanding the Positive Investment List to obtaining your NIB through OSS-RBA.",
    date: "Dec 15, 2025",
    readTime: "8 min read",
    category: "Company Setup",
    slug: "guide-setting-up-company-indonesia-foreign-investors",
  },
  {
    title: "Understanding SNI Certification: What Foreign Manufacturers Need to Know",
    excerpt:
      "SNI certification is mandatory for many products sold in Indonesia. This guide covers the process, timeline, costs, and how to prepare for factory inspections.",
    date: "Nov 28, 2025",
    readTime: "10 min read",
    category: "Certification",
    slug: "understanding-sni-certification-foreign-manufacturers",
  },
  {
    title: "Importing Goods into Indonesia: Customs, Duties, and Compliance Requirements",
    excerpt:
      "Navigate Indonesia's import regulations with confidence. Learn about HS code classification, duty calculations, restricted goods, and documentation requirements.",
    date: "Nov 10, 2025",
    readTime: "7 min read",
    category: "Import/Export",
    slug: "importing-goods-indonesia-customs-duties-compliance",
  },
  {
    title: "Work Permits for Foreigners in Indonesia: IMTA, KITAS, and RPTKA Explained",
    excerpt:
      "A comprehensive overview of Indonesia's work permit system for expatriates, including the application process, required documents, and compliance obligations.",
    date: "Oct 22, 2025",
    readTime: "6 min read",
    category: "Immigration",
    slug: "work-permits-foreigners-indonesia-imta-kitas-rptka",
  },
  {
    title: "Indonesia's Positive Investment List: Which Sectors Are Open to Foreign Ownership?",
    excerpt:
      "An updated look at Indonesia's Positive Investment List and which business sectors allow 100% foreign ownership versus those with restrictions.",
    date: "Oct 5, 2025",
    readTime: "9 min read",
    category: "Regulatory",
    slug: "indonesia-positive-investment-list-foreign-ownership",
  },
  {
    title: "Business Licenses in Indonesia: From NIB to Operational Permits",
    excerpt:
      "Demystifying Indonesia's business licensing system. Understand the difference between risk-based licensing tiers and what permits your business needs.",
    date: "Sep 18, 2025",
    readTime: "7 min read",
    category: "Licensing",
    slug: "business-licenses-indonesia-nib-operational-permits",
  },
]

export default function BlogPage() {
  const [slideIndex, setSlideIndex] = React.useState(0)

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
      <section className="relative pt-24 pb-16 sm:py-24 lg:py-28 overflow-hidden">
        {/* Slideshow background images */}
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
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.08] px-4 sm:px-5 py-1.5 sm:py-2 text-[10px] sm:text-xs font-medium tracking-wider uppercase text-white/60 backdrop-blur-sm shadow-lg shadow-black/20">
              <span className="flex size-1.5 rounded-full bg-sky-400 shadow-lg shadow-sky-400/50" />
              Blog
            </span>
            <h1 className="mt-5 sm:mt-6 text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Our <span className="bg-gradient-to-r from-sky-200 via-white to-sky-100 bg-clip-text text-transparent">Blog</span>
            </h1>
            <p className="mt-4 sm:mt-5 text-xs sm:text-sm leading-relaxed text-white/40 max-w-2xl mx-auto">
              Insights, guides, and updates on doing business in Indonesia. Stay informed
              about regulatory changes, market entry strategies, and compliance best practices.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="relative py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-[#0b1120] via-slate-950 to-[#0b1120] overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          {/* Posts grid */}
          <div className="grid gap-5 sm:gap-6 lg:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="group flex flex-col rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] backdrop-blur-xl shadow-xl transition-all duration-500 hover:border-white/20 hover:-translate-y-1 overflow-hidden"
              >
                {/* Image placeholder */}
                <div className="aspect-[16/9] w-full bg-gradient-to-br from-sky-400/10 to-blue-500/5" />

                {/* Content */}
                <div className="flex flex-1 flex-col p-4 sm:p-5">
                  {/* Category badge */}
                  <div className="mb-3">
                    <span className="inline-block rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-[10px] sm:text-xs font-medium text-sky-300 tracking-wide uppercase">
                      {post.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-sm sm:text-base font-semibold leading-snug text-white transition-colors group-hover:text-white/80 line-clamp-2 sm:line-clamp-3">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>

                  {/* Excerpt */}
                  <p className="mt-2 flex-1 text-xs sm:text-sm text-white/50 leading-relaxed line-clamp-3 sm:line-clamp-4">
                    {post.excerpt}
                  </p>

                  {/* Footer meta */}
                  <div className="mt-4 sm:mt-5 pt-4 border-t border-white/10">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] sm:text-xs text-white/40">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="size-3 shrink-0 text-sky-400/80" />
                        {post.date}
                      </span>
                      <span className="w-px h-3 bg-white/10" />
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="size-3 shrink-0 text-sky-400/80" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-10 sm:mt-12 lg:mt-16 text-center">
            <Button
              variant="outline"
              disabled
              className="border-white/20 text-white/40 bg-transparent hover:bg-white/5 text-xs sm:text-sm px-5 sm:px-6 py-2.5 rounded-xl"
            >
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-[#0b1120]">
        <div className="relative mx-auto max-w-3xl px-5 sm:px-6 text-center lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="mb-5 sm:mb-8 flex items-center gap-3 sm:gap-4">
              <div className="h-px w-10 sm:w-16 bg-gradient-to-r from-transparent via-sky-400/40 to-transparent" />
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3.5 sm:px-4 py-1.5 text-[10px] sm:text-xs font-medium tracking-wider uppercase text-white/60 whitespace-nowrap backdrop-blur-sm">
                <span className="flex size-1.5 rounded-full bg-sky-400 shadow-lg shadow-sky-400/50" />
                Stay Updated
              </span>
              <div className="h-px w-10 sm:w-16 bg-gradient-to-r from-transparent via-sky-400/40 to-transparent" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
              Want Regular Updates?
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-white/60 max-w-xl mx-auto">
              Subscribe to our newsletter for the latest on Indonesia market entry,
              regulatory changes, and compliance tips.
            </p>
            <div className="mt-6 sm:mt-8 mx-auto max-w-md px-4 sm:px-0">
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 rounded-xl border border-white/20 bg-white/[0.06] px-4 py-3 text-sm shadow-sm text-white placeholder:text-white/30 focus:border-sky-400/40 focus:outline-none focus:ring-1 focus:ring-sky-400/30 backdrop-blur-sm"
                  required
                />
                <Button
                  type="submit"
                  className="rounded-xl bg-gradient-to-b from-sky-500 to-sky-600 hover:from-sky-400 hover:to-sky-500 text-white text-sm py-3 w-full sm:w-auto shadow-lg shadow-sky-500/20"
                >
                  Subscribe
                </Button>
              </form>
            </div>
            <div className="mt-6 sm:mt-8">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.06] px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-medium text-white/70 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/30 hover:text-white"
              >
                Contact Our Team <ArrowRight className="size-3.5 sm:size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}