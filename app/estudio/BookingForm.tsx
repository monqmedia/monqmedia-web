"use client";

import { useEffect, useRef, useState } from "react";
import { pageview } from "@vercel/analytics";
import { normalizePhone } from "@/lib/phone";

type Slot = { start: string; end: string };
type Day = { date: string; slots: Slot[] };
type Lead = { name: string; phone: string; email: string };
type Booking = { start: string; end: string; meetUrl: string | null };

const TZ = "Europe/Madrid";
const PINK = "#437EEF";

const fmt = (iso: string, opts: Intl.DateTimeFormatOptions) =>
  new Intl.DateTimeFormat("es-ES", { timeZone: TZ, ...opts }).format(new Date(iso));
const time = (iso: string) => fmt(iso, { hour: "2-digit", minute: "2-digit", hourCycle: "h23" });
const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
const dayDate = (d: string) => new Date(`${d}T12:00:00Z`);

function dayLabel(d: string, i: number) {
  if (i === 0) {
    const today = new Intl.DateTimeFormat("en-CA", { timeZone: TZ }).format(new Date());
    if (today === d) return "Hoy";
  }
  return cap(new Intl.DateTimeFormat("es-ES", { timeZone: "UTC", weekday: "short" }).format(dayDate(d)).replace(".", ""));
}

// Enlaces "Añadir al calendario"
const gDate = (iso: string) => iso.replace(/[-:]/g, "").replace(/\.\d{3}/, "");
const TITLE = "Estudio online gratuito con Monq Media";
function calendarLinks(b: Booking) {
  const details = b.meetUrl ? `Enlace de Google Meet: ${b.meetUrl}` : "Te enviaremos el enlace de Google Meet por email.";
  const google = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(TITLE)}&dates=${gDate(b.start)}/${gDate(b.end)}&details=${encodeURIComponent(details)}${b.meetUrl ? `&location=${encodeURIComponent(b.meetUrl)}` : ""}`;
  const outlook = `https://outlook.live.com/calendar/0/deeplink/compose?path=/calendar/action/compose&rru=addevent&subject=${encodeURIComponent(TITLE)}&startdt=${encodeURIComponent(b.start)}&enddt=${encodeURIComponent(b.end)}&body=${encodeURIComponent(details)}`;
  const ics = [
    "BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Monq Media//Estudio//ES", "BEGIN:VEVENT",
    `UID:${gDate(b.start)}@monqmedia.com`, `DTSTAMP:${gDate(new Date().toISOString())}`,
    `DTSTART:${gDate(b.start)}`, `DTEND:${gDate(b.end)}`, `SUMMARY:${TITLE}`, `DESCRIPTION:${details}`,
    ...(b.meetUrl ? [`LOCATION:${b.meetUrl}`] : []), "END:VEVENT", "END:VCALENDAR",
  ].join("\r\n");
  return { google, outlook, ics: `data:text/calendar;charset=utf-8,${encodeURIComponent(ics)}` };
}

const inputCls =
  "w-full rounded-xl border border-[#e3e5ea] bg-white px-4 py-3.5 text-[15.5px] text-[#14161b] placeholder:text-[#a0a5ae] outline-none focus:border-[#437EEF] focus:ring-4 focus:ring-[#437EEF]/10 transition";

export default function BookingForm({ onStepChange }: { onStepChange?: (step: 1 | 2 | 3) => void }) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [lead, setLead] = useState<Lead>({ name: "", phone: "", email: "" });
  const [leadId, setLeadId] = useState("");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [days, setDays] = useState<Day[] | null>(null);
  const [dayIdx, setDayIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [booking, setBooking] = useState<Booking | null>(null);
  const [phoneError, setPhoneError] = useState("");
  const rootRef = useRef<HTMLDivElement>(null);
  const leadReq = useRef<Promise<string> | null>(null);

  useEffect(() => onStepChange?.(step), [step, onStepChange]);

  // Al cambiar de paso, mantener el formulario en pantalla (sin saltar a los casos de éxito).
  useEffect(() => {
    if (step === 1) return;
    const el = document.getElementById("formulario") ?? rootRef.current;
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 12;
    if (Math.abs(window.scrollY - top) > 40) window.scrollTo({ top, behavior: "smooth" });
  }, [step]);

  // Huecos precargados para que el paso 2 aparezca al instante.
  useEffect(() => {
    loadSlots();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadSlots = () =>
    fetch("/api/estudio/slots", { cache: "no-store" })
      .then((r) => r.json())
      .then((j) => setDays(j.days ?? []))
      .catch(() => setDays([]));

  const submitLead = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const phone = normalizePhone(lead.phone);
    if (!phone) {
      setPhoneError("Introduce un teléfono válido.");
      return;
    }
    setPhoneError("");
    const data = { ...lead, phone };
    setLead(data);
    // El envío a Make va en paralelo: el paso 2 aparece al momento.
    leadReq.current = fetch("/api/estudio/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((r) => r.json())
      .then((j) => {
        setLeadId(j.leadId ?? "");
        return (j.leadId as string) ?? "";
      })
      .catch(() => "");
    // Conversión medible en el plan gratuito de Vercel Analytics.
    pageview({ route: "/_contacto/formulario/estudio", path: "/_contacto/formulario/estudio" });
    setStep(2);
    loadSlots();
  };

  const confirm = async (start: string) => {
    setError("");
    setSending(true);
    try {
      const id = leadId || (await leadReq.current) || "";
      const r = await fetch("/api/estudio/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...lead, leadId: id, start }),
      });
      const j = await r.json();
      if (!r.ok || !j.ok) throw new Error(j.error);
      setBooking({ start: j.start, end: j.end, meetUrl: j.meetUrl });
      pageview({ route: "/_contacto/cita/estudio", path: "/_contacto/cita/estudio" });
      setStep(3);
    } catch (err) {
      setError((err as Error).message || "No se ha podido reservar. Elige otro hueco.");
      setSelected(null);
      loadSlots();
    } finally {
      setSending(false);
    }
  };

  return (
    <div ref={rootRef} className="rounded-[22px] border border-[#ececf0] bg-white p-5 sm:p-8 shadow-[0_24px_60px_-34px_rgba(20,22,27,.35)]">
      {/* Indicador de pasos */}
      <div className="flex items-center gap-2 mb-6">
        {[1, 2].map((n) => (
          <span
            key={n}
            className="h-[5px] flex-1 rounded-full transition-colors"
            style={{ background: step >= n ? PINK : "#f0f0f3" }}
          />
        ))}
      </div>

      {step === 1 && (
        <form onSubmit={submitLead} className="flex flex-col gap-3.5">
          <label className="flex flex-col gap-1.5">
            <span className="text-[13.5px] font-bold text-[#2b2f37]">Nombre completo</span>
            <input required autoComplete="name" className={inputCls} placeholder="Tu nombre y apellidos"
              value={lead.name} onChange={(e) => setLead({ ...lead, name: e.target.value })} />
          </label>
          <label className="flex flex-col gap-1.5">
            <span className="text-[13.5px] font-bold text-[#2b2f37]">Teléfono</span>
            <input required type="tel" autoComplete="tel" inputMode="tel" placeholder="600 000 000"
              className={`${inputCls} ${phoneError ? "border-[#d11a4f] focus:border-[#d11a4f] focus:ring-[#d11a4f]/10" : ""}`}
              aria-invalid={!!phoneError}
              value={lead.phone}
              onChange={(e) => { setLead({ ...lead, phone: e.target.value }); if (phoneError) setPhoneError(""); }}
              onBlur={() => lead.phone && !normalizePhone(lead.phone) && setPhoneError("Introduce un teléfono válido.")} />
            {phoneError && <span className="text-[13px] font-semibold text-[#d11a4f]">{phoneError}</span>}
          </label>
          <label className="flex flex-col gap-1.5">
            <span className="text-[13.5px] font-bold text-[#2b2f37]">Email</span>
            <input required type="email" autoComplete="email" className={inputCls} placeholder="tu@empresa.com"
              value={lead.email} onChange={(e) => setLead({ ...lead, email: e.target.value })} />
          </label>
          {error && <p className="text-[13.5px] font-semibold text-[#d11a4f]">{error}</p>}
          <button
            type="submit"
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-[#437EEF] px-6 py-4 text-[16px] font-bold text-white shadow-[0_14px_32px_-12px_rgba(67,126,239,.7)] hover:bg-[#2F66D6] transition-colors disabled:opacity-60"
          >
            Siguiente
            <Arrow />
          </button>
          <p className="text-center text-[12.5px] text-[#8a8f99]">Sin compromiso. Tus datos solo se usan para preparar tu estudio.</p>
        </form>
      )}

      {step === 2 && (
        <div>
          {!days ? (
            <p className="py-24 text-center text-[14.5px] text-[#8a8f99]">Cargando huecos disponibles…</p>
          ) : days.length === 0 ? (
            <p className="py-10 text-center text-[14.5px] text-[#52575f]">No quedan huecos libres estos días. Te llamaremos para buscar uno.</p>
          ) : (
            <>
              {/* Días */}
              <div className="grid grid-cols-4 gap-2">
                {days.map((d, i) => (
                  <button
                    key={d.date}
                    onClick={() => { setDayIdx(i); setSelected(null); }}
                    className={`rounded-xl border px-1 py-2.5 text-center transition-colors ${
                      i === dayIdx ? "border-[#437EEF] bg-[#EEF4FF]" : "border-[#e3e5ea] bg-white hover:border-[#A9C5FA]"
                    }`}
                  >
                    <span className={`block text-[12.5px] font-bold ${i === dayIdx ? "text-[#437EEF]" : "text-[#52575f]"}`}>{dayLabel(d.date, i)}</span>
                    <span className="block text-[20px] font-extrabold leading-tight text-[#14161b]">{dayDate(d.date).getUTCDate()}</span>
                    <span className="block text-[11.5px] text-[#8a8f99]">
                      {new Intl.DateTimeFormat("es-ES", { timeZone: "UTC", month: "short" }).format(dayDate(d.date)).replace(".", "")}
                    </span>
                  </button>
                ))}
              </div>

              <div className="mt-6 text-center">
                <div className="text-[17px] font-bold text-[#14161b]">
                  {cap(new Intl.DateTimeFormat("es-ES", { timeZone: "UTC", weekday: "long", day: "numeric", month: "long" }).format(dayDate(days[dayIdx].date)))}
                </div>
                <div className="text-[13.5px] text-[#8a8f99] mt-0.5">Agenda tu estudio online · Duración: 30 minutos</div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-2.5">
                {days[dayIdx].slots.length === 0 && (
                  <p className="col-span-2 py-6 text-center text-[14px] text-[#8a8f99]">No quedan huecos este día. Prueba con otro.</p>
                )}
                {days[dayIdx].slots.map((s) =>
                  selected === s.start ? (
                    <button
                      key={s.start}
                      onClick={() => confirm(s.start)}
                      disabled={sending}
                      className="rounded-xl bg-[#14161b] py-3.5 text-[15px] font-bold text-white disabled:opacity-60"
                    >
                      {sending ? "Reservando…" : "Confirmar"}
                    </button>
                  ) : (
                    <button
                      key={s.start}
                      onClick={() => setSelected(s.start)}
                      className="rounded-xl border border-[#d9dbe1] bg-white py-3.5 text-[15px] font-semibold text-[#14161b] hover:border-[#437EEF] hover:text-[#437EEF] transition-colors"
                    >
                      {time(s.start)}
                    </button>
                  )
                )}
              </div>
              {error && <p className="mt-3 text-center text-[13.5px] font-semibold text-[#d11a4f]">{error}</p>}
            </>
          )}
        </div>
      )}

      {step === 3 && booking && (
        <div className="text-center">
          <h3 className="text-[24px] font-extrabold tracking-tight text-[#14161b]">✅ Reunión programada</h3>
          <p className="mt-3 text-[15px] leading-relaxed text-[#52575f]">
            {lead.name.split(" ")[0]}, gracias por tu solicitud para reunirnos. Te contactaremos en breve para confirmar tu reunión.
          </p>
          <p className="mt-3 text-[15px] leading-relaxed text-[#52575f]">
            Te hemos enviado la invitación a<br /><strong className="text-[#14161b] [overflow-wrap:anywhere]">{lead.email}</strong>
          </p>
          <div className="mt-5 rounded-2xl border border-[#ececf0] p-4 text-left text-[14.5px] text-[#2b2f37] flex flex-col gap-3">
            <Row icon="clock">30 min</Row>
            <Row icon="cal">
              {time(booking.start)} - {time(booking.end)}, {fmt(booking.start, { weekday: "long", day: "numeric", month: "long", year: "numeric" })}
            </Row>
            <Row icon="video">
              {booking.meetUrl ? (
                <a href={booking.meetUrl} className="underline break-all text-[#14161b]">{booking.meetUrl}</a>
              ) : (
                "Google Meet (te enviaremos el enlace por email)"
              )}
            </Row>
            <Row icon="globe">Hora de España (Madrid)</Row>
          </div>
          <div className="mt-5 flex flex-col gap-2.5">
            {(() => {
              const l = calendarLinks(booking);
              const cls = "rounded-xl border border-[#d9dbe1] py-3 text-[14.5px] font-semibold text-[#14161b] hover:border-[#437EEF] transition-colors";
              return (
                <>
                  <a className={cls} href={l.google} target="_blank" rel="noopener">Añadir a Google Calendar</a>
                  <a className={cls} href={l.outlook} target="_blank" rel="noopener">Añadir a Outlook</a>
                  <a className={cls} href={l.ics} download="estudio-monq-media.ics">Añadir a Apple Calendar (iCloud)</a>
                </>
              );
            })()}
          </div>
        </div>
      )}
    </div>
  );
}

function Arrow() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h13" /><path d="M12 5l7 7-7 7" /></svg>
  );
}

function Row({ icon, children }: { icon: "clock" | "cal" | "video" | "globe"; children: React.ReactNode }) {
  const paths = {
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    cal: <><rect x="3.5" y="5" width="17" height="15" rx="2" /><path d="M8 3v4M16 3v4M3.5 10h17" /></>,
    video: <><rect x="3" y="6" width="13" height="12" rx="2" /><path d="M16 10l5-3v10l-5-3" /></>,
    globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18" /></>,
  };
  return (
    <div className="flex items-start gap-3">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#52575f" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="flex-none mt-0.5">{paths[icon]}</svg>
      <span>{children}</span>
    </div>
  );
}
