import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PT. Solusi Sertifikasi Nasional Indonesia (SSNI) | Indonesia Market Entry & Business Consulting",
  description:
    "Simplify your business expansion into Indonesia. SSNI provides end-to-end company incorporation, licensing, import/export compliance, SNI product certification, and work permit services for foreign companies.",
  keywords: [
    "Indonesia business setup",
    "company registration Indonesia",
    "SNI certification",
    "Indonesia market entry",
    "foreign company Indonesia",
    "business license Indonesia",
    "import export compliance Indonesia",
    "work permit Indonesia",
    "PT SSNI",
    "Solusi Sertifikasi Nasional Indonesia",
  ],
  openGraph: {
    title: "PT. Solusi Sertifikasi Nasional Indonesia (SSNI)",
    description:
      "Simplifying Business Expansion into Indonesia — Company Setup, Licensing, Compliance & Certification.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}