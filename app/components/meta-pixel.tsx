"use client";

import { useEffect } from "react";

export default function MetaPixel() {
  useEffect(() => {
    const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID?.trim();
    if (!pixelId || window.fbq) return;

    const queue: unknown[][] = [];
    const fbq = (...args: unknown[]) => queue.push(args);
    Object.assign(fbq, { queue, push: (...args: unknown[]) => queue.push(args), loaded: true, version: "2.0" });
    window.fbq = fbq;

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://connect.facebook.net/en_US/fbevents.js";
    document.head.appendChild(script);
    window.fbq("init", pixelId);
    window.fbq("track", "PageView");
  }, []);

  return null;
}
