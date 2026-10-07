import { create } from "zustand";

const usePortfolioStore = create((set) => ({
  mobileMenuOpen: false,
  activeSection: "home",

  setMobileMenuOpen: (value) => set({ mobileMenuOpen: value }),
  toggleMobileMenu: () =>
    set((state) => ({ mobileMenuOpen: !state.mobileMenuOpen })),

  setActiveSection: (id) => set({ activeSection: id }),
}));

export default usePortfolioStore;
