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
      className={`relative min-h-[500px] lg:min-h-[580px] flex items-center overflow-hidden bg-white border-b border-zinc-200 ${className}`}
    >
      {/* Foto derecha con degradado de fundido */}
      <div className="absolute inset-0 lg:left-auto lg:right-0 lg:w-[64%] h-full">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="h-full w-full object-cover object-center"
          fetchPriority="high"
        />
        {/* Degradado mobile: overlay vertical suave para legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-white/20 lg:hidden" />
        {/* Degradado desktop: fundido suave de izquierda a derecha hacia la foto */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent to-35% hidden lg:block" />
      </div>

      {/* Contenido a la izquierda */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-24 lg:py-32 w-full">
        <div className="max-w-lg lg:max-w-xl space-y-6 lg:-translate-x-3">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#111111] leading-[1.12]">
            {title}
          </h1>
          {description && (
            <p className="text-base sm:text-lg text-zinc-600 leading-relaxed max-w-lg">
              {description}
            </p>
          )}
          {buttons && (
            <div className="pt-2 flex flex-wrap gap-4 items-center">
              {buttons}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
