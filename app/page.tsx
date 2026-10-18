"use client";

import Image from "next/image";
import { useState, type FormEvent, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Check, Code2, Search,
  CalendarDays, Share2, Menu, X, MessageCircle, Send, Sparkles
} from "lucide-react";

const WHATSAPP_NUMBER = "919567555020";
const EMAIL = "comestsd@gmail.com";

const services = [
  {
    number: "01",
    title: "Web Development",
    description: "Modern, responsive websites designed to turn visitors into customers.",
    image: "/web-development.png",
    alt: "Arquentra web development illustration showing responsive website design",
    className: "lavender",
    icon: Code2,
    animation: "code",
  },
  {
    number: "02",
    title: "SEO & Growth",
    description: "Improve your search visibility and help the right customers discover your business.",
    image: "/seo-growth.png",
    alt: "Arquentra SEO illustration showing search visibility and growth analytics",
    className: "cream",
    icon: Search,
    animation: "growth",
  },
  {
    number: "03",
    title: "Content Management",
    description: "Plan, create, and manage content that keeps your brand active and relevant.",
    image: "/content-management.png",
    alt: "Arquentra content management illustration showing a content planner and calendar",
    className: "lavender",
    icon: CalendarDays,
    animation: "content",
  },
  {
    number: "04",
    title: "Social Media Management",
    description: "Build a consistent social presence through thoughtful content and strategy.",
    image: "/social-media-management.png",
    alt: "Arquentra social media management illustration showing a social content workflow",
    className: "cream",
    icon: Share2,
    animation: "social",
  },
];

const projects = [
  {
    name: "Seela Label",
    category: "Fashion / E-commerce",
    description: "A considered digital storefront concept for a contemporary saree label.",
    tag: "CONCEPT PROJECT",
    style: "project-lavender",
    letter: "seela",
  },
  {
    name: "The Modern Edit",
    category: "Lifestyle / Retail",
    description: "An editorial shopping experience concept built around product discovery.",
    tag: "CONCEPT PROJECT",
    style: "project-peach",
    letter: "THE / EDIT",
  },
  {
    name: "Next Horizon",
    category: "Professional services",
    description: "A clear, confident digital presence concept for a growing service business.",
    tag: "CREATIVE CONCEPT",
    style: "project-green",
    letter: "NEXT—",
  },
];

const process = [
  { number: "01", title: "Discover", text: "Understand your business, goals, customers and what success means to you." },
  { number: "02", title: "Design", text: "Shape the visual direction and experience around your brand and audience." },
  { number: "03", title: "Build", text: "Develop, test and refine a responsive solution that works in the real world." },
  { number: "04", title: "Grow", text: "Launch with confidence, learn from results and keep improving over time." },
];

function WhatsAppLink({
  children,
  className = "",
  message = "Hi ARQUENTRA, I'd like to discuss a project.",
}: {
  children: ReactNode;
  className?: string;
  message?: string;
}) {
  return (
    <a
      className={className}
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
}

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: reduceMotion ? 0 : 0.5, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    business: "",
    service: "Web Development",
    message: "",
  });
  const [formOpened, setFormOpened] = useState(false);

  function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const message = [
      "Hi ARQUENTRA! I'd like to discuss a project.",
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Business: ${form.business || "Not specified"}`,
      `Service: ${form.service}`,
      `Project: ${form.message}`,
    ].join("\n");
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
    setFormOpened(true);
  }

  return (
    <main>
      <header className="site-header">
        <div className="header-inner">
          <a href="#home" className="brand" aria-label="Arquentra home">
            <span className="brand-symbol" aria-hidden="true">✦</span>
            <span className="brand-word">Arquentra<span>.</span></span>
          </a>

          <nav className={mobileMenuOpen ? "main-nav nav-open" : "main-nav"} aria-label="Main navigation">
            <a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a>
            <a href="#work" onClick={() => setMobileMenuOpen(false)}>Our Work</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          </nav>

          <WhatsAppLink className="header-cta">Let&apos;s Talk <ArrowUpRight size={16} /></WhatsAppLink>
          <button
            type="button"
            className="mobile-menu-button"
            aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

     <section className="hero section-shell hero-image-only" id="home">
  <Reveal className="hero-image-wrap">
    <div className="hero-image-frame">
      <Image
        src="/arquentra-main.png"
        alt="Arquentra digital solutions showcase featuring website design, mobile experiences, and digital growth"
        width={1774}
        height={887}
        priority
        sizes="(max-width: 760px) 100vw, 100vw"
        className="hero-image"
      />
    </div>
    <div className="hero-image-caption">
      <span>STRATEGY × DESIGN × TECHNOLOGY</span>
      <Sparkles size={16} />
    </div>
  </Reveal>
</section>

      <section className="intro-band">
        <div className="section-shell intro-band-inner">
          <span className="eyebrow">YOUR DIGITAL GROWTH PARTNER</span>
          <p>Good digital work should look clear, feel effortless, and <em>move your business forward.</em></p>
          <a href="#contact" aria-label="Start a project"><ArrowUpRight size={23} /></a>
        </div>
      </section>

      <section className="section-shell section-block services-section" id="services">
        <Reveal className="section-heading">
          <div>
            <span className="eyebrow">WHAT WE DO</span>
            <h2>This is what <em>we do.</em></h2>
          </div>
          <p>Four connected services. One clear goal: help your business show up better online.</p>
        </Reveal>
        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal className={`service-card ${service.className}`} key={service.number} delay={index * 0.06}>
                <div className="service-card-top">
                  <span className="service-number">{service.number} / SERVICE</span>
                  <span className="service-icon"><Icon size={18} /></span>
                </div>
                <div className={`service-image service-image-${service.animation}`}>
                  <Image
                    src={service.image}
                    alt={service.alt}
                    width={1774}
                    height={887}
                    sizes="(max-width: 680px) 100vw, (max-width: 1000px) 50vw, 25vw"
                    className="service-illustration"
                  />
                  <span className="image-spark image-spark-one" />
                  <span className="image-spark image-spark-two" />
                </div>
                <div className="service-card-copy">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <a href="#contact" className="service-link" onClick={() => setForm((current) => ({ ...current, service: service.title }))}>
                    Explore service <ArrowUpRight size={17} />
                  </a>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="work-section" id="work">
        <div className="section-shell section-block">
          <Reveal className="section-heading">
            <div><span className="eyebrow">SELECTED DIRECTIONS</span><h2>Ideas made <em>visible.</em></h2></div>
            <p>A few concept experiences showing how we approach digital brands. They are concepts, not client endorsements.</p>
          </Reveal>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <Reveal key={project.name} className="project-card" delay={index * 0.07}>
                <div className={`project-art ${project.style}`}>
                  <span className="project-tag">{project.tag}</span>
                  <span className="project-letter">{project.letter}</span>
                  <span className="project-orbit" />
                  <span className="project-art-footer">ARQUENTRA / DIGITAL CONCEPT</span>
                </div>
                <div className="project-details">
                  <div><span className="project-category">{project.category}</span><h3>{project.name}</h3><p>{project.description}</p></div>
                  <a href="#contact" aria-label={`Discuss a project like ${project.name}`}><ArrowUpRight size={19} /></a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="process-section section-block">
        <div className="section-shell">
          <Reveal className="section-heading">
            <div><span className="eyebrow">A SIMPLE PROCESS</span><h2>From first thought<br />to <em>forward motion.</em></h2></div>
            <p>A clear, collaborative process keeps the work focused and makes the next step easier to understand.</p>
          </Reveal>
          <div className="process-grid">
            {process.map((step, index) => (
              <Reveal className="process-step" key={step.number} delay={index * 0.06}>
                <span className="process-number">{step.number}</span>
                <div className="process-rule"><span /></div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="section-shell about-inner">
          <Reveal className="about-mark"><span>✦</span><small>ARQUENTRA<br />DIGITAL STUDIO</small></Reveal>
          <Reveal className="about-copy" delay={0.08}>
            <span className="eyebrow">A LITTLE ABOUT US</span>
            <h2>Digital, with<br /><em>direction.</em></h2>
            <p>Arquentra helps businesses build and improve their digital presence through thoughtful web development, SEO, content and social media management. We keep the process collaborative, the design clear and the work focused on your goals.</p>
            <WhatsAppLink className="button button-dark">Let&apos;s talk about your goals <ArrowUpRight size={17} /></WhatsAppLink>
          </Reveal>
        </div>
      </section>

      <section className="section-shell contact-section section-block" id="contact">
        <Reveal className="contact-copy">
          <span className="eyebrow">HAVE A PROJECT IN MIND?</span>
          <h2>Let&apos;s make<br />something <em>work.</em></h2>
          <p>Share a little about what you need. We&apos;ll take it from there.</p>
          <div className="contact-details">
            <a href={`mailto:${EMAIL}`}><Send size={16} />{EMAIL}</a>
            <WhatsAppLink><MessageCircle size={16} />+91 95675 55020</WhatsAppLink>
          </div>
        </Reveal>
        <Reveal className="contact-form-wrap" delay={0.08}>
          <form className="contact-form" onSubmit={submitForm}>
            <div className="form-title"><span>PROJECT ENQUIRY</span><span className="form-dot" /> OPEN FOR PROJECTS</div>
            <div className="form-row">
              <label>Your name<input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Name" autoComplete="name" /></label>
              <label>Email address<input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@company.com" autoComplete="email" /></label>
            </div>
            <label>Business name <span className="optional-label">OPTIONAL</span><input value={form.business} onChange={(e) => setForm({ ...form, business: e.target.value })} placeholder="Your brand or company" autoComplete="organization" /></label>
            <label>What do you need?<select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}>{services.map((service) => <option key={service.number}>{service.title}</option>)}<option>Other digital service</option></select></label>
            <label>Tell us about the project<textarea required rows={3} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Your goals, timeline or ideas..." /></label>
            <button className="button button-dark form-submit" type="submit">{formOpened ? "Open WhatsApp to send" : "Send project enquiry"} <ArrowUpRight size={18} /></button>
            <p className="form-note">{formOpened ? "WhatsApp has opened with your details. Press Send there to submit your enquiry." : "Your details will be prepared in WhatsApp. You can review them before sending."}</p>
          </form>
        </Reveal>
      </section>

      <footer className="site-footer">
        <div className="section-shell footer-main">
          <a href="#home" className="brand footer-brand"><span className="brand-symbol" aria-hidden="true">✦</span><span className="brand-word">Arquentra<span>.</span></span></a>
          <p>We build brands that grow.</p>
          <nav aria-label="Footer navigation"><a href="#services">Services</a><a href="#work">Our Work</a><a href="#about">About</a><a href="#contact">Contact</a></nav>
          <WhatsAppLink className="footer-cta">Start a project <ArrowRight size={16} /></WhatsAppLink>
        </div>
        <div className="section-shell footer-bottom"><span>© 2026 ARQUENTRA STUDIO</span><span>STRATEGY · DESIGN · DIGITAL GROWTH</span><a href="#home">BACK TO TOP ↑</a></div>
      </footer>
      <WhatsAppLink className="floating-whatsapp"><MessageCircle size={19} /><span>Let&apos;s talk</span></WhatsAppLink>
    </main>
  );
}
