import { NextResponse } from "next/server";

// Paso 1 del formulario: reenvía el lead al webhook de Make (MAKE_WEBHOOK_URL).
export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const name = String(body?.name ?? "").trim();
  const phone = String(body?.phone ?? "").trim();
  const email = String(body?.email ?? "").trim();
  if (!name || !phone || !/^\S+@\S+\.\S+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "Datos incompletos" }, { status: 400 });
  }
  const url = process.env.MAKE_WEBHOOK_URL;
  if (url) {
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ step: "lead", name, phone, email, source: "monqmedia.com/estudio", createdAt: new Date().toISOString() }),
    }).catch(() => {});
  }
  return NextResponse.json({ ok: true });
}
