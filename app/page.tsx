"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Menu,
  X,
  Globe,
  Layers3,
  ShoppingBag,
  Sparkles,
  ChartNoAxesCombined,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Web Experiences",
    description:
      "High-performance websites designed to turn first impressions into lasting business relationships.",
    icon: Globe,
    tags: ["Web Development", "UI / UX", "Landing Pages"],
  },
  {
    number: "02",
    title: "Brand & Content",
    description:
      "A consistent brand presence through purposeful content, compelling visuals and thoughtful storytelling.",
    icon: Layers3,
    tags: ["Content Strategy", "Social Media", "Video"],
  },
  {
    number: "03",
    title: "Commerce & Growth",
    description:
      "Digital storefronts and search strategies built to help ambitious businesses reach more customers.",
    icon: ShoppingBag,
    tags: ["E-commerce", "SEO", "Conversion"],
  },
  {
    number: "04",
    title: "Intelligent Systems",
    description:
      "Practical automation that reduces repetitive work and helps businesses operate more efficiently.",
    icon: Sparkles,
    tags: ["AI Automation", "Workflows", "Integration"],
  },
 ];

const pricingPackages = [
  {
    number: "01",
    name: "Starter Website",
    price: "₹9,999",
    billing: "one-time project",
    description: "A professional starting point for businesses ready to establish their online presence.",
    features: ["Responsive landing page", "Mobile-friendly design", "Contact / WhatsApp CTA", "Basic on-page SEO"],
    service: "Website development",
    featured: false,
  },
  {
    number: "02",
    name: "Business Website",
    price: "₹24,999",
    billing: "one-time project",
    description: "A polished multi-page website designed to explain your services and build trust.",
    features: ["Up to 5 core pages", "Custom visual direction", "Enquiry form integration", "Basic SEO setup"],
    service: "Website development",
    featured: true,
  },
  {
    number: "03",
    name: "Social Growth",
    price: "₹7,999",
    billing: "per month",
    description: "Consistent social content to help your business stay visible and connected.",
    features: ["Content calendar", "Monthly post plan", "Creative design support", "Monthly performance summary"],
    service: "Social media & content",
    featured: false,
  },
  {
    number: "04",
    name: "Online Store",
    price: "₹39,999",
    billing: "one-time project",
    description: "An e-commerce foundation for brands ready to start selling online.",
    features: ["Product catalogue setup", "Responsive storefront", "Cart and checkout setup", "Basic store SEO"],
    service: "E-commerce",
    featured: false,
  },
];

const projects = [
  {
    category: "E-COMMERCE · CONCEPT",
    name: "Seela Label",
    description: "A contemporary digital storefront for a fashion brand.",
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=85",
    className: "project-fashion",
  },
  {
    category: "DIGITAL EXPERIENCE · CONCEPT",
    name: "The Modern Edit",
    description: "A refined digital identity for a lifestyle business.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85",
    className: "project-studio",
  },
];

export default function Home() {
  const [selectedSignal, setSelectedSignal] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const signals = [
    {
      title: "Website Opportunity",
      description:
        "A better digital experience could help a business convert more visitors.",
      category: "WEB DEVELOPMENT",
    },
    {
      title: "Search Visibility",
      description:
        "Improving search visibility can help businesses reach relevant customers.",
      category: "SEO & GROWTH",
    },
    {
      title: "Automation Potential",
      description:
        "Automating repetitive workflows can save time and reduce manual work.",
      category: "AI AUTOMATION",
    },
  ];

  useEffect(() => {
    let ticking = false;

    const updateProgress = () => {
      if (ticking) return;
      ticking = true;

      window.requestAnimationFrame(() => {
        const scrollableHeight =
          document.documentElement.scrollHeight - window.innerHeight;

        const progress =
          scrollableHeight > 0
            ? (window.scrollY / scrollableHeight) * 100
            : 0;

        setScrollProgress(Math.min(100, Math.max(0, progress)));
        ticking = false;
      });
    };

    window.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();

    return () => {
      window.removeEventListener("scroll", updateProgress);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="site-shell">
      <div
        className="scroll-progress"
        aria-hidden="true"
        style={{ width: `${scrollProgress}%` }}
      />
      <div className="announcement">
        <span className="status-dot" />
        INDEPENDENT DIGITAL STUDIO
        <span className="announcement-divider">/</span>
        BUILT FOR WHAT&apos;S NEXT
      </div>

      <header className="navbar">
        <a className="brand" href="#home" aria-label="Arquentra home">
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 44 44" fill="none">
              <path
                d="M22 3 42 39H29L22 26 15 39H2L22 3Z"
                fill="currentColor"
              />
              <path d="m22 26 7 13h-7l-4-7 4-6Z" fill="#07120F" />
            </svg>
          </span>
          <span className="brand-word">ARQUENTRA</span>
        </a>

        <nav className={menuOpen ? "nav-links nav-open" : "nav-links"}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#pricing" onClick={closeMenu}>Pricing</a>
          <a href="#work" onClick={closeMenu}>Selected work</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a className="mobile-contact" href="#contact" onClick={closeMenu}>
            Start a project <ArrowUpRight size={16} />
          </a>
        </nav>

        <a className="nav-cta" href="#contact">
          Let&apos;s talk <ArrowUpRight size={16} />
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            STRATEGY <span>×</span> TECHNOLOGY <span>×</span> CREATIVITY
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12 }}
          >
            Your next
            <br />
            chapter starts
            <br />
            <span className="serif-accent">digitally.</span>
          </motion.h1>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            We build digital experiences, powerful brands and intelligent
            systems that help ambitious businesses move forward.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <a href="#contact" className="button-primary">
              Start a project <ArrowUpRight size={17} />
            </a>
            <a href="#work" className="button-text">
              Explore our work <ArrowDown size={16} />
            </a>
          </motion.div>

          <div className="hero-footnote">
            <span>01 / DIGITAL PARTNERSHIP</span>
            <span>DESIGNED AROUND YOUR AMBITION</span>
          </div>
        </div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="visual-topline">
            <span>THE BIGGER PICTURE</span>
            <span>EST. 2026</span>
          </div>

          <div className="orbital-scene radar-scene">
  <div className="radar-top">
    <span>
      <span className="radar-status-dot" />
      OPPORTUNITY RADAR
    </span>
    <span className="radar-live">SYSTEM ACTIVE</span>
  </div>

  <div className="radar">
    <div className="radar-ring ring-1" />
    <div className="radar-ring ring-2" />
    <div className="radar-ring ring-3" />
    <div className="radar-ring ring-4" />

    <div className="radar-crosshair radar-horizontal" />
    <div className="radar-crosshair radar-vertical" />

    <div className="radar-sweep" />

    <div className="radar-center">
      <svg viewBox="0 0 100 100" fill="none">
        <path
          d="M50 8 91 84H65L50 57 35 84H9L50 8Z"
          fill="currentColor"
        />
        <path
          d="m50 57 15 27H50L40 66l10-9Z"
          fill="#07120F"
        />
      </svg>
    </div>

    <button
  type="button"
  className={`radar-blip blip-1 ${selectedSignal === 0 ? "selected" : ""}`}
  aria-label="Explore website opportunity"
  onClick={() => setSelectedSignal(0)}
/>

<button
  type="button"
  className={`radar-blip blip-2 ${selectedSignal === 1 ? "selected" : ""}`}
  aria-label="Explore search visibility opportunity"
  onClick={() => setSelectedSignal(1)}
/>

<button
  type="button"
  className={`radar-blip blip-3 ${selectedSignal === 2 ? "selected" : ""}`}
  aria-label="Explore automation opportunity"
  onClick={() => setSelectedSignal(2)}
/>

    <div className="radar-coordinate coordinate-1">
      28.61 / 77.20
    </div>

    <div className="radar-coordinate coordinate-2">
      DIGITAL SIGNAL
    </div>

    <div className="radar-target target-1">
      <span />
      BUSINESS OPPORTUNITY
    </div>

    <div className="radar-target target-2">
      <span />
      GROWTH POTENTIAL
    </div>
  </div>

  <div className="radar-bottom">
    <div>
      <span className="radar-bottom-label">SCAN MODE</span>
      <strong>Opportunity discovery</strong>
    </div>

    <div className="radar-indicator">
      <span />
      SIMULATION
    </div>
  </div>

 <motion.div
  className="radar-opportunity"
  key={selectedSignal}
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.3 }}
>
  <div className="opportunity-icon">
    <ChartNoAxesCombined size={19} />
  </div>

  <div>
    <span>{signals[selectedSignal].category}</span>
    <strong>{signals[selectedSignal].title}</strong>
    <small>{signals[selectedSignal].description}</small>
  </div>

  <ArrowUpRight size={18} />
</motion.div>
          </div>

          <div className="visual-bottomline">
            <span>IDEAS INTO IMPACT</span>
            <span className="visual-index">AQ—001</span>
          </div>
        </motion.div>

        <a className="scroll-cue" href="#services">
          <span className="scroll-line" />
          SCROLL TO EXPLORE
        </a>
      </section>

      <section className="intro-strip" id="about">
        <p>NOT JUST ANOTHER DIGITAL AGENCY.</p>
        <p className="intro-statement">
          We connect <span>creative thinking</span>, technology and business
          strategy to make digital work harder for you.
        </p>
        <a href="#contact" className="inline-link">
          Discover our approach <ArrowRight size={16} />
        </a>
      </section>

      <section className="services-section section-padding" id="services">
        <div className="section-heading">
          <div>
            <p className="eyebrow">WHAT WE BRING TO THE TABLE</p>
            <h2>
              Built around
              <br />
              <span className="serif-accent">your next move.</span>
            </h2>
          </div>
          <p className="section-description">
            Thoughtful design. Reliable technology. Connected digital
            services, all working towards your business goals.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                className="service-card"
                key={service.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="service-card-top">
                  <span>{service.number} / 04</span>
                  <Icon size={23} strokeWidth={1.4} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="service-tags">
                  {service.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <a
                  href="#contact"
                  className="service-link"
                  aria-label={`Enquire about ${service.title}`}
                >
                  <ArrowUpRight size={19} />
                </a>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="pricing-section section-padding" id="pricing">
        <div className="section-heading">
          <div>
            <p className="eyebrow">CLEAR STARTING POINTS</p>
            <h2>
              Invest in your
              <br />
              <span className="serif-accent">next chapter.</span>
            </h2>
          </div>
          <p className="section-description">
            Straightforward starting prices for common projects. Every business
            is different, so we&apos;ll confirm the final scope and quote before work begins.
          </p>
        </div>

        <div className="pricing-grid">
          {pricingPackages.map((item, index) => (
            <motion.article
              className={`pricing-card${item.featured ? " pricing-card-featured" : ""}`}
              key={item.number}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              {item.featured && <span className="pricing-badge">POPULAR STARTING POINT</span>}
              <div className="pricing-card-top">
                <span>{item.number} / 04</span>
                <ArrowUpRight size={18} />
              </div>
              <h3>{item.name}</h3>
              <p className="pricing-description">{item.description}</p>
              <div className="pricing-price-row">
                <span className="pricing-from">Starting from</span>
                <strong>{item.price}</strong>
                <span className="pricing-billing">{item.billing}</span>
              </div>
              <ul className="pricing-features">
                {item.features.map((feature) => (
                  <li key={feature}>
                    <CheckCircle2 size={15} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href={`#contact`}
                className={item.featured ? "button-primary pricing-cta" : "pricing-cta pricing-cta-secondary"}
                aria-label={`Request a quote for ${item.name}`}
              >
                Get a quote <ArrowUpRight size={16} />
              </a>
            </motion.article>
          ))}
        </div>
        <div className="pricing-note">
          <span className="status-dot" />
          <p>
            Prices are indicative starting points in INR, not fixed offers. Final pricing depends on scope,
            content, integrations and project requirements. Hosting, paid tools, advertising spend and taxes
            may be additional where applicable.
          </p>
        </div>
        <div className="pricing-custom">
          <div>
            <span className="eyebrow">NEED SOMETHING DIFFERENT?</span>
            <h3>Let&apos;s shape a solution around your business.</h3>
          </div>
          <a href="#contact" className="button-primary">
            Request a custom quote <ArrowUpRight size={17} />
          </a>
        </div>
      </section>

      <section className="work-section section-padding" id="work">
        <div className="section-heading work-heading">
          <div>
            <p className="eyebrow">A GLIMPSE INTO OUR WORLD</p>
            <h2>
              Selected
              <br />
              <span className="serif-accent">work & ideas.</span>
            </h2>
          </div>
          <p className="section-description">
            A growing collection of digital experiences and concepts shaped
            around what businesses need next.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.article
              className={`project-card ${project.className}`}
              key={project.name}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
            >
              <div className="project-image-wrap">
                <img src={project.image} alt="" loading="lazy" />
                <span className="project-category">{project.category}</span>
                <span className="project-arrow">
                  <ArrowUpRight size={23} />
                </span>
              </div>
              <div className="project-meta">
                <div>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                </div>
                <span>0{index + 1}</span>
              </div>
            </motion.article>
          ))}
        </div>
        <p className="portfolio-note">
          Selected concepts for demonstration. Case studies will be added as
          client projects are completed.
        </p>
      </section>

      <section className="manifesto section-padding">
        <p className="eyebrow">OUR POINT OF VIEW</p>
        <h2>
          Good design gets attention.
          <br />
          <span className="serif-accent">Good thinking creates impact.</span>
        </h2>
        <p>
          We believe digital should do more than look good. It should solve
          problems, create opportunities and make business better.
        </p>
        <a href="#contact" className="button-primary">
          Let&apos;s build something meaningful <ArrowUpRight size={17} />
        </a>
      </section>

      <section className="contact-section section-padding" id="contact">
        <div className="contact-copy">
          <p className="eyebrow">HAVE SOMETHING IN MIND?</p>
          <h2>
            Let&apos;s make
            <br />
            <span className="serif-accent">it happen.</span>
          </h2>
          <p>
            Tell us what you&apos;re building, where you want to go and what
            you need help with. Let&apos;s find the right way forward.
          </p>
          <div className="contact-note">
            <span className="status-dot" />
            OPEN FOR SELECT PROJECTS
          </div>
          <a
            className="contact-whatsapp"
            href="https://wa.me/919567555020?text=Hi%20ARQUENTRA%2C%20I%27d%20like%20to%20discuss%20a%20project."
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={17} /> Chat with us on WhatsApp <ArrowUpRight size={15} />
          </a>
        </div>

        <form
          className="contact-form"
          onSubmit={async (event) => {
            event.preventDefault();
            if (formStatus === "sending") return;

            const form = event.currentTarget;
            const data = new FormData(form);
            data.append("_subject", `ARQUENTRA project enquiry from ${String(data.get("name") || "a visitor")}`);
            data.append("_cc", "codeoneverything@gmail.com");
            data.append("_template", "table");
            data.append("_captcha", "false");

            setFormStatus("sending");
            try {
              const response = await fetch("https://formsubmit.co/ajax/comestsd@gmail.com", {
                method: "POST",
                headers: { Accept: "application/json" },
                body: data,
              });
              const result = await response.json();

              if (!response.ok || result.success === false) {
                throw new Error("The enquiry could not be sent.");
              }

              setFormStatus("success");
              form.reset();
            } catch {
              setFormStatus("error");
            }
          }}
        >
          <label>
            YOUR NAME
            <input
              name="name"
              type="text"
              placeholder="How should we address you?"
              required
            />
          </label>

          <label>
            EMAIL ADDRESS
            <input
              name="email"
              type="email"
              placeholder="you@company.com"
              required
            />
          </label>

          <label>
            WHAT DO YOU NEED?
            <select name="service" defaultValue="" required>
              <option value="" disabled>Select a service</option>
              <option>Website development</option>
              <option>Social media & content</option>
              <option>SEO & digital marketing</option>
              <option>E-commerce</option>
              <option>AI automation</option>
              <option>Multiple services</option>
              <option>Something else</option>
            </select>
          </label>

          <label>
            TELL US ABOUT YOUR PROJECT
            <textarea
              name="message"
              placeholder="A little about your goals, timeline and ideas..."
              rows={4}
              required
            />
          </label>

          <button className="button-primary form-submit" type="submit" disabled={formStatus === "sending"}>
            {formStatus === "sending"
              ? "Sending enquiry…"
              : formStatus === "success"
                ? "Enquiry sent"
                : "Send project enquiry"}
            {formStatus === "success" ? <CheckCircle2 size={17} /> : <ArrowUpRight size={17} />}
          </button>
          {formStatus === "success" && (
            <p className="form-feedback form-success" role="status">
              Thank you! Your enquiry has been submitted. We&apos;ll be in touch soon.
            </p>
          )}
          {formStatus === "error" && (
            <p className="form-feedback form-error" role="alert">
              We couldn&apos;t submit the form. Please try again or contact us on WhatsApp.
            </p>
          )}
          <p className="form-disclaimer">
            Your enquiry will be sent to our team by email. If this is the first submission, FormSubmit may ask us to activate the receiving email address.
          </p>
        </form>
      </section>

      <a
        className="whatsapp-float"
        href="https://wa.me/919567555020?text=Hi%20ARQUENTRA%2C%20I%27m%20interested%20in%20your%20digital%20services.%20I%27d%20like%20to%20discuss%20a%20project."
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with ARQUENTRA on WhatsApp"
      >
        <MessageCircle size={21} />
        <span>Let&apos;s talk</span>
      </a>

      <footer className="footer">
        <a className="brand footer-brand" href="#home">
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 44 44" fill="none">
              <path
                d="M22 3 42 39H29L22 26 15 39H2L22 3Z"
                fill="currentColor"
              />
              <path d="m22 26 7 13h-7l-4-7 4-6Z" fill="#07120F" />
            </svg>
          </span>
          <span className="brand-word">ARQUENTRA</span>
        </a>
        <p>STRATEGY. TECHNOLOGY. GROWTH.</p>
        <a href="#home" className="back-to-top">
          Back to top <ArrowUpRight size={15} />
        </a>
        <div className="footer-bottom">
          <span>© 2026 ARQUENTRA. ALL RIGHTS RESERVED.</span>
          <span>INDEPENDENT BY DESIGN.</span>
        </div>
      </footer>
    </main>
  );
}
