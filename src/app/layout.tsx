import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { PageLoader } from "@/components/page-loader";

export const metadata: Metadata = {
  title: "PT. Konsultan Berdikari Bersama (KBB) | Indonesia Market Entry & Business Consulting",
  description:
    "Simplify your business expansion into Indonesia. KBB provides end-to-end company incorporation, licensing, import/export compliance, SNI product certification, and work permit services for foreign companies.",
  keywords: [
    "Indonesia business setup",
    "company registration Indonesia",
    "SNI certification",
    "Indonesia market entry",
    "foreign company Indonesia",
    "business license Indonesia",
    "import export compliance Indonesia",
    "work permit Indonesia",
    "PT KBB",
    "Konsultan Berdikari Bersama",
    "KBB consulting Indonesia",
  ],
  openGraph: {
    title: "PT. Konsultan Berdikari Bersama (KBB)",
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
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">
        <PageLoader>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppFloat />
        </PageLoader>
      </body>
    </html>
  );
}