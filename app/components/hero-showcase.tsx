import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function HeroShowcase() {
  return (
    <div className="hero-media hero-showcase">
      <Link href="/concepts/soft-goods/demo" className="hero-showcase-link">
        <div className="hero-browser">
          <div className="hero-browser-bar"><span /><span /><span /><small>softgoods.example</small></div>
          <div className="hero-browser-nav"><b>SOFT GOODS</b><span>SHOP&nbsp;&nbsp;&nbsp; OUR STORY&nbsp;&nbsp;&nbsp; BAG (0)</span></div>
          <div className="hero-browser-content">
            <div className="hero-browser-copy"><small>MADE SLOW. LOVED LONG.</small><strong>Objects<br />to keep.</strong><span>Thoughtful pieces for everyday living.</span><i>EXPLORE THE COLLECTION <ArrowUpRight size={12} /></i></div>
            <div className="hero-product"><span>SG</span><i /></div>
          </div>
        </div>
        <span className="hero-showcase-caption"><span>WEBSITE CONCEPT / NOT CLIENT WORK</span><ArrowUpRight size={15} /></span>
      </Link>
    </div>
  );
}
