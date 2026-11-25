import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { articles } from "../../../content/blog";
import WhatsAppLink from "../../components/whatsapp-link";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.arquentra.in";
type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return articles.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((entry) => entry.slug === slug);
  if (!article) return { title: "Guide not found" };
  return { title: article.title, description: article.description, alternates: { canonical: `/blog/${article.slug}` }, openGraph: { type: "article", title: article.title, description: article.description, url: `/blog/${article.slug}` } };
}

export default async function BlogArticle({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((entry) => entry.slug === slug);
  if (!article) notFound();
  const structuredData = { "@context": "https://schema.org", "@type": "BlogPosting", headline: article.title, description: article.description, mainEntityOfPage: `${siteUrl}/blog/${article.slug}`, publisher: { "@type": "Organization", name: "Arquentra", url: siteUrl } };
  return <main className="article-page" id="top"><article className="article-content page-wrap"><Link className="case-back" href="/blog"><ArrowLeft size={15} /> All website guides</Link><span className="eyebrow">ARQUENTRA · PRACTICAL WEBSITE GUIDE</span><h1>{article.title}</h1><p className="article-lead">{article.intro}</p><div className="article-prose">{article.sections.map((section) => <section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}</section>)}</div><aside className="article-cta"><h2>Planning your own website?</h2><p>Share what you&apos;re building and get a clear next step.</p><WhatsAppLink className="button button-lime button-creative">Ask Arquentra on WhatsApp <ArrowRight size={15} /></WhatsAppLink></aside><Link className="article-home-link" href="/">Back to Arquentra home</Link></article><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} /></main>;
}
