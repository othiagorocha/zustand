"use clint";

import { Product } from "@/queries/products/types";

type CardProps = {
  product: Product;
  addToFavorite: (id: number) => void;
};

export function Card({ product, addToFavorite }: CardProps) {
  function handleCompleteTodo() {
    addToFavorite(product.id);
  }

  return (
    <div className="flex flex-col text-white flex-wrap rounded-lg bg-[#414141] text-center gap-4 p-2 mb-4">
      <h2>{product.title.slice(0, 10)}</h2>
      <div className="flex items-center justify-center gap-2">
        <button className="bg-zinc-500 text-sm px-2 py-1 rounded-lg">
          Favoritar
        </button>
      </div>
    </div>
  );
}
