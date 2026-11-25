"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import { trackEvent } from "./track-event";

type WhatsAppLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  message?: string;
  showIcon?: boolean;
};

function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.4 11.7a8.4 8.4 0 0 1-12.4 7.4L3.6 20l.9-4.2a8.4 8.4 0 1 1 15.9-4.1Z" />
      <path d="M8.2 7.8c.2-.5.5-.6.9-.6h.6l.8 1.8-.9.9a7.1 7.1 0 0 0 3.3 3.3l.9-.9 1.8.8v.6c0 .4-.1.7-.6.9-1 .5-2.2.3-3.6-.5a9.4 9.4 0 0 1-3.1-3.1c-.8-1.3-1-2.5-.1-3.2Z" />
    </svg>
  );
}

export default function WhatsAppLink({ children, message = "Hi Arquentra, I'd like to discuss a digital project.", showIcon = true, ...props }: WhatsAppLinkProps) {
  const href = `https://wa.me/917006127665?text=${encodeURIComponent(message)}`;

  return (
    <a {...props} href={href} target="_blank" rel="noreferrer" onClick={() => trackEvent("whatsapp_click", { channel: "WhatsApp" })}>
      {children}{showIcon && <WhatsAppIcon />}
    </a>
  );
}
