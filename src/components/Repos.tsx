"use client";
import React from "react";
import { useFetchRepos } from "@/queries/repos";
import { Card } from "./Card";
import { useFavoriteRepoStore } from "@/store/useFavoriteRepos";

export default function Repos() {
  const { data } = useFetchRepos("CarlosLevir");
  const hook = useFavoriteRepoStore();
  console.log(hook);

  return (
    <div className="grid grid-cols-5 gap-4 p-10">
      {data?.map((repo, i) => (
        <Card key={repo.id} repo={repo} addToFavorite={() => {}} />
      ))}
    </div>
  );
}
