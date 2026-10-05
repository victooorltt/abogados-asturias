import type { Metadata } from "next";
import { Phone, ShieldCheck, Scale, CheckCircle2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Derecho Civil General | Abogados Asturias y Asociados",
  description:
    "Especialistas en contratos, arrendamientos, compraventa de inmuebles, desahucios, reclamación de daños y responsabilidad civil en Asturias y toda España.",
};

const civilNeeds = [
  "Resolver un conflicto por un contrato (compraventa, alquiler, préstamo, donación…).",
  "Reclamar una cantidad que te deben.",
  "Actuar ante un incumplimiento contractual.",
  "Gestionar una compraventa de vivienda.",
  "Afrontar un desahucio o un problema de arrendamiento.",
  "Reclamar daños y perjuicios.",
  "Defenderte ante una negligencia.",
  "Resolver situaciones relacionadas con comunidades de bienes o división de propiedades.",
  "Proteger a personas con discapacidad (curatela, guarda de hecho).",
];

export default function DerechoCivilGeneralPage() {
  return (
    <div className="bg-white text-[#111111]">
      {/* Hero */}
      <PageHero
        title="Derecho Civil General"
        description="En nuestro despacho entendemos que los problemas legales no son solo cuestiones jurídicas: afectan a tu vida, a tu patrimonio y a tu tranquilidad. Por eso trabajamos el Derecho Civil desde la especialización real."
        imageSrc="/images/derecho-civil-general.webp"
        imageAlt="Derecho Civil General - Abogados Asturias"
        buttons={
          <Button href="/contacto" variant="primary" size="md">
            Consultar su caso
          </Button>
        }
      />

      {/* Especialización Real en Equipo */}
      <section className="py-16 lg:py-20 border-b border-zinc-100">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-4">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#111111]">
                Especialización real y equipo multidisciplinar
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-5 text-base sm:text-lg text-zinc-600 leading-relaxed">
              <p>
                No somos un único abogado que intenta abarcarlo todo. Somos un equipo amplio, donde cada profesional está especializado en un área concreta del Derecho Civil. Esto nos permite estudiar cada asunto con profundidad y ofrecer soluciones sólidas, prácticas y eficaces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Te ayudamos cuando necesitas */}
      <section className="py-16 lg:py-20 border-b border-zinc-100">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#111111]">
              Te ayudamos cuando necesitas:
            </h2>
            <p className="mt-3 text-base text-zinc-600">
              Asistencia legal personalizada y representación ante juzgados y tribunales:
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3.5 gap-x-8">
            {civilNeeds.map((need, idx) => (
              <div key={idx} className="flex items-start gap-3 py-1 text-zinc-700">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2F3B69] mt-2 shrink-0" />
                <span className="text-sm font-medium leading-relaxed">
                  {need}
                </span>
              </div>
            ))}
          </div>

          <p className="mt-10 text-base sm:text-lg text-zinc-600 leading-relaxed">
            Estudiamos cada caso de forma personalizada, explicándote con claridad tus opciones y acompañándote durante todo el proceso.
          </p>
        </div>
      </section>

      {/* Sección con color de acento #2F3B69: Seguridad Jurídica y Defensa Integral */}
      <section className="bg-[#2F3B69] text-white py-16 lg:py-24 border-t border-[#232D50]">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Foto realista de derecho civil - Más alta y grande */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative h-[420px] sm:h-[480px] lg:h-[540px] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                <img
                  src="/images/derecho-civil-acento.webp"
                  alt="Despacho jurídico con volúmenes de derecho civil y balanza"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>

            {/* Contenido */}
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold uppercase tracking-wider border border-white/20">
                Seguridad Jurídica Integral
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white leading-tight">
                Protegemos tu patrimonio, tus contratos y tu tranquilidad
              </h2>
              <p className="text-base sm:text-lg text-white/90 leading-relaxed font-normal">
                El Derecho Civil regula las relaciones más importantes de tu vida privada: tus contratos, tu vivienda, tu patrimonio y la responsabilidad por los daños que puedas sufrir o causar.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                  <ShieldCheck className="w-5 h-5 text-blue-200 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-base font-semibold text-white">Especialización real por materia</h3>
                    <p className="text-sm text-white/80 mt-1">Abogados dedicados en exclusiva a arrendamientos, accidentes de tráfico, contratos y responsabilidad civil.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                  <Scale className="w-5 h-5 text-blue-200 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-base font-semibold text-white">Asesoramiento preventivo y blindaje</h3>
                    <p className="text-sm text-white/80 mt-1">Revisión exhaustiva y redacción técnica de acuerdos para evitar litigios futuros y asegurar tu posición legal.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                  <CheckCircle2 className="w-5 h-5 text-blue-200 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-base font-semibold text-white">Defensa procesal en tribunales</h3>
                    <p className="text-sm text-white/80 mt-1">Defensa letrada rigurosa ante juzgados y frente a compañías aseguradoras para hacer valer tus derechos.</p>
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
              Consúltenos su asunto civil
            </h2>
            <p className="mt-2 text-zinc-600 max-w-xl text-base">
              Estudiaremos la documentación de su caso y le informaremos de las vías de actuación más convenientes.
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
