import type { Metadata } from "next";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  robots: { index: false, follow: false },
};

export default function PoliticaDePrivacidad() {
  return (
    <>
      <Header />
      <main className="bg-white min-h-screen">
        <div className="max-w-[760px] mx-auto px-4 sm:px-8 py-12 sm:py-16 lg:py-20">
          <p className="text-[13px] font-bold tracking-[0.14em] uppercase text-[#EB0A5C] mb-4">Legal</p>
          <h1 className="text-[30px] sm:text-[38px] font-extrabold tracking-tight text-[#14161b] mb-2">
            Política de Privacidad de Monq Media Labs S.L.
          </h1>
          <p className="text-[14px] text-[#9aa0aa] mb-10 pb-10 border-b border-[#f0f0f2]">
            Fecha de entrada en vigencia: 01/06/2023
          </p>

          <div className="text-[15.5px] leading-relaxed text-[#52575f] mb-10">
            <p>En Monq Media Labs S.L., valoramos y respetamos tu privacidad. Esta Política de Privacidad describe cómo recopilamos, utilizamos y protegemos la información personal que recopilamos a través de nuestro sitio web y nuestras actividades en línea, de conformidad con la normativa del Reglamento General de Protección de Datos (RGPD).</p>
          </div>

          <Section n="1" title="Información que recopilamos">
            <h3 className={h3}>1.1 Información personal</h3>
            <p>Recopilamos la siguiente información personal de los usuarios que interactúan con nuestro sitio web:</p>
            <ul className={ul}>
              <li>Nombre completo</li>
              <li>Dirección de correo electrónico</li>
              <li>Código postal</li>
              <li>Número de teléfono</li>
            </ul>
            <h3 className={h3}>1.2 Información automática</h3>
            <p>También podemos recopilar información no personal de forma automática cuando visitas nuestro sitio web, como tu dirección IP, tipo de navegador, dispositivo utilizado, páginas visitadas y acciones realizadas en el sitio.</p>
          </Section>

          <Section n="2" title="Uso de la información recopilada">
            <h3 className={h3}>2.1 Información personal</h3>
            <p>Utilizamos la información personal recopilada para los siguientes fines:</p>
            <ul className={ul}>
              <li>Proporcionar y personalizar nuestros servicios.</li>
              <li>Gestionar tu cuenta y responder a tus consultas.</li>
              <li>Enviar información relevante sobre nuestros productos, promociones u otras comunicaciones comerciales.</li>
              <li>Mejorar nuestros servicios, realizar análisis y estudios de mercado.</li>
            </ul>
            <h3 className={h3}>2.2 Información automática</h3>
            <p>Utilizamos la información automática recopilada para:</p>
            <ul className={ul}>
              <li>Analizar el comportamiento y las preferencias de los usuarios.</li>
              <li>Mejorar la funcionalidad y la experiencia del usuario en nuestro sitio web.</li>
            </ul>
          </Section>

          <Section n="3" title="Compartir información con terceros">
            <p>No vendemos ni alquilamos tu información personal a terceros sin tu consentimiento expreso.</p>
            <p>Podemos compartir tu información personal con terceros en los siguientes casos:</p>
            <ul className={ul}>
              <li><strong className={strong}>Proveedores de servicios:</strong> Podemos compartir tu información con proveedores de servicios externos que nos ayudan a operar nuestro sitio web y brindar nuestros servicios, como servicios de alojamiento web, análisis de datos, servicios de correo electrónico y servicios de atención al cliente. Estos proveedores de servicios solo pueden utilizar tu información en la medida necesaria para brindar los servicios contratados y deben cumplir con las leyes de protección de datos aplicables.</li>
              <li><strong className={strong}>Cumplimiento legal:</strong> Podemos divulgar tu información personal si así lo requiere la ley, un proceso legal o una solicitud gubernamental.</li>
            </ul>
          </Section>

          <Section n="4" title="Cookies y tecnologías similares">
            <p>Nuestro sitio web utiliza cookies y tecnologías similares para recopilar información automática y mejorar la funcionalidad del sitio. Puedes ajustar tus preferencias de cookies a través de la configuración de tu navegador. Para obtener más información, consulta nuestra Política de Cookies.</p>
          </Section>

          <Section n="5" title="Seguridad de la información">
            <p>Tomamos medidas razonables para proteger la información personal que recopilamos contra pérdida, uso indebido, acceso no autorizado, divulgación, alteración y destrucción. Sin embargo, debes tener en cuenta que ninguna transmisión de datos por Internet o sistema de almacenamiento es completamente seguro.</p>
          </Section>

          <Section n="6" title="Tus derechos">
            <p>De acuerdo con la normativa RGPD, tienes ciertos derechos con respecto a tus datos personales. Puedes ejercer los siguientes derechos:</p>
            <ul className={ul}>
              <li><strong className={strong}>Acceso:</strong> Puedes solicitar una copia de la información personal que tenemos sobre ti.</li>
              <li><strong className={strong}>Rectificación:</strong> Puedes corregir o actualizar cualquier información personal inexacta o incompleta que tengamos sobre ti.</li>
              <li><strong className={strong}>Eliminación:</strong> Puedes solicitar la eliminación de tu información personal en ciertas circunstancias, como cuando la información ya no es relevante para los fines para los que fue recopilada.</li>
              <li><strong className={strong}>Restricción del procesamiento:</strong> Puedes solicitar la restricción del procesamiento de tu información personal en determinadas situaciones.</li>
              <li><strong className={strong}>Objeción:</strong> Puedes objetar el procesamiento de tu información personal en ciertos casos, como cuando se utiliza con fines de marketing directo.</li>
              <li><strong className={strong}>Portabilidad de datos:</strong> Puedes solicitar la transferencia de tu información personal a otro controlador de datos en un formato estructurado y legible por máquina.</li>
            </ul>
            <p>Para ejercer tus derechos, ponte en contacto con nosotros utilizando los detalles de contacto proporcionados al final de esta Política de Privacidad. Responderemos a tu solicitud de acuerdo con las leyes de protección de datos aplicables.</p>
          </Section>

          <Section n="7" title="Retención de datos">
            <p>Conservaremos tu información personal durante el tiempo necesario para cumplir con los fines establecidos en esta Política de Privacidad, a menos que la ley exija o permita un período de retención más prolongado.</p>
          </Section>

          <Section n="8" title="Enlaces a sitios web de terceros">
            <p>Nuestro sitio web puede contener enlaces a sitios web de terceros. Esta Política de Privacidad se aplica solo a nuestro sitio web. No somos responsables de las prácticas de privacidad de dichos sitios web de terceros. Te recomendamos revisar las políticas de privacidad de esos sitios antes de proporcionarles cualquier información personal.</p>
          </Section>

          <Section n="9" title="Cambios en esta Política de Privacidad">
            <p>Podemos actualizar esta Política de Privacidad de vez en cuando. Te notificaremos cualquier cambio significativo mediante una publicación destacada en nuestro sitio web o mediante otros medios antes de que el cambio entre en vigencia. Te recomendamos que revises periódicamente esta Política de Privacidad para estar informado sobre cómo protegemos tu información personal.</p>
          </Section>

          <Section n="10" title="Contacto">
            <p>Si tienes alguna pregunta, inquietud o solicitud relacionada con esta Política de Privacidad o nuestras prácticas de privacidad, puedes ponerte en contacto con nosotros a través de los siguientes medios:</p>
            <div className="mt-4 rounded-2xl bg-[#fdf2f6] border border-[#f4d4e1] px-6 py-5 space-y-1">
              <p className="font-bold text-[#14161b]">Monq Media Labs S.L.</p>
              <p>CIF: B93968956</p>
              <p>Domicilio social: Calle Los Merineros, 25, 2° Dr., 42001, Soria, España</p>
              <p>Correo electrónico: <a href="mailto:info@monqmedia.com" className="text-[#EB0A5C] hover:underline">info@monqmedia.com</a></p>
            </div>
            <p className="mt-4">Gracias por confiar en Monq Media Labs S.L. Estamos comprometidos a proteger tu privacidad y asegurarnos de que tus datos personales sean tratados de manera segura y conforme a la normativa vigente.</p>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  );
}

const h3 = "text-[15.5px] font-bold text-[#14161b] mt-5 mb-2";
const ul = "list-disc pl-5 space-y-2 mt-2";
const strong = "font-semibold text-[#2b2f37]";

function Section({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="flex items-baseline gap-2 text-[19px] sm:text-[21px] font-extrabold text-[#14161b] mb-4 pb-3 border-b border-[#f0f0f2]">
        <span className="text-[#EB0A5C]">{n}.</span> {title}
      </h2>
      <div className="space-y-3 text-[15.5px] leading-relaxed text-[#52575f]">
        {children}
      </div>
    </section>
  );
}
