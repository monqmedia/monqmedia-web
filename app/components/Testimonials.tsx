import { h2 } from "@/app/components/ContentPage";

// Testimonios reales de clientes (los mismos que en /estudio).
const QUOTES = [
  {
    quote:
      "Antes tenía mucha incertidumbre porque me llegaban pocos clientes. Ahora sé que todos los meses voy a tener bastantes clientes potenciales y he crecido en las instalaciones un 60%.",
    person: "Sergio, CEO de Vadesol Insular",
  },
  {
    quote:
      "Hemos pasado de 6-8 instalaciones mensuales a una media de 10-12 de manera constante. Recomendamos sus servicios.",
    person: "Antonio, CEO de Solar Clic",
  },
];

export default function Testimonials() {
  return (
    <section aria-label="Opiniones de clientes">
      <h2 className={h2}>Lo que dicen nuestros clientes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
        {QUOTES.map((q) => (
          <figure
            key={q.person}
            className="rounded-2xl border border-[#ececf0] bg-[#fafafb] px-5 py-5"
          >
            <blockquote className="text-[16px] leading-[1.6] text-[#14161b]">
              «{q.quote}»
            </blockquote>
            <figcaption className="text-[14px] text-[#5b5f6b] mt-3 font-semibold">
              {q.person}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
