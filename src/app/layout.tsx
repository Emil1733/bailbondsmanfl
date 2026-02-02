
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from "next/font/google";
import Footer from "@/components/Footer";
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
  metadataBase: new URL('https://bondflorida.com'),
  title: {
    default: "Florida Bail Bonds - 24/7 Statewide Network | Fast Inmate Release",
    template: "%s | Statewide Bail Bonds FL",
  },
  description: "Immediate bail assistance for all Florida counties. Search inmate rosters for Miami-Dade, Broward, Palm Beach, and more. Calculate fees and get fast release now.",
  keywords: ["Bail Bonds Florida", "Inmate Search FL", "Miami-Dade Jail", "Broward County Bail", "24 Hour Bail Bonds"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bondflorida.com",
    siteName: "Bond Florida",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bond Florida - Statewide Bail Bonds & Inmate Release",
      },
    ],
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
        {children}
        <Footer />
      </body>
    </html>
  );
}
