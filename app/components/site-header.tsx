"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

const links = [
  ["Services", "/#services"],
  ["Work", "/#work"],
  ["Pricing", "/#pricing"],
  ["Process", "/#process"],
  ["About", "/#about"],
  ["FAQs", "/#faqs"],
  ["Contact", "/#contact"],
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("/#services");

  useEffect(() => {
    if (window.location.pathname !== "/") return;
    const sections = links.map(([, href]) => document.querySelector(href.replace("/", ""))).filter((section): section is Element => section !== null);
    if (!sections.length) return;
    const observer = new IntersectionObserver((entries) => {
      const current = entries.filter((entry) => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
      if (current?.target.id) setActive(`/#${current.target.id}`);
    }, { rootMargin: "-20% 0px -65% 0px", threshold: 0 });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="site-header">
      <Link className="brand" href="/#top" aria-label="Arquentra home">
        <Image src="/arquentra-logo.png" alt="" width={785} height={498} className="brand-logo" priority sizes="112px" />
      </Link>
      <span className="header-note">FREELANCE WEB DESIGN <i aria-hidden="true" /></span>
      <button
        className="menu-toggle"
        type="button"
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        aria-controls="site-navigation"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X size={21} /> : <Menu size={21} />}
      </button>
      <nav id="site-navigation" className={open ? "site-nav is-open" : "site-nav"}>
        {links.map(([label, href]) => (
          <Link key={href} href={href} aria-current={active === href ? "location" : undefined} onClick={() => setOpen(false)}>{label}</Link>
        ))}
        <Link className="nav-cta" href="/#contact" onClick={() => setOpen(false)}>Plan your website <ArrowRight size={15} /></Link>
      </nav>
    </header>
  );
}
