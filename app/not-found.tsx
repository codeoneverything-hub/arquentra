import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import WhatsAppLink from "./components/whatsapp-link";

export default function NotFound() {
  return <main className="not-found-page" id="top"><div><span className="eyebrow">404 · PAGE NOT FOUND</span><h1>This page took<br /><span>a wrong turn.</span></h1><p>The link may be old, or the page may have moved.</p><div className="not-found-actions"><Link className="button button-dark" href="/"><ArrowLeft size={15} /> Back to Arquentra</Link><WhatsAppLink className="text-link">Ask me on WhatsApp <ArrowRight size={15} /></WhatsAppLink></div></div></main>;
}
