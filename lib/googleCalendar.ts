// Conexión con Google Calendar usando tu propia cuenta (OAuth con refresh token).
// Variables de entorno (Vercel → Settings → Environment Variables):
//   GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_REFRESH_TOKEN, GOOGLE_CALENDAR_ID (opcional, por defecto "primary")
import type { Busy } from "@/lib/estudioSlots";

// Limpia valores pegados con espacios, saltos de línea o comillas
const env = (k: string) => (process.env[k] ?? "").trim().replace(/^["']|["']$/g, "").trim();
const CAL_ID = () => env("GOOGLE_CALENDAR_ID") || "primary";

export const googleConfigured = () =>
  !!(env("GOOGLE_CLIENT_ID") && env("GOOGLE_CLIENT_SECRET") && env("GOOGLE_REFRESH_TOKEN"));

let cached: { token: string; exp: number } | null = null;

async function accessToken() {
  if (cached && cached.exp > Date.now() + 60_000) return cached.token;
  const r = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: env("GOOGLE_CLIENT_ID"),
      client_secret: env("GOOGLE_CLIENT_SECRET"),
      refresh_token: env("GOOGLE_REFRESH_TOKEN"),
      grant_type: "refresh_token",
    }),
    cache: "no-store",
  });
  if (!r.ok) throw new Error(`Google token ${r.status}: ${await r.text()}`);
  const j = await r.json();
  cached = { token: j.access_token, exp: Date.now() + j.expires_in * 1000 };
  return cached.token;
}

async function gfetch(path: string, init: RequestInit = {}) {
  const r = await fetch(`https://www.googleapis.com/calendar/v3${path}`, {
    ...init,
    headers: { Authorization: `Bearer ${await accessToken()}`, "Content-Type": "application/json", ...(init.headers || {}) },
    cache: "no-store",
  });
  if (!r.ok) throw new Error(`Google Calendar ${r.status}: ${await r.text()}`);
  return r.json();
}

/** Periodos ocupados del calendario entre dos fechas. */
export async function getBusy(timeMin: Date, timeMax: Date): Promise<Busy[]> {
  if (!googleConfigured()) return [];
  const j = await gfetch("/freeBusy", {
    method: "POST",
    body: JSON.stringify({ timeMin: timeMin.toISOString(), timeMax: timeMax.toISOString(), timeZone: "Europe/Madrid", items: [{ id: CAL_ID() }] }),
  });
  return (j.calendars?.[CAL_ID()]?.busy ?? []) as Busy[];
}

/** Crea la cita con enlace de Google Meet nuevo e invita al lead (Google le envía el email). */
export async function createEvent(o: { start: string; end: string; name: string; email: string; phone: string }) {
  const ev = await gfetch(`/calendars/${encodeURIComponent(CAL_ID())}/events?conferenceDataVersion=1&sendUpdates=all`, {
    method: "POST",
    body: JSON.stringify({
      summary: `Estudio gratuito Monq Media · ${o.name}`,
      description: `Estudio gratuito reservado desde monqmedia.com/estudio\n\nNombre: ${o.name}\nTeléfono: ${o.phone}\nEmail: ${o.email}`,
      start: { dateTime: o.start, timeZone: "Europe/Madrid" },
      end: { dateTime: o.end, timeZone: "Europe/Madrid" },
      attendees: [{ email: o.email, displayName: o.name }],
      reminders: { useDefault: true },
      conferenceData: {
        createRequest: { requestId: `estudio-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`, conferenceSolutionKey: { type: "hangoutsMeet" } },
      },
    }),
  });
  const meetUrl: string | null =
    ev.hangoutLink ?? ev.conferenceData?.entryPoints?.find((e: { entryPointType: string }) => e.entryPointType === "video")?.uri ?? null;
  return { eventId: ev.id as string, meetUrl, htmlLink: ev.htmlLink as string };
}
