import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { concepts } from "../../../content/concepts";
import SiteHeader from "../../components/site-header";
import WhatsAppLink from "../../components/whatsapp-link";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.arquentra.in";
type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return concepts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const concept = concepts.find((entry) => entry.slug === slug);
  if (!concept) return { title: "Concept not found" };
  return {
    title: `${concept.name} website concept`,
    description: `${concept.summary} A clearly labelled, self-initiated website design concept by Arquentra.`,
    alternates: { canonical: `/concepts/${concept.slug}` },
    openGraph: { title: `${concept.name} | Arquentra concept`, description: concept.summary, url: `/concepts/${concept.slug}`, type: "article" },
  };
}

export default async function ConceptCaseStudy({ params }: Props) {
  const { slug } = await params;
  const concept = concepts.find((entry) => entry.slug === slug);
  if (!concept) notFound();
  return (
    <main className="case-page" id="top">
      <SiteHeader />
      <div className="case-content page-wrap">
        <Link className="case-back" href="/#work"><ArrowLeft size={15} /> All concepts</Link>
        <div className="case-hero"><span className="concept-stamp case-stamp">CONCEPT / NOT CLIENT WORK</span><p className="eyebrow">{concept.kind.toUpperCase()} · SELF-INITIATED BRIEF</p><h1>{concept.name}<br /><span>website concept.</span></h1><p>{concept.summary}</p><Link className="button button-lime button-creative" href={`/concepts/${concept.slug}/demo`}>Open clickable demo <ArrowUpRight size={16} /></Link></div>
        <p className="case-integrity"><strong>Portfolio note:</strong> {concept.name} is a fictional concept created to show design decisions. It is not commissioned work, a real business, or a live shop.</p>
        <div className={`case-device-gallery case-device-${concept.slug}`} role="img" aria-label={`Responsive desktop and mobile mockups for the ${concept.name} fictional website concept`}><div className="case-desktop-device"><div className="case-device-toolbar"><i /><i /><i /><span>{concept.name.toLowerCase().replaceAll(" ", "")}.concept</span></div><div className="case-device-screen"><small>{concept.name.toUpperCase()}</small><strong>{concept.slug === "soft-goods" ? <>Objects<br />to keep.</> : <>Good<br />Ritual.</>}</strong><span>{concept.slug === "soft-goods" ? "Thoughtful pieces for everyday living." : "A small start can change the day."}</span><i /></div></div><div className="case-phone-device"><div><small>{concept.name.toUpperCase()}</small><strong>{concept.slug === "soft-goods" ? "Objects to keep." : "A small start."}</strong><span>Designed to feel clear on a phone, too.</span><i /></div></div></div>
        <section className="case-brief"><div><span className="section-index">[ THE IMAGINED GOAL ]</span><h2>What this site<br />sets out to do.</h2></div><div><p>{concept.brief}</p><h3>Imagined audience</h3><p>{concept.audience}</p></div></section>
        <section className="case-decisions"><div className="section-topline"><span className="section-index">[ DESIGN DECISIONS ]</span><span className="section-aside">INTENT BEFORE DECORATION</span></div><div className="case-decision-grid">{concept.decisions.map((decision, index) => <article key={decision}><span>0{index + 1}</span><p>{decision}</p></article>)}</div></section>
        <section className="case-details-grid"><article><span className="eyebrow">PAGES IN THE CONCEPT</span><ul>{concept.pages.map((page) => <li key={page}>{page}</li>)}</ul></article><article><span className="eyebrow">MOBILE DESIGN</span><ul>{concept.mobile.map((detail) => <li key={detail}>{detail}</li>)}</ul></article><article><span className="eyebrow">DEMO TECHNOLOGY</span><p>Built as a lightweight, responsive Next.js and React demo with CSS and local-only interaction state. It does not have a backend, store, real checkout, or data collection.</p></article></section>
        <section className="case-real-version"><span className="section-index">[ IF THIS WERE A REAL PROJECT ]</span><h2>What would need<br />to happen next.</h2><ul>{concept.realVersion.map((detail) => <li key={detail}>{detail}</li>)}</ul></section>
        <section className="case-cta"><div><h2>Have a real website<br />idea of your own?</h2><p>We can plan the right pages and features around your business.</p></div><WhatsAppLink className="button button-lime button-creative" message={`Hi Arquentra, I saw the ${concept.name} concept and would like to discuss a website for my business.`}>Discuss my website <ArrowRight size={16} /></WhatsAppLink></section>
        <nav className="case-neighbours" aria-label="Other concepts"><Link href="/concepts/soft-goods">Soft Goods <ArrowRight size={14} /></Link><Link href="/concepts/good-ritual">Good Ritual <ArrowRight size={14} /></Link><Link href="/blog">Read the blog <ArrowRight size={14} /></Link></nav>
      </div>
      <StructuredData concept={concept} siteUrl={siteUrl} />
    </main>
  );
}

function StructuredData({ concept, siteUrl: base }: { concept: (typeof concepts)[number]; siteUrl: string }) {
  const data = { "@context": "https://schema.org", "@type": "CreativeWork", name: `${concept.name} website concept`, description: concept.summary, url: `${base}/concepts/${concept.slug}`, creator: { "@type": "Organization", name: "Arquentra", url: base }, isBasedOn: "Self-initiated fictional portfolio concept; not client work." };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
