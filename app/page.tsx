import React from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import {
  ArrowRight,
  Phone,
  ShieldCheck,
  Users,
  Scale,
  MapPin,
  Award,
  CheckCircle2,
  HeartHandshake,
  Star,
  Lock,
} from "lucide-react";

const REVIEWS = [
  {
    name: "Isabel rodriguez gonzalez",
    initial: "I",
    date: "Hace 6 meses",
    text: "Acudí por la herencia de un familiar y han gestionado todo de forma muy profesional y muy rápido. Muy buenas abogadas, las recomiendo 100%.",
  },
  {
    name: "Raquel Camison",
    initial: "R",
    date: "Hace 6 meses",
    text: "La verdad es que es un despacho muy completo, porque tienen profesionales para cada especialidad y eso da mucha tranquilidad. Para la rama de familia en concreto son unos crack. Desde luego se convierte en un sitio de confianza al que acudir para cualquier cosa legal, porque además no te llevas ninguna sorpresa ni durante el procedimiento ni con los honorarios, son muy claros",
  },
  {
    name: "sergio cabo",
    initial: "S",
    date: "Hace 6 meses",
    text: "Me llevaron 2 impuestos de sucesiones, me llevan todos los arrendamientos de mis pisos y el divorcio de mi hermano. Son los mejores abogados sin duda y obviamente todos los problemas jurïdicos q tenga se los llevaré a ellos.Fran,Cristina, Raquel, Marïa,Sonia, Lucïa, José, Jorge.......es que son todos de 10",
  },
  {
    name: "Laura",
    initial: "L",
    date: "Hace 7 meses",
    text: "Trato excelente, se nota que son profesionales de la abogacía con las que tuve una experiencia excelente, desde el primer momento demostraron una gran profesionalidad, cercanía y compromiso con mi caso.",
  },
];

const BENEFITS = [
  {
    icon: Award,
    title: "Más de 25 años de ejercicio",
    subtitle: "Eficacia y solvencia contrastada",
    description:
      "Profesionales con más de veinticinco años de ejercicio, reconocidos por su eficacia, solvencia y habilidad resolutiva.",
  },
  {
    icon: Users,
    title: "Equipo multidisciplinar",
    subtitle: "Especialistas en cada materia legal",
    description:
      "Despacho numeroso donde cada letrado está altamente especializado en una materia legal específica.",
  },
  {
    icon: HeartHandshake,
    title: "Vía judicial y amistosa",
    subtitle: "Acuerdos y defensa en tribunales",
    description:
      "Priorizamos acuerdos beneficiosos y defendemos tus derechos con rigor en los tribunales cuando es necesario.",
  },
  {
    icon: MapPin,
    title: "Oviedo, Avilés y toda España",
    subtitle: "Infraestructura en todo el territorio",
    description:
      "Sedes centrales en Oviedo y Avilés, con la infraestructura adecuada para actuar en toda España.",
  },
];

export default function HomePage() {
  return (
    <div className="bg-white text-[#111111]">
      {/* 1. Hero: Fondo fotográfico con overlay azul marino corporativo #2F3B69 y contenido blanco de alto contraste */}
      <section className="relative overflow-hidden bg-[#2F3B69] min-h-[580px] lg:min-h-[660px] flex items-center justify-center border-b border-[#232D50]">
        {/* Foto del equipo con opacidad natural (sin lavado) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <img
            src="/images/hero-equipo.webp"
            alt="Equipo Abogados Asturias y Asociados"
            fetchPriority="high"
            className="h-full w-full object-cover object-center"
          />
          {/* Overlay azul marino corporativo equilibrado: más suave en el centro para dar protagonismo a la foto del equipo */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#1C2442]/75 via-[#2F3B69]/55 to-[#1C2442]/80" />
        </div>

        {/* Contenedor de contenido centrado */}
        <div className="relative z-10 mx-auto max-w-5xl px-6 py-20 lg:py-28 text-center w-full">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.12] drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]">
              ABOGADOS ASTURIAS Y ASOCIADOS
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/95 leading-relaxed font-normal max-w-3xl mx-auto drop-shadow-[0_1px_6px_rgba(0,0,0,0.3)]">
              Más de 25 años ofreciendo asesoramiento jurídico cercano y soluciones eficaces para particulares y empresas en Asturias y toda España.
            </p>

            {/* Botones de acción centrados adaptados a fondo oscuro */}
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

          {/* Fila de beneficios bajo los botones: en una sola línea en desktop (sin saltos), 2 y 2 en móvil con alto contraste */}
          <div className="mt-12 pt-8 border-t border-white/20 max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:flex md:flex-nowrap items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 text-xs sm:text-sm font-medium text-white/90 whitespace-nowrap">
              <div className="inline-flex items-center justify-center gap-2">
                <Award className="h-4 w-4 text-blue-200 shrink-0" />
                <span className="text-white/95">+25 Años de experiencia</span>
              </div>
              <div className="inline-flex items-center justify-center gap-2">
                <Users className="h-4 w-4 text-blue-200 shrink-0" />
                <span className="text-white/95">Equipo multidisciplinar</span>
              </div>
              <div className="inline-flex items-center justify-center gap-2">
                <Scale className="h-4 w-4 text-blue-200 shrink-0" />
                <span className="text-white/95">Soluciones integrales</span>
              </div>
              <div className="inline-flex items-center justify-center gap-2">
                <MapPin className="h-4 w-4 text-blue-200 shrink-0" />
                <span className="text-white/95">Oviedo y Avilés</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Sección de Beneficios / Compromisos de valor (Estilo Bostak con pequeños logos e iconos) */}
      <section className="bg-zinc-50 border-b border-zinc-200/80 py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#111111]">
              Por qué confiar en nuestro despacho
            </h2>
            <p className="mt-3 text-base text-zinc-600">
              Un equipo cohesionado y preparado para proteger tus intereses con rigor ético y profesional
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {BENEFITS.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white border border-zinc-200/80 p-6 rounded-2xl shadow-xs hover:border-[#2F3B69]/40 transition-colors"
                >
                  <div className="inline-flex p-3 rounded-xl bg-[#2F3B69]/10 text-[#2F3B69] mb-5">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-semibold text-[#111111] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Sección Presentación / Dirección de la firma */}
      <section className="py-16 lg:py-24 bg-white border-b border-zinc-100">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-4 flex justify-center lg:justify-start">
              <div className="relative w-full max-w-sm aspect-[4/5] rounded-2xl overflow-hidden border border-zinc-200 shadow-sm bg-zinc-100">
                <img
                  src="/images/miembros/cristina-cabo.webp"
                  alt="Cristina Cabo — Directora de la firma"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
            <div className="lg:col-span-8 space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#111111]">
                  ABOGADOS ASTURIAS Y ASOCIADOS
                </h2>
              </div>

              <p className="text-base sm:text-lg text-zinc-600 leading-relaxed">
                Somos un despacho de abogados muy numeroso, multidisciplinar y eficaz, donde cada uno de nosotros está altamente especializado en una materia legal específica. Contamos con profesionales con más de veinticinco años de ejercicio, reconocidos por su eficacia y habilidad resolutiva. Además, nos caracterizamos por la incorporación de abogados jóvenes, dinámicos y entusiastas, siempre dispuestos a afrontar nuevos retos y con un ímpetu incansable por brindar un servicio de calidad. Juntos, formamos un equipo cohesionado y completo, preparado para ofrecer soluciones legales integrales, efectivas y exitosas a nuestros clientes. Damos soluciones tanto judiciales como amistosas no sólo en Asturias sino en todo el territorio nacional.
              </p>

              <div className="pt-2 border-t border-zinc-100">
                <p className="text-base font-semibold text-[#111111]">
                  Cristina Cabo
                </p>
                <p className="text-sm text-zinc-500">
                  Directora de la firma
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Servicios destacados ("En qué somos expertos / A qué nos dedicamos") */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12">
            <h2 className="text-2xl lg:text-3xl font-semibold tracking-tight text-[#111111]">
              Servicios destacados
            </h2>
            <p className="mt-2 text-base text-zinc-600">
              En qué somos expertos / A qué nos dedicamos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="flex flex-col bg-white border border-zinc-200 rounded-2xl overflow-hidden shadow-sm hover:border-zinc-300 transition-colors">
              <div className="h-52 w-full overflow-hidden bg-zinc-100">
                <img
                  src="/images/derecho-familia-sucesiones.webp"
                  alt="Derecho de familia y sucesiones"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-lg font-semibold text-[#111111] mb-2">
                  Derecho de familia y sucesiones
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed mb-6 flex-1">
                  Incluye la gestión de separaciones y divorcios, así como la tramitación de herencias, testamentos y liquidación de impuestos.
                </p>
                <div>
                  <Link
                    href="/servicios/derecho-de-familia-y-sucesiones"
                    className="inline-flex items-center text-sm font-medium text-[#2F3B69] hover:underline"
                  >
                    Más información
                    <span aria-hidden="true" className="ml-1">→</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col bg-white border border-zinc-200 rounded-2xl overflow-hidden shadow-sm hover:border-zinc-300 transition-colors">
              <div className="h-52 w-full overflow-hidden bg-zinc-100">
                <img
                  src="/images/reclamacion-impagos.webp"
                  alt="Reclamación de impagos en toda España"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-lg font-semibold text-[#111111] mb-2">
                  Reclamación de impagos en toda España
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed mb-6 flex-1">
                  Proceso importante en el mundo de los negocios, contamos con la infraestructura para llevarla a cabo en todo el territorio nacional.
                </p>
                <div>
                  <Link
                    href="/servicios/reclamacion-impagos"
                    className="inline-flex items-center text-sm font-medium text-[#2F3B69] hover:underline"
                  >
                    Más información
                    <span aria-hidden="true" className="ml-1">→</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col bg-white border border-zinc-200 rounded-2xl overflow-hidden shadow-sm hover:border-zinc-300 transition-colors">
              <div className="h-52 w-full overflow-hidden bg-zinc-100">
                <img
                  src="/images/derecho-civil-general.webp"
                  alt="Derecho civil general"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-lg font-semibold text-[#111111] mb-2">
                  Derecho civil general
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed mb-6 flex-1">
                  Gestionamos arrendamientos, Accidentes de Trafico, Responsabilidad Civil contra Aseguradoras
                </p>
                <div>
                  <Link
                    href="/servicios/derecho-civil-general"
                    className="inline-flex items-center text-sm font-medium text-[#2F3B69] hover:underline"
                  >
                    Más información
                    <span aria-hidden="true" className="ml-1">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Principios fundamentales */}
      <section className="py-16 lg:py-24 bg-zinc-50 border-y border-zinc-200">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start mb-12 lg:mb-14">
            <div className="lg:col-span-5">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#111111] leading-tight">
                Nuestros principios fundamentales
              </h2>
            </div>
            <div className="lg:col-span-7 lg:pt-2">
              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                En Abogados Asturias y Asociados, nuestra prioridad es establecer una relación de confianza con nuestros clientes. Como abogados, consideramos que es fundamental seguir principios éticos y profesionales que nos permitan proteger los derechos de nuestros clientes de forma efectiva. Trabajamos día a día para cumplir con estos principios, y así poder ofrecer a nuestros clientes el mejor servicio posible en todo momento.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Confidencialidad */}
            <div className="group relative bg-white border border-zinc-200/80 rounded-2xl p-7 lg:p-8 shadow-sm hover:shadow-xl hover:shadow-zinc-900/5 hover:border-[#2F3B69]/30 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#2F3B69]/5 text-[#2F3B69] flex items-center justify-center border border-[#2F3B69]/10 group-hover:bg-[#2F3B69] group-hover:text-white transition-colors duration-300">
                    <Lock className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-[#111111] mb-3 group-hover:text-[#2F3B69] transition-colors">
                  Confidencialidad
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  Nos esforzamos por garantizar que la información de nuestros clientes se mantenga segura y privada en todo momento.
                </p>
              </div>
              <div className="mt-8 pt-5 border-t border-zinc-100 flex items-center gap-2 text-xs font-medium text-zinc-500">
                <CheckCircle2 className="w-4 h-4 text-[#2F3B69] shrink-0" />
                <span>Secreto profesional y privacidad</span>
              </div>
            </div>

            {/* Honestidad */}
            <div className="group relative bg-white border border-zinc-200/80 rounded-2xl p-7 lg:p-8 shadow-sm hover:shadow-xl hover:shadow-zinc-900/5 hover:border-[#2F3B69]/30 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#2F3B69]/5 text-[#2F3B69] flex items-center justify-center border border-[#2F3B69]/10 group-hover:bg-[#2F3B69] group-hover:text-white transition-colors duration-300">
                    <Scale className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-[#111111] mb-3 group-hover:text-[#2F3B69] transition-colors">
                  Honestidad
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  Asesoramos a nuestros clientes con claridad y sinceridad, brindándoles una opinión basada en nuestros conocimientos y experiencia.
                </p>
              </div>
              <div className="mt-8 pt-5 border-t border-zinc-100 flex items-center gap-2 text-xs font-medium text-zinc-500">
                <CheckCircle2 className="w-4 h-4 text-[#2F3B69] shrink-0" />
                <span>Opinión jurídica sincera y realista</span>
              </div>
            </div>

            {/* Lealtad */}
            <div className="group relative bg-white border border-zinc-200/80 rounded-2xl p-7 lg:p-8 shadow-sm hover:shadow-xl hover:shadow-zinc-900/5 hover:border-[#2F3B69]/30 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#2F3B69]/5 text-[#2F3B69] flex items-center justify-center border border-[#2F3B69]/10 group-hover:bg-[#2F3B69] group-hover:text-white transition-colors duration-300">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-[#111111] mb-3 group-hover:text-[#2F3B69] transition-colors">
                  Lealtad
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  Protegemos los intereses de nuestros clientes en todo momento y trabajamos para lograr la solución más favorable para su caso.
                </p>
              </div>
              <div className="mt-8 pt-5 border-t border-zinc-100 flex items-center gap-2 text-xs font-medium text-zinc-500">
                <CheckCircle2 className="w-4 h-4 text-[#2F3B69] shrink-0" />
                <span>Defensa incondicional de tus intereses</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Compromiso de Rigor y Transparencia (Fondo color de acento #2F3B69 con foto realista de despacho sin personas) */}
      <section className="bg-[#2F3B69] text-white py-16 lg:py-24 border-t border-[#232D50]">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Foto realista del despacho sin personas */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/20 order-2 lg:order-1">
              <img
                src="/images/compromiso-despacho.webp"
                alt="Despacho profesional y biblioteca jurídica de Abogados Asturias"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Contenido explicativo con valor real */}
            <div className="space-y-8 order-1 lg:order-2">
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white leading-tight">
                  Transparencia, rigor y defensa de tus intereses
                </h2>
                <p className="mt-4 text-base sm:text-lg text-white/80 leading-relaxed">
                  En nuestro despacho creemos que la tranquilidad jurídica empieza por un diagnóstico sincero. Analizamos la viabilidad técnica y legal de tu asunto antes de dar cualquier paso.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white border border-white/15 mt-0.5">
                    <CheckCircle2 className="h-5 w-5 text-blue-200" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white">
                      Estudio previo de viabilidad
                    </h3>
                    <p className="mt-1 text-sm text-white/75 leading-relaxed">
                      Evaluamos con objetividad las posibilidades reales de éxito judicial y extrajudicial antes de iniciar cualquier reclamación o trámite.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white border border-white/15 mt-0.5">
                    <ShieldCheck className="h-5 w-5 text-blue-200" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white">
                      Claridad absoluta en honorarios
                    </h3>
                    <p className="mt-1 text-sm text-white/75 leading-relaxed">
                      Información precisa desde la primera toma de contacto. Presupuestos transparentes para que no te lleves sorpresas durante el procedimiento.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white border border-white/15 mt-0.5">
                    <Scale className="h-5 w-5 text-blue-200" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white">
                      Acompañamiento especializado directo
                    </h3>
                    <p className="mt-1 text-sm text-white/75 leading-relaxed">
                      Trato directo y personal con el letrado responsable de tu materia, con información continua sobre el estado de tu expediente.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#2F3B69] hover:bg-zinc-100 font-semibold px-8 py-3.5 text-base rounded-xl shadow-lg transition-all hover:shadow-xl"
                >
                  <span>Consultar mi caso</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Casos de éxito y opiniones de clientes (Estilo ltevo-web: alargadas, elegantes, 4 columnas) */}
      <section className="py-20 lg:py-28 border-t border-zinc-200 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#111111]">
              Casos de éxito y opiniones de clientes
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {REVIEWS.map((review) => (
              <div
                key={review.name}
                className="bg-white border border-zinc-200/90 rounded-xl p-6 sm:p-7 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Top row: 5 Stars */}
                  <div className="flex items-center gap-1 mb-5">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="text-amber-400"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-sm leading-relaxed text-zinc-700 mb-6">
                    &ldquo;{review.text}&rdquo;
                  </p>
                </div>

                {/* Author Info */}
                <div className="pt-4 border-t border-zinc-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-zinc-100 border border-zinc-200 text-sm font-semibold text-zinc-800">
                    {review.initial}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-zinc-900 truncate">
                      {review.name}
                    </p>
                    <p className="text-xs text-zinc-400">
                      {review.date}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
