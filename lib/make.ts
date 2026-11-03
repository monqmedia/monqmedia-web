// Envío al webhook de Make (MAKE_WEBHOOK_URL). Si falla, no bloquea al usuario.
// Siempre se envía el mismo formato de "lead":
//  - al completar el paso 1 (reunion_reservada: "no")
//  - y otra vez, con el mismo lead_id, si reserva (reunion_reservada: "sí" + datos de la cita)
// En Make: buscar por lead_id y actualizar; si no existe, crear.

export type LeadPayload = {
  lead_id: string;
  nombre: string;
  telefono: string;
  email: string;
  reunion_reservada: "sí" | "no";
  reunion_fecha: string; // 03/11/2026 (hora de España)
  reunion_hora: string; // 18:00
  reunion_texto: string; // "martes, 3 de noviembre, 18:00"
  reunion_inicio: string; // ISO UTC
  reunion_fin: string;
  meet_url: string;
  error_calendario: string; // vacío si la cita se creó bien en Google Calendar
};

export function newLeadId() {
  return `L-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`.toUpperCase();
}

export function emptyMeeting() {
  return { reunion_reservada: "no" as const, reunion_fecha: "", reunion_hora: "", reunion_texto: "", reunion_inicio: "", reunion_fin: "", meet_url: "", error_calendario: "" };
}

export async function sendToMake(data: LeadPayload) {
  const url = (process.env.MAKE_WEBHOOK_URL ?? "").trim().replace(/^["']|["']$/g, "");
  if (!url) return;
  try {
    const r = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ tipo: "lead", ...data, origen: "monqmedia.com/estudio", enviado: new Date().toISOString() }),
      cache: "no-store",
    });
    if (!r.ok) console.error("[make] webhook", r.status, await r.text());
  } catch (e) {
    console.error("[make] webhook", e);
  }
}
