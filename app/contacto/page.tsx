"use client";

import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, ExternalLink, Check, Copy, ArrowRight } from "lucide-react";

interface SedeInfo {
  id: "oviedo" | "aviles";
  nombre: string;
  direccion: string;
  telefono: string;
  telHref: string;
  mapsUrl: string;
  mapEmbedSrc: string;
}

const sedes: SedeInfo[] = [
  {
    id: "oviedo",
    nombre: "Sede Oviedo",
    direccion: "C/ José Echegaray 2, bajo",
    telefono: "985 96 40 50",
    telHref: "tel:985964050",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Calle+Jos%C3%A9+Echegaray+2+Oviedo",
    mapEmbedSrc: "https://www.openstreetmap.org/export/embed.html?bbox=-5.8525%2C43.3615%2C-5.8445%2C43.3670&layer=mapnik&marker=43.3642%2C-5.8485",
  },
  {
    id: "aviles",
    nombre: "Sede Avilés",
    direccion: "C/ López Ocaña 13, Entresuelo C",
    telefono: "985 56 18 41",
    telHref: "tel:985561841",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Calle+L%C3%B3pez+Oca%C3%B1a+13+Avil%C3%A9s",
    mapEmbedSrc: "https://www.openstreetmap.org/export/embed.html?bbox=-5.9275%2C43.5525%2C-5.9190%2C43.5580&layer=mapnik&marker=43.5552%2C-5.9232",
  },
];

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    asunto: "",
    mensaje: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleCopyAddress = (direccion: string, id: string) => {
    navigator.clipboard.writeText(direccion);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="bg-white text-[#111111]">
      {/* 1. Hero: Estilo Inicio con imagen a sangre, overlay azul marino #2F3B69 y contenido centrado */}
      <section className="relative overflow-hidden bg-[#2F3B69] min-h-[560px] sm:min-h-[620px] lg:min-h-[700px] flex items-center justify-center border-b border-[#232D50]">
        {/* Foto de fondo con opacidad natural */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <img
            src="/images/contacto-hero.webp"
            alt="Sedes y atención al cliente - Abogados Asturias y Asociados"
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
              Contacto
            </h1>
            <p className="mt-4 text-xl sm:text-2xl text-blue-100 font-medium drop-shadow-[0_1px_6px_rgba(0,0,0,0.3)]">
              Estamos a tu disposición en nuestras sedes de Oviedo y Avilés
            </p>
            <p className="mt-4 text-base sm:text-lg text-white/90 leading-relaxed font-normal max-w-2xl mx-auto drop-shadow-[0_1px_6px_rgba(0,0,0,0.3)]">
              Consúltanos tu caso o solicita cita previa. Te atenderemos de forma cercana, confidencial y con la máxima rapidez.
            </p>

            {/* Botones centrados adaptados a fondo oscuro */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#formulario"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-zinc-100 text-[#2F3B69] font-semibold px-8 py-3.5 text-base rounded-xl shadow-lg transition-all hover:shadow-xl w-full sm:w-auto"
              >
                <span>Enviar consulta online</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
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

      <section id="formulario" className="py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Column 1: Contact Form */}
            <div className="lg:col-span-7">
              <h2 className="text-2xl font-semibold tracking-tight text-[#111111]">
                Envíanos tu consulta
              </h2>
              <p className="mt-2 text-sm text-zinc-600">
                Completa el formulario y nos pondremos en contacto contigo a la mayor brevedad.
              </p>

              {isSubmitted ? (
                <div className="mt-8 p-6 rounded-2xl border border-zinc-200 bg-zinc-50 space-y-4">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#2F3B69] shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-[#111111] text-base">
                        Mensaje enviado correctamente
                      </h3>
                      <p className="mt-1 text-sm text-zinc-600">
                        Hemos recibido tu solicitud. Uno de nuestros abogados revisará tu caso y te contactará cuanto antes.
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        nombre: "",
                        email: "",
                        telefono: "",
                        asunto: "",
                        mensaje: "",
                      });
                    }}
                    className="text-sm font-medium text-[#2F3B69] hover:underline pt-2 block"
                  >
                    Enviar otra consulta
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div>
                    <label
                      htmlFor="nombre"
                      className="block text-sm font-medium text-[#111111] mb-1.5"
                    >
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      required
                      value={formData.nombre}
                      onChange={handleInputChange}
                      placeholder="Nombre y apellidos"
                      className="w-full px-4 py-2.5 bg-white border border-zinc-300 rounded-lg text-[#111111] placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#2F3B69] focus:border-transparent text-sm transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-[#111111] mb-1.5"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="correo@ejemplo.com"
                        className="w-full px-4 py-2.5 bg-white border border-zinc-300 rounded-lg text-[#111111] placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#2F3B69] focus:border-transparent text-sm transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="telefono"
                        className="block text-sm font-medium text-[#111111] mb-1.5"
                      >
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        required
                        value={formData.telefono}
                        onChange={handleInputChange}
                        placeholder="Número de teléfono"
                        className="w-full px-4 py-2.5 bg-white border border-zinc-300 rounded-lg text-[#111111] placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#2F3B69] focus:border-transparent text-sm transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="asunto"
                      className="block text-sm font-medium text-[#111111] mb-1.5"
                    >
                      Asunto / Tipo de consulta
                    </label>
                    <select
                      id="asunto"
                      name="asunto"
                      required
                      value={formData.asunto}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 bg-white border border-zinc-300 rounded-lg text-[#111111] focus:outline-none focus:ring-2 focus:ring-[#2F3B69] focus:border-transparent text-sm transition-colors"
                    >
                      <option value="" disabled>
                        Selecciona un asunto o área de consulta
                      </option>
                      <option value="Derecho de familia y sucesiones">
                        Derecho de familia y sucesiones
                      </option>
                      <option value="Reclamación de impagos">
                        Reclamación de impagos
                      </option>
                      <option value="Derecho Civil General">
                        Derecho Civil General
                      </option>
                      <option value="Otra consulta">
                        Otra consulta
                      </option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="mensaje"
                      className="block text-sm font-medium text-[#111111] mb-1.5"
                    >
                      Mensaje
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      rows={5}
                      required
                      value={formData.mensaje}
                      onChange={handleInputChange}
                      placeholder="Explica brevemente los detalles de tu consulta legal..."
                      className="w-full px-4 py-2.5 bg-white border border-zinc-300 rounded-lg text-[#111111] placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#2F3B69] focus:border-transparent text-sm transition-colors resize-y"
                    />
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center font-medium rounded-lg px-6 py-3 bg-[#2F3B69] hover:bg-[#232D50] text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2F3B69] focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm shadow-sm"
                    >
                      {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Column 2: Exact office & contact information */}
            <div className="lg:col-span-5 space-y-6">
              {/* Central Email & Horario Block */}
              <div className="p-6 bg-zinc-50 rounded-2xl border border-zinc-200 space-y-5">
                <div>
                  <h3 className="text-xs font-semibold text-[#111111] uppercase tracking-wider mb-2">
                    Email central
                  </h3>
                  <a
                    href="mailto:despacho@abogadosasturias.com"
                    className="inline-flex items-center gap-2 text-sm text-zinc-700 hover:text-[#2F3B69] transition-colors font-medium"
                  >
                    <Mail className="w-4 h-4 text-[#2F3B69] shrink-0" />
                    <span>despacho@abogadosasturias.com</span>
                  </a>
                </div>

                <div className="border-t border-zinc-200/80 pt-4">
                  <h3 className="text-xs font-semibold text-[#111111] uppercase tracking-wider mb-3">
                    Horario de atención
                  </h3>
                  <div className="flex items-start gap-2.5 text-zinc-600 text-sm">
                    <Clock className="w-4 h-4 text-[#2F3B69] shrink-0 mt-0.5" />
                    <div className="space-y-1.5 text-sm">
                      <p>
                        <strong className="text-[#111111] font-medium">Lunes – Jueves:</strong> 10:00 a 14:00; 16:00 a 19:00
                      </p>
                      <p>
                        <strong className="text-[#111111] font-medium">Viernes:</strong> 09:00 a 16:00
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sedes Cards */}
              <div className="space-y-4">
                <h3 className="text-xs font-semibold text-[#111111] uppercase tracking-wider">
                  Nuestras Sedes
                </h3>

                <div className="space-y-3.5">
                  {sedes.map((sede) => {
                    const isCopied = copiedId === sede.id;

                    return (
                      <div
                        key={sede.id}
                        className="p-5 rounded-2xl border border-zinc-200 bg-zinc-50 hover:bg-white transition-colors"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="font-semibold text-base text-[#111111]">
                            {sede.nombre}
                          </h4>
                          <a
                            href={sede.mapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-medium text-[#2F3B69] hover:underline"
                          >
                            <span>Google Maps</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>

                        <div className="mt-3 space-y-2 text-sm text-zinc-600">
                          <div className="flex items-start justify-between gap-2">
                            <div className="flex items-start gap-2">
                              <MapPin className="w-4 h-4 text-[#2F3B69] shrink-0 mt-0.5" />
                              <span>{sede.direccion}</span>
                            </div>
                            <button
                              type="button"
                              onClick={() => handleCopyAddress(sede.direccion, sede.id)}
                              className="inline-flex items-center gap-1 text-xs text-zinc-500 hover:text-[#111111] transition-colors shrink-0"
                              title="Copiar dirección"
                            >
                              {isCopied ? (
                                <>
                                  <Check className="w-3 h-3 text-emerald-600" />
                                  <span className="text-emerald-600 font-medium">Copiada</span>
                                </>
                              ) : (
                                <>
                                  <Copy className="w-3 h-3" />
                                  <span>Copiar</span>
                                </>
                              )}
                            </button>
                          </div>
                          <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4 text-[#2F3B69] shrink-0" />
                            <a
                              href={sede.telHref}
                              className="font-medium text-[#111111] hover:text-[#2F3B69] transition-colors"
                            >
                              {sede.telefono}
                            </a>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección con los dos mapas: Oviedo y Avilés */}
      <section className="bg-zinc-50 border-t border-zinc-200/80 py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#111111]">
              Nuestras Sedes: Oviedo y Avilés
            </h2>
            <p className="mt-3 text-base text-zinc-600">
              Ubicaciones céntricas con fácil acceso y comunicación para atenderte personalmente.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {sedes.map((sede) => (
              <div
                key={sede.id}
                className="bg-white rounded-2xl border border-zinc-200 overflow-hidden shadow-xs flex flex-col justify-between"
              >
                {/* Cabecera de la sede */}
                <div className="p-6 pb-5 border-b border-zinc-100">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="text-xs font-semibold text-[#2F3B69] uppercase tracking-wider">
                        Sede Asturias
                      </span>
                      <h3 className="text-xl font-semibold text-[#111111] mt-0.5">
                        {sede.nombre}
                      </h3>
                    </div>
                    <a
                      href={sede.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-zinc-100 hover:bg-[#2F3B69] text-zinc-700 hover:text-white transition-colors"
                    >
                      <span>Abrir en Google Maps</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-zinc-600">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-[#2F3B69] shrink-0 mt-0.5" />
                      <span>{sede.direccion}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-[#2F3B69] shrink-0" />
                      <a
                        href={sede.telHref}
                        className="font-medium text-[#111111] hover:text-[#2F3B69] transition-colors"
                      >
                        {sede.telefono}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Mapa Embed */}
                <div className="relative w-full h-72 sm:h-80 bg-zinc-100">
                  <iframe
                    title={`Mapa de localización interactivo de ${sede.nombre}`}
                    src={sede.mapEmbedSrc}
                    loading="lazy"
                    className="w-full h-full border-0"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
