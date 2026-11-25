"use client";

import type { FormEvent, MouseEvent } from "react";
import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { trackEvent } from "./track-event";

type FormStatus = { kind: "idle" | "sending" | "success" | "error"; text: string; mailto?: string };

function readForm(form: HTMLFormElement) {
  const data = new FormData(form);
  return {
    name: String(data.get("name") || "").trim(),
    email: String(data.get("email") || "").trim(),
    budget: String(data.get("budget") || "Not specified"),
    message: String(data.get("message") || "").trim(),
    website: String(data.get("website") || ""),
  };
}

function emailDraft(values: ReturnType<typeof readForm>) {
  const subject = `Website enquiry from ${values.name}`;
  const body = [`Name: ${values.name}`, `Email: ${values.email}`, `Budget: ${values.budget}`, "", values.message].join("\n");
  return `mailto:arquentra@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export default function EnquiryForm() {
  const [status, setStatus] = useState<FormStatus>({ kind: "idle", text: "" });

  function openWhatsApp(event: MouseEvent<HTMLButtonElement>) {
    const form = event.currentTarget.form;
    if (!form?.reportValidity()) return;
    const values = readForm(form);
    const body = [`Name: ${values.name}`, `Email: ${values.email}`, `Budget range: ${values.budget}`, "", `Project: ${values.message}`].join("\n");
    trackEvent("service_enquiry", { channel: "WhatsApp" });
    window.open(`https://wa.me/917006127665?text=${encodeURIComponent(`Hi Arquentra, I’d like to discuss a website project.\n\n${body}`)}`, "_blank", "noopener,noreferrer");
  }

  async function submitEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const values = readForm(form);
    if (values.website) { setStatus({ kind: "success", text: "Thanks. Your enquiry has been received." }); return; }
    setStatus({ kind: "sending", text: "Sending your enquiry…" });
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(values) });
      if (!response.ok) throw new Error("Email delivery is not available right now.");
      setStatus({ kind: "success", text: "Thanks. Your enquiry has been sent. I’ll be in touch." });
      trackEvent("generate_lead", { channel: "email" });
      form.reset();
    } catch {
      setStatus({ kind: "error", text: "Email sending isn’t connected yet. You can open the prepared email in your mail app instead.", mailto: emailDraft(values) });
    }
  }

  return (
    <form className="enquiry-form" onSubmit={submitEmail}>
      <div className="form-heading"><span className="eyebrow">A FEW QUICK DETAILS</span><p>Choose WhatsApp for the quickest start, or send this through email.</p></div>
      <label htmlFor="enquiry-name">Your name<input id="enquiry-name" name="name" autoComplete="name" required minLength={2} maxLength={100} placeholder="What should we call you?" /></label>
      <label htmlFor="enquiry-email">Email address<input id="enquiry-email" type="email" name="email" autoComplete="email" required maxLength={254} placeholder="you@example.com" /></label>
      <label htmlFor="enquiry-budget">Budget range <span className="optional">OPTIONAL</span><select id="enquiry-budget" name="budget" defaultValue=""><option value="">Choose a range or skip</option><option>Under ₹25,000</option><option>₹25,000–₹75,000</option><option>₹75,000–₹2,00,000</option><option>₹2,00,000+</option><option>Not sure yet</option></select></label>
      <label htmlFor="enquiry-message">What should your website do?<textarea id="enquiry-message" name="message" required minLength={10} maxLength={4000} rows={3} placeholder="Tell me about your business and what you need." /></label>
      <div className="form-honeypot" aria-hidden="true"><label htmlFor="enquiry-website">Leave this field empty<input id="enquiry-website" name="website" tabIndex={-1} autoComplete="off" /></label></div>
      <div className="form-actions"><button className="button button-lime button-creative form-submit" type="button" onClick={openWhatsApp}>Continue on WhatsApp <ArrowUpRight size={17} /></button><button className="button button-email" type="submit" disabled={status.kind === "sending"}>{status.kind === "sending" ? "Sending…" : "Send by email"}</button></div>
      {status.text && <p className={`form-status form-status-${status.kind}`} role={status.kind === "error" ? "alert" : "status"}>{status.text}{status.mailto && <> <a href={status.mailto}>Open prepared email <ArrowUpRight size={14} /></a></>}</p>}
      <p className="form-footnote">Your details are used to reply to this enquiry. See the <Link href="/privacy">privacy note</Link>.</p>
    </form>
  );
}
