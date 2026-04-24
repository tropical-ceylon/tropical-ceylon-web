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
    // "Tropical Ceylon" first helps Google associate the brand with the URL
    default: "Tropical Ceylon | Sri Lanka Travel Guide & Travels",
    template: "%s | Tropical Ceylon",
  },
  description:
    "Discover Sri Lanka with Tropical Ceylon. Expert guides on Sigiriya, Ella, and luxury travels across the island.",
  keywords: [
    "Tropical Ceylon",
    "Tropical Ceylon Travels",
    "Sri Lanka travel",
    "Sri Lanka tourism",
    "Sri Lanka travel guide",
    "Ceylon tours",
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
    title: "Tropical Ceylon | Sri Lanka Travel Guide",
    description: "Authentic Sri Lankan travel guides and curated island experiences.",
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
  // Enhanced Structured Data to capture branded search variants
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Tropical Ceylon",
    "alternateName": ["Tropical Ceylon Travels", "Tropical Ceylon Sri Lanka"],
    "image": "https://tropicalceylon.com/og-image.jpg",
    "url": "https://tropicalceylon.com",
    "logo": "https://tropicalceylon.com/logo.png", // Ensure this exists in your public folder
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "LK",
    },
    "description": "Premium travel guide and tour insights for Sri Lanka.",
    "sameAs": [
      // Add your actual social media URLs here to help Google verify your brand
      "https://www.facebook.com/tropicalceylon",
      "https://www.instagram.com/tropicalceylon",
      "https://twitter.com/tropicalceylon"
    ]
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