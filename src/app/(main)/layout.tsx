import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { PageLoader } from "@/components/page-loader";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PageLoader>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppFloat />
    </PageLoader>
  );
}