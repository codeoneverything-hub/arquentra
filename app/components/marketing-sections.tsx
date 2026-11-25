import Image from "next/image";
import { ArrowRight, Check, Gauge, Globe2, Layout, MessageCircle, Search, Smartphone, Wrench } from "lucide-react";
import { placeholders } from "../../content/placeholders";
import Reveal from "./reveal";
import WhatsAppLink from "./whatsapp-link";

const packages = [
  { name: "Starter", fit: "A focused one-page website", includes: ["Single-page layout", "Responsive design", "Clear contact action"], price: placeholders.pricing.starterFromINR, timeline: placeholders.pricing.starterTimeline },
  { name: "Business", fit: "A growing business with more to explain", includes: ["Multiple core pages", "Responsive design", "Contact and lead path"], price: placeholders.pricing.businessFromINR, timeline: placeholders.pricing.businessTimeline },
  { name: "Custom", fit: "A website with custom features or a store", includes: ["Custom page and feature scope", "Responsive design", "Integration plan"], price: placeholders.pricing.customFromINR, timeline: placeholders.pricing.customTimeline },
];

const addOns = [
  { title: "Extra pages", detail: "Additional pages planned around your content.", price: placeholders.pricing.addOnPrices.extraPages },
  { title: "Copywriting", detail: "Help shaping clear page copy for your visitors.", price: placeholders.pricing.addOnPrices.copywriting },
  { title: "SEO setup", detail: "Search-friendly page structure and technical basics.", price: placeholders.pricing.addOnPrices.seoSetup },
  { title: "Maintenance", detail: "Ongoing website updates by an agreed plan.", price: placeholders.pricing.addOnPrices.maintenance },
  { title: "Bookings or payments", detail: "An integration scoped to your chosen provider.", price: placeholders.pricing.addOnPrices.bookingPayments },
] as const;

export function ServicesSection() {
  const services = [
    { icon: Layout, title: "Business websites", detail: "A clear home for what you do, who you help and how customers can reach you." },
    { icon: ArrowRight, title: "Landing pages", detail: "A focused page for one service, offer or campaign." },
    { icon: Smartphone, title: "Portfolio and personal sites", detail: "A simple way to present your work, story or services online." },
    { icon: Wrench, title: "Online stores", detail: "Product pages and shopping flows, scoped around your catalog and chosen platform." },
    { icon: MessageCircle, title: "Contact and booking paths", detail: "WhatsApp links, enquiry forms, or booking and payment integrations where suitable." },
    { icon: Wrench, title: "Website redesigns", detail: "Rework an existing website's structure, layout or content around what the business needs now." },
    { icon: Gauge, title: "Speed improvements", detail: "Review loading, layout stability and image weight, then scope practical front-end improvements." },
    { icon: Search, title: "SEO setup", detail: "Page titles, descriptions, crawlable structure and technical launch basics; no ranking promises." },
    { icon: Globe2, title: "Domain and hosting help", detail: "Choose and set up the domain and hosting needed for the agreed site." },
    { icon: Wrench, title: "Ongoing maintenance", detail: "Website updates and upkeep can be arranged in a separately agreed plan." },
  ];
  return (
    <section className="services-section page-wrap section-space" id="services">
      <div className="section-topline"><span className="section-index">[ WEBSITE DESIGN & DEVELOPMENT ]</span><span className="section-aside">ONE SERVICE. BUILT AROUND YOU.</span></div>
      <div className="section-heading"><Reveal><h2>What your website<br /><span>can do for you.</span></h2></Reveal><p>Choose the kind of site you need. We&apos;ll agree the pages and features before the quote.</p></div>
      <div className="service-list">
        {services.map(({ icon: Icon, title, detail }, index) => <Reveal key={title} delay={index * .025}><article className="service-row service-row-static"><span className="service-number">{String(index + 1).padStart(2, "0")}</span><span className="service-icon"><Icon size={20} strokeWidth={1.5} /></span><span className="service-main"><strong>{title}</strong><span>{detail}</span></span><Check className="service-arrow" size={19} aria-hidden="true" /></article></Reveal>)}
      </div>
      <div className="audience-boundaries">
        <div><h3>A good fit for</h3><p>Shops · Clinics · Coaches · Restaurants · Local services · Independent professionals</p></div>
        <div><h3>What I don&apos;t offer</h3><p>Social media management, ad campaigns, logo-only work, custom mobile apps, or guaranteed rankings and sales.</p></div>
      </div>
      <p className="service-seo-note">SEO setup means on-page and technical foundations. It does not guarantee search positions or replace ongoing SEO campaigns.</p>
    </section>
  );
}

export function PricingSection() {
  return (
    <section className="pricing-section section-space" id="pricing">
      <div className="page-wrap">
        <div className="section-topline"><span className="section-index">[ PRICING & SCOPE ]</span><span className="section-aside">CLEAR BEFORE WE START</span></div>
        <div className="section-heading"><Reveal><h2>Pick a starting<br /><span>point.</span></h2></Reveal><p>Every project is different. The final quote follows an agreed page and feature list, so you know what it covers.</p></div>
        <div className="pricing-grid">{packages.map((item) => <article className="price-card" key={item.name}>
          <span className="price-kicker">WEBSITE PACKAGE</span><h3>{item.name}</h3><p className="price-fit">{item.fit}</p>
          <p className="price-amount">{item.price == null ? "Quote after scope" : `From ₹${new Intl.NumberFormat("en-IN").format(item.price)}`}</p>
          <p className="price-timeline">{item.timeline || "Timeline agreed before work begins"}</p>
          <ul>{item.includes.map((feature) => <li key={feature}><Check size={15} />{feature}</li>)}</ul>
          <WhatsAppLink className="text-link" message={`Hi Arquentra, I'd like a quote for a ${item.name.toLowerCase()} website.`}>Ask about {item.name} <ArrowRight size={15} /></WhatsAppLink>
        </article>)}</div>
        <div className="add-on-block"><div><span className="eyebrow">SCOPE ADD-ONS</span><h3>Make it fit your needs.</h3><p>We&apos;ll confirm availability, scope and cost before adding anything.</p></div><ul>{addOns.map(({ title, detail, price }) => <li key={title}><strong>{title}{price != null && <em> · From ₹{new Intl.NumberFormat("en-IN").format(price)}</em>}</strong><span>{detail}</span></li>)}</ul></div>
        <div className="price-factors"><h3>What affects the price?</h3><p>Page count, content readiness, custom design, store setup, integrations and the amount of testing or migration required. Share the budget range that works for you in the enquiry form; the exact scope and price are agreed before kickoff.</p><div className="budget-pills"><span>Under ₹25,000</span><span>₹25,000–₹75,000</span><span>₹75,000–₹2,00,000</span><span>₹2,00,000+</span></div></div>
        {placeholders.firstProjectOffer && <aside className="first-project-note">{placeholders.firstProjectOffer}</aside>}
      </div>
    </section>
  );
}

export function AboutSection() {
  const { owner } = placeholders;
  const hasDetails = Boolean(owner.name || owner.bio || owner.city || owner.photo || owner.skills.length || owner.tools.length);
  return (
    <section className="about-section section-space page-wrap" id="about">
      <div className="section-topline"><span className="section-index">[ ABOUT ARQUENTRA ]</span><span className="section-aside">INDEPENDENT FREELANCE WEB DESIGN</span></div>
      <div className="about-layout"><Reveal><h2>One point of contact.<br /><span>From first chat to launch.</span></h2><p>Arquentra is an independent freelance website design and development service. You work directly with the freelancer shaping and building your website.</p><p>Every project starts with a conversation about your business and goals. The pages, deliverables, timing and quote are agreed before work begins.</p></Reveal>
        {hasDetails && <div className="about-profile">{owner.photo && <div className="about-photo"><Image src={owner.photo} alt={owner.photoAlt || `Portrait of ${owner.name || "the Arquentra freelancer"}`} fill sizes="(max-width: 760px) 100vw, 320px" /></div>}{owner.name && <h3>{owner.name}</h3>}{owner.bio && <p>{owner.bio}</p>}{owner.city && <p className="profile-meta">Based in {owner.city}, India</p>}{owner.skills.length > 0 && <p className="profile-meta"><strong>Skills</strong> {owner.skills.join(" · ")}</p>}{owner.tools.length > 0 && <p className="profile-meta"><strong>Tools</strong> {owner.tools.join(" · ")}</p>}</div>}
      </div>
      {placeholders.ownerProfile.bookingUrl && <a className="text-link" href={placeholders.ownerProfile.bookingUrl} target="_blank" rel="noreferrer">Book a short call <ArrowRight size={15} /></a>}
      {placeholders.ownerProfile.socialLinks.length > 0 && <div className="profile-socials">{placeholders.ownerProfile.socialLinks.map((href) => <a href={href} key={href} target="_blank" rel="noreferrer">{new URL(href).hostname.replace(/^www\./, "")} <ArrowRight size={14} /></a>)}</div>}
    </section>
  );
}

export function TestimonialsSection() {
  const testimonials = placeholders.testimonials.filter((entry) => entry.permissionToPublish && entry.quote && entry.clientName && entry.business);
  if (testimonials.length === 0) return null;
  return <section className="testimonials-section section-space page-wrap" id="testimonials"><div className="section-topline"><span className="section-index">[ KIND WORDS ]</span><span className="section-aside">SHARED WITH PERMISSION</span></div><div className="testimonial-grid">{testimonials.map((entry) => <figure key={`${entry.clientName}-${entry.business}`}><blockquote>“{entry.quote}”</blockquote><figcaption><strong>{entry.clientName}</strong><span>{entry.business}</span></figcaption></figure>)}</div></section>;
}

export function TrustSection() {
  const items = [
    ["Revisions", placeholders.policies.revisionPolicy],
    ["Ownership & handover", placeholders.policies.ownershipAndHandover],
    ["If we disagree", placeholders.policies.disagreementPlan],
    ["Reply time", placeholders.policies.responseTimePromise],
    ["Invoices & GST", placeholders.policies.gstInvoiceDetails],
    ["Payment terms", placeholders.policies.paymentTerms],
    ["Maintenance & support", placeholders.policies.maintenanceAndSupport],
  ].filter(([, detail]) => detail.trim());
  if (!items.length) return null;
  return <section className="trust-section section-space page-wrap" id="project-details"><div className="section-topline"><span className="section-index">[ THE PRACTICAL DETAILS ]</span><span className="section-aside">AGREED BEFORE WORK BEGINS</span></div><div className="trust-grid">{items.map(([title, detail]) => <article key={title}><h3>{title}</h3><p>{detail}</p></article>)}</div></section>;
}
