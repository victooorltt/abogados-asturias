import type { Metadata } from "next";
import { Phone, CheckCircle2, ShieldCheck, Scale, Building2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Reclamación de Impagos en toda España | Abogados Asturias y Asociados",
  description:
    "Gestión integral de reclamación y cobro de deudas para empresas, entidades y particulares en todo el territorio nacional. Honorarios ligados a resultados.",
};

const clientTypes = [
  {
    title: "Entidades financieras & Multinacionales",
    description:
      "Gestión de grandes carteras de deuda y expedientes complejos con máxima agilidad procesal.",
  },
  {
    title: "Pymes & Empresas",
    description:
      "Recuperación de facturas impagadas, pagarés, cheques y créditos comerciales derivados de la actividad mercantil.",
  },
  {
    title: "Seguros de crédito",
    description:
      "Actuación en aquellos casos en que se tiene contratado un seguro de crédito que no acepta el siniestro.",
  },
  {
    title: "Particulares, colegios & colectivos",
    description:
      "Resolución de deudas contractuales, cuotas escolares impagadas y cualquier situación con deuda demostrable.",
  },
];

export default function ReclamacionImpagosPage() {
  return (
    <div className="bg-white text-[#111111]">
      {/* Hero */}
      <PageHero
        title="Reclamación de impagos en toda España"
        description="Tenemos una amplia experiencia en la gestión de reclamaciones de este tipo y contamos con la infraestructura necesaria para llevarla a cabo en todo el territorio nacional."
        imageSrc="/images/reclamacion-impagos.webp"
        imageAlt="Reclamación de impagos en toda España - Abogados Asturias"
        buttons={
          <Button href="/contacto" variant="primary" size="md">
            Consultar viabilidad
          </Button>
        }
      />

      {/* Ámbito y Cobertura */}
      <section className="py-16 lg:py-20 border-b border-zinc-100">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#111111]">
              Cobertura a todo tipo de acreedores
            </h2>
            <p className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed">
              Ayudamos a resolver impagos a todo tipo de clientes, ya que hemos gestionado con éxito miles de reclamaciones de entidades financieras, pymes, grandes empresas y multinacionales (incluyendo aquellos casos en que tienen contratado un seguro de crédito que no acepta el siniestro), particulares, colegios y cualquier situación en que se pueda demostrar la existencia de una deuda.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {clientTypes.map((client) => (
              <div
                key={client.title}
                className="p-6 rounded-xl border border-zinc-200/80 bg-white"
              >
                <h3 className="text-base font-semibold text-[#111111]">
                  {client.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
                  {client.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección con color de acento #2F3B69: Metodología, Viabilidad y Honorarios a Éxito */}
      <section className="bg-[#2F3B69] text-white py-16 lg:py-24 border-t border-[#232D50]">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Foto realista de despacho y finanzas - Más alta y grande */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative h-[420px] sm:h-[480px] lg:h-[540px] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                <img
                  src="/images/reclamacion-impagos-acento.webp"
                  alt="Despacho ejecutivo de reclamación de impagos y gestión mercantil"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>

            {/* Contenido */}
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold uppercase tracking-wider border border-white/20">
                Compromiso de Resultados
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white leading-tight">
                Honorarios ligados al resultado y gestión amistosa preferente
              </h2>
              <p className="text-base sm:text-lg text-white/90 leading-relaxed font-normal">
                Realizamos un estudio previo de cada caso para analizar su viabilidad real. Nunca iniciamos una reclamación judicial si no consideramos viable el cobro de la deuda.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                  <ShieldCheck className="w-5 h-5 text-blue-200 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-base font-semibold text-white">Estudio de viabilidad preliminar</h3>
                    <p className="text-sm text-white/80 mt-1">Auditamos la solvencia del deudor y sus bienes patrimoniales antes de incurrir en costes o procedimientos judiciales.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                  <Scale className="w-5 h-5 text-blue-200 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-base font-semibold text-white">Honorarios a éxito (Success Fee)</h3>
                    <p className="text-sm text-white/80 mt-1">Nuestros honorarios van ligados a la recuperación efectiva de su dinero, garantizando máxima alineación con sus intereses.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                  <CheckCircle2 className="w-5 h-5 text-blue-200 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-base font-semibold text-white">Gestión previa extrajudicial</h3>
                    <p className="text-sm text-white/80 mt-1">Negociamos de forma directa para resolver el impago fuera de los juzgados, ahorrando tiempo y costes procesales.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quiet CTA Band */}
      <section className="bg-zinc-50/60 py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#111111]">
              ¿Tiene facturas o deudas pendientes de cobro?
            </h2>
            <p className="mt-2 text-zinc-600 max-w-xl text-base">
              Presente su caso a nuestro equipo especializado. Realizaremos un análisis de viabilidad preliminar sin coste.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Button href="/contacto" variant="primary" size="lg">
              Contactar con el despacho
            </Button>
            <Button href="tel:985964050" variant="outline" size="lg">
              <Phone className="w-4 h-4 mr-2" />
              985 96 40 50
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
