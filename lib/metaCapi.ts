// API de conversiones de Meta (servidor). Variables en Vercel:
//   NEXT_PUBLIC_META_PIXEL_ID (ID del conjunto de datos), META_CAPI_TOKEN (token de acceso)
//   META_TEST_EVENT_CODE (opcional, para "Probar eventos" en el Administrador de eventos)
import { createHash } from "crypto";

const clean = (k: string) => (process.env[k] ?? "").trim().replace(/^["']|["']$/g, "");
const sha = (v: string) => createHash("sha256").update(v.trim().toLowerCase()).digest("hex");
export const metaConfigured = () => !!(clean("NEXT_PUBLIC_META_PIXEL_ID") && clean("META_CAPI_TOKEN"));

function cookie(req: Request, name: string) {
  const m = (req.headers.get("cookie") ?? "").match(new RegExp(`(?:^|;\\s*)${name}=([^;]+)`));
  return m ? decodeURIComponent(m[1]) : undefined;
}

export async function sendMetaEvent(
  req: Request,
  e: {
    eventName: "Lead" | "Schedule";
    eventId: string;
    email: string;
    phone: string; // +34600111222
    name: string;
    externalId: string;
    fbclid?: string;
    fbclidTs?: number;
    sourceUrl?: string;
    customData?: Record<string, unknown>;
  }
) {
  if (!metaConfigured() || !e.eventId) return;
  const [fn, ...rest] = e.name.trim().split(/\s+/);
  const ln = rest.join(" ");
  const fbc = cookie(req, "_fbc") ?? (e.fbclid ? `fb.1.${e.fbclidTs ?? Date.now()}.${e.fbclid}` : undefined);
  const user_data: Record<string, unknown> = {
    em: [sha(e.email)],
    ph: [sha(e.phone.replace(/\D/g, ""))],
    fn: fn ? [sha(fn)] : undefined,
    ln: ln ? [sha(ln)] : undefined,
    country: [sha("es")],
    external_id: [sha(e.externalId)],
    client_ip_address: (req.headers.get("x-forwarded-for") ?? "").split(",")[0].trim() || undefined,
    client_user_agent: req.headers.get("user-agent") ?? undefined,
    fbp: cookie(req, "_fbp"),
    fbc,
  };
  const payload: Record<string, unknown> = {
    data: [
      {
        event_name: e.eventName,
        event_time: Math.floor(Date.now() / 1000),
        event_id: e.eventId, // mismo ID que el píxel → Meta lo cuenta una sola vez
        action_source: "website",
        event_source_url: e.sourceUrl || req.headers.get("referer") || "https://www.monqmedia.com/estudio",
        user_data,
        custom_data: e.customData,
      },
    ],
  };
  const test = clean("META_TEST_EVENT_CODE");
  if (test) payload.test_event_code = test;
  try {
    const r = await fetch(
      `https://graph.facebook.com/v21.0/${clean("NEXT_PUBLIC_META_PIXEL_ID")}/events?access_token=${encodeURIComponent(clean("META_CAPI_TOKEN"))}`,
      { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload), signal: AbortSignal.timeout(4000) }
    );
    if (!r.ok) console.error("[meta capi]", e.eventName, r.status, await r.text());
  } catch (err) {
    console.error("[meta capi]", e.eventName, err);
  }
}
