'use client';
import { api } from '@/services/api';
import { useQuery } from '@tanstack/react-query';
import { Repo } from './types';

async function getRepos() {
  const { data } = await api.get<Repo[]>(`/users/CarlosLevir/repos`);

  return data
}

export function useFetchRepos() {
  return useQuery(['repos'], getRepos);
}
