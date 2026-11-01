"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  ["Services", "#services"],
  ["Experiments", "#experiments"],
  ["Approach", "#approach"],
  ["Contact", "#contact"],
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Arquentra home">
        <Image src="/arquentra-logo.png" alt="" width={785} height={498} className="brand-logo" priority sizes="112px" />
      </a>
      <span className="header-note">DIGITAL CREATIVE STUDIO <i aria-hidden="true" /></span>
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
          <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
        ))}
        <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>Start a project <ArrowUpRight size={15} /></a>
      </nav>
    </header>
  );
}
