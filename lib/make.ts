// Envío al webhook de Make (MAKE_WEBHOOK_URL). Si falla, no bloquea al usuario.
export async function sendToMake(data: Record<string, unknown>) {
  const url = process.env.MAKE_WEBHOOK_URL;
  if (!url) return;
  try {
    const r = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, source: "monqmedia.com/estudio", sentAt: new Date().toISOString() }),
      cache: "no-store",
    });
    if (!r.ok) console.error("[make] webhook", r.status, await r.text());
  } catch (e) {
    console.error("[make] webhook", e);
  }
}
