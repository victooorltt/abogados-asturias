import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Servicios | Abogados Asturias y Asociados",
  description:
    "En qué somos expertos · A qué nos dedicamos. Despacho multidisciplinar en Asturias con cobertura nacional en derecho de familia y sucesiones, reclamación de impagos y derecho civil general.",
};

const mainServices = [
  {
    title: "Derecho de familia y sucesiones",
    description:
      "Incluye la gestión de separaciones y divorcios, así como la tramitación de herencias, testamentos y liquidación de impuestos.",
    image: "/images/derecho-familia-sucesiones.webp",
    link: "/servicios/derecho-de-familia-y-sucesiones",
  },
  {
    title: "Reclamación de impagos en toda España",
    description:
      "Proceso importante en el mundo de los negocios, contamos con la infraestructura para llevarla a cabo en todo el territorio nacional.",
    image: "/images/reclamacion-impagos.webp",
    link: "/servicios/reclamacion-impagos",
  },
  {
    title: "Derecho civil general",
    description:
      "Gestionamos arrendamientos, Accidentes de Trafico, Responsabilidad Civil contra Aseguradoras",
    image: "/images/derecho-civil-general.webp",
    link: "/servicios/derecho-civil-general",
  },
];

const additionalAreas = [
  {
    title: "Derecho penal",
    description:
      "Defensa y acusación letrada en toda clase de procedimientos penales, delitos y juicios ante los Juzgados y Tribunales.",
  },
  {
    title: "Derecho de extranjería",
    description:
      "Tramitación de permisos de residencia, autorizaciones de trabajo, expedientes de nacionalidad y recursos administrativos.",
  },
  {
    title: "Derecho laboral y de la Seguridad Social",
    description:
      "Asesoramiento y defensa letrada en despidos, reclamaciones salariales, incapacidades y procedimientos de la Seguridad Social.",
  },
  {
    title: "Avanza Economistas – Asesoría",
    description:
      "Servicio integral de asesoría fiscal, tributaria y contable para autónomos, particulares y sociedades mercantiles.",
  },
];

export default function ServiciosPage() {
  return (
    <div className="bg-white text-[#111111]">
      {/* 1. Hero: Estilo Inicio con imagen a sangre, overlay azul marino #2F3B69 y contenido centrado */}
      <section className="relative overflow-hidden bg-[#2F3B69] min-h-[560px] sm:min-h-[620px] lg:min-h-[700px] flex items-center justify-center border-b border-[#232D50]">
        {/* Foto de fondo con opacidad natural */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <img
            src="/images/servicios-hero.webp"
            alt="Servicios jurídicos - Abogados Asturias y Asociados"
            fetchPriority="high"
            className="h-full w-full object-cover object-center"
          />
          {/* Overlay azul marino corporativo (mismo degradado de Inicio) */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#1C2442]/75 via-[#2F3B69]/55 to-[#1C2442]/80" />
        </div>

        {/* Contenido centrado */}
        <div className="relative z-10 mx-auto max-w-5xl px-6 py-24 sm:py-28 lg:py-36 text-center w-full">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.12] drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]">
              Servicios
            </h1>
            <p className="mt-4 text-xl sm:text-2xl text-blue-100 font-medium drop-shadow-[0_1px_6px_rgba(0,0,0,0.3)]">
              En qué somos expertos · A qué nos dedicamos
            </p>
            <p className="mt-4 text-base sm:text-lg text-white/90 leading-relaxed font-normal max-w-2xl mx-auto drop-shadow-[0_1px_6px_rgba(0,0,0,0.3)]">
              Más de 25 años ofreciendo asesoramiento jurídico cercano y soluciones eficaces para particulares y empresas en Asturias y toda España.
            </p>

            {/* CTAs adaptados a fondo oscuro */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-zinc-100 text-[#2F3B69] font-semibold px-8 py-3.5 text-base rounded-xl shadow-lg transition-all hover:shadow-xl w-full sm:w-auto"
              >
                <span>Solicitar consulta</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
              <a
                href="tel:985964050"
                className="inline-flex items-center justify-center gap-2 border border-white/40 hover:border-white text-white hover:bg-white/10 font-medium px-8 py-3.5 text-base rounded-xl transition-all w-full sm:w-auto"
              >
                <Phone className="w-4 h-4 mr-1 text-white" />
                <span>Llámanos: 985 96 40 50</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-16 lg:py-24 border-b border-zinc-100">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#111111]">
              Áreas principales de actuación
            </h2>
            <p className="mt-3 text-base text-zinc-600 leading-relaxed">
              Atendemos cada asunto con el máximo rigor jurídico y dedicación profesional, ofreciendo soluciones eficaces adaptadas a cada circunstancia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mainServices.map((service) => (
              <div
                key={service.link}
                className="group flex flex-col rounded-2xl border border-zinc-200/80 bg-white overflow-hidden shadow-sm hover:border-zinc-300 transition-all duration-200"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100 border-b border-zinc-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 sm:p-7 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold text-[#111111] group-hover:text-[#2F3B69] transition-colors leading-snug">
                    <Link href={service.link} className="focus:outline-none">
                      {service.title}
                    </Link>
                  </h3>
                  <p className="mt-3 text-zinc-600 text-sm leading-relaxed flex-1">
                    {service.description}
                  </p>
                  <div className="mt-6 pt-5 border-t border-zinc-100">
                    <Link
                      href={service.link}
                      className="inline-flex items-center text-sm font-medium text-[#2F3B69] hover:text-[#232D50] group-hover:translate-x-0.5 transition-all"
                    >
                      <span>Ver especialidad</span>
                      <ArrowRight className="w-4 h-4 ml-1.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Practice Areas */}
      <section className="py-16 lg:py-24 border-b border-zinc-100">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#111111]">
              Otras áreas de práctica
            </h2>
            <p className="mt-3 text-base text-zinc-600 leading-relaxed">
              Nuestro equipo multidisciplinar y colaboradores abarcan disciplinas complementarias del derecho y la asesoría económica.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalAreas.map((area) => (
              <div
                key={area.title}
                className="p-6 rounded-xl border border-zinc-200/80 bg-white hover:border-zinc-300 transition-colors"
              >
                <h3 className="text-lg font-semibold text-[#111111]">
                  {area.title}
                </h3>
                <p className="mt-2.5 text-sm text-zinc-600 leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quiet CTA Band */}
      <section className="bg-zinc-50/60 py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#111111]">
              Consúltenos su caso sin compromiso
            </h2>
            <p className="mt-2 text-zinc-600 max-w-xl text-base">
              Examinamos su caso con rigor y confidencialidad. Solicite cita en nuestras sedes de Oviedo y Avilés o consúltenos a distancia.
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
