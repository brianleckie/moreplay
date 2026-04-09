"use client";

import { useRef, useState } from "react";
import type { Product } from "@/lib/supabase";

const WA_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

type Props = { product: Product };

export default function ProductCard({ product }: Props) {
  const { name, price, images, sold } = product;
  const scrollRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  function handleScroll() {
    const el = scrollRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    setProgress(maxScroll > 0 ? el.scrollLeft / maxScroll : 0);
  }

  function handleConsultar() {
    if (sold) return;
    const text = encodeURIComponent(`Hola! Me interesa: ${name}`);
    window.open(`https://wa.me/${WA_NUMBER}?text=${text}`, "_blank");
  }

  return (
    <article className="flex flex-col bg-black border border-white/10">
      {/* Carousel */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="relative flex overflow-x-auto hide-scrollbar snap-x snap-mandatory aspect-square"
      >
        {images.map((src, i) => (
          <div key={i} className="flex-shrink-0 w-full snap-start aspect-square">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={`${name} ${i + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Progress bar */}
      {images.length > 1 && (
        <div className="h-[3px] bg-[#222]">
          <div
            className="h-full bg-white transition-all duration-150"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
      )}

      {/* Info */}
      <div className="flex flex-col gap-1 p-3">
        <span className="text-sm font-bold uppercase tracking-tight text-white">
          {name}
        </span>
        <span className="text-sm text-white/60">{price}</span>
      </div>

      {/* Button */}
      <div className="p-3 pt-0">
        {sold ? (
          <button
            disabled
            className="w-full py-2 text-xs font-bold uppercase tracking-widest border border-white/10 text-white/30 cursor-not-allowed"
          >
            AGOTADO
          </button>
        ) : (
          <button
            onClick={handleConsultar}
            className="w-full py-2 text-xs font-bold uppercase tracking-widest border border-white text-white md:opacity-0 md:hover:opacity-100 transition-opacity duration-200"
          >
            CONSULTAR
          </button>
        )}
      </div>
    </article>
  );
}
