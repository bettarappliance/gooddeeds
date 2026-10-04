import { createHash } from "node:crypto";
export const runtime = "nodejs";
const intents = ["General", "Accounting", "Buy", "Sell", "Rent", "Prepare"];
const failure = (message: string, status: number) => Response.json({ error: message }, { status });
export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if (!origin || origin !== new URL(request.url).origin) return failure("Please submit from this website.", 403);
  if (!request.headers.get("content-type")?.includes("application/json")) return failure("Invalid request.", 415);
  const raw = await request.text();
  if (raw.length > 10000) return failure("Your inquiry is too long.", 413);
  let input: Record<string, unknown>;
  try { input = JSON.parse(raw); } catch { return failure("Invalid request.", 400); }
  if (!input || typeof input !== "object" || Array.isArray(input)) return failure("Invalid request.", 400);
  const limits: Record<string, number> = { name: 120, email: 254, phone: 40, location: 200, timing: 120, message: 2000, intent: 30, website: 200 };
  const fields: Record<string, string> = {};
  for (const [key, max] of Object.entries(limits)) {
    if (input[key] !== undefined && typeof input[key] !== "string") return failure("Please check your details.", 400);
    fields[key] = String(input[key] ?? "").trim();
    if (fields[key].length > max) return failure("Please shorten your details.", 400);
  }
  if (fields.website) return failure("Unable to accept this inquiry. Please email Jack directly.", 400);
  if (!fields.name || !fields.message || !intents.includes(fields.intent) || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email) || /[\r\n]/.test(fields.email)) return failure("Please provide your name, a valid reply email, and a message.", 400);
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.INQUIRY_FROM_EMAIL;
  if (process.env.INQUIRY_DELIVERY_ENABLED !== "true" || !apiKey || !from) return failure("Online delivery is not available yet. Please email jack@gooddeeds.com or call 202-297-2432.", 503);
  const text = [`Good Deeds website inquiry: ${fields.intent}`, `Name: ${fields.name}`, `Reply email: ${fields.email}`, `Phone: ${fields.phone || "Not provided"}`, `Company/location/property: ${fields.location || "Not provided"}`, `Timing: ${fields.timing || "Not provided"}`, "", fields.message].join("\n");
  // Identical retries in the same hourly window use the provider's durable deduplication.
  const key = createHash("sha256").update(`${Math.floor(Date.now() / 3600000)}:${text}`).digest("hex");
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json", "Idempotency-Key": key },
      body: JSON.stringify({ from, to: ["jack@gooddeeds.com"], reply_to: fields.email, subject: `Good Deeds inquiry: ${fields.intent}`, text }),
      signal: AbortSignal.timeout(10000),
    });
    const result = await response.json();
    if (!response.ok || typeof result.id !== "string") return failure("Your inquiry could not be sent. Your details are still here; please try again or email Jack directly.", 502);
    return Response.json({ accepted: true });
  } catch {
    return failure("We could not confirm sending. Your details are still here; please try again or email Jack directly.", 502);
  }
}
