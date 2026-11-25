const recentRequests = new Map<string, number[]>();
const windowMs = 60_000;
const maxPerWindow = 5;

function json(body: Record<string, string>, status: number) {
  return Response.json(body, { status, headers: { "Cache-Control": "no-store" } });
}

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > 12_000) return json({ error: "The enquiry is too long." }, 413);

  const origin = request.headers.get("origin");
  const host = request.headers.get("host");
  try {
    if (!origin || !host || new URL(origin).host !== host) return json({ error: "This request could not be verified." }, 403);
  } catch { return json({ error: "This request could not be verified." }, 403); }

  const forwardedFor = request.headers.get("x-real-ip") || request.headers.get("x-forwarded-for")?.split(",").at(-1)?.trim() || "unknown";
  const now = Date.now();
  for (const [key, stamps] of recentRequests) if (stamps.every((stamp) => now - stamp >= windowMs)) recentRequests.delete(key);
  const recent = (recentRequests.get(forwardedFor) || []).filter((stamp) => now - stamp < windowMs);
  if (recent.length >= maxPerWindow) return json({ error: "Please wait a minute before sending another enquiry." }, 429);

  let body: unknown;
  try {
    const raw = await request.text();
    if (new TextEncoder().encode(raw).byteLength > 12_000) return json({ error: "The enquiry is too long." }, 413);
    body = JSON.parse(raw);
  } catch { return json({ error: "The enquiry could not be read." }, 400); }
  if (!body || typeof body !== "object") return json({ error: "Please check the enquiry fields." }, 400);
  const data = body as Record<string, unknown>;
  const name = typeof data.name === "string" ? data.name.trim() : "";
  const email = typeof data.email === "string" ? data.email.trim() : "";
  const message = typeof data.message === "string" ? data.message.trim() : "";
  const budget = typeof data.budget === "string" ? data.budget.trim() : "Not specified";
  if (typeof data.website === "string" && data.website.trim()) return json({ ok: "Thanks. Your enquiry has been received." }, 200);
  if (name.length < 2 || name.length > 100 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254 || message.length < 10 || message.length > 4000 || budget.length > 60) {
    return json({ error: "Please check your name, email and project details." }, 400);
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const to = process.env.ENQUIRY_TO_EMAIL || "arquentra@gmail.com";
  if (!apiKey || !from) return json({ error: "Email sending is not configured yet. Use the prepared email link instead." }, 503);

  recentRequests.set(forwardedFor, [...recent, now]);
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: "New website enquiry for Arquentra",
        text: [`Name: ${name}`, `Email: ${email}`, `Budget: ${budget || "Not specified"}`, "", message].join("\n"),
      }),
      signal: AbortSignal.timeout(8_000),
    });
    if (!response.ok) return json({ error: "Email delivery failed. Please use the prepared email link instead." }, 502);
    return json({ ok: "Your enquiry has been sent." }, 200);
  } catch {
    return json({ error: "Email delivery failed. Please use the prepared email link instead." }, 502);
  }
}
