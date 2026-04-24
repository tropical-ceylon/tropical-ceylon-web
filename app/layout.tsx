import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Optimized Font Loading
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tropicalceylon.com"),
  title: {
    default: "Tropical Ceylon | Sri Lanka Travel Guide & Tours",
    template: "%s | Tropical Ceylon",
  },
  description:
    "Plan your perfect trip to Sri Lanka. Expert guides on Sigiriya, Ella, beaches, and cultural tours with Tropical Ceylon.",
  keywords: [
    "Sri Lanka travel",
    "Sri Lanka tourism",
    "best places to visit in Sri Lanka",
    "Sri Lanka itinerary",
    "Tropical Ceylon",
    "Ceylon tea tours",
  ],
  alternates: {
    canonical: "/",
  },
  authors: [{ name: "Ranindu Amarasinghe" }],
  creator: "Tropical Ceylon",
  publisher: "Tropical Ceylon",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Sri Lanka Travel Guide | Tropical Ceylon",
    description: "Explore the pearl of the Indian Ocean. Authentic Sri Lankan travel guides.",
    url: "https://tropicalceylon.com",
    siteName: "Tropical Ceylon",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tropical Ceylon - Sri Lanka Travel",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tropical Ceylon | Sri Lanka Travel Guide",
    description: "Your ultimate guide to exploring Sri Lanka.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Structured Data for Google (Travel Agency/Website)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Tropical Ceylon",
    "image": "https://tropicalceylon.com/og-image.jpg",
    "url": "https://tropicalceylon.com",
    "telephone": "", 
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "LK",
    },
    "description": "Premium travel guide and tour insights for Sri Lanka.",
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-slate-900">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}