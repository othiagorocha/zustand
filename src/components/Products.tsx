"use client";
import React from "react";
import { useFetchRepos } from "@/queries/products";
import { Card } from "./Card";

export default function Products() {
  const { data } = useFetchRepos();
  console.log(data);

  return (
    <div className="grid grid-cols-10 gap-4 p-6">
      {data?.map((repo, i) => (
        <Card key={repo.id} product={repo} addToFavorite={() => {}} />
      ))}
    </div>
  );
}
