"use client";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export function trackMetaEvent(event: "Contact" | "Lead", details?: Record<string, string>) {
  if (typeof window !== "undefined") window.fbq?.("track", event, details);
}
