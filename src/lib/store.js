import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useNovairStore = create(
  persist(
    (set, get) => ({
      wishlist: [],
      toggleWishlist: (productId) =>
        set((state) => ({
          wishlist: state.wishlist.includes(productId)
            ? state.wishlist.filter((id) => id !== productId)
            : [...state.wishlist, productId],
        })),
      isWishlisted: (productId) => get().wishlist.includes(productId),
      filters: { stock: "stock-1", search: "", fragranceFamily: "All", mood: "All", sortBy: "popularity" },
      setFilter: (key, value) => set((state) => ({ filters: { ...state.filters, [key]: value } })),
      resetFilters: (stock) => set({ filters: { stock, search: "", fragranceFamily: "All", mood: "All", sortBy: "popularity" } }),
    }),
    { name: "novair:store" }
  )
);
