import type { Metadata } from "next";
import "./globals.css";
import MetaPixel from "./components/meta-pixel";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.arquentra.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Arquentra | Digital Creative Studio",
    template: "%s | Arquentra",
  },
  description:
    "Websites, creative content and growth systems for ambitious brands. Meet Arquentra, an independent digital creative studio based in India.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Arquentra",
    title: "Arquentra | Digital Creative Studio",
    description:
      "Your ideas deserve a better internet. We build digital experiences, creative content and growth systems that help ambitious brands stand out.",
    url: "/",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Arquentra — your ideas deserve a better internet" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arquentra | Digital Creative Studio",
    description: "Digital experiences, creative content and growth systems for ambitious brands.",
    images: ["/opengraph-image"],
  },
  robots: { index: true, follow: true },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Arquentra",
  url: siteUrl,
  email: "arquentra@gmail.com",
  telephone: "+91 70061 27665",
  areaServed: { "@type": "Country", name: "India" },
  description:
    "Independent digital creative and technology studio providing web design, e-commerce, social media, Meta Ads, SEO, creative content and AI automation.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <MetaPixel />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c") }}
        />
      </body>
    </html>
  );
}
