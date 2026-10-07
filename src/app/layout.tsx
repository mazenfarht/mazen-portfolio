import type { Metadata } from "next";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

const SITE_URL = "https://mazen-mostafa-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Mazen Mostafa | Frontend Developer",
    template: "%s | Mazen Mostafa",
  },

  description:
    "Mazen Mostafa is a Frontend Developer specializing in React.js, Next.js, TypeScript, and modern web development. Explore his portfolio, projects, skills, and frontend development services.",

  keywords: [
    "Mazen Mostafa",
    "Mazen Mostafa Frontend Developer",
    "Frontend Developer",
    "Frontend Developer Egypt",
    "React.js Developer",
    "React Developer Egypt",
    "Next.js Developer",
    "Next.js Developer Egypt",
    "TypeScript Developer",
    "JavaScript Developer",
    "Web Developer Cairo",
    "Frontend Developer Cairo",
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Responsive Web Development",
    "Web Applications",
    "Dashboard Development",
    "Freelance Frontend Developer",
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

    title: "Mazen Mostafa | Frontend Developer",

    description:
      "Frontend Developer specializing in React.js, Next.js, TypeScript, and modern web development. Explore projects, skills, and frontend development services.",

    images: [
      {
        url: `https://mazen-mostafa-portfolio.vercel.app/BannerM.png`,
        width: 1200,
        height: 630,
        alt: "Mazen Mostafa - Frontend Developer Portfolio",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Mazen Mostafa | Frontend Developer",

    description:
      "Frontend Developer specializing in React.js, Next.js, TypeScript, and modern web development.",

    images: [`https://mazen-mostafa-portfolio.vercel.app/BannerM.png`],
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
              jobTitle: "Frontend Developer",
              description:
                "Frontend Developer specializing in React.js, Next.js, TypeScript, and modern web development.",
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
                "Frontend Development",
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
                "Portfolio website of Mazen Mostafa, a Frontend Developer specializing in React.js, Next.js, and TypeScript.",
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
