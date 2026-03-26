import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const plusJakartaSans = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Kwas House | Fraser Inclusive and Supportive Housing Society",
    template: "%s | Kwas House"
  },
  description: "Kwas House provides 14 affordable apartments in Hope, BC for adults with cognitive disabilities. Join the Fraser Inclusive and Supportive Housing Society in building a radiant sanctuary.",
  keywords: ["Kwas House", "Fraser Inclusive and Supportive Housing Society", "Affordable Housing Hope BC", "Supportive Housing BC", "Cognitive Disabilities Housing", "Community Housing Canada"],
  authors: [{ name: "Fraser Inclusive and Supportive Housing Society" }],
  creator: "Fraser Inclusive and Supportive Housing Society",
  publisher: "Fraser Inclusive and Supportive Housing Society",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/favicon/site.webmanifest",
  metadataBase: new URL("https://kwashouse.org"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Kwas House | A Forever Home in the Heart of Hope",
    description: "Building 14 affordable apartments for adults with cognitive challenges and seniors in Hope, BC.",
    url: "https://kwashouse.org",
    siteName: "Kwas House",
    locale: "en_CA",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NGO",
    "name": "Fraser Inclusive and Supportive Housing Society",
    "alternateName": "Kwas House",
    "url": "https://kwashouse.org",
    "logo": "https://kwashouse.org/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-778-783-2965",
      "contactType": "customer service",
      "email": "fishsociety@hotmail.com",
      "areaServed": "CA",
      "availableLanguage": "en"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "477 Hudson Bay Street",
      "addressLocality": "Hope",
      "addressRegion": "BC",
      "postalCode": "V0X 1L0",
      "addressCountry": "CA"
    },
    "description": "Kwas House provides 14 affordable apartments in Hope, BC for adults with cognitive disabilities."
  };

  return (
    <html lang="en" className={`scroll-smooth ${plusJakartaSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background font-body text-on-background antialiased selection:bg-secondary-fixed selection:text-on-secondary-fixed flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
