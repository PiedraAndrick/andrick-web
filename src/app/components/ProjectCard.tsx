"use client";

import { useRef, useState } from "react";
import Link from "next/link";

interface TechIcon {
  src: string;
  alt: string;
}

interface ImageItem {
  src: string;
  alt?: string;
}

interface ProjectCardProps {
  // Nuevo: múltiples imágenes (máx 6)
  images?: ImageItem[];

  // Compatibilidad con tu API actual (una sola imagen):
  imageSrc?: string;
  altText?: string;

  githubLink: string;
  techIcons?: TechIcon[];
  title: string;
  description: string
}

export default function ProjectCard({
  images,
  imageSrc,
  altText,
  githubLink,
  techIcons = [],
  title,
  description
}: ProjectCardProps) {
  // Soporta ambas APIs y limita a 6
  const derivedImages: ImageItem[] =
    (images && images.length > 0 ? images : [{ src: imageSrc ?? "", alt: altText }]).slice(0, 6);

  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const count = derivedImages.length;
  const canSlide = count > 1;

  const goTo = (i: number) => setIndex(((i % count) + count) % count);
  const next = () => canSlide && goTo(index + 1);
  const prev = () => canSlide && goTo(index - 1);

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (!canSlide) return;
    if (e.key === "ArrowRight") {
      e.preventDefault();
      next();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      prev();
    }
  };

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (!canSlide || touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const threshold = 40; // px
    if (dx > threshold) prev();
    if (dx < -threshold) next();
    touchStartX.current = null;
  };

  return (
    <div className="w-[400px] py-3 mr-1 rounded-lg border border-gray-200/40 bg-gray-900/40 shadow-sm backdrop-blur  text-center hover:shadow-lg transition-shadow">
      {/* Header: título/acción */}
      <div className="flex justify-end px-2">
        <Link
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs px-2 py-1 rounded-md border border-white/10 hover:bg-white/10 transition"
          aria-label="Abrir repositorio en GitHub"
        >
          GitHub
        </Link>
      </div>

      <h3 className="text-3xl text-gray-400">{title}</h3>
      <p>{description}</p>
      {/* Viewport del carrusel */}
      <div
  role="region"
  aria-label="Galería de imágenes del proyecto"
  tabIndex={0}
  onKeyDown={onKeyDown}
  onTouchStart={onTouchStart}
  onTouchEnd={onTouchEnd}
  className="relative mt-2 overflow-hidden rounded-md aspect-[4/3] outline-none bg-black/20 p-3 pb-8"
>
  {/* Track deslizante */}
  <div
    className="flex h-full transition-transform duration-300 ease-out"
    // Mover por una fracción (100 / count) por slide y fijar ancho total del track
    style={{ transform: `translateX(-${(index * 100) / count}%)`, width: `${count * 100}%` }}
  >
    {derivedImages.map((img, i) => (
      // Cada slide ocupa exactamente 1/N del track
      <div
        key={i}
        className="relative h-full shrink-0"
        style={{ width: `${100 / count}%` }}
      >
        {/* La imagen ocupa todo el slide y se adapta sin recortar */}
        <img
          src={img.src}
          alt={img.alt ?? `Imagen ${i + 1} del proyecto`}
          className="absolute inset-0 w-full h-full object-contain"
          loading={i === 0 ? "eager" : "lazy"}
        />
      </div>
    ))}
        </div>

        {/* Controles flechas */}
        {canSlide && (
          <>
            <button
              type="button"
              onClick={prev}
              aria-label="Imagen anterior"
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 hover:bg-black/60 px-2 py-1 text-white text-sm"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Imagen siguiente"
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 hover:bg-black/60 px-2 py-1 text-white text-sm"
            >
              ›
            </button>
          </>
        )}

        {/* Dots */}
        {canSlide && (
          <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
            {derivedImages.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Ir a la imagen ${i + 1}`}
                className={[
                  "h-2 w-2 rounded-full border border-white/40",
                  i === index ? "bg-white" : "bg-white/30 hover:bg-white/50",
                ].join(" ")}
              />
            ))}
          </div>
        )}
      </div>

      {/* Tech icons */}
      <div className="mt-4 flex justify-center gap-2 flex-wrap">
        {techIcons.map(({ src, alt }, i) => (
          <img key={i} src={src} alt={alt} title={alt} className="w-18 object-contain" />
        ))}
      </div>
    </div>
  );
}
