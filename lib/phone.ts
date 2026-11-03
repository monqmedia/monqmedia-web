// Valida y normaliza teléfonos: España (9 dígitos, con o sin +34/0034) o internacional con "+".
export function normalizePhone(raw: string): string | null {
  const s = raw.trim().replace(/[\s().\-]/g, "");
  let m = s.match(/^(?:\+34|0034|34)?([6789]\d{8})$/);
  if (m) return `+34${m[1]}`;
  m = s.match(/^(?:\+|00)([1-9]\d{7,14})$/);
  if (m) return `+${m[1]}`;
  return null;
}
