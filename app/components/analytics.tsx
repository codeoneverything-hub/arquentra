"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";
import PlausibleAnalytics from "./plausible-analytics";

const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim();
const validMeasurementId = measurementId && /^G-[A-Z0-9]{10}$/.test(measurementId) ? measurementId : undefined;
const consentKey = "arquentra-analytics-consent";
type Consent = "accepted" | "rejected";

export default function Analytics() {
  const [consent, setConsent] = useState<Consent | null>(() => {
    return null;
  });
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    if (!validMeasurementId) return;
    const saved = window.localStorage.getItem(consentKey);
    if (saved === "accepted" || saved === "rejected") window.setTimeout(() => setConsent(saved), 0);
    else window.setTimeout(() => setShowPrompt(true), 0);
  }, []);

  function choose(value: Consent) {
    window.localStorage.setItem(consentKey, value);
    setConsent(value);
    setShowPrompt(false);
    window.gtag?.("consent", "update", {
      analytics_storage: value === "accepted" ? "granted" : "denied",
    });
  }

  return <>
    <PlausibleAnalytics />
    {validMeasurementId && <Script src={`https://www.googletagmanager.com/gtag/js?id=${validMeasurementId}`} strategy="afterInteractive" />}
    {validMeasurementId && consent === "accepted" && <>
      <Script id="ga4-init" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        window.gtag = function(){window.dataLayer.push(arguments);};
        window.gtag('consent', 'default', { analytics_storage: 'granted' });
        window.gtag('js', new Date());
        window.gtag('config', '${validMeasurementId}', { send_page_view: false, page_location: window.location.href });
      `}</Script>
      <PageViewTracking />
      <button className="analytics-settings" type="button" onClick={() => { setConsent(null); setShowPrompt(true); }}>Analytics settings</button>
    </>}
    {validMeasurementId && showPrompt && <div className="analytics-consent" role="region" aria-label="Analytics consent">
      <p>May we use Google Analytics to understand site visits and improve the website? Analytics is optional.</p>
      <div><button type="button" onClick={() => choose("accepted")}>Accept analytics</button><button type="button" onClick={() => choose("rejected")}>Decline</button></div>
    </div>}
    {validMeasurementId && consent === "rejected" && <button className="analytics-settings" type="button" onClick={() => setShowPrompt(true)}>Analytics settings</button>}
  </>;
}

function PageViewTracking() {
  const trackedPath = useRef("");
  useEffect(() => {
    const nextPath = `${window.location.pathname}${window.location.search}`;
    if (nextPath === trackedPath.current) return;
    trackedPath.current = nextPath;
    window.gtag?.("event", "page_view", { page_path: window.location.pathname, page_title: document.title });
  });
  return null;
}

declare global {
  interface Window {
    dataLayer?: IArguments[];
    gtag?: (args_0: string, ...args: unknown[]) => void;
  }
}
