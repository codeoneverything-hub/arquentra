"use client";

import { useState } from "react";
import { ArrowDown, ArrowRight, Check } from "lucide-react";

export function SoftGoodsDemo() {
  const [bag, setBag] = useState(0);
  return (
    <main className="demo-store" id="top">
      <header className="demo-store-nav"><a href="#soft-home">SOFT GOODS</a><nav aria-label="Demo store"><a href="#collection">Shop</a><a href="#story">Our story</a></nav><span aria-live="polite">Bag ({bag})</span></header>
      <section className="demo-store-hero" id="soft-home"><span>OBJECTS TO KEEP · A FICTIONAL STORE CONCEPT</span><h1>Made slow.<br /><i>Loved long.</i></h1><p>Considered pieces for the everyday. Imagined for a home that grows with you.</p><a href="#collection">Explore the collection <ArrowDown size={15} /></a><div className="demo-store-shape" aria-hidden="true"><span>SG</span></div></section>
      <section className="demo-products" id="collection"><div><span>THE FIRST EDITION</span><h2>A few good things.</h2></div><div className="demo-product-grid">
        {["Everyday vessel", "Sunday cup", "Soft form bowl"].map((name, index) => <article className={`demo-product demo-product-${index + 1}`} key={name}><div aria-hidden="true"><span>{String(index + 1).padStart(2, "0")}</span><i /></div><h3>{name}</h3><p>Concept item · details imagined</p><button type="button" onClick={() => setBag((value) => value + 1)}>Add to bag <ArrowRight size={14} /></button></article>)}
      </div><p className="demo-feedback" aria-live="polite">{bag ? `${bag} ${bag === 1 ? "item" : "items"} in your demo bag` : "Choose an item to try the bag interaction."}</p></section>
      <section className="demo-store-story" id="story"><span>A NOTE ON THE CONCEPT</span><h2>Simple things.<br />A little more considered.</h2><p>This imagined store uses a small collection, quiet colours and clear product paths to demonstrate a shopping experience. No real products are for sale.</p></section>
      <footer className="demo-store-footer">SOFT GOODS · FICTIONAL PORTFOLIO CONCEPT</footer>
    </main>
  );
}

const rituals = {
  Morning: "A slow start. A clean cup, a little light, a moment to yourself.",
  Midday: "A gentle pause. Step away, take a breath and start the next thing fresh.",
  Evening: "A softer landing. Put the day down and make space to unwind.",
};

export function GoodRitualDemo() {
  const [selected, setSelected] = useState<keyof typeof rituals>("Morning");
  return (
    <main className="demo-ritual" id="top">
      <header className="demo-ritual-nav"><a href="#ritual-home">GOOD RITUAL</a><nav aria-label="Demo brand"><a href="#ritual">Find your moment</a><a href="#ritual-about">About</a></nav><a href="#ritual">Explore <ArrowRight size={14} /></a></header>
      <section className="demo-ritual-hero" id="ritual-home"><div className="demo-ritual-sun" aria-hidden="true" /><span>A FICTIONAL DAILY-CARE BRAND CONCEPT</span><h1>A small start<br />can change <i>the day.</i></h1><p>A gentler routine, imagined one everyday moment at a time.</p><a href="#ritual">Find your moment <ArrowDown size={15} /></a><div className="demo-ritual-object" aria-hidden="true"><span>DAY<br />ONE</span></div></section>
      <section className="demo-ritual-picker" id="ritual"><span>TAKE A MOMENT</span><h2>What part of the day is yours?</h2><div className="ritual-tabs" role="group" aria-label="Choose a time of day">{(Object.keys(rituals) as Array<keyof typeof rituals>).map((time) => <button type="button" key={time} aria-pressed={selected === time} onClick={() => setSelected(time)}>{time}</button>)}</div><p className="ritual-answer" aria-live="polite"><Check size={18} />{rituals[selected]}</p></section>
      <section className="demo-ritual-note" id="ritual-about"><h2>Thoughtfully simple.</h2><p>This fictional landing page concept demonstrates a product introduction, simple interaction and clear mobile-first path. No real product is sold and no personal details are collected.</p></section>
      <footer className="demo-ritual-footer">GOOD RITUAL · FICTIONAL PORTFOLIO CONCEPT</footer>
    </main>
  );
}
