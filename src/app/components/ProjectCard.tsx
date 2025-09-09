"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import LightboxCarousel from "./LightboxCarousel";

interface TechIcon {
  src: string;
  alt: string;
}

interface ImageItem {
  src: string;
  alt?: string;
}

interface ProjectCardProps {
  images?: ImageItem[];       // máx 6
  imageSrc?: string;          // compat una sola imagen
  altText?: string;
  githubLink: string;
  techIcons?: TechIcon[];
  title: string;
  description: string;
}

export default function ProjectCard({
  images,
  imageSrc,
  altText,
  githubLink,
  techIcons = [],
  title,
  description,
}: ProjectCardProps) {
  const derivedImages: ImageItem[] = (
    images && images.length > 0
      ? images
      : [{ src: imageSrc ?? "", alt: altText }]
  ).slice(0, 6);

  const preview = derivedImages[0];
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="w-[400px] py-4 mr-1 rounded-lg border border-gray-200/40 bg-gray-900/40 shadow-sm backdrop-blur text-center hover:shadow-lg transition-shadow">
        {/* Header */}
        <div className="flex justify-between items-center px-3">
          <h3 className="text-lg font-semibold text-white/90">{title}</h3>
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

        <p className="px-4 mt-1 text-sm text-gray-400">{description}</p>

        {/* Preview: solo una imagen */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="mt-3 block w-full px-3"
          aria-label="Abrir galería de imágenes"
        >
          <div className="relative w-full overflow-hidden rounded-md bg-black/20 aspect-[16/10]">
            {preview?.src ? (
              <img
                src={preview.src}
                alt={preview.alt ?? "Imagen de portada del proyecto"}
                className="absolute inset-0 w-full h-full object-contain"
              />
            ) : (
              <div className="absolute inset-0 grid place-items-center text-gray-400 text-sm">
                Sin imagen
              </div>
            )}

            {/* Badge con cantidad de imágenes */}
            {derivedImages.length > 1 && (
              <span className="absolute bottom-2 right-2 text-[11px] px-2 py-0.5 rounded bg-black/60 text-white/90">
                +{derivedImages.length - 1} imágenes
              </span>
            )}
          </div>
        </button>

        {/* Tech icons */}
        <div className="mt-3 flex justify-center gap-2 flex-wrap px-3">
          {techIcons.map(({ src, alt }, i) => (
            <img key={i} src={src} alt={alt} title={alt} className="w-15 h-15 object-contain" />
          ))}
        </div>

        {/* CTA para abrir galería */}
        {derivedImages.length > 0 && (
          <div className="mt-3">
            <button
              onClick={() => setOpen(true)}
              className="text-sm px-3 py-1 rounded-md border border-white/10 hover:bg-white/10 transition"
            >
              Ver galería
            </button>
          </div>
        )}
      </div>

      {/* Lightbox modal */}
      {open && (
        <LightboxCarousel
          images={derivedImages}
          initialIndex={0}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}
