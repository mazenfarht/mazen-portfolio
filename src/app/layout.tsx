import type { Metadata } from "next";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

// Change this one line if you move to a custom domain
const SITE_URL = "https://mazen-studio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Mazen Mostafa | Web Developer — Business & Corporate Websites",
    template: "%s | Mazen Mostafa",
  },

  description:
    "Web Developer building clear, fast business and corporate websites for companies in Saudi Arabia and Egypt. WordPress, React & Next.js. Corporate, industrial and contracting websites.",

  keywords: [
    "Mazen Mostafa",
    "Mazen Mostafa Web Developer",
    "Web Developer Egypt",
    "Web Developer Cairo",
    "Business Website Developer",
    "Corporate Website Developer Saudi Arabia",
    "Website Developer for Contracting Companies",
    "MEP Company Website",
    "WordPress Developer Egypt",
    "WordPress Developer Saudi Arabia",
    "Next.js Developer",
    "React.js Developer",
    "Website Redesign",
    "Website Performance Optimization",
    "Freelance Web Developer",
  ],

  authors: [
    {
      name: "Mazen Mostafa Sayed",
      url: SITE_URL,
    },
  ],

  creator: "Mazen Mostafa Sayed",
  publisher: "Mazen Mostafa Sayed",

  category: "technology",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: SITE_URL,
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Mazen Mostafa Portfolio",

    title: "Mazen Mostafa | Web Developer — Business & Corporate Websites",

    description:
      "Business and corporate websites for companies in Saudi Arabia and Egypt. WordPress, React & Next.js.",

    images: [
      {
        url: `${SITE_URL}/BannerM.png`,
        width: 1200,
        height: 630,
        alt: "Mazen Mostafa - Web Developer Portfolio",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Mazen Mostafa | Web Developer — Business & Corporate Websites",

    description:
      "Business and corporate websites for companies in Saudi Arabia and Egypt.",

    images: [`${SITE_URL}/BannerM.png`],
  },

  icons: {
    icon: "/MMS.png",
    shortcut: "/MMS.png",
    apple: "/MMS.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Search Console Verification */}
        <meta
          name="google-site-verification"
          content="DMsGp_G6S9jVIks1RUfACzsi7I3giw1q3nzNQ6ubFOw"
        />

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Outfit:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />

        {/* Structured Data - Person */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Mazen Mostafa Sayed",
              url: SITE_URL,
              jobTitle: "Web Developer",
              description:
                "Web Developer building business and corporate websites for companies in Saudi Arabia and Egypt.",
              image: `${SITE_URL}/BannerM.png`,
              knowsAbout: [
                "React.js",
                "Next.js",
                "TypeScript",
                "JavaScript",
                "HTML",
                "CSS",
                "Tailwind CSS",
                "Responsive Web Design",
                "Business Websites",
                "WordPress",
                "Web Development",
              ],
            }),
          }}
        />

        {/* Structured Data - WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Mazen Mostafa Portfolio",
              url: SITE_URL,
              description:
                "Portfolio website of Mazen Mostafa, a Web Developer building business and corporate websites in Saudi Arabia and Egypt.",
              author: {
                "@type": "Person",
                name: "Mazen Mostafa Sayed",
                url: SITE_URL,
              },
            }),
          }}
        />
      </head>

      <body className="dark">{children}</body>

      {/* Google Analytics 4 */}
      <GoogleAnalytics gaId="G-2J61KEK21M" />
    </html>
  );
}
