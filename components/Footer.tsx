import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2F3B69] text-white border-t border-[#232D50] text-sm">
      <div className="mx-auto max-w-6xl px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand & Presentation */}
          <div className="space-y-4">
            <Link href="/" className="inline-block" aria-label="Abogados Asturias y Asociados">
              <img
                src="/images/logo.webp"
                alt="Abogados Asturias y Asociados"
                className="h-10 md:h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-white/75 leading-relaxed text-sm">
              Despacho multidisciplinar con más de 25 años de experiencia en Asturias y ámbito nacional. Compromiso, rigor y atención personalizada.
            </p>
            <div className="pt-2">
              <a
                href="mailto:despacho@abogadosasturias.com"
                className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-white/80" />
                <span>despacho@abogadosasturias.com</span>
              </a>
            </div>
          </div>

          {/* Sedes & Teléfonos */}
          <div>
            <h3 className="text-xs font-semibold text-white/90 uppercase tracking-wider mb-4">
              Nuestras Sedes
            </h3>
            <div className="space-y-5">
              <div>
                <p className="font-semibold text-white mb-1">Sede Oviedo</p>
                <p className="flex items-start gap-2 text-white/75">
                  <MapPin className="w-4 h-4 text-white/80 shrink-0 mt-0.5" />
                  <span>C/ José Echegaray 2, bajo</span>
                </p>
                <p className="flex items-center gap-2 mt-1 text-white/75">
                  <Phone className="w-4 h-4 text-white/80 shrink-0" />
                  <a
                    href="tel:985964050"
                    className="hover:text-white transition-colors"
                  >
                    985 96 40 50
                  </a>
                </p>
              </div>

              <div>
                <p className="font-semibold text-white mb-1">Sede Avilés</p>
                <p className="flex items-start gap-2 text-white/75">
                  <MapPin className="w-4 h-4 text-white/80 shrink-0 mt-0.5" />
                  <span>C/ López Ocaña 13, Entresuelo C</span>
                </p>
                <p className="flex items-center gap-2 mt-1 text-white/75">
                  <Phone className="w-4 h-4 text-white/80 shrink-0" />
                  <a
                    href="tel:985561841"
                    className="hover:text-white transition-colors"
                  >
                    985 56 18 41
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-xs font-semibold text-white/90 uppercase tracking-wider mb-4">
              Áreas de Práctica
            </h3>
            <ul className="space-y-2.5 text-white/75">
              <li>
                <Link
                  href="/servicios/derecho-de-familia-y-sucesiones"
                  className="hover:text-white transition-colors"
                >
                  Derecho de familia y sucesiones
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/reclamacion-impagos"
                  className="hover:text-white transition-colors"
                >
                  Reclamación de impagos en toda España
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/derecho-civil-general"
                  className="hover:text-white transition-colors"
                >
                  Derecho Civil General
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios"
                  className="hover:text-white transition-colors font-medium text-white/90"
                >
                  Todos los servicios →
                </Link>
              </li>
            </ul>
          </div>

          {/* Horario y Enlaces */}
          <div>
            <h3 className="text-xs font-semibold text-white/90 uppercase tracking-wider mb-4">
              Horario de Atención
            </h3>
            <div className="space-y-3 text-white/75 mb-6">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-white/80 shrink-0 mt-0.5" />
                <div className="text-xs space-y-1">
                  <p>
                    <strong className="text-white">Lunes – Jueves:</strong>
                    <br />
                    10:00 a 14:00; 16:00 a 19:00
                  </p>
                  <p>
                    <strong className="text-white">Viernes:</strong>
                    <br />
                    09:00 a 16:00
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-xs font-semibold text-white/90 uppercase tracking-wider mb-2">
              Enlaces
            </h3>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-white/75">
              <Link href="/" className="hover:text-white transition-colors">
                Inicio
              </Link>
              <Link
                href="/sobre-nosotros"
                className="hover:text-white transition-colors"
              >
                Sobre nosotros
              </Link>
              <Link
                href="/servicios"
                className="hover:text-white transition-colors"
              >
                Servicios
              </Link>
              <Link
                href="/contacto"
                className="hover:text-white transition-colors"
              >
                Contacto
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#3A487B] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>© Abogados Asturias y Asociados. Más de 25 años de ejercicio profesional.</p>
          <p>Oviedo &amp; Avilés, Principado de Asturias</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
