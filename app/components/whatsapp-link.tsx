"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import { MessageCircle } from "lucide-react";
import { trackMetaEvent } from "./track-meta-event";

type WhatsAppLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  message?: string;
  showIcon?: boolean;
};

export default function WhatsAppLink({ children, message = "Hi Arquentra, I'd like to discuss a digital project.", showIcon = true, ...props }: WhatsAppLinkProps) {
  const href = `https://wa.me/917006127665?text=${encodeURIComponent(message)}`;

  return (
    <a {...props} href={href} target="_blank" rel="noreferrer" onClick={() => trackMetaEvent("Contact", { channel: "WhatsApp" })}>
      {children}{showIcon && <MessageCircle size={17} aria-hidden="true" />}
    </a>
  );
}
