'use client';
import React from 'react';
import { useFetchRepos } from '@/queries/repo';

export default function Repos() {
  const { data } = useFetchRepos();
  console.log(data);

  return <div>Repos</div>;
}
