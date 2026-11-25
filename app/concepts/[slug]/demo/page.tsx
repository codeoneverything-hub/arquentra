import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { concepts } from "../../../../content/concepts";
import { GoodRitualDemo, SoftGoodsDemo } from "../../../components/concept-demos";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return concepts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const concept = concepts.find((entry) => entry.slug === slug);
  return concept ? { title: `${concept.name} clickable website concept`, robots: { index: false, follow: true } } : { title: "Demo not found" };
}

export default async function ConceptDemo({ params }: Props) {
  const { slug } = await params;
  const concept = concepts.find((entry) => entry.slug === slug);
  if (!concept) notFound();
  return <><div className="demo-notice"><span>Portfolio demo · fictional project · not for sale</span><Link href={`/concepts/${concept.slug}`}><ArrowLeft size={14} /> Case study</Link></div>{slug === "soft-goods" ? <SoftGoodsDemo /> : <GoodRitualDemo />}</>;
}
