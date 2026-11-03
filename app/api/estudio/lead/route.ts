import { NextResponse } from "next/server";
import { sendToMake } from "@/lib/make";

export const dynamic = "force-dynamic";

// Paso 1 del formulario: envía el lead a Make.
export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const name = String(body?.name ?? "").trim();
  const phone = String(body?.phone ?? "").trim();
  const email = String(body?.email ?? "").trim();
  if (!name || !phone || !/^\S+@\S+\.\S+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "Datos incompletos" }, { status: 400 });
  }
  await sendToMake({ step: "lead", name, phone, email });
  return NextResponse.json({ ok: true });
}
