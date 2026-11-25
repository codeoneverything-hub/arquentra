import type { Metadata } from "next";
import "./globals.css";
import Analytics from "./components/analytics";
import { placeholders } from "../content/placeholders";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.arquentra.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Website Development Company in Kerala | ARQUENTRA",
    template: "%s | Arquentra",
  },
  description:
    "ARQUENTRA builds modern, responsive websites for businesses in Kerala. Explore business website development, e-commerce solutions and custom website design.",
  alternates: { canonical: "/" },
  applicationName: "Arquentra",
  creator: "Arquentra",
  publisher: "Arquentra",
  category: "Website design and development",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Arquentra",
    title: "Website Development Company in Kerala | ARQUENTRA",
    description:
      "Modern, responsive business websites and e-commerce development for businesses in Kerala and India.",
    url: "/",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Freelance website design and development for growing businesses in India by Arquentra" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Development Company in Kerala | ARQUENTRA",
    description: "Modern, responsive business websites and e-commerce development for businesses in Kerala and India.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
};

const organizationId = `${siteUrl}/#organization`;
const structuredData: { "@context": string; "@graph": Record<string, unknown>[] } = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": organizationId,
      name: "Arquentra",
      url: siteUrl,
      logo: `${siteUrl}/arquentra-logo.png`,
      email: "arquentra@gmail.com",
      telephone: "+91 70061 27665",
      areaServed: [{ "@type": "AdministrativeArea", name: "Kerala" }, { "@type": "Country", name: "India" }],
      description: "Independent website design and development service for businesses in Kerala and India.",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer enquiries",
        telephone: "+91 70061 27665",
        email: "arquentra@gmail.com",
        url: siteUrl,
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Arquentra",
      publisher: { "@id": organizationId },
      inLanguage: "en-IN",
    },
  ],
};

if (placeholders.owner.name) {
  structuredData["@graph"].push({
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: placeholders.owner.name,
    description: placeholders.owner.bio || undefined,
    image: placeholders.owner.photo ? new URL(placeholders.owner.photo, siteUrl).toString() : undefined,
    url: `${siteUrl}/#about`,
    jobTitle: "Freelance website designer and developer",
    worksFor: { "@id": organizationId },
  });
}

const address = placeholders.ownerProfile.publicAddress;
if (Object.values(address).every(Boolean)) {
  structuredData["@graph"].push({
    "@type": "ProfessionalService",
    "@id": `${siteUrl}/#professional-service`,
    name: "Arquentra",
    url: siteUrl,
    image: `${siteUrl}/arquentra-logo.png`,
    email: "arquentra@gmail.com",
    telephone: "+91 70061 27665",
    areaServed: { "@type": "Country", name: "India" },
    address: {
      "@type": "PostalAddress",
      streetAddress: address.streetAddress,
      addressLocality: address.city,
      addressRegion: address.region,
      postalCode: address.postalCode,
      addressCountry: address.country,
    },
  });
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" suppressHydrationWarning>
      <head>
        <script id="build-motion-init" dangerouslySetInnerHTML={{ __html: `try{if(!matchMedia('(prefers-reduced-motion: reduce)').matches&&'IntersectionObserver'in window){document.documentElement.setAttribute('data-build-motion','on');setTimeout(function(){if(!document.documentElement.hasAttribute('data-build-ready'))document.documentElement.removeAttribute('data-build-motion')},5000)}}catch(e){}` }} />
      </head>
      <body>
        <a className="skip-link" href="#top">Skip to content</a>
        {children}
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
        />
      </body>
    </html>
  );
}
