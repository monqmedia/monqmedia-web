"use client";

import { useState } from "react";
import { Field, fmt } from "./Calculator";

// Valores de ejemplo: el usuario los cambia por los de su empresa.
const DEFAULTS = {
  instalaciones: 10,
  ticket: 6000,
  margen: 25,
  inversion: 3000,
};

export default function RoiCalculator() {
  const [v, setV] = useState(DEFAULTS);
  const set = (k: keyof typeof DEFAULTS) => (n: number) => setV({ ...v, [k]: n });

  const facturacion = v.instalaciones * v.ticket;
  const beneficio = facturacion * (v.margen / 100);
  const neto = beneficio - v.inversion;
  const retorno = beneficio / v.inversion;

  const results: [string, string][] = [
    ["Facturación generada al mes", `${fmt(facturacion)} €`],
    ["Margen bruto de esas instalaciones", `${fmt(beneficio)} €`],
    ["Beneficio tras la inversión en captación", `${fmt(neto)} €`],
    ["Retorno por cada euro invertido", `x${fmt(retorno, 1)}`],
  ];

  return (
    <div className="rounded-[24px] border border-[#ececf0] bg-[#fafafb] p-5 sm:p-8 mb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
        <Field
          id="roi-instalaciones"
          label="Instalaciones cerradas al mes con la captación"
          hint="Las que vienen de tus campañas"
          value={v.instalaciones}
          onChange={set("instalaciones")}
          suffix="inst."
        />
        <Field
          id="roi-ticket"
          label="Importe medio por instalación"
          hint="Lo que factura una instalación media"
          value={v.ticket}
          onChange={set("ticket")}
          suffix="€"
        />
        <Field
          id="roi-margen"
          label="Margen bruto por instalación"
          hint="Después de material y mano de obra"
          value={v.margen}
          onChange={set("margen")}
          suffix="%"
        />
        <Field
          id="roi-inversion"
          label="Inversión mensual en captación"
          hint="Publicidad, leads y herramientas"
          value={v.inversion}
          onChange={set("inversion")}
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
