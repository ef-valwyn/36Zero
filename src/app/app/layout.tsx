import "./globals.css";
import type { Metadata } from "next";
import { SITE, FLAGS } from "@/lib/config";
import SiteNav from "@/components/SiteNav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: `${SITE.name} — Global Dealer for Adventure & ZEN Yachts`,
  description: "Custom multihulls, solar-electric cruising, and ZeroLap supported crossings.",
  openGraph: {
    title: SITE.name,
    description: "Quiet Power. Bluewater Range. Built by Sailors.",
    url: SITE.url,
    siteName: SITE.name,
    images: [{ url: "/img/hero.jpg", width: 1200, height: 630 }],
    locale: "en_SG",
    type: "website"
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <SiteNav enableZen={FLAGS.enableZen} />
        <main className="min-h-[70vh]">{children}</main>
        <Footer />
        {/* GA4 (optional) */}
        {/* Replace if you add GA ID */}
      </body>
    </html>
  );
}