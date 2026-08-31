
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from "next/font/google";
import Footer from "@/components/Footer";
import { Analytics } from '@vercel/analytics/next';
import { SITE_NAME, SITE_URL, SOCIAL_IMAGE_URL } from '@/lib/seo';
import "./globals.css";

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const serif = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Florida Bail Bonds & Inmate Search | Bond Florida",
    template: "%s",
  },
  description: "Find Florida county jail contacts, official inmate-search links, bail information, and local service guides from Bond Florida's statewide directory.",
  keywords: ["Bail Bonds Florida", "Inmate Search FL", "Miami-Dade Jail", "Broward County Bail", "24 Hour Bail Bonds"],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: SITE_NAME,
    images: [
      {
        url: SOCIAL_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "Bond Florida - Statewide Bail Bonds & Inmate Release",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: [SOCIAL_IMAGE_URL],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sans.variable} ${serif.variable} antialiased bg-navy-950 text-slate-50`}
      >
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-md bg-white px-4 py-3 font-bold text-slate-950 shadow-xl transition-transform focus:translate-y-0"
        >
          Skip to main content
        </a>
        <div id="main-content" tabIndex={-1}>
          {children}
        </div>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
