import { NextResponse } from "next/server";
import { buildDays } from "@/lib/estudioSlots";

// Paso 2: reserva del estudio.
// TODO (conexión Google Calendar): crear el evento con enlace de Meet y devolver meetUrl.
export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const start = String(body?.start ?? "");
  const valid = buildDays().some((d) => d.slots.some((s) => s.start === start));
  if (!valid) return NextResponse.json({ ok: false, error: "Ese hueco ya no está disponible" }, { status: 409 });
  const end = new Date(Date.parse(start) + 30 * 60000).toISOString();
  const url = process.env.MAKE_WEBHOOK_URL;
  if (url) {
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ step: "booking", name: body?.name, phone: body?.phone, email: body?.email, start, end, source: "monqmedia.com/estudio" }),
    }).catch(() => {});
  }
  return NextResponse.json({ ok: true, start, end, meetUrl: null as string | null });
}
