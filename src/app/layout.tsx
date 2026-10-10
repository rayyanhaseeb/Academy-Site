import type { Metadata } from "next";
import { Oswald, Montserrat, JetBrains_Mono } from "next/font/google";
import { siteConfig } from "@/config/site";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
  fallback: ["Bebas Neue", "Arial Narrow", "Impact", "sans-serif"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  fallback: ["Helvetica Neue", "Arial", "sans-serif"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  fallback: ["SF Mono", "Menlo", "Consolas", "monospace"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: `${siteConfig.brandName} | Training & Education`,
  description: siteConfig.tagline,
  openGraph: {
    title: `${siteConfig.brandName} | Training & Education`,
    description: siteConfig.tagline,
    url: siteConfig.siteUrl,
    siteName: siteConfig.brandName,
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: "/images/hero-1.webp",
        width: 1920,
        height: 1080,
        alt: `${siteConfig.brandName} Campus`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.brandName} | Training & Education`,
    description: siteConfig.tagline,
    images: ["/images/hero-1.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: siteConfig.brandName,
    description: siteConfig.tagline,
    url: siteConfig.siteUrl,
    telephone: siteConfig.phoneDisplay,
    address: {
      "@type": "PostalAddress",
      addressCountry: "PK",
      addressLocality: siteConfig.locationLabel,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: `+${siteConfig.phoneDigits}`,
      contactType: "admissions",
      availableLanguage: ["English", "Urdu"],
    },
  };

  return (
    <html lang="en-PK">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${oswald.variable} ${montserrat.variable} ${jetbrainsMono.variable} font-body bg-bg-footer text-text-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
