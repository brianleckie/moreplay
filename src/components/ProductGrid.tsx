import type { Product } from "@/lib/supabase";
import ProductCard from "./ProductCard";

type Props = { products: Product[] };

export default function ProductGrid({ products }: Props) {
  if (products.length === 0) return null;

  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-[1px] bg-black">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
}
