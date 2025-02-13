import { create } from "zustand";

const useProductStore = create((set) => ({
  selectedCategory: null,
  setSelectedCategory: (categoryId) => set({ selectedCategory: categoryId }),
}));

export default useProductStore;
