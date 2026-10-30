// Huecos para el estudio gratuito (hora de España).
// Reglas: lunes a viernes, inicio de 11:30 a 20:00 cada 30 min, 2 h de antelación mínima,
// se muestran hoy + los 3 siguientes días laborables y como mucho 5 huecos por día.

export const TZ = "Europe/Madrid";
export const SLOT_MINUTES = 30;
const FIRST_START = 11 * 60 + 30;
const LAST_START = 20 * 60;
const MIN_NOTICE_MS = 2 * 60 * 60 * 1000;
const DAYS_SHOWN = 4;
const MAX_PER_DAY = 5;

export type Slot = { start: string; end: string };
export type Day = { date: string; slots: Slot[] };
export type Busy = { start: string; end: string };

// Partes de fecha/hora de un instante en la zona de Madrid.
function madridParts(d: Date) {
  const f = new Intl.DateTimeFormat("en-GB", {
    timeZone: TZ, year: "numeric", month: "2-digit", day: "2-digit",
    hour: "2-digit", minute: "2-digit", weekday: "short", hourCycle: "h23",
  });
  const p = Object.fromEntries(f.formatToParts(d).map((x) => [x.type, x.value]));
  return { y: +p.year, m: +p.month, d: +p.day, h: +p.hour, min: +p.minute, wd: p.weekday };
}

// Hora local de Madrid -> instante UTC (tiene en cuenta el horario de verano).
function madridToUtc(y: number, m: number, d: number, minutes: number) {
  const guess = Date.UTC(y, m - 1, d, 0, minutes);
  const p = madridParts(new Date(guess));
  const asUtc = Date.UTC(p.y, p.m - 1, p.d, p.h, p.min);
  return new Date(guess - (asUtc - guess));
}

const overlaps = (s: number, e: number, busy: Busy[]) =>
  busy.some((b) => s < Date.parse(b.end) && e > Date.parse(b.start));

// Reparte los huecos libres a lo largo del día en lugar de coger solo los primeros.
function spread<T>(items: T[], n: number) {
  if (items.length <= n) return items;
  const idx = new Set<number>();
  for (let i = 0; i < n; i++) idx.add(Math.round((i * (items.length - 1)) / (n - 1)));
  return Array.from(idx).sort((a, b) => a - b).map((i) => items[i]);
}

export function buildDays(now = new Date(), busy: Busy[] = []): Day[] {
  const days: Day[] = [];
  const earliest = now.getTime() + MIN_NOTICE_MS;
  const today = madridParts(now);
  for (let offset = 0; days.length < DAYS_SHOWN && offset < 14; offset++) {
    const base = new Date(Date.UTC(today.y, today.m - 1, today.d + offset, 12));
    const wd = base.getUTCDay();
    if (wd === 0 || wd === 6) continue;
    const y = base.getUTCFullYear(), m = base.getUTCMonth() + 1, d = base.getUTCDate();
    const free: Slot[] = [];
    for (let t = FIRST_START; t <= LAST_START; t += SLOT_MINUTES) {
      const s = madridToUtc(y, m, d, t).getTime();
      const e = s + SLOT_MINUTES * 60000;
      if (s < earliest || overlaps(s, e, busy)) continue;
      free.push({ start: new Date(s).toISOString(), end: new Date(e).toISOString() });
    }
    // Hoy solo cuenta si aún quedan huecos; los 3 días siguientes se muestran siempre.
    if (offset === 0 && free.length === 0) continue;
    days.push({ date: `${y}-${String(m).padStart(2, "0")}-${String(d).padStart(2, "0")}`, slots: spread(free, MAX_PER_DAY) });
  }
  return days;
}
