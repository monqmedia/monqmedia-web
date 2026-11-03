import { NextResponse } from "next/server";
import { emptyMeeting, newLeadId, sendToMake } from "@/lib/make";
import { normalizePhone } from "@/lib/phone";

export const dynamic = "force-dynamic";

// Paso 1 del formulario: envía el lead a Make (sin reunión todavía) y devuelve su lead_id.
export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const nombre = String(body?.name ?? "").trim();
  const telefono = normalizePhone(String(body?.phone ?? "")) ?? "";
  const email = String(body?.email ?? "").trim();
  if (!nombre || !telefono || !/^\S+@\S+\.\S+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "Datos incompletos" }, { status: 400 });
  }
  const lead_id = newLeadId();
  await sendToMake({ lead_id, nombre, telefono, email, ...emptyMeeting() });
  return NextResponse.json({ ok: true, leadId: lead_id });
}
