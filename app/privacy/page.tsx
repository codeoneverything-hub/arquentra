import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy note",
  description: "How Arquentra handles website enquiry details and optional analytics.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return <main className="editorial-page" id="top"><article className="article-content page-wrap"><Link className="case-back" href="/#top">Arquentra home</Link><span className="eyebrow">PLAIN-ENGLISH PRIVACY NOTE</span><h1>Your details.<br /><span>Handled with care.</span></h1><p className="article-lead">This page explains what happens when you use Arquentra&apos;s website enquiry options.</p>
    <div className="article-prose">
      <section><h2>WhatsApp enquiries</h2><p>The WhatsApp button opens WhatsApp with a draft message. The site does not send it for you; the message is sent only if you choose to press send in WhatsApp. WhatsApp then handles the message under its own terms and privacy policy.</p></section>
      <section><h2>Email enquiries</h2><p>If email delivery is configured, the name, email address, optional budget and project message you submit are sent through Resend to the Arquentra enquiry inbox. If server-side email is not configured or is temporarily unavailable, the site offers to open a prepared email in your own mail application. Nothing is sent by that link until you choose to send it.</p><p>The website does not keep a separate enquiry database. Messages remain with the email or messaging service used and in the recipient&apos;s inbox.</p></section>
      <section><h2>Analytics</h2><p>Optional Google Analytics is loaded only when a valid measurement ID is configured and you accept analytics in the consent prompt. You can change your choice later using the analytics settings control. If enabled, the site records page views and broad actions such as WhatsApp clicks and successfully sent enquiries. Names, email addresses, budgets and message contents are not included. Privacy-friendly Plausible analytics is also optional and may be enabled separately by the site owner.</p></section>
      <section><h2>Hosting and security</h2><p>The site is hosted on Vercel. The enquiry endpoint uses basic validation, same-origin checks, a hidden spam field and a short in-memory rate limit. These measures help reduce unwanted submissions; no internet form can promise to block all spam.</p></section>
      <section><h2>Questions or changes</h2><p>For a question about an enquiry, contact <a href="mailto:arquentra@gmail.com">arquentra@gmail.com</a>. You can also return to the <Link href="/#contact">contact section</Link> to start a new enquiry.</p></section>
    </div>
  </article></main>;
}
