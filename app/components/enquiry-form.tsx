"use client";

import type { FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { trackMetaEvent } from "./track-meta-event";

export default function EnquiryForm() {
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const details = [
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Service: ${data.get("service")}`,
      `Budget range: ${data.get("budget") || "Not specified"}`,
      "",
      `Project: ${data.get("message")}`,
    ].join("\n");

    trackMetaEvent("Lead", { service: String(data.get("service")) });
    const url = `https://wa.me/919567555020?text=${encodeURIComponent(`Hi Arquentra, I'd like to discuss a project.\n\n${details}`)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    event.currentTarget.reset();
  }

  return (
    <form className="enquiry-form" onSubmit={submit}>
      <div className="form-heading">
        <span className="eyebrow">A FEW QUICK DETAILS</span>
        <p>We’ll open WhatsApp with your note ready to review and send.</p>
      </div>
      <label htmlFor="enquiry-name">Your name<input id="enquiry-name" name="name" autoComplete="name" required placeholder="What should we call you?" /></label>
      <label htmlFor="enquiry-email">Email address<input id="enquiry-email" type="email" name="email" autoComplete="email" required placeholder="you@example.com" /></label>
      <label htmlFor="enquiry-service">What are you looking for?
        <select id="enquiry-service" name="service" defaultValue="Website design and development">
          <option>Website design and development</option>
          <option>E-commerce website</option>
          <option>Social media management</option>
          <option>Meta Ads management</option>
          <option>SEO</option>
          <option>Video editing and creative content</option>
          <option>AI automation</option>
          <option>Branding and content strategy</option>
          <option>Something else</option>
        </select>
      </label>
      <label htmlFor="enquiry-budget">Budget range <span className="optional">OPTIONAL</span>
        <select id="enquiry-budget" name="budget" defaultValue="">
          <option value="">Choose a range or skip</option>
          <option>Under ₹25,000</option>
          <option>₹25,000–₹75,000</option>
          <option>₹75,000–₹2,00,000</option>
          <option>₹2,00,000+</option>
          <option>Not sure yet</option>
        </select>
      </label>
      <label htmlFor="enquiry-message">Tell us a little about it<textarea id="enquiry-message" name="message" required rows={3} placeholder="What are you hoping to make better?" /></label>
      <button className="button button-lime form-submit" type="submit">Start the conversation <ArrowUpRight size={17} /></button>
      <p className="form-footnote">Nothing is sent until you review and send the WhatsApp message.</p>
    </form>
  );
}
