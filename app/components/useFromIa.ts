"use client";

import { useEffect, useState } from "react";

const IA_FLAG = "monq-from-ia";

// true si la visita llega desde ia.monqmedia.com (?from=ia); se recuerda en la pestaña.
export function useFromIa() {
  const [fromIa, setFromIa] = useState(false);
  useEffect(() => {
    const viaParam = new URLSearchParams(window.location.search).get("from") === "ia";
    try {
      if (viaParam) sessionStorage.setItem(IA_FLAG, "1");
      setFromIa(viaParam || sessionStorage.getItem(IA_FLAG) === "1");
    } catch {
      setFromIa(viaParam);
    }
  }, []);
  return fromIa;
}

