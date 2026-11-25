import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { articles } from "../../content/blog";

export const metadata: Metadata = {
  title: "Website guides for growing businesses",
  description: "Plain-English guides to planning, building and improving a business website in India.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndex() {
  return <main className="editorial-page" id="top"><header className="editorial-head page-wrap"><Link href="/" className="case-back"><ArrowLeft size={15} /> Arquentra home</Link><span className="eyebrow">PRACTICAL WEBSITE NOTES</span><h1>Make the next<br /><span>website decision clearer.</span></h1><p>Plain-English guides for business owners planning a website, comparing a quote or getting ready to launch.</p></header>
    <section className="article-index page-wrap" aria-label="Website guides">{articles.map((article, index) => <article className="article-index-card" key={article.slug}><span className="section-index">GUIDE 0{index + 1} · ARQUENTRA</span><h2><Link href={`/blog/${article.slug}`}>{article.title}</Link></h2><p>{article.description}</p><Link className="text-link" href={`/blog/${article.slug}`}>Read the guide <ArrowRight size={15} /></Link></article>)}</section>
    <footer className="editorial-footer page-wrap"><Link href="/#contact">Have a website question? Start a WhatsApp chat <ArrowRight size={15} /></Link><Link href="/privacy">Privacy note</Link></footer>
  </main>;
}
