import React from "react";

export interface PageHeroProps {
  title: string | React.ReactNode;
  description: string | React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  buttons?: React.ReactNode;
  className?: string;
}

export const PageHero: React.FC<PageHeroProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
  buttons,
  className = "",
}) => {
  return (
    <section
      className={`relative min-h-[480px] sm:min-h-[520px] lg:min-h-[580px] flex items-center overflow-hidden bg-[#2F3B69] lg:bg-white border-b border-[#232D50] lg:border-zinc-200 ${className}`}
    >
      {/* Foto: a sangre en mobile con overlay azul marino estilo Inicio; a la derecha en desktop con degradado lateral blanco */}
      <div className="absolute inset-0 lg:left-auto lg:right-0 lg:w-[64%] h-full">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="h-full w-full object-cover object-center"
          fetchPriority="high"
        />
        {/* Overlay mobile estilo Inicio (azul marino corporativo, sin degradado vertical blanco) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1C2442]/75 via-[#2F3B69]/55 to-[#1C2442]/80 lg:hidden" />
        {/* Degradado desktop: fundido suave de izquierda a derecha hacia la foto */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent to-35% hidden lg:block" />
      </div>

      {/* Contenido: centrado y blanco en mobile (estilo Inicio); alineado a la izquierda con texto oscuro en desktop */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-20 sm:py-24 lg:py-32 w-full">
        <div className="max-w-2xl mx-auto text-center lg:text-left lg:mx-0 lg:max-w-xl space-y-6 lg:-translate-x-3">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white lg:text-[#111111] leading-[1.12] drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)] lg:drop-shadow-none">
            {title}
          </h1>
          {description && (
            <p className="text-base sm:text-lg text-white/95 lg:text-zinc-600 leading-relaxed max-w-lg mx-auto lg:mx-0 drop-shadow-[0_1px_6px_rgba(0,0,0,0.3)] lg:drop-shadow-none font-normal">
              {description}
            </p>
          )}
          {buttons && (
            <div className="pt-2 flex flex-wrap gap-4 items-center justify-center lg:justify-start max-lg:[&_a]:bg-white max-lg:[&_a]:text-[#2F3B69] max-lg:[&_a]:hover:bg-zinc-100 max-lg:[&_a]:shadow-lg max-lg:[&_a]:font-semibold max-lg:[&_a]:rounded-xl max-lg:[&_a]:px-7 max-lg:[&_a]:py-3 max-lg:[&_button]:bg-white max-lg:[&_button]:text-[#2F3B69] max-lg:[&_button]:hover:bg-zinc-100 max-lg:[&_button]:shadow-lg max-lg:[&_button]:font-semibold max-lg:[&_button]:rounded-xl max-lg:[&_button]:px-7 max-lg:[&_button]:py-3">
              {buttons}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
