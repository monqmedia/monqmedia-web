"use client";

import { useState } from "react";

// Valores de ejemplo: el usuario los cambia por los de su empresa.
const DEFAULTS = {
  instalaciones: 10,
  cierre: 30,
  visita: 40,
  costeLead: 30,
};

const fmt = (n: number, d = 0) =>
  Number.isFinite(n)
    ? n.toLocaleString("es-ES", { maximumFractionDigits: d, minimumFractionDigits: d })
    : "—";

function Field({
  id,
  label,
  hint,
  value,
  onChange,
  suffix,
}: {
  id: string;
  label: string;
  hint: string;
  value: number;
  onChange: (v: number) => void;
  suffix: string;
}) {
  return (
    <label htmlFor={id} className="block">
      <span className="block text-[15px] font-bold text-[#14161b]">{label}</span>
      <span className="block text-[13px] text-[#5b5f6b] mb-2">{hint}</span>
      <span className="flex items-center rounded-xl border border-[#e3e4ea] bg-white focus-within:border-[#EB0A5C]">
        <input
          id={id}
          type="number"
          inputMode="decimal"
          min={0}
          value={Number.isFinite(value) ? value : ""}
          onChange={(e) => onChange(parseFloat(e.target.value))}
          className="w-full bg-transparent px-4 py-3 text-[17px] text-[#14161b] outline-none"
        />
        <span className="pr-4 text-[15px] text-[#5b5f6b]">{suffix}</span>
      </span>
    </label>
  );
}

export default function Calculator() {
  const [v, setV] = useState(DEFAULTS);
  const set = (k: keyof typeof DEFAULTS) => (n: number) => setV({ ...v, [k]: n });

  const visitas = v.instalaciones / (v.cierre / 100);
  const leads = visitas / (v.visita / 100);
  const inversion = leads * v.costeLead;
  const costeInstalacion = inversion / v.instalaciones;

  const results: [string, string][] = [
    ["Visitas técnicas necesarias al mes", fmt(Math.ceil(visitas))],
    ["Leads necesarios al mes", fmt(Math.ceil(leads))],
    ["Inversión estimada en leads al mes", `${fmt(inversion)} €`],
    ["Coste de captación por instalación", `${fmt(costeInstalacion)} €`],
  ];

  return (
    <div className="rounded-[24px] border border-[#ececf0] bg-[#fafafb] p-5 sm:p-8 mb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
        <Field
          id="instalaciones"
          label="Instalaciones que quieres cerrar al mes"
          hint="Tu objetivo mensual"
          value={v.instalaciones}
          onChange={set("instalaciones")}
          suffix="inst."
        />
        <Field
          id="cierre"
          label="% de visitas que acaban en venta"
          hint="De cada 10 visitas técnicas, ¿cuántas firmas?"
          value={v.cierre}
          onChange={set("cierre")}
          suffix="%"
        />
        <Field
          id="visita"
          label="% de leads que llegan a visita"
          hint="Leads que aceptan la visita técnica"
          value={v.visita}
          onChange={set("visita")}
          suffix="%"
        />
        <Field
          id="costeLead"
          label="Coste medio por lead"
          hint="Lo que te cuesta cada lead"
          value={v.costeLead}
          onChange={set("costeLead")}
          suffix="€"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" aria-live="polite">
        {results.map(([label, value]) => (
          <div key={label} className="rounded-2xl bg-white border border-[#ececf0] px-5 py-4">
            <p className="text-[13px] text-[#5b5f6b] mb-1">{label}</p>
            <p className="text-[26px] font-extrabold tracking-tight text-[#14161b]">{value}</p>
          </div>
        ))}
      </div>
      <p className="text-[13px] text-[#9aa0aa] mt-4">
        Los valores iniciales son solo un ejemplo: cámbialos por los de tu
        empresa.
      </p>
    </div>
  );
}
