"use client";

declare global {
  interface Window {
    plausible?: (eventName: string, options?: { props?: Record<string, string> }) => void;
    gtag?: (...args: [string, ...unknown[]]) => void;
  }
}

export type TrackedEvent = "whatsapp_click" | "contact_click" | "generate_lead" | "service_enquiry";

export function trackEvent(eventName: TrackedEvent, props?: { channel?: "WhatsApp" | "email" | "phone" }) {
  if (typeof window === "undefined") return;
  if (window.localStorage.getItem("arquentra-analytics-consent") !== "accepted") return;
  window.plausible?.(eventName, { props });
  window.gtag?.("event", eventName, props);
}
