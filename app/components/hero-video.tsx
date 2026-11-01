"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type HeroVariant = "mobile" | "desktop";

export default function HeroVideo() {
  const [variant, setVariant] = useState<HeroVariant>("desktop");
  const [reducedMotion, setReducedMotion] = useState(true);

  useEffect(() => {
    const mobile = window.matchMedia("(max-width: 760px)");
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      setVariant(mobile.matches ? "mobile" : "desktop");
      setReducedMotion(motionPreference.matches);
    };

    sync();
    mobile.addEventListener("change", sync);
    motionPreference.addEventListener("change", sync);
    return () => {
      mobile.removeEventListener("change", sync);
      motionPreference.removeEventListener("change", sync);
    };
  }, []);

  return (
    <div className={`hero-media hero-media-${variant}`} aria-label="A quiet moment outdoors with a creative and their dog">
      <Image
        src="/arquentra-hero-poster.jpg"
        alt="A young creative relaxing in a sunlit meadow with a dog"
        fill
        priority
        sizes="(max-width: 760px) 100vw, 50vw"
        className="hero-poster"
      />
      {!reducedMotion && (
        <video
          key={variant}
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/arquentra-hero-poster.jpg"
          aria-hidden="true"
        >
          <source
            src={variant === "mobile" ? "/arquentra-hero-mobile.mp4" : "/arquentra-hero-alternative.mp4"}
            type="video/mp4"
          />
        </video>
      )}
      <span className="video-caption"><i aria-hidden="true" /> GOOD IDEAS NEED ROOM TO GROW</span>
    </div>
  );
}
