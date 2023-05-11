"use clint";

import { Repo } from "@/queries/repos/types";

type CardProps = {
  repo: Repo;
  addToFavorite: (id: number) => void;
};

export function Card({ repo, addToFavorite }: CardProps) {
  function handleCompleteTodo() {
    addToFavorite(repo.id);
  }

  return (
    <div className="flex flex-col justify-between text-white flex-wrap rounded-lg bg-[#414141] text-center gap-4 p-2 mb-4">
      <h2>{repo.name}</h2>
      <div className="flex items-center justify-center gap-2">
        <button className="bg-zinc-500 text-sm px-2 py-1 rounded-lg">
          Favoritar
        </button>
      </div>
    </div>
  );
}
