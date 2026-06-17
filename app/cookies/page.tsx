import type { Metadata } from "next";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Política de Cookies",
  robots: { index: false, follow: false },
};

export default function Cookies() {
  return (
    <>
      <Header />
      <main className="bg-white min-h-screen">
        <div className="max-w-[760px] mx-auto px-4 sm:px-8 py-12 sm:py-16 lg:py-20">
          <p className="text-[13px] font-bold tracking-[0.14em] uppercase text-[#EB0A5C] mb-4">Legal</p>
          <h1 className="text-[30px] sm:text-[38px] font-extrabold tracking-tight text-[#14161b] mb-2">
            Política de Cookies de Monq Media
          </h1>
          <p className="text-[14px] text-[#9aa0aa] mb-10 pb-10 border-b border-[#f0f0f2]">
            www.monqmedia.com
          </p>

          <div className="space-y-4 text-[15.5px] leading-relaxed text-[#52575f] mb-10">
            <p>El acceso a este Sitio Web puede implicar la utilización de cookies. Las cookies son pequeñas cantidades de información que se almacenan en el navegador utilizado por cada Usuario —en los distintos dispositivos que pueda utilizar para navegar— para que el servidor recuerde cierta información que posteriormente y únicamente el servidor que la implementó leerá. Las cookies facilitan la navegación, la hacen más amigable, y no dañan el dispositivo de navegación.</p>
            <p>Las cookies son procedimientos automáticos de recogida de información relativa a las preferencias determinadas por el Usuario durante su visita al Sitio Web con el fin de reconocerlo como Usuario, y personalizar su experiencia y el uso del Sitio Web, y pueden también, por ejemplo, ayudar a identificar y resolver errores.</p>
            <p>La información recabada a través de las cookies puede incluir la fecha y hora de visitas al Sitio Web, las páginas visionadas, el tiempo que ha estado en el Sitio Web y los sitios visitados justo antes y después del mismo. Sin embargo, ninguna cookie permite que esta misma pueda contactarse con el número de teléfono del Usuario o con cualquier otro medio de contacto personal. Ninguna cookie puede extraer información del disco duro del Usuario o robar información personal. La única manera de que la información privada del Usuario forme parte del archivo Cookie es que el usuario dé personalmente esa información al servidor.</p>
            <p>Las cookies que permiten identificar a una persona se consideran datos personales. Por tanto, a las mismas les será de aplicación la Política de Privacidad anteriormente descrita. En este sentido, para la utilización de las mismas será necesario el consentimiento del Usuario. Este consentimiento será comunicado, en base a una elección auténtica, ofrecido mediante una decisión afirmativa y positiva, antes del tratamiento inicial, removible y documentado.</p>
          </div>

          <Section n="1" title="Cookies propias">
            <p>Son aquellas cookies que son enviadas al ordenador o dispositivo del Usuario y gestionadas exclusivamente por VILIAN SEVERINOV ANGELOV para el mejor funcionamiento del Sitio Web. La información que se recaba se emplea para mejorar la calidad del Sitio Web y su Contenido y su experiencia como Usuario. Estas cookies permiten reconocer al Usuario como visitante recurrente del Sitio Web y adaptar el contenido para ofrecerle contenidos que se ajusten a sus preferencias.</p>
          </Section>

          <Section n="2" title="Cookies de terceros">
            <p>Son cookies utilizadas y gestionadas por entidades externas que proporcionan a VILIAN SEVERINOV ANGELOV servicios solicitados por este mismo para mejorar el Sitio Web y la experiencia del usuario al navegar en el Sitio Web.</p>
            <p>Los principales objetivos para los que se utilizan cookies de terceros son la obtención de estadísticas de accesos y analizar la información de la navegación, es decir, cómo interactúa el Usuario con el Sitio Web. La información que se obtiene se refiere, por ejemplo, al número de páginas visitadas, el idioma, el lugar a la que la dirección IP desde el que accede el Usuario, el número de Usuarios que acceden, la frecuencia y reincidencia de las visitas, el tiempo de visita, el navegador que usan, el operador o tipo de dispositivo desde el que se realiza la visita.</p>
            <p>Esta información se utiliza para mejorar el Sitio Web, y detectar nuevas necesidades para ofrecer a los Usuarios un Contenido y/o servicio de óptima calidad. En todo caso, la información se recopila de forma anónima y se elaboran informes de tendencias del Sitio Web sin identificar a usuarios individuales.</p>
            <p>Puede obtener más información sobre las cookies, la información sobre la privacidad, o consultar la descripción del tipo de cookies que se utiliza, sus principales características, periodo de expiración, etc. en el siguiente enlace:</p>
            <div className="rounded-2xl bg-[#fdf2f6] border border-[#f4d4e1] px-5 py-4">
              <p className="font-semibold text-[#14161b] mb-1">Google Analytics</p>
              <a
                href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage?hl=es-419"
                className="text-[#EB0A5C] hover:underline text-[14px] break-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage?hl=es-419
              </a>
            </div>
            <p>La entidad encargada del suministro de cookies podrá ceder esta información a terceros, siempre y cuando lo exija la ley o sea un tercero el que procese esta información para dichas entidades.</p>
          </Section>

          <Section n="3" title="Cookies de redes sociales">
            <p>VILIAN SEVERINOV ANGELOV incorpora plugins de redes sociales, que permiten acceder a las mismas a partir del Sitio Web. Por esta razón, las cookies de redes sociales pueden almacenarse en el navegador del Usuario. Los titulares de dichas redes sociales disponen de sus propias políticas de protección de datos y de cookies, siendo ellos mismos, en cada caso, responsables de sus propios ficheros y de sus propias prácticas de privacidad. El Usuario debe referirse a las mismas para informarse acerca de dichas cookies y, en su caso, del tratamiento de sus datos personales. Únicamente a título informativo se indican a continuación los enlaces en los que se pueden consultar dichas políticas de privacidad y/o de cookies:</p>
            <ul className="mt-3 space-y-2">
              {[
                ["Facebook", "https://www.facebook.com/policies/cookies/"],
                ["Twitter", "https://twitter.com/es/privacy"],
                ["Instagram", "https://help.instagram.com/1896641480634370?ref=ig"],
                ["YouTube", "https://policies.google.com/privacy?hl=es-419&gl=mx"],
                ["Pinterest", "https://policy.pinterest.com/es/privacy-policy"],
                ["LinkedIn", "https://www.linkedin.com/legal/cookie-policy?trk=hp-cookies"],
              ].map(([name, url]) => (
                <li key={name} className="flex items-center gap-3">
                  <span className="flex-none w-[7px] h-[7px] rounded-full bg-[#EB0A5C]" />
                  <span className="font-semibold text-[#2b2f37] min-w-[80px]">{name}:</span>
                  <a href={url} className="text-[#EB0A5C] hover:underline text-[14px] break-all" target="_blank" rel="noopener noreferrer">{url}</a>
                </li>
              ))}
            </ul>
          </Section>

          <Section n="4" title="Deshabilitar, rechazar y eliminar cookies">
            <p>El Usuario puede deshabilitar, rechazar y eliminar las cookies —total o parcialmente— instaladas en su dispositivo mediante la configuración de su navegador (entre los que se encuentran, por ejemplo, Chrome, Firefox, Safari, Explorer). En este sentido, los procedimientos para rechazar y eliminar las cookies pueden diferir de un navegador de Internet a otro.</p>
            <p>En consecuencia, el Usuario debe acudir a las instrucciones facilitadas por el propio navegador de Internet que esté utilizando. En el supuesto de que rechace el uso de cookies —total o parcialmente— podrá seguir usando el Sitio Web, si bien podrá tener limitada la utilización de algunas de las prestaciones del mismo.</p>
            <p className="text-[13.5px] text-[#9aa0aa] mt-4">Este documento de Política de Cookies ha sido creado mediante el generador de plantilla de política de cookies online el día 28/09/2021.</p>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  );
}

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
