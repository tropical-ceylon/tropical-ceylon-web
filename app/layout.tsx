import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tropicalceylon.com"),

  title: {
    default: "Tropical Ceylon | Sri Lanka Travel Guide",
    template: "%s | Tropical Ceylon",
  },

  description:
    "Discover Sri Lanka with Tropical Ceylon. Explore destinations, tours, hotels, and travel tips.",

  keywords: [
    "Sri Lanka travel",
    "Sri Lanka tourism",
    "Sri Lanka tour packages",
    "Sri Lanka travel guide",
    "best places to visit in Sri Lanka",
    "Sri Lanka itinerary",
    "Tropical Ceylon",
  ],

  authors: [{ name: "Tropical Ceylon" }],
  creator: "Tropical Ceylon",
  publisher: "Tropical Ceylon",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Sri Lanka Travel Guide | Tropical Ceylon",
    description:
      "Explore Sri Lanka’s best destinations, tours, and travel tips.",
    url: "https://tropicalceylon.com",
    siteName: "Tropical Ceylon",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tropical Ceylon Sri Lanka Travel",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Tropical Ceylon | Sri Lanka Travel Guide",
    description:
      "Plan your Sri Lanka trip with destinations, tours, hotels, and tips.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-grow">{children}</main>

        <Footer />

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}