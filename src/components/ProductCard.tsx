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
        <div className="h-[2px] bg-[#1a1a1a]">
          <div
            className="h-full bg-white/60 transition-all duration-150"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
      )}

      {/* Info */}
      <div className="flex flex-col gap-1 px-3 pt-3 pb-1">
        <span className="text-[11px] font-bold uppercase tracking-tight text-white leading-snug">
          {name}
        </span>
        <span className="text-[11px] text-white/50">{price}</span>
      </div>

      {/* Button */}
      <div className="px-3 pb-3 pt-2">
        {sold ? (
          <button
            disabled
            className="w-full py-2.5 text-[9px] font-bold uppercase tracking-[0.2em] border border-white/8 text-white/20 cursor-not-allowed"
          >
            AGOTADO
          </button>
        ) : (
          <button
            onClick={handleConsultar}
            className="w-full py-2.5 text-[9px] font-bold uppercase tracking-[0.2em] border border-white/30 text-white/80 active:bg-white active:text-black transition-colors duration-150 md:opacity-0 md:hover:opacity-100 md:focus:opacity-100"
          >
            CONSULTAR
          </button>
        )}
      </div>
    </article>
  );
}
