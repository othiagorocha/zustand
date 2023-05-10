'use client';
import { api } from '@/services/api';
import { useQuery } from '@tanstack/react-query';
import { Product } from './types';

async function getProducts() {
  const { data } = await api.get<Product[]>(`/posts`);

  return data
}

export function useFetchRepos() {
  return useQuery(['products'], getProducts);
}
