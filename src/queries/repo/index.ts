'use client';
import { api } from '@/services/api';
import { useQuery } from '@tanstack/react-query';

async function getRepos() {
  const { data } = await api.get(`/users/CarlosLevir/repos`);

  return data;
}

export function useFetchRepos() {
  return useQuery(['repos'], getRepos);
}
