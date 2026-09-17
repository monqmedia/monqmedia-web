import type { Metadata } from "next";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Aviso Legal",
  robots: { index: false, follow: false },
};

export default function AvisoLegal() {
  return (
    <>
      <Header />
      <main className="bg-white min-h-screen">
        <div className="max-w-[760px] mx-auto px-4 sm:px-8 py-12 sm:py-16 lg:py-20">
          <p className="text-[13px] font-bold tracking-[0.14em] uppercase text-[#EB0A5C] mb-4">Legal</p>
          <h1 className="text-[30px] sm:text-[38px] font-extrabold tracking-tight text-[#14161b] mb-2">
            Aviso Legal de Monq Media Labs S.L.
          </h1>
          <p className="text-[14px] text-[#9aa0aa] mb-10 pb-10 border-b border-[#f0f0f2]">
            Fecha de entrada en vigencia: 06/05/2024
          </p>

          <Section n="I" title="Información General">
            <p>En cumplimiento con el deber de información dispuesto en la Ley 34/2002 de Servicios de la Sociedad de la Información y el Comercio Electrónico (LSSI-CE) de 11 de julio, se facilitan a continuación los siguientes datos de información general de este sitio web:</p>
            <p>La titularidad de este sitio web, www.monqmedia.com, (en adelante, Sitio Web) la ostenta: <strong className={strong}>Monq Media Labs S.L.</strong>, con CIF: B93968956, y cuyos datos de contacto son:</p>
            <div className="rounded-2xl bg-[#fdf2f6] border border-[#f4d4e1] px-6 py-5 space-y-1">
              <p><strong className={strong}>Domicilio social:</strong> Calle Los Merineros, 25, 2° Dr., 42001, Soria, España</p>
              <p><strong className={strong}>Teléfono de contacto:</strong> 613062192</p>
              <p><strong className={strong}>Email de contacto:</strong> <a href="mailto:vili@monqmedia.com" className="text-[#EB0A5C] hover:underline">vili@monqmedia.com</a></p>
            </div>
          </Section>

          <Section n="II" title="Términos y Condiciones Generales de Uso">
            <h3 className={h3}>El objeto de las condiciones: El Sitio Web</h3>
            <p>El objeto de las presentes Condiciones Generales de Uso (en adelante, Condiciones) es regular el acceso y la utilización del Sitio Web. A los efectos de las presentes Condiciones se entenderá como Sitio Web: la apariencia externa de los interfaces de pantalla, tanto de forma estática como de forma dinámica, es decir, el árbol de navegación; y todos los elementos integrados tanto en los interfaces de pantalla como en el árbol de navegación (en adelante, Contenidos) y todos aquellos servicios o recursos en línea que en su caso ofrezca a los Usuarios (en adelante, Servicios).</p>
            <p>Monq Media Labs S.L. se reserva la facultad de modificar, en cualquier momento, y sin aviso previo, la presentación y configuración del Sitio Web y de los Contenidos y Servicios que en él pudieran estar incorporados. El Usuario reconoce y acepta que en cualquier momento Monq Media Labs S.L. pueda interrumpir, desactivar y/o cancelar cualquiera de estos elementos que se integran en el Sitio Web o el acceso a los mismos.</p>
            <p>El acceso al Sitio Web por el Usuario tiene carácter libre y, por regla general, es gratuito sin que el Usuario tenga que proporcionar una contraprestación para poder disfrutar de ello, salvo en lo relativo al coste de conexión a través de la red de telecomunicaciones suministrada por el proveedor de acceso que hubiere contratado el Usuario.</p>
            <p>La utilización de alguno de los Contenidos o Servicios del Sitio Web podrá hacerse mediante la suscripción o registro previo del Usuario.</p>

            <h3 className={h3}>El Usuario</h3>
            <p>El acceso, la navegación y uso del Sitio Web, así como por los espacios habilitados para interactuar entre los Usuarios, y el Usuario y Monq Media Labs S.L., como los comentarios y/o espacios de blogging, confiere la condición de Usuario, por lo que se aceptan, desde que se inicia la navegación por el Sitio Web, todas las Condiciones aquí establecidas, así como sus ulteriores modificaciones, sin perjuicio de la aplicación de la correspondiente normativa legal de obligado cumplimiento según el caso. Dada la relevancia de lo anterior, se recomienda al Usuario leerlas cada vez que visite el Sitio Web.</p>
            <p>El Sitio Web de Monq Media Labs S.L. proporciona gran diversidad de información, servicios y datos. El Usuario asume su responsabilidad para realizar un uso correcto del Sitio Web. Esta responsabilidad se extenderá a:</p>
            <ul className={ul}>
              <li>Un uso de la información, Contenidos y/o Servicios y datos ofrecidos por Monq Media Labs S.L. sin que sea contrario a lo dispuesto por las presentes Condiciones, la Ley, la moral o el orden público, o que de cualquier otro modo puedan suponer lesión de los derechos de terceros o del mismo funcionamiento del Sitio Web.</li>
              <li>La veracidad y licitud de las informaciones aportadas por el Usuario en los formularios extendidos por Monq Media Labs S.L. para el acceso a ciertos Contenidos o Servicios ofrecidos por el Sitio Web. En todo caso, el Usuario notificará de forma inmediata a Monq Media Labs S.L. acerca de cualquier hecho que permita el uso indebido de la información registrada en dichos formularios, tales como, pero no sólo, el robo, extravío, o el acceso no autorizado a identificadores y/o contraseñas, con el fin de proceder a su inmediata cancelación.</li>
            </ul>
            <p>Monq Media Labs S.L. se reserva el derecho de retirar todos aquellos comentarios y aportaciones que vulneren la ley, el respeto a la dignidad de la persona, que sean discriminatorios, xenófobos, racistas, pornográficos, spamming, que atenten contra la juventud o la infancia, el orden o la seguridad pública o que, a su juicio, no resultaran adecuados para su publicación.</p>
            <p>En cualquier caso, Monq Media Labs S.L. no será responsable de las opiniones vertidas por los Usuarios a través de comentarios u otras herramientas de blogging o de participación que pueda haber.</p>
            <p>El mero acceso a este Sitio Web no supone entablar ningún tipo de relación de carácter comercial entre Monq Media Labs S.L. y el Usuario.</p>
            <p>El Usuario declara ser mayor de edad y disponer de la capacidad jurídica suficiente para vincularse por las presentes Condiciones. Por lo tanto, este Sitio Web de Monq Media Labs S.L. no se dirige a menores de edad. Monq Media Labs S.L. declina cualquier responsabilidad por el incumplimiento de este requisito.</p>
            <p>El Sitio Web está dirigido principalmente a Usuarios residentes en España. Monq Media Labs S.L. no asegura que el Sitio Web cumpla con legislaciones de otros países, ya sea total o parcialmente. Si el Usuario reside o tiene su domiciliado en otro lugar y decide acceder y/o navegar en el Sitio Web lo hará bajo su propia responsabilidad, deberá asegurarse de que tal acceso y navegación cumple con la legislación local que le es aplicable, no asumiendo Monq Media Labs S.L. responsabilidad alguna que se pueda derivar de dicho acceso.</p>
          </Section>

          <Section n="III" title="Acceso y Navegación en el Sitio Web: Exclusión de Garantías y Responsabilidad">
            <p>Monq Media Labs S.L. no garantiza la continuidad, disponibilidad y utilidad del Sitio Web, ni de los Contenidos o Servicios. Monq Media Labs S.L. hará todo lo posible por el buen funcionamiento del Sitio Web, sin embargo, no se responsabiliza ni garantiza que el acceso a este Sitio Web no vaya a ser ininterrumpido o que esté libre de error.</p>
            <p>Tampoco se responsabiliza o garantiza que el contenido o software al que pueda accederse a través de este Sitio Web, esté libre de error o cause un daño al sistema informático (software y hardware) del Usuario.</p>
            <p>En ningún caso Monq Media Labs S.L. será responsable por las pérdidas, daños o perjuicios de cualquier tipo que surjan por el acceso, navegación y el uso del Sitio Web, incluyéndose, pero no limitándose, a los ocasionados a los sistemas informáticos o los provocados por la introducción de virus.</p>
            <p>Monq Media Labs S.L. tampoco se hace responsable de los daños que pudiesen ocasionarse a los usuarios por un uso inadecuado de este Sitio Web. En particular, no se hace responsable en modo alguno de las caídas, interrupciones, falta o defecto de las telecomunicaciones que pudieran ocurrir.</p>
          </Section>

          <Section n="IV" title="Política de Enlaces">
            <p>Se informa que el Sitio Web de Monq Media Labs S.L. pone o puede poner a disposición de los Usuarios medios de enlace (como, entre otros, links, banners, botones), directorios y motores de búsqueda que permiten a los Usuarios acceder a sitios web pertenecientes y/o gestionados por terceros.</p>
            <p>La instalación de estos enlaces, directorios y motores de búsqueda en el Sitio Web tiene por objeto facilitar a los Usuarios la búsqueda de y acceso a la información disponible en Internet, sin que pueda considerarse una sugerencia, recomendación o invitación para la visita de los mismos.</p>
            <p>Monq Media Labs S.L. no ofrece ni comercializa por sí ni por medio de terceros los productos y/o servicios disponibles en dichos sitios enlazados.</p>
            <p>Asimismo, tampoco garantizará la disponibilidad técnica, exactitud, veracidad, validez o legalidad de sitios ajenos a su propiedad a los que se pueda acceder por medio de los enlaces.</p>
            <p>Monq Media Labs S.L. en ningún caso revisará o controlará el contenido de otros sitios web, así como tampoco aprueba, examina ni hace propios los productos y servicios, contenidos, archivos y cualquier otro material existente en los referidos sitios enlazados.</p>
            <p>Monq Media Labs S.L. no asume ninguna responsabilidad por los daños y perjuicios que pudieran producirse por el acceso, uso, calidad o licitud de los contenidos, comunicaciones, opiniones, productos y servicios de los sitios web no gestionados por Monq Media Labs S.L. y que sean enlazados en este Sitio Web.</p>
            <p>El Usuario o tercero que realice un hipervínculo desde una página web de otro, distinto, sitio web al Sitio Web de Monq Media Labs S.L. deberá saber que:</p>
            <ul className={ul}>
              <li>No se permite la reproducción —total o parcialmente— de ninguno de los Contenidos y/o Servicios del Sitio Web sin autorización expresa de Monq Media Labs S.L..</li>
              <li>No se permite tampoco ninguna manifestación falsa, inexacta o incorrecta sobre el Sitio Web de Monq Media Labs S.L., ni sobre los Contenidos y/o Servicios del mismo.</li>
              <li>A excepción del hipervínculo, el sitio web en el que se establezca dicho hiperenlace no contendrá ningún elemento, de este Sitio Web, protegido como propiedad intelectual por el ordenamiento jurídico español, salvo autorización expresa de Monq Media Labs S.L..</li>
              <li>El establecimiento del hipervínculo no implicará la existencia de relaciones entre Monq Media Labs S.L. y el titular del sitio web desde el cual se realice, ni el conocimiento y aceptación de Monq Media Labs S.L. de los contenidos, servicios y/o actividades ofrecidos en dicho sitio web, y viceversa.</li>
            </ul>
          </Section>

          <Section n="V" title="Propiedad Intelectual e Industrial">
            <p>Monq Media Labs S.L. por sí o como parte cesionaria, es titular de todos los derechos de propiedad intelectual e industrial del Sitio Web, así como de los elementos contenidos en el mismo (a título enunciativo y no exhaustivo, imágenes, sonido, audio, vídeo, software o textos, marcas o logotipos, combinaciones de colores, estructura y diseño, selección de materiales usados, programas de ordenador necesarios para su funcionamiento, acceso y uso, etc.). Serán, por consiguiente, obras protegidas como propiedad intelectual por el ordenamiento jurídico español, siéndoles aplicables tanto la normativa española y comunitaria en este campo, como los tratados internacionales relativos a la materia y suscritos por España.</p>
            <p>Todos los derechos reservados. En virtud de lo dispuesto en la Ley de Propiedad Intelectual, quedan expresamente prohibidas la reproducción, la distribución y la comunicación pública, incluida su modalidad de puesta a disposición, de la totalidad o parte de los contenidos de esta página web, con fines comerciales, en cualquier soporte y por cualquier medio técnico, sin la autorización de Monq Media Labs S.L..</p>
            <p>El Usuario se compromete a respetar los derechos de propiedad intelectual e industrial de Monq Media Labs S.L.. Podrá visualizar los elementos del Sitio Web o incluso imprimirlos, copiarlos y almacenarlos en el disco duro de su ordenador o en cualquier otro soporte físico siempre y cuando sea, exclusivamente, para su uso personal. El Usuario, sin embargo, no podrá suprimir, alterar, o manipular cualquier dispositivo de protección o sistema de seguridad que estuviera instalado en el Sitio Web.</p>
            <p>En caso de que el Usuario o tercero considere que cualquiera de los Contenidos del Sitio Web suponga una violación de los derechos de protección de la propiedad intelectual, deberá comunicarlo inmediatamente a Monq Media Labs S.L. a través de los datos de contacto del apartado de INFORMACIÓN GENERAL de este Aviso Legal y Condiciones Generales de Uso.</p>
          </Section>

          <Section n="VI" title="Acciones Legales, Legislación Aplicable y Jurisdicción">
            <p>Monq Media Labs S.L. se reserva la facultad de presentar las acciones civiles o penales que considere necesarias por la utilización indebida del Sitio Web y Contenidos, o por el incumplimiento de las presentes Condiciones.</p>
            <p>La relación entre el Usuario y Monq Media Labs S.L. se regirá por la normativa vigente y de aplicación en el territorio español. De surgir cualquier controversia en relación con la interpretación y/o a la aplicación de estas Condiciones las partes someterán sus conflictos a la jurisdicción ordinaria sometiéndose a los jueces y tribunales que correspondan conforme a derecho.</p>
            <p className="text-[13.5px] text-[#9aa0aa] mt-4">Este documento de Aviso Legal y Condiciones Generales de uso del sitio web ha sido creado mediante el generador de plantilla de aviso legal y condiciones de uso online el día 28/09/2021.</p>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  );
}

const h3 = "text-[15.5px] font-bold text-[#14161b] mt-6 mb-2";
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
