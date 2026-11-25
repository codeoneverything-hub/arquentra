"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { Code2, Pause, Play, RotateCcw, X } from "lucide-react";

const roles = [
  { name: "Design", color: "#ff6b72" },
  { name: "Develop", color: "#89cbd8" },
  { name: "Refine", color: "#d2b9e9" },
];
type ActiveBuild = { x: number; y: number; w: number; h: number; phase: number; role: number; name: string };

export default function LiveBuild({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  const pause = useRef(false);
  const [paused, setPaused] = useState(false);
  const [run, setRun] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [progress, setProgress] = useState({ done: 0, total: 0 });
  const [active, setActive] = useState<ActiveBuild | null>(null);
  const [code, setCode] = useState("// Scroll. Watch the next idea take shape.");

  useEffect(() => {
    const container = root.current;
    if (!container) return;
    const html = document.documentElement;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motion.matches || !("IntersectionObserver" in window)) {
      html.removeAttribute("data-build-motion");
      return;
    }
    const targets: HTMLElement[] = [];
    const complete = new Set<HTMLElement>();
    const queued = new Set<HTMLElement>();
    const queue: HTMLElement[] = [];
    let disposed = false;
    let frame = 0;
    let busy = false;
    let finishFrame: (() => void) | undefined;
    const waiters = new Map<ReturnType<typeof setTimeout>, () => void>();
    html.setAttribute("data-build-motion", "on");
    html.setAttribute("data-build-ready", "on");
    setProgress({ done: 0, total: targets.length });

    const finish = (el: HTMLElement) => {
      el.classList.add("build-complete");
      el.classList.remove("build-active");
      el.style.removeProperty("--reveal");
      complete.add(el);
      if (!disposed) setProgress({ done: complete.size, total: targets.length });
    };
    const wait = (ms: number) => new Promise<void>(resolve => {
      const timer = setTimeout(() => { waiters.delete(timer); resolve(); }, ms);
      waiters.set(timer, resolve);
    });

    async function drain() {
      if (busy || disposed) return;
      busy = true;
      while (queue.length && !disposed) {
        while (pause.current && !disposed) await wait(80);
        if (disposed) break;
        const el = queue.shift()!;
        if (complete.has(el)) continue;
        const bounds = el.getBoundingClientRect();
        if (bounds.bottom < 0 || bounds.top > innerHeight) { finish(el); continue; }
        const index = targets.indexOf(el);
        const name = el.dataset.build || "component";
        const role = index % roles.length;
        const snippet = `// ${name}\nconst region = select("${name}");\nrender(region, { design: "considered" });`;
        el.classList.add("build-active");
        let start: number | undefined;
        let last: number | undefined;
        await new Promise<void>(resolve => {
          finishFrame = resolve;
          function tick(time: number) {
            if (disposed) { resolve(); return; }
            start ??= time;
            if (pause.current) {
              start += last === undefined ? 0 : time - last;
              last = time;
              frame = requestAnimationFrame(tick);
              return;
            }
            last = time;
            const elapsed = time - start;
            const r = el.getBoundingClientRect();
            if (r.bottom < 0 || r.top > innerHeight) { finish(el); setActive(null); resolve(); return; }
            // The outline finishes first. The content is then drawn inside it.
            const draw = Math.min(elapsed / 310, 1);
            const reveal = Math.max(0, Math.min((elapsed - 340) / 280, 1));
            el.style.setProperty("--reveal", `${100 - reveal * 100}%`);
            setActive({ x: r.left, y: r.top, w: r.width, h: r.height, phase: draw, role, name });
            setCode(snippet.slice(0, Math.floor(snippet.length * Math.min(elapsed / 580, 1))));
            if (elapsed < 670) frame = requestAnimationFrame(tick);
            else { finish(el); setActive(null); resolve(); }
          }
          frame = requestAnimationFrame(tick);
        });
        finishFrame = undefined;
      }
      busy = false;
    }

    const observer = new IntersectionObserver(entries => {
      entries.filter(e => e.isIntersecting).forEach(e => {
        const el = e.target as HTMLElement;
        if (!queued.has(el)) { queued.add(el); queue.push(el); observer.unobserve(el); }
      });
      queue.sort((a, b) => targets.indexOf(a) - targets.indexOf(b));
      void drain();
    }, { threshold: 0, rootMargin: "0px 0px -20px 0px" });
    // Next can stream server-rendered children after this client boundary mounts.
    // Register those regions as they arrive, rather than capturing an empty list.
    const register = () => {
      let added = false;
      container.querySelectorAll<HTMLElement>("[data-build]").forEach(el => {
        if (targets.includes(el)) return;
        el.classList.remove("build-complete", "build-active", "build-priority");
        el.style.removeProperty("--reveal");
        targets.push(el);
        observer.observe(el);
        added = true;
      });
      if (added) setProgress({ done: complete.size, total: targets.length });
    };
    register();
    const incoming = new MutationObserver(register);
    incoming.observe(container, { childList: true, subtree: true });
    const focus = (event: FocusEvent) => {
      const el = (event.target as HTMLElement).closest<HTMLElement>("[data-build]");
      if (el) finish(el);
    };
    const showEverything = () => {
      html.removeAttribute("data-build-motion");
      targets.forEach(finish);
      setActive(null);
    };
    const motionChange = () => { if (motion.matches) showEverything(); };
    motion.addEventListener("change", motionChange);
    container.addEventListener("focusin", focus);
    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      finishFrame?.();
      waiters.forEach((resolve, timer) => { clearTimeout(timer); resolve(); });
      observer.disconnect();
      incoming.disconnect();
      motion.removeEventListener("change", motionChange);
      container.removeEventListener("focusin", focus);
      html.removeAttribute("data-build-motion");
      html.removeAttribute("data-build-ready");
      targets.forEach(el => { el.classList.remove("build-active", "build-complete"); el.style.removeProperty("--reveal"); });
    };
  }, [run]);

  const role = roles[active?.role ?? 0];
  return <div ref={root} className="live-build-root">
    {children}
    {active && <div className="build-overlay" aria-hidden="true" style={{ "--build-color": role.color } as CSSProperties}>
      <div className="build-selection" style={{ left: active.x, top: active.y, width: Math.max(2, active.w * active.phase), height: Math.max(2, active.h * active.phase) }}><i/><i/><i/><i/><span>{active.name}</span></div>
      <div className="build-cursor" style={{ left: Math.min(innerWidth - 95, active.x + active.w * active.phase), top: active.y + Math.min(active.h * active.phase, 125) }}><svg width="20" height="25" viewBox="0 0 23 28"><path d="M2 2L20 16L12 17L8 25Z" fill="currentColor" stroke="#0c0c0f" strokeWidth="1.5"/></svg><span>{role.name}</span></div>
    </div>}
    <aside className={`build-dock ${expanded ? "dock-expanded" : ""}`} aria-label="Page animation controls">
      {expanded && <div className="build-dock-code"><div><span>{active ? `Building ${active.name}` : "Scroll to build the next section"}</span><button onClick={() => setExpanded(false)} aria-label="Close code panel"><X size={13}/></button></div><pre><code>{code}<span className="code-caret">▍</span></code></pre></div>}
      <div className="build-dock-controls"><span className="build-dock-status"><i/>{paused ? "Paused" : active ? "Building live" : "Live canvas"}<small>{progress.done}/{progress.total}</small></span><span className="dock-divider"/><button onClick={() => setExpanded(v => !v)} aria-expanded={expanded}><Code2 size={13}/><span>Code</span></button><button onClick={() => { pause.current = !paused; setPaused(!paused); }} aria-label={paused ? "Resume build animation" : "Pause build animation"}>{paused ? <Play size={12}/> : <Pause size={12}/>}</button><button onClick={() => { pause.current = false; setPaused(false); window.scrollTo({ top: 0, behavior: "instant" }); setRun(r => r + 1); }}><RotateCcw size={12}/><span>Replay</span></button></div>
    </aside>
  </div>;
}
