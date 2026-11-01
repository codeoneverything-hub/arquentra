import { ImageResponse } from "next/og";

export const alt = "Arquentra — your ideas deserve a better internet";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", overflow: "hidden", background: "#f5f2e9", color: "#16271c", padding: "60px 66px", fontFamily: "Arial, sans-serif" }}>
        <div style={{ position: "absolute", right: 32, top: -72, width: 580, height: 580, borderRadius: "50%", background: "#c9f264", display: "flex" }} />
        <div style={{ position: "absolute", right: 118, top: 48, width: 410, height: 410, borderRadius: "50%", border: "1px solid #244832", display: "flex" }} />
        <div style={{ position: "relative", width: "72%", display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 13, fontSize: 19, fontWeight: 700, letterSpacing: 1 }}><span style={{ width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #16271c", borderRadius: 50 }}>A</span> ARQUENTRA<span style={{ color: "#759a2e" }}>.</span></div>
          <div style={{ display: "flex", marginTop: 83, color: "#6d785e", fontSize: 13, letterSpacing: 3 }}>DIGITAL CREATIVE STUDIO / INDIA</div>
          <div style={{ display: "flex", flexDirection: "column", marginTop: 20, fontSize: 70, lineHeight: 0.95, letterSpacing: -4, fontWeight: 700 }}><span>Your ideas deserve</span><span style={{ color: "#244832" }}>a better internet.</span></div>
          <div style={{ display: "flex", marginTop: 23, maxWidth: 650, color: "#667064", fontSize: 18, lineHeight: 1.5 }}>Digital experiences, creative content and growth systems for ambitious brands.</div>
          <div style={{ display: "flex", marginTop: 34, fontSize: 12, letterSpacing: 2, color: "#73825f" }}>DESIGN / DIGITAL / CONTENT / GROWTH</div>
        </div>
        <div style={{ position: "absolute", right: 76, bottom: 62, width: 84, height: 84, display: "flex", alignItems: "center", justifyContent: "center", background: "#e88855", borderRadius: 50, fontSize: 42, color: "#16271c" }}>*</div>
      </div>
    ),
    { ...size },
  );
}
