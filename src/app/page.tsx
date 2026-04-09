"use client";

export const dynamic = "force-dynamic";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import type { Product } from "@/lib/supabase";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("sold", false)
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Failed to load products:", error.message);
        setProducts([]);
        return;
      }

      setProducts(data ?? []);
    }

    fetchProducts();
  }, []);

  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <ProductGrid products={products} />
      <Footer />
    </main>
  );
}
