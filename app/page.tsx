"use client";

import { useState } from "react";
import type { FormEvent, ReactNode } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Check, Code2, Globe2,
  Menu, MousePointer2, Play, Search, Send, ShieldCheck, Sparkles,
  Video, Workflow, X, MessageCircle
} from "lucide-react";

const WA_NUMBER = "919567555020";
const EMAIL = "comestsd@gmail.com";

const services = [
  { no: "01", icon: Code2, title: "Website development", text: "Fast, refined websites built to turn first impressions into enquiries.", tags: ["Business websites", "Landing pages", "Web apps"] },
  { no: "02", icon: Sparkles, title: "Brand & content", text: "A consistent digital identity, with content that sounds and feels like you.", tags: ["Content strategy", "Copywriting", "Creative direction"] },
  { no: "03", icon: Search, title: "SEO & growth", text: "Make it easier for the right people to discover your business.", tags: ["Technical SEO", "On-page SEO", "Analytics"] },
  { no: "04", icon: Video, title: "Social media", text: "Thoughtful, consistent content that earns attention and builds trust.", tags: ["Content calendars", "Reels", "Community management"] },
  { no: "05", icon: Globe2, title: "E-commerce", text: "Product experiences that make browsing simple and buying effortless.", tags: ["Online stores", "Product pages", "Conversion UX"] },
  { no: "06", icon: Workflow, title: "AI & automation", text: "Reduce repetitive work with practical workflows that give time back.", tags: ["Lead workflows", "Integrations", "Process automation"] },
];

const projects = [
  { number: "01", name: "Seela Label", type: "Fashion / E-commerce", desc: "A considered digital storefront for a contemporary saree label.", color: "project-sage", label: "CONCEPT EXPERIENCE" },
  { number: "02", name: "The Modern Edit", type: "Lifestyle / Retail", desc: "A minimal, editorial shopping experience built around discovery.", color: "project-sand", label: "CONCEPT EXPERIENCE" },
  { number: "03", name: "Next Horizon", type: "Professional services", desc: "A confident online presence designed to make complex services clear.", color: "project-olive", label: "CREATIVE DIRECTION" },
];

const packages = [
  { name: "Starter Website", price: "₹9,999", suffix: "one-time", desc: "A polished online home for a new or growing business.", features: ["Up to 5 pages", "Responsive design", "Contact / WhatsApp CTA", "Basic on-page SEO"], featured: false },
  { name: "Business Website", price: "₹24,999", suffix: "one-time", desc: "A stronger digital presence for businesses ready to grow.", features: ["Up to 10 pages", "Custom visual direction", "Lead-generation sections", "SEO foundations", "Analytics setup"], featured: true },
  { name: "Social Growth", price: "₹7,999", suffix: "per month", desc: "A more consistent and intentional social presence.", features: ["Monthly content plan", "Creative post designs", "Reel concepts", "Caption writing", "Monthly review"], featured: false },
  { name: "Online Store", price: "₹39,999", suffix: "starting price", desc: "A product-led shopping experience built for conversion.", features: ["Storefront setup", "Product collections", "Mobile-first shopping", "Payment integration support", "Order-flow setup"], featured: false },
];

const signals = [
  { title: "Website opportunity", metric: "Clarity → conversion", detail: "A clearer offer and stronger calls to action can help turn more visitors into enquiries.", x: "72%", y: "25%" },
  { title: "Search opportunity", metric: "Discovery → demand", detail: "A focused SEO foundation helps the right customers find your business over time.", x: "26%", y: "48%" },
  { title: "Workflow opportunity", metric: "Manual → automated", detail: "Simple automations can reduce repetitive admin and make lead follow-up more consistent.", x: "62%", y: "73%" },
];

function WhatsAppLink({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <a className={className} href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hi ARQUENTRA, I'd like to discuss a project.")}`} target="_blank" rel="noreferrer">{children}</a>;
}

export default function Home() {
  const [activeSignal, setActiveSignal] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", service: "Website development", message: "" });
  const [sent, setSent] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  function submitForm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const message = `Hi ARQUENTRA!%0AName: ${encodeURIComponent(form.name)}%0AEmail: ${encodeURIComponent(form.email)}%0AService: ${encodeURIComponent(form.service)}%0AProject: ${encodeURIComponent(form.message)}`;
    window.open(`https://wa.me/${WA_NUMBER}?text=${message}`, "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <main>
      <motion.div className="scroll-progress" style={{ scaleX: progress }} />
      <header className="site-header">
        <a className="brand" href="#top" aria-label="ARQUENTRA home">
          <span className="brand-mark">A<span>·</span></span>
          <span className="brand-name">ARQUENTRA<span className="brand-dot">.</span><small>STRATEGY. TECHNOLOGY. GROWTH.</small></span>
        </a>
        <nav className={mobileOpen ? "nav-links nav-open" : "nav-links"}>
          <a href="#services" onClick={() => setMobileOpen(false)}>What we do</a>
          <a href="#work" onClick={() => setMobileOpen(false)}>Selected work</a>
          <a href="#pricing" onClick={() => setMobileOpen(false)}>Packages</a>
          <a href="#about" onClick={() => setMobileOpen(false)}>Our approach</a>
        </nav>
        <WhatsAppLink className="header-cta">Start a project <ArrowUpRight size={15} /></WhatsAppLink>
        <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle navigation">{mobileOpen ? <X /> : <Menu />}</button>
      </header>

      <section className="hero section-shell" id="top">
        <div className="hero-copy">
          <motion.div className="eyebrow" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }}>
            <span className="eyebrow-dot" /> INDEPENDENT DIGITAL STUDIO <span className="eyebrow-line" />
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .08 }}>
            Make your next<br />move <em>matter.</em>
          </motion.h1>
          <motion.p className="hero-lead" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .18 }}>
            We build thoughtful digital experiences that help ambitious businesses get noticed, earn trust, and grow.
          </motion.p>
          <motion.div className="hero-actions" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .25 }}>
            <WhatsAppLink className="button button-gold">Tell us what you’re building <ArrowUpRight size={17} /></WhatsAppLink>
            <a className="text-link" href="#work">Explore our work <ArrowDownRight size={16} /></a>
          </motion.div>
          <div className="hero-note"><span className="note-rule" /> BUILT WITH INTENTION. DESIGNED FOR MOMENTUM.</div>
        </div>

        <div className="hero-visual">
          <div className="visual-topline"><span>ARQ / SIGNAL SYSTEM</span><span>01 — 03</span></div>
          <div className="radar">
            <div className="radar-ring ring-one" /><div className="radar-ring ring-two" /><div className="radar-ring ring-three" />
            <div className="radar-cross cross-x" /><div className="radar-cross cross-y" />
            <div className="radar-sweep" />
            <div className="radar-center"><span>A</span><small>FIND YOUR<br />NEXT SIGNAL</small></div>
            {signals.map((s, i) => <button key={s.title} className={`signal signal-${i} ${activeSignal === i ? "signal-active" : ""}`} style={{ left: s.x, top: s.y }} onClick={() => setActiveSignal(i)} aria-label={s.title}><span className="signal-pulse" /><span className="signal-label">{s.title}</span></button>)}
            <span className="radar-coordinate coord-one">28° 36' N</span><span className="radar-coordinate coord-two">77° 12' E</span>
          </div>
          <div className="signal-card">
            <div><span className="micro-label">SIGNAL DETECTED / 0{activeSignal + 1}</span><h3>{signals[activeSignal].title}</h3><p>{signals[activeSignal].detail}</p></div>
            <div className="signal-card-icon"><ArrowUpRight size={20} /></div>
          </div>
          <div className="visual-foot"><span><span className="live-dot" /> SYSTEM ONLINE</span><span>HUMAN STRATEGY × DIGITAL CRAFT</span></div>
        </div>
        <div className="hero-index">01 / DIGITAL WITH DIRECTION</div>
      </section>


      <section className="showreel-section" aria-label="ARQUENTRA digital showreel">
        <div className="section-shell showreel-inner">
          <div className="showreel-copy">
            <span className="eyebrow">A CLOSER LOOK / DIGITAL IN MOTION</span>
            <h2>Ideas that move<br /><em>business forward.</em></h2>
            <p>Web experiences, connected systems and digital details — brought together to make brands easier to discover and remember.</p>
            <a className="text-link" href="#services">Explore what we do <ArrowDownRight size={16} /></a>
          </div>
          <div className="showreel-frame">
            <video className="showreel-video" autoPlay muted loop playsInline preload="metadata" aria-label="Muted ARQUENTRA digital design showreel">
              <source src="/arquentra-showreel.mp4" type="video/mp4" />
              Your browser does not support the video element.
            </video>
            <div className="showreel-overlay-top"><span>ARQ / DIGITAL WORLDS</span><span>01 — LOOP</span></div>
            <div className="showreel-overlay-bottom"><span><span className="live-dot" /> SOUND OFF · AUTOPLAY</span><span>DESIGN / TECHNOLOGY / EXPERIENCE</span></div>
          </div>
        </div>
      </section>

      <section className="intro-strip">
        <div className="section-shell intro-inner"><span className="eyebrow">THE INTERNET IS CROWDED.</span><p>Being online is easy.<br /><em>Being remembered is the work.</em></p><ArrowDownRight className="intro-arrow" size={28} /></div>
      </section>

      <section className="section-shell section-block" id="services">
        <div className="section-heading"><div><span className="eyebrow">01 / WHAT WE DO</span><h2>Good work.<br /><em>Clear outcomes.</em></h2></div><p>From the first click to the lasting relationship, we connect strategy, design and technology to move your business forward.</p></div>
        <div className="services-grid">{services.map((service, i) => { const Icon = service.icon; return <motion.article className="service-card" key={service.no} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .45, delay: i * .06 }}><div className="service-top"><span>{service.no}</span><Icon size={21} strokeWidth={1.5} /></div><h3>{service.title}</h3><p>{service.text}</p><div className="service-tags">{service.tags.map(tag => <span key={tag}>{tag}</span>)}</div><a href="#contact" className="card-arrow" aria-label={`Ask about ${service.title}`}><ArrowUpRight size={18} /></a></motion.article> })}</div>
      </section>

      <section className="work-section" id="work"><div className="section-shell section-block">
        <div className="section-heading"><div><span className="eyebrow">02 / SELECTED DIRECTIONS</span><h2>Ideas made<br /><em>visible.</em></h2></div><p>A few concept experiences that show how we think about digital brands. These are creative concepts, not client endorsements.</p></div>
        <div className="projects-grid">{projects.map((p, i) => <motion.article className="project-card" key={p.number} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .5, delay: i * .1 }}><div className={`project-art ${p.color}`}><span className="project-label">{p.label}</span><span className="project-number">{p.number}</span><div className="project-art-word">{i === 0 ? "seela" : i === 1 ? "THE / EDIT" : "NEXT—"}</div><div className="project-art-orbit" /><span className="project-art-caption">{i === 0 ? "DRESS YOUR STORY" : i === 1 ? "LESS, BUT BETTER" : "DESIGNED TO MOVE"}</span></div><div className="project-meta"><div><span className="micro-label">{p.type}</span><h3>{p.name}</h3><p>{p.desc}</p></div><a href="#contact" aria-label={`Discuss a project like ${p.name}`}><ArrowUpRight /></a></div></motion.article>)}</div>
      </div></section>

      <section className="section-shell section-block pricing-section" id="pricing">
        <div className="section-heading"><div><span className="eyebrow">03 / CLEAR STARTING POINTS</span><h2>Good things start<br /><em>with a plan.</em></h2></div><p>These are indicative starting prices, not fixed quotes. We’ll confirm the scope, timeline and final price before work begins.</p></div>
        <div className="pricing-grid">{packages.map((p, i) => <article className={`price-card ${p.featured ? "price-featured" : ""}`} key={p.name}><div className="price-top"><span>{p.name}</span>{p.featured && <span className="popular-label">MOST POPULAR</span>}</div><div className="price-amount">{p.price}<small> / {p.suffix}</small></div><p className="price-desc">{p.desc}</p><div className="price-divider" /><ul>{p.features.map(f => <li key={f}><Check size={15} />{f}</li>)}</ul><WhatsAppLink className={p.featured ? "button button-gold price-cta" : "button button-outline price-cta"}>Discuss this package <ArrowUpRight size={16} /></WhatsAppLink><span className="price-footnote">{i === 2 ? "Monthly retainer · scope agreed in advance" : "Final quote depends on project scope"}</span></article>)}</div>
      </section>

      <section className="manifesto" id="about"><div className="section-shell manifesto-inner"><span className="eyebrow">04 / OUR APPROACH</span><div className="manifesto-content"><h2>Less noise.<br />More <em>meaning.</em></h2><div><p>We believe digital should do more than look impressive. It should make your value easier to understand, your business easier to find, and the next step easier to take.</p><p>Small studio energy. Systems-level thinking. No unnecessary complexity.</p><WhatsAppLink className="text-link light-link">Let’s build something useful <ArrowUpRight size={16} /></WhatsAppLink></div></div><div className="manifesto-bottom"><span>STRATEGY BEFORE DECORATION</span><span>CLARITY BEFORE COMPLEXITY</span><span>PROGRESS OVER POSTURING</span></div></div></section>

      <section className="section-shell contact-section section-block" id="contact"><div className="contact-copy"><span className="eyebrow">05 / YOUR NEXT MOVE</span><h2>Have a good<br /><em>one in mind?</em></h2><p>Tell us where you want to go. We’ll help you work out what it takes to get there.</p><div className="contact-details"><a href={`mailto:${EMAIL}`}><Send size={16} />{EMAIL}</a><WhatsAppLink><MessageCircle size={16} />+91 95675 55020</WhatsAppLink></div><div className="contact-stamp"><span>A</span><small>MAKE YOUR<br />NEXT MOVE<br />MATTER.</small></div></div>
        <form className="contact-form" onSubmit={submitForm}><div className="form-heading"><span className="micro-label">PROJECT ENQUIRY / 001</span><span className="form-status"><span className="live-dot" /> OPEN FOR PROJECTS</span></div><label>Your name<input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="What should we call you?" /></label><label>Email address<input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="you@company.com" /></label><label>What do you need?<select value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}>{services.map(s => <option key={s.no}>{s.title}</option>)}<option>Something else</option></select></label><label>Tell us a little about it<textarea required rows={3} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="The idea, the goal, the challenge..." /></label><button className="button button-gold form-submit" type="submit">{sent ? "Open WhatsApp to send enquiry" : "Send project enquiry"} <ArrowUpRight size={17} /></button><p className="form-note">This form opens WhatsApp with your details ready to send. Your enquiry is not submitted until you press Send in WhatsApp.</p></form>
      </section>

      <footer className="site-footer"><div className="section-shell footer-main"><a className="brand footer-brand" href="#top"><span className="brand-mark">A<span>·</span></span><span className="brand-name">ARQUENTRA<span className="brand-dot">.</span><small>STRATEGY. TECHNOLOGY. GROWTH.</small></span></a><p>Digital direction for businesses<br />ready to move forward.</p><div className="footer-links"><a href="#services">Services</a><a href="#work">Work</a><a href="#pricing">Packages</a><a href="#contact">Contact</a></div><WhatsAppLink className="footer-contact">Start a conversation <ArrowUpRight size={15} /></WhatsAppLink></div><div className="section-shell footer-bottom"><span>© ARQUENTRA STUDIO</span><span>INDEPENDENT BY DESIGN. INTENTIONAL BY NATURE.</span><a href="#top">BACK TO TOP ↑</a></div></footer>
      <WhatsAppLink className="floating-whatsapp" ><MessageCircle size={20} /><span>Let’s talk</span></WhatsAppLink>
    </main>
  );
}
