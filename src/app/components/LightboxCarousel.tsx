"use client";

import { useEffect, useState } from "react";

interface ImageItem {
  src: string;
  alt?: string;
}

interface LightboxCarouselProps {
  images: ImageItem[];
  initialIndex?: number;
  onClose: () => void;
}

export default function LightboxCarousel({
  images,
  initialIndex = 0,
  onClose,
}: LightboxCarouselProps) {
  const [index, setIndex] = useState(initialIndex);
  const count = images.length;
  const canSlide = count > 1;

  const goTo = (i: number) => setIndex(((i % count) + count) % count);
  const prev = () => canSlide && goTo(index - 1);
  const next = () => canSlide && goTo(index + 1);

  // Escape para cerrar + flechas para navegar + bloqueo de scroll del body
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose, index, count]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Carrusel de imágenes del proyecto"
      className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4"
      onClick={(e) => {
        // Cierra si se hace click fuera del contenido
        if (e.currentTarget === e.target) onClose();
      }}
    >
      <div className="relative w-full max-w-[1000px]">
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          aria-label="Cerrar"
          className="absolute -top-10 right-0 md:top-0 md:-right-10 md:translate-x-full md:translate-y-0 text-white/80 hover:text-white text-3xl"
        >
          ×
        </button>

        {/* Contenedor del carrusel
            - Desktop: exactamente 1000x500 (max-w ya arriba y relación 2:1)
            - Mobile: se ajusta manteniendo 2:1
        */}
        <div className="w-full">
          <div className="relative w-full aspect-[2/1] overflow-hidden rounded-md bg-black">
            {/* Track */}
            <div
              className="absolute inset-0 flex h-full transition-transform duration-300 ease-out"
              style={{
                width: `${count * 100}%`,
                transform: `translateX(-${(index * 100) / count}%)`,
              }}
            >
              {images.map((img, i) => (
                <div
                  key={i}
                  className="relative h-full"
                  style={{ width: `${100 / count}%` }}
                >
                  <img
                    src={img.src}
                    alt={img.alt ?? `Imagen ${i + 1} del proyecto`}
                    className="absolute inset-0 w-full h-full object-contain"
                    loading={i === 0 ? "eager" : "lazy"}
                  />
                </div>
              ))}
            </div>

            {/* Flechas */}
            {canSlide && (
              <>
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Imagen anterior"
                  className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 hover:bg-black/70 px-3 py-1.5 text-white text-xl"
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Imagen siguiente"
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 hover:bg-black/70 px-3 py-1.5 text-white text-xl"
                >
                  ›
                </button>
              </>
            )}

            {/* Dots */}
            {canSlide && (
              <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    aria-label={`Ir a la imagen ${i + 1}`}
                    aria-current={i === index ? "true" : undefined}
                    className={[
                      "h-2.5 w-2.5 rounded-full border border-white/50",
                      i === index ? "bg-white" : "bg-white/30 hover:bg-white/50",
                    ].join(" ")}
                  />
                ))}
              </div>
            )}
          </div>

          <div className="mt-2 text-center text-sm text-white/80">
            {index + 1} / {count}
          </div>
        </div>
      </div>
    </div>
  );
}
