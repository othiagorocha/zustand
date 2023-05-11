'use client';
import { api } from '@/services/api';
import { QueryFunctionContext, useQuery } from '@tanstack/react-query';
import { Repo } from './types';

async function getRepos(ctx: QueryFunctionContext) {
  const [, userId] = ctx.queryKey
  const { data } = await api.get<Repo[]>(`/users/${userId}/repos`);

  return data
}

export function useFetchRepos(userId: string) {
  return useQuery(['repos', userId], getRepos);
}
