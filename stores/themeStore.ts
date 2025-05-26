// stores/counterStore.ts

import { create } from "zustand";

interface ThemeState {
  theme: string;
  changeTheme: () => void;
}

const useThemeStore = create<ThemeState>((set) => ({
  theme: "dark", // Default theme
  changeTheme: () =>
    set((state) => ({ theme: state.theme === "dark" ? "light" : "dark" })),
}));

export default useThemeStore;
