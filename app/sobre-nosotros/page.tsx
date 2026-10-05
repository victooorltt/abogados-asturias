import type { Metadata } from "next";
import { ShieldCheck, Lock, Scale, HeartHandshake, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Sobre nosotros | Abogados Asturias y Asociados",
  description:
    "Nuestra firma de abogados fue fundada hace más de 25 años. Despacho multidisciplinar con cobertura integral y asesoría jurídica y fiscal en Asturias y ámbito nacional.",
};

interface TeamMember {
  name: string;
  role: string;
  photo: string;
}

const foundingPartners: TeamMember[] = [
  {
    name: "Cristina Cabo Cabello",
    role: "Fundadora, abogada & directora de la firma",
    photo: "/images/miembros/cristina-cabo.webp",
  },
  {
    name: "Gonzalo Palacios Bustamante",
    role: "Cofundador & abogado",
    photo: "/images/miembros/gonzalo-palacios.webp",
  },
];

const teamMembers: TeamMember[] = [
  {
    name: "Lucía Hernando Suárez",
    role: "Abogada",
    photo: "/images/miembros/lucia-hernando.webp",
  },
  {
    name: "Raquel Camisón García",
    role: "Abogada",
    photo: "/images/miembros/raquel-camison.webp",
  },
  {
    name: "José Jardón Iglesias",
    role: "Abogado",
    photo: "/images/miembros/jose-jardon.webp",
  },
  {
    name: "Sonia de La Paz Fernández",
    role: "Abogada",
    photo: "/images/miembros/sonia-de-la-paz.webp",
  },
  {
    name: "Beatriz Llaneza Fuente",
    role: "Abogada",
    photo: "/images/miembros/beatriz-llaneza.webp",
  },
  {
    name: "Lidia López Alonso",
    role: "Economista, fiscal & contable",
    photo: "/images/miembros/lidia-lopez.webp",
  },
  {
    name: "Jorge Antonio Sánchez Rodríguez",
    role: "Graduado Social & Fiscalista",
    photo: "/images/miembros/jorge-antonio.webp",
  },
  {
    name: "Emérita Díaz Suárez",
    role: "Contable & Fiscal",
    photo: "/images/miembros/emerita-diaz.webp",
  },
  {
    name: "Andrés Suero Aller",
    role: "Asesor de seguros",
    photo: "/images/miembros/andres-suero.webp",
  },
  {
    name: "Francisco Muradas Baladrón",
    role: "Abogado",
    photo: "/images/miembros/francisco-muradas.webp",
  },
];

const principles = [
  {
    title: "Confidencialidad",
    description:
      "Nos esforzamos por garantizar que la información de nuestros clientes se mantenga segura y privada en todo momento.",
    tag: "Secreto profesional y privacidad",
    icon: Lock,
  },
  {
    title: "Honestidad",
    description:
      "Asesoramos a nuestros clientes con claridad y sinceridad, brindándoles una opinión basada en nuestros conocimientos y experiencia.",
    tag: "Opinión jurídica sincera y realista",
    icon: Scale,
  },
  {
    title: "Lealtad",
    description:
      "Protegemos los intereses de nuestros clientes en todo momento y trabajamos para lograr la solución más favorable para su caso.",
    tag: "Defensa incondicional de tus intereses",
    icon: HeartHandshake,
  },
];

export default function SobreNosotrosPage() {
  return (
    <div className="bg-white text-[#111111]">
      {/* 1. Hero: Fotografía arquitectónica realista de las instalaciones */}
      <section className="relative min-h-[500px] lg:min-h-[580px] flex items-center overflow-hidden bg-white border-b border-zinc-200">
        <div className="absolute inset-0 lg:left-auto lg:right-0 lg:w-[64%] h-full">
          <img
            src="/images/sobre-nosotros-hero.webp"
            alt="Instalaciones y sede de Abogados Asturias y Asociados"
            className="w-full h-full object-cover object-center"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-white/20 lg:hidden" />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent to-35% hidden lg:block" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-6 py-24 lg:py-32 w-full">
          <div className="max-w-lg lg:max-w-xl space-y-4 lg:-translate-x-3">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#111111] leading-[1.12]">
              Sobre nosotros
            </h1>
            <p className="text-xl font-medium text-[#2F3B69]">
              Abogados Asturias y Asociados
            </p>
            <p className="pt-2 text-base sm:text-lg text-zinc-600 leading-relaxed max-w-lg">
              Nuestra firma de abogados fue fundada hace más de 25 años. A lo
              largo del tiempo, nuestro despacho ha ampliado su volumen, número
              de empleados y áreas de práctica para brindar una cobertura
              completa a nuestros clientes, incluyendo una asesoría fiscal
              dirigida por especialistas en la materia.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Historia & Enfoque con la fotografía del despacho */}
      <section className="border-b border-zinc-200/80 bg-zinc-50/50">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Foto de Cristina Cabo y Gonzalo Palacios */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-zinc-200/80 bg-white">
                <img
                  src="/images/sobre-nosotros.webp"
                  alt="Cristina Cabo Cabello y Gonzalo Palacios Bustamante en el despacho"
                  className="w-full h-auto object-cover object-center"
                  loading="lazy"
                />
                <div className="p-4 bg-white border-t border-zinc-100">
                  <p className="text-sm font-semibold text-[#111111]">
                    Cristina Cabo Cabello & Gonzalo Palacios Bustamante
                  </p>
                  <p className="text-xs text-[#2F3B69] font-medium mt-0.5">
                    Fundadores y directores de la firma
                  </p>
                </div>
              </div>
            </div>

            {/* Texto de Historia & Enfoque */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#111111]">
                Historia & Enfoque
              </h2>
              <div className="space-y-4 text-zinc-600 leading-relaxed text-base sm:text-lg">
                <p>
                  Hemos integrado a muchos profesionales de diversas áreas en
                  nuestro equipo, incluyendo abogados, economistas, administrativos y
                  gestores, que trabajan juntos para brindar una representación
                  legal efectiva y personalizada a nuestros clientes. Renovamos
                  nuestro compromiso cada año para brindar un trabajo bien hecho y
                  que nuestros clientes sientan que sus problemas están en las
                  mejores manos.
                </p>
                <p>
                  En nuestro despacho, nos esforzamos por utilizar las últimas
                  tecnologías para ser más accesibles y eficientes en la
                  representación legal de nuestros clientes. Estamos comprometidos
                  en brindar una asesoría legal clara y transparente, con información
                  actualizada y precisa sobre el estado de su caso y los costos
                  asociados.
                </p>
                <p>
                  En resumen, en Abogados Asturias y Asociados estamos comprometidos
                  en brindar una representación legal efectiva y personalizada a
                  nuestros clientes. Nos esforzamos por utilizar las últimas
                  tecnologías para ser más accesibles y eficientes en la
                  representación legal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Nuestro Equipo */}
      <section className="border-b border-zinc-100">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#111111]">
              Nuestro Equipo
            </h2>
            <p className="mt-3 text-base text-zinc-600 leading-relaxed">
              Un equipo multidisciplinar con más de 25 años de experiencia, comprometido con la excelencia jurídica y la cercanía con cada cliente.
            </p>
          </div>

          {/* Socios Fundadores: Tarjetas más grandes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
            {foundingPartners.map((partner) => (
              <div
                key={partner.name}
                className="group bg-white rounded-2xl border border-zinc-200/90 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-[#2F3B69]/5 hover:border-[#2F3B69]/30 transition-all duration-300 flex flex-col"
              >
                <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-zinc-100">
                  <img
                    src={partner.photo}
                    alt={partner.name}
                    className="h-full w-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3.5 py-1 text-xs font-semibold bg-[#2F3B69] text-white rounded-full shadow-sm">
                      Dirección
                    </span>
                  </div>
                </div>
                <div className="p-6 sm:p-7">
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#111111] group-hover:text-[#2F3B69] transition-colors">
                    {partner.name}
                  </h3>
                  <p className="mt-1.5 text-base font-medium text-[#2F3B69]">
                    {partner.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Resto del Equipo */}
          <div className="border-t border-zinc-200/80 pt-10">
            <h3 className="text-lg font-semibold text-[#111111] mb-6">
              Equipo Jurídico, Fiscal y Técnico
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-6">
              {teamMembers.map((member) => (
                <div key={member.name} className="flex flex-col group">
                  <div className="relative aspect-square overflow-hidden rounded-xl border border-zinc-200/80 bg-zinc-100 group-hover:border-[#2F3B69]/30 group-hover:shadow-md transition-all duration-300">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-3">
                    <h4 className="text-sm font-semibold text-[#111111] leading-snug group-hover:text-[#2F3B69] transition-colors">
                      {member.name}
                    </h4>
                    <p className="mt-0.5 text-xs text-zinc-500 leading-snug">
                      {member.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Nuestros principios fundamentales */}
      <section className="bg-zinc-50 border-t border-zinc-200">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start mb-12 lg:mb-14">
            <div className="lg:col-span-5">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#111111] leading-tight">
                Nuestros principios fundamentales
              </h2>
            </div>
            <div className="lg:col-span-7 lg:pt-2">
              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                En Abogados Asturias y Asociados, nuestra prioridad es establecer una
                relación de confianza con nuestros clientes. Como abogados,
                consideramos que es fundamental seguir principios éticos y
                profesionales que nos permitan proteger los derechos de nuestros
                clientes de forma efectiva. Trabajamos día a día para cumplir con
                estos principios, y así poder ofrecer a nuestros clientes el mejor
                servicio posible en todo momento.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {principles.map((principle) => {
              const Icon = principle.icon;
              return (
                <div
                  key={principle.title}
                  className="group relative bg-white border border-zinc-200/80 rounded-2xl p-7 lg:p-8 shadow-sm hover:shadow-xl hover:shadow-zinc-900/5 hover:border-[#2F3B69]/30 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="mb-6">
                      <div className="w-12 h-12 rounded-xl bg-[#2F3B69]/5 text-[#2F3B69] flex items-center justify-center border border-[#2F3B69]/10 group-hover:bg-[#2F3B69] group-hover:text-white transition-colors duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-[#111111] mb-3 group-hover:text-[#2F3B69] transition-colors">
                      {principle.title}
                    </h3>
                    <p className="text-sm text-zinc-600 leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                  <div className="mt-8 pt-5 border-t border-zinc-100 flex items-center gap-2 text-xs font-medium text-zinc-500">
                    <CheckCircle2 className="w-4 h-4 text-[#2F3B69] shrink-0" />
                    <span>{principle.tag}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
