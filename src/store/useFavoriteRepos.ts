import { create } from "zustand"

type FavoriteRepoStore = {
  favoriteRepoIds: number[]
  addToFavorites: (id: number) => void
  removeFromFavorites: (id: number) => void
}

export const useFavoriteRepoStore = create<FavoriteRepoStore>((set) => ({
  favoriteRepoIds: [],
  addToFavorites: (repoId: number) => {
    set((state) => ({
      favoriteRepoIds: [...state.favoriteRepoIds, repoId]
    }))
  },
  removeFromFavorites: (repoId: number) => {
    set((state) => ({
      favoriteRepoIds: state.favoriteRepoIds.filter((id) => id !== repoId)
    }))
  },
}))
