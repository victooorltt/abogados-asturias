import type { Metadata } from "next";
import { Phone, ShieldCheck, Scale, HeartHandshake } from "lucide-react";
import PageHero from "@/components/PageHero";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Derecho de Familia y Sucesiones | Abogados Asturias y Asociados",
  description:
    "Especialistas en derecho de familia, divorcios, custodia, herencias, testamentos y compra de derechos hereditarios en Asturias y ámbito nacional.",
};

const familySpecialties = [
  {
    title: "Divorcios y separaciones",
    detail:
      "Medidas provisionales y definitivas, custodia compartida o exclusiva, pensiones de alimentos y compensatorias, modificación de medidas, incumplimientos de sentencias con su correspondiente ejecución, conflictos entre progenitores, etc.",
  },
  {
    title: "Relaciones paterno-filiales",
    detail:
      "Regulación y fijación de medidas respecto a hijos no matrimoniales, patria potestad y régimen de visitas.",
  },
  {
    title: "Parejas de hecho",
    detail:
      "Constitución, regulación patrimonial, disolución y resolución de controversias entre convivientes.",
  },
  {
    title: "Procedimientos con menores",
    detail:
      "Protección jurídica del menor, adopciones, tutelas y defensa de sus derechos fundamentales e intereses superiores.",
  },
  {
    title: "Violencia en el ámbito familiar",
    detail:
      "Asistencia letrada urgente, órdenes de protección, medidas cautelares y representación judicial continuada.",
  },
];

const successionServices = [
  "Impuesto de Sucesiones",
  "Impuesto de Donaciones",
  "Testamentos y planificación sucesoria",
  "Herencias con o sin testamento",
  "Aceptación y adjudicación de herencia",
  "Herencias conflictivas",
  "Impugnación de testamentos",
  "Reclamaciones de legítimas",
  "Conflictos entre herederos",
  "Partición judicial de herencia",
  "Donaciones",
  "Asesoramiento fiscal en sucesiones",
];

export default function DerechoFamiliaSucesionesPage() {
  return (
    <div className="bg-white text-[#111111]">
      {/* Hero */}
      <PageHero
        title="Derecho de familia y sucesiones"
        description="Somos expertos en derecho de familia y sucesiones, áreas especialmente sensibles en las que no solo está en juego el patrimonio, sino también las relaciones personales, familiares y emocionales."
        imageSrc="/images/derecho-familia-sucesiones.webp"
        imageAlt="Derecho de familia y sucesiones - Abogados Asturias"
        buttons={
          <Button href="/contacto" variant="primary" size="md">
            Consultar su caso
          </Button>
        }
      />

      {/* Enfoque Integral */}
      <section className="py-16 lg:py-20 border-b border-zinc-100">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-4">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#111111]">
                Enfoque integral y humano
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-5 text-base sm:text-lg text-zinc-600 leading-relaxed">
              <p>
                Ofrecemos soluciones legales eficaces, siempre desde la discreción y el rigor jurídico. Entendemos que en algunos momentos el asesoramiento en materia judicial no es suficiente y que es necesario un enfoque más integral que incluya el apoyo emocional y psicológico.
              </p>
              <p>
                Es por eso que contamos además con el apoyo profesional de psicólogos y terapeutas especializados en situaciones familiares difíciles. Nuestros expertos en derecho de familia trabajarán junto a los psicólogos y terapeutas para ofrecer una solución completa a cada caso, con el objetivo de conseguir la mejor solución posible para nuestros clientes en estas situaciones delicadas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Derecho de Familia */}
      <section className="py-16 lg:py-20 border-b border-zinc-100">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#111111]">
              Derecho de Familia
            </h2>
            <p className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed">
              Así en Derecho de Familia asesoramos y defendemos todo tipo de asuntos familiares, intentando siempre un acuerdo entre las partes previo a iniciar el procedimiento judicial pues desde nuestra experiencia, sabemos que en la mayoría de las ocasiones y siempre que se pueda es mucho más beneficioso para nuestro/a cliente. Entre nuestras especialidades se encuentran:
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {familySpecialties.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-xl border border-zinc-200/80 bg-white"
              >
                <h3 className="text-lg font-semibold text-[#111111]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Derecho de Sucesiones y Herencias */}
      <section className="py-16 lg:py-20 border-b border-zinc-100">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#111111]">
              Derecho de Sucesiones y Herencias
            </h2>
            <p className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed">
              Ofrecemos una clara seguridad jurídica y prevención de conflictos familiares, en todo el proceso sucesorio, tanto antes como después del fallecimiento, evitando problemas futuros y defendiendo tus derechos:
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-3.5 gap-x-8">
            {successionServices.map((service) => (
              <div key={service} className="flex items-center gap-3 py-1 text-zinc-700">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2F3B69] shrink-0" />
                <span className="text-sm font-medium leading-snug">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección con color de acento #2F3B69: Factor diferencial y Compra de Derechos Hereditarios */}
      <section className="bg-[#2F3B69] text-white py-16 lg:py-24 border-t border-[#232D50]">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Foto realista de consulta - Más alta y grande */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative h-[420px] sm:h-[480px] lg:h-[540px] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                <img
                  src="/images/derecho-familia-acento.webp"
                  alt="Mesa de consulta jurídica sobre herencias y acuerdos familiares"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>

            {/* Contenido */}
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold uppercase tracking-wider border border-white/20">
                Factor Diferencial Exclusivo
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white leading-tight">
                Compra de derechos hereditarios y resolución de conflictos
              </h2>
              <p className="text-base sm:text-lg text-white/90 leading-relaxed font-normal">
                Lo que nos diferencia verdaderamente de otros despachos es que, si se dan los requisitos y estudiado el asunto, podemos comprar los derechos hereditarios:
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                  <ShieldCheck className="w-5 h-5 text-blue-200 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-base font-semibold text-white">Desvinculación y tranquilidad</h3>
                    <p className="text-sm text-white/80 mt-1">Permite al heredero desvincularse de la herencia y de trámites sucesorios dilatados en el tiempo.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                  <Scale className="w-5 h-5 text-blue-200 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-base font-semibold text-white">Compensación económica directa</h3>
                    <p className="text-sm text-white/80 mt-1">Obtenga liquidez inmediata sin depender de acuerdos entre herederos ni juicios de partición.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                  <HeartHandshake className="w-5 h-5 text-blue-200 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-base font-semibold text-white">Prevención de disputas familiares</h3>
                    <p className="text-sm text-white/80 mt-1">Evita confrontaciones desgastantes con familiares con los que se mantiene una relación deteriorada.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA and Navigation */}
      <section className="bg-zinc-50/60 py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#111111]">
              ¿Tiene dudas sobre una herencia o situación familiar?
            </h2>
            <p className="mt-2 text-zinc-600 max-w-xl text-base">
              Póngase en contacto con nuestro equipo de abogados especialistas. Le atenderemos con máxima discreción y profesionalidad.
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
