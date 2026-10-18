 "use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Menu, X, Sparkles,
  Globe2, Search, PenTool, Smartphone, Play, ShoppingBag, Bot, MessageCircle
} from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Seela Label",
    category: "Fashion · E-commerce",
    description: "A softer digital home for a contemporary saree label.",
    art: "fashion",
    note: "Visit website",
    href: "https://www.seelalabel.com",
  },
  {
    number: "02",
    title: "Nexora",
    category: "Digital experience · Website",
    description: "An expressive digital destination built around the Nexora brand.",
    art: "shop",
    note: "Visit website",
    href: "https://nexora-auj1ikjqz-codeoneverything.vercel.app",
  },
  {
    number: "03",
    title: "Alliance Logistics",
    category: "Logistics · Website",
    description: "A clear, confident digital presence for a logistics business.",
    art: "studio",
    note: "Visit website",
    href: "https://alliance-logistics-frdum7sdn-codeoneverything.vercel.app",
  },
];

const services = [
  { n: "01", title: "Web experiences", text: "Websites that feel considered, clear and distinctly yours.", icon: Globe2 },
  { n: "02", title: "Search & growth", text: "A stronger foundation for being found by the right people.", icon: Search },
  { n: "03", title: "Content & stories", text: "Thoughtful words and visuals that make your brand feel human.", icon: PenTool },
  { n: "04", title: "Social media", text: "A consistent, creative presence—not just another posting schedule.", icon: Smartphone },
  { n: "05", title: "Video & motion", text: "Short-form stories with rhythm, character and purpose.", icon: Play },
  { n: "06", title: "Online stores", text: "Shopping experiences that make choosing and buying feel easy.", icon: ShoppingBag },
  { n: "07", title: "AI automation", text: "Small, useful automations that give you time back.", icon: Bot },
];

function SketchWindow({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 620 500" role="img" aria-label="Hand-drawn studio window overlooking a quiet landscape">
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e5e7ee" />
          <stop offset="100%" stopColor="#f7e9d8" />
        </linearGradient>
      </defs>
      <path d="M98 438 L105 102 Q108 43 169 42 L463 45 Q520 47 522 110 L519 438" fill="none" stroke="#37332f" strokeWidth="2.1" strokeLinecap="round"/>
      <path d="M117 421 L123 109 Q126 64 170 62 L458 64 Q499 66 500 111 L495 421Z" fill="url(#sky)" stroke="#777168" strokeWidth="1.5"/>
      <path d="M123 310 Q190 270 247 303 T367 289 T500 300 L495 421 L117 421Z" fill="#c9d0bd" opacity=".85"/>
      <path d="M122 347 L189 276 L236 326 L292 246 L356 326 L402 285 L500 350" fill="none" stroke="#727b69" strokeWidth="1.8"/>
      <path d="M123 365 L208 325 L265 356 L346 315 L414 361 L498 329" fill="none" stroke="#9c9d86" strokeWidth="1.5"/>
      <path d="M123 384 Q205 368 280 387 T495 379" fill="none" stroke="#8b9c9e" strokeWidth="1.6"/>
      <path d="M124 403 Q240 391 320 405 T497 399" fill="none" stroke="#8b9c9e" strokeWidth="1.2"/>
      <path d="M305 64 L304 421 M123 251 L499 251" fill="none" stroke="#777168" strokeWidth="1.4"/>
      <path d="M171 65 Q161 107 183 136 Q197 151 213 133 Q225 109 209 66" fill="#c8a5c9" opacity=".8" stroke="#78677d" strokeWidth="1.2"/>
      <path d="M181 121 Q160 99 159 81 M191 127 Q218 102 218 82" fill="none" stroke="#78677d" strokeWidth="1.2"/>
      <path d="M65 437 L547 437 M78 449 L535 449" stroke="#37332f" strokeWidth="1.4" strokeLinecap="round"/>
      <path d="M92 436 L89 455 M522 436 L526 455" stroke="#37332f" strokeWidth="1.6"/>
      <path d="M55 474 Q183 466 310 473 T562 472" fill="none" stroke="#b4a99a" strokeWidth="1.2"/>
      <path d="M65 40 L77 27 M80 49 L95 47 M533 72 L549 61 M538 85 L557 87" stroke="#8d8579" strokeWidth="1.3" strokeLinecap="round"/>
      <path d="M266 35 Q276 26 287 34 M293 33 Q302 27 310 35" fill="none" stroke="#8d8579" strokeWidth="1.2"/>
      <path d="M388 112 q7 -8 14 0 q7 -8 14 0 M421 131 q5 -6 10 0 q5 -6 10 0" fill="none" stroke="#8d8579" strokeWidth="1.3"/>
    </svg>
  );
}

function HeroIllustration() {
  return (
    <div className="hero-art" aria-label="Illustrated creative studio scene">
      <div className="art-paper-tape tape-one" />
      <div className="art-paper-tape tape-two" />
      <div className="sun-wash" />
      <SketchWindow className="window-sketch" />
      <svg className="desk-sketch" viewBox="0 0 600 310" aria-hidden="true">
        <path d="M54 241 Q180 231 299 242 T558 237" fill="none" stroke="#39342f" strokeWidth="2" strokeLinecap="round"/>
        <path d="M91 244 L79 294 M517 241 L529 294" stroke="#39342f" strokeWidth="2" strokeLinecap="round"/>
        <path d="M214 236 L210 257 L287 257 L284 236" fill="#d7c5ac" stroke="#39342f" strokeWidth="1.7"/>
        <path d="M190 235 L191 180 Q194 170 207 170 L295 170 Q305 173 304 185 L301 235" fill="#f8f3e8" stroke="#39342f" strokeWidth="2"/>
        <path d="M201 184 L293 184" stroke="#c2b6a7" strokeWidth="1.2"/>
        <path d="M213 196 L267 196 M213 205 L282 205 M213 214 L255 214" stroke="#b2a89b" strokeWidth="1.2"/>
        <path d="M110 240 Q104 209 119 188 Q136 174 153 190 L166 239" fill="#d7c8b5" stroke="#39342f" strokeWidth="2"/>
        <path d="M120 191 Q117 165 138 158 Q158 162 159 187" fill="#302d2a" stroke="#39342f" strokeWidth="1.6"/>
        <path d="M129 184 Q137 190 148 184" fill="none" stroke="#39342f" strokeWidth="1.3"/>
        <path d="M142 204 L170 220 L177 237 M121 205 L102 221 L105 239" fill="none" stroke="#39342f" strokeWidth="2" strokeLinecap="round"/>
        <path d="M127 240 L120 270 M150 240 L161 270" stroke="#39342f" strokeWidth="2"/>
        <path d="M380 239 Q369 214 389 200 Q408 189 426 208 Q442 225 429 240Z" fill="#34312d"/>
        <path d="M386 205 L384 185 L399 198 M418 199 L432 184 L429 209" fill="#34312d"/>
        <path d="M395 216 Q398 212 401 216 M414 216 Q417 212 420 216" stroke="#f4ebda" strokeWidth="1.3" fill="none"/>
        <path d="M352 240 Q347 230 351 219 L361 213 L370 220 L373 240" fill="#c7a9cb" stroke="#39342f" strokeWidth="1.5"/>
        <path d="M358 212 L360 200 L365 211" fill="#c7a9cb" stroke="#39342f" strokeWidth="1.3"/>
        <path d="M464 240 L462 214 M460 225 Q440 215 444 200 Q462 204 462 219 M463 224 Q485 208 487 191 Q467 197 463 216" fill="#9ba78d" stroke="#5b6a51" strokeWidth="1.5"/>
        <path d="M448 240 L484 240 L479 250 L452 250Z" fill="#e0c9b2" stroke="#39342f" strokeWidth="1.5"/>
        <path d="M54 272 Q160 267 244 273 T555 272" fill="none" stroke="#a79b8d" strokeWidth="1.2"/>
        <path d="M48 281 L66 281 M534 284 L553 284" stroke="#a79b8d" strokeWidth="1.2"/>
      </svg>
      <div className="hand-note note-top">a little imagination<br />goes a long way <span>✳</span></div>
      <div className="hand-note note-bottom">made with care,<br />not by a template <span>↗</span></div>
      <div className="tiny-stamp">ARQ<br /><span>STUDIO</span></div>
    </div>
  );
}

function ProjectArt({ type }: { type: string }) {
  if (type === "fashion") return (
    <svg viewBox="0 0 500 360" aria-hidden="true">
      <path d="M34 290 Q140 268 244 289 T465 284" fill="none" stroke="#9d9284" strokeWidth="1.5"/>
      <ellipse cx="257" cy="303" rx="114" ry="16" fill="#b7b2a3" opacity=".25"/>
      <path d="M201 83 Q220 58 248 69 Q275 82 268 111 L284 144 L314 274 Q257 302 170 276 L201 151 L192 119Z" fill="#d8c5d2" stroke="#38332f" strokeWidth="2"/>
      <path d="M201 83 Q216 111 249 108 Q270 102 268 80" fill="none" stroke="#38332f" strokeWidth="2"/>
      <path d="M198 143 Q234 165 282 143 M188 193 Q235 214 297 192 M179 242 Q234 262 307 241" fill="none" stroke="#a17b9d" strokeWidth="1.6"/>
      <path d="M224 69 Q225 47 245 45 Q264 47 266 71" fill="#302e2c" stroke="#302e2c" strokeWidth="2"/>
      <path d="M223 83 Q203 104 193 133 M264 83 Q285 104 297 133" fill="none" stroke="#38332f" strokeWidth="2"/>
      <path d="M215 125 Q240 143 271 124" fill="none" stroke="#f4eee3" strokeWidth="3"/>
      <path d="M147 86 Q125 68 111 84 Q99 99 120 116 Q133 128 147 115 Q160 102 147 86Z" fill="#a7b29b" opacity=".9"/>
      <path d="M345 90 Q371 66 390 88 Q400 103 381 119 Q363 130 345 112" fill="#c9b2d4" opacity=".9"/>
      <path d="M97 252 Q120 210 139 249 Q155 272 137 290 L100 290Z" fill="#9eaa90" stroke="#65705e" strokeWidth="1.3"/>
      <path d="M391 260 Q411 219 433 256 L428 291 L390 291Z" fill="#9eaa90" stroke="#65705e" strokeWidth="1.3"/>
      <path d="M66 58 L92 48 M77 77 L96 76 M402 61 L422 51 M407 78 L430 78" stroke="#918577" strokeWidth="1.3"/>
      <circle cx="345" cy="167" r="26" fill="#e7d5a8" opacity=".5"/>
      <path d="M334 164 q10 -13 20 0 q-10 13 -20 0" fill="none" stroke="#9c865d" strokeWidth="1.3"/>
    </svg>
  );
  if (type === "shop") return (
    <svg viewBox="0 0 500 360" aria-hidden="true">
      <path d="M70 293 L70 121 L425 121 L425 293" fill="#e9e0ce" stroke="#39342f" strokeWidth="2"/>
      <path d="M55 126 L100 65 L397 65 L443 126Z" fill="#d8c4a9" stroke="#39342f" strokeWidth="2"/>
      <path d="M83 126 L110 89 L387 89 L415 126" fill="#8a9b83" stroke="#39342f" strokeWidth="1.6"/>
      <path d="M102 126 L102 293 M392 126 L392 293" stroke="#39342f" strokeWidth="1.6"/>
      <rect x="143" y="151" width="84" height="142" fill="#f8f0e3" stroke="#39342f" strokeWidth="1.7"/>
      <rect x="246" y="151" width="117" height="142" fill="#d4c7b1" stroke="#39342f" strokeWidth="1.7"/>
      <path d="M262 171 L347 171 M262 187 L347 187 M262 203 L347 203" stroke="#8d806f" strokeWidth="1.2"/>
      <path d="M155 225 Q183 213 214 225 L214 264 L155 264Z" fill="#c4a4c6" stroke="#39342f" strokeWidth="1.4"/>
      <path d="M159 225 L170 207 L199 207 L211 225" fill="#e7d5a8" stroke="#39342f" strokeWidth="1.4"/>
      <path d="M278 240 Q299 214 322 240 L322 272 L278 272Z" fill="#9eaf98" stroke="#39342f" strokeWidth="1.4"/>
      <path d="M289 240 L289 226 L310 226 L310 240" fill="none" stroke="#39342f" strokeWidth="1.3"/>
      <path d="M130 293 L130 310 M367 293 L367 310 M119 310 L379 310" stroke="#39342f" strokeWidth="1.8"/>
      <path d="M102 52 Q130 27 157 52 M340 52 Q367 28 394 52" fill="none" stroke="#8c8174" strokeWidth="1.4"/>
      <path d="M45 330 Q180 320 250 331 T449 330" fill="none" stroke="#aaa092" strokeWidth="1.2"/>
      <circle cx="178" cy="180" r="12" fill="#e5c3a7" opacity=".8"/>
      <circle cx="310" cy="215" r="11" fill="#d6c3dd" opacity=".8"/>
      <path d="M45 99 L32 99 M450 99 L464 99 M57 82 L57 68 M437 82 L437 68" stroke="#8c8174" strokeWidth="1.2"/>
    </svg>
  );
  return (
    <svg viewBox="0 0 500 360" aria-hidden="true">
      <rect x="78" y="56" width="345" height="239" rx="3" fill="#f5eee0" stroke="#39342f" strokeWidth="2" transform="rotate(-3 250 175)"/>
      <path d="M103 90 L395 74 M106 105 L398 89" stroke="#b3a797" strokeWidth="1.1"/>
      <path d="M115 130 L280 121 M115 145 L248 137" stroke="#b3a797" strokeWidth="1.2"/>
      <rect x="121" y="168" width="136" height="89" fill="#d8d1e0" stroke="#39342f" strokeWidth="1.5" transform="rotate(-3 190 212)"/>
      <path d="M137 242 L173 201 L197 222 L220 187 L243 242" fill="#aab59f" stroke="#5d6c57" strokeWidth="1.4"/>
      <path d="M289 166 L370 160 L374 252 L293 257Z" fill="#e3d0b9" stroke="#39342f" strokeWidth="1.5"/>
      <path d="M304 185 L358 181 M304 198 L356 194 M304 211 L351 207" stroke="#9c8e7c" strokeWidth="1.2"/>
      <path d="M306 237 L324 220 L340 235 L357 215 L371 237" fill="none" stroke="#7b8d75" strokeWidth="1.4"/>
      <path d="M58 305 Q159 295 250 305 T444 303" fill="none" stroke="#aaa092" strokeWidth="1.3"/>
      <path d="M63 57 L47 45 M68 72 L49 72 M426 51 L443 40 M431 68 L449 67" stroke="#8d8174" strokeWidth="1.3"/>
      <circle cx="367" cy="114" r="20" fill="#cbb4d5" opacity=".65"/>
      <path d="M356 113 q11 -15 22 0 q-11 15 -22 0" fill="none" stroke="#87718d" strokeWidth="1.4"/>
      <path d="M93 280 L82 290 M410 281 L422 290" stroke="#8d8174" strokeWidth="1.3"/>
    </svg>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const reveal = reduceMotion ? {} : { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.2 }, transition: { duration: 0.7, ease: "easeOut" as const } };

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Arquentra home">arquentra<span>.</span></a>
        <div className="brand-note">digital studio<br />for real businesses<br />& curious minds</div>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={menuOpen ? "main-nav nav-open" : "main-nav"}>
          <a href="#work" onClick={closeMenu}>Selected work</a>
          <a href="#services" onClick={closeMenu}>What we do</a>
          <a href="#studio" onClick={closeMenu}>The studio</a>
          <a href="#contact" onClick={closeMenu} className="nav-contact">Let's talk <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <section className="hero section-wrap" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-star">✳</span> Independent digital studio · India</div>
          <h1>Good ideas<br />deserve a <em>beautiful</em><br />place to live<span className="period">.</span></h1>
          <p className="hero-sub">We make thoughtful websites and digital stories for people building something good.</p>
          <div className="hero-actions">
            <a className="pill-button" href="#work">Wander through our work <ArrowDownRight size={17} /></a>
            <span className="handwritten">small studio, big curiosity ↘</span>
          </div>
          <span className="scribble-star star-one">✳</span>
          <span className="scribble-star star-two">✳</span>
        </div>
        <motion.div className="hero-illustration-wrap" {...(reduceMotion ? {} : { initial: { opacity: 0, scale: .97 }, animate: { opacity: 1, scale: 1 }, transition: { duration: .9 } })}>
          <HeroIllustration />
          <motion.div className="orbit-dot" animate={reduceMotion ? {} : { y: [0, -8, 0], rotate: [0, 8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} />
        </motion.div>
        <a className="scroll-cue" href="#work"><span>Scroll to explore</span><ArrowDownRight size={17} /></a>
      </section>

      <section className="work-section section-wrap section-rule" id="work">
        <div className="section-label"><span>01 / a few things</span><span>Selected work</span></div>
        <div className="section-heading-row">
          <motion.h2 {...reveal}>Made with<br /><em>intention.</em></motion.h2>
          <p className="section-intro">A small collection of ideas, experiments and digital places. Each one starts with a question: how should this feel?</p>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <motion.a href={project.href} target="_blank" rel="noreferrer" aria-label={`Visit ${project.title} website (opens in a new tab)`} className={`project-card project-${project.art}`} key={project.number} {...(reduceMotion ? {} : { initial: { opacity: 0, y: 28 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: .15 }, transition: { duration: .6, delay: index * .12 } })}>
              <div className="project-art"><ProjectArt type={project.art} /><span className="art-index">{project.number}</span><span className="art-note">{project.note} ↗</span></div>
              <div className="project-meta"><div><span className="project-category">{project.category}</span><h3>{project.title}</h3><p>{project.description}</p></div><span className="project-arrow"><ArrowUpRight size={20} /></span></div>
            </motion.a>
          ))}
        </div>
        <p className="portfolio-note"><span>✳</span> Explore each project to see its live website.</p>
      </section>

      <section className="services-section section-wrap section-rule" id="services">
        <div className="section-label"><span>02 / how we help</span><span>Good work, thoughtfully made</span></div>
        <div className="section-heading-row">
          <motion.h2 {...reveal}>A little bit of<br /><em>digital magic.</em></motion.h2>
          <p className="section-intro">The right mix of creative thinking and practical technology, shaped around what your business actually needs.</p>
        </div>
        <div className="services-list">
          {services.map((service, i) => {
            const Icon = service.icon;
            return <motion.div className="service-row" key={service.n} {...(reduceMotion ? {} : { initial: { opacity: 0, x: -12 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true, amount: .2 }, transition: { duration: .45, delay: i * .04 } })}>
              <span className="service-number">{service.n}</span>
              <span className="service-icon"><Icon size={21} strokeWidth={1.4} /></span>
              <div className="service-copy"><h3>{service.title}</h3><p>{service.text}</p></div>
              <ArrowUpRight className="service-arrow" size={20} />
            </motion.div>;
          })}
        </div>
        <div className="services-doodle">not more noise.<br /><span>more meaning.</span> ✳</div>
      </section>

      <section className="studio-section section-wrap section-rule" id="studio">
        <div className="section-label"><span>03 / a note from us</span><span>The studio</span></div>
        <div className="studio-layout">
          <div className="studio-copy">
            <span className="handwritten studio-kicker">Hello, from our little corner of the internet.</span>
            <h2>Curious minds.<br /><em>Considered work.</em></h2>
            <p>Arquentra is an independent digital studio for people with ideas worth sharing. We bring design, technology and storytelling together to make online experiences that feel warm, useful and unmistakably yours.</p>
            <p className="studio-small">No noisy jargon. No one-size-fits-all templates. Just good questions, careful craft and a little play.</p>
            <a href="#contact" className="text-link">A little more about your idea <ArrowRight size={17} /></a>
          </div>
          <div className="studio-art">
            <div className="studio-art-wash wash-lilac" />
            <div className="studio-art-wash wash-green" />
            <SketchWindow className="studio-window" />
            <div className="studio-caption handwritten">a quiet place to make<br />something meaningful ↗</div>
            <span className="studio-sparkle">✳</span>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-wash" />
        <div className="contact-inner section-wrap">
          <div className="section-label"><span>04 / your turn</span><span>Start something good</span></div>
          <span className="handwritten contact-note">Have a little idea?</span>
          <h2>Let's make<br /><em>it real.</em></h2>
          <p>Tell us what you're dreaming up. We'll bring the questions, the sketches and a cup of tea.</p>
          <div className="contact-actions">
            <a className="pill-button pill-dark" href="https://wa.me/919567555020?text=Hi%20Arquentra%2C%20I%27d%20like%20to%20discuss%20a%20project." target="_blank" rel="noreferrer">Say hello on WhatsApp <MessageCircle size={17} /></a>
            <a className="email-link" href="mailto:comestsd@gmail.com">comestsd@gmail.com <ArrowUpRight size={15} /></a>
          </div>
          <div className="contact-doodle" aria-hidden="true"><svg viewBox="0 0 420 100"><path d="M8 60 Q80 6 150 51 T288 45 Q336 33 363 55" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/><path d="M350 35 L389 52 L355 76 L363 56Z" fill="none" stroke="currentColor" strokeWidth="1.6"/><path d="M362 56 L389 52" stroke="currentColor" strokeWidth="1.6"/></svg><span className="handwritten">send a little spark ↗</span></div>
        </div>
      </section>

      <footer className="site-footer section-wrap">
        <a className="wordmark footer-wordmark" href="#top">arquentra<span>.</span></a>
        <p>Made with curiosity, care & a little bit of ink.</p>
        <div className="footer-right"><span>Independent digital studio</span><a href="#top">Back to top ↑</a></div>
      </footer>
    </main>
  );
}
