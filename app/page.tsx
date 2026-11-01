import Image from "next/image";
import { ArrowDown, ArrowRight, ArrowUpRight, Asterisk, Bot, Clapperboard, Code2, Megaphone, PenTool, ShoppingBag, Sparkles } from "lucide-react";
import EnquiryForm from "./components/enquiry-form";
import HeroVideo from "./components/hero-video";
import Reveal from "./components/reveal";
import SiteHeader from "./components/site-header";
import WhatsAppLink from "./components/whatsapp-link";

const services = [
  { number: "01", title: "Websites that feel like you.", detail: "Clear, considered websites built around your brand, your audience and the next step you want people to take.", icon: Code2, tag: "DESIGN / DEVELOPMENT" },
  { number: "02", title: "Commerce with character.", detail: "Online stores that make your products easy to discover, understand and buy from any screen.", icon: ShoppingBag, tag: "E-COMMERCE" },
  { number: "03", title: "Content worth the pause.", detail: "Social-first creative, video and brand content that earns attention in a busy feed.", icon: Clapperboard, tag: "SOCIAL / VIDEO" },
  { number: "04", title: "Growth with a point of view.", detail: "Meta Ads and practical SEO shaped around real audiences, clear offers and thoughtful learning.", icon: Megaphone, tag: "META ADS / SEO" },
  { number: "05", title: "Less busywork. More good work.", detail: "Useful AI-powered workflows that take repetitive tasks off your plate and keep your tools connected.", icon: Bot, tag: "AI / AUTOMATION" },
  { number: "06", title: "A brand that holds together.", detail: "Digital branding and content direction that give every touchpoint a more recognisable voice.", icon: PenTool, tag: "BRANDING / STRATEGY" },
];

const experiments = [
  { number: "01", name: "Soft Goods", category: "E-COMMERCE CONCEPT", className: "art-commerce", description: "A tactile online world for a slow-made homewares label." },
  { number: "02", name: "Good Ritual", category: "BRAND WEBSITE CONCEPT", className: "art-brand", description: "An editorial storefront for everyday rituals and better mornings." },
  { number: "03", name: "Side Quest", category: "SOCIAL CAMPAIGN CONCEPT", className: "art-social", description: "A sample launch campaign made to stop the scroll and start a story." },
  { number: "04", name: "Signal Garden", category: "AI EXPERIENCE CONCEPT", className: "art-ai", description: "A playful, imagined interface for turning loose ideas into a plan." },
];

const steps = [
  { number: "01", title: "Discover", text: "We get to know your brand, your people and what you want to move forward." },
  { number: "02", title: "Strategise", text: "Together, we choose a clear creative and technical direction." },
  { number: "03", title: "Create", text: "We shape, build and refine the work with you at every turn." },
  { number: "04", title: "Launch & grow", text: "We launch with care, learn from what happens and make the next move." },
];

function ExperimentArt({ className }: { className: string }) {
  if (className === "art-commerce") return (
    <div className="concept-art art-commerce" aria-hidden="true">
      <div className="mini-browser"><span /><span /><span /><b>SOFT GOODS</b></div>
      <div className="commerce-copy">OBJECTS<br />TO KEEP.</div>
      <div className="product-shape"><i /><b>SG</b></div>
      <span className="art-caption">FORM / FUNCTION / FEELING</span>
    </div>
  );
  if (className === "art-brand") return (
    <div className="concept-art art-brand" aria-hidden="true">
      <div className="brand-sun" /><span className="brand-script">Good<br />Ritual.</span>
      <div className="brand-bottle"><i /><span>DAY<br />ONE</span></div>
      <span className="brand-small">A SMALL START CAN CHANGE THE DAY</span>
    </div>
  );
  if (className === "art-social") return (
    <div className="concept-art art-social" aria-hidden="true">
      <div className="social-backdrop"><span>MAKE<br />A LITTLE<br /><em>NOISE.</em></span></div>
      <div className="social-post post-front"><b>SIDE QUEST</b><i /><strong>OUT OF<br />OFFICE.<br />INTO<br />EVERYTHING.</strong><small>01 / 04</small></div>
      <div className="social-post post-back"><b>SQ</b><span>TAKE THE<br />SCENIC ROUTE →</span></div>
    </div>
  );
  return (
    <div className="concept-art art-ai" aria-hidden="true">
      <span className="ai-label">A LITTLE IDEA ENGINE</span>
      <div className="ai-orbit ai-orbit-a" /><div className="ai-orbit ai-orbit-b" />
      <div className="ai-core"><Sparkles size={29} /><span>START<br />SOMEWHERE</span></div>
      <span className="ai-node node-a">A THOUGHT</span><span className="ai-node node-b">A PLAN</span><span className="ai-node node-c">A NEXT STEP</span>
    </div>
  );
}

function SocialProfileLink() {
  const instagramUrl = process.env.NEXT_PUBLIC_INSTAGRAM_URL?.trim();
  if (!instagramUrl) return <span className="social-link-pending">Instagram profile coming soon</span>;
  return <a href={instagramUrl} target="_blank" rel="noreferrer">Instagram <ArrowUpRight size={14} /></a>;
}

export default function Home() {
  return (
    <main id="top">
      <div className="top-frame">
        <SiteHeader />

        <section className="hero page-wrap" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="availability"><span className="availability-dot" /> OPEN FOR NEW PROJECTS <span className="availability-slash">/</span> INDIA + EVERYWHERE</p>
            <Reveal>
              <h1 id="hero-title">Your ideas<br />deserve a better<br /><span>internet<sup>✳</sup></span></h1>
            </Reveal>
            <p className="hero-description">We build digital experiences, creative content and growth systems that help ambitious brands stand out.</p>
            <div className="hero-actions">
              <WhatsAppLink className="button button-lime" message="Hi Arquentra, I'd like to build something together.">Let&apos;s build something</WhatsAppLink>
              <a className="text-link" href="#services">Explore what we do <ArrowDown size={16} /></a>
            </div>
            <p className="hero-footnote"><span>01—08</span> DIGITAL, CREATIVE & TECHNOLOGY</p>
          </div>
          <HeroVideo />
          <a className="scroll-hint" href="#intro"><span>SCROLL A LITTLE</span><ArrowDown size={14} /></a>
        </section>
      </div>

      <section className="intro-section" id="intro">
        <div className="page-wrap intro-inner">
          <span className="section-index">[ 01 / A QUICK INTRO ]</span>
          <Reveal className="intro-copy">
            <h2>We&apos;re not here to make another ordinary website.<br /><span>We&apos;re here to make your brand impossible to ignore.</span></h2>
            <p>Small team energy. Big-picture thinking. We bring design, technology and the right kind of internet brain together to make the next thing clearer.</p>
          </Reveal>
          <Asterisk className="intro-spark" strokeWidth={1} aria-hidden="true" />
        </div>
      </section>

      <section className="services-section page-wrap section-space" id="services">
        <div className="section-topline"><span className="section-index">[ 02 / WHAT WE DO ]</span><span className="section-aside">GOOD IDEAS, BUILT WITH INTENT.</span></div>
        <div className="section-heading">
          <Reveal><h2>A little bit of<br /><span>everything good.</span></h2></Reveal>
          <p>One connected studio for the work that gets a brand noticed, remembered and moving.</p>
        </div>
        <div className="service-list">
          {services.map(({ number, title, detail, icon: Icon, tag }, index) => (
            <Reveal key={number} delay={index * 0.035}>
              <a className="service-row" href="#contact" aria-label={`Enquire about ${tag.toLowerCase().replaceAll("/", "and")}`}>
                <span className="service-number">{number}</span>
                <span className="service-icon"><Icon size={21} strokeWidth={1.5} /></span>
                <span className="service-main"><strong>{title}</strong><span>{detail}</span></span>
                <span className="service-tag">{tag}</span>
                <ArrowUpRight className="service-arrow" size={20} />
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="experiments-section section-space" id="experiments">
        <div className="page-wrap">
          <div className="section-topline"><span className="section-index">[ 03 / MADE FOR THE WHAT-IFS ]</span><span className="section-aside">SELF-INITIATED. JUST FOR FUN.</span></div>
          <div className="section-heading experiments-heading">
            <Reveal><h2>Experiments<br /><span>& concepts.</span></h2></Reveal>
            <p>No client work to show just yet. So we made a few what-ifs instead. These concept projects are self-initiated demonstrations — not client engagements.</p>
          </div>
          <div className="experiment-grid">
            {experiments.map((project, index) => (
              <Reveal className={`experiment-card experiment-${index + 1}`} delay={index * 0.05} key={project.number}>
                <div className="experiment-visual"><ExperimentArt className={project.className} /><span className="concept-stamp">CONCEPT PROJECT</span></div>
                <div className="experiment-meta"><span>{project.category}</span><span>{project.number}</span></div>
                <div className="experiment-title"><h3>{project.name}</h3><p>{project.description}</p></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="why-section section-space" id="why">
        <div className="page-wrap why-layout">
          <div className="why-intro"><span className="section-index">[ 04 / THE ARQUENTRA WAY ]</span><Reveal><h2>Make it matter.<br /><span>Make it work.</span></h2></Reveal><p>Good-looking is good. Good-looking with a reason is better. Here&apos;s what we bring to the table.</p></div>
          <div className="why-list">
            <article><span>01</span><div><h3>Purpose over polish.</h3><p>Every creative choice should make something clearer, easier or more memorable.</p></div></article>
            <article><span>02</span><div><h3>Built for the next click.</h3><p>We design pages and experiences around the action people came to take.</p></div></article>
            <article><span>03</span><div><h3>Creative that earns attention.</h3><p>Content should feel like your brand and give people a reason to stop scrolling.</p></div></article>
            <article><span>04</span><div><h3>Strategy before software.</h3><p>We get the why straight before we get into the what and how.</p></div></article>
            <article><span>05</span><div><h3>Tech that gives time back.</h3><p>We reach for automation when it helps people do more of the work that matters.</p></div></article>
          </div>
        </div>
      </section>

      <section className="process-section section-space page-wrap" id="approach">
        <div className="section-topline"><span className="section-index">[ 05 / HOW IT HAPPENS ]</span><span className="section-aside">NO MYSTERY. JUST GOOD COLLABORATION.</span></div>
        <div className="section-heading"><Reveal><h2>From first thought<br /><span>to out in the world.</span></h2></Reveal><p>Four steps, plenty of conversation, and a clear next move at every stage.</p></div>
        <ol className="process-list">
          {steps.map((step, index) => (
            <Reveal key={step.number} delay={index * 0.07}>
              <li className="process-step"><span className="process-number">{step.number}</span><span className="process-line" /><h3>{step.title}</h3><p>{step.text}</p></li>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="contact-section" id="contact">
        <div className="page-wrap contact-inner">
          <div className="contact-copy"><span className="section-index">[ 06 / YOUR MOVE ]</span><Reveal><h2>Got an idea?<br /><span>Let&apos;s make it real.</span></h2></Reveal><p>Tell us where you want to go. We&apos;ll help you figure out the right way to get there.</p>
            <div className="contact-links"><WhatsAppLink className="button button-lime">Say hello on WhatsApp</WhatsAppLink><a href="mailto:arquentra@gmail.com">arquentra@gmail.com <ArrowUpRight size={15} /></a><SocialProfileLink /></div>
            <div className="contact-note"><span className="availability-dot" /> Usually reply within one working day</div>
          </div>
          <EnquiryForm />
        </div>
      </section>

      <footer className="site-footer page-wrap">
        <div className="footer-top"><a className="brand footer-brand" href="#top" aria-label="Arquentra home"><Image src="/arquentra-logo.png" alt="" width={785} height={498} className="brand-logo" sizes="112px" /></a><span className="footer-signoff">GOOD IDEAS DESERVE A GOOD INTERNET.</span><a className="back-to-top" href="#top">Back to top <ArrowRight size={14} /></a></div>
        <div className="footer-bottom"><span>© ARQUENTRA · INDEPENDENT DIGITAL CREATIVE STUDIO · INDIA</span><span>NO CLIENT WORK WAS INVENTED FOR THIS SITE.</span></div>
      </footer>

      <WhatsAppLink className="floating-whatsapp" aria-label="Start a WhatsApp conversation with Arquentra" showIcon={false}>WA<span>LET&apos;S TALK</span></WhatsAppLink>
    </main>
  );
}
