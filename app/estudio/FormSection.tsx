"use client";

import { useState } from "react";
import BookingForm from "./BookingForm";

const TITLES = {
  1: { n: "PASO 1:", t: "Rellena este breve formulario" },
  2: { n: "PASO 2:", t: "Elige el día y la hora de tu estudio" },
  3: { n: "¡LISTO!", t: "Nos vemos en tu estudio gratuito" },
} as const;

export default function FormSection() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const t = TITLES[step];
  return (
    <div>
      <h2 className="text-[28px] sm:text-[38px] leading-[1.08] tracking-[-0.03em] font-extrabold text-[#14161b] mb-6 text-center lg:text-left">
        <span className="text-[#437EEF]">{t.n}</span> {t.t}
      </h2>
      <BookingForm onStepChange={setStep} />
    </div>
  );
}
