import { NextResponse } from "next/server";
import { buildDays, SLOT_MINUTES } from "@/lib/estudioSlots";
import { createEvent, getBusy, googleConfigured } from "@/lib/googleCalendar";
import { newLeadId, sendToMake } from "@/lib/make";
import { normalizePhone } from "@/lib/phone";
import { sendMetaEvent } from "@/lib/metaCapi";

export const dynamic = "force-dynamic";

// Paso 2: comprueba que el hueco sigue libre, crea la cita en Google Calendar (con Meet) y avisa a Make.
export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const name = String(body?.name ?? "").trim();
  const phone = normalizePhone(String(body?.phone ?? "")) ?? "";
  const email = String(body?.email ?? "").trim();
  const start = String(body?.start ?? "");
  if (!name || !phone || !/^\S+@\S+\.\S+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "Faltan tus datos. Vuelve al paso 1." }, { status: 400 });
  }

  const now = new Date();
  let busy: Awaited<ReturnType<typeof getBusy>> = [];
  try {
    busy = await getBusy(now, new Date(now.getTime() + 14 * 86400000));
  } catch (e) {
    console.error("[estudio/book] freebusy", e);
  }
  const valid = buildDays(now, busy).some((d) => d.slots.some((s) => s.start === start));
  if (!valid) return NextResponse.json({ ok: false, error: "Ese hueco ya no está disponible. Elige otro." }, { status: 409 });
  const end = new Date(Date.parse(start) + SLOT_MINUTES * 60000).toISOString();

  let meetUrl: string | null = null;
  // Si Google falla, la reserva se acepta igualmente y Make recibe calendarError para gestionarla a mano.
  let calendarError: string | null = null;
  if (googleConfigured()) {
    try {
      ({ meetUrl } = await createEvent({ start, end, name, email, phone }));
    } catch (e) {
      console.error("[estudio/book] createEvent", e);
      calendarError = String((e as Error).message).slice(0, 300);
    }
  } else {
    calendarError = "Google Calendar no configurado";
  }

  const fmt = (o: Intl.DateTimeFormatOptions) => new Intl.DateTimeFormat("es-ES", { timeZone: "Europe/Madrid", ...o }).format(new Date(start));
  const leadId = String(body?.leadId ?? "").trim() || newLeadId();
  await Promise.all([
    sendToMake({
    lead_id: leadId, nombre: name, telefono: phone, email,
    reunion_reservada: "sí",
    reunion_fecha: fmt({ year: "numeric", month: "2-digit", day: "2-digit" }),
    reunion_hora: fmt({ hour: "2-digit", minute: "2-digit", hourCycle: "h23" }),
    reunion_texto: fmt({ weekday: "long", day: "numeric", month: "long", hour: "2-digit", minute: "2-digit", hourCycle: "h23" }),
    reunion_inicio: start, reunion_fin: end,
    meet_url: meetUrl ?? "",
    error_calendario: calendarError ?? "",
  }),
    sendMetaEvent(req, {
      eventName: "Schedule", eventId: String(body?.metaEventId ?? ""), email, phone, name,
      externalId: leadId, fbclid: body?.fbclid, fbclidTs: body?.fbclidTs, sourceUrl: body?.pageUrl,
    }),
  ]);
  return NextResponse.json({ ok: true, start, end, meetUrl });
}
