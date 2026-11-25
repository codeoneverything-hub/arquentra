"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Code2, Braces } from "lucide-react";
const sources = {
  "website.tsx": `export default function YourWebsite() {\n  return (\n    <section className="first-impression">\n      <h1>Your next chapter.</h1>\n      <p>A business worth getting to know.</p>\n      <a href="#contact">Let’s talk</a>\n    </section>\n  );\n}`,
  "design.css": `.first-impression {\n  display: grid;\n  align-items: center;\n  background: #101013;\n  color: #f1eee8;\n  padding: clamp(24px, 5vw, 64px);\n}\n\n.first-impression a {\n  background: #ff455f;\n  color: #101013;\n}`,
};
export default function CodeWorkspace() {
  const [tab,setTab]=useState<keyof typeof sources>("website.tsx");
  const [typed,setTyped]=useState(0);
  const panel=useRef<HTMLDivElement>(null);
  useEffect(()=>{
    const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let position=0;
    const timer=window.setInterval(()=>{
      const r=panel.current?.getBoundingClientRect();
      if(!r||r.top>innerHeight||r.bottom<0)return;
      position=Math.min(position+(reduced?1000:4),sources[tab].length);
      setTyped(position);
      if(position>=sources[tab].length)window.clearInterval(timer);
    },24);
    return()=>window.clearInterval(timer);
  },[tab]);
  return <div className="code-workspace" data-build="from-code-to-canvas" ref={panel}>
    <div className="workspace-title"><span><i/><i/><i/></span><span>ARQUENTRA / INSIDE THE BUILD</span><Code2 size={13}/></div>
    <div className="workspace-tabs">{(Object.keys(sources) as (keyof typeof sources)[]).map(t=><button key={t} onClick={()=>{if(t!==tab){setTyped(0);setTab(t)}}} aria-pressed={tab===t}>{t.endsWith('tsx')?<Code2 size={12}/>:<Braces size={12}/>} {t}<i/></button>)}<span>● LIVE</span></div>
    <div className="workspace-body"><div className="editor-gutter" aria-hidden="true">{Array.from({length:12},(_,i)=><span key={i}>{String(i+1).padStart(2,'0')}</span>)}</div><pre aria-label={`${tab} illustrative code`}><code>{sources[tab].slice(0,typed).split('\n').map((line,i)=><span className={`editor-line ${line.trim().startsWith('<')?'line-markup':line.includes(':')?'line-property':'line-logic'}`} key={i}>{line || ' '}{i===sources[tab].slice(0,typed).split('\n').length-1&&<span className="code-caret">▍</span>}{'\n'}</span>)}</code></pre></div>
    <div className="workspace-preview"><div className="premium-preview-top"><span>YOUR BRAND / YOUR NEXT CHAPTER</span><span>LIVE PREVIEW <i/></span></div><div className="premium-preview-copy"><span className="preview-label">A BETTER FIRST IMPRESSION.</span><h2>Hard to miss.<br/><em>Easy to remember.</em></h2><span className="preview-mini-cta">Let’s talk <ArrowUpRight size={11}/></span></div></div>
    <div className="workspace-status"><span>✓ Designed & developed together</span><span>RESPONSIVE / PERSONAL</span></div>
  </div>;
}
