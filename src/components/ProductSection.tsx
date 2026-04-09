import type { Product } from "@/lib/supabase";
import ProductCard from "./ProductCard";
import PlaceholderCard from "./PlaceholderCard";

type Props = {
  title: string;
  products?: Product[];
  placeholders?: number;
};

export default function ProductSection({ title, products = [], placeholders = 4 }: Props) {
  const fillerCount = Math.max(0, placeholders - products.length);

  return (
    <section className="mt-12 md:mt-16">
      <div className="flex items-center gap-4 px-5 md:px-8 mb-4">
        <h2 className="text-[10px] font-bold tracking-[0.28em] text-white/40 uppercase whitespace-nowrap">
          {title}
        </h2>
        <div className="flex-1 border-t border-white/8" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-[1px] bg-black">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        {Array.from({ length: fillerCount }).map((_, i) => (
          <PlaceholderCard key={`ph-${i}`} />
        ))}
      </div>
    </section>
  );
}
