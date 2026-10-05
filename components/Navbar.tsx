"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

interface SubService {
  name: string;
  href: string;
}

const servicesList: SubService[] = [
  {
    name: "Derecho de familia y sucesiones",
    href: "/servicios/derecho-de-familia-y-sucesiones",
  },
  {
    name: "Reclamación de impagos en toda España",
    href: "/servicios/reclamacion-impagos",
  },
  {
    name: "Derecho Civil General",
    href: "/servicios/derecho-civil-general",
  },
];

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setServicesDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#2F3B69] text-white border-b border-[#232D50] shadow-sm">
      <div className="mx-auto max-w-6xl px-6 flex items-center justify-between h-20">
        {/* Plain Logo as <img> without container/background */}
        <Link href="/" className="inline-block" aria-label="Abogados Asturias y Asociados">
          <img
            src="/images/logo.webp"
            alt="Abogados Asturias y Asociados"
            className="h-10 md:h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors ${
              isActive("/") && pathname === "/"
                ? "text-white font-semibold"
                : "text-white/80 hover:text-white"
            }`}
          >
            Inicio
          </Link>

          <Link
            href="/sobre-nosotros"
            className={`text-sm font-medium transition-colors ${
              isActive("/sobre-nosotros")
                ? "text-white font-semibold"
                : "text-white/80 hover:text-white"
            }`}
          >
            Sobre nosotros
          </Link>

          {/* Servicios Dropdown */}
          <div
            className="relative"
            ref={dropdownRef}
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <div className="flex items-center gap-1">
              <Link
                href="/servicios"
                className={`text-sm font-medium transition-colors ${
                  isActive("/servicios")
                    ? "text-white font-semibold"
                    : "text-white/80 hover:text-white"
                }`}
              >
                Servicios
              </Link>
              <button
                type="button"
                onClick={() => setServicesDropdownOpen((prev) => !prev)}
                className="p-1 text-white/70 hover:text-white transition-colors focus:outline-none"
                aria-label="Toggle servicios dropdown"
                aria-expanded={servicesDropdownOpen}
              >
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    servicesDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>

            {servicesDropdownOpen && (
              <div className="absolute top-full left-0 pt-2 w-72">
                <div className="bg-[#242E52] rounded-xl border border-[#3A487B] shadow-xl py-2">
                  <Link
                    href="/servicios"
                    className="block px-4 py-2 text-xs font-semibold text-white/50 uppercase tracking-wider hover:text-white"
                  >
                    Ver todos los servicios
                  </Link>
                  <div className="my-1 border-t border-[#3A487B]/60" />
                  {servicesList.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-4 py-2.5 text-sm text-white/90 hover:text-white hover:bg-[#2F3B69] transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            href="/contacto"
            className={`text-sm font-medium transition-colors ${
              isActive("/contacto")
                ? "text-white font-semibold"
                : "text-white/80 hover:text-white"
            }`}
          >
            Contacto
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-5">
          <a
            href="tel:985964050"
            className="flex items-center gap-2 text-sm font-medium text-white/90 hover:text-white transition-colors"
          >
            <Phone className="w-4 h-4 text-white" />
            <span>985 96 40 50</span>
          </a>

          <Link
            href="/contacto"
            className="bg-white text-[#2F3B69] hover:bg-zinc-100 font-semibold rounded-lg px-4 py-2 transition-colors text-sm shadow-xs"
          >
            Contacto
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-3">
          <a
            href="tel:985964050"
            className="p-2 text-white/90 hover:text-white transition-colors"
            aria-label="Llamar"
          >
            <Phone className="w-5 h-5" />
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="p-2 text-white hover:text-white/80 focus:outline-none"
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#242E52] border-t border-[#3A487B] px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3">
            <Link
              href="/"
              className={`text-base font-medium py-1 ${
                isActive("/") && pathname === "/"
                  ? "text-white font-semibold"
                  : "text-white/80"
              }`}
            >
              Inicio
            </Link>

            <Link
              href="/sobre-nosotros"
              className={`text-base font-medium py-1 ${
                isActive("/sobre-nosotros")
                  ? "text-white font-semibold"
                  : "text-white/80"
              }`}
            >
              Sobre nosotros
            </Link>

            {/* Mobile Servicios Collapsible */}
            <div className="py-1">
              <div className="flex items-center justify-between">
                <Link
                  href="/servicios"
                  className={`text-base font-medium ${
                    isActive("/servicios")
                      ? "text-white font-semibold"
                      : "text-white/80"
                  }`}
                >
                  Servicios
                </Link>
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen((prev) => !prev)}
                  className="p-1 text-white/70 focus:outline-none"
                  aria-label="Toggle mobile servicios"
                >
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      mobileServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              {mobileServicesOpen && (
                <div className="mt-2 pl-4 border-l-2 border-[#3A487B] flex flex-col space-y-2 py-1">
                  {servicesList.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="text-sm text-white/80 hover:text-white py-1"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/contacto"
              className={`text-base font-medium py-1 ${
                isActive("/contacto")
                  ? "text-white font-semibold"
                  : "text-white/80"
              }`}
            >
              Contacto
            </Link>

            <div className="pt-4 border-t border-[#3A487B] flex flex-col gap-3">
              <a
                href="tel:985964050"
                className="flex items-center gap-2 text-sm font-medium text-white/90"
              >
                <Phone className="w-4 h-4 text-white" />
                <span>985 96 40 50</span>
              </a>

              <Link
                href="/contacto"
                className="w-full text-center bg-white text-[#2F3B69] hover:bg-zinc-100 font-semibold rounded-lg px-4 py-2.5 transition-colors text-sm shadow-xs"
              >
                Solicitar Consulta
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
